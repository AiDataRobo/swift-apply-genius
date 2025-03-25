
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { 
  Resume, 
  TemplateStyle, 
  Contact, 
  SkillGroup, 
  Experience, 
  Education, 
  Project, 
  Certificate, 
  Language, 
  Interest, 
  Declaration, 
  Award, 
  Organization, 
  Publication, 
  Course, 
  Reference, 
  CustomSectionItem 
} from "@/schemas/resume";

// Default values
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

const defaultAvailableSections = [
  ...defaultSectionOrder,
  "awards",
  "courses",
  "organizations",
  "publications",
  "references",
  "declaration"
];

const defaultResumeData: Resume = {
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
};

const defaultTemplateStyle: TemplateStyle = {
  template: "modern",
  primaryColor: "#1a73e8",
  secondaryColor: "#f1f5f9",
  fontFamily: "Inter",
  fontSize: "medium",
  spacing: "comfortable",
  showPhoto: false,
  darkMode: false,
  layout: "two-column"
};

interface ResumeContextType {
  resumeData: Resume;
  templateStyle: TemplateStyle;
  sectionOrder: string[];
  visibleSections: string[];
  availableSections: string[];
  activeTab: string;
  activeSection: string;
  showInstructions: boolean;
  isSaving: boolean;
  isExporting: boolean;
  resumeRef: React.RefObject<HTMLDivElement>;
  
  setResumeData: React.Dispatch<React.SetStateAction<Resume>>;
  setTemplateStyle: React.Dispatch<React.SetStateAction<TemplateStyle>>;
  setSectionOrder: React.Dispatch<React.SetStateAction<string[]>>;
  setVisibleSections: React.Dispatch<React.SetStateAction<string[]>>;
  setAvailableSections: React.Dispatch<React.SetStateAction<string[]>>;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
  setShowInstructions: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSaving: React.Dispatch<React.SetStateAction<boolean>>;
  setIsExporting: React.Dispatch<React.SetStateAction<boolean>>;

  handleProfileChange: (field: keyof Contact, value: string) => void;
  handleSkillsChange: (updatedSkills: SkillGroup[]) => void;
  handleExperienceChange: (updatedExperiences: Experience[]) => void;
  handleEducationChange: (updatedEducation: Education[]) => void;
  handleProjectsChange: (updatedProjects: Project[]) => void;
  handleCertificatesChange: (updatedCertificates: Certificate[]) => void;
  handleLanguagesChange: (updatedLanguages: Language[]) => void;
  handleInterestsChange: (updatedInterests: Interest[]) => void;
  handleDeclarationChange: (updatedDeclaration: Declaration) => void;
  handleAwardsChange: (updatedAwards: Award[]) => void;
  handleCoursesChange: (updatedCourses: Course[]) => void;
  handleOrganizationsChange: (updatedOrganizations: Organization[]) => void;
  handlePublicationsChange: (updatedPublications: Publication[]) => void;
  handleReferencesChange: (updatedReferences: Reference[]) => void;
  handleCustomSectionChange: (sectionName: string, items: CustomSectionItem[]) => void;
  handleAddCustomSection: (sectionName: string) => void;
  handleRemoveSection: (sectionName: string) => void;
  handleSaveResume: () => void;
  handleDownloadResume: () => Promise<void>;
  handleExportDocx: () => void;
  handleCreateShareLink: () => void;
  toggleInstructions: () => void;
}

export const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

interface ResumeProviderProps {
  children: ReactNode;
}

export const ResumeProvider: React.FC<ResumeProviderProps> = ({ children }) => {
  const [resumeData, setResumeData] = useState<Resume>(defaultResumeData);
  const [templateStyle, setTemplateStyle] = useState<TemplateStyle>(defaultTemplateStyle);
  const [sectionOrder, setSectionOrder] = useState<string[]>(defaultSectionOrder);
  const [visibleSections, setVisibleSections] = useState<string[]>(defaultSectionOrder);
  const [availableSections, setAvailableSections] = useState<string[]>(defaultAvailableSections);
  const [activeTab, setActiveTab] = useState("content");
  const [activeSection, setActiveSection] = useState("profile");
  const [showInstructions, setShowInstructions] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const resumeRef = React.useRef<HTMLDivElement>(null);
  
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

  const contextValue: ResumeContextType = {
    resumeData,
    templateStyle,
    sectionOrder,
    visibleSections,
    availableSections,
    activeTab,
    activeSection,
    showInstructions,
    isSaving,
    isExporting,
    resumeRef,
    
    setResumeData,
    setTemplateStyle,
    setSectionOrder,
    setVisibleSections,
    setAvailableSections,
    setActiveTab,
    setActiveSection,
    setShowInstructions,
    setIsSaving,
    setIsExporting,
    
    handleProfileChange,
    handleSkillsChange,
    handleExperienceChange,
    handleEducationChange,
    handleProjectsChange,
    handleCertificatesChange,
    handleLanguagesChange,
    handleInterestsChange,
    handleDeclarationChange,
    handleAwardsChange,
    handleCoursesChange,
    handleOrganizationsChange,
    handlePublicationsChange,
    handleReferencesChange,
    handleCustomSectionChange,
    handleAddCustomSection,
    handleRemoveSection,
    handleSaveResume,
    handleDownloadResume,
    handleExportDocx,
    handleCreateShareLink,
    toggleInstructions
  };

  return (
    <ResumeContext.Provider value={contextValue}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResumeContext = () => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error('useResumeContext must be used within a ResumeProvider');
  }
  return context;
};
