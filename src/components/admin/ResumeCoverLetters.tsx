
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Search } from 'lucide-react';

const ResumeCoverLetters = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Resume & Cover Letter Submissions</h2>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Document Management</CardTitle>
          <CardDescription>
            View and manage all resume and cover letter submissions
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex items-center justify-center h-64 border rounded-md bg-muted/50">
            <div className="flex flex-col items-center text-muted-foreground">
              <FileText className="h-10 w-10 mb-2" />
              <h3 className="text-lg font-medium">Resume & Cover Letter Management</h3>
              <p className="text-sm max-w-md text-center mt-1">
                This section will display all user documents, with filtering, search, and document previews.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumeCoverLetters;
