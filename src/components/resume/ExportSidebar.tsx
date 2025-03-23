
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Download, FileType, Trash2, Share2, Info, Loader2 } from "lucide-react";

interface ExportSidebarProps {
  isExporting: boolean;
  onDownloadPdf: () => void;
  onExportDocx: () => void;
  onCreateShareLink: () => void;
}

const ExportSidebar = ({ 
  isExporting, 
  onDownloadPdf, 
  onExportDocx, 
  onCreateShareLink 
}: ExportSidebarProps) => {
  return (
    <div className="space-y-4 p-1">
      <div className="space-y-2">
        <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Export</h3>
        <Button 
          className="w-full flex items-center justify-center gap-2" 
          onClick={onDownloadPdf}
          disabled={isExporting}
        >
          {isExporting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Download className="h-4 w-4" />
          )}
          {isExporting ? "Preparing PDF..." : "Download PDF"}
        </Button>
        <Button 
          variant="outline" 
          className="w-full flex items-center justify-center gap-2" 
          onClick={onExportDocx}
        >
          <FileType className="h-4 w-4" />
          Export as DOCX
        </Button>
        <Button 
          variant="outline" 
          className="w-full flex items-center justify-center gap-2"
        >
          <Trash2 className="h-4 w-4" />
          Export as TXT
        </Button>
      </div>
      
      <Separator />
      
      <div className="space-y-2">
        <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Share</h3>
        <Button 
          variant="outline" 
          className="w-full flex items-center justify-center gap-2" 
          onClick={onCreateShareLink}
        >
          <Share2 className="h-4 w-4" />
          Create Share Link
        </Button>
        
        <div className="rounded-md bg-muted/50 p-3 text-xs">
          <div className="flex items-start gap-2">
            <Info className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
            <p className="text-muted-foreground">
              Share links allow anyone to view (but not edit) your resume. Links expire after 30 days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportSidebar;
