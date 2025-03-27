
import React from 'react';
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import resumeReviewAnimation from "../../../assets/animations/resume-review.json";

const HeroAnimation: React.FC = () => {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6 }
        }
      }}
      className="order-1 lg:order-2 flex justify-center items-center relative"
    >
      {/* Background decorative elements */}
      <motion.div 
        className="absolute -z-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      <motion.div 
        className="absolute top-1/4 right-1/4 -z-10 w-40 h-40 rounded-full bg-blue-400/10 blur-2xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />
      
      {/* Card elements */}
      <div className="relative w-full max-w-md">
        {/* Main animation */}
        <motion.div
          className="relative z-10"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
        >
          <Lottie 
            animationData={resumeReviewAnimation} 
            loop={true} 
            className="w-full h-auto"
          />
        </motion.div>
        
        {/* Floating card elements */}
        <motion.div
          className="absolute -top-8 -right-8 bg-white rounded-lg shadow-lg p-4 z-20"
          animate={{ y: [0, -15, 0], rotate: [-2, 2, -2] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="ml-3">
              <div className="text-xs font-semibold">ATS Compatible</div>
              <div className="text-xs text-gray-500">Passes all systems</div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 z-20"
          animate={{ y: [0, 15, 0], rotate: [2, -2, 2] }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        >
          <div className="flex items-center">
            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15V3M12 15L8 11M12 15L16 11M21 21H3" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="ml-3">
              <div className="text-xs font-semibold">Easy Download</div>
              <div className="text-xs text-gray-500">PDF & DOCX formats</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroAnimation;
