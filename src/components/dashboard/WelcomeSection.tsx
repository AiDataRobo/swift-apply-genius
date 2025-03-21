
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText, PlusCircle, ExternalLink } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface WelcomeSectionProps {
  user: {
    name: string;
    email: string;
    isPremium: boolean;
  };
}

const WelcomeSection = ({ user }: WelcomeSectionProps) => {
  // Mock profile completion data
  const profileCompletionPercentage = 75;
  const recentActivity = [
    { id: 1, action: 'Updated', document: 'Marketing Resume', timestamp: '2 hours ago' },
    { id: 2, action: 'Created', document: 'Cover Letter - Product Manager', timestamp: '1 day ago' },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Greeting Card */}
      <div className="glass-card rounded-xl p-6 md:col-span-1 lg:col-span-1">
        <h1 className="text-2xl font-bold mb-2">Welcome back, {user.name}!</h1>
        <p className="text-muted-foreground mb-4">Let's continue improving your job application materials.</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span>Profile completion</span>
            <span>{profileCompletionPercentage}%</span>
          </div>
          <Progress value={profileCompletionPercentage} className="h-2" />
        </div>
        
        <Button className="w-full">
          <PlusCircle className="mr-2 h-4 w-4" />
          Create New Document
        </Button>
      </div>
      
      {/* Recent Activity */}
      <div className="glass-card rounded-xl p-6 md:col-span-1 lg:col-span-1">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivity.map(activity => (
            <div key={activity.id} className="flex items-start">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-sm">{activity.action} <span className="text-primary">{activity.document}</span></p>
                <p className="text-muted-foreground text-xs">{activity.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
        
        <Button variant="outline" size="sm" className="w-full mt-4">
          View All Activity
          <ExternalLink className="ml-2 h-3.5 w-3.5" />
        </Button>
      </div>
      
      {/* Quick Stats */}
      <div className="glass-card rounded-xl p-6 md:col-span-2 lg:col-span-1">
        <h2 className="text-lg font-semibold mb-4">Application Stats</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-secondary/50 p-4 rounded-lg text-center">
            <h3 className="text-3xl font-bold text-primary">5</h3>
            <p className="text-sm text-muted-foreground">Active Resumes</p>
          </div>
          <div className="bg-secondary/50 p-4 rounded-lg text-center">
            <h3 className="text-3xl font-bold text-primary">3</h3>
            <p className="text-sm text-muted-foreground">Cover Letters</p>
          </div>
          <div className="bg-secondary/50 p-4 rounded-lg text-center">
            <h3 className="text-3xl font-bold text-primary">8</h3>
            <p className="text-sm text-muted-foreground">Applications</p>
          </div>
          <div className="bg-secondary/50 p-4 rounded-lg text-center">
            <h3 className="text-3xl font-bold text-primary">2</h3>
            <p className="text-sm text-muted-foreground">Interviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
