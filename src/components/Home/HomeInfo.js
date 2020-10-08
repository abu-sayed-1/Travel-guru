import { Link } from '@material-ui/core';
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './homeInfo.css'
 
const HomeInfo = (props) => {
  const {title,img,id} = props.destination;
  const history = useHistory()
  const handleDestination = (numId) => {
       history.push(`/bookingDetail/${numId}`) 
  }
   return (
        <CardGroup   style={{display:'inline-block'}} className="homeInfo_Container">
        <Card className='card_Item'>
          <Card.Img style={{width:"235px",}} className='imgCard' variant="top" src={img}/>
          <Link  onClick={() => handleDestination(id) } className="destinationBtn"
            variant="body2"
          >
             {title}
          </Link>
        </Card>
        </CardGroup>
   );
 };
 export default HomeInfo;