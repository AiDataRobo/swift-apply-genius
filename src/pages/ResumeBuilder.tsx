
import React, { useState, useEffect } from 'react';
import { useResumeContext } from '@/contexts/ResumeContext';
import ResumeHeader from '@/components/resume/ResumeHeader';
import ContentSidebar from '@/components/resume/ContentSidebar';
import DesignSidebar from '@/components/resume/DesignSidebar';
import ExportSidebar from '@/components/resume/ExportSidebar';
import ResumePreview from '@/components/resume/ResumePreview';

// Define sections
const resumeSections = [
  'Profile',
  'Experience',
  'Education',
  'Skills',
  'Projects',
  'Certifications',
  'Languages',
  'Interests'
];

const ResumeBuilder = () => {
  // Use the resume context
  const { dispatch, template, setTemplate } = useResumeContext();
  
  // State for active tab and section
  const [activeTab, setActiveTab] = useState('content');
  const [activeSection, setActiveSection] = useState('Profile');
  const [isExporting, setIsExporting] = useState(false);
  
  // Template style state
  const [templateStyle, setTemplateStyle] = useState({
    fontFamily: 'Inter',
    fontSize: 'medium',
    lineHeight: 'normal',
    color: '#333333',
    backgroundColor: '#ffffff',
    spacing: 'normal',
    margins: 'normal'
  });
  
  // Handle template change
  const handleTemplateChange = () => {
    // Open template selection modal or change view
    console.log('Change template requested');
  };
  
  // Handle downloading as PDF
  const handleDownloadPdf = async () => {
    setIsExporting(true);
    try {
      // PDF export logic would go here
      console.log('Exporting as PDF');
      // Simulating export delay
      await new Promise(resolve => setTimeout(resolve, 1500));
    } catch (error) {
      console.error('Error exporting PDF:', error);
    } finally {
      setIsExporting(false);
    }
  };
  
  // Handle exporting as DOCX
  const handleExportDocx = async () => {
    setIsExporting(true);
    try {
      // DOCX export logic would go here
      console.log('Exporting as DOCX');
      // Simulating export delay
      await new Promise(resolve => setTimeout(resolve, 1500));
    } catch (error) {
      console.error('Error exporting DOCX:', error);
    } finally {
      setIsExporting(false);
    }
  };
  
  // Handle creating share link
  const handleCreateShareLink = () => {
    console.log('Creating share link');
    // Share link creation logic would go here
  };
  
  return (
    <div className="flex flex-col h-screen">
      <ResumeHeader 
        activeTab={activeTab} 
        onChangeTemplate={handleTemplateChange} 
      />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar based on active tab */}
        <div className="w-64 h-full">
          {activeTab === 'content' && (
            <ContentSidebar 
              activeSection={activeSection}
              onSectionChange={setActiveSection}
              availableSections={resumeSections}
            />
          )}
          
          {activeTab === 'design' && (
            <DesignSidebar 
              templateStyle={templateStyle}
              onStyleChange={setTemplateStyle}
            />
          )}
          
          {activeTab === 'export' && (
            <ExportSidebar 
              isExporting={isExporting}
              onDownloadPdf={handleDownloadPdf}
              onExportDocx={handleExportDocx}
              onCreateShareLink={handleCreateShareLink}
            />
          )}
        </div>
        
        {/* Resume preview */}
        <div className="flex-1 overflow-auto bg-gray-100 p-8">
          <ResumePreview 
            template={template || 'modern'}
            style={templateStyle}
          />
        </div>
      </div>
      
      {/* Tab navigation */}
      <div className="border-t p-2 flex justify-center space-x-4">
        <button 
          className={`px-4 py-2 rounded ${activeTab === 'content' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}
          onClick={() => setActiveTab('content')}
        >
          Content
        </button>
        <button 
          className={`px-4 py-2 rounded ${activeTab === 'design' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}
          onClick={() => setActiveTab('design')}
        >
          Design
        </button>
        <button 
          className={`px-4 py-2 rounded ${activeTab === 'export' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}
          onClick={() => setActiveTab('export')}
        >
          Export
        </button>
      </div>
    </div>
  );
};

export default ResumeBuilder;
