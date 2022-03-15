import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Item = ({ product }) => {
	const { id, title, price, image } = product;
	const navigate = useNavigate();

	const showDetails = () => {
		navigate(`/Item/${id}`);
	};

	return (
		<Card className="container item-itemListContainer body">
			<Card.Img variant="top" src={image} className="card-img-top" />
			<Card.Body>
				<Card.Text>{title}</Card.Text>
				<Card.Title>$ {price}</Card.Title>
			</Card.Body>
			<Card.Header>
				<Button onClick={() => showDetails()} className="btn-itemListContainer">
					Mostrar más
				</Button>
			</Card.Header>
		</Card>
	);
};
export default Item;
