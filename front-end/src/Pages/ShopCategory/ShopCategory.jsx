import React, { useContext } from 'react'
import './ShopCategory.css'
import dropdown_icon from '../../assets/dropdown_icon.png'
import Item from '../../Components/Item/Item'
import { ShopContext } from '../../Context/ShopContext'


function ShopCategory(props) {
  const {all_products} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shop-category-banner' src={props.banner} alt="" />
      <div className="shop-category-indexSort">
        <p>
          <span>Showing 1-12</span> out of 40 products
        </p>
        <div className="shop-category-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shop-category-products">
        {all_products.map((item,index) => {
          if(item.category === props.category){
            return (
              <Item key={index} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
            )
          } else return null;
        })}
      </div>
      <div className="shop-category-explore">
        <button>Explore More</button>
      </div>
    </div>
  )
}

export default ShopCategory
