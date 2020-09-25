import React from 'react';
import './Header.css';
import brandIcon from '../images/travel-guru-master/Logo.png'
import { Form, FormControl, Nav, Navbar,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 
const Header = () => {
  return (
    <>
    <Navbar style={{background:'rgba(231,150,134,1)'}}>
      <img src={brandIcon} alt=""/> 
    <Form inline style={{marginLeft:'30px'}}>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
    <nav className="ml-auto" style={{marginLeft:"19px"}}>
       <Link className="header_link" to="/home">Home</Link>
      <Link  className="header_link"to="/room">Destination</Link>
      <Link className="header_link" to="/blog">Blog</Link>
      <Link className="header_link" to="/contact">Contact</Link>
    </nav>
  </Navbar>
  </>
  );
};

export default Header;