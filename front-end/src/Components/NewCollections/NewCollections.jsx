import React from 'react'
import new_collection from '../../assets/new_collections'
import Item from '../Item/Item'
import './NewCollections.css'
function NewCollections() {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, index) => {
            return (
                <Item key={index} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
            )
        })}
      </div>
    </div>
  )
}

export default NewCollections
