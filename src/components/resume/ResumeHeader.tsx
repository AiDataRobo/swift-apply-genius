
import { Button } from "@/components/ui/button";
import { ChevronLeft, Save, Download, Loader2, LayoutTemplate, FilePenLine } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface ResumeHeaderProps {
  isSaving: boolean;
  isExporting: boolean;
  onSave: () => void;
  onExport: () => void;
}

const ResumeHeader = ({ isSaving, isExporting, onSave, onExport }: ResumeHeaderProps) => {
  const navigate = useNavigate();
  
  return (
    <header className="border-b bg-card shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <motion.div 
          className="flex items-center space-x-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="h-8 w-8 rounded-full bg-primary/10 grid place-items-center">
            <FilePenLine className="h-5 w-5 text-primary" />
          </div>
          <h1 className="text-lg font-semibold">Resume Builder</h1>
        </motion.div>
        <motion.div 
          className="flex items-center space-x-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => navigate("/")}
            className="flex items-center group"
          >
            <ChevronLeft className="h-4 w-4 mr-1 group-hover:-translate-x-0.5 transition-transform" />
            Back
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onSave}
            disabled={isSaving}
            className="flex items-center relative overflow-hidden group"
          >
            <span className="absolute inset-0 w-full h-full bg-primary/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></span>
            {isSaving ? (
              <Loader2 className="h-4 w-4 mr-1.5 animate-spin" />
            ) : (
              <Save className="h-4 w-4 mr-1.5 relative z-10" />
            )}
            <span className="relative z-10">
              {isSaving ? "Saving..." : "Save"}
            </span>
          </Button>
          <Button 
            variant="default" 
            size="sm"
            onClick={onExport}
            disabled={isExporting}
            className="flex items-center group"
          >
            {isExporting ? (
              <Loader2 className="h-4 w-4 mr-1.5 animate-spin" />
            ) : (
              <Download className="h-4 w-4 mr-1.5 group-hover:animate-bounce" />
            )}
            {isExporting ? "Exporting..." : "Export PDF"}
          </Button>
        </motion.div>
      </div>
    </header>
  );
};

export default ResumeHeader;
