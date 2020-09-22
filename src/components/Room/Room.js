import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import fakeData from '../fakeData2.json'
import rating from "../images/travel-guru-master/Icon/star_1_.png"

const Room = () => {
     const
    return (
        <Container>
            <Row>
                <Col  xs={7}>
                    <div  style={{display:"flex"}} >
                    <div>
                    <img  style={{width:'90%'}} src={fakeData[0].roomImg1} alt=""/>
                    </div>
                     <div>
                      <p>{fakeData[0].roomDetail}</p>
                     <p>{fakeData[0].roomInfo}</p>
                     <p>{fakeData[0].convenience}</p>
                    <p> <img  style={{width:"16px"}}  src={rating} alt=""/> {fakeData[0].rating}  <span>{fakeData[0].price}</span>  <span style={{color:'red'}}>{fakeData[0].totalPrice}</span></p>
                     </div>
                    </div>
                </Col>
                <Col>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cum voluptate sunt tempore. Consequatur dolor aspernatur eius nostrum officia vero esse corporis unde nulla. Ipsum ab at hic voluptatem eveniet.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Room;