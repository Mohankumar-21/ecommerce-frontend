import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/nav_dropdown1.png';

const Navbar = () => {
   
    const [menu, setMenu] = useState("shop");
    const {getTotalCartItem} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) =>
    {
       menuRef.current.classList.toggle('nav-menu-visible');
       e.target.classList.toggle('open');
    }

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='logo' />
        <p>ECOMMERCE</p>
      </div>
      <img className='nav-dropdown' src={nav_dropdown} alt='drop_down-icon' onClick={dropdown_toggle}/>
      <ul ref={menuRef} className='nav-menu'>
  <li onClick={() => {setMenu("shop")}}   className={menu === "shop"   ? "active" : ""}  > <Link to='/' style={{textDecoration : 'none'}}> Shop</Link></li>
  <li onClick={() => {setMenu("mens")}}   className={menu === "mens"   ? "active" : ""}> <Link to='/mens' style={{textDecoration : 'none'}}> Men</Link></li>
  <li onClick={() => {setMenu("womens")}} className={menu === "womens" ? "active" : ""}> <Link to='/womens' style={{textDecoration : 'none'}}>Women</Link> </li>
  <li onClick={() => {setMenu("kids")}}   className={menu === "kids"   ? "active" : ""}> <Link to='/kids' style={{textDecoration : 'none'}}>Kids</Link> </li>
</ul>


      <div className='nav-login-cart'>
        {localStorage.getItem('auth-token') ? 
        <button onClick={()=>{localStorage.removeItem('auth-token'); window.location.replace('/') }} >Logout</button> : 
        <Link to='/login'> <button>Sign In</button></Link>}

        <Link to='/cart'>  <img src={cart_icon} alt='cart'/></Link>
      
        <div className='nav-cart-count'>{getTotalCartItem()}</div>
      </div>
    </div>
  )
}

export default Navbar;
