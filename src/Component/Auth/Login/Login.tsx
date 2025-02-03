import React from 'react'
import './login.css'
import Heading from '../../Home/Heading'
import { Link } from 'react-router-dom'
import Form from './Form'
const Login = () => {
  return (
    <>
        <section className="login">
            <div className="head" >
                <Heading title='Welcome Back! Please Log In' />
            </div>
            <div className="form">
                <h3>Does Not Have An acount yet ? <Link to={'/register'} ><span>Register</span></Link></h3>
               <Form/>
            </div>
        </section>
    </>
  )
}

export default Login