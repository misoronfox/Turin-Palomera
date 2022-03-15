import { Button, Card, Col, Row, ListGroup, Container } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

const Item = ({ product }) => {
	const { addItem } = useContext(CartContext);
	const [added, setAdded] = useState(false);
	const { title, price, description, image } = product;
	const [quantity, setQuantity] = useState(1);
	const navigate = useNavigate();

	function onAdd() {
		addItem(product, quantity);
		setAdded(true);
	}
	const checkOut = () => {
		navigate(`/Cart`);
	};

	return (
		<Col className=" col-4 ">
			<Card className="itemDetail">
				<Card.Img className="card-image-top" variant="top" src={image} />
				<Card.Body>
					<Card.Text>{title}</Card.Text>
					<Card.Title>${price}</Card.Title>
				</Card.Body>
				<Card.Header>Detalles</Card.Header>
				<ListGroup className="list-group-flush">
					<ListGroup.Item>{description}</ListGroup.Item>
				</ListGroup>
				<Container className="justify-content-md-center">
					<Card.Body>
						{added ? (
							<Col>
								<Button
									className="btn-itemListContainer"
									onClick={() => checkOut()}
								>
									terminar mi compra
								</Button>
							</Col>
						) : (
							<ItemCount
								count={quantity}
								stock={10}
								setQuantity={setQuantity}
							/>
						)}
						<Row className="justify-content-md-center">
							<Col>
								<Button
									className="btn btn-itemListContainer"
									onClick={() => onAdd(product, quantity)}
								>
									{" "}
									añadir al carrito{" "}
								</Button>
							</Col>
						</Row>
					</Card.Body>
				</Container>
			</Card>
		</Col>
	);
};
export default Item;
