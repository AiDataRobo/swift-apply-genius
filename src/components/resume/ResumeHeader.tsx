
import { Button } from "@/components/ui/button";
import { ChevronLeft, Save, Download, Loader2, LayoutTemplate } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ResumeHeaderProps {
  isSaving: boolean;
  isExporting: boolean;
  onSave: () => void;
  onExport: () => void;
}

const ResumeHeader = ({ isSaving, isExporting, onSave, onExport }: ResumeHeaderProps) => {
  const navigate = useNavigate();
  
  return (
    <header className="border-b bg-card shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <LayoutTemplate className="h-5 w-5 text-primary" />
          <h1 className="text-lg font-semibold">Resume Builder</h1>
        </div>
        <div className="flex items-center space-x-3">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => navigate("/")}
            className="flex items-center"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onSave}
            disabled={isSaving}
            className="flex items-center"
          >
            {isSaving ? (
              <Loader2 className="h-4 w-4 mr-1.5 animate-spin" />
            ) : (
              <Save className="h-4 w-4 mr-1.5" />
            )}
            {isSaving ? "Saving..." : "Save"}
          </Button>
          <Button 
            variant="default" 
            size="sm"
            onClick={onExport}
            disabled={isExporting}
            className="flex items-center"
          >
            {isExporting ? (
              <Loader2 className="h-4 w-4 mr-1.5 animate-spin" />
            ) : (
              <Download className="h-4 w-4 mr-1.5" />
            )}
            {isExporting ? "Exporting..." : "Export PDF"}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default ResumeHeader;
