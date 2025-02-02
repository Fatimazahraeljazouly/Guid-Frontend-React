import React from 'react'
import { useLocation } from 'react-router-dom'

const Details = () => {
    const location = useLocation();
    const { destinations,cities } = location.state // Cast the state to the correct type
    if (!destinations && !cities) {
        return <h2>No city details available</h2>;
      }
  return (
    <div>
        hello
        <h1>{destinations?destinations.title:cities.title } </h1>
        <img src={destinations?destinations.cover:cities.cover }alt={destinations?destinations.title:cities.title }/>
        <p>{destinations?destinations.description:cities.description }</p>
    </div>
    )

   
}

export default Details

/* 
 */

