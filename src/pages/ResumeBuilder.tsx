
import { useState, useEffect, useRef } from "react";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Settings, Link as LinkIcon, Pencil, Info, Sparkles, FileDown, ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import { Resume, TemplateStyle, Contact, SkillGroup, Experience, Education, Project, Certificate, Language, Interest, Declaration, Award, Organization, Publication, Course, Reference, CustomSectionItem } from "@/schemas/resume";
import ResumeTemplate from "@/components/resume/templates";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
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
import DeclarationSection from "@/components/resume/DeclarationSection";
import AwardsSection from "@/components/resume/AwardsSection";
import CoursesSection from "@/components/resume/CoursesSection";
import CustomSection from "@/components/resume/CustomSection";

const ResumeBuilder = () => {
  const [activeTab, setActiveTab] = useState("content");
  const [activeSection, setActiveSection] = useState("profile");
  const [isSaving, setIsSaving] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const resumeRef = useRef(null);
  
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
  const [availableSections, setAvailableSections] = useState([
    ...defaultSectionOrder,
    "awards",
    "courses",
    "organizations",
    "publications",
    "references",
    "declaration"
  ]);
  
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
    ],
    awards: [],
    courses: [],
    organizations: [],
    publications: [],
    references: [],
    customSections: {}
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

  const handleProfileChange = (field: keyof Contact, value: string) => {
    setResumeData(prev => ({
      ...prev,
      profile: {
        ...prev.profile,
        [field]: value
      }
    }));
  };

  const handleSkillsChange = (updatedSkills: SkillGroup[]) => {
    setResumeData(prev => ({
      ...prev,
      skills: updatedSkills
    }));
  };

  const handleExperienceChange = (updatedExperiences: Experience[]) => {
    setResumeData(prev => ({
      ...prev,
      experience: updatedExperiences
    }));
  };

  const handleEducationChange = (updatedEducation: Education[]) => {
    setResumeData(prev => ({
      ...prev,
      education: updatedEducation
    }));
  };

  const handleProjectsChange = (updatedProjects: Project[]) => {
    setResumeData(prev => ({
      ...prev,
      projects: updatedProjects
    }));
  };

  const handleCertificatesChange = (updatedCertificates: Certificate[]) => {
    setResumeData(prev => ({
      ...prev,
      certificates: updatedCertificates
    }));
  };

  const handleLanguagesChange = (updatedLanguages: Language[]) => {
    setResumeData(prev => ({
      ...prev,
      languages: updatedLanguages
    }));
  };

  const handleInterestsChange = (updatedInterests: Interest[]) => {
    setResumeData(prev => ({
      ...prev,
      interests: updatedInterests
    }));
  };

  const handleDeclarationChange = (updatedDeclaration: Declaration) => {
    setResumeData(prev => ({
      ...prev,
      declaration: updatedDeclaration
    }));
  };

  const handleAwardsChange = (updatedAwards: Award[]) => {
    setResumeData(prev => ({
      ...prev,
      awards: updatedAwards
    }));
  };

  const handleCoursesChange = (updatedCourses: Course[]) => {
    setResumeData(prev => ({
      ...prev,
      courses: updatedCourses
    }));
  };

  const handleOrganizationsChange = (updatedOrganizations: Organization[]) => {
    setResumeData(prev => ({
      ...prev,
      organizations: updatedOrganizations
    }));
  };

  const handlePublicationsChange = (updatedPublications: Publication[]) => {
    setResumeData(prev => ({
      ...prev,
      publications: updatedPublications
    }));
  };

  const handleReferencesChange = (updatedReferences: Reference[]) => {
    setResumeData(prev => ({
      ...prev,
      references: updatedReferences
    }));
  };

  const handleCustomSectionChange = (sectionName: string, items: CustomSectionItem[]) => {
    // Ensure each item has a title property (required by CustomSectionItem)
    const validatedItems = items.map(item => ({
      ...item,
      title: item.title || "" // Ensure title is always a string (never undefined)
    }));
    
    setResumeData(prev => ({
      ...prev,
      customSections: {
        ...prev.customSections,
        [sectionName]: validatedItems
      }
    }));
  };

  const handleAddCustomSection = (sectionName: string) => {
    const formattedName = sectionName.toLowerCase().replace(/\s+/g, '_');
    
    if (availableSections.includes(formattedName)) {
      toast.error("This section already exists", {
        description: "Please choose a different name for your section"
      });
      return;
    }
    
    const updatedAvailableSections = [...availableSections, formattedName];
    setAvailableSections(updatedAvailableSections);
    
    const updatedSectionOrder = [...sectionOrder, formattedName];
    setSectionOrder(updatedSectionOrder);
    setVisibleSections([...visibleSections, formattedName]);
    
    // Initialize with an empty array of CustomSectionItems with required title
    setResumeData(prev => ({
      ...prev,
      customSections: {
        ...prev.customSections,
        [formattedName]: []
      }
    }));
    
    setActiveSection(formattedName);
    
    toast.success("New section added", {
      description: `Your ${sectionName} section has been added to the resume`
    });
  };

  const handleRemoveSection = (sectionName: string) => {
    const requiredSections = ["profile", "skills", "experience", "education"];
    if (requiredSections.includes(sectionName)) {
      toast.error("Cannot remove required sections", {
        description: "Profile, skills, experience and education are required"
      });
      return;
    }
    
    setAvailableSections(prev => prev.filter(s => s !== sectionName));
    setSectionOrder(prev => prev.filter(s => s !== sectionName));
    setVisibleSections(prev => prev.filter(s => s !== sectionName));
    
    if (sectionName.includes('_') || !["projects", "certificates", "languages", "interests", "awards", "courses", "organizations", "publications", "references", "declaration"].includes(sectionName)) {
      setResumeData(prev => {
        const newCustomSections = { ...prev.customSections };
        delete newCustomSections[sectionName];
        return {
          ...prev,
          customSections: newCustomSections
        };
      });
    }
    
    if (activeSection === sectionName) {
      setActiveSection("profile");
    }
    
    toast.success("Section removed", {
      description: `The ${sectionName} section has been removed from your resume`
    });
  };

  useEffect(() => {
    const saveResumeToLocalStorage = () => {
      localStorage.setItem('resumeData', JSON.stringify(resumeData));
      localStorage.setItem('templateStyle', JSON.stringify(templateStyle));
      localStorage.setItem('sectionOrder', JSON.stringify(sectionOrder));
      localStorage.setItem('visibleSections', JSON.stringify(visibleSections));
      localStorage.setItem('availableSections', JSON.stringify(availableSections));
    };

    const saveTimeout = setTimeout(saveResumeToLocalStorage, 1000);
    
    return () => clearTimeout(saveTimeout);
  }, [resumeData, templateStyle, sectionOrder, visibleSections, availableSections]);

  useEffect(() => {
    const loadSavedData = () => {
      try {
        const savedResumeData = localStorage.getItem('resumeData');
        const savedTemplateStyle = localStorage.getItem('templateStyle');
        const savedSectionOrder = localStorage.getItem('sectionOrder');
        const savedVisibleSections = localStorage.getItem('visibleSections');
        const savedAvailableSections = localStorage.getItem('availableSections');
        
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
        
        if (savedAvailableSections) {
          setAvailableSections(JSON.parse(savedAvailableSections));
        }
      } catch (error) {
        console.error("Failed to load saved resume data:", error);
      }
    };
    
    loadSavedData();
  }, []);

  const handleSaveResume = () => {
    setIsSaving(true);
    
    setTimeout(() => {
      localStorage.setItem('resumeData', JSON.stringify(resumeData));
      localStorage.setItem('templateStyle', JSON.stringify(templateStyle));
      localStorage.setItem('sectionOrder', JSON.stringify(sectionOrder));
      localStorage.setItem('visibleSections', JSON.stringify(visibleSections));
      localStorage.setItem('availableSections', JSON.stringify(availableSections));
      
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
    toast.success("Resume exported as DOCX!", {
      description: "Your resume has been downloaded in DOCX format."
    });
  };

  const handleCreateShareLink = () => {
    const shareId = Math.random().toString(36).substring(2, 10);
    const shareUrl = `${window.location.origin}/shared-resume/${shareId}`;
    
    navigator.clipboard.writeText(shareUrl).then(() => {
      toast.success("Share link created and copied!", {
        description: "Anyone with this link can view your resume."
      });
    });
  };

  const toggleInstructions = () => {
    setShowInstructions(prev => !prev);
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case "profile":
        return (
          <ProfileSection 
            profile={resumeData.profile}
            onChange={handleProfileChange}
          />
        );
      case "skills":
        return (
          <SkillsSection
            skills={resumeData.skills}
            onChange={handleSkillsChange}
          />
        );
      case "experience":
        return (
          <ExperienceSection
            experiences={resumeData.experience}
            onChange={handleExperienceChange}
          />
        );
      case "education":
        return (
          <EducationSection
            education={resumeData.education}
            onChange={handleEducationChange}
          />
        );
      case "projects":
        return (
          <ProjectsSection
            projects={resumeData.projects}
            onChange={handleProjectsChange}
          />
        );
      case "certificates":
        return (
          <CertificatesSection
            certificates={resumeData.certificates}
            onChange={handleCertificatesChange}
          />
        );
      case "languages":
        return (
          <LanguagesSection
            languages={resumeData.languages || []}
            onChange={handleLanguagesChange}
          />
        );
      case "interests":
        return (
          <InterestsSection
            interests={resumeData.interests || []}
            onChange={handleInterestsChange}
          />
        );
      case "awards":
        return (
          <AwardsSection
            awards={resumeData.awards || []}
            onChange={handleAwardsChange}
          />
        );
      case "courses":
        return (
          <CoursesSection
            courses={resumeData.courses || []}
            onChange={handleCoursesChange}
          />
        );
      case "declaration":
        return (
          <DeclarationSection
            declaration={resumeData.declaration}
            onChange={handleDeclarationChange}
          />
        );
      case "sections":
        return (
          <SectionReorder
            sections={sectionOrder}
            visibleSections={visibleSections}
            onReorder={setSectionOrder}
            onVisibilityChange={setVisibleSections}
          />
        );
      default:
        if (resumeData.customSections && resumeData.customSections[activeSection]) {
          return (
            <CustomSection
              sectionName={activeSection}
              items={resumeData.customSections[activeSection]}
              onChange={(items) => handleCustomSectionChange(activeSection, items)}
            />
          );
        }
        return null;
    }
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
              <div className="h-full overflow-y-auto p-6 relative">
                <AnimatePresence>
                  {showInstructions && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6 text-sm"
                    >
                      <div className="flex items-start gap-3">
                        <Sparkles className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-blue-700">Resume Building Tips</h3>
                          {activeSection === "profile" && (
                            <p className="text-blue-600 mt-1">Use a professional summary that highlights your key strengths and career goals in 2-3 sentences.</p>
                          )}
                          {activeSection === "skills" && (
                            <p className="text-blue-600 mt-1">Group similar skills and prioritize those most relevant to the job you're applying for.</p>
                          )}
                          {activeSection === "experience" && (
                            <p className="text-blue-600 mt-1">Use action verbs and quantify achievements with numbers when possible (e.g., "Increased sales by 20%").</p>
                          )}
                          {activeSection === "education" && (
                            <p className="text-blue-600 mt-1">List your most recent education first, and include relevant coursework or academic achievements.</p>
                          )}
                          {activeSection === "projects" && (
                            <p className="text-blue-600 mt-1">Highlight projects that demonstrate your skills and are relevant to your target position.</p>
                          )}
                          {activeSection === "certificates" && (
                            <p className="text-blue-600 mt-1">Include the date of certification and any expiration dates if applicable.</p>
                          )}
                          {activeSection === "languages" && (
                            <p className="text-blue-600 mt-1">Be honest about your proficiency level for each language you list.</p>
                          )}
                          {activeSection === "interests" && (
                            <p className="text-blue-600 mt-1">Include interests that demonstrate valuable soft skills or align with company culture.</p>
                          )}
                          {activeSection === "awards" && (
                            <p className="text-blue-600 mt-1">Showcase awards that highlight your achievements and recognition in your field.</p>
                          )}
                          {activeSection === "courses" && (
                            <p className="text-blue-600 mt-1">List relevant courses that have enhanced your skills or knowledge in your profession.</p>
                          )}
                          {activeSection === "declaration" && (
                            <p className="text-blue-600 mt-1">Keep your declaration concise and professional, typically stating the information provided is accurate.</p>
                          )}
                          {activeSection === "sections" && (
                            <p className="text-blue-600 mt-1">Arrange sections in order of relevance to the position you're applying for.</p>
                          )}
                          {resumeData.customSections && resumeData.customSections[activeSection] && (
                            <p className="text-blue-600 mt-1">Customize this section to highlight additional qualifications relevant to your target job.</p>
                          )}
                        </div>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-5 w-5 text-blue-500" 
                          onClick={toggleInstructions}
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {renderSectionContent()}

                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const currentIndex = sectionOrder.indexOf(activeSection);
                      if (currentIndex > 0) {
                        setActiveSection(sectionOrder[currentIndex - 1]);
                      }
                    }}
                    disabled={sectionOrder.indexOf(activeSection) === 0 || activeSection === "sections"}
                    className="flex items-center gap-1"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous Section
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const currentIndex = sectionOrder.indexOf(activeSection);
                      if (currentIndex < sectionOrder.length - 1) {
                        setActiveSection(sectionOrder[currentIndex + 1]);
                      }
                    }}
                    disabled={sectionOrder.indexOf(activeSection) === sectionOrder.length - 1 || activeSection === "sections"}
                    className="flex items-center gap-1"
                  >
                    Next Section
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </ResizablePanel>
            
            <ResizableHandle withHandle />
            
            <ResizablePanel defaultSize={55}>
              <div className="h-full overflow-auto bg-muted p-6 flex flex-col items-center">
                <div className="flex justify-between w-full mb-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs flex items-center gap-1"
                    onClick={handleDownloadResume}
                    disabled={isExporting}
                  >
                    <FileDown className="h-3.5 w-3.5" />
                    {isExporting ? "Generating..." : "Download PDF"}
                  </Button>
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
                    Created with ResumeBuilder
                  </div>
                </motion.div>

                <div className="mt-4 text-xs text-center text-muted-foreground">
                  <p>Your resume is automatically saved as you type</p>
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
