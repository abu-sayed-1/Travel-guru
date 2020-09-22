import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./RoomInfo.css"
import ratingIcon from '../images/travel-guru-master/Icon/star_1_.png'

const RoomInfo = (props) => {
    console.log(props)
    const {
        roomDetail,roomInfo,
        convenience,star,rating,price,
        totalPrice,roomImg1
    } = props.roomElement;
    



    return (

                <div className="room_container">
                    <div>
                   <img className="RoomImg" src={roomImg1} alt=""/>
                     </div>
                     <div>
                       <ul className="roomDetail">
                       <p>{roomDetail}</p>
                        <p className="rooInfo">{roomInfo}</p>
                        <p className="rooInfo">{convenience}</p>
                     <p>
                        <img  style={{width:"6%"}} src={star} alt=""/>
                         <span>{rating}</span>
                        <span>{price}</span><span className="rooInfo">{totalPrice}</span>  
                    </p>
                       </ul>
                     </div>
                    </div>
        
  
      );
    };

export default RoomInfo;