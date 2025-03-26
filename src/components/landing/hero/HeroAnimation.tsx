
import React from 'react';
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import resumeReviewAnimation from "../../../assets/animations/resume-review.json";

const HeroAnimation: React.FC = () => {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6 }
        }
      }}
      className="order-1 lg:order-2 flex justify-center items-center relative"
    >
      <motion.div 
        className="absolute -z-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      <div className="w-full max-w-md">
        <Lottie 
          animationData={resumeReviewAnimation} 
          loop={true} 
          className="w-full h-auto"
        />
      </div>
    </motion.div>
  );
};

export default HeroAnimation;
