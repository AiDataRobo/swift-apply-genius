
import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroCallToAction: React.FC = () => {
  return (
    <motion.div 
      className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6 }
        }
      }}
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button className="glass-button text-base py-6 px-8 rounded-xl w-full sm:w-auto group relative overflow-hidden" asChild>
          <Link to="/resume-builder">
            <span className="relative z-10 flex items-center">
              Build My Resume
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <motion.span 
              className="absolute inset-0 bg-primary/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 1 }}
            />
          </Link>
        </Button>
      </motion.div>
      
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button variant="outline" className="text-base py-6 px-8 rounded-xl w-full sm:w-auto">
          <FileText className="mr-2 h-5 w-5" />
          Get a Free Resume Review
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default HeroCallToAction;
