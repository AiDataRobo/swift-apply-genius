
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
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 text-xs font-medium shadow-sm"
        >
          <CheckCircle className="h-3 w-3 mr-2" />
          Trusted by 25,000+ job seekers
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 text-xs font-medium shadow-sm"
        >
          <Shield className="h-3 w-3 mr-2" />
          GDPR Compliant
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 text-xs font-medium shadow-sm"
        >
          <Award className="h-3 w-3 mr-2" />
          7-Day Interview Guarantee
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroTrustBadge;
