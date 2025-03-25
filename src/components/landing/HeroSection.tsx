
import React, { useEffect, useRef } from 'react';
import { ArrowRight, FileText, Zap, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import resumeReviewAnimation from "../../assets/animations/resume-review.json";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add('animate-fade-in');
    }
    
    // Add parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const heroElement = heroRef.current;
      const heroChildren = heroElement.querySelectorAll('.parallax-element');
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      heroChildren.forEach((element) => {
        const el = element as HTMLElement;
        const speed = parseFloat(el.getAttribute('data-speed') || '0.05');
        const moveX = (x - 0.5) * speed * 50;
        const moveY = (y - 0.5) * speed * 50;
        
        el.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const popIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 0.8
      }
    }
  };

  return (
    <motion.section 
      ref={heroRef} 
      className="min-h-screen relative flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <motion.div className="absolute top-1/4 left-1/4 w-60 h-60 bg-primary/10 rounded-full blur-3xl parallax-element" data-speed="0.05" variants={fadeInUp} />
      <motion.div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl parallax-element" data-speed="0.08" variants={fadeInUp} />
      
      {/* Decorative elements */}
      <motion.div className="absolute top-1/4 right-[15%] w-24 h-24 opacity-20 parallax-element" data-speed="0.12" variants={fadeInUp}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M26.6,-44.1C35.1,-35.9,43,-28.8,46.9,-19.8C50.8,-10.8,50.8,0.1,48.9,11.1C47,22.1,43.2,33.1,35.3,42.5C27.4,51.9,15.5,59.6,3.4,56.2C-8.7,52.9,-20.8,38.4,-28.2,27.5C-35.6,16.5,-38.3,9.2,-38.3,0C-38.2,-9.1,-35.5,-18.1,-29.6,-26.4C-23.7,-34.6,-14.7,-42.1,-4.3,-37.8C6.1,-33.5,18,-52.3,26.6,-44.1Z" transform="translate(100 100)" />
        </svg>
      </motion.div>
      
      <motion.div className="absolute bottom-1/3 left-[10%] w-32 h-32 opacity-30 parallax-element" data-speed="0.1" variants={fadeInUp}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M45.7,-56.5C58.9,-47.8,69.2,-33.1,72.7,-16.8C76.2,-0.4,73.1,17.6,63.9,30.9C54.7,44.1,39.5,52.5,24.1,57.4C8.6,62.3,-7,63.7,-20.6,58.6C-34.1,53.5,-45.5,42,-54.6,27.7C-63.7,13.5,-70.3,-3.6,-66.9,-18.1C-63.5,-32.6,-50.1,-44.6,-36.1,-53.1C-22.1,-61.5,-7.5,-66.4,7.5,-74.1C22.5,-81.9,32.5,-65.3,45.7,-56.5Z" transform="translate(100 100)" />
        </svg>
      </motion.div>
      
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl text-center lg:text-left relative z-10">
        <motion.div variants={fadeInUp} className="order-2 lg:order-1">
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-foreground/5 rounded-full mb-6"
            variants={popIn}
          >
            <span className="text-xs font-medium text-primary mr-2">NEW</span>
            <span className="text-xs font-medium">Expert Resume Writing Services Now Available!</span>
          </motion.div>
          
          <motion.h1 
            className="section-heading mb-6 mx-auto max-w-4xl"
            variants={fadeInUp}
          >
            Your Dream Job Starts with the <span className="text-primary">Perfect Resume</span>
          </motion.h1>
          
          <motion.p 
            className="section-subheading mx-auto lg:mx-0 mb-8"
            variants={fadeInUp}
          >
            Create an AI-powered resume instantly or let our experts craft a job-winning resume tailored for you.
          </motion.p>
          
          <motion.div 
            className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            variants={fadeInUp}
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
          
          <motion.div 
            className="mt-8 flex flex-col items-center lg:items-start"
            variants={fadeInUp}
          >
            <div className="text-sm text-muted-foreground mb-4">Trusted by 10,000+ Job Seekers & Professionals</div>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
              {["ATS-Optimized", "Recruiter-Approved", "Interview-Winning"].map((feature, index) => (
                <div key={index} className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          variants={fadeInUp} 
          className="order-1 lg:order-2 flex justify-center items-center"
        >
          <div className="w-full max-w-md">
            <Lottie 
              animationData={resumeReviewAnimation} 
              loop={true} 
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
