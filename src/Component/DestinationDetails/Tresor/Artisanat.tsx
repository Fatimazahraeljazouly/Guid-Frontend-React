import React from 'react'
import { detType } from '../../../Utility/Type';
const Artisanat = ({det}:detType) => {
    const artisanats= det.filter((item)=>item.category.includes('Artisanat'))
  return (
    artisanats.map((item,index)=>(
        <div className="elements" key={index}>
            <img src={item.cover} alt="" />
            <h1>{item.ville}</h1>
            <h3>{item.libele}</h3>
            <p>{item.description} </p>
            <p>{item.category} </p>

            <label htmlFor="location"> <i className="fas fa-location-dot" id='location'></i>{item.location} </label>
        </div>
    ))
  );
}

export default Artisanat