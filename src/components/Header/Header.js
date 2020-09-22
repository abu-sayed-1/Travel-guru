import React from 'react';
// import { AppBar, Button, Toolbar, } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import { Link } from 'react-router-dom';
import './Header.css';
import brandIcon from '../images/travel-guru-master/Logo.png'
import { Form, FormControl, Nav, Navbar,Button } from 'react-bootstrap';
 
const Header = () => {
  return (
    // https://www.picmonkey.com/home/editor/CiRjOTgxYzA3MC00NTcwLTQ3N2UtODc1YS1iYTNkMmUyMTM5Yzc
    <>
     <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home"><img src={brandIcon} alt=""/></Navbar.Brand>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>

  </Navbar>
  </>
  );
};

export default Header;