
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Sparkles, Download, Upload, MessageSquare, CheckSquare } from 'lucide-react';

interface StepProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  bgClass?: string;
}

const Step = ({ number, icon, title, description, delay, bgClass = "bg-white" }: StepProps) => {
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true }}
    >
      <div className={`${bgClass} rounded-2xl p-6 shadow-md border border-gray-100 h-full`}>
        <div className="absolute -top-3 -left-3 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
          {number}
        </div>
        <div className="pt-4">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              {icon}
            </div>
          </div>
          <h3 className="text-lg font-bold mb-2 text-center">{title}</h3>
          <p className="text-muted-foreground text-center text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const HowItWorksSection = () => {
  const aiSteps = [
    {
      number: "1",
      icon: <FileText className="h-6 w-6" />,
      title: "Enter Details & Choose Template",
      description: "Add your information and select from our professional templates",
      delay: 0.1,
      bgClass: "bg-gradient-to-br from-white to-blue-50/40"
    },
    {
      number: "2",
      icon: <Sparkles className="h-6 w-6" />,
      title: "AI Generates Your Resume",
      description: "Our AI creates a tailored, ATS-optimized resume",
      delay: 0.2,
      bgClass: "bg-gradient-to-br from-white to-purple-50/40"
    },
    {
      number: "3",
      icon: <Download className="h-6 w-6" />,
      title: "Customize & Download",
      description: "Make final adjustments and download your resume in one click",
      delay: 0.3,
      bgClass: "bg-gradient-to-br from-white to-green-50/40"
    }
  ];

  const proSteps = [
    {
      number: "1",
      icon: <Upload className="h-6 w-6" />,
      title: "Upload Your Resume",
      description: "Share your current resume for a free expert review",
      delay: 0.3,
      bgClass: "bg-gradient-to-br from-white to-amber-50/40"
    },
    {
      number: "2",
      icon: <CheckSquare className="h-6 w-6" />,
      title: "Get Improvement Suggestions",
      description: "Receive personalized feedback from our experts",
      delay: 0.4,
      bgClass: "bg-gradient-to-br from-white to-red-50/40"
    },
    {
      number: "3",
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Work With a Certified Writer",
      description: "Collaborate with a resume professional to perfect your document",
      delay: 0.5,
      bgClass: "bg-gradient-to-br from-white to-teal-50/40"
    },
    {
      number: "4",
      icon: <FileText className="h-6 w-6" />,
      title: "Receive Your Polished Resume",
      description: "Get your job-winning resume ready for applications",
      delay: 0.6,
      bgClass: "bg-gradient-to-br from-white to-indigo-50/40"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-medium text-primary">HOW IT WORKS</span>
          </motion.div>
          <motion.h2 
            className="section-heading mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Simple Process, Exceptional Results
          </motion.h2>
          <motion.p 
            className="section-subheading mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Choose the path that works best for your needs
          </motion.p>
        </div>

        <div className="space-y-16">
          {/* AI Resume Maker */}
          <div>
            <motion.h3 
              className="text-2xl font-bold mb-8 flex items-center justify-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Sparkles className="h-6 w-6 text-primary mr-2" /> 
              AI Resume Maker
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {aiSteps.map((step, index) => (
                <Step 
                  key={`ai-step-${index}`}
                  number={step.number}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  delay={step.delay}
                  bgClass={step.bgClass}
                />
              ))}
            </div>
          </div>

          {/* Professional Writing Services */}
          <div>
            <motion.h3 
              className="text-2xl font-bold mb-8 flex items-center justify-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <FileText className="h-6 w-6 text-blue-500 mr-2" /> 
              Professional Writing Services
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {proSteps.map((step, index) => (
                <Step 
                  key={`pro-step-${index}`}
                  number={step.number}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  delay={step.delay}
                  bgClass={step.bgClass}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl" />
      <div className="absolute top-32 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
    </section>
  );
};

export default HowItWorksSection;
