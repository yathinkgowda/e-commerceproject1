import React , { useEffect , useState } from 'react' ;
import ProductItem from './ProductItem'
import { useParams } from 'react-router-dom';

function ProductSection({products}) {
  const category  = useParams();
console.log(products,"productsproducts",category)
return (
    <div className="container bg-white">
    <div className="row">
    {products?.map(product => <ProductItem key={product.id} product={product} />)}

   
   </div>
    </div>
  );
}

export default ProductSection