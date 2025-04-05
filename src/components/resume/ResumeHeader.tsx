
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FileText, PenTool, HelpCircle } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";

export interface ResumeHeaderProps {
  onChangeTemplate: () => void;
}

const ResumeHeader = ({ onChangeTemplate }: ResumeHeaderProps) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-2">
        <Link to="/" className="text-xl font-semibold flex items-center">
          <FileText className="h-5 w-5 mr-2 text-primary" />
          EnhanceResume
        </Link>
        <span className="text-sm text-muted-foreground">/</span>
        <h1 className="text-lg font-medium">Resume Builder</h1>
      </div>
      
      <div className="flex items-center gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              <HelpCircle className="h-4 w-4 mr-2" />
              Need Help?
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link to="/resume-writing-services" className="cursor-pointer">
                <PenTool className="h-4 w-4 mr-2" />
                Professional Writing Service
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/interview-guarantee-package" className="cursor-pointer">
                Interview Guarantee Package
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <Button onClick={onChangeTemplate} variant="outline">
          Change Template
        </Button>
      </div>
    </div>
  );
};

export default ResumeHeader;
