
import React from 'react';
import { ClipboardEdit, Sparkles, Download } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: <ClipboardEdit className="h-8 w-8 text-primary" />,
      title: "Enter Your Details",
      description: "Provide your experience, skills, education, and job preferences to our AI assistant."
    },
    {
      number: "02",
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "AI Generates Your Documents",
      description: "Our AI instantly creates a tailored resume and cover letter optimized for your target role."
    },
    {
      number: "03",
      icon: <Download className="h-8 w-8 text-primary" />,
      title: "Customize & Download",
      description: "Fine-tune content, choose your favorite template, and export in multiple formats."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container section-container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full mb-4">
            <span className="text-xs font-medium text-primary">HOW IT WORKS</span>
          </div>
          <h2 className="section-heading">Create Your Perfect Resume in Three Simple Steps</h2>
          <p className="section-subheading mx-auto">
            Our streamlined process makes resume creation quick and painless
          </p>
        </div>
        
        <div className="relative mt-20">
          {/* Connection line */}
          <div className="absolute left-1/2 top-10 bottom-10 w-0.5 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/10 hidden lg:block -translate-x-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative animate-fade-in-up flex flex-col items-center text-center"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className="absolute -top-10 left-0 right-0 text-8xl font-bold text-primary/10 select-none flex justify-center">
                  {step.number}
                </div>
                <div className="glass-card p-8 rounded-2xl relative z-10 h-full flex flex-col items-center shadow-md border border-slate-100 hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 mb-6">
            <span className="text-xs font-medium text-primary">SIMPLE & INTUITIVE PROCESS</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            From Blank Page to Job-Ready Documents in Under 5 Minutes
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process takes the pain out of resume and cover letter creation. 
            Just answer a few questions, and our AI does the heavy lifting for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
