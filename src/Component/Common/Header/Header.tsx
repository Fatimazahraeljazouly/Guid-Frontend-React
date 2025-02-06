import React, { useState,useRef } from 'react'
import {nav} from '../../Data/Data'
import { Link } from 'react-router-dom'
import logo from '/logo3.png'
import './header.css'
import {useAuth} from '../../../Utility/UserAuth'
import { ToastContainer } from 'react-toastify'
const Header = () => {
  const logoutRef=useRef<HTMLButtonElement>(null)
  const loginRef=useRef<HTMLButtonElement>(null);
  const registerRef=useRef<HTMLButtonElement>(null);
  const [indexElm,setIndexelm ]=useState<number|null>(null);
  const [isopen,setIsopen]=useState<boolean>(false);
  const {isLoggedIn,logOut ,userData }=useAuth()
  return (
    <>
    <ToastContainer/>
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
               <div className="authentication">
              {!isLoggedIn ?
                 (<>
                    <Link to={'/login'}><button ref={loginRef}   className="loginbtn"><i className="fas fa-sign-in-alt"></i> Login</button></Link>
                    <Link to={'/register'}><button ref={registerRef} className="registerbtn"><i className="fas fa-user-plus"></i> Register</button></Link>
                </>)
               :(<>
                    <button className="logout" ref={logoutRef} onClick={logOut}><i className="fas fa-sign-out-alt"></i>Log Out</button>
                   <Link to={'/my-profile'}><button className="profilebtn"><i className="fas fa-user-edit"></i><p>{userData.fullname.split(" ")[0]}</p></button></Link>
                </>)  
              
              }
                </div>
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