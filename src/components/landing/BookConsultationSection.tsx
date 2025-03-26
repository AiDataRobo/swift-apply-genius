
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { CalendarClock, CalendarDays, Clock, User } from "lucide-react";
import CalBookingModal from '../booking/CalBookingModal';

const BookConsultationSection = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);

  return (
    <section id="book-consultation" className="py-20 bg-gradient-to-b from-white to-slate-50/50">
      <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full mb-4">
            <span className="text-xs font-medium text-primary">FREE CONSULTATION</span>
          </div>
          <h2 className="section-heading mb-4">Get Personalized Resume & Career Advice</h2>
          <p className="section-subheading max-w-3xl mx-auto">
            Schedule a 15-minute free consultation with a resume expert to discuss your career goals and resume improvements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="feature-card flex flex-col items-center text-center">
            <div className="icon-container bg-indigo-50 text-indigo-600">
              <CalendarClock className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy Scheduling</h3>
            <p className="text-muted-foreground">Select a time that works best for you from our available slots.</p>
          </div>

          <div className="feature-card flex flex-col items-center text-center">
            <div className="icon-container bg-green-50 text-green-600">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">15-Minute Session</h3>
            <p className="text-muted-foreground">Quick yet comprehensive consultation to address your specific needs.</p>
          </div>

          <div className="feature-card flex flex-col items-center text-center">
            <div className="icon-container bg-amber-50 text-amber-600">
              <User className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Advice</h3>
            <p className="text-muted-foreground">Get personalized feedback from professional resume writers.</p>
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="glass-button text-lg font-medium px-8 py-6 h-auto"
            onClick={openBookingModal}
          >
            <CalendarDays className="mr-2 h-5 w-5" />
            Book Your Free Consultation
          </Button>
        </div>

        <CalBookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />
      </div>
    </section>
  );
};

export default BookConsultationSection;
