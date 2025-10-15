import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';

import './CartItems.css'
import remove_icon from '../../assets/cart_cross_icon.png'

function CartItems() {
    const { all_products, cartItems, addToCart, removeFromCart,getTotalCartAmount,decreaseCartItem } = useContext(ShopContext);
    return (
        <div className='cart-items'>
            <div className="cart-items-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_products.map((product) => {
                if (cartItems[product.id] > 0)
                    return (
                        <div key={product.id}>
                            <div className="cart-items-format">
                                <img src={product.image} alt="" className='cart-items-product-image' />
                                <p>{product.name}</p>
                                <p className='cart-items-product-price'>${product.new_price}</p>
                                <div className='cart-items-quantity'>
                                    <button className="cart-items-sub-button" onClick={() => decreaseCartItem(product.id)}>-</button>
                                    <p>{cartItems[product.id]}</p>
                                    <button className="cart-items-add-button" onClick={() => addToCart(product.id)}>+</button>
                                    
                                </div>


                                <p>${product.new_price * cartItems[product.id]}</p>
                                <img src={remove_icon} alt="" className='cart-items-remove-icon' onClick={() => removeFromCart(product.id)} />
                            </div>
                            <hr />
                        </div>
                    )

                else return null;
            })}

            <div className="cart-items-down">
                <div className="cart-items-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cart-items-total-item">
                            <p>Subtotal</p>
                            <p className='cart-items-price'>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-items-total-item">
                            <p>Shipping Fee</p>
                            <p className='cart-items-price'>Free</p>
                        </div>
                        <hr />
                        <div className='cart-items-total-item'>
                            <h3>Total</h3>
                            <h3 className='cart-items-price'>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button className='cart-items-checkout-button'>PROCEED TO CHECKOUT</button>
                </div>
                <div className='cart-items-code'>
                    <p>If you have a promo code, please enter it here:</p>
                    <div className="cart-items-promobox">
                        <input type="text" placeholder="Promo code" />
                        <button>Apply</button>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default CartItems 
