
import React from 'react';
import { motion } from "framer-motion";
import HeroCallToAction from './HeroCallToAction';
import HeroTrustBadge from './HeroTrustBadge';

const HeroContent: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div variants={fadeInUp} className="order-2 lg:order-1">
      <motion.div 
        className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { 
            opacity: 1, 
            scale: 1,
            transition: { 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              delay: 0.4
            }
          }
        }}
      >
        <span className="text-xs font-medium text-primary mr-2">AI-POWERED</span>
        <span className="text-xs font-medium">Build Your Resume in Minutes</span>
      </motion.div>
      
      <motion.h1 
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight"
        variants={fadeInUp}
      >
        Land Your <span className="text-primary">Dream Job</span> Faster with an ATS-Optimized Resume
      </motion.h1>
      
      <motion.p 
        className="text-lg text-muted-foreground mb-8 max-w-lg"
        variants={fadeInUp}
      >
        Build a professional, recruiter-approved resume in minutes — or get expert help to craft one from scratch.
      </motion.p>
      
      <HeroCallToAction />
      
      <HeroTrustBadge />
    </motion.div>
  );
};

export default HeroContent;
