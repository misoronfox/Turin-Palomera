import { Container, Row } from "react-bootstrap";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductsFromCategory, getAllProducts } from "../services/Products";

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		let mounted = true;
		if (id) {
			getProductsFromCategory(id).then((items) => {
				if (mounted) {
					console.log(items);
					setProducts(items);
				}
			});
		} else {
			getAllProducts().then((items) => {
				if (mounted) {
					setProducts(items);
				}
			});
		}
		return () => (mounted = false);
	}, [id]);

	return (
		<Container>
			<Row>
				<ItemList products={products} />
			</Row>
		</Container>
	);
};
export default ItemListContainer;
