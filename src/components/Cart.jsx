import { CartContext } from "./CartContext";
import { useContext } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
	const { items } = useContext(CartContext);
	const navigate = useNavigate();
	console.log(items, "sopping cart");

	const ReturnToLanding = () => {
		navigate(`/`);
	};

	if (items.length > 0) {
		return items.map((item) => (
			<Row key={item.id} className=" col-3 ">
				<Card>
					<Card.Img variant="left" src={item.producto.image} />
					<Card.Body>
						<Card.Title>{item.producto.title} </Card.Title>
						<Card.Text>
							{" "}
							Lleva {item.quantity}, por el precio ${item.producto.price}
						</Card.Text>
					</Card.Body>
				</Card>
			</Row>
		));
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
export default ShoppingCart;
