import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import insta_icon from '../Assets/instagram_icon.png';
import pin_icon from '../Assets/pintester_icon.png';
import whatsapp_icon_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
             <img src={footer_logo} alt='footer-logo'/>
             <p>E-Commerce</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        <div className='footer-social-icon'>
            <div className='footer-container-icons'>
                <img src={insta_icon} alt='insta_icon' />
            </div>
            <div className='footer-container-icons'>
                <img src={pin_icon} alt='pinrest_icon' />
            </div>
            <div className='footer-container-icons'>
                <img src={whatsapp_icon_icon} alt='whatsapp_icon' />
            </div>
        </div>
        <div className='footer-copywrite'>
            <hr/>
            <p>Copyright @ 2024 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer
