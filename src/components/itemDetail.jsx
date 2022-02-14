import { Button, Card, ListGroup } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

const Item = ({ product }) => {
	const { addItem } = useContext(CartContext);
	const [added, setAdded] = useState(false);
	const { title, price, category, description, image } = product;
	const [quantity, setQuantity] = useState(1);
	const navigate = useNavigate();

	function showCheckout() {
		addItem(product, quantity);
		setAdded(true);
	}
	const checkOut = () => {
		navigate(`/Cart`);
	};

	return (
		<Card>
			<Card.Img variant="top" src={image} />
			<Card.Body>
				<Card.Text>{title}</Card.Text>
				<Card.Title>${price}</Card.Title>
			</Card.Body>
			<Card.Header>Detalles</Card.Header>
			<ListGroup className="list-group-flush">
				<ListGroup.Item>{description}</ListGroup.Item>
			</ListGroup>
			<Card.Body>
				{added ? (
					<div>
						<Button onClick={() => checkOut()}>terminar mi compra</Button>
					</div>
				) : (
					<ItemCount count={quantity} stock={10} setQuantity={setQuantity} />
				)}
				<Button className="btn" onClick={() => showCheckout()}>
					{" "}
					añadir al carrito{" "}
				</Button>
			</Card.Body>
		</Card>
	);
};
export default Item;
