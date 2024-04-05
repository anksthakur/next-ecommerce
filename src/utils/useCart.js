import React, { useContext, useEffect, useState } from 'react';
import { ProductCtx } from '../components/Provider';

export const useCart = () => {
    // Retrieve cart items and setCartItem function from context
    const { cartItem, setCartItem } = useContext(ProductCtx);
    // Initialize cartCount and cartTotal states
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    // Populate cart items from localStorage when component mounts or when cartItem changes
    useEffect(() => {
        // Updated this useEffect to include additional checks on cartItem
        if (Array.isArray(cartItem)) {
            setCartCount(cartItem.length);
            findTotalPrice();
            populateCartItem();
        } else {
            // If cartItem is not an array, reset it to an empty array
            console.error("cartItem is not an array");
            setCartItem([]);
        }
    }, [cartItem]);
    

    // Function to populate cart items from localStorage
    const populateCartItem = () => {
        if (cartItem.length === 0) {
            const product = localStorage.getItem("products");
            if (product) {
                const temp = JSON.parse(product);
                setCartItem(temp);
            }
        }
    };

    // Function to calculate total price of items in the cart
    const findTotalPrice = () => {
        let amount = 0;
        if (Array.isArray(cartItem)) {
            cartItem.forEach(item => {
                amount += (item.price / 100) * item.quantity;
            });
        }
        setCartTotal(amount);
    };

    // Function to add item to cart
    const addItem = (product) => {
        if (Array.isArray(cartItem)) {
            const existingProductIndex = cartItem.findIndex((item) => item.id === product.id);
            const updatedCart = [...cartItem];
            if (existingProductIndex !== -1) {
                updatedCart[existingProductIndex].quantity += 1;
            } else {
                updatedCart.push({ ...product, quantity: 1 });
            }
            localStorage.setItem('products', JSON.stringify(updatedCart));
            setCartItem(updatedCart);
        } else {
            console.error("cartItem is not an array");
        }
    };

    // Function to delete item by ID
    const deleteById = (productId) => {
        if (Array.isArray(cartItem)) {
            const newProducts = cartItem.filter(product => productId !== product.id);
            localStorage.setItem('products', JSON.stringify(newProducts));
            setCartItem(newProducts);
        } else {
            console.error("cartItem is not an array");
        }
    };

    // Function to delete all items from cart
    const deleteAllItems = () => {
        localStorage.removeItem("products");
        setCartItem([]);
    };

    // Function to increment quantity of an item in cart
    const incrementcartItem = (productId) => {
        if (Array.isArray(cartItem)) {
            const newProducts = cartItem.map(item => {
                if (item.id === productId) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    };
                } else {
                    return item;
                }
            });
            localStorage.setItem('products', JSON.stringify(newProducts));
            setCartItem(newProducts);
        } else {
            console.error("cartItem is not an array");
        }
    };

    // Function to decrement quantity of an item in cart
    const decrementcartItem = (productId) => {
        if (Array.isArray(cartItem)) {
            const newProducts = cartItem.map(item => {
                if (item.id === productId && item.quantity > 1) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    };
                } else {
                    return item;
                }
            });
            localStorage.setItem('products', JSON.stringify(newProducts));
            setCartItem(newProducts);
        } else {
            console.error("cartItem is not an array");
        }
    };

    return {
        cartCount,
        cartItem,
        cartTotal,
        addItem,
        deleteById,
        deleteAllItems,
        incrementcartItem,
        decrementcartItem
    };
};
