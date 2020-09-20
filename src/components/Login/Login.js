
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, handleFBSignIn, handleGoogleSingIn, initializeLoginFramework, signInWithEmailAndPassword } from './LoginManager.js';
import { useForm } from "react-hook-form";
import './Login.css'
const Login = () => {
const [newUser,setNewUser] = useState(true);
const [user,setUser] = useState({
  isSignIn: false,
  name: '',
  email: '',
  photo: '',
  success:false
  
})
    initializeLoginFramework();
    // google SignIn------------
   const googleSingIn = () => {
    handleGoogleSingIn()
    .then (res => {
      handleResponse(res,true)
    })
  };


  // Fb SignIn --------------------
  const fBSignIn = () => {
    handleFBSignIn()
    .then(res => {
      console.log(res);
     handleResponse(res,true)
     
    })
    
  };

  const handleResponse = (res) => {
    setUser(res)
  }



    const { register, handleSubmit, watch, errors } = useForm();
     // handle Submit From
    const onSubmit = () => {
      if (newUser && user.email && user.password) {
        createUserWithEmailAndPassword(user.name,user.email,user.password)
        .then(res => {
        handleResponse(res,true);
        })
      }
      if (!newUser && user.email && user.password) {
       signInWithEmailAndPassword(user.email,user.password)
        .then(res => {
         handleResponse(res,true);
        })
      }
    // e.preventDefault();
    }
    // handle Input Field----------------------
    const handleInputField = (e) => {
      let isFieldValid = true;
      if (e.target.name === 'email') {
        isFieldValid = /\S+@\S+\.\S+/.test(e.target.value); 
      }
      if (e.target.name === 'password') {
        const isPassWordValid = e.target.value.length > 5;
        const passwordHasNumber = /\d{1}/.test (e.target.value);
        isFieldValid = passwordHasNumber && isPassWordValid ;
      }
      if (isFieldValid) {
        const newUserInfo = {...user};
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo);
        
       }
    }
    return (
    <div>
      <h1> this is login </h1>
      {/* defaultValue= {loggedInUser.name}   defaultValue={loggedInUser.email} */}

     <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
      { newUser && <input name="name" onBlur={handleInputField}  ref={register({ required: true })} placeholder="Your name" />}
      {errors.name && <span className="error">Name is required</span>}
      <br/>
      <input name="email" onBlur={handleInputField} ref={register({ required: true })} placeholder="Your Email" />
      {errors.email && <span className="error">Email is required</span>}
            <br/>
      <input type='password' onBlur={handleInputField} name="password" ref={register({ required: true })} placeholder="Your password" />
      {errors.password && <span className="error">password is required</span>}
            <br/>
      {/* <input name="phone" ref={register({ required: true })} placeholder="Your Phone Number" />
      {errors.phone && <span className="error">Phone Number is required</span>} */}
            {/* <br/> */}
      <input type="submit" />
    </form>
    <br/>

    <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>
    <label htmlFor="newUser">Already have an account ?</label>
    <br/>
  <button onClick={googleSingIn} style={{color:'red'}}>Google sign in</button>
<br/>
   {/* <p>email:{user.isSignIn && user.name}</p> */}
   <button onClick={fBSignIn}>Fb Sign In</button>
  {/* <p>name:{user.name}</p> */}

    </div>

    );
};

export default Login;