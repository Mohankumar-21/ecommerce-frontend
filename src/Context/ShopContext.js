import React, { createContext, useEffect, useState } from "react";
import {message} from 'antd';


export const ShopContext = createContext(null);



const getDefaultCart = ()=>
{
  let cart = {};
  for(let index=0; index<300+1; index++)
  {
    cart[index]=0;
  }
  return cart;
}


const ShopContextProvider = (props) =>
{

  const [all_product, setAllproducts] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(()=>
  {
    fetch('https://ecommerce-backend12.onrender.com/allproducts')
    .then((res) => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    })
    .then((data) => {
        setAllproducts(data);
    })
    .catch((error) => {
        console.error('Error fetching products:', error);
    });


    if(localStorage.getItem('auth-token'))
    {
    fetch('https://ecommerce-backend12.onrender.com/getcart',
    {
    method:'POST',
    headers:{
        Accept:'application/form-data',
        'auth-token': `${localStorage.getItem('auth-token')}`,
        'Content-Type': 'application/json',
    },
    body:"",
}).then((res)=>

    res.json()
)
.then((data)=>
{
   setCartItems(data)
})
}
  },[])

  const addToCart = (itemId) => {

    if (!localStorage.getItem('auth-token')) {
      message.error('You need to sign in to add items to the cart');
      return;
  }
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    message.success('Item is added to cart')

    if (localStorage.getItem('auth-token')) {
        fetch('https://ecommerce-backend12.onrender.com/addtocart', {
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'auth-token': `${localStorage.getItem('auth-token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                itemId: itemId
            })
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
        });
    }
};

  const RemoveFromCart = (itemId) =>
  {

    if (!localStorage.getItem('auth-token')) {
      message.error('You need to sign in to remove items to the cart');
      return;
     }
     
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    message.success("Item is removed from cart")

    if (localStorage.getItem('auth-token')) {
      fetch('https://ecommerce-backend12.onrender.com/removefromcart', {
          method: 'POST',
          headers: {
              Accept: 'application/form-data',
              'auth-token': `${localStorage.getItem('auth-token')}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              itemId: itemId
          })
      })
      .then((res) => {
          if (!res.ok) {
              throw new Error('Network response was not ok');
          }
          return res.json();
      })
      .then((data) => {
          console.log(data);
      })
      .catch((error) => {
          console.error('There was a problem with the fetch operation:', error);
      });
  }
   
  }


  const getTotalCartAmount = () => {
    let Totalamount = 0;
    for (const item in cartItems) {
        if (cartItems[item] > 0) {
            let iteminfo = all_product.find((product) => product.id === Number(item));
            console.log("Item ID:", item);
            console.log("Item Info:", iteminfo);
            if (iteminfo) {
                Totalamount += iteminfo.new_price * cartItems[item];
            } else {
                console.log("Product not found for ID:", item);
            }
        }
    }
    return Totalamount;
}


  const getTotalCartItem = () => {
  
    const uniqueProducts = new Set();

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        uniqueProducts.add(item);
      }
    }
  
    return uniqueProducts.size;
  };

  const contextValue = {all_product, cartItems, addToCart, RemoveFromCart, getTotalCartAmount, getTotalCartItem };

  return (
    <ShopContext.Provider value={contextValue} >
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider; 