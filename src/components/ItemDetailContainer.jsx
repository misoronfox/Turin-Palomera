import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getProductsById } from "../Firebase";

const ItemDetailContainer = () => {
	const { id } = useParams();
	const [product, setProduct] = useState({});

	useEffect(() => {
		let mounted = true;
		getProductsById(id).then((item) => {
			if (mounted) {
				setProduct(item);
			}
		});
		return () => (mounted = false);
	}, [id]);

	return (
		<Container className="container detailContainer">
			<Row className="justify-content-md-center">
				<ItemDetail product={product} />
			</Row>
		</Container>
	);
};
export default ItemDetailContainer;
