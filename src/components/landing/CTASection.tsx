
import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <div className="py-24 bg-gradient-to-br from-primary/10 to-blue-500/5">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Invest in Your Career. Let Experts Craft Your Resume.</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Our professional writers know exactly what hiring managers and ATS systems are looking for.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="py-6 px-8 h-auto text-base" asChild>
              <Link to="/resume-writing-services">
                <FileText className="mr-2 h-5 w-5" />
                Hire a Resume Expert Now
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="py-6 px-8 h-auto text-base" asChild>
              <Link to="/#pricing">
                <Calendar className="mr-2 h-5 w-5" />
                See Pricing Plans
              </Link>
            </Button>
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
