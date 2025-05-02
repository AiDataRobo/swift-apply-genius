
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CalBookingModal from "@/components/booking/CalBookingModal";

const HeroCallToAction = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  
  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="flex-1"
      >
        <Link to="/resume-writing-services" className="block">
          <Button 
            size="lg" 
            className="glass-button w-full py-6 px-8 h-auto text-base bg-primary hover:bg-primary/90 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center">
              <FileText className="mr-2 h-5 w-5" />
              Get My Resume Written
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 w-0 bg-gradient-to-r from-primary/80 to-primary group-hover:w-full transition-all duration-300"></span>
          </Button>
        </Link>
      </motion.div>
      
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="flex-1"
      >
        <Link to="/#pricing">
          <Button 
            variant="outline" 
            size="lg"
            className="group border-primary/20 hover:border-primary/40 w-full py-6 px-8 h-auto text-base relative overflow-hidden transition-all duration-300 hover:text-primary"
          >
            See Pricing
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Button>
        </Link>
      </motion.div>

      <CalBookingModal 
        isOpen={isBookingModalOpen} 
        onClose={closeBookingModal} 
        calLink="vishal17/expertcareeradvice"
      />
    </div>
  );
};

export default HeroCallToAction;
