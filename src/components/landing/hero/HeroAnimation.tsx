
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
        {/* Glass card effect for the main animation */}
        <motion.div
          className="relative z-10 bg-white/5 backdrop-blur-sm rounded-2xl shadow-xl border border-white/10 p-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <Lottie 
            animationData={resumeReviewAnimation} 
            loop={true} 
            className="w-full h-auto rounded-xl overflow-hidden"
          />
        </motion.div>
        
        {/* Floating card elements */}
        <motion.div
          className="absolute -top-8 -right-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-20 border border-gray-100 dark:border-gray-700"
          animate={{ y: [0, -15, 0], rotate: [-2, 2, -2] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="ml-3">
              <div className="text-xs font-semibold">ATS Compatible</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Passes all systems</div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-20 border border-gray-100 dark:border-gray-700"
          animate={{ y: [0, 15, 0], rotate: [2, -2, 2] }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        >
          <div className="flex items-center">
            <div className="w-8 h-8 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15V3M12 15L8 11M12 15L16 11M21 21H3" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="ml-3">
              <div className="text-xs font-semibold">Expert Written</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">By industry professionals</div>
            </div>
          </div>
        </motion.div>
        
        {/* New floating card for Interview Guarantee */}
        <motion.div
          className="absolute top-1/2 -right-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-20 border border-gray-100 dark:border-gray-700"
          animate={{ y: [0, 10, 0], rotate: [-1, 1, -1] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", delay: 0.8 }}
        >
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M20.618 5.984C18.29 5.42 16.136 3.956 14.25 2.25C13.989 2.036 13.516 2.036 13.254 2.25C11.368 3.956 9.215 5.42 6.886 5.984C6.448 6.091 6 6.542 6 7.075V14.261C6 16.511 7.029 18.664 9.75 20.085C10.992 20.655 12.006 21.012 13 21.012C13.994 21.012 15.008 20.655 16.25 20.085C18.971 18.664 20 16.511 20 14.261V7.075C20 6.542 19.552 6.091 19.114 5.984H20.618Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="ml-3">
              <div className="text-xs font-semibold">Interview Guarantee</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Or money back</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroAnimation;
