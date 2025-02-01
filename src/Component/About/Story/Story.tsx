import React from "react";
import Heading from "../../Home/Heading";
import "./story.css";
import img from "../../../assets/images/hero1.jpg";

const Story = () => {
  return (
    <section className="story padding">
      <div className="container">
            <Heading title="About Us" />
            <div className="content mtop grid2">
                <div className="story-description">
                    <h2>Our Story</h2>
                    <p>
                        Founded in 2020, Discover Morocco was born from a passion to share the authentic beauty
                        and rich cultural tapestry of our beloved kingdom with the world. Our platform serves as
                        your gateway to experiencing Morocco's magnificent landscapes, from the sweeping Sahara dunes
                        to the majestic Atlas Mountains.
                    </p>
                    <p> 
                        We take pride in curating exceptional travel experiences that combine luxury with authenticity,
                        ensuring every journey tells a unique story.
                    </p>
                </div>
                <div className="story-details__image-wrapper">
                    <img src={img} alt="Scenic view of Morocco" className="story-details__image" />
                    <div className="story-details__quote">
                        <i className="fas fa-quote-right"></i>
                        <p>"An unforgettable journey through Morocco's heart and soul."</p>
                    </div>
                </div>
            </div>
           
      </div>
    </section>
  );
};

export default Story;
