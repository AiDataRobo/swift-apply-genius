
import React, { useEffect } from 'react';
import ContentPageLayout from '@/components/layout/ContentPageLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, Star, FileText, PenTool, CheckCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResumeWritingServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ContentPageLayout 
      title="Professional Resume Writing Services" 
      subtitle="Let our expert writers craft a customized resume tailored to your career goals"
    >
      {/* Hero Section */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Stand Out in the Job Market with a Professionally Written Resume</h2>
            <p className="text-lg text-muted-foreground mb-6">
              In today's competitive job market, a professionally written resume can be the difference between getting an interview and being overlooked.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our expert resume writers have helped thousands of professionals land interviews at top companies across all industries.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="glass-button">
                <FileText className="mr-2 h-5 w-5" />
                Get Started
              </Button>
              <Link to="/resume-samples">
                <Button variant="outline" size="lg">
                  View Resume Samples
                </Button>
              </Link>
            </div>
          </div>
          <div className="bg-slate-50 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <div className="bg-primary/10 p-4 rounded-full mr-4">
                <Star className="h-8 w-8 text-amber-500 fill-amber-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold">95% Success Rate</h3>
                <p className="text-muted-foreground">Our clients secure interviews within 30 days</p>
              </div>
            </div>
            <ul className="space-y-4">
              {[
                "ATS-Optimized Formats",
                "Industry-Specific Keywords",
                "Professional Writing & Formatting",
                "Highlight Your Unique Value",
                "1-on-1 Expert Consultation"
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-2 text-center">Our Resume Writing Packages</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Choose the package that best fits your career needs and goals</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Basic Package */}
          <motion.div 
            className="border rounded-xl p-8 flex flex-col h-full"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-2">Basic</h3>
            <div className="text-3xl font-bold mb-1">₹1,499</div>
            <p className="text-muted-foreground mb-6">Perfect for entry-level professionals</p>
            
            <ul className="space-y-3 mb-8 flex-grow">
              {[
                "Resume Writing",
                "ATS Optimization",
                "1-on-1 Expert Consultation",
                "1 Round of Revisions",
                "Delivery within 3-5 business days"
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCheck className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button className="w-full">Get Started</Button>
          </motion.div>
          
          {/* Standard Package */}
          <motion.div 
            className="border border-primary/30 rounded-xl p-8 flex flex-col h-full bg-primary/5 relative"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-primary text-white text-xs py-1 px-3 rounded-full font-medium">
              POPULAR
            </div>
            <h3 className="text-xl font-bold mb-2">Standard</h3>
            <div className="text-3xl font-bold mb-1">₹2,999</div>
            <p className="text-muted-foreground mb-6">Ideal for mid-level professionals</p>
            
            <ul className="space-y-3 mb-8 flex-grow">
              {[
                "Everything in Basic",
                "LinkedIn Profile Optimization",
                "2 Rounds of Revisions",
                "Keyword Optimization",
                "Delivery within 2-4 business days",
                "60-day interview guarantee"
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCheck className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button className="w-full glass-button">Get Started</Button>
          </motion.div>
          
          {/* Premium Package */}
          <motion.div 
            className="border rounded-xl p-8 flex flex-col h-full"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-2">Premium</h3>
            <div className="text-3xl font-bold mb-1">₹4,499</div>
            <p className="text-muted-foreground mb-6">Best for senior professionals</p>
            
            <ul className="space-y-3 mb-8 flex-grow">
              {[
                "Everything in Standard",
                "Cover Letter Writing",
                "Priority Support",
                "Unlimited Revisions for 14 days",
                "Delivery within 2 business days",
                "7-Day interview guarantee"
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCheck className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button className="w-full">Get Started</Button>
          </motion.div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-2 text-center">Our Simple Process</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Getting a professionally written resume is easier than you think</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Submit Information</h3>
            <p className="text-muted-foreground">Fill out our comprehensive questionnaire about your experience and goals</p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Writer Assignment</h3>
            <p className="text-muted-foreground">We match you with a writer who specializes in your industry</p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Review & Delivery</h3>
            <p className="text-muted-foreground">Receive your draft, request revisions if needed, and get your final resume</p>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary/5 p-8 md:p-12 rounded-xl text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of successful professionals who've secured their dream jobs with our expert resume writing services.
        </p>
        <Button size="lg" className="glass-button px-8 py-6 h-auto text-base">
          <PenTool className="mr-2 h-5 w-5" />
          Get Your Professional Resume Today
        </Button>
      </section>
    </ContentPageLayout>
  );
};

export default ResumeWritingServices;
