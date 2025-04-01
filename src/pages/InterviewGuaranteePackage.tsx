
import React, { useEffect } from 'react';
import ContentPageLayout from '@/components/layout/ContentPageLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, BadgeCheck, Shield, Calendar, CheckCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const InterviewGuaranteePackage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ContentPageLayout 
      title="Interview Guarantee Package" 
      subtitle="Our most comprehensive solution with a guaranteed number of interviews"
    >
      {/* Hero Section */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full mb-6">
              <BadgeCheck className="h-4 w-4 mr-2" />
              <span className="text-xs font-medium">INTERVIEW GUARANTEE</span>
            </div>
            <h2 className="text-3xl font-bold mb-6">Get Interviews Guaranteed or Your Money Back</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our premium package ensures you'll get multiple interview opportunities, backed by our iron-clad guarantee.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We're so confident in our ability to get you interviews that if we don't deliver, you get your money back.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="glass-button">
                <Shield className="mr-2 h-5 w-5" />
                Get Interview Guarantee
              </Button>
              <Link to="/success-stories">
                <Button variant="outline" size="lg">
                  View Success Stories
                </Button>
              </Link>
            </div>
          </div>
          <div className="bg-slate-50 p-8 rounded-xl border border-amber-200">
            <div className="flex items-center mb-6">
              <div className="bg-amber-100 p-4 rounded-full mr-4">
                <Shield className="h-8 w-8 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Our Promise</h3>
                <p className="text-muted-foreground">Get interviews within 30 days or your money back</p>
              </div>
            </div>
            <ul className="space-y-4">
              {[
                "Professionally Written Resume",
                "ATS-Optimized Templates",
                "Cover Letter",
                "LinkedIn Makeover",
                "Job Application Assistance",
                "Interview Coaching Sessions"
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
        <h2 className="text-3xl font-bold mb-2 text-center">Interview Guarantee Packages</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Choose the package that fits your career ambitions</p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Standard Package */}
          <motion.div 
            className="border rounded-xl p-8 flex flex-col h-full"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-2">Standard</h3>
            <div className="text-3xl font-bold mb-1">₹7,999</div>
            <p className="text-muted-foreground mb-6">5 Interview Guarantee</p>
            
            <ul className="space-y-3 mb-8 flex-grow">
              {[
                "Professionally Written Resume",
                "ATS-Optimized Templates",
                "Cover Letter",
                "LinkedIn Makeover",
                "Job Application Assistance",
                "Recruiter Outreach",
                "2 Interview Coaching Sessions",
                "Career Services Platform Access",
                "5 Interview Guarantee within 30 days"
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCheck className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button className="w-full">Get Started</Button>
          </motion.div>
          
          {/* Premium Package */}
          <motion.div 
            className="border border-primary/30 rounded-xl p-8 flex flex-col h-full bg-primary/5 relative"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-primary text-white text-xs py-1 px-3 rounded-full font-medium">
              BEST VALUE
            </div>
            <h3 className="text-xl font-bold mb-2">Premium</h3>
            <div className="text-3xl font-bold mb-1">₹14,999</div>
            <p className="text-muted-foreground mb-6">15 Interview Guarantee</p>
            
            <ul className="space-y-3 mb-8 flex-grow">
              {[
                "Everything in Standard package",
                "15 Interview Guarantee within 60 days",
                "Executive Bio",
                "Personal Branding Strategy",
                "4 Interview Coaching Sessions",
                "Salary Negotiation Training",
                "Priority Recruiter Access",
                "Job Search Strategy Session",
                "Executive LinkedIn Optimization",
                "6 Months of Career Coaching",
                "Direct Phone Access to Career Coach"
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
      
      {/* How It Works Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-2 text-center">How Our Interview Guarantee Works</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">A simple process with powerful results</p>
        
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Initial Consultation</h3>
            <p className="text-muted-foreground">We assess your career goals and target positions</p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Document Creation</h3>
            <p className="text-muted-foreground">Our experts develop your resume and career materials</p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Application Strategy</h3>
            <p className="text-muted-foreground">We create a targeted plan for job applications</p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
              <span className="text-2xl font-bold">4</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Interview Preparation</h3>
            <p className="text-muted-foreground">Coaching sessions to prepare you for success</p>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-2 text-center">Frequently Asked Questions</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Everything you need to know about our guarantee</p>
        
        <div className="space-y-6 max-w-3xl mx-auto">
          {[
            {
              question: "What happens if I don't get the guaranteed number of interviews?",
              answer: "If you don't receive the guaranteed number of interviews within the specified timeframe, you'll receive a full refund of your package price. No questions asked."
            },
            {
              question: "What types of jobs does the guarantee apply to?",
              answer: "Our guarantee applies to positions that match your experience level and skill set. During your initial consultation, we'll define your target roles for the guarantee to apply."
            },
            {
              question: "How long does the guarantee period last?",
              answer: "The Standard package includes a 30-day guarantee period, while the Premium package extends this to 60 days from the completion of your career materials."
            },
            {
              question: "Are there any conditions to maintain the guarantee?",
              answer: "Yes, you must actively apply to at least 2-3 positions per week that match your target roles and follow our application strategies. We track this through our career services platform."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary/5 p-8 md:p-12 rounded-xl text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Guaranteed Interviews?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Don't leave your career to chance. Get a guaranteed number of interviews or your money back.
        </p>
        <Button size="lg" className="glass-button px-8 py-6 h-auto text-base">
          <Calendar className="mr-2 h-5 w-5" />
          Schedule Your Free Consultation
        </Button>
      </section>
    </ContentPageLayout>
  );
};

export default InterviewGuaranteePackage;
