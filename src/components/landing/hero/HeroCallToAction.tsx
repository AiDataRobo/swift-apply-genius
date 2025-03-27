
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Palette, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CalBookingModal from "@/components/booking/CalBookingModal";

const HeroCallToAction = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link to="/resume-builder">
          <Button size="lg" className="glass-button w-full sm:w-auto py-6 px-8 h-auto text-base">
            <FileText className="mr-2 h-5 w-5" />
            Build Your Resume
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </motion.div>
      
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link to="/templates">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/20 hover:border-primary/40 w-full sm:w-auto py-6 px-8 h-auto text-base"
          >
            <Palette className="mr-2 h-5 w-5 text-primary" />
            Browse Templates
          </Button>
        </Link>
      </motion.div>
      
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button 
          variant="outline" 
          size="lg"
          className="group border-primary/20 hover:border-primary/40 w-full sm:w-auto py-6 px-8 h-auto text-base"
          onClick={openBookingModal}
        >
          <Sparkles className="mr-2 h-5 w-5 text-amber-500 group-hover:scale-110 transition-transform" />
          Free Resume Review
        </Button>
      </motion.div>

      <CalBookingModal 
        isOpen={isBookingModalOpen} 
        onClose={closeBookingModal} 
        calLink="swiftapply/resume-review"
      />
    </div>
  );
};

export default HeroCallToAction;
