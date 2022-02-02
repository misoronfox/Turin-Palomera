import ItemCount from "./ItemCount";
import { Card, ListGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Item = ({ product }) => {
	const { id, title, price, category, description, image } = product;
	const navigate = useNavigate();

	const showDetails = () => {
		navigate(`/Item/${id}`);
		console.log(id, "caca");
	};

	return (
		<Card className="container form-control body">
			<Card.Img variant="top" src={image} className="card-img-top" />
			<Card.Body>
				<Card.Text>{title}</Card.Text>
				<Card.Title>${price}</Card.Title>
			</Card.Body>
			<Card.Header>Detalles</Card.Header>
			<ListGroup className="list-group-flush">
				<ListGroup.Item>{description}</ListGroup.Item>
			</ListGroup>
			<Card.Body>
				<Button
					onClick={() => showDetails()}
					className="btn btn-outline-primary"
				>
					Mostrar más
				</Button>
				<ItemCount />
			</Card.Body>
		</Card>
	);
};
export default Item;
