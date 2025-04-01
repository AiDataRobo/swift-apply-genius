
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, Sparkles, Upload, CheckSquare, Award, Star, MessageSquare, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import CalBookingModal from "@/components/booking/CalBookingModal";
import Lottie from 'lottie-react';
import resumeReviewAnimation from '@/assets/animations/resume-review.json';

// Service card interface
interface ServiceCardProps {
  icon: React.ReactNode;
  lottieAnimation?: any;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  delay: number;
  popular?: boolean;
  onClick?: () => void;
}

const ServiceCard = ({ 
  icon, 
  lottieAnimation, 
  title, 
  description, 
  features, 
  ctaText, 
  ctaLink, 
  delay, 
  popular = false,
  onClick 
}: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 + 0.1 }}
      viewport={{ once: true }}
      className="relative h-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className={`h-full overflow-hidden transition-all duration-300 hover:shadow-lg ${popular ? 'border-primary/30 ring-1 ring-primary/20' : 'border-gray-200'}`}>
        {popular && (
          <div className="absolute top-0 right-0">
            <div className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
              POPULAR
            </div>
          </div>
        )}
        
        <CardHeader className="pb-4">
          <div className="flex justify-center mb-4">
            {lottieAnimation ? (
              <div className="w-16 h-16 flex items-center justify-center">
                <Lottie
                  animationData={lottieAnimation}
                  loop={isHovered}
                  className="w-full h-full"
                />
              </div>
            ) : (
              <div className={`w-16 h-16 rounded-full ${popular ? 'bg-primary/10' : 'bg-slate-100'} flex items-center justify-center transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
                {icon}
              </div>
            )}
          </div>
          <CardTitle className="text-center text-xl">{title}</CardTitle>
          <CardDescription className="text-center text-sm">{description}</CardDescription>
        </CardHeader>
        
        <CardContent className="px-6 pb-4">
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start text-sm">
                <CheckSquare className="h-4 w-4 text-green-500 mt-0.5 mr-2 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        
        <CardFooter className="pt-2 pb-6 px-6">
          {onClick ? (
            <Button 
              onClick={onClick} 
              className="w-full" 
              variant={popular ? "default" : "outline"}
            >
              {ctaText}
            </Button>
          ) : (
            <Button 
              asChild 
              className="w-full" 
              variant={popular ? "default" : "outline"}
            >
              <Link to={ctaLink}>{ctaText}</Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const HowItWorksSection = () => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const openReviewModal = () => setIsReviewModalOpen(true);
  const closeReviewModal = () => setIsReviewModalOpen(false);

  const serviceCards = [
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Resume Builder",
      description: "Create an ATS-optimized resume in minutes",
      features: [
        "AI-powered content generation",
        "Multiple professional templates",
        "ATS-friendly layouts",
        "Custom sections & formats"
      ],
      ctaText: "Start Building for Free",
      ctaLink: "/resume-builder",
      delay: 1
    },
    {
      icon: <FileCheck className="h-8 w-8 text-blue-500" />,
      title: "Cover Letter Builder",
      description: "Complement your resume with a matching cover letter",
      features: [
        "AI generates customized content",
        "Job-specific formatting",
        "Adjustable tone & style",
        "Matching templates"
      ],
      ctaText: "Generate Your Cover Letter",
      ctaLink: "/cover-letter-services",
      delay: 2
    },
    {
      icon: <Sparkles className="h-8 w-8 text-amber-500" />,
      title: "Professional Resume Writing",
      description: "Expert writers craft your perfect resume",
      features: [
        "Written by industry experts",
        "ATS optimization",
        "LinkedIn profile option",
        "Multiple revision rounds"
      ],
      ctaText: "Get a Professional Resume",
      ctaLink: "/resume-writing-services",
      delay: 3,
      popular: true
    },
    {
      icon: <Award className="h-8 w-8 text-green-500" />,
      title: "Interview Guarantee Package",
      description: "Comprehensive job search solution with guarantees",
      features: [
        "Guaranteed 5-15 interviews",
        "Resume, cover letter & LinkedIn",
        "Job application assistance",
        "Interview coaching sessions"
      ],
      ctaText: "Boost My Job Search",
      ctaLink: "/interview-guarantee-package",
      delay: 4
    },
    {
      icon: <Upload className="h-8 w-8 text-violet-500" />,
      lottieAnimation: resumeReviewAnimation,
      title: "Free Resume Review",
      description: "Get feedback on your existing resume",
      features: [
        "AI & expert analysis",
        "ATS score assessment",
        "Actionable improvement tips",
        "No obligation review"
      ],
      ctaText: "Upload for Free Review",
      ctaLink: "#",
      onClick: () => setIsReviewModalOpen(true),
      delay: 5
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-32 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-2xl"></div>
      
      <div className="container max-w-7xl mx-auto px-6 relative z-20">
        <div className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-medium text-primary">OUR SERVICES</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            How JobOnboard Works
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Choose the service that best suits your needs and take the next step in your career journey
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((card, index) => (
            <ServiceCard
              key={index}
              icon={card.icon}
              lottieAnimation={card.lottieAnimation}
              title={card.title}
              description={card.description}
              features={card.features}
              ctaText={card.ctaText}
              ctaLink={card.ctaLink}
              delay={card.delay}
              popular={card.popular}
              onClick={card.onClick}
            />
          ))}
        </div>
        
        <div className="mt-16 flex flex-col md:flex-row justify-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Button size="lg" className="w-full md:w-auto" asChild>
              <Link to="/resume-builder">
                <FileText className="mr-2 h-5 w-5" />
                Start Building for Free
              </Link>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <Button size="lg" variant="outline" className="w-full md:w-auto" onClick={openReviewModal}>
              <Star className="mr-2 h-5 w-5 text-amber-500" />
              Get a Free Resume Review
            </Button>
          </motion.div>
        </div>
      </div>

      <CalBookingModal 
        isOpen={isReviewModalOpen} 
        onClose={closeReviewModal} 
        calLink="swiftapply/resume-review"
      />
    </section>
  );
};

export default HowItWorksSection;
