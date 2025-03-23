
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5 pointer-events-none" />
      
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-70" />
      <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl opacity-60" />
      
      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <div className="glass-card bg-white p-12 md:p-16 rounded-3xl relative overflow-hidden shadow-xl border border-slate-100">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent opacity-70 pointer-events-none" />
          
          {/* Decorative pattern */}
          <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 0 10 L 40 10 M 10 0 L 10 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-display text-foreground flex items-center justify-center gap-3">
              Ready to Land Your Next Job?
              <Sparkles className="h-8 w-8 text-primary animate-pulse" />
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of successful job seekers who've transformed their job search with SwiftApply's AI-powered tools.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="glass-button py-6 px-8 text-lg rounded-xl w-full sm:w-auto group transition-all duration-300" asChild>
                <Link to="/resume-builder" className="group">
                  Start Your Resume Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              
              <Button variant="outline" className="py-6 px-8 text-lg rounded-xl w-full sm:w-auto hover:bg-secondary/50 transition-all duration-300">
                View Templates
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
