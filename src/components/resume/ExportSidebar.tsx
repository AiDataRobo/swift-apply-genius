
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Download, FileType, Trash2, Share2, Info, Loader2, CloudDownload, FileText, Cpu } from "lucide-react";
import { motion } from "framer-motion";

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
        <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide flex items-center">
          <CloudDownload className="h-3.5 w-3.5 mr-1.5 text-primary" />
          Export
        </h3>
        <Button 
          className="w-full flex items-center justify-center gap-2 group relative overflow-hidden" 
          onClick={onDownloadPdf}
          disabled={isExporting}
        >
          <span className="absolute inset-0 w-full h-full bg-primary/20 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></span>
          {isExporting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Download className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
          )}
          <span className="relative z-10">
            {isExporting ? "Preparing PDF..." : "Download PDF"}
          </span>
        </Button>
        
        <div className="grid grid-cols-2 gap-2">
          <Button 
            variant="outline" 
            className="w-full flex items-center justify-center gap-2 hover:border-primary/50 transition-colors" 
            onClick={onExportDocx}
          >
            <FileText className="h-4 w-4 text-blue-500" />
            DOCX
          </Button>
          <Button 
            variant="outline" 
            className="w-full flex items-center justify-center gap-2 hover:border-primary/50 transition-colors"
          >
            <Cpu className="h-4 w-4 text-slate-500" />
            TXT
          </Button>
        </div>
      </div>
      
      <Separator className="my-2" />
      
      <div className="space-y-2">
        <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide flex items-center">
          <Share2 className="h-3.5 w-3.5 mr-1.5 text-primary" />
          Share
        </h3>
        <Button 
          variant="outline" 
          className="w-full flex items-center justify-center gap-2 group hover:bg-primary/5" 
          onClick={onCreateShareLink}
        >
          <Share2 className="h-4 w-4 group-hover:rotate-12 transition-transform" />
          Create Share Link
        </Button>
        
        <motion.div 
          className="rounded-md bg-muted/50 p-3 text-xs"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-start gap-2">
            <Info className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
            <p className="text-muted-foreground">
              Share links allow anyone to view (but not edit) your resume. Links expire after 30 days.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExportSidebar;
