
import React, { useState, useEffect } from 'react';
import { useResumeContext } from '@/contexts/ResumeContext';
import ResumeHeader from '@/components/resume/ResumeHeader';
import ContentSidebar from '@/components/resume/ContentSidebar';
import DesignSidebar from '@/components/resume/DesignSidebar';
import ExportSidebar from '@/components/resume/ExportSidebar';
import ResumePreview from '@/components/resume/ResumePreview';
import SectionContent from '@/components/resume/SectionContent';
import { motion } from 'framer-motion';

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
    <motion.div 
      className="flex flex-col h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ResumeHeader 
        onChangeTemplate={handleTemplateChange} 
      />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar based on active tab */}
        <div className="w-64 h-full border-r">
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
        
        {/* Main content area - split between section content and preview */}
        <div className="flex-1 flex">
          {/* Section content editing area - only visible when content tab is active */}
          {activeTab === 'content' && (
            <div className="w-1/2 border-r">
              <SectionContent />
            </div>
          )}
          
          {/* Resume preview area - always visible */}
          <div className={`${activeTab === 'content' ? 'w-1/2' : 'w-full'} overflow-auto bg-gray-100`}>
            <ResumePreview />
          </div>
        </div>
      </div>
      
      {/* Tab navigation */}
      <div className="border-t p-2 flex justify-center space-x-4 bg-background">
        <button 
          className={`px-4 py-2 rounded flex items-center gap-2 ${activeTab === 'content' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}
          onClick={() => setActiveTab('content')}
        >
          <span className="material-icons text-sm">edit</span>
          Content
        </button>
        <button 
          className={`px-4 py-2 rounded flex items-center gap-2 ${activeTab === 'design' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}
          onClick={() => setActiveTab('design')}
        >
          <span className="material-icons text-sm">palette</span>
          Design
        </button>
        <button 
          className={`px-4 py-2 rounded flex items-center gap-2 ${activeTab === 'export' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}
          onClick={() => setActiveTab('export')}
        >
          <span className="material-icons text-sm">download</span>
          Export
        </button>
      </div>
    </motion.div>
  );
};

export default ResumeBuilder;
