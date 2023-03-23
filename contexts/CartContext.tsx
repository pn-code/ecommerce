"use client";
import React from "react";

const CartContext = React.createContext([]);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = React.useState([]);

    return (
        <CartContext.Provider value={[cart, setCart]}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const [cart, setCart] = React.useContext(CartContext);

    const handleCart = (value: []) => {
        setCart(value);
    };

    return { value: cart, onChange: handleCart };
};
