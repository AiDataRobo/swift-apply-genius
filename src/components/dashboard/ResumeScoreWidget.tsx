
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { CheckCircle, Circle, AlertTriangle } from 'lucide-react';

const ResumeScoreWidget = () => {
  // Mock data for resume score
  const score = 72;
  const checklistItems = [
    { text: 'Contains relevant keywords', completed: true },
    { text: 'Proper formatting', completed: true },
    { text: 'Contact information complete', completed: true },
    { text: 'Skills section needs improvement', completed: false },
    { text: 'Add more quantifiable achievements', completed: false },
  ];
  
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-amber-600';
    return 'text-red-600';
  };
  
  const getProgressColor = (score: number) => {
    if (score >= 80) return 'bg-green-600';
    if (score >= 60) return 'bg-amber-600';
    return 'bg-red-600';
  };
  
  return (
    <Card className="shadow-sm">
      <CardContent className="p-5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg">Resume ATS Score</h3>
          <div className={`text-2xl font-bold ${getScoreColor(score)}`}>{score}%</div>
        </div>
        
        <div className="mb-4">
          <Progress value={score} className={`h-3 ${getProgressColor(score)}`} />
          
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-red-500 mr-1"></div>
              <span className="text-xs text-muted-foreground">Needs Work (0-59%)</span>
            </div>
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-amber-500 mr-1"></div>
              <span className="text-xs text-muted-foreground">Good (60-79%)</span>
            </div>
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-green-500 mr-1"></div>
              <span className="text-xs text-muted-foreground">Excellent (80-100%)</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          <h4 className="text-sm font-medium mb-2">Improvement Checklist:</h4>
          {checklistItems.map((item, index) => (
            <div key={index} className="flex items-start">
              {item.completed ? (
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              ) : (
                <AlertTriangle className="h-4 w-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
              )}
              <span className="text-sm">{item.text}</span>
            </div>
          ))}
        </div>
        
        <Button className="w-full">Fix My Resume</Button>
      </CardContent>
    </Card>
  );
};

export default ResumeScoreWidget;
