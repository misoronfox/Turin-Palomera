import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Item = ({ product }) => {
	const { id, title, price, category, description, image } = product;
	const navigate = useNavigate();

	const showDetails = () => {
		navigate(`/Item/${id}`);
		console.log(id, "id en item");
	};

	return (
		<Card className="container form-control body">
			<Card.Img variant="top" src={image} className="card-img-top" />
			<Card.Body>
				<Card.Text>{title}</Card.Text>
				<Card.Title>${price}</Card.Title>
			</Card.Body>
			<Card.Header>
				<Button
					onClick={() => showDetails()}
					className="btn btn-outline-primary"
				>
					Mostrar más
				</Button>
			</Card.Header>
		</Card>
	);
};
export default Item;
