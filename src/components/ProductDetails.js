import React from 'react';

const ProductDetails=(props)=> {

  if(!props.location.product) return (<p>Produto não encontrado</p>)

  const {id,name,priceLabel,quantity} = props.location.product;

  return (
    <div className='product'>
      <h1>{name}</h1>
      <p>Id: {id}</p>
      <p>Price: {priceLabel}</p>
      <p>Quantidade: {quantity}</p>
    </div>
  );
}

export default ProductDetails;
