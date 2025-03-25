
import React from 'react';
import { motion } from "framer-motion";
import HeroFeatureItem from './HeroFeatureItem';

const HeroTrustBadge: React.FC = () => {
  return (
    <motion.div 
      className="mt-8 flex flex-col items-center lg:items-start"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6 }
        }
      }}
    >
      <div className="text-sm text-muted-foreground mb-4">Trusted by 10,000+ Job Seekers & Professionals</div>
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
        {["ATS-Optimized", "Recruiter-Approved", "Interview-Winning"].map((feature, index) => (
          <HeroFeatureItem key={index} text={feature} />
        ))}
      </div>
    </motion.div>
  );
};

export default HeroTrustBadge;
