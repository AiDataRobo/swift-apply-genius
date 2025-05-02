
import React from 'react';
import { Zap, PenTool, Users, Star, FileText, CheckCircle, Award, MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  primaryCta: {
    text: string;
    link: string;
  };
  secondaryCta?: {
    text: string;
    link: string;
  };
  isPopular?: boolean;
  delay: number;
}

const ServiceCard = ({
  icon,
  title,
  description,
  features,
  primaryCta,
  secondaryCta,
  isPopular,
  delay
}: ServiceCardProps) => (
  <motion.div
    className="bg-gradient-to-br from-white to-slate-50 p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100 relative overflow-hidden"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: delay * 0.2 }
      }
    }}
  >
    {/* Background decoration */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-0" />
    
    {isPopular && (
      <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-primary text-white text-xs py-1 px-3 rounded-full font-medium">
        MOST POPULAR
      </div>
    )}
    
    <div className="relative z-10">
      <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${isPopular ? 'bg-primary/10 text-primary' : 'bg-blue-500/10 text-blue-500'} mb-6`}>
        {icon}
      </div>
      
      <h3 className="text-2xl font-bold mb-2 flex items-center">
        {title}
        {isPopular && (
          <span className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
            <Star className="h-3 w-3 mr-1" />
            Popular
          </span>
        )}
      </h3>
      
      <p className="text-muted-foreground mb-8">{description}</p>
      
      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <div className="mr-3 text-green-600 shrink-0">
              <CheckCircle className="h-5 w-5" />
            </div>
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>
      
      <div className="space-y-3">
        <Button className="w-full" asChild>
          <Link to={primaryCta.link}>
            {primaryCta.text}
          </Link>
        </Button>
        
        {secondaryCta && (
          <Button variant="outline" className="w-full" asChild>
            <Link to={secondaryCta.link}>
              {secondaryCta.text}
            </Link>
          </Button>
        )}
      </div>
    </div>
  </motion.div>
);

const WhyChooseUsSection = () => {
  const services = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "AI Resume Generator",
      description: "Create a professional, ATS-optimized resume in minutes with our AI tools",
      features: [
        "Instantly create an ATS-friendly resume",
        "Choose from professional templates",
        "Customize design and content",
        "Download in multiple formats"
      ],
      primaryCta: {
        text: "Build My Resume",
        link: "/resume-builder"
      },
      delay: 0
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Professional Resume Writing",
      description: "Let our expert writers craft your perfect resume tailored to your career goals",
      features: [
        "Written by certified resume writers",
        "Tailored to your target industry",
        "ATS optimization & keyword research",
        "Includes cover letter & LinkedIn profile"
      ],
      primaryCta: {
        text: "Get Professional Help",
        link: "/resume-writing-services"
      },
      secondaryCta: {
        text: "Get a Free Resume Review",
        link: "/resume-review"
      },
      isPopular: true,
      delay: 0.2
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Career Coaching",
      description: "One-on-one coaching to help you navigate your job search and interview process",
      features: [
        "Personalized career strategy",
        "Interview preparation & mock interviews",
        "Salary negotiation guidance",
        "Job search strategy optimization"
      ],
      primaryCta: {
        text: "Book a Consultation",
        link: "/career-coaching"
      },
      delay: 0.4
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 relative">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                when: "beforeChildren",
                staggerChildren: 0.1
              }
            }
          }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            Three Powerful Solutions For Your Career Success
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            Choose the option that fits your needs and timeline for the best results
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link to="/pricing">
            <Button variant="link" className="text-primary">
              Compare All Plans
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
