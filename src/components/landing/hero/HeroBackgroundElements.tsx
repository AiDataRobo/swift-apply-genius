
import React from 'react';
import { motion } from "framer-motion";

const HeroBackgroundElements: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <motion.div className="absolute top-1/4 left-1/4 w-60 h-60 bg-primary/10 rounded-full blur-3xl parallax-element" data-speed="0.05" variants={fadeInUp} />
      <motion.div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl parallax-element" data-speed="0.08" variants={fadeInUp} />
      
      {/* Decorative elements */}
      <motion.div className="absolute top-1/4 right-[15%] w-24 h-24 opacity-20 parallax-element" data-speed="0.12" variants={fadeInUp}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M26.6,-44.1C35.1,-35.9,43,-28.8,46.9,-19.8C50.8,-10.8,50.8,0.1,48.9,11.1C47,22.1,43.2,33.1,35.3,42.5C27.4,51.9,15.5,59.6,3.4,56.2C-8.7,52.9,-20.8,38.4,-28.2,27.5C-35.6,16.5,-38.3,9.2,-38.3,0C-38.2,-9.1,-35.5,-18.1,-29.6,-26.4C-23.7,-34.6,-14.7,-42.1,-4.3,-37.8C6.1,-33.5,18,-52.3,26.6,-44.1Z" transform="translate(100 100)" />
        </svg>
      </motion.div>
      
      <motion.div className="absolute bottom-1/3 left-[10%] w-32 h-32 opacity-30 parallax-element" data-speed="0.1" variants={fadeInUp}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M45.7,-56.5C58.9,-47.8,69.2,-33.1,72.7,-16.8C76.2,-0.4,73.1,17.6,63.9,30.9C54.7,44.1,39.5,52.5,24.1,57.4C8.6,62.3,-7,63.7,-20.6,58.6C-34.1,53.5,-45.5,42,-54.6,27.7C-63.7,13.5,-70.3,-3.6,-66.9,-18.1C-63.5,-32.6,-50.1,-44.6,-36.1,-53.1C-22.1,-61.5,-7.5,-66.4,7.5,-74.1C22.5,-81.9,32.5,-65.3,45.7,-56.5Z" transform="translate(100 100)" />
        </svg>
      </motion.div>
    </>
  );
};

export default HeroBackgroundElements;
