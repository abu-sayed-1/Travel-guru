
import React, { useContext, useState } from 'react';
import {
    createUserWithEmailAndPassword, 
    handleFBSignIn, handleGoogleSingIn,
    initializeLoginFramework, signInWithEmailAndPassword 
  } from './LoginManager.js';
import { useForm } from "react-hook-form";
import './Login.css';
import fbIcon from "../images/travel-guru-master/Icon/fb.png";
import googleIcon from '../images/travel-guru-master/Icon/google.png';
import { UserContext } from '../../App.js';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {

    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let {from} = location.state || { from: {pathname: "/" } };
  
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

  const handleResponse = (res,redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
     }
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
    <div className="main">
    <div className='input_container'>
    {newUser ?' Create an account':'Login'}
    <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
      { newUser && <input name="firstName" onBlur={handleInputField}  ref={register({ required: true })} placeholder="first name" />}
      {errors.firstName && <span className="error">first name is required</span>}
      { newUser && <input name="lastName" onBlur={handleInputField}  ref={register({ required: true })} placeholder="last name" />}
      {errors.lastName && <span className="error">last name is required</span>}
      <input name="email" onBlur={handleInputField} ref={register({ required: true })} placeholder="Your Email" />
      {errors.email && <span className="error">Email is required</span>}
      <input name="password" type='password' onBlur={handleInputField} ref={register({ required: true })} placeholder="Your password" />
      {errors.password && <span className="error">password is required</span>}
      <input className='submitBtn' type="submit" value={newUser ? 'Create an account':'Login'} />
    </form>
        <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>
        <label htmlFor="newUser">Already have an account ?</label>
    </div>
    <br/>
    <p style={{textAlign:'center'}}> <span style={{borderBottom:"1px solid red"}}></span> or  <span  style={{borderBottom:"1px solid red"}}></span> </p>
    <button className='loginBtn' onClick={fBSignIn}><img className='imgGoogleAndFb' src={fbIcon} alt=""/>Continue with Facebook</button>
    <br/>
    <button  className='loginBtn' onClick={googleSingIn}> <img className='imgGoogleAndFb' src={googleIcon} alt=""/> Continue with Google</button>
</div>

    );
};

export default Login;