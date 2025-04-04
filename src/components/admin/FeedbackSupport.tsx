
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';

const FeedbackSupport = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Feedback & Support</h2>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Support Tickets & User Feedback</CardTitle>
          <CardDescription>
            Manage customer support requests and collect feedback
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex items-center justify-center h-64 border rounded-md bg-muted/50">
            <div className="flex flex-col items-center text-muted-foreground">
              <MessageSquare className="h-10 w-10 mb-2" />
              <h3 className="text-lg font-medium">Support Management</h3>
              <p className="text-sm max-w-md text-center mt-1">
                This section will display customer support tickets, user feedback,
                and communication tools for addressing user inquiries.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeedbackSupport;
