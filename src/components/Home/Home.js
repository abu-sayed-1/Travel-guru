import React from 'react';
import fakeData from '../data.json' 
import HomeChild from './HomeChild';
import './Home.css'
import { useHistory } from 'react-router-dom';
import { Container,Col, Row, CardGroup,Card, ButtonToolbar, Button } from 'react-bootstrap';

const Home = () => {
  const data = fakeData;

  
  const history = useHistory()
  const handlePrivateRoute = () => {
       history.push('/room')    
    };
    

  return (
   <section className="home_container">
      <div className="overlay">
      <Container>
            
            <Row>
        
    <Col xs={4}>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam rerum modi ea, itaque quisquam architecto sapiente dicta facilis! Tempore facere optio sapiente, exercitationem nihil recusandae temporibus esse nobis consectetur?</p>
    </Col>
    <Col>
    <CardGroup>
  <Card style={{margin:'1px',backgroundColor:"inherit",border:'none'}}>
    <Card.Img style={{width:'200px',height:'308px',borderRadius:'10px'}}  variant="top" src={data[0].img}/>
  </Card>
  <Card style={{margin:'1px',backgroundColor:"inherit"}}>
    <Card.Img style={{width:'200px',height:'',borderRadius:'10px'}}  variant="top" src={data[1].img} />
  </Card>
  <Card style={{marginLeft:'1px',backgroundColor:"inherit",width:''}}>
    <Card.Img style={{width:'200px',height:'',borderRadius:'10px'}}  variant="top" src={data[2].img}/>
    <button style={{position:'absolute',bottom:'20px',marginBottom:'12px'}}>SUNDARBANS</button>
  </Card>
</CardGroup>
</Col> 
  </Row>
   </Container>
        
      {

        data.map(allData => <HomeChild allData={allData}></HomeChild>)
      }
      </div>
  </section>
  );
};

export default Home;