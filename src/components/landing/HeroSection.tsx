
import React, { useRef } from 'react';
import { motion } from "framer-motion";
import HeroBackgroundElements from './hero/HeroBackgroundElements';
import HeroContent from './hero/HeroContent';
import HeroAnimation from './hero/HeroAnimation';
import useParallaxEffect from './hero/useParallaxEffect';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Use the custom hook for parallax effect
  useParallaxEffect(heroRef);

  // Animation variants
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.section 
      ref={heroRef} 
      className="min-h-[90vh] relative flex flex-col items-center justify-center pt-28 pb-16 px-6 overflow-hidden bg-gradient-to-b from-background to-background/95"
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
    >
      <HeroBackgroundElements />
      
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl text-center lg:text-left relative z-10">
        <HeroContent />
        <HeroAnimation />
      </div>
      
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      />
    </motion.section>
  );
};

export default HeroSection;
