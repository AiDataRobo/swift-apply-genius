
import React from 'react';
import { Calendar } from 'lucide-react';
import BookConsultationButton from './BookConsultationButton';

const FloatingBookButton = () => {
  return (
    <div className="fixed right-6 lg:right-8 bottom-20 z-50 hidden md:block">
      <BookConsultationButton 
        className="shadow-lg flex items-center gap-2 py-2 px-4"
        variant="default"
        link="vishal17/expertcareeradvice"
      >
        <Calendar className="h-4 w-4 mr-1" />
        Book a Free Consultation
      </BookConsultationButton>
    </div>
  );
};

export default FloatingBookButton;
