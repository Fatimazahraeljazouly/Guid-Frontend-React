import React from 'react'
import { details } from '../Data/Data'
import Artisanat from './Tresor/Artisanat';
import Heading from '../Home/Heading';
import Patrimoine from './Tresor/Patrimoine';
import Gastronomie from './Tresor/Gastronomie';
import Hobbies from './Tresor/Hobbies';
import Nature from './Tresor/Nature';
const DetailsCard = ({CityName}:{CityName:string}) => {
    const det = details.filter((detail)=>
        detail.ville.toLowerCase().includes(CityName.toLowerCase()) ||
    detail.ville.toUpperCase().includes(CityName.toUpperCase())
    );

    if(!det){
        return (
            <h2>No details found for this city </h2>
        )
    }
  return (
   <>
   <section className='detailsCard'>
   <Heading title={` Craftsmanship of ${CityName}`}/>
    <div className="cardDet padding">
        <div className="content grid3 mtop">
            <Artisanat det={det}/>
        </div>
           
    </div>
        <Heading title={` Heritage of ${CityName}`}/>
    <div className="cardDet padding">
        <div className="content grid3 mtop">
            <Patrimoine det={det}/>
        </div>
           
    </div>
        <Heading title={` Gastronomy of ${CityName}`}/>
    <div className="cardDet padding">
        <div className="content grid3 mtop">
            <Gastronomie det={det}/>
        </div>
           
    </div>
    <Heading title={` Nature of ${CityName}`}/>
    <div className="cardDet padding">
        <div className="content grid3 mtop">
            <Nature det={det}/>
        </div>
           
    </div>
    <Heading title={` Hobbies of ${CityName}`}/>
    <div className="cardDet padding">
        <div className="content grid3 mtop">
            <Hobbies det={det}/>
        </div>
           
    </div>
    
   </section>
   </>
  )
}

export default DetailsCard;
