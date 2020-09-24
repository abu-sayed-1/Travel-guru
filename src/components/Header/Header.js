import React from 'react';
import './Header.css';
import brandIcon from '../images/travel-guru-master/Logo.png'
import { Form, FormControl, Nav, Navbar,Button } from 'react-bootstrap';
 
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
      <Nav.Link href="#home">Destination</Nav.Link>
      <Nav.Link href="#features">Blog</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
  </Navbar>
  </>
  );
};

export default Header;