
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, Upload, CheckCircle, ArrowRight, Download, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CalBookingModal from "@/components/booking/CalBookingModal";

const HowItWorksSection = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = React.useState(false);
  
  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);

  const steps = [
    {
      step: 1,
      title: "Choose your path",
      description: "DIY with our AI tools or get expert help",
      icon: <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
        <FileText className="h-6 w-6 text-primary" />
      </div>
    },
    {
      step: 2,
      title: "Upload or enter your details",
      description: "Share your work history, skills, and achievements",
      icon: <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
        <Upload className="h-6 w-6 text-blue-500" />
      </div>
    },
    {
      step: 3,
      title: "Customize or collaborate",
      description: "Fine-tune your resume or work with our experts",
      icon: <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
        <CheckCircle className="h-6 w-6 text-amber-500" />
      </div>
    },
    {
      step: 4,
      title: "Download your job-winning resume",
      description: "Get your ATS-optimized resume in multiple formats",
      icon: <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
        <Download className="h-6 w-6 text-green-500" />
      </div>
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-32 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-2xl"></div>
      
      <div className="container max-w-7xl mx-auto px-6 relative z-20">
        <div className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-medium text-primary">HOW IT WORKS</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Four Simple Steps to Your Perfect Resume
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Our streamlined process makes resume creation quick and effortless
          </motion.p>
        </div>

        {/* Timeline Steps */}
        <div className="relative mb-20">
          {/* Timeline line */}
          <div className="absolute top-16 left-0 w-full h-0.5 bg-slate-200 hidden md:block"></div>
          
          {/* Step cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="relative"
              >
                <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center h-full border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-white shadow-sm p-2 rounded-full absolute -top-6 border border-slate-100 z-10">
                    {step.icon}
                  </div>
                  <div className="mt-6">
                    <div className="text-primary font-semibold text-sm mb-2">STEP {step.step}</div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="flex flex-col md:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Button size="lg" className="w-full md:w-auto" asChild>
            <Link to="/resume-builder">
              <FileText className="mr-2 h-5 w-5" />
              Build My Resume
            </Link>
          </Button>
          
          <Button size="lg" variant="outline" className="w-full md:w-auto" asChild>
            <Link to="/resume-review">
              <Upload className="mr-2 h-5 w-5" />
              Review My Resume
            </Link>
          </Button>
          
          <Button size="lg" variant="secondary" className="w-full md:w-auto" onClick={openBookingModal}>
            <Calendar className="mr-2 h-5 w-5" />
            Book a Consultation
          </Button>
        </motion.div>
      </div>

      <CalBookingModal 
        isOpen={isBookingModalOpen} 
        onClose={closeBookingModal} 
        calLink="vishal17/expertcareeradvice"
      />
    </section>
  );
};

export default HowItWorksSection;
