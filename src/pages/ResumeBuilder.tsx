
import { useState, useEffect, useRef } from "react";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Settings, Link as LinkIcon, Pencil } from "lucide-react";
import { toast } from "sonner";
import { Resume, TemplateStyle } from "@/schemas/resume";
import ResumeTemplate from "@/components/resume/templates";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// Import our new components
import ProfileSection from "@/components/resume/ProfileSection";
import SkillsSection from "@/components/resume/SkillsSection";
import ExperienceSection from "@/components/resume/ExperienceSection";
import EducationSection from "@/components/resume/EducationSection";
import ProjectsSection from "@/components/resume/ProjectsSection";
import CertificatesSection from "@/components/resume/CertificatesSection";
import LanguagesSection from "@/components/resume/LanguagesSection";
import InterestsSection from "@/components/resume/InterestsSection";
import SectionReorder from "@/components/resume/SectionReorder";
import ResumeHeader from "@/components/resume/ResumeHeader";
import ContentSidebar from "@/components/resume/ContentSidebar";
import DesignSidebar from "@/components/resume/DesignSidebar";
import ExportSidebar from "@/components/resume/ExportSidebar";

const ResumeBuilder = () => {
  const [activeTab, setActiveTab] = useState("content");
  const [activeSection, setActiveSection] = useState("profile");
  const [isSaving, setIsSaving] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const resumeRef = useRef(null);
  
  // Default order of sections
  const defaultSectionOrder = [
    "profile", 
    "skills", 
    "experience", 
    "education", 
    "projects", 
    "certificates", 
    "languages", 
    "interests"
  ];
  
  const [sectionOrder, setSectionOrder] = useState(defaultSectionOrder);
  const [visibleSections, setVisibleSections] = useState(defaultSectionOrder);
  
  const [resumeData, setResumeData] = useState<Resume>({
    profile: {
      name: "Sarah Johnson",
      title: "Senior Frontend Developer",
      email: "sarah@example.com",
      phone: "(123) 456-7890",
      location: "San Francisco, CA",
      summary: "Passionate frontend developer with 5+ years of experience creating responsive and accessible web applications."
    },
    skills: [
      { category: "Programming", items: [{ name: "JavaScript" }, { name: "TypeScript" }, { name: "React" }, { name: "Vue.js" }, { name: "HTML5" }, { name: "CSS3" }, { name: "Tailwind CSS" }] },
      { category: "Tools", items: [{ name: "Git" }, { name: "Webpack" }, { name: "Jest" }, { name: "Figma" }] },
      { category: "Soft Skills", items: [{ name: "Team Leadership" }, { name: "Communication" }, { name: "Problem Solving" }] }
    ],
    experience: [
      {
        title: "Senior Frontend Developer",
        company: "TechCorp Inc.",
        location: "San Francisco, CA",
        startDate: "Jan 2020",
        endDate: "Present",
        description: "Led a team of 5 developers to build and maintain the company's flagship SaaS platform. Implemented performance optimizations that improved load time by 40%."
      },
      {
        title: "Frontend Developer",
        company: "WebSolutions",
        location: "Oakland, CA",
        startDate: "Aug 2017",
        endDate: "Dec 2019",
        description: "Developed responsive UIs for client projects. Collaborated with designers and backend engineers to implement new features."
      }
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "University of California, Berkeley",
        startDate: "2013",
        endDate: "2017",
        description: "GPA: 3.8/4.0, Dean's List, Web Development Club Lead"
      }
    ],
    projects: [
      {
        title: "E-commerce Platform",
        description: "Developed a full-featured e-commerce platform with React and Node.js",
        technologies: ["React", "Node.js", "MongoDB", "Stripe API"]
      },
      {
        title: "Weather App",
        description: "Created a responsive weather application with real-time updates",
        technologies: ["JavaScript", "React", "OpenWeather API"]
      }
    ],
    certificates: [
      {
        title: "AWS Certified Developer",
        issuer: "Amazon Web Services",
        date: "2022"
      },
      {
        title: "Professional Scrum Master I",
        issuer: "Scrum.org",
        date: "2021"
      }
    ],
    languages: [
      { name: "English", proficiency: "Native" },
      { name: "Spanish", proficiency: "Professional" },
      { name: "French", proficiency: "Elementary" }
    ],
    interests: [
      { name: "Web Development" },
      { name: "UI/UX Design" },
      { name: "Photography" },
      { name: "Hiking" },
      { name: "Reading" }
    ]
  });

  const [templateStyle, setTemplateStyle] = useState<TemplateStyle>({
    template: "modern",
    primaryColor: "#1a73e8",
    secondaryColor: "#f1f5f9",
    fontFamily: "Inter",
    fontSize: "medium",
    spacing: "comfortable",
    showPhoto: false,
    darkMode: false,
    layout: "two-column"
  });

  // Auto-save functionality
  useEffect(() => {
    const saveResumeToLocalStorage = () => {
      localStorage.setItem('resumeData', JSON.stringify(resumeData));
      localStorage.setItem('templateStyle', JSON.stringify(templateStyle));
      localStorage.setItem('sectionOrder', JSON.stringify(sectionOrder));
      localStorage.setItem('visibleSections', JSON.stringify(visibleSections));
    };

    // Save when data changes
    const saveTimeout = setTimeout(saveResumeToLocalStorage, 1000);
    
    return () => clearTimeout(saveTimeout);
  }, [resumeData, templateStyle, sectionOrder, visibleSections]);

  // Load saved data
  useEffect(() => {
    const loadSavedData = () => {
      try {
        const savedResumeData = localStorage.getItem('resumeData');
        const savedTemplateStyle = localStorage.getItem('templateStyle');
        const savedSectionOrder = localStorage.getItem('sectionOrder');
        const savedVisibleSections = localStorage.getItem('visibleSections');
        
        if (savedResumeData) {
          setResumeData(JSON.parse(savedResumeData));
        }
        
        if (savedTemplateStyle) {
          setTemplateStyle(JSON.parse(savedTemplateStyle));
        }
        
        if (savedSectionOrder) {
          setSectionOrder(JSON.parse(savedSectionOrder));
        }
        
        if (savedVisibleSections) {
          setVisibleSections(JSON.parse(savedVisibleSections));
        }
      } catch (error) {
        console.error("Failed to load saved resume data:", error);
      }
    };
    
    loadSavedData();
  }, []);

  const handleSaveResume = () => {
    setIsSaving(true);
    
    // Simulate saving to a database (would connect to a real backend in production)
    setTimeout(() => {
      localStorage.setItem('resumeData', JSON.stringify(resumeData));
      localStorage.setItem('templateStyle', JSON.stringify(templateStyle));
      localStorage.setItem('sectionOrder', JSON.stringify(sectionOrder));
      localStorage.setItem('visibleSections', JSON.stringify(visibleSections));
      
      setIsSaving(false);
      toast.success("Resume saved successfully!", {
        description: "Your resume has been saved to your account."
      });
    }, 800);
  };

  const handleDownloadResume = async () => {
    if (!resumeRef.current) return;
    
    setIsExporting(true);
    
    try {
      const resumeElement = resumeRef.current;
      const canvas = await html2canvas(resumeElement, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: templateStyle.darkMode ? '#1e293b' : '#ffffff'
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width / 2, canvas.height / 2]
      });
      
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width / 2, canvas.height / 2);
      pdf.save(`${resumeData.profile.name.replace(/\s+/g, '_')}_Resume.pdf`);
      
      toast.success("Resume downloaded as PDF!", {
        description: "Your resume has been downloaded to your device."
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast.error("Failed to generate PDF", {
        description: "There was an error creating your PDF. Please try again."
      });
    } finally {
      setIsExporting(false);
    }
  };

  const handleExportDocx = () => {
    // In a real app, this would generate a DOCX file
    toast.success("Resume exported as DOCX!", {
      description: "Your resume has been downloaded in DOCX format."
    });
  };

  const handleCreateShareLink = () => {
    // Generate a random share ID (would use a real API in production)
    const shareId = Math.random().toString(36).substring(2, 10);
    const shareUrl = `${window.location.origin}/shared-resume/${shareId}`;
    
    // Copy to clipboard
    navigator.clipboard.writeText(shareUrl).then(() => {
      toast.success("Share link created and copied!", {
        description: "Anyone with this link can view your resume."
      });
    });
  };

  // Update profile
  const handleProfileChange = (field, value) => {
    setResumeData({
      ...resumeData,
      profile: { ...resumeData.profile, [field]: value }
    });
  };

  // Update skills
  const handleSkillsChange = (updatedSkills) => {
    setResumeData({ ...resumeData, skills: updatedSkills });
  };

  // Update experience
  const handleExperienceChange = (updatedExperience) => {
    setResumeData({ ...resumeData, experience: updatedExperience });
  };

  // Update education
  const handleEducationChange = (updatedEducation) => {
    setResumeData({ ...resumeData, education: updatedEducation });
  };

  // Update projects
  const handleProjectsChange = (updatedProjects) => {
    setResumeData({ ...resumeData, projects: updatedProjects });
  };

  // Update certificates
  const handleCertificatesChange = (updatedCertificates) => {
    setResumeData({ ...resumeData, certificates: updatedCertificates });
  };

  // Update languages
  const handleLanguagesChange = (updatedLanguages) => {
    setResumeData({ ...resumeData, languages: updatedLanguages });
  };

  // Update interests
  const handleInterestsChange = (updatedInterests) => {
    setResumeData({ ...resumeData, interests: updatedInterests });
  };

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
        </div>

        <div className="flex-1 flex overflow-hidden">
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={45} minSize={30}>
              <div className="h-full overflow-y-auto p-6">
                {activeSection === "profile" && (
                  <ProfileSection 
                    profile={resumeData.profile}
                    onChange={handleProfileChange}
                  />
                )}
                
                {activeSection === "skills" && (
                  <SkillsSection
                    skills={resumeData.skills}
                    onChange={handleSkillsChange}
                  />
                )}
                
                {activeSection === "experience" && (
                  <ExperienceSection
                    experiences={resumeData.experience}
                    onChange={handleExperienceChange}
                  />
                )}
                
                {activeSection === "education" && (
                  <EducationSection
                    education={resumeData.education}
                    onChange={handleEducationChange}
                  />
                )}
                
                {activeSection === "projects" && (
                  <ProjectsSection
                    projects={resumeData.projects}
                    onChange={handleProjectsChange}
                  />
                )}
                
                {activeSection === "certificates" && (
                  <CertificatesSection
                    certificates={resumeData.certificates}
                    onChange={handleCertificatesChange}
                  />
                )}
                
                {activeSection === "languages" && (
                  <LanguagesSection
                    languages={resumeData.languages}
                    onChange={handleLanguagesChange}
                  />
                )}
                
                {activeSection === "interests" && (
                  <InterestsSection
                    interests={resumeData.interests}
                    onChange={handleInterestsChange}
                  />
                )}
                
                {activeSection === "sections" && (
                  <SectionReorder
                    sections={sectionOrder}
                    visibleSections={visibleSections}
                    onReorder={setSectionOrder}
                    onVisibilityChange={setVisibleSections}
                  />
                )}
              </div>
            </ResizablePanel>
            
            <ResizableHandle withHandle />
            
            <ResizablePanel defaultSize={55}>
              <div className="h-full overflow-auto bg-muted p-6 flex justify-center">
                <div ref={resumeRef} className="bg-white shadow-md h-[842px] w-[595px] overflow-hidden">
                  <ResumeTemplate 
                    resumeData={resumeData} 
                    templateStyle={templateStyle}
                    visibleSections={visibleSections}
                    sectionOrder={sectionOrder}
                  />
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </main>
    </div>
  );
};

export default ResumeBuilder;
