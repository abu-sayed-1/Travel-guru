import React from 'react';
import { AppBar, Button, Toolbar, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import './Header.css'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(5),
  },
  title: {
    flexGrow: 1,
  },
btn:{
  display:'flax'
}
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
          <Link to=""><Button className={classes.btn}>
            </Button></Link>
            <Button>News</Button>
        <Button>destination</Button>
        <Button>Blog</Button>
        <Button>Contact</Button>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  </div>
  );
};

export default Header;