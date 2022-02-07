import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [items, setItems] = useState([]);

	const cartItems = () => {
		return items.length;
	};

	const addItem = (producto, quantity) => {
		producto.quantity = quantity;
		setItems([...items, producto]);
	};

	return (
		<CartContext.Provider value={{ items, cartItems, addItem }}>
			{children}
		</CartContext.Provider>
	);
};
