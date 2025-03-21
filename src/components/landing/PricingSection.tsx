
import React from 'react';
import { Check, ArrowRight, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";

const PricingSection = () => {
  const freePlanFeatures = [
    { text: "Basic AI resume generation", included: true },
    { text: "2 template designs", included: true },
    { text: "PDF export", included: true },
    { text: "Limited edits (3 per document)", included: true },
    { text: "ATS optimization", included: false },
    { text: "Cover letter generation", included: false },
    { text: "Multiple export formats", included: false }
  ];

  const proPlanFeatures = [
    { text: "Advanced AI resume & cover letter optimization", included: true },
    { text: "20+ premium templates", included: true },
    { text: "Multiple export formats (PDF, DOCX, TXT)", included: true },
    { text: "Unlimited edits and versions", included: true },
    { text: "ATS optimization analysis", included: true },
    { text: "Keyword suggestions based on job descriptions", included: true },
    { text: "Priority customer support", included: true }
  ];

  return (
    <section id="pricing" className="py-24 relative">
      <div className="container section-container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full mb-4">
            <span className="text-xs font-medium text-primary">PRICING PLANS</span>
          </div>
          <h2 className="section-heading">Simple, Transparent Pricing</h2>
          <p className="section-subheading mx-auto">
            Choose the plan that works best for your job search needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <Card className="border shadow-md transition-transform duration-300 hover:shadow-lg animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <CardHeader className="pb-0">
              <h3 className="text-xl font-semibold">Free Plan</h3>
              <div className="flex items-end gap-2 mt-4">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-muted-foreground mb-1">/forever</span>
              </div>
              <p className="text-muted-foreground mt-2">Perfect for getting started</p>
            </CardHeader>
            
            <CardContent className="pt-6">
              <ul className="space-y-3 mb-8">
                {freePlanFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className={`flex-shrink-0 h-6 w-6 rounded-full ${feature.included ? 'bg-primary/10' : 'bg-slate-100'} flex items-center justify-center mt-0.5`}>
                      {feature.included ? 
                        <Check className="h-3.5 w-3.5 text-primary" /> : 
                        <X className="h-3.5 w-3.5 text-slate-400" />
                      }
                    </div>
                    <span className={`ml-3 ${feature.included ? 'text-foreground/80' : 'text-slate-400'}`}>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            
            <CardFooter>
              <Button className="w-full py-6" variant="outline">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardFooter>
          </Card>
          
          {/* Pro Plan */}
          <Card className="border border-primary/20 shadow-md relative transition-transform duration-300 hover:shadow-lg animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="absolute -top-4 right-8 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
              Recommended
            </div>
            
            <CardHeader className="pb-0">
              <h3 className="text-xl font-semibold">Pro Plan</h3>
              <div className="flex items-end gap-2 mt-4">
                <span className="text-4xl font-bold">$9.99</span>
                <span className="text-muted-foreground mb-1">/month</span>
              </div>
              <p className="text-muted-foreground mt-2">For serious job seekers</p>
            </CardHeader>
            
            <CardContent className="pt-6">
              <ul className="space-y-3 mb-8">
                {proPlanFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="ml-3 text-foreground/80">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            
            <CardFooter>
              <Button className="w-full py-6 glass-button">
                Upgrade to Pro
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardFooter>
          </Card>
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
