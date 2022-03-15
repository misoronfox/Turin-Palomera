import { Col } from "react-bootstrap";
import Item from "./Item";

const ItemList = ({ products }) => {
	return (
		<>
			{products.map((product) => (
				<Col key={product.id} className=" item-listContainer col-3 ">
					<Item key={product.id} product={product} />
				</Col>
			))}
		</>
	);
};
export default ItemList;
