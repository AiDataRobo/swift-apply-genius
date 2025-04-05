
import React from "react";
import { Link } from "react-router-dom";
import { useResumeContext } from "@/contexts/ResumeContext";
import ResumeTemplate from "@/components/resume/templates";
import { Button } from "@/components/ui/button";
import { FileDown, Palette, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const ResumePreview: React.FC = () => {
  const { 
    resumeData, 
    templateStyle, 
    visibleSections, 
    sectionOrder, 
    resumeRef, 
    isExporting, 
    handleDownloadResume 
  } = useResumeContext();

  return (
    <div className="h-full overflow-auto bg-muted p-6 flex flex-col items-center">
      <div className="flex justify-between w-full mb-3">
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="text-xs flex items-center gap-1"
            onClick={handleDownloadResume}
            disabled={isExporting}
          >
            {isExporting ? (
              <>
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <FileDown className="h-3.5 w-3.5" />
                Download PDF
              </>
            )}
          </Button>
          
          <Link to="/templates">
            <Button
              variant="ghost"
              size="sm"
              className="text-xs flex items-center gap-1"
            >
              <Palette className="h-3.5 w-3.5" />
              Change Template
            </Button>
          </Link>
        </div>
        
        <div className="text-xs text-muted-foreground flex items-center">
          Preview: A4 size
        </div>
      </div>
      
      <motion.div 
        ref={resumeRef} 
        className="bg-white shadow-lg h-[842px] w-[595px] overflow-hidden relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ResumeTemplate 
          resumeData={resumeData} 
          templateStyle={templateStyle}
          visibleSections={visibleSections}
          sectionOrder={sectionOrder}
        />
        
        <div className="absolute bottom-3 right-3 text-[9px] text-gray-400 opacity-70">
          Created with EnhanceResume
        </div>
      </motion.div>

      <div className="mt-4 text-xs text-center text-muted-foreground">
        <p className="flex items-center justify-center gap-1">
          <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Your resume is automatically saved as you type
        </p>
      </div>
    </div>
  );
};

export default ResumePreview;
