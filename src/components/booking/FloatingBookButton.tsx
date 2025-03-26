
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { CalendarClock } from "lucide-react";
import CalBookingModal from './CalBookingModal';

const FloatingBookButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);

  return (
    <>
      <div 
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <Button 
          onClick={openBookingModal}
          className="glass-button rounded-full shadow-lg h-14 w-14 p-0 hover:scale-105 transition-transform"
          aria-label="Schedule a consultation"
        >
          <CalendarClock className="h-6 w-6" />
        </Button>
      </div>

      <CalBookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />
    </>
  );
};

export default FloatingBookButton;
