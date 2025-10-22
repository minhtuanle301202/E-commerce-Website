import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import axios from 'axios'
import cross_icon from '../../assets/cross_icon.png'

function ListProduct() {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {

    }, [])

    return (
        <div className='list-product'>
            <h1>All Product List</h1>
            <div className="listproduct-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Old Price</p>
                <p>New Price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>

            <div className="listproduct-allproducts">

                {allProducts.map((product, index) => {
                    return (
                        <>
                            <hr />
                            <div key={index} className='listproduct-format-main listproduct-format'>
                                <img src={product.imgage} alt="" className='listproduct-product-img' />
                                <p>{product.name}</p>
                                <p>${product.old_price}</p>
                                <p>${product.new_price}</p>
                                <p>{product.category}</p>
                                <img className='list-product-remove-icon' src={cross_icon} alt="" />
                            </div>
                            <hr />
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default ListProduct


