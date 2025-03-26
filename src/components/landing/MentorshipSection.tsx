
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Lightbulb, ClipboardList } from "lucide-react";
import CalBookingModal from '../booking/CalBookingModal';

const MentorshipSection = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-slate-50/50">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full">
            <span className="text-sm font-medium text-purple-700">One-on-One Guidance</span>
          </div>
        </div>
        
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Schedule a Mentorship Session</h2>
        
        {/* Description */}
        <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Book a personalized 30-minute session with our industry experts to get guidance tailored to 
          your career goals and challenges.
        </p>
        
        {/* Two-column layout */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          {/* Left column */}
          <div className="p-8 md:p-12 md:w-1/2">
            <h3 className="text-2xl font-bold mb-8">Why Book a Mentorship Call?</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Calendar className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Personalized Guidance</h4>
                  <p className="text-gray-600 mt-1">Get advice specific to your career situation and goals.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-xl">
                  <Lightbulb className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Expert Industry Insights</h4>
                  <p className="text-gray-600 mt-1">Learn from professionals with years of experience in the resume and career field.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <ClipboardList className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Action Plan Creation</h4>
                  <p className="text-gray-600 mt-1">Walk away with concrete next steps to advance your career journey.</p>
                </div>
              </div>
            </div>
            
            <Button 
              className="mt-10 bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 h-auto rounded-full text-base font-medium"
              onClick={openBookingModal}
            >
              Book Your Session Now
            </Button>
          </div>
          
          {/* Right column */}
          <div className="bg-blue-500 p-8 md:p-12 md:w-1/2 text-white flex flex-col items-center justify-center">
            <div className="mb-6">
              <Calendar className="h-16 w-16 mx-auto" />
            </div>
            
            <h3 className="text-2xl font-bold text-center mb-4">Easy Scheduling</h3>
            
            <p className="text-center mb-8">
              Select a date and time that works for you, and we'll confirm your booking instantly.
            </p>
            
            <Button 
              variant="outline" 
              className="bg-white text-blue-500 hover:bg-blue-50 border-white px-6"
              onClick={openBookingModal}
            >
              View Calendar
            </Button>
          </div>
        </div>
        
        {/* Additional information */}
        <div className="mt-12 text-center text-gray-600">
          <p className="mb-2">Our mentors are available Monday through Friday, 9 AM - 5 PM EST.</p>
          <p>
            Can't find a suitable time? <a href="/contact" className="text-blue-500 hover:underline">Contact us</a> for more options.
          </p>
        </div>
        
        <CalBookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />
      </div>
    </section>
  );
};

export default MentorshipSection;
