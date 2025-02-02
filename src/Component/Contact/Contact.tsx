import React from 'react'
import Heading from '../Home/Heading'
import Form from './Form'
import './contact.css'
const Contact = () => {
  return (
    <>
        <section className="contact">
            <div className="head">
                <Heading title='Contact us'/>
                <p>Get in Touch with Us</p>
            </div>
            <div className="contact-form">
                <Form/>
            </div>
        </section>
    </>
  )
}

export default Contact