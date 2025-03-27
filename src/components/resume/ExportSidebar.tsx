
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, FileText, Share2 } from 'lucide-react';

export interface ExportSidebarProps {
  isExporting: boolean;
  onDownloadPdf: () => void;
  onExportDocx: () => void;
  onCreateShareLink: () => void;
}

const ExportSidebar = ({ isExporting, onDownloadPdf, onExportDocx, onCreateShareLink }: ExportSidebarProps) => {
  return (
    <div className="border-r h-full p-4">
      <h2 className="text-lg font-semibold mb-4">Export</h2>
      
      <div className="space-y-3">
        <Button 
          className="w-full justify-start" 
          onClick={onDownloadPdf}
          disabled={isExporting}
        >
          <Download className="mr-2 h-4 w-4" />
          Download PDF
        </Button>
        
        <Button 
          className="w-full justify-start" 
          variant="outline"
          onClick={onExportDocx}
          disabled={isExporting}
        >
          <FileText className="mr-2 h-4 w-4" />
          Export to Word
        </Button>
        
        <Button 
          className="w-full justify-start" 
          variant="outline"
          onClick={onCreateShareLink}
          disabled={isExporting}
        >
          <Share2 className="mr-2 h-4 w-4" />
          Create Share Link
        </Button>
      </div>
    </div>
  );
};

export default ExportSidebar;
