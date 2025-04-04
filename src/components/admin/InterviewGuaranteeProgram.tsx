
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award } from 'lucide-react';

const InterviewGuaranteeProgram = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Interview Guarantee Program</h2>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Interview Guarantee Management</CardTitle>
          <CardDescription>
            Track and manage users enrolled in the Interview Guarantee Program
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex items-center justify-center h-64 border rounded-md bg-muted/50">
            <div className="flex flex-col items-center text-muted-foreground">
              <Award className="h-10 w-10 mb-2" />
              <h3 className="text-lg font-medium">Guarantee Program Dashboard</h3>
              <p className="text-sm max-w-md text-center mt-1">
                This section will track enrollees in the Interview Guarantee Program,
                monitor application status, interview outcomes, and guarantee fulfillment.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InterviewGuaranteeProgram;
