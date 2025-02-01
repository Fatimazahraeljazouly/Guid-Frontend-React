import React from 'react'
import './feature.css'
import { feature } from '../../Data/Data'

const Feature = () => {
  return (
    <>
        <section className="feature padding">
                <div className="content grid3 mtop">
                    {feature.map((item,index)=>(
                        <div className="elements" key={index}>
                            <span> {item.icon}</span>
                            <h4>{item.title}</h4>
                            <label htmlFor="">{item.description}</label>
                        </div>
                    ))}
                </div>
        </section>
    </>
  )
}

export default Feature