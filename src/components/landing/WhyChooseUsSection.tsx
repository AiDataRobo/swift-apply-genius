
import React from 'react';
import { Zap, FileText, CheckCircle, Star, PenTool, Users, Award, Download, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface FeatureItemProps {
  icon: React.ReactNode;
  text: string;
}

const FeatureItem = ({ icon, text }: FeatureItemProps) => (
  <div className="flex items-start mb-4">
    <div className="mr-3 text-primary shrink-0">
      {icon}
    </div>
    <span className="text-sm md:text-base">{text}</span>
  </div>
);

const WhyChooseUsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="why-choose-us" className="py-24 relative">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full mb-4"
            variants={itemVariants}
          >
            <span className="text-xs font-medium text-primary">WHY CHOOSE US</span>
          </motion.div>
          <motion.h2 
            className="section-heading"
            variants={itemVariants}
          >
            Two Powerful Solutions For Your Career Success
          </motion.h2>
          <motion.p 
            className="section-subheading mx-auto"
            variants={itemVariants}
          >
            Choose the option that fits your needs and timeline for the best results
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* AI Resume Generator */}
          <motion.div 
            className="bg-gradient-to-br from-white to-slate-50 p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100 relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-0" />
            
            <motion.div variants={itemVariants} className="relative z-10">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2 flex items-center">
                AI Resume Generator
                <span className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                  <Star className="h-3 w-3 mr-1" />
                  Popular
                </span>
              </h3>
              <p className="text-muted-foreground mb-8">Instantly create professional, ATS-friendly resumes with our AI-powered tools</p>
              
              <div className="space-y-6 mb-10">
                <FeatureItem 
                  icon={<Zap className="h-5 w-5" />} 
                  text="Instantly create an ATS-friendly resume" 
                />
                <FeatureItem 
                  icon={<FileText className="h-5 w-5" />} 
                  text="Choose from professional templates" 
                />
                <FeatureItem 
                  icon={<CheckCircle className="h-5 w-5" />} 
                  text="Customize design, layout, fonts, and colors" 
                />
                <FeatureItem 
                  icon={<Download className="h-5 w-5" />} 
                  text="Free & Pro Plans Available" 
                />
              </div>
              
              <Button className="w-full md:w-auto" asChild>
                <Link to="/resume-builder">
                  Build My Resume
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Professional Resume Writing */}
          <motion.div 
            className="bg-gradient-to-br from-white to-blue-50 p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100 relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full -z-0" />
            
            <motion.div variants={itemVariants} className="relative z-10">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 mb-6">
                <PenTool className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2 flex items-center">
                Professional Resume Writing
              </h3>
              <p className="text-muted-foreground mb-8">Get expert-written resumes tailored to your career path and industry</p>
              
              <div className="space-y-6 mb-10">
                <FeatureItem 
                  icon={<Users className="h-5 w-5" />} 
                  text="1-on-1 collaboration with certified resume writers" 
                />
                <FeatureItem 
                  icon={<CheckCircle className="h-5 w-5" />} 
                  text="Get expert-written resumes tailored to your career" 
                />
                <FeatureItem 
                  icon={<Award className="h-5 w-5" />} 
                  text="ATS & recruiter-approved formatting" 
                />
                <FeatureItem 
                  icon={<FileText className="h-5 w-5" />} 
                  text="Free Resume Review included" 
                />
              </div>
              
              <Button variant="outline" className="w-full md:w-auto">
                Get a Free Resume Review
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Button variant="link" className="text-primary">
            Compare Plans
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
