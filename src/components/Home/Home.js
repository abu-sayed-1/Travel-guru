import React from 'react';
import fakeData from '../data.json' 
// import HomeChild from './HomeChild';
import './Home.css'
import { useHistory } from 'react-router-dom';
import { Container,Col, Row, CardGroup,Card} from 'react-bootstrap';
import { Link } from '@material-ui/core';

const Home = () => {
  const data = fakeData;

  
  // const history = useHistory()
  // const handlePrivateRoute = () => {
  //      history.push('/room')    
  //   };

    const history = useHistory()

    const handleBooking = (numId) => {
         history.push(`/detail/${numId}`) 
    
    }
  return (
   <section className="home_container">
      <div className="overlay">
            <Container>
                  <Row>
          <Col className='descText' xs={4}>
            <h1 className='destination'>COX'S BAZAR</h1>
            <small className='descText'>{fakeData[0].detail2}</small>
          </Col>
          <Col>
          <CardGroup className="homeContainer">
        <Card className='card_Item'>
          <Card.Img className='imgCard imageCard' variant="top" src={data[0].img}/>
          <Link  onClick={() => handleBooking(fakeData[0].id) } className="destinationBtn"
            variant="body2"
          >
            COX'S BAZAR
          </Link>
        </Card>
        <Card className='card_Item'>
          <Card.Img className='imgCard' variant="top" src={data[1].img} />
          <Link  onClick={() => handleBooking(fakeData[1].id) } className="destinationBtn"
          variant="body2"
          >
            SREEMANGAL
          </Link>
        </Card>
        <Card className='card_Item'  >
          <Card.Img className='imgCard' variant="top" src= {data[2].img}/>
          <Link onClick={() => handleBooking(fakeData[2].id) } className="destinationBtn"
          variant="body2">
            SUNDARBANS
          </Link> 
        </Card>
      </CardGroup>
      </Col> 
        </Row>
        </Container>
      {/* {

        data.map(allData => <HomeChild allData={allData}></HomeChild>)
      } */}
      </div>
  </section>
  );
};

export default Home;