import React, { useState } from 'react'
import {nav} from '../../Data/Data'
import { Link } from 'react-router-dom'
import logo from '../../../../public/logo3.png'
import './header.css'
const Header = () => {
  const [indexElm,setIndexelm ]=useState<number|null>(null);
  const [isopen,setIsopen]=useState<boolean>(false);
  return (
    <>
    <header>
      <div className=" container header">
          <div className="logo">
              <img src={logo} alt="" />
          </div>
          <div className="menu">
              <ul className={isopen?'small':'flex'}>
                {nav.map((item,index)=>(
                  <li key={index} onClick={()=>{setIndexelm(index);console.log(item.name)}}  className={index===indexElm?"active":''} >
                    <Link  to={item.path}>{item.name}</Link>
                  </li> 
                ))}
              </ul>
          </div>
          <div className="toggle">
            <button onClick={()=>setIsopen(!isopen)}>
              {isopen?<i className='fa fa-times'></i> : <i className='fa fa-bars'></i> } 
            </button>
          </div>
      </div>
    </header>
     
    </>
  )
}

export default Header