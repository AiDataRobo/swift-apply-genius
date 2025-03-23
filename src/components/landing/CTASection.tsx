
import React from 'react';
import { ArrowRight, Sparkles, FileText, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTASection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const iconMotion = {
    initial: { rotate: 0 },
    animate: { rotate: [0, 10, 0] },
    transition: { duration: 0.5, repeat: Infinity, repeatDelay: 5 }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-background to-primary/5 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-70"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{ duration: 1 }}
      />
      <motion.div 
        className="absolute -bottom-32 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl opacity-60"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      
      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <motion.div 
          className="glass-card bg-white p-12 md:p-16 rounded-3xl relative overflow-hidden shadow-xl border border-slate-100"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent opacity-70 pointer-events-none" />
          
          {/* Decorative pattern */}
          <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 0 10 L 40 10 M 10 0 L 10 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          {/* Decorative elements */}
          <motion.div 
            className="absolute top-10 right-10 text-primary opacity-20 hidden md:block"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            <svg width="120" height="120" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M42.2,-73.2C55.9,-66.7,69.1,-57.4,78.7,-44.3C88.4,-31.1,94.6,-15.6,94.4,-0.1C94.2,15.3,87.7,30.6,78.1,43.1C68.4,55.7,55.6,65.5,41.5,72.5C27.4,79.5,11.9,83.8,-2.9,88.5C-17.7,93.2,-35.4,98.4,-49.6,93.6C-63.7,88.8,-74.3,73.9,-82.1,58.1C-89.9,42.2,-94.9,25.4,-94.9,8.7C-94.9,-8,-89.8,-16.1,-83.9,-23.9C-78,-31.7,-71.2,-39.4,-62.1,-47.8C-53,-56.2,-41.5,-65.4,-28.8,-71.7C-16.1,-78,-3.9,-81.4,7.9,-94.6C19.6,-107.8,28.4,-79.7,42.2,-73.2Z" transform="translate(100 100)" />
            </svg>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-10 left-10 text-blue-400 opacity-20 hidden md:block"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            <svg width="80" height="80" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M42.9,-76C53.5,-67.7,58.7,-51.5,65.1,-37.2C71.5,-22.9,79.1,-10.4,77.5,0.9C76,12.3,65.3,22.6,56.3,34.1C47.3,45.7,40,58.3,29.5,63.7C18.9,69.1,5.1,67.3,-7.9,63.8C-20.9,60.3,-33.2,55.1,-44.2,47.2C-55.2,39.3,-65.1,28.7,-71.5,15C-77.9,1.3,-80.9,-15.4,-75.3,-28.7C-69.7,-42,-55.4,-51.9,-41.4,-59.1C-27.3,-66.2,-13.6,-70.6,1.2,-72.7C16.1,-74.8,32.2,-74.7,42.9,-76Z" transform="translate(100 100)" />
            </svg>
          </motion.div>
          
          <div className="relative z-10 text-center">
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6"
              variants={itemVariants}
            >
              <span className="text-xs font-medium text-primary">START NOW</span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-display text-foreground flex items-center justify-center gap-3"
              variants={itemVariants}
            >
              Ready to Land Your Next Job?
              <motion.span 
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkles className="h-8 w-8 text-primary" />
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
              variants={itemVariants}
            >
              Join thousands of successful job seekers who've transformed their job search with SwiftApply's AI-powered tools.
            </motion.p>
            
            {/* Benefits list */}
            <motion.div 
              className="flex flex-col items-center mb-10 space-y-3"
              variants={itemVariants}
            >
              <div className="flex flex-wrap gap-4 justify-center">
                {["ATS-Optimized", "AI-Powered Content", "Modern Templates", "Instant Download"].map((benefit, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center text-sm font-medium text-gray-700 bg-gray-100 rounded-full px-4 py-1.5"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(224, 242, 254, 1)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    {benefit}
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              variants={itemVariants}
            >
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button className="glass-button py-6 px-8 text-lg rounded-xl w-full sm:w-auto group transition-all duration-300" asChild>
                  <Link to="/resume-builder" className="group relative overflow-hidden">
                    <span className="relative z-10 flex items-center">
                      Start Your Resume Now
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button variant="outline" className="py-6 px-8 text-lg rounded-xl w-full sm:w-auto hover:bg-secondary/50 transition-all duration-300">
                  <FileText className="mr-2 h-5 w-5" />
                  View Templates
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
