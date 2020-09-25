import React from 'react';
import './Header.css';
import brandIcon from '../images/travel-guru-master/Logo.png'
import { Form, FormControl, Nav, Navbar,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 
const Header = () => {
  return (
    <>
    <Navbar style={{ backgroundColor:'rgba(255, 5, 8, 0.456789' }}>
      <img src={brandIcon} alt=""/> 
    <Form inline style={{marginLeft:'30px'}}>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
    <Nav className='navbar active' className="ml-auto">
       <Link to="/home">Home</Link>
      <Link to="/roo">Destination</Link>
      <br/>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
    </Nav>
  </Navbar>
  </>
  );
};

export default Header;