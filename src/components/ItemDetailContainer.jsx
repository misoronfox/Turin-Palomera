import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getProductsById } from "../Firebase";

const ItemDetailContainer = () => {
	const { id } = useParams();
	const [product, setProduct] = useState({});
	console.log(id, "itemDetailContainer");

	useEffect(() => {
		let mounted = true;
		getProductsById(id).then((item) => {
			if (mounted) {
				console.log(item);
				setProduct(item);
			}
		});
		return () => (mounted = false);
	}, [id]);

	return (
		<Container className=" container">
			<Row className=" row">
				<ItemDetail className="col" product={product} />
			</Row>
		</Container>
	);
};
export default ItemDetailContainer;
