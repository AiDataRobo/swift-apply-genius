
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Users, MessageSquare, CheckCircle } from "lucide-react";
import CalBookingModal from "@/components/booking/CalBookingModal";

interface ExpertServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefit: string;
  delay: number;
  onClick: () => void;
}

const ExpertService: React.FC<ExpertServiceProps> = ({ 
  icon, title, description, benefit, delay, onClick 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.2 }}
    >
      <Card className="h-full transition-all duration-300 hover:shadow-md border-slate-100">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="mb-4 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            {icon}
          </div>
          
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4 text-sm flex-grow">{description}</p>
          
          <div className="mb-6">
            <p className="text-sm font-medium flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              {benefit}
            </p>
          </div>
          
          <Button 
            variant="outline" 
            className="w-full mt-auto"
            onClick={onClick}
          >
            Book Now
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const FreeConsultationSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('expertcareeradvice');
  
  const openModal = (service: string) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const expertServices = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Resume Strategy",
      description: "Get personalized advice on optimizing your resume for specific roles and industries",
      benefit: "3x more interview callbacks",
      calLink: "vishal17/resume-strategy",
      delay: 1
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "LinkedIn Optimization",
      description: "Make your online professional profile stand out and attract recruiters",
      benefit: "70% more profile views",
      calLink: "vishal17/linkedin-optimization",
      delay: 2
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Interview Preparation",
      description: "Mock interviews and coaching to help you ace your job interviews",
      benefit: "95% interview success rate",
      calLink: "vishal17/interview-prep",
      delay: 3
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-medium text-primary">EXPERT ADVICE</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Get Personalized Career Guidance
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Book a 1-on-1 session with our career experts to accelerate your job search
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {expertServices.map((service, index) => (
            <ExpertService
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              benefit={service.benefit}
              delay={service.delay}
              onClick={() => openModal(service.calLink)}
            />
          ))}
        </div>
      </div>
      
      <CalBookingModal
        isOpen={isModalOpen}
        onClose={closeModal}
        calLink={selectedService}
      />
    </div>
  );
};

export default FreeConsultationSection;
