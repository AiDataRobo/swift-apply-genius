
import React, { useEffect, useRef } from 'react';
import { ClipboardEdit, Sparkles, Download, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: <ClipboardEdit className="h-8 w-8 text-primary" />,
      title: "Enter Your Details",
      description: "Provide your experience, skills, education, and job preferences to our AI assistant."
    },
    {
      number: "02",
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "AI Generates Your Documents",
      description: "Our AI instantly creates a tailored resume and cover letter optimized for your target role."
    },
    {
      number: "03",
      icon: <Download className="h-8 w-8 text-primary" />,
      title: "Customize & Download",
      description: "Fine-tune content, choose your favorite template, and export in multiple formats."
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl" />

      <div className="container section-container relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full mb-4">
            <span className="text-xs font-medium text-primary">HOW IT WORKS</span>
          </div>
          <h2 className="section-heading">Create Your Perfect Resume in Three Simple Steps</h2>
          <p className="section-subheading mx-auto">
            Our streamlined process makes resume creation quick and painless
          </p>
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
                <div className="glass-card p-8 rounded-2xl relative z-10 h-full flex flex-col items-center shadow-md border border-slate-100 hover:shadow-xl transition-all duration-300 group">
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
                </div>
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
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 mb-6">
            <span className="text-xs font-medium text-primary">SIMPLE & INTUITIVE PROCESS</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            From Blank Page to Job-Ready Documents in Under 5 Minutes
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-10">
            Our streamlined process takes the pain out of resume and cover letter creation. 
            Just answer a few questions, and our AI does the heavy lifting for you.
          </p>
          
          <motion.div 
            className="flex justify-center"
            whileInView={{ scale: [0.9, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <a href="/resume-builder" className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors group">
              Try It Now
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
