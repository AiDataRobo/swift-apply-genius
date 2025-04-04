
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';

const AIResumeReviews = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">AI Resume Reviews</h2>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>AI Review Management</CardTitle>
          <CardDescription>
            Monitor and manage AI-powered resume review requests
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex items-center justify-center h-64 border rounded-md bg-muted/50">
            <div className="flex flex-col items-center text-muted-foreground">
              <Star className="h-10 w-10 mb-2" />
              <h3 className="text-lg font-medium">AI Resume Review Dashboard</h3>
              <p className="text-sm max-w-md text-center mt-1">
                This section will display AI review requests, analytics on review quality,
                and tools to improve the AI review system.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIResumeReviews;
