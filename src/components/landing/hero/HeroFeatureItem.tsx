
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroFeatureItemProps {
  text: string;
}

const HeroFeatureItem: React.FC<HeroFeatureItemProps> = ({ text }) => {
  return (
    <motion.div 
      className="flex items-center text-sm font-medium"
      initial={{ opacity: 0, x: -5 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
      <span>{text}</span>
    </motion.div>
  );
};

export default HeroFeatureItem;
