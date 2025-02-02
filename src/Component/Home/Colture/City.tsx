import Heading from '../Heading'
import './cities.css'
import { cities } from '../../Data/Data'
import { Link } from 'react-router-dom'
const City = () => {
  return (
    <>
        <section className="colture padding">
            <div className="container">
                <Heading title="Discover Morocco's Iconic Cities" />
            </div>
            <div className="content grid3 mtop">  
             
                    {cities.map((item,index)=>{
                      return(
                        <div key={index} className='box'>
                          <div className="vil">
                            <img src={item.cover} alt="hh " />
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <Link to={'/details-destination'} state={{cities:item}}>
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

export default City