import React from 'react';
 import {CardGroup,Card, Container,Row, Col} from "react-bootstrap"
import { useHistory } from 'react-router-dom';
// import  imagesBad  from '../images/travel-guru-master/Image/Rectangle 27.png'

const HomeChild = (props) => {
    const {img,title,id} = props.allData;
    const history = useHistory()

    const handleBooking = (numId) => {
         history.push(`/detail/${numId}`)    
    
      };

    

    return (
      //   // <div style={{display:'flex'}}>
      //     {/* <button onClick={() => handleBooking(id)}>Learn</button> */}
      //   //  <div>
         /* <CardGroup style={{display:'inline-block'}}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
       </CardGroup> */

      //    {/* </div> */}

  //      <Container>
            
  //           <Row>
  //       <Col>
  //        <CardGroup style={{display:'inline-block'}}>
  //         <Card>
  //           <Card.Img variant="top" src="holder.js/100px160" />
  //           </Card>
  //      </CardGroup> 
  //   </Col>
  // </Row>
  //      </Container>
  <div></div>
          
         
    );
};

export default HomeChild;