
import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Enter Your Details",
      description: "Provide your experience, skills, education, and job preferences to our AI."
    },
    {
      number: "02",
      title: "AI Generates Your Documents",
      description: "Our AI instantly creates a tailored resume and cover letter optimized for your target role."
    },
    {
      number: "03",
      title: "Customize & Download",
      description: "Fine-tune content, choose your favorite template, and export in multiple formats."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container section-container">
        <div className="text-center mb-16">
          <h2 className="section-heading">How It Works</h2>
          <p className="section-subheading mx-auto">
            Create your perfect resume in three simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="absolute -top-10 -left-10 text-9xl font-bold text-primary/10 select-none">
                {step.number}
              </div>
              <div className="glass-card p-8 rounded-2xl relative z-10 h-full">
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 mb-6">
            <span className="text-xs font-medium">Simple & Intuitive Process</span>
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
