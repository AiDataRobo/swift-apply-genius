
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, PenTool, CheckCircle, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50/70">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-medium text-primary">OUR SERVICES</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Comprehensive Career Solutions
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            From AI-powered tools to hands-on expert assistance, we provide everything you need for job search success
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* AI Resume Builder */}
          <motion.div 
            className="bg-white rounded-xl p-8 shadow-lg border border-slate-100 flex flex-col h-full"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-blue-50 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-5">
              <FileText className="h-7 w-7 text-blue-600" />
            </div>
            
            <h3 className="text-xl font-bold mb-3">Resume & Cover Letter Builder</h3>
            
            <p className="text-muted-foreground mb-5 flex-grow">
              Create professional, ATS-optimized resumes and cover letters in minutes with our AI-powered platform.
            </p>
            
            <ul className="mb-6 space-y-2">
              {["AI content generation", "ATS optimization", "Expert templates", "Easy customization"].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="space-y-3">
              <Button className="w-full" asChild>
                <Link to="/resume-builder">
                  Build Your Resume
                </Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/cover-letter-services">
                  Cover Letter Services
                </Link>
              </Button>
            </div>
          </motion.div>
          
          {/* Professional Writing Services */}
          <motion.div 
            className="bg-white rounded-xl p-8 shadow-lg border border-primary/20 flex flex-col h-full relative"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-primary text-white text-xs py-1 px-3 rounded-full font-medium">
              MOST POPULAR
            </div>
            
            <div className="bg-primary/10 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-5">
              <PenTool className="h-7 w-7 text-primary" />
            </div>
            
            <h3 className="text-xl font-bold mb-3">Professional Writing Services</h3>
            
            <p className="text-muted-foreground mb-5 flex-grow">
              Let our expert writers craft a customized resume and cover letter tailored to your career goals.
            </p>
            
            <ul className="mb-6 space-y-2">
              {["Written by industry experts", "2 rounds of revisions", "ATS optimization", "Cover letter included"].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="space-y-3">
              <Button className="w-full" asChild>
                <Link to="/resume-writing-services">
                  Get Professional Help
                </Link>
              </Button>
              <Button variant="outline" className="w-full">
                Starting at ₹1,499
              </Button>
            </div>
          </motion.div>
          
          {/* Interview Guarantee Package */}
          <motion.div 
            className="bg-white rounded-xl p-8 shadow-lg border border-slate-100 flex flex-col h-full"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-amber-50 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-5">
              <BadgeCheck className="h-7 w-7 text-amber-600" />
            </div>
            
            <h3 className="text-xl font-bold mb-3">Interview Guarantee Package</h3>
            
            <p className="text-muted-foreground mb-5 flex-grow">
              Our most comprehensive solution with a 7-day interview guarantee or your money back.
            </p>
            
            <ul className="mb-6 space-y-2">
              {["5-15 interview guarantee", "LinkedIn profile optimization", "Priority support", "Career coaching session"].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="space-y-3">
              <Button className="w-full" variant="secondary" asChild>
                <Link to="/interview-guarantee-package">
                  Get Interview Guarantee
                </Link>
              </Button>
              <Button variant="outline" className="w-full">
                Starting at ₹7,999
              </Button>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/templates">
            <Button variant="outline" size="lg">
              Browse All Resume Templates
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
