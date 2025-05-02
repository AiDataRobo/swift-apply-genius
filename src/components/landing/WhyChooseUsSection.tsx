
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, X, Award, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <X className="h-8 w-8 text-red-500" />,
      title: "Poorly written resumes miss ATS filters",
      description: "Most resumes are rejected by Applicant Tracking Systems (ATS) before they ever reach human recruiters."
    },
    {
      icon: <X className="h-8 w-8 text-red-500" />,
      title: "Generic templates look unprofessional",
      description: "Using the same templates as thousands of other applicants makes your application blend in, not stand out."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-green-500" />,
      title: "Expert writers tailor resumes to your goals",
      description: "Our professional writers customize your resume for your specific industry, role, and career ambitions."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-green-500" />,
      title: "Higher response & interview rates proven",
      description: "87% of our clients see increased interview calls within 2 weeks of using our professionally written resumes."
    }
  ];

  const trustIndicators = [
    { text: "4.8/5 Client Rating" },
    { text: "3-5 Day Turnaround" },
    { text: "7-Day Interview Guarantee" },
    { text: "25,000+ Successful Resumes" }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-slate-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose EnhanceResume?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We understand what works in today's competitive job market
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full border border-slate-200 hover:border-primary/30 transition-colors">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="bg-primary/5 rounded-xl p-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold">Trust Indicators</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustIndicators.map((indicator, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {index === 0 && <Award className="h-12 w-12 text-amber-500 mb-3" />}
                {index === 1 && <Clock className="h-12 w-12 text-blue-500 mb-3" />}
                {index === 2 && <CheckCircle className="h-12 w-12 text-green-500 mb-3" />}
                {index === 3 && <motion.div 
                  className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl mb-3"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  25K+
                </motion.div>}
                <p className="font-semibold">{indicator.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
