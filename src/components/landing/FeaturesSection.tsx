
import React, { useEffect, useRef } from 'react';
import { FileText, Check, Star, Clock, Sparkles, FileCode, Settings, Download } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => (
  <Card 
    className="feature-card border-0 shadow-md animate-fade-in-up hover:shadow-xl transition-all duration-300" 
    style={{ animationDelay: `${delay}s`, animationFillMode: 'backwards' }}
  >
    <CardContent className="p-6">
      <div className="icon-container bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "AI-Powered Content",
      description: "Our AI generates tailored content highlighting your skills and experience in the most impactful way.",
      delay: 0.1
    },
    {
      icon: <FileCode className="h-6 w-6" />,
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
      icon: <Settings className="h-6 w-6" />,
      title: "Real-Time Editing",
      description: "Make changes instantly and see how they'll look on your resume with our live preview editor.",
      delay: 0.4
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Time-Saving",
      description: "Create a professional resume in minutes instead of hours with our intuitive interface.",
      delay: 0.5
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Multiple Formats",
      description: "Download your resume in PDF, DOCX, or TXT formats to suit any application requirement.",
      delay: 0.6
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
    <section id="features" className="py-24 relative bg-slate-50/50" ref={sectionRef}>
      <div className="container section-container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full mb-4">
            <span className="text-xs font-medium text-primary">POWERFUL FEATURES</span>
          </div>
          <h2 className="section-heading">Everything You Need to Create the Perfect Resume</h2>
          <p className="section-subheading mx-auto">
            Leverage AI technology to create impressive, job-winning documents in minutes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
