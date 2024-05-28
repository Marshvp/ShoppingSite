import { createContext, useState, useContext  } from "react";


const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems((prev) => [...prev, item])
    };

    const removeFromCart = (item) => {
        setCartItems((prev) => prev.filter((i) => i.id !== item.id));
    };

    const checkOut = () => {
        setCartItems([]);
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, checkOut }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    return useContext(CartContext);
};