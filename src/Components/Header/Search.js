import React, { Fragment,useState} from 'react'
import SearchIcon from "@mui/icons-material/Search";
import { Button} from "@mui/material";
import { City } from "country-state-city";
function Search({setResults,setISState,state}) {
    const [city, setCity] = useState("");
    const inputCity=
        City.getCitiesOfState("IN", state)
 function cityInput(e){
        setCity(e.target.value);
        if(state=="") alert("please select the state");
         setISState(true);
         handleCity(city);
       }
 const handleCity=(value)=>{
         const results=inputCity.filter((item)=>item.name.match(new RegExp(value,"i")))
       setResults(results);
         
       }
       const handleisset=()=>{
            setISState(false);
       }
    return (
      <Fragment>
        <div className='searchBox'>
        <SearchIcon className='searchicon'/>
           <input
                type="text"
                placeholder="Search the city"
                value={city}
                onChange={cityInput}
                 onMouseOver={handleisset}
              />
        </div>
        </Fragment>
    )
}

export default Search
