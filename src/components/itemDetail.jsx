import { Button, Card, ListGroup } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

const Item = ({ product }) => {
	const { addItem } = useContext(CartContext);
	const [added, setAdded] = useState(false);
	const { title, price, category, description, image } = product;
	const [quantity, setQuantity] = useState(0);
	const navigate = useNavigate();

	const getRandomInt = () => {
		var stock = Math.random() * (10 - 1) + 1;
		stock = Math.round(stock);
		return stock;
	};

	function showCheckout() {
		document.getElementById("CheckOut").classList.toggle("hidden");
		addItem(product, quantity);
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
				<ItemCount
					count={quantity}
					stock={getRandomInt()}
					setQuantity={setQuantity}
				/>
				<Button className="btn" onClick={() => showCheckout()}>
					{" "}
					añadir al carrito{" "}
				</Button>
				<Button id="CheckOut" className="hidden" onClick={() => checkOut()}>
					terminar mi compra
				</Button>
			</Card.Body>
		</Card>
	);
};
export default Item;
