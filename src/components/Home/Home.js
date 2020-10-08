import React from 'react';
import fakeData from '../data.json' 
import './Home.css'
import { Container,Col, Row} from 'react-bootstrap';
import HomeInfo from './HomeInfo';

const Home = () => {
  const data = fakeData;
  return ( 
   <section className="home_container">
      <div className="overlay">
      <Container>
       <Row>
        <Col className='blog' xs={4}>
        <h1 className='destination'>Sajek</h1>
        <small className='blog'>{data[0].detail2}</small>
        </Col>
         <Col>
         {
           data.map( data => <HomeInfo key={data.id} destination={data}></HomeInfo>)
         }
      </Col> 
     </Row>
  </Container>
 </div>
</section>
  );
};

export default Home;