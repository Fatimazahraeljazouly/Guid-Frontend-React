import React from 'react'
import './register.css'
import Heading from '../../Home/Heading'
import Form from './Form'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <>
        <section className="register">
            <div className="head">
                <Heading title='Create an Account & Start Exploring'/>
            </div>
            <div className="form">
                <h3>Do You Already Have An Account  ? <Link to={'/login'} ><span>Login</span></Link></h3>
                <Form/>
            </div>
        </section>
    </>
)
}

export default Register