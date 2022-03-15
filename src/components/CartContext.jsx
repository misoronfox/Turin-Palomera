import { useState, createContext } from "react";
import { addProduct } from "../Firebase";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [items, setItems] = useState([]);
	const [quantityItems, setQuantityItems] = useState([0]);

	const addItem = (producto, quantity) => {
		if (items.length !== 0) {
			const index = items.findIndex((x) => {
				return x.producto.id === producto.id;
			});

			if (index !== -1) {
				const newItem = items;
				newItem[index].quantity = newItem[index].quantity + quantity;
				setItems(newItem);
			} else {
				setItems([...items, { producto, quantity }]);
			}
		} else {
			setItems([{ producto, quantity }]);
		}
		setQuantityItems(quantityItems + quantity);
	};

	const cartItems = () => {
		return items.length;
	};

	const removeItem = (Item) => {
		setItems(items.filter((item) => item !== Item));
	};

	const clearCart = () => {
		setItems([]);
	};

	const totalCart = () => {
		return items.reduce(
			(items, product) => items + product.price * product.cant,
			0
		);
	};

	const totalProduct = () => {
		return items.reduce(
			(quantityItems, items) => (quantityItems = quantityItems + items.cant),
			0
		);
	};

	const addToDataBase = () => {
		const date = getCurrentDate();
		return addProduct(items, date);
	};

	return (
		<CartContext.Provider
			value={{
				items,
				cartItems,
				addItem,
				removeItem,
				clearCart,
				totalCart,
				totalProduct,
				addToDataBase,
			}}
		>
			{children}
		</CartContext.Provider>
	);

	function getCurrentDate(separator = "") {
		let newDate = new Date();
		let date = newDate.getDate();
		let month = newDate.getMonth() + 1;
		let year = newDate.getFullYear();

		return `${year}${separator}${
			month < 10 ? `0${month}` : `${month}`
		}${separator}${date}`;
	}
};
