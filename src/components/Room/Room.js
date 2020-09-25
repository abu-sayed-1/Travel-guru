import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import fakeData1 from '../fakeData2.json';
import fakeData from "../data.json";
import RoomInfo from './RoomInfo';
import GoogleMaps from '../GoogleMaps/GoogleMaps';
import { BookingInfoContext } from '../../App';

const Room = () => {
  const [booking,setBooking] = useContext(BookingInfoContext);
  // console.log(booking.id,'this is booking');
 
  const roomId = fakeData1.filter( fd => fd.id ==  booking.id);
  const sum = booking.id;

  // if (booking.id == true) {
  //   const roomId = fakeData1.filter( fd => fd.id ==  booking.id);
  //   roomId;
  // }else {
  //    const sum = fakeData[0].detail;
  //      sum;
  // }
    
    return (
      <>
  { sum ? <Container>
    <Row>
    {/* <p>{sum}</p> */}
      <Col style={{ minWidth:'60%',maxWidth:'62%'}} xs={6}>
               {
                  roomId.map(roomInfo => <RoomInfo key={roomInfo.id} roomInfo={roomInfo}></RoomInfo>)
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
      </Container>:'lskjlaklsal'}
      </>
    );
};

export default Room;