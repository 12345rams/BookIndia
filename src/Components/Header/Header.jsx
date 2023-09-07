import React, {useState } from "react";
import { Fragment } from "react";
import Search from "./Search";
import {

  Avatar,
  Tooltip,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import {State} from "country-state-city";


import PublicIcon from "@mui/icons-material/Public";
import { InputLabel } from "@mui/material";
import "./Header.css";

import SearchResult from "./SearchResult";

function Header() {
 
  const [state, setState] = useState();
  
  const [results, setResults] = useState([]);
  const [isState,setISState]=useState(false);

  return (
    <Fragment>
      <header>
        <div className="headerContainer">
          <div className="headerBox">
            <h1 style={{ color: "red" }}>Book</h1>
            <h1 style={{ color: "#31fd3f" }}>India</h1>
            <div className="select">
              <FormControl>
                <InputLabel id="demo-simple-select-label">State</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  required
                  value={state}
                  label="State"
                  onChange={(e) => {
                    setState(e.target.value);
                  }}
                >
                  <MenuItem value="">State</MenuItem>
                  {State &&
                    State.getStatesOfCountry("IN").map((item) => (
                      <MenuItem key={item.isoCode} value={item.isoCode} >
                        {item.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </div>
            <div>
              <Search setResults={setResults} setISState={setISState} state={state}/>
              {isState?<SearchResult results={results}/>:""}
            </div>
            <div>
              <div>
                <Tooltip title="Country">
               
                    <Avatar sx={{ width: 58, height: 48 }} style={{backgroundColor:"Green"}}>India
                     
                    </Avatar>
              
                </Tooltip>
              </div>
            </div>
            <div>
              <button className="button-h">login</button>
            </div>
            <div>
              <button className="button-h">Create Account</button>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
}

export default Header;
