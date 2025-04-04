
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Edit } from 'lucide-react';

const WritingServiceRequests = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Writing Service Requests</h2>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Professional Writing Services</CardTitle>
          <CardDescription>
            Manage professional resume and cover letter writing service requests
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex items-center justify-center h-64 border rounded-md bg-muted/50">
            <div className="flex flex-col items-center text-muted-foreground">
              <Edit className="h-10 w-10 mb-2" />
              <h3 className="text-lg font-medium">Writing Service Management</h3>
              <p className="text-sm max-w-md text-center mt-1">
                This section will display all writing service orders, writer assignments,
                status tracking, and customer communication tools.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WritingServiceRequests;
