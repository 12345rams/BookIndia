import React, { Fragment } from 'react'
import RoomCard from './RoomCard'
import './Room.css'
function Room() {
  const room=
    {name:"Palival",
     address:"Azamgarh uttarpradesh India",
     ratingOverAll:"3",
     noOfLike:56,
     noOfRoom:8,
     rating:[
      {value:"4"}
     ]}
    
  
    return (
       <Fragment>
        <div className="roomContainer">
        <h2>Room available</h2>
            <div className="roomBox">

              <RoomCard room={room}/>
              <RoomCard room={room}/>
              <RoomCard room={room}/>
              <RoomCard room={room}/>
              <RoomCard room={room}/>
              <RoomCard room={room}/>
              <RoomCard room={room}/>
           
            </div>
        </div>
         

       </Fragment>
    )
}

export default Room
