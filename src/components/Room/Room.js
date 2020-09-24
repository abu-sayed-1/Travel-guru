import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import fakeData1 from '../fakeData2.json';
import fakeData from "../data.json";
import RoomInfo from './RoomInfo';
import GoogleMaps from '../GoogleMaps/GoogleMaps';


const Room = () => {
    const roomId = fakeData1.filter( fd => fd.id == fakeData[2].id);
    const mapStyles = {
      width: "100%",
      height: "100%",
    };
    
    return (
      <>
      <Container>
          <Row>
              <Col style={{ minWidth:'60%',maxWidth:'62%'}} xs={6}>
              {
                roomId.map(pd => <RoomInfo roomElement={pd}></RoomInfo>)
              }
              </Col>
          <div style={{
              // boxSizing:'border-box',
              // width:'100%',
              // height:"100%",
              // margin:'100px'
            }}>
          <Col>
            
            <GoogleMaps
          // google={this.GoogleMaps}
          // center={{lat: 18.5204, lng: 73.8567}}
          // height='100px'
          // zoom={15}
          // center={{ lat: 44.076613, lng: -98.362239833 }}
          // zoom={5}
          // mapContainerStyle={{ 
          //   height: "100vh",
          //   width: "100%"
          // }}
          zoom={15}
          style={mapStyles}
          initialCenter={{ lat: 9.761927, lng: 79.95244 }}
          
         />
   </Col>
          </div>
             
          </Row>
      </Container>
     
      </>
    );
};

export default Room;