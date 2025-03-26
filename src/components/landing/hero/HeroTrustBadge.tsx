
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
      <div className="text-sm text-muted-foreground mb-4 flex items-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="inline-flex items-center px-3 py-1 mr-3 rounded-full bg-primary/10 text-primary text-xs font-semibold"
        >
          500,000+ Resumes Reviewed
        </motion.span>
        <span>Trusted by Job Seekers & Professionals</span>
      </div>
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
        {["ATS-Optimized", "Recruiter-Approved", "Interview-Winning"].map((feature, index) => (
          <HeroFeatureItem key={index} text={feature} />
        ))}
      </div>
    </motion.div>
  );
};

export default HeroTrustBadge;
