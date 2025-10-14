import React, { createContext, useState } from 'react'
import all_products from '../assets/all_product';



export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < all_products.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}


const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                const item = all_products.find((product) => product.id === Number(itemId));
                if (item) {
                    totalAmount += item.new_price * cartItems[itemId];
                    console.log(item);
                }
            }
        }
        return totalAmount;
    }


    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                totalItems += cartItems[itemId];
            }
        }
        return totalItems;
    }


    const contextValue = { all_products, cartItems, addToCart, removeFromCart,getTotalCartAmount, getTotalCartItems };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;