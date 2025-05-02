
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Mail, Upload, CalendarDays } from 'lucide-react';
import { Player } from '@lottiefiles/react-lottie-player';
import CalBookingModal from '@/components/booking/CalBookingModal';

const QuickActionsSection = () => {
  const navigate = useNavigate();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  
  const actions = [
    {
      title: 'Build a Resume',
      description: 'Create a new resume using our professional templates',
      icon: <FileText className="h-10 w-10 text-primary" />,
      animation: '/animations/resume-review.json',
      onClick: () => navigate('/resume-builder'),
      bgColor: 'bg-purple-50 dark:bg-purple-950/40',
      borderColor: 'border-purple-200 dark:border-purple-800/30'
    },
    {
      title: 'Generate Cover Letter',
      description: 'Create a matching cover letter with AI assistance',
      icon: <Mail className="h-10 w-10 text-blue-600" />,
      animation: '/animations/resume-review.json',
      onClick: () => navigate('/cover-letter-builder'),
      bgColor: 'bg-blue-50 dark:bg-blue-950/40',
      borderColor: 'border-blue-200 dark:border-blue-800/30'
    },
    {
      title: 'ATS Score Checker',
      description: 'Check your resume against ATS systems',
      icon: <Upload className="h-10 w-10 text-green-600" />,
      animation: '/animations/resume-review.json',
      onClick: () => navigate('/dashboard?tab=ai-assistant'),
      bgColor: 'bg-green-50 dark:bg-green-950/40',
      borderColor: 'border-green-200 dark:border-green-800/30'
    },
    {
      title: 'Book a Consultation',
      description: 'Schedule a free call with a career expert',
      icon: <CalendarDays className="h-10 w-10 text-amber-600" />,
      animation: '/animations/resume-review.json',
      onClick: () => setIsBookingModalOpen(true),
      bgColor: 'bg-amber-50 dark:bg-amber-950/40',
      borderColor: 'border-amber-200 dark:border-amber-800/30'
    }
  ];
  
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map((action, index) => (
          <Card 
            key={index} 
            className={`cursor-pointer transition-all hover:shadow-md hover:scale-105 ${action.bgColor} ${action.borderColor} border`}
            onClick={action.onClick}
          >
            <CardContent className="flex flex-col items-center text-center p-5">
              <div className="h-16 w-16 mb-2 flex items-center justify-center">
                <Player
                  src={action.animation}
                  className="w-full h-full"
                  loop
                  autoplay
                />
              </div>
              <h3 className="text-lg font-semibold">{action.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{action.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <CalBookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)}
        calLink="swiftapply/consultation"
      />
    </div>
  );
};

export default QuickActionsSection;
