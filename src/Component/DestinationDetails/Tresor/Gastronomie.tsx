import React from 'react'
import { detType } from '../../../Utility/Type'
const Gastronomie = ({det}:detType) => {
    const Gastronomy=det.filter((item)=>item.category.includes('Gastronomie'));
  return (
    Gastronomy.map((item,index)=>(
        <div className="elements" key={index}>
            <img src={item.cover} alt="" />
            <h1>{item.ville}</h1>
            <h3>{item.libele}</h3>
            <p>{item.description} </p>
            <p>{item.category} </p>

            <label htmlFor=""> <i className="fas fa-location-dot"></i>{item.location} </label>
        </div>
    ))
  )
}

export default Gastronomie
