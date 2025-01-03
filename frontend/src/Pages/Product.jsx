import React , {useContext} from 'react';
import {ShopContext} from '../Context/ShopContext.jsx'
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrum/Breadcrums.jsx';
import ProductDisplay from '../Components/ProductDisplay.jsx/ProductDisplay.jsx';
import DescriptionBox from '../Components/DescriptionBox.jsx/DescriptionBox.jsx';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts.jsx';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id===Number(productId))
 
  
  return (
    <div >
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
   
    </div>
  );
}

export default Product;
