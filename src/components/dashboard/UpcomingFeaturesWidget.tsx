
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, BrainCircuit, Target, ShieldCheck } from 'lucide-react';

const UpcomingFeaturesWidget = () => {
  const upcomingFeatures = [
    {
      title: 'AI Career Suggestion Tool',
      description: 'Get personalized career path recommendations based on your skills and interests',
      eta: 'July 2023',
      icon: <BrainCircuit className="h-5 w-5 text-purple-500" />
    },
    {
      title: 'Job Application Tracker',
      description: 'Manage all your job applications in one place with status updates and reminders',
      eta: 'August 2023',
      icon: <Target className="h-5 w-5 text-blue-500" />
    },
    {
      title: 'Interview Practice with AI',
      description: 'Practice for interviews with our AI-powered simulator and get feedback',
      eta: 'September 2023',
      icon: <ShieldCheck className="h-5 w-5 text-green-500" />
    }
  ];
  
  return (
    <Card className="shadow-sm">
      <CardContent className="p-5">
        <div className="flex items-center mb-4">
          <Sparkles className="h-5 w-5 text-primary mr-2" />
          <h3 className="font-semibold">Coming Soon</h3>
        </div>
        
        <div className="space-y-4">
          {upcomingFeatures.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 mr-3 mt-1">
                {feature.icon}
              </div>
              <div>
                <div className="flex items-center">
                  <h4 className="text-sm font-medium">{feature.title}</h4>
                  <Badge variant="outline" className="ml-2 text-xs">
                    {feature.eta}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingFeaturesWidget;
