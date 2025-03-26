
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import CalBookingModal from "@/components/booking/CalBookingModal";

const HeroCallToAction = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);

  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-8">
      <Link to="/resume-builder">
        <Button size="lg" className="glass-button w-full sm:w-auto">
          <FileText className="mr-2 h-5 w-5" />
          Create Your Resume
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Link>
      
      <Button 
        variant="outline" 
        size="lg"
        className="group border-primary/20 hover:border-primary/40 w-full sm:w-auto"
        onClick={openBookingModal}
      >
        <CalendarDays className="mr-2 h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
        Book a Free Consultation
      </Button>

      <CalBookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />
      
      <p className="text-xs text-muted-foreground mt-2 sm:hidden">
        Talk to a resume expert & get personalized career advice!
      </p>
    </div>
  );
};

export default HeroCallToAction;
