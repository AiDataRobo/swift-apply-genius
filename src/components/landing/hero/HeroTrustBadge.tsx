
import React from 'react';
import { motion } from "framer-motion";
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
      <div className="text-sm text-muted-foreground mb-4 flex flex-wrap items-center gap-3">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-semibold"
        >
          <CheckCircle className="h-3 w-3 mr-1" />
          Trusted by 25,000+ job seekers
        </motion.span>
        
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold"
        >
          <Shield className="h-3 w-3 mr-1" />
          GDPR Compliant
        </motion.span>
        
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold"
        >
          <Award className="h-3 w-3 mr-1" />
          7-Day Interview Guarantee
        </motion.span>
      </div>
    </motion.div>
  );
};

export default HeroTrustBadge;
