import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import fakeData from '../data.json'
// import './Booking.css'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import { Button } from '@material-ui/core';
import Login from '../Login/Login';
 
const Booking = () => {
    const {numId} = useParams()
    const allNum = fakeData.find( fd => fd.id == numId);
    // const {title,detail} = allNum;
    // console.log('booking',numId);

    const history = useHistory();
    const handleBooking = (numId) => {
         history.push(`/booking/${numId}`);
        console.log('booking is ok',numId)
    }

    return (
        // // <section>
        // //    {/* <div className='overlay'> */}
        // //    {/* <Container className='main_container'>
        //     // <Row>
       
        //     // <Col className='detail'><div className='blog'><span className='title'>{title}</span> <br/> {detail}</div></Col>
        //     //     <Col className="start_booking">
        //            {/* <h1>rakib khah</h1> */} */}
        //            {/* <Link to="roomBtn">
        //           <button className='bookingBtn'>Start Booking</button>
        //           </Link>
        //         </Col>
        //     </Row>
        //     </Container> */
        // //    {/* </div> */}
        // // </section> 
        <div>
         <Login></Login>
        </div>
        
    );
};

export default Booking;
