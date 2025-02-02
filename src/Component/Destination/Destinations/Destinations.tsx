import React from 'react'
import './destinantions.css'
import { destinations } from '../../Data/Data' 
import { Link } from 'react-router-dom'

const Destinations = () => {
  return (
    <>
       <section className="colture padding">
            <div className="content grid3 mtop">  
                    {destinations.map((item,index)=>{
                      return(
                        <div key={index} className='box'>
                          <div className="vil">
                            <img src={item.cover} alt="hh " />
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <Link state={{destinations:item}} to={'/details-destination'}>
                              <button>Discover</button>
                            </Link>
                          </div>
                        </div>
                      )
                    })}
             
            </div>
        </section>
    </>
  )
}

export default Destinations