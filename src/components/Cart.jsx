import { CartContext } from "./CartContext";
import { useContext, useState } from "react";
import {
	Card,
	Col,
	Row,
	Button,
	Form,
	Alert,
	Container,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Cart = () => {
	const { items } = useContext(CartContext);
	const { addToDataBase } = useContext(CartContext);
	const { removeItem } = useContext(CartContext);
	const [show, setShow] = useState(false);
	const [sameEmail, setSameEmail] = useState(true);
	const [id, setId] = useState("1");
	const navigate = useNavigate();

	const ReturnToLanding = () => {
		navigate(`/`);
	};
	const email1 = useRef(null);
	const email2 = useRef(null);

	const sameEmailhandler = () => {
		if (email1?.current?.value === email2?.current?.value) {
			setSameEmail(false);
		} else {
			setSameEmail(true);
		}
	};

	const checkoutHandler = async () => {
		setId(await addToDataBase());
		setShow(true);
	};

	if (items.length > 0) {
		return (
			<Container>
				<Row>
					{items.map((item) => (
						<Col key={item.producto.id} className=" col-3 ">
							<Card className="cart-card">
								<Card.Img variant="left" src={item.producto.image} />
								<Card.Body>
									<Card.Title>{item.producto.title} </Card.Title>
									<Card.Text>
										{" "}
										Lleva {item.quantity}, por el precio ${item.producto.price}
									</Card.Text>
									<Button
										className="btn-itemListContainer"
										onClick={() => {
											removeItem(item);
										}}
									>
										{" "}
										Eliminar producto
									</Button>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
				<Row>
					<Form className="cart-form">
						<Row>
							<Col>
								<Form.Group className="mb-3">
									<Form.Label>Correo electronico</Form.Label>
									<Form.Control
										ref={email1}
										type="email"
										placeholder="Ingrese su correo electronico"
										onChange={() => sameEmailhandler()}
									/>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group className="mb-3">
									<Form.Label>Confirmar Correo electronico</Form.Label>
									<Form.Control
										ref={email2}
										placeholder="ingrese nuevamente su correo electronico"
										type="email"
										onChange={() => sameEmailhandler()}
									/>
								</Form.Group>
							</Col>
						</Row>
						<Row>
							<Col>
								<Form.Group className="mb-3 " id="formBasicName">
									<Form.Label>Nombre</Form.Label>
									<Form.Control type="nombre" placeholder="ingrese su nombre" />
								</Form.Group>
							</Col>
							<Col>
								<Form.Group className="mb-3 " id="formBasicSecondName">
									<Form.Label>Apellido</Form.Label>
									<Form.Control
										type="apellido"
										placeholder="Ingrese su apellido"
									/>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group className="mb-3 " controlId="formBasicPhone">
									<Form.Label>numero telefonico</Form.Label>
									<Form.Control
										type="telefono"
										placeholder="Ingrese su numero de telefono"
									/>
								</Form.Group>
							</Col>
						</Row>

						<>
							<Alert show={show} variant="success">
								<Alert.Heading>
									Su pedido ha sido guardado con éxito{" "}
								</Alert.Heading>
								<p>
									muchas gracias por hacer el pedido, su código de seguimiento
									es: {id}
								</p>
								<hr />
								<div className="d-flex justify-content-end">
									<Button
										onClick={() => ReturnToLanding()}
										variant="outline-success"
										className="btn-itemListContainer"
									>
										Volver a la página principal
									</Button>
								</div>
							</Alert>
							{!show && (
								<Button
									className="btn-itemListContainer"
									onClick={() => checkoutHandler()}
									disabled={sameEmail}
								>
									CheckOut
								</Button>
							)}
						</>
					</Form>
				</Row>
			</Container>
		);
	} else
		return (
			<Row>
				<Col>
					<div>Lamentablemente no hay ningún producto en el carrito :C</div>
				</Col>
				<Col>
					<Button onClick={() => ReturnToLanding()}>
						{" "}
						Volver a la página principal
					</Button>
				</Col>
			</Row>
		);
};
export default Cart;
