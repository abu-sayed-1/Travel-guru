import React from 'react';
import fakeData from '../data.json' 
import './Home.css'
import { useHistory } from 'react-router-dom';
import { Container,Col, Row} from 'react-bootstrap';
import HomeInfo from './HomeInfo';
import Room from '../Room/Room';

const Home = () => {
  const data = fakeData;

  
  // const history = useHistory()
  // const handlePrivateRoute = () => {
  //      history.push('/room')    
  //   };

    // const history = useHistory()

    // const handleBooking = (numId) => {
    //      history.push(`/bookingDetail/${numId}`) 
    
    // }
  return (
   <section className="home_container">
      <div className="overlay">
      <Container>
       <Row>
        <Col className='blog' xs={4}>
        <h1 className='destination'>Sajek</h1>
        <small className='blog'>{fakeData[0].detail2}</small>
        </Col>
         <Col>
         {
           data.map( data => <HomeInfo key={data.id} destination={data}></HomeInfo>)
         }
      </Col> 
     </Row>
  </Container>
  <Room></Room>
 </div>
</section>
  );
};

export default Home;