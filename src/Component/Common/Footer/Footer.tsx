import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import {nav} from '../../Data/Data'
import logo from '../../../../public/logo3.png'
const Footer = () => {
  return (
    <>
      <footer className='padding footer'>
            <div className="content">
                    <div className='about'>
                        <img src={logo} alt="" />
                        <p>Your gateway to authentic </p>
                        <p>Moroccan</p>
                        <p> experiences</p>
                        <div className="icons">
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-twitter"></i>  {/* Correct class for Twitter (X) */}
                            <i className="fab fa-youtube"></i>
                        </div>

                    </div>
                    <div className='contact' >
                        <h5>Contact</h5>
                        <ul className="contact-icons">
                            <li><i className='fa fa-phone'></i>  +212 6 3338 2112</li>
                            <li><i className='fa fa-envelope'></i>  contacts@gmail.com</li>
                            <li ><i className='fa fa-location-dot'></i>  Casablanca, Oulfa</li>
                        </ul>
                    </div>
                    <div className='links'>
                       <h5>Quick links</h5>
                       <div className="lin">
                       {nav.map((item,index)=>(
                            <ul key={index}>
                                    <li>
                                        <Link to={item.path} >{item.name}</Link>
                                    </li>
                            </ul>
                        ))}
                       </div>
                      
                    </div>
                    <div className='news-letter'>
                        <h5>Newsletter</h5>
                        <input type="text" placeholder='Your Email' />
                        <i className="fas fa-paper-plane"></i>
                    </div>
            </div>
            <hr />
            <div className="right">

            <p>© {new Date().getFullYear()} Morocco Culture. All rights reserved.</p>


            </div>
      </footer>
    </>
  )
}

export default Footer
