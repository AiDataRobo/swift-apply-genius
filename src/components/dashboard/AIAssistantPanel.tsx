
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Zap, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const AIAssistantPanel = () => {
  // Mock data
  const resumeScore = 78;
  const suggestions = [
    {
      id: 1,
      type: 'improvement',
      title: 'Add quantifiable achievements',
      description: 'Include metrics and results to strengthen your work experience section.',
      icon: <CheckCircle className="h-5 w-5 text-amber-500" />,
    },
    {
      id: 2,
      type: 'warning',
      title: 'Skills section needs work',
      description: 'Your technical skills section is missing key technologies for this role.',
      icon: <AlertCircle className="h-5 w-5 text-destructive" />,
    },
    {
      id: 3,
      type: 'enhancement',
      title: 'Improve job title alignment',
      description: 'Adjust your job titles to better match the positions you're applying for.',
      icon: <Zap className="h-5 w-5 text-primary" />,
    },
  ];

  const quickFills = [
    {
      id: 1,
      title: 'Professional Summary',
      preview: 'Dedicated Software Engineer with 5+ years of experience...',
    },
    {
      id: 2,
      title: 'Work Achievement',
      preview: 'Increased application performance by 40% through...',
    },
    {
      id: 3,
      title: 'Skills Expansion',
      preview: 'Add relevant technical skills like React, Node.js, and AWS...',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Sparkles className="h-5 w-5 text-primary mr-2" />
          <h2 className="text-2xl font-bold">AI Assistant</h2>
        </div>
        <Button variant="outline" size="sm">
          Select Document
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* ATS Score Card */}
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-4">ATS Optimization Score</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Current Score</span>
                <span className="font-medium">{resumeScore}/100</span>
              </div>
              
              <Progress value={resumeScore} className="h-3 w-full" />
              
              <div className="flex items-center space-x-2 mt-2">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                <span className="text-xs text-muted-foreground">0-50: Needs Work</span>
                
                <div className="h-2.5 w-2.5 rounded-full bg-amber-500 ml-2"></div>
                <span className="text-xs text-muted-foreground">51-80: Good</span>
                
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 ml-2"></div>
                <span className="text-xs text-muted-foreground">81-100: Excellent</span>
              </div>
            </div>
            
            <div className="mt-6">
              <Button className="w-full">
                Get Detailed Analysis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Fill Suggestions */}
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-4">AI Quick-Fill Content</h3>
            
            <div className="space-y-3">
              {quickFills.map(item => (
                <div key={item.id} className="p-3 bg-secondary/50 rounded-lg hover:bg-secondary cursor-pointer transition-colors">
                  <h4 className="font-medium text-sm flex items-center">
                    <Zap className="h-4 w-4 text-primary mr-2" />
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                    {item.preview}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <Button className="w-full">
                Generate More Content
                <Sparkles className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Improvement Suggestions */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Smart Suggestions</h3>
        <div className="space-y-3">
          {suggestions.map(suggestion => (
            <div key={suggestion.id} className="flex items-start p-4 bg-secondary/30 rounded-lg">
              <div className="mr-3 mt-0.5">
                {suggestion.icon}
              </div>
              <div>
                <h4 className="font-medium">{suggestion.title}</h4>
                <p className="text-sm text-muted-foreground">{suggestion.description}</p>
                <div className="mt-2">
                  <Button variant="ghost" size="sm" className="h-7 px-2 text-xs text-primary">
                    Apply Suggestion
                  </Button>
                  <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                    Ignore
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIAssistantPanel;
