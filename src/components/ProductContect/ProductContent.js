import React from 'react';
import './ProductCOntent.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const ProductContent = (props) => {

    const {product} = props;
  return (
    <div className='product-content'>
        HOME <img src={arrow_icon} alt='arrow-icon' />
        SHOP <img src={arrow_icon} alt='arrow-icon' />
        {product.category} <img src={arrow_icon} alt='arrow-icon' />
        {product.name}

    </div>
  )
}

export default ProductContent
