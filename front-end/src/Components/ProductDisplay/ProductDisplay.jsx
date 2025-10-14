import React, { use } from 'react'
import star_icon from '../../assets/star_icon.png'
import star_dull_icon from '../../assets/star_dull_icon.png'
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';

import './ProductDisplay.css'

function ProductDisplay(props) {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    return (
        <div className='product-display'>
            <div className="product-display-left">
                <div className="product-display-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="product-display-main-img">
                    <img src={product.image} alt="" />
                </div>
            </div>

            <div className="product-display-right">
                <h1>{product.name}</h1>
                <div className="product-display-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122 Reviews)</p>
                </div>
                <div className="product-display-right-prices">
                    <div className="product-display-right-old">
                        ${product.old_price}
                    </div>
                    <div className="product-display-right-new">
                        ${product.new_price}
                    </div>
                </div>
                <div className="product-display-right-size">
                    <h3>Select Size</h3>
                    <div className="product-display-right-list-size">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button className='product-display-right-button' onClick={() => addToCart(product.id)}>ADD TO CART</button>
                <p className='product-display-right-category'><span>Category: </span>{product.category} , T-Shirt, Crop Top</p>
                <p className='product-display-right-tag'><span>Tags: </span>Fashion , Modern , Classic</p>

            </div>
        </div>
    )
}

export default ProductDisplay
