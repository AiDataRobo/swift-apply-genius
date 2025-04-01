
import React, { useEffect } from 'react';
import ContentPageLayout from '@/components/layout/ContentPageLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, Star, FileText, Mail, CheckCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const CoverLetterServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ContentPageLayout 
      title="Professional Cover Letter Services" 
      subtitle="Compelling cover letters that help you stand out from other candidates"
    >
      {/* Hero Section */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Make a Strong First Impression with a Professional Cover Letter</h2>
            <p className="text-lg text-muted-foreground mb-6">
              A well-crafted cover letter is your chance to tell your story and show employers why you're the perfect fit for the position.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our expert writers create personalized cover letters that highlight your unique qualifications and increase your chances of getting an interview.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="glass-button">
                <Mail className="mr-2 h-5 w-5" />
                Get Your Cover Letter
              </Button>
              <Link to="/cover-letter-samples">
                <Button variant="outline" size="lg">
                  View Samples
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
                <h3 className="text-xl font-bold">Maximized Response Rate</h3>
                <p className="text-muted-foreground">Our cover letters significantly increase interview chances</p>
              </div>
            </div>
            <ul className="space-y-4">
              {[
                "Personalized for each job application",
                "Compelling opening statements",
                "Highlight relevant achievements",
                "Proper tone and formatting",
                "Showcases your enthusiasm and fit"
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
        <h2 className="text-3xl font-bold mb-2 text-center">Cover Letter Options</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Choose the right cover letter solution for your needs</p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Basic Package */}
          <motion.div 
            className="border rounded-xl p-8 flex flex-col h-full"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-2">Cover Letter Builder</h3>
            <div className="text-3xl font-bold mb-1">₹199</div>
            <p className="text-muted-foreground mb-6">DIY with our AI-powered tools</p>
            
            <ul className="space-y-3 mb-8 flex-grow">
              {[
                "Easy-to-use builder",
                "Professional templates",
                "AI-suggested content",
                "Unlimited downloads",
                "Instant access"
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCheck className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button className="w-full">Get Started</Button>
          </motion.div>
          
          {/* Professional Package */}
          <motion.div 
            className="border border-primary/30 rounded-xl p-8 flex flex-col h-full bg-primary/5 relative"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-primary text-white text-xs py-1 px-3 rounded-full font-medium">
              RECOMMENDED
            </div>
            <h3 className="text-xl font-bold mb-2">Professional Cover Letter</h3>
            <div className="text-3xl font-bold mb-1">₹999</div>
            <p className="text-muted-foreground mb-6">Written by industry experts</p>
            
            <ul className="space-y-3 mb-8 flex-grow">
              {[
                "Written by professional writer",
                "Tailored to specific job",
                "Highlights your unique value",
                "Matching resume formatting",
                "1 round of revisions",
                "Delivery in 2 business days"
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCheck className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button className="w-full glass-button">Get Started</Button>
          </motion.div>
        </div>
      </section>
      
      {/* Samples Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-2 text-center">Cover Letter Samples</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">See the quality of our professional cover letters</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {["Finance", "Marketing", "Technology"].map((industry) => (
            <div key={industry} className="border rounded-xl overflow-hidden">
              <div className="p-4 border-b bg-slate-50">
                <h3 className="font-semibold">{industry} Cover Letter</h3>
              </div>
              <div className="p-4 h-64 flex items-center justify-center bg-slate-100">
                <p className="text-muted-foreground text-center">Cover Letter Sample Preview</p>
              </div>
              <div className="p-4 flex justify-center">
                <Button variant="outline" size="sm">View Full Sample</Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link to="/cover-letter-samples">
            <Button variant="outline">View All Cover Letter Samples</Button>
          </Link>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary/5 p-8 md:p-12 rounded-xl text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Make a Great First Impression?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Get a professionally written cover letter that captures attention and showcases your value.
        </p>
        <Button size="lg" className="glass-button px-8 py-6 h-auto text-base">
          <Mail className="mr-2 h-5 w-5" />
          Get Your Cover Letter Today
        </Button>
      </section>
    </ContentPageLayout>
  );
};

export default CoverLetterServices;
