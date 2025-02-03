import React from 'react'
import Heading from '../Heading'
import './city.css'
import { heritage } from '../../Data/Data'
const Cities = () => {
  return (
    <>
      <section className="city padding">
        <div className="container">
            <Heading title={'discover our beautiful cities'} />
              <div className=" content grid5 mtop">
                {heritage.map((item,index)=>{
                  return(
                    <div key={index} className='box'>
                       <span> {item.icon}</span>
                       <h5 id='art'>{item.title}</h5>
                       <p >{item.label}</p>
                    </div>
                  )
                })}
              </div>
        </div>
      </section>
    </>
  )
}

export default Cities;
