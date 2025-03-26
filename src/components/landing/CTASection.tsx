
import React from 'react';
import { ArrowRight, Sparkles, FileText, Star, Shield } from 'lucide-react';
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

  return (
    <section className="py-24 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-white to-slate-50/80 pointer-events-none"
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
          className="glass-card bg-gradient-to-br from-white to-blue-50/50 p-12 md:p-16 rounded-3xl relative overflow-hidden shadow-xl border border-slate-100"
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
          
          <div className="relative z-10 text-center">
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6"
              variants={itemVariants}
            >
              <span className="text-xs font-medium text-primary">READY TO GET STARTED?</span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-display text-foreground flex items-center justify-center gap-3"
              variants={itemVariants}
            >
              Ready to Land Your Dream Job?
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
              Join thousands of successful job seekers who've transformed their job search with our powerful tools and expert services.
            </motion.p>
            
            {/* Success badges */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-10"
              variants={itemVariants}
            >
              <div className="flex items-center text-sm font-medium bg-white/80 rounded-full pl-2 pr-4 py-1.5">
                <div className="bg-primary/20 rounded-full p-1 mr-2">
                  <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                </div>
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center text-sm font-medium bg-white/80 rounded-full pl-2 pr-4 py-1.5">
                <div className="bg-primary/20 rounded-full p-1 mr-2">
                  <Shield className="h-3 w-3 text-green-500" />
                </div>
                <span>100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center text-sm font-medium bg-white/80 rounded-full pl-2 pr-4 py-1.5">
                <div className="bg-primary/20 rounded-full p-1 mr-2">
                  <FileText className="h-3 w-3 text-blue-500" />
                </div>
                <span>500,000+ Resumes Created</span>
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
                      Start For Free
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
                <Button variant="outline" className="py-6 px-8 text-lg rounded-xl w-full sm:w-auto hover:bg-white/80 transition-all duration-300">
                  <FileText className="mr-2 h-5 w-5" />
                  Get a Free Resume Review
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Sticky CTA for mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-lg md:hidden">
        <div className="container flex justify-between gap-2">
          <Button className="flex-1 py-2" size="sm" asChild>
            <Link to="/resume-builder">
              Start For Free
            </Link>
          </Button>
          <Button variant="outline" className="flex-1 py-2" size="sm">
            Free Resume Review
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
