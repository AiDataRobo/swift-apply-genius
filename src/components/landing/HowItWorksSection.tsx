
import React, { useRef } from 'react';
import { ClipboardEdit, Sparkles, Download, ArrowRight, CheckCircle2, Zap, Mouse, Palette } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: <ClipboardEdit className="h-8 w-8 text-primary" />,
      title: "Enter Your Details",
      description: "Provide your experience, skills, education, and job preferences to our AI assistant.",
      animation: <EnterDetailsAnimation />
    },
    {
      number: "02",
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "AI Generates Your Documents",
      description: "Our AI instantly creates a tailored resume and cover letter optimized for your target role.",
      animation: <AIGenerationAnimation />
    },
    {
      number: "03",
      icon: <Download className="h-8 w-8 text-primary" />,
      title: "Customize & Download",
      description: "Fine-tune content, choose your favorite template, and export in multiple formats.",
      animation: <CustomizeAnimation />
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      {/* Decorative shapes */}
      <motion.div 
        className="absolute top-1/4 left-0 w-24 h-24 opacity-10"
        initial={{ opacity: 0, rotate: 0 }}
        whileInView={{ opacity: 0.1, rotate: 45 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M30.9,-45.7C38.8,-33.8,43.3,-22.8,49.2,-10.3C55,2.2,62.2,16.2,59.1,27.4C56,38.7,42.5,47.1,28.5,52.6C14.5,58,0,60.4,-14,58.1C-28,55.8,-41.6,48.7,-53.3,37.9C-65,27,-74.8,12.4,-74.1,-1.3C-73.4,-15.1,-62.1,-28.2,-49.4,-39.9C-36.7,-51.7,-22.5,-62.1,-8.5,-62.3C5.5,-62.5,23,-57.6,30.9,-45.7Z" transform="translate(100 100)" />
        </svg>
      </motion.div>

      <motion.div 
        className="absolute bottom-1/4 right-1/12 w-32 h-32 opacity-10"
        initial={{ opacity: 0, rotate: 0 }}
        whileInView={{ opacity: 0.1, rotate: -30 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M42.7,-62.2C56.8,-53.3,70.8,-42.8,77.2,-28.5C83.6,-14.3,82.3,3.7,76.4,19.7C70.4,35.7,59.9,49.6,46.4,59.9C33,70.1,16.5,76.6,0.2,76.4C-16.2,76.2,-32.3,69.2,-45.5,58.8C-58.7,48.4,-69,34.4,-75.1,18.1C-81.2,1.8,-83.1,-16.9,-76,-31.2C-68.9,-45.5,-52.9,-55.5,-37.8,-64C-22.7,-72.4,-8.5,-79.4,3.4,-84.4C15.3,-89.4,28.7,-92.5,36.4,-82.3C44.1,-72.1,28.5,-71.1,42.7,-62.2Z" transform="translate(100 100)" />
        </svg>
      </motion.div>

      <div className="container section-container relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full mb-4"
            variants={fadeInUpVariants}
          >
            <span className="text-xs font-medium text-primary">HOW IT WORKS</span>
          </motion.div>
          <motion.h2 
            className="section-heading"
            variants={fadeInUpVariants}
          >
            Create Your Perfect Resume in Three Simple Steps
          </motion.h2>
          <motion.p 
            className="section-subheading mx-auto"
            variants={fadeInUpVariants}
          >
            Our streamlined process makes resume creation quick and painless
          </motion.p>
        </motion.div>
        
        <div className="relative mt-20">
          {/* Connection line with animation */}
          <motion.div 
            className="absolute left-1/2 top-10 bottom-10 w-0.5 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/10 hidden lg:block -translate-x-1/2"
            initial={{ height: 0 }}
            whileInView={{ height: "80%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5 }}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="relative flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="absolute -top-10 left-0 right-0 text-8xl font-bold text-primary/10 select-none flex justify-center opacity-80">
                  {step.number}
                </div>
                <motion.div 
                  className="glass-card p-8 rounded-2xl relative z-10 h-full flex flex-col items-center shadow-md border border-slate-100 hover:shadow-xl transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                >
                  {/* Connected dot for desktop */}
                  <motion.div 
                    className="absolute top-1/2 left-0 -translate-x-1/2 hidden lg:block"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.2 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-white border-2 border-primary flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                  </motion.div>
                  
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  
                  {/* Step animation illustration */}
                  <div className="mt-6 h-32 w-full flex items-center justify-center">
                    {step.animation}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div 
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-xs font-medium text-primary">SIMPLE & INTUITIVE PROCESS</span>
          </motion.div>
          <motion.h3 
            className="text-2xl md:text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From Blank Page to Job-Ready Documents in Under 5 Minutes
            <motion.span 
              className="inline-block ml-2" 
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 15, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
            >
              <Zap className="inline-block h-7 w-7 text-primary" />
            </motion.span>
          </motion.h3>
          <motion.p 
            className="text-muted-foreground max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Our streamlined process takes the pain out of resume and cover letter creation. 
            Just answer a few questions, and our AI does the heavy lifting for you.
          </motion.p>
          
          <motion.div 
            className="flex justify-center"
            whileInView={{ scale: [0.9, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/resume-builder" className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors group">
                Try It Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Animation components for each step
const EnterDetailsAnimation = () => {
  return (
    <motion.div 
      className="relative h-full w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 flex flex-col items-center justify-center"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <svg width="70" height="70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.rect 
            x="3" y="3" width="18" height="18" rx="2" 
            stroke="currentColor" 
            strokeWidth="2" 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.path 
            d="M7 9H17M7 13H17M7 17H12" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
        </svg>
        <motion.div
          className="absolute bottom-0 right-0 text-primary"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.2 }}
        >
          <Mouse className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const AIGenerationAnimation = () => {
  return (
    <motion.div 
      className="relative h-full w-full flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.div 
        className="w-28 h-28 relative"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <motion.div 
          className="absolute top-0 left-0 w-full h-full border-4 border-primary/30 rounded-full"
          initial={{ scale: 0.9, opacity: 0.3 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-4 border-primary/50 rounded-full"
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.2 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-4 border-primary/70 rounded-full"
          initial={{ scale: 0.8, opacity: 0.7 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.4 }}
        />
        
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Sparkles className="h-8 w-8" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const CustomizeAnimation = () => {
  return (
    <motion.div 
      className="relative h-full w-full flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.div className="relative w-28 h-28">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-28 border-2 border-gray-400 rounded-md bg-white shadow-md"
          initial={{ y: 0 }}
          animate={{ y: -5 }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        >
          <motion.div className="w-full h-3 bg-primary/20 rounded-t-md" />
          <motion.div className="p-1">
            <motion.div className="w-full h-2 bg-gray-200 rounded-md mb-1" />
            <motion.div className="w-2/3 h-2 bg-gray-200 rounded-md mb-1" />
            <motion.div className="w-5/6 h-2 bg-gray-200 rounded-md mb-3" />
            <motion.div className="w-full h-6 bg-gray-200 rounded-md mb-2" />
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute -right-3 -bottom-2 p-1.5 bg-white rounded-full shadow-md border border-gray-200"
          animate={{ rotate: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        >
          <Palette className="h-5 w-5 text-primary" />
        </motion.div>
        
        <motion.div 
          className="absolute -left-3 -bottom-2 p-1.5 bg-white rounded-full shadow-md border border-gray-200"
          whileHover={{ scale: 1.2 }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
        >
          <Download className="h-5 w-5 text-primary" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HowItWorksSection;
