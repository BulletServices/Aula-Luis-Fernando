import React from 'react';
import ProductListItem from './ProductListItem';

const ProductList =(props)=>{
  return (
    <div>
      {props.prods.map(prod=>(
        <ProductListItem key={prod.id} product={prod} />
      ))}
    </div>
  );
}

export default ProductList;
