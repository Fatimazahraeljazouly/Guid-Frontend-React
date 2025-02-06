import React from 'react'
import './hero.css'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
           <h1>Explore the beauty of morocco</h1>
           <p>Discover the magic of ancient medinas, breathtaking landscapes, and richcultural heritage in the heart of North Africa.</p>
          <Link to={'/register'}>          <button>get start    <i className="fa fa-arrow-right"></i> </button>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Hero
