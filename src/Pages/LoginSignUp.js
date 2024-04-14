import React, {useState} from 'react';
import './CSS/LoginSignUp.css';
import {message} from 'antd'

const LoginSignUp = () => {

  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username:"",
    password:"",
    email:"",
  })
 
  const changeHandler = (e) =>
  {
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const login = async()=>
  {
    console.log("login executed", formData)
    let responseData;

    await fetch('https://ecommerce-backend12.onrender.com/login',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'content-type':'application/json',
      },
      body:JSON.stringify(formData)
    })
    .then((res)=>res.json())
    .then((data)=>
      {
         responseData=data;
      })
     
      if(responseData.success)
      {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace("/");
        message.success("Successfully loged in")
      }
      else
      {
         message.error(responseData.errors)
      }
  }

  const signup = async()=>
  {
    console.log("signup executed", formData)
    let responseData;

    await fetch('https://ecommerce-backend12.onrender.com/signup',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'content-type':'application/json',
      },
      body:JSON.stringify(formData)
    })
    .then((res)=>res.json())
    .then((data)=>
      {
         responseData=data;
      })
     
      if(responseData.success)
      {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace("/");
        message.success("Successfully signed")
      }
      else
      {
         message.error(responseData.errors)
      }

  }

  return (
    <div className='loginsignup'>
        <div className='login-container'>
             <h1>{state}</h1>
             <div className='login-signup-fields'>
               {state==="Sign Up" ? <input type='text' name='username' value={formData.username} onChange={changeHandler} placeholder='your name'/> : <></>} 
                <input type='email' name='email' value={formData.email} onChange={changeHandler} placeholder='Email Adderss' />
                <input type='password' name='password' value={formData.password} onChange={changeHandler} placeholder='Password' />
             </div>
             <button onClick={()=>{state === 'Login' ? login() : signup()}} >Continue</button>
             {state==='Sign Up' ?<p className='login-login'>Already have an account? <span onClick={()=>{setState("Login")}} >Login here</span></p> :
               <p className='login-login'>Create an account? <span onClick={()=>{setState("Sign Up")}} >Register here</span></p>}
             
            
             <div className='loginSignup-agree'>
                 <input type='checkbox' name='' id=''></input>
                 <p>By Continuing, I agree to the terms of use & privacy policy </p>
             </div>
        </div>
    </div>
  )
}

export default LoginSignUp
