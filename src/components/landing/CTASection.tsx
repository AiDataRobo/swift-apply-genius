
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5 pointer-events-none" />
      
      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <div className="glass-card bg-primary/20 text-foreground p-12 md:p-16 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-transparent opacity-70 pointer-events-none" />
          
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-display">
              Ready to Land Your Next Job?
            </h2>
            
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
              Join thousands of successful job seekers who've transformed their job search with SwiftApply's AI-powered tools.
            </p>
            
            <Button className="glass-button py-6 px-8 text-lg rounded-xl">
              Try for Free Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
