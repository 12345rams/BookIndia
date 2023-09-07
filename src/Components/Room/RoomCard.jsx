import { Rating } from '@mui/material'
import React, { Fragment, useEffect, useState } from 'react'
import PlaceIcon from '@mui/icons-material/Place';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';

function RoomCard({room}) {
     console.log(room)
    const options = {
        value: 4,
        readOnly: true,
        precision: 0.5,
      };
      const [noLike,setnoLike]=useState(5);
    let  isLike= false;
      
      const handleLike=()=>{
        if(!isLike){
          setnoLike(noLike+1);
          isLike=false;
        }
       else {
        setnoLike(noLike-1);
        isLike=true;
       }
      }
    return (
       <Fragment>
        <div className="cardItem">
          <div className="imageBox">
            <button onClick={handleLike}>
            <Checkbox color="error" icon={<FavoriteBorder color='error'/>} checkedIcon={<Favorite />} />{noLike}
            </button>
             
          
          </div>
     
        <div className="cardItemBox">
          
      
         <h3>{room.name}</h3>
         <div>
      <button>1Bed< BedOutlinedIcon/></button>
        
         </div>
        <div>
        <PlaceIcon />
         {room.address}
        </div>
      
        <Rating {...options}  size="small" />
        
        <span>Rating({room.ratingOverAll})</span>
        </div>
         </div>
  
  
       </Fragment>
    )
}

export default RoomCard
