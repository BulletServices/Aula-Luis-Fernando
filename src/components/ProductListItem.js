import React from 'react';
import {Link} from 'react-router-dom';

// const ProductDetails=(props)=> {
//   return (
//     <div className='product'>
//       <h1>{props.name}</h1>
//       <p>Price: {props.price}</p>
//     </div>
//   );
// }

class ProductListItem extends React.Component{

  render(){
    return (
      <div className='product'>
        <h2>{this.props.product.name}</h2>
        <p>Quantity: {this.props.product.quantity}</p>
        <p><Link to={{pathname:'/add', product:this.props.product}}>Editar</Link></p>
        <Link to={{pathname:'/details', product:this.props.product}}>Detalhes</Link>

      </div>
    );
  }
}

export default ProductListItem;
