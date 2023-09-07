import React, { Fragment } from 'react'
import './Home.css'
import Room from '../Room/Room'
function Home() {
    return (
      <Fragment >
               < div className='HomeContainer'>
        <div className='homeBox'>
         
             <h2>Welcome to BookIndia</h2>
             <h4>Get the availability of Room,Apartment,Mess,PG All over India</h4>
        </div>
    

      </div>
    
        <Room />
      </Fragment>

    )
}

export default Home
