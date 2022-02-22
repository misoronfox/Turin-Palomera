import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [items, setItems] = useState([]);
	const [quantityItems, setQuantityItems] = useState([0]);

	const addItem = (producto, quantity) => {
		if (items.length !== 0) {
			const index = items.findIndex((x) => {
				return x.producto.id === producto.id;
			});
			console.log("el valor del index es ", index);
			if (index !== -1) {
				const newItem = items;
				newItem[index].quantity = newItem[index].quantity + quantity;
				setItems(newItem);
				console.log("newItem", newItem);
			} else {
				console.log("no existía antes en la lista", [
					...items,
					{ producto, quantity },
				]);
				setItems([...items, { producto, quantity }]);
			}
		} else {
			console.log("no tenía nada en mi carrito uwu");
			setItems([{ producto, quantity }]);
		}
		setQuantityItems(quantityItems + quantity);
	};

	const cartItems = () => {
		return items.length;
	};

	return (
		<CartContext.Provider value={{ items, cartItems, addItem }}>
			{children}
		</CartContext.Provider>
	);
};
