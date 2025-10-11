import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import Breadcrums from '../../Components/Breadcrums/Breadcrums';
import { ShopContext } from '../../Context/ShopContext';
import ProductDisplay from '../../Components/ProductDisplay/ProductDisplay';
import DiscriptionBox from '../../Components/DiscriptionBox/DiscriptionBox';
import RelatedProduts from '../../Components/ReletedProducts/RelatedProduts';
function Product() {
  const {all_products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_products.find(prod => prod.id === parseInt(productId));
  
  return (
    <div className='product'>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DiscriptionBox />
      <RelatedProduts />
    </div>
  )
}

export default Product
