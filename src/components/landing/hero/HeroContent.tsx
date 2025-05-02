
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
        className="inline-flex items-center px-4 py-2 bg-red-500/10 rounded-full mb-6"
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
        <span className="text-xs font-medium text-red-500 mr-2">🔥</span>
        <span className="text-xs font-medium">PROFESSIONAL RESUME WRITING</span>
      </motion.div>
      
      <motion.h1 
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight"
        variants={fadeInUp}
      >
        Not Getting Interview Calls? <span className="text-primary">It Might Be Your Resume.</span>
      </motion.h1>
      
      <motion.p 
        className="text-lg text-muted-foreground mb-8 max-w-lg"
        variants={fadeInUp}
      >
        We craft expert-written, ATS-optimized resumes that land interviews. Let professionals rewrite your career story.
      </motion.p>
      
      <HeroCallToAction />
      
      <HeroTrustBadge />
    </motion.div>
  );
};

export default HeroContent;
