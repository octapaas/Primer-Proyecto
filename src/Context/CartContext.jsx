import { createContext, useContext, useState } from "react";

export const CartContext = createContext();


export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart debe ser usado dentro de un Provider');
    }
    return context;
}

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity) => {

        const itemInCart = cart.find(item => item.id === product.id);

        if (itemInCart) {
            const updatedCart = cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
            );
            setCart(updatedCart);
        } else {
            setCart(prevCart => [...prevCart, { ...product, quantity }]);
        }
    };

    const clearCart = () => {
        setCart([]);
    }

    const removeItem = (productId) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
    };

    const decreaseQuantity = (productId) => {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };


    const isInCart = (productId) => {
        return cart.some(item => item.id === productId);
    };

    const getCartQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    }

    const getCartTotal = () => {
        return cart.reduce((total, item) => total + item.precio * item.quantity, 0);
    }

    const getCurrentQuantity = (productId) => {
        const item = cart.find(item => item.id === productId);
        return item ? item.quantity : 0;
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, getCartQuantity, getCartTotal, removeItem, isInCart, decreaseQuantity, getCurrentQuantity }}>
            {children}
        </CartContext.Provider>
    );

}