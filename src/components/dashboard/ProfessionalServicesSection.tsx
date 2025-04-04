
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileEdit, Award, Linkedin } from 'lucide-react';
import { Player } from '@lottiefiles/react-lottie-player';
import { useNavigate } from 'react-router-dom';

const ProfessionalServicesSection = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      title: 'Resume Writing Service',
      icon: <FileEdit className="h-10 w-10 text-purple-600" />,
      animation: '/animations/resume-review.json',
      description: 'Get your resume professionally written by our experts',
      packages: [
        { name: 'Basic', price: '₹1,499' },
        { name: 'Standard', price: '₹2,999' },
        { name: 'Premium', price: '₹4,499' }
      ],
      cta: 'Hire an Expert',
      path: '/resume-writing-services',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20',
      borderColor: 'border-purple-200 dark:border-purple-800/30'
    },
    {
      title: 'Interview Guarantee Package',
      icon: <Award className="h-10 w-10 text-amber-600" />,
      animation: '/animations/resume-review.json',
      description: 'Get guaranteed interviews or your money back',
      packages: [
        { name: 'Standard (5 Interviews)', price: '₹7,999' },
        { name: 'Premium (15 Interviews)', price: '₹14,999' }
      ],
      cta: 'Get Guaranteed Interviews',
      path: '/interview-guarantee-package',
      bgColor: 'bg-amber-50 dark:bg-amber-950/20',
      borderColor: 'border-amber-200 dark:border-amber-800/30'
    },
    {
      title: 'LinkedIn Profile Optimization',
      icon: <Linkedin className="h-10 w-10 text-blue-700" />,
      animation: '/animations/resume-review.json',
      description: 'Make your LinkedIn profile stand out to recruiters',
      packages: [
        { name: 'Basic', price: '₹999' },
        { name: 'Premium', price: '₹2,499' }
      ],
      cta: 'Optimize My LinkedIn',
      path: '/linkedin-optimization',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
      borderColor: 'border-blue-200 dark:border-blue-800/30'
    }
  ];
  
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Professional Services</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <Card key={index} className={`transition-all hover:shadow-md ${service.bgColor} ${service.borderColor} border`}>
            <CardContent className="p-5">
              <div className="flex items-center mb-4">
                <div className="h-16 w-16 mr-3">
                  <Player
                    src={service.animation}
                    className="w-full h-full"
                    loop
                    autoplay
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-4 border-t border-border pt-3">
                {service.packages.map((pkg, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-sm">{pkg.name}</span>
                    <span className="font-semibold">{pkg.price}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                className="w-full" 
                onClick={() => navigate(service.path)}
              >
                {service.cta}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalServicesSection;
