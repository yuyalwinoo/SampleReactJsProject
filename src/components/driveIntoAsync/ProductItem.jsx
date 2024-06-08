import React from 'react'
import './product.css';
const ProductItem = ({product}) => {
    const {id,title,price,category,description,image} = product;
  return (
    <div className='product-item'>
        <img src={image} alt={title}/>
        <h3>{title}</h3>
        <p>{price}</p>
    </div>
  )
}

export default ProductItem