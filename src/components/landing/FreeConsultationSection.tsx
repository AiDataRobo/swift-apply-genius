
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { CalendarClock, CalendarDays, Clock, User, AlertCircle } from "lucide-react";
import CalBookingModal from '../booking/CalBookingModal';
import { motion } from 'framer-motion';

const FreeConsultationSection = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="book-consultation" className="py-24 bg-gradient-to-b from-white to-slate-50/50">
      <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-7xl">
        <div className="text-center mb-12">
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-medium text-primary">FREE CONSULTATION</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Get Expert Career Advice
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Schedule a free 15-minute consultation with our resume experts to discuss your career goals and get personalized advice
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeIn} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="bg-indigo-50 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-5">
              <CalendarClock className="h-7 w-7 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy Scheduling</h3>
            <p className="text-muted-foreground">Select a time that works best for you from our available slots.</p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="bg-green-50 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-5">
              <Clock className="h-7 w-7 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">15-Minute Session</h3>
            <p className="text-muted-foreground">Quick yet comprehensive consultation to address your specific needs.</p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="bg-amber-50 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-5">
              <User className="h-7 w-7 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Advice</h3>
            <p className="text-muted-foreground">Get personalized feedback from professional resume writers.</p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="bg-white rounded-xl p-8 md:p-12 shadow-lg border border-primary/10 max-w-3xl mx-auto relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Ready to transform your job search?</h3>
                <p className="text-muted-foreground mb-4">Our experts will analyze your career goals and provide actionable advice.</p>
                <div className="flex items-center text-sm text-primary">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  <span>Limited free slots available each week</span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <Button 
                  size="lg" 
                  className="w-full md:w-auto text-lg font-medium px-8 py-6 h-auto"
                  data-cal-namespace="expertcareeradvice"
                  data-cal-link="vishal17/expertcareeradvice"
                  data-cal-config='{"layout":"month_view","theme":"light"}'
                >
                  <CalendarDays className="mr-2 h-5 w-5" />
                  Book Your Free Consultation
                </Button>
              </div>
            </div>
            
            <div className="text-sm text-muted-foreground">
              <p>By booking a consultation, you agree to our terms of service and privacy policy. No credit card required.</p>
            </div>
          </div>
        </motion.div>

        <CalBookingModal 
          isOpen={isBookingModalOpen} 
          onClose={closeBookingModal} 
          calLink="swiftapply/resume-consultation" 
        />
      </div>
    </section>
  );
};

export default FreeConsultationSection;
