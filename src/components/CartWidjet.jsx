import { useContext } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";

const CartWidjet = () => {
	const { items } = useContext(CartContext);
	const navigate = useNavigate();
	const checkOut = () => {
		navigate(`/Cart`);
	};
	return (
		<div>
			<i onClick={checkOut} className="bi bi-cart bi-icon-m">
				{items.length}
			</i>
		</div>
	);
};
export default CartWidjet;
