import React from "react";
import { Button } from "react-bootstrap";

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
		<div className="row">
			<div className="col">
				<Button onClick={() => DecreaseCounter(count, stock)} className="btn ">
					<i className="bi bi-arrow-left-circle"></i>
				</Button>
			</div>

			<div className="col">
				<p>{count}</p>
			</div>

			<div className="col">
				<Button onClick={() => IncreaseCounter(count, stock)} className="btn ">
					<i className="bi bi-arrow-right-circle"></i>
				</Button>
			</div>
		</div>
	);
};
export default ItemCount;
