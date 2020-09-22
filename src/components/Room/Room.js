import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import fakeData1 from '../fakeData2.json';
import fakeData from "../data.json";
import rating from "../images/travel-guru-master/Icon/star_1_.png"
import RoomInfo from './RoomInfo';
import { id } from 'date-fns/esm/locale';

const Room = () => {
    const roomId = fakeData1.filter( fd => fd.id == fakeData[2].id);
    return (
      <>
      <Container>
          <Row>
              <Col xs={7}>
              {
                roomId.map(pd => <RoomInfo roomElement={pd}></RoomInfo>)
              }
              </Col>
              <Col>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet optio suscipit, atque perspiciatis hic ipsa amet odio excepturi libero fugit debitis. Id obcaecati quam placeat deserunt saepe quaerat, reiciendis debitis.</p>
              </Col>
          </Row>
      </Container>
     
      </>
    );
};

export default Room;