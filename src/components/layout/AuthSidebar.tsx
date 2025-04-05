
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, PenLine, Trophy, CheckCircle } from 'lucide-react';
import Lottie from 'lottie-react';
import resumeReviewAnimation from '@/assets/animations/resume-review.json';

interface Testimonial {
  quote: string;
  author: string;
  title: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "EnhanceResume's resume builder got me interviews at 3 top tech companies within a week!",
    author: "Sarah Johnson",
    title: "Software Engineer"
  },
  {
    quote: "The AI-powered cover letter generator saved me hours of work and helped me land my dream job.",
    author: "Michael Chen",
    title: "Marketing Director"
  },
  {
    quote: "The interview guarantee package was worth every penny. I had 8 interviews lined up within two weeks!",
    author: "Priya Patel",
    title: "Product Manager"
  }
];

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => (
  <motion.div
    className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
  >
    <div className="flex-shrink-0 rounded-full bg-primary/10 p-2">
      {icon}
    </div>
    <div>
      <h3 className="font-medium text-sm">{title}</h3>
      <p className="text-xs text-muted-foreground mt-1">{description}</p>
    </div>
  </motion.div>
);

interface AuthSidebarProps {
  isLogin?: boolean;
}

const AuthSidebar = ({ isLogin = false }: AuthSidebarProps) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full md:w-3/5 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:p-12 hidden md:flex flex-col">
      <motion.div 
        className="flex-grow flex flex-col justify-center max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          {isLogin ? "Welcome back to EnhanceResume!" : "Create your professional career toolkit"}
        </h2>
        
        {/* Animation */}
        <div className="w-1/2 mx-auto mb-8">
          <Lottie animationData={resumeReviewAnimation} loop={true} />
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <FeatureCard 
            icon={<FileText className="h-5 w-5 text-primary" />}
            title="Resume Builder"
            description="Create ATS-friendly resumes with customizable templates in minutes."
            delay={0.1}
          />
          <FeatureCard 
            icon={<PenLine className="h-5 w-5 text-primary" />}
            title="Cover Letter Builder"
            description="Generate personalized cover letters tailored to each job application."
            delay={0.2}
          />
          <FeatureCard 
            icon={<CheckCircle className="h-5 w-5 text-primary" />}
            title="Professional Resume Writing"
            description="Get your resume written by industry experts for maximum impact."
            delay={0.3}
          />
          <FeatureCard 
            icon={<Trophy className="h-5 w-5 text-primary" />}
            title="Interview Guarantee Package"
            description="Complete job search solution with guaranteed interview outcomes."
            delay={0.4}
          />
        </div>
        
        {/* Testimonial Slider */}
        <div className="bg-white rounded-xl p-6 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gray-100">
            <motion.div 
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
          </div>
          
          <div className="flex flex-col h-32">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: currentTestimonial === index ? 1 : 0,
                  y: currentTestimonial === index ? 0 : 20,
                  position: currentTestimonial === index ? 'relative' : 'absolute'
                }}
                transition={{ duration: 0.5 }}
              >
                <p className="italic text-sm mb-4">"{testimonial.quote}"</p>
                <div className="mt-auto">
                  <p className="font-medium text-sm">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-4 gap-1">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  currentTestimonial === index ? 'bg-primary' : 'bg-gray-200'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthSidebar;
