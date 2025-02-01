import React from 'react'
import './experience.css'
import Heading from '../Heading'
import { experience } from '../../Data/Data'

const Experience = () => {
  return (
    <>
        <section className="padding experience">
            <div className="container">
                <Heading title='Top Experiences in Morocco'/>
            </div>
            <div className="content grid2 mtop">
                    {experience.map((item,index)=>(
                        <div className="box" key={index}> 
                        
                                <div className="img">
                                    <img src={item.cover} alt="" id='img1' />
                                    <img src={item.cover2} alt="" id='img2' />
                                </div>
                                <div className="overlay">
                                <h4>{item.title} </h4>
                                <p>{item.description} </p>
                                    </div>
                        </div>
                    ))}
            </div>
        </section>
    </>
  )
}

export default Experience