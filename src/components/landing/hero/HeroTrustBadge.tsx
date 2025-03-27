
import React from 'react';
import { motion } from "framer-motion";
import HeroFeatureItem from './HeroFeatureItem';
import { CheckCircle, Shield, Award } from 'lucide-react';

const HeroTrustBadge: React.FC = () => {
  return (
    <motion.div 
      className="mt-4 flex flex-col items-center lg:items-start"
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
          className="inline-flex items-center px-3 py-1 mr-3 rounded-full bg-green-100 text-green-800 text-xs font-semibold"
        >
          <CheckCircle className="h-3 w-3 mr-1" />
          95% Interview Success Rate
        </motion.span>
        <span>Trusted by 100,000+ Job Seekers</span>
      </div>
      
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
        <div className="flex items-center gap-2 text-sm">
          <Shield className="h-4 w-4 text-blue-600" />
          <span>GDPR Compliant</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <span>ATS Compatible</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm">
          <Award className="h-4 w-4 text-amber-600" />
          <span>Expert Approved</span>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroTrustBadge;
