
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { FileText, Mail, Linkedin, ArrowRight } from 'lucide-react';

interface ProgressTrackerWidgetProps {
  user: {
    name: string;
    email: string;
    isPremium: boolean;
  };
}

const ProgressTrackerWidget = ({ user }: ProgressTrackerWidgetProps) => {
  // Mock data for progress tracking
  const progressData = [
    {
      type: 'resume',
      title: 'Resume Completion',
      progress: 75,
      icon: <FileText className="h-5 w-5 text-primary" />,
      cta: 'Complete Your Resume',
      path: '/resume-builder'
    },
    {
      type: 'cover-letter',
      title: 'Cover Letter Status',
      progress: 40,
      icon: <Mail className="h-5 w-5 text-blue-600" />,
      cta: 'Improve Cover Letter',
      path: '/cover-letter-builder'
    },
    {
      type: 'linkedin',
      title: 'LinkedIn Optimization',
      progress: 30,
      icon: <Linkedin className="h-5 w-5 text-blue-700" />,
      cta: 'Optimize LinkedIn',
      path: '/linkedin-optimization'
    }
  ];
  
  return (
    <Card className="shadow-sm">
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Career Progress</h2>
          {user.isPremium ? (
            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Premium Features Unlocked</span>
          ) : (
            <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Free Plan</span>
          )}
        </div>
        
        <div className="space-y-4">
          {progressData.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {item.icon}
                  <span className="text-sm font-medium">{item.title}</span>
                </div>
                <span className="text-sm font-medium">{item.progress}%</span>
              </div>
              
              <Progress value={item.progress} className="h-2" />
              
              <div className="flex justify-end">
                <Button variant="link" size="sm" asChild className="h-auto p-0">
                  <a href={item.path}>
                    {item.cta}
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressTrackerWidget;
