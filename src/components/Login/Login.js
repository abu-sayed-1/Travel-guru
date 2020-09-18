
import React from 'react';
import { initializeLoginFramework } from './LoginManager.js';
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
    initializeLoginFramework();


    return (
    <div>
      <h1> this is login </h1>
    </div>

    );
};

export default Login;