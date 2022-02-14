import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [items, setItems] = useState([]);
	const [quantityItems, setQuantityItems] = useState([]);

	const addItem = (producto, quantity) => {
		if (items.length !== 0) {
			const index = items.findIndex((x) => {
				return x.producto.id === producto.id;
			});
			if (index !== -1) {
				const newItem = items;
				newItem[quantity] = newItem[index].quantity + quantity;
				setItems(newItem);
				console.log("newItem", newItem);
			} else setItems([...items, { producto, quantity: quantity }]);
		} else setItems([{ producto, quantity: quantity }]);
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
