import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import fakeData1 from '../fakeData2.json';
import RoomInfo from './RoomInfo';
import GoogleMaps from '../GoogleMaps/GoogleMaps';
import { UserContext } from '../../App';
import { useHistory } from 'react-router-dom';




  const Room = () => {
    const {state1,state2} = useContext(UserContext);
    const [booking,setBooking] = state2;
    console.log(booking);
    const checkId = fakeData1.filter( data => data.id == booking.id);
    const sum = booking.id;
    const history = useHistory()
    console.log(history)
    return (
      <>
  { sum ? <Container>
      <br/>
      <h5> {`Stay in ${checkId[0].currentLocation}`}</h5>
    <Row>
      <Col style={{ minWidth:'60%',maxWidth:'62%'}} xs={6}>
               {
                  checkId.map(roomInfo => <RoomInfo key={roomInfo.id} roomInfo={roomInfo}></RoomInfo>)
                }
                </Col>
                <Col>
               <GoogleMaps
                // google={this.GoogleMaps}
                center={{lat: 18.5204, lng: 73.8567}}
                height='100px'
                zoom={15}
                // center={{ lat: 44.076613, lng: -98.362239833 }}
                // zoom={5}
              />
          </Col>
        </Row>
      </Container>: <div className="container">
           <h2 style={{color:'#ED5485',marginTop:'14%'}}>If you want to get the information on this page you have to go to the must home page and select the destination then you can get the information on this page....!! <button onClick={() => history.goBack()}>Go back</button> </h2>
        </div>}
      </>
    );
};

export default Room;