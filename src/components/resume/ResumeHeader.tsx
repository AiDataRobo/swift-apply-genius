
import React from 'react';
import { Button } from '@/components/ui/button';

export interface ResumeHeaderProps {
  onChangeTemplate: () => void;
}

const ResumeHeader = ({ onChangeTemplate }: ResumeHeaderProps) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <h1 className="text-xl font-semibold">Resume Builder</h1>
      <Button onClick={onChangeTemplate} variant="outline">
        Change Template
      </Button>
    </div>
  );
};

export default ResumeHeader;
