import React from 'react'
import all_product from '../../assets/data'
import Item from '../Item/Item'
import './RelatedProducts.css';

function RelatedProduts() {
  return (
    <div className='related-products'>
      <h1>Related Products</h1>
      <hr />
      <div className="related-products-item">
        {all_product.map((item, index) => {
          return (
            <Item key={index} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
          )
        })}
      </div>
    </div>
  )
}

export default RelatedProduts
