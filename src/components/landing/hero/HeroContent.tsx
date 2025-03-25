
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

  const popIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 0.8
      }
    }
  };

  return (
    <motion.div variants={fadeInUp} className="order-2 lg:order-1">
      <motion.div 
        className="inline-flex items-center px-4 py-2 bg-foreground/5 rounded-full mb-6"
        variants={popIn}
      >
        <span className="text-xs font-medium text-primary mr-2">NEW</span>
        <span className="text-xs font-medium">Expert Resume Writing Services Now Available!</span>
      </motion.div>
      
      <motion.h1 
        className="section-heading mb-6 mx-auto max-w-4xl"
        variants={fadeInUp}
      >
        Your Dream Job Starts with the <span className="text-primary">Perfect Resume</span>
      </motion.h1>
      
      <motion.p 
        className="section-subheading mx-auto lg:mx-0 mb-8"
        variants={fadeInUp}
      >
        Create an AI-powered resume instantly or let our experts craft a job-winning resume tailored for you.
      </motion.p>
      
      <HeroCallToAction />
      <HeroTrustBadge />
    </motion.div>
  );
};

export default HeroContent;
