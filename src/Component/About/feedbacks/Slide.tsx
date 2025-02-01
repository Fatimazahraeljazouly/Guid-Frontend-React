import React, { useState, useEffect } from "react";
import { feedbacks } from "../../Data/Data";
const Slide = () => {
  const [currentIndex,setCurrentIndex]=useState(0);
  useEffect (()=>{
        const interval = setInterval(()=>{
            NextIndex();
        },5000) ;
        return ()=>clearInterval(interval);
  },[currentIndex])
  const NextIndex =()=>{
        setCurrentIndex((Previndex)=>Previndex===feedbacks.length-1?0:Previndex+1);
  }
  const PrevIndex=()=>{
    setCurrentIndex((PrevIndex)=>PrevIndex===0?feedbacks.length-1:PrevIndex-1);
  }
  return (
    <div className="slide">
        <div className="priv">
            <button onClick={PrevIndex}><i className="fas fa-arrow-left icon"></i></button>
        </div>
        <div className="content">
            <i className="fas fa-quote-right"></i>
            <p>{feedbacks[currentIndex].feedback}</p>
            <img src={feedbacks[currentIndex].image} alt="" />
            <h4>{feedbacks[currentIndex].name}</h4>
           {/*  <h6>{feedbacks[currentIndex].role}</h6> */}
        </div>
        <div className="next">
            <button onClick={NextIndex}><i className="fas fa-arrow-right icon"></i></button>
        </div>
    </div>
  )
};

export default Slide;
