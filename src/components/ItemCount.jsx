import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const ItemCount = ({ count, stock, setQuantity }) => {
	const DecreaseCounter = (count, stock) => {
		if (count > 0) {
			count = count - 1;
			setQuantity(count);
		}
		return count;
	};
	const IncreaseCounter = (count, stock) => {
		if (count < stock) {
			count = count + 1;
			setQuantity(count);
		}
		return count;
	};

	return (
		<Row className="justify-content-md-center">
			<Col>
				<Button
					onClick={() => DecreaseCounter(count, stock)}
					className="btn  btn-itemListContainer"
				>
					<i className="bi bi-arrow-left-circle"></i>
				</Button>
			</Col>

			<Col>
				<p>{count}</p>
			</Col>

			<Col>
				<Button
					onClick={() => IncreaseCounter(count, stock)}
					className="btn btn-itemListContainer "
				>
					<i className="bi bi-arrow-right-circle"></i>
				</Button>
			</Col>
		</Row>
	);
};
export default ItemCount;
