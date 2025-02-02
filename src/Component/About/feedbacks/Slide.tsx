import React, { useState, useEffect } from "react";
import { feedbacks } from "../../Data/Data";
import { motion } from "framer-motion";
import { FadeUp ,FadeRight} from "../../../Utility/Animation";

const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      NextIndex();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const NextIndex = () => {
    setCurrentIndex((Previndex) =>
      Previndex === feedbacks.length - 1 ? 0 : Previndex + 1
    );
  };

  const PrevIndex = () => {
    setCurrentIndex((PrevIndex) =>
      PrevIndex === 0 ? feedbacks.length - 1 : PrevIndex - 1
    );
  };

  return (
    <div className="slide flex items-center justify-center gap-4">
      <div className="priv">
        <button onClick={PrevIndex}>
          <i className="fas fa-arrow-left icon"></i>
        </button>
      </div>

      <div
        key={currentIndex} 
       
        className="content text-center"
      >
        <i className="fas fa-quote-right"></i>
        <motion.p 
                     variants={FadeRight(0.4)}

             initial="hidden"
             animate="visible"
             transition={{ duration:1,delay:0.4}}
        >{feedbacks[currentIndex].feedback}</motion.p>
        <motion.img
          src={feedbacks[currentIndex].image}
          alt=""
          variants={FadeRight(0.4)}
          initial="hidden"
          animate="visible"
          transition={{ duration:1,delay:0.4}}
          exit="exit"
         
        />
        <motion.h4
         initial="hidden"
         animate="visible"
         exit="exit"
         variants={FadeRight(0.4)}
         transition={{ duration:1,delay:0.4}}
        >{feedbacks[currentIndex].name}</motion.h4>
      </div>

      {/* Next Button */}
      <div className="next">
        <button onClick={NextIndex}>
          <i className="fas fa-arrow-right icon"></i>
        </button>
      </div>
    </div>
  );
};

export default Slide;
