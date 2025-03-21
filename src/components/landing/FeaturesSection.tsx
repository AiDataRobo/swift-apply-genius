
import React, { useEffect, useRef } from 'react';
import { FileText, Check, Star, Clock } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => (
  <div 
    className="feature-card glass-card animate-fade-in-up" 
    style={{ animationDelay: `${delay}s`, animationFillMode: 'backwards' }}
  >
    <div className="icon-container bg-primary/10 text-primary">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "AI-Powered Content",
      description: "Our AI generates tailored content highlighting your skills and experience in the most impactful way.",
      delay: 0.1
    },
    {
      icon: <Check className="h-6 w-6" />,
      title: "ATS Optimization",
      description: "Beat applicant tracking systems with perfectly optimized keywords tailored to each job description.",
      delay: 0.2
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Premium Templates",
      description: "Choose from dozens of professionally designed templates that stand out to recruiters.",
      delay: 0.3
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Time-Saving",
      description: "Create a professional resume in minutes instead of hours with our intuitive interface.",
      delay: 0.4
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.appear-on-scroll');
    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="features" className="py-24 relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
      
      <div className="container section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">Powerful Features</h2>
          <p className="section-subheading mx-auto">
            Leverage AI technology to create impressive, job-winning documents in minutes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
