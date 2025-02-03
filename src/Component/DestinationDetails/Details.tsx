import React from 'react'
import { useLocation } from 'react-router-dom'
import Heading from '../Home/Heading'
import './details.css'
import DetailsCard from './DetailsCard'
const Details = () => {
    const location = useLocation();
    const { destinations,cities } = location.state // Cast the state to the correct type
    if (!destinations && !cities) {
        return <h2>No city details available</h2>;
      }
  return (
    <>
        <div className="details">
                <div className="hero" style={{backgroundImage:`url(${destinations?destinations.cover:cities.cover })`,backgroundColor:'rgba(0, 0, 0, 0.482)'}}>
                    <Heading title={`Your Guide to ${destinations?destinations.title:cities.title } What to See & Do`}/>
                    <p>{destinations?destinations.description:cities.description }</p>
                </div>
                <DetailsCard CityName={destinations?destinations.title:cities.title }/>
        </div>
        <h1>
         </h1>
    </>
    )

   
}

export default Details

/* 
 */

