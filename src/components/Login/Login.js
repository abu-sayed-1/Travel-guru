
import React, { useContext, useState } from 'react';
import {
    createUserWithEmailAndPassword, 
    handleFBSignIn, handleGoogleSingIn,
    initializeLoginFramework, resetPassword, signInWithEmailAndPassword 
  } from './LoginManager.js';
import { useForm } from "react-hook-form";
import './Login.css';
import fbIcon from "../images/travel-guru-master/Icon/fb.png";
import googleIcon from '../images/travel-guru-master/Icon/google.png';
import { UserContext } from '../../App.js';
import { useHistory, useLocation } from 'react-router-dom';
import { Link } from '@material-ui/core';

const Login = () => {

    const {state1} = useContext(UserContext);
    const [loggedInUser,setLoggedInUser] = state1;
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
 // handle Submit From--------------------------------------
    const { register, handleSubmit, watch, errors } = useForm();
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
    <div className="login_container">
    <div className='input_container'>
    {newUser ?' Create an account':'Login'}
    <form className='login_form' onSubmit={handleSubmit(onSubmit)}>
      { newUser && <input name="firstName" onBlur={handleInputField}  ref={register({ required: true })} placeholder="first name" />}
      {errors.firstName && <span className="error">first name is required</span>}
      { newUser && <input name="lastName" onBlur={handleInputField}  ref={register({ required: true })} placeholder="last name" />}
      {errors.lastName && <span className="error">last name is required</span>}
      <input name="email" onBlur={handleInputField} ref={register({ required: true })} placeholder="Username or Email" />
      {errors.email && <span className="error">Email is required</span>}
      <input name="password" type='password' onBlur={handleInputField} ref={register({ required: true })} placeholder="password" />
      {errors.password && <span className="error">password is required</span>}
      <input className='submitFormBtn' type="submit" value={newUser ? 'Create an account':'Login'} />
    </form>
        <label htmlFor="newUser">  { newUser ? "Already have an account ?":"Don't have an account ?"}</label>
        <Link onClick={() => setNewUser(!newUser)} style={{cursor:'pointer'}}>{newUser ? ' Login' :' Create an account'}</Link>
        <br/>
       <Link  onClick={() => resetPassword(user.email)} style={{cursor:'pointer'}}>{ newUser ? " " :'Forgat password'}</Link>

    </div>
    <br/>
    <p style={{textAlign:'center'}}>or</p>
    <button className='googleAndFbLoginBtn' onClick={fBSignIn}><img className='imgGoogleAndFb' src={fbIcon} alt=""/>Continue with Facebook</button>
    <br/>
    <button  className='googleAndFbLoginBtn' onClick={googleSingIn}> <img className='imgGoogleAndFb' src={googleIcon} alt=""/> Continue with Google</button>
</div>

    );
};

export default Login;