
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ContentSidebar from '@/components/resume/ContentSidebar';
import DesignSidebar from '@/components/resume/DesignSidebar';
import ExportSidebar from '@/components/resume/ExportSidebar';
import ResumePreview from '@/components/resume/ResumePreview';
import ResumeHeader from '@/components/resume/ResumeHeader';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useResumeContext } from '@/contexts/ResumeContext';
import { useNavigate } from 'react-router-dom';

// Template types
type TemplateType = 'modern' | 'minimal' | 'professional' | 'creative' | 'technical' | 'executive' | 'ats';

interface Template {
  id: string;
  name: string;
  type: TemplateType;
  image: string;
}

const templates: Template[] = [
  {
    id: 'modern-1',
    name: 'Modern Clean',
    type: 'modern',
    image: '/placeholder.svg'
  },
  {
    id: 'minimal-1',
    name: 'Minimal Classic',
    type: 'minimal',
    image: '/placeholder.svg'
  },
  {
    id: 'professional-1',
    name: 'Professional Bold',
    type: 'professional',
    image: '/placeholder.svg'
  },
  {
    id: 'creative-1',
    name: 'Creative Portfolio',
    type: 'creative',
    image: '/placeholder.svg'
  },
  {
    id: 'technical-1',
    name: 'Technical Specs',
    type: 'technical',
    image: '/placeholder.svg'
  }
];

const ResumeBuilder = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { resumeState, dispatch } = useResumeContext();
  const [activeTab, setActiveTab] = useState<string>('content');
  const [isChangeTemplateDialogOpen, setIsChangeTemplateDialogOpen] = useState<boolean>(false);
  
  // Get template from URL or use default
  useEffect(() => {
    const templateId = searchParams.get('template');
    if (templateId) {
      const template = templates.find(t => t.id === templateId);
      if (template) {
        dispatch({ 
          type: 'SET_TEMPLATE', 
          payload: template.type as TemplateType
        });
      }
    }
  }, [searchParams, dispatch]);

  const handleChangeTemplate = (templateId: string) => {
    const template = templates.find(t => t.id === templateId);
    if (template) {
      dispatch({ 
        type: 'SET_TEMPLATE', 
        payload: template.type as TemplateType
      });
      setIsChangeTemplateDialogOpen(false);
    }
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <ResumeHeader 
        activeTab={activeTab}
        onChangeTemplate={() => setIsChangeTemplateDialogOpen(true)}
      />
      
      <div className="flex flex-1 overflow-hidden">
        <div className="bg-background border-r w-80 flex-shrink-0 flex flex-col overflow-hidden">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
            <div className="border-b p-2">
              <TabsList className="w-full">
                <TabsTrigger value="content" className="flex-1">Content</TabsTrigger>
                <TabsTrigger value="design" className="flex-1">Design</TabsTrigger>
                <TabsTrigger value="export" className="flex-1">Export</TabsTrigger>
              </TabsList>
            </div>
            
            <div className="flex-1 overflow-auto">
              <TabsContent value="content" className="p-0 m-0 h-full">
                <ContentSidebar />
              </TabsContent>
              
              <TabsContent value="design" className="p-0 m-0 h-full">
                <DesignSidebar />
              </TabsContent>
              
              <TabsContent value="export" className="p-0 m-0 h-full">
                <ExportSidebar />
              </TabsContent>
            </div>
          </Tabs>
        </div>
        
        <div className="flex-1 overflow-auto bg-muted/20 flex items-center justify-center p-6">
          <ResumePreview />
        </div>
      </div>
      
      {/* Template Change Dialog */}
      <Dialog open={isChangeTemplateDialogOpen} onOpenChange={setIsChangeTemplateDialogOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Change Template</DialogTitle>
            <DialogDescription>
              Choose from our professionally designed templates. Your content will remain the same.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {templates.map((template) => (
              <div 
                key={template.id}
                className={`border rounded-lg overflow-hidden hover:shadow-md transition-all cursor-pointer ${
                  resumeState.design.template === template.type ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => handleChangeTemplate(template.id)}
              >
                <div className="aspect-[4/5] bg-muted">
                  <img 
                    src={template.image} 
                    alt={template.name}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-sm">{template.name}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-end mt-4">
            <Button variant="outline" onClick={() => setIsChangeTemplateDialogOpen(false)}>
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ResumeBuilder;
