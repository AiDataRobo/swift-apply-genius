
import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <div className="py-24 bg-gradient-to-br from-primary/10 to-blue-500/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-0 right-1/4 -translate-x-1/2 w-48 h-48 rounded-full bg-blue-400/10 blur-2xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center bg-white/50 dark:bg-gray-900/50 backdrop-blur-md p-10 rounded-2xl shadow-lg border border-white/20 dark:border-gray-800/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Invest in Your Career. Let Experts Craft Your Resume.</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Our professional writers know exactly what hiring managers and ATS systems are looking for.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button size="lg" className="py-6 px-8 h-auto text-base bg-primary hover:bg-primary/90 shadow-md" asChild>
                <Link to="/resume-writing-services">
                  <FileText className="mr-2 h-5 w-5" />
                  Hire a Resume Expert Now
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button size="lg" variant="outline" className="py-6 px-8 h-auto text-base border-primary/20 hover:border-primary/40 hover:bg-primary/5" asChild>
                <Link to="/#pricing">
                  <Calendar className="mr-2 h-5 w-5" />
                  See Pricing Plans
                </Link>
              </Button>
            </motion.div>
          </div>
          
          <div className="mt-8 text-sm text-muted-foreground">
            <p>All packages include ATS optimization and industry-specific customization.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CTASection;
