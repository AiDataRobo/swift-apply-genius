
import React from "react";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info, Pencil, Settings, Link as LinkIcon } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { ResumeProvider, useResumeContext } from "@/contexts/ResumeContext";
import ResumeHeader from "@/components/resume/ResumeHeader";
import ContentSidebar from "@/components/resume/ContentSidebar";
import DesignSidebar from "@/components/resume/DesignSidebar";
import ExportSidebar from "@/components/resume/ExportSidebar";
import SectionContent from "@/components/resume/SectionContent";
import ResumePreview from "@/components/resume/ResumePreview";

const ResumeBuilderContent: React.FC = () => {
  const { 
    activeTab, 
    setActiveTab, 
    activeSection, 
    setActiveSection, 
    availableSections, 
    toggleInstructions, 
    showInstructions,
    handleSaveResume, 
    handleDownloadResume, 
    handleExportDocx,
    handleCreateShareLink,
    handleAddCustomSection,
    handleRemoveSection,
    templateStyle,
    setTemplateStyle,
    isSaving,
    isExporting
  } = useResumeContext();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ResumeHeader 
        isSaving={isSaving}
        isExporting={isExporting}
        onSave={handleSaveResume}
        onExport={handleDownloadResume}
      />

      <main className="flex-1 flex overflow-hidden">
        <div className="w-[220px] border-r bg-card p-3 flex flex-col shadow-sm">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 w-full mb-4">
              <TabsTrigger value="content" className="text-xs px-2 py-1">
                <Pencil className="h-3.5 w-3.5 mr-1" />
                Content
              </TabsTrigger>
              <TabsTrigger value="customize" className="text-xs px-2 py-1">
                <Settings className="h-3.5 w-3.5 mr-1" />
                Design
              </TabsTrigger>
              <TabsTrigger value="share" className="text-xs px-2 py-1">
                <LinkIcon className="h-3.5 w-3.5 mr-1" />
                Export
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex-1 overflow-y-auto">
            {activeTab === "content" && (
              <ContentSidebar 
                activeSection={activeSection}
                onSectionChange={setActiveSection}
                availableSections={availableSections}
                onAddCustomSection={handleAddCustomSection}
                onRemoveSection={handleRemoveSection}
              />
            )}

            {activeTab === "customize" && (
              <DesignSidebar 
                templateStyle={templateStyle}
                onStyleChange={setTemplateStyle}
              />
            )}

            {activeTab === "share" && (
              <ExportSidebar 
                isExporting={isExporting}
                onDownloadPdf={handleDownloadResume}
                onExportDocx={handleExportDocx}
                onCreateShareLink={handleCreateShareLink}
              />
            )}
          </div>

          <div className="pt-4 mt-2 border-t">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full flex items-center justify-center gap-2 text-xs"
                    onClick={toggleInstructions}
                  >
                    <Info className="h-3.5 w-3.5" />
                    {showInstructions ? "Hide Tips" : "Show Tips"}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  {showInstructions ? "Hide resume building tips" : "Show helpful tips for building your resume"}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden">
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={45} minSize={30}>
              <SectionContent />
            </ResizablePanel>
            
            <ResizableHandle withHandle />
            
            <ResizablePanel defaultSize={55}>
              <ResumePreview />
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </main>
    </div>
  );
};

const ResumeBuilder: React.FC = () => {
  return (
    <ResumeProvider>
      <ResumeBuilderContent />
    </ResumeProvider>
  );
};

export default ResumeBuilder;
