import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>

            <div className='descriptionbox-nav-box'> Description</div>
            <div className='descriptionbox-nav-box fade'>Reviws (122)</div>
         
        </div>

        <div className='description-box-description'>
            <p>An ecommerce website that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.</p>
            <p>we aim to provide you with a seamless online shopping experience for all your needs. Whether you're searching for the latest fashion trends, high-quality electronics, home essentials, or unique gifts, we've got you covered.</p>
        </div>
    </div>
  )
}

export default DescriptionBox;
