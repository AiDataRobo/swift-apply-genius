
import React, { useState, useEffect } from 'react';
import { useResumeContext } from '@/contexts/ResumeContext';
import ResumeHeader from '@/components/resume/ResumeHeader';
import ContentSidebar from '@/components/resume/ContentSidebar';
import DesignSidebar from '@/components/resume/DesignSidebar';
import ExportSidebar from '@/components/resume/ExportSidebar';
import ResumePreview from '@/components/resume/ResumePreview';
import SectionContent from '@/components/resume/SectionContent';

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
  const { 
    resumeState, 
    dispatch, 
    template, 
    setTemplate,
    templateStyle,
    sectionOrder,
    activeSection,
    setActiveSection,
    isExporting,
    handleDownloadResume
  } = useResumeContext();
  
  // State for active tab
  const [activeTab, setActiveTab] = useState('content');
  
  // Handle template change
  const handleTemplateChange = () => {
    // Open template selection modal or change view
    console.log('Change template requested');
  };
  
  // Handle exporting as DOCX
  const handleExportDocx = async () => {
    try {
      // DOCX export logic would go here
      console.log('Exporting as DOCX');
      // Simulating export delay
      await new Promise(resolve => setTimeout(resolve, 1500));
    } catch (error) {
      console.error('Error exporting DOCX:', error);
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
              onStyleChange={(style) => console.log('Style changed:', style)}
            />
          )}
          
          {activeTab === 'export' && (
            <ExportSidebar 
              isExporting={isExporting}
              onDownloadPdf={handleDownloadResume}
              onExportDocx={handleExportDocx}
              onCreateShareLink={handleCreateShareLink}
            />
          )}
        </div>
        
        {/* Resume content area */}
        <div className="flex-1 overflow-auto bg-gray-100">
          <ResumePreview />
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
