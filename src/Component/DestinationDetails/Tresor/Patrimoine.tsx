import React from 'react'
import { detType } from '../../../Utility/Type';
const Patrimoine = ({det}:detType) => {
    const Patrimoine = det.filter((item)=>item.category.includes('Patrimoine'))
    return (
        Patrimoine.map((item,index)=>(
            <div className="elements" key={index}>
                <img src={item.cover} alt="" />
                <h1>{item.ville}</h1>
                <h3>{item.libele}</h3>
                <p>{item.description} </p>
                <p>{item.category} </p>
                <label htmlFor=""> <i className="fas fa-location-dot"></i>{item.location} </label>
            </div>
        ))
      );
    }

export default Patrimoine
