
import React from 'react';
import { motion } from "framer-motion";
import HeroCallToAction from './HeroCallToAction';
import HeroTrustBadge from './HeroTrustBadge';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const HeroContent: React.FC = () => {
  const { toast } = useToast();
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
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

  const handleFileUpload = () => {
    // In a real implementation, this would handle file upload logic
    toast({
      title: "Resume Uploaded",
      description: "We'll review your resume and get back to you within 48 hours.",
      duration: 5000,
    });
  };

  return (
    <motion.div variants={fadeInUp} className="order-2 lg:order-1">
      <motion.div 
        className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6"
        variants={popIn}
      >
        <span className="text-xs font-medium text-primary mr-2">AI-POWERED</span>
        <span className="text-xs font-medium">Build Your Resume in Minutes</span>
      </motion.div>
      
      <motion.h1 
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
        variants={fadeInUp}
      >
        Land Your <span className="text-primary">Dream Job</span> with a Professional Resume
      </motion.h1>
      
      <motion.p 
        className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg"
        variants={fadeInUp}
      >
        Create an ATS-optimized resume instantly with our AI tools, or let our experts craft a job-winning resume with a 95% interview success rate.
      </motion.p>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <HeroCallToAction />

        <div className="relative group">
          <input
            type="file"
            id="resume-upload"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            accept=".pdf,.doc,.docx"
            onChange={handleFileUpload}
          />
          <Button 
            variant="outline" 
            size="lg"
            className="w-full sm:w-auto border-primary/20 hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-300"
          >
            Upload Resume for Review
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
      
      <HeroTrustBadge />
    </motion.div>
  );
};

export default HeroContent;
