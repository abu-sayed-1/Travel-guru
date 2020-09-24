import React from 'react';
import "./RoomInfo.css"

const RoomInfo = (props) => {
    console.log(props)
    const {
        roomDetail,roomInfo,
        convenience,star,rating,price,
        totalPrice,roomImg1
    } = props.roomElement;
    return (

      <div className="roomInfo_container">
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