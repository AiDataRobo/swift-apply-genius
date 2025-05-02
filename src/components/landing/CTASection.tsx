
import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Upload } from "lucide-react";

const CTASection = () => {
  return (
    <div className="py-24 bg-gradient-to-br from-primary/5 to-blue-500/5">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ready to Land Your Dream Job?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Start your journey with a professional resume today and get noticed by top employers.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="py-6 px-8 h-auto text-base" asChild>
              <Link to="/resume-builder">
                <FileText className="mr-2 h-5 w-5" />
                Get Started Free
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="py-6 px-8 h-auto text-base" asChild>
              <Link to="/resume-review">
                <Upload className="mr-2 h-5 w-5" />
                Get Free Resume Review
              </Link>
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-muted-foreground">
            <p>No credit card required. Start building your professional resume in minutes.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CTASection;
