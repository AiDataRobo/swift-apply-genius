
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const freePlanFeatures = [
    "Basic AI resume generation",
    "2 template designs",
    "PDF export",
    "Watermarked documents",
    "Limited edits (3 per document)"
  ];

  const proPlanFeatures = [
    "Advanced AI resume & cover letter optimization",
    "20+ premium templates",
    "Multiple export formats (PDF, DOCX, TXT)",
    "Unlimited edits and versions",
    "ATS optimization analysis",
    "Keyword suggestions based on job descriptions",
    "No watermarks",
    "Priority customer support"
  ];

  const oneTimePlanFeatures = [
    "Single resume & cover letter generation",
    "10 premium templates",
    "PDF & DOCX export",
    "ATS optimization",
    "No watermarks",
    "7 days of editing access"
  ];

  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">Simple <span className="neon-text">Pricing</span></h2>
          <p className="section-subheading mx-auto">
            Choose the plan that works best for your job search needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Plan */}
          <div className="futuristic-card p-8 transition-transform duration-300 hover:scale-[1.02]">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Free Plan</h3>
              <div className="flex items-end gap-2 mt-4">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-muted-foreground mb-1">/forever</span>
              </div>
              <p className="text-muted-foreground mt-2">Perfect for getting started</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              {freePlanFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="ml-3 text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button className="w-full py-6 glass-button">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Pro Plan */}
          <div className="futuristic-card p-8 relative neon-border transition-transform duration-300 hover:scale-[1.02]">
            <div className="absolute -top-4 right-8 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
              Recommended
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Pro Plan</h3>
              <div className="flex items-end gap-2 mt-4">
                <span className="text-4xl font-bold neon-text">$9.99</span>
                <span className="text-muted-foreground mb-1">/month</span>
              </div>
              <p className="text-muted-foreground mt-2">For serious job seekers</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              {proPlanFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                    <Check className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <span className="ml-3 text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button className="w-full py-6 neon-button">
              Upgrade to Pro
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* One-Time Plan */}
          <div className="futuristic-card p-8 transition-transform duration-300 hover:scale-[1.02]">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">One-Time Purchase</h3>
              <div className="flex items-end gap-2 mt-4">
                <span className="text-4xl font-bold">$4.99</span>
                <span className="text-muted-foreground mb-1">/resume</span>
              </div>
              <p className="text-muted-foreground mt-2">Pay as you go</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              {oneTimePlanFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="ml-3 text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button className="w-full py-6 glass-button">
              Purchase Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            All plans include a 7-day money-back guarantee. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
