
import React from 'react';
// import { initializeLoginFramework } from './LoginManager.js';
// import { Box, Button, TextField } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import { Link } from 'react-router-dom';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         sign:{
//             color:'red'
//         //     width:'300px',
//         //     height:'400px',
//         //    border:'1px solid red'
//         },
//         box:{
//             border:"1px solid red"
//         }
//     },
//   }));

const Login = () => {

    // const classes = useStyles();
    // initializeLoginFramework();

    // const { register, handleSubmit, watch, errors } = useForm();
    // const onSubmit = data => {
    //   console.log('form submitted',data)
      
    // };
    return (
    <div>
      <h1> this is login </h1>
      
     {/* <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
      <input name="name" defaultValue= {loggedInUser.name} ref={register({ required: true })} placeholder="Your name" />
      {errors.name && <span className="error">Name is required</span>}
      
      <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
      {errors.email && <span className="error">Email is required</span>}
      
      <input name="address" ref={register({ required: true })} placeholder="Your address" />
      {errors.address && <span className="error">address is required</span>}
      
      <input name="phone" ref={register({ required: true })} placeholder="Your Phone Number" />
      {errors.phone && <span className="error">Phone Number is required</span>}
      
      <input type="submit" />
    </form> */}
    </div>

    );
};

export default Login;