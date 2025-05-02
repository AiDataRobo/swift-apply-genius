
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Linkedin, FileCheck, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ServicesSection = () => {
  const services = [
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Basic Resume Writing",
      price: "₹1,499",
      description: "ATS-optimized professional resume tailored for your target role",
      features: [
        "Strategic resume formatting",
        "ATS keyword optimization",
        "1 round of revisions",
        "3-day turnaround time"
      ],
      cta: "Get Started",
      link: "/resume-writing-services"
    },
    {
      icon: <div className="flex">
        <FileText className="h-10 w-10 text-primary" />
        <Linkedin className="h-10 w-10 text-blue-500 -ml-3" />
      </div>,
      title: "Standard Resume Package",
      price: "₹2,999",
      description: "Comprehensive package for job applications",
      features: [
        "ATS-optimized professional resume",
        "LinkedIn profile optimization",
        "2 rounds of revisions",
        "4-day turnaround time"
      ],
      popular: true,
      cta: "Upgrade Now",
      link: "/resume-writing-services"
    },
    {
      icon: <FileCheck className="h-10 w-10 text-green-500" />,
      title: "Premium Resume Package",
      price: "₹4,499",
      description: "Complete job application solution",
      features: [
        "ATS-optimized professional resume",
        "LinkedIn profile optimization",
        "Customized cover letter",
        "3 rounds of revisions",
        "Priority support"
      ],
      cta: "Go Premium",
      link: "/resume-writing-services"
    },
    {
      icon: <Award className="h-10 w-10 text-amber-500" />,
      title: "Interview Guarantee Package",
      price: "From ₹7,999",
      description: "Guaranteed interview calls or your money back",
      features: [
        "Standard (5 Interviews) → ₹7,999",
        "Premium (15 Interviews) → ₹14,999",
        "Unlimited revisions",
        "100% money back guarantee"
      ],
      cta: "Get Guaranteed Interviews",
      link: "/interview-guarantee-package"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            OUR SERVICES
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Our Resume Writing Services
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Professional writing services tailored to your career needs and goals
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="pricing">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="flex"
            >
              <Card className={`flex flex-col h-full w-full border border-slate-200 hover:border-primary/30 transition-all ${service.popular ? 'shadow-lg ring-1 ring-primary/20' : ''}`}>
                {service.popular && (
                  <div className="absolute top-0 right-0">
                    <Badge variant="default" className="rounded-bl-lg rounded-tr-lg">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <div className="mt-2">
                    <span className="text-2xl font-bold">{service.price}</span>
                  </div>
                  <CardDescription className="mt-2">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-baseline">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link to={service.link}>
                      {service.cta}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
