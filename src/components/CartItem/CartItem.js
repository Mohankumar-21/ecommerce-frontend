import React, { useContext } from 'react';
import './CartItem.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItem = () => {
const {getTotalCartAmount ,all_product, cartItems, RemoveFromCart,  addToCart} = useContext(ShopContext);

const increaseQuantity = (itemId) => {
    addToCart(itemId);
};

const decreaseQuantity = (itemId) => {
    if (cartItems[itemId] > 0) {
        RemoveFromCart(itemId);
    }
};

  return (
    <div className='cartitems'>
        <div className='cart-items-main'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
    {all_product.map((e)=>
    {
      if(cartItems[e.id]>0)
      {
        return    <div className='cart-items-format cart-items-main'>
        <img src={e.image} alt='cart-icon' className='cart-product-icon' />
        <p>{e.name}</p>
        <p>${e.new_price}</p>
         <div className='cart-item-quantity-button'>  
         <button className='cart-items-quantity' onClick={() => decreaseQuantity(e.id)}>-</button>
        <button className='cart-items-quantity'> {cartItems[e.id]}</button>
        <button className='cart-items-quantity' onClick={() => increaseQuantity(e.id)}>+</button>
        </div>

       
    
        <p>${e.new_price*cartItems[e.id]}</p>
        <img src={remove_icon}onClick={()=>{RemoveFromCart(e.id)}} alt='removeicon' className='cart-item-remove'/>
        <hr/>
      </div>   
      }
      
       return null;
    })}

    <div className='cart-item-down'>
        <div className='cartitems-total'>
            <h1>Cart Total</h1>
            <div>
                <div className='cart-item-totalitem'>
                    <p>Sub Total</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr/>
                <div className='cart-item-totalitem'>
                     <p>Shipping Fee</p>
                     <p>Free</p>
                </div>
                <hr/>
                <div className='cart-item-totalitem'>
                     <h3>Total</h3>
                     <p style={{fontWeight:600}}>${getTotalCartAmount()}</p>
                </div>
            </div>
            <button>Proceed To Checkout</button>
        </div>
        <div className='cartitems-promocode'>
            <p>If you have a promo code, Enter it here</p>
            <div className='cart-items-promobox'>
                <input type='text' placeholder='Promo Code..' />
                <button type='submit'>Submit</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CartItem;
