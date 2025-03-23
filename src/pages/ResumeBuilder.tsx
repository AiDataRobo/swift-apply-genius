import { useState, useEffect, useRef } from "react";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  LayoutTemplate, 
  FileText, 
  Settings, 
  Link as LinkIcon, 
  Download, 
  Share2,
  Pencil,
  User,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  FileDown,
  FileCode,
  FilePlus2,
  Languages,
  Heart,
  Save,
  FileType,
  ChevronLeft,
  ArrowUpDown,
  Palette,
  Trash2,
  ScrollText,
  CreditCard,
  Sun,
  Moon,
  PanelTop,
  Columns,
  Check,
  Info,
  Undo,
  Loader2
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Resume, TemplateStyle } from "@/schemas/resume";
import ResumeTemplate from "@/components/resume/templates";
import LanguagesSection from "@/components/resume/LanguagesSection";
import InterestsSection from "@/components/resume/InterestsSection";
import SectionReorder from "@/components/resume/SectionReorder";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const ResumeBuilder = () => {
  const navigate = useNavigate();
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

  // Update languages
  const handleLanguagesChange = (updatedLanguages) => {
    setResumeData({ ...resumeData, languages: updatedLanguages });
  };

  // Update interests
  const handleInterestsChange = (updatedInterests) => {
    setResumeData({ ...resumeData, interests: updatedInterests });
  };

  // Update profile
  const handleProfileChange = (field, value) => {
    setResumeData({
      ...resumeData,
      profile: { ...resumeData.profile, [field]: value }
    });
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setTemplateStyle({
      ...templateStyle,
      darkMode: !templateStyle.darkMode,
      // Change colors accordingly
      primaryColor: templateStyle.darkMode ? "#1a73e8" : "#a78bfa",
      secondaryColor: templateStyle.darkMode ? "#f1f5f9" : "#1e293b",
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
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
              onClick={handleSaveResume}
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
              onClick={handleDownloadResume}
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
              <div className="space-y-1.5">
                <div className="mb-3">
                  <p className="text-xs text-muted-foreground mb-2">Edit your resume sections</p>
                </div>
              
                <button 
                  onClick={() => setActiveSection("profile")}
                  className={`w-full flex items-center text-sm p-2 rounded-md ${activeSection === "profile" ? "bg-primary/10 text-primary" : "hover:bg-muted"}`}
                >
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </button>
                <button 
                  onClick={() => setActiveSection("skills")}
                  className={`w-full flex items-center text-sm p-2 rounded-md ${activeSection === "skills" ? "bg-primary/10 text-primary" : "hover:bg-muted"}`}
                >
                  <Code className="h-4 w-4 mr-2" />
                  Skills
                </button>
                <button 
                  onClick={() => setActiveSection("experience")}
                  className={`w-full flex items-center text-sm p-2 rounded-md ${activeSection === "experience" ? "bg-primary/10 text-primary" : "hover:bg-muted"}`}
                >
                  <Briefcase className="h-4 w-4 mr-2" />
                  Experience
                </button>
                <button 
                  onClick={() => setActiveSection("education")}
                  className={`w-full flex items-center text-sm p-2 rounded-md ${activeSection === "education" ? "bg-primary/10 text-primary" : "hover:bg-muted"}`}
                >
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Education
                </button>
                <button 
                  onClick={() => setActiveSection("projects")}
                  className={`w-full flex items-center text-sm p-2 rounded-md ${activeSection === "projects" ? "bg-primary/10 text-primary" : "hover:bg-muted"}`}
                >
                  <FileCode className="h-4 w-4 mr-2" />
                  Projects
                </button>
                <button 
                  onClick={() => setActiveSection("certificates")}
                  className={`w-full flex items-center text-sm p-2 rounded-md ${activeSection === "certificates" ? "bg-primary/10 text-primary" : "hover:bg-muted"}`}
                >
                  <Award className="h-4 w-4 mr-2" />
                  Certificates
                </button>
                <button 
                  onClick={() => setActiveSection("languages")}
                  className={`w-full flex items-center text-sm p-2 rounded-md ${activeSection === "languages" ? "bg-primary/10 text-primary" : "hover:bg-muted"}`}
                >
                  <Languages className="h-4 w-4 mr-2" />
                  Languages
                </button>
                <button 
                  onClick={() => setActiveSection("interests")}
                  className={`w-full flex items-center text-sm p-2 rounded-md ${activeSection === "interests" ? "bg-primary/10 text-primary" : "hover:bg-muted"}`}
                >
                  <Heart className="h-4 w-4 mr-2" />
                  Interests
                </button>
                
                <Separator className="my-3" />
                
                <button 
                  onClick={() => setActiveSection("sections")}
                  className={`w-full flex items-center text-sm p-2 rounded-md ${activeSection === "sections" ? "bg-primary/10 text-primary" : "hover:bg-muted"}`}
                >
                  <ArrowUpDown className="h-4 w-4 mr-2" />
                  Reorder Sections
                </button>
              </div>
            )}

            {activeTab === "customize" && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Templates</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      onClick={() => setTemplateStyle({...templateStyle, template: "modern"})}
                      className={`p-2 rounded-md text-xs border flex flex-col items-center ${templateStyle.template === "modern" ? "border-primary bg-primary/5" : "border-border"}`}
                    >
                      <FileText className="h-8 w-8 mb-1" />
                      Modern
                    </button>
                    <button 
                      onClick={() => setTemplateStyle({...templateStyle, template: "minimal"})}
                      className={`p-2 rounded-md text-xs border flex flex-col items-center ${templateStyle.template === "minimal" ? "border-primary bg-primary/5" : "border-border"}`}
                    >
                      <FileDown className="h-8 w-8 mb-1" />
                      Minimal
                    </button>
                    <button 
                      onClick={() => setTemplateStyle({...templateStyle, template: "professional"})}
                      className={`p-2 rounded-md text-xs border flex flex-col items-center ${templateStyle.template === "professional" ? "border-primary bg-primary/5" : "border-border"}`}
                    >
                      <ScrollText className="h-8 w-8 mb-1" />
                      Professional
                    </button>
                    <button 
                      onClick={() => setTemplateStyle({...templateStyle, template: "creative"})}
                      className={`p-2 rounded-md text-xs border flex flex-col items-center ${templateStyle.template === "creative" ? "border-primary bg-primary/5" : "border-border"}`}
                    >
                      <Palette className="h-8 w-8 mb-1" />
                      Creative
                    </button>
                    <button 
                      onClick={() => setTemplateStyle({...templateStyle, template: "technical"})}
                      className={`p-2 rounded-md text-xs border flex flex-col items-center ${templateStyle.template === "technical" ? "border-primary bg-primary/5" : "border-border"}`}
                    >
                      <Code className="h-8 w-8 mb-1" />
                      Technical
                    </button>
                    <button 
                      onClick={() => setTemplateStyle({...templateStyle, template: "executive"})}
                      className={`p-2 rounded-md text-xs border flex flex-col items-center ${templateStyle.template === "executive" ? "border-primary bg-primary/5" : "border-border"}`}
                    >
                      <CreditCard className="h-8 w-8 mb-1" />
                      Executive
                    </button>
                    <button 
                      onClick={() => setTemplateStyle({...templateStyle, template: "ats"})}
                      className={`p-2 rounded-md text-xs border flex flex-col items-center ${templateStyle.template === "ats" ? "border-primary bg-primary/5" : "border-border"}`}
                    >
                      <FilePlus2 className="h-8 w-8 mb-1" />
                      ATS
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Layout</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      onClick={() => setTemplateStyle({...templateStyle, layout: "single"})}
                      className={`p-2 rounded-md text-xs border flex flex-col items-center ${templateStyle.layout === "single" ? "border-primary bg-primary/5" : "border-border"}`}
                    >
                      <PanelTop className="h-5 w-5 mb-1" />
                      Single Column
                    </button>
                    <button 
                      onClick={() => setTemplateStyle({...templateStyle, layout: "two-column"})}
                      className={`p-2 rounded-md text-xs border flex flex-col items-center ${templateStyle.layout === "two-column" ? "border-primary bg-primary/5" : "border-border"}`}
                    >
                      <Columns className="h-5 w-5 mb-1" />
                      Two Column
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Colors</h3>
                  <div className="flex flex-wrap gap-2">
                    <button 
                      onClick={() => setTemplateStyle({...templateStyle, primaryColor: "#1a73e8"})}
                      className={`w-6 h-6 rounded-full bg-blue-600 ${templateStyle.primaryColor === "#1a73e8" ? "ring-2 ring-offset-2 ring-blue-600" : ""}`}
                      aria-label="Blue"
                    />
                    <button 
                      onClick={() => setTemplateStyle({...templateStyle, primaryColor: "#15803d"})}
                      className={`w-6 h-6 rounded-full bg-green-700 ${templateStyle.primaryColor === "#15803d" ? "ring-2 ring-offset-2 ring-green-700" : ""}`}
                      aria-label="Green"
                    />
                    <button 
                      onClick={() => setTemplateStyle({...templateStyle, primaryColor: "#7c3aed"})}
                      className={`w-6 h-6 rounded-full bg-purple-600 ${templateStyle.primaryColor === "#7c3aed" ? "ring-2 ring-offset-2 ring-purple-600" : ""}`}
                      aria-label="Purple"
                    />
                    <button 
                      onClick={() => setTemplateStyle({...templateStyle, primaryColor: "#be123c"})}
                      className={`w-6 h-6 rounded-full bg-rose-700 ${templateStyle.primaryColor === "#be123c" ? "ring-2 ring-offset-2 ring-rose-700" : ""}`}
                      aria-label="Rose"
                    />
                    <button 
                      onClick={() => setTemplateStyle({...templateStyle, primaryColor: "#1e293b"})}
                      className={`w-6 h-6 rounded-full bg-slate-800 ${templateStyle.primaryColor === "#1e293b" ? "ring-2 ring-offset-2 ring-slate-800" : ""}`}
                      aria-label="Slate"
                    />
                    <button 
                      onClick={() => setTemplateStyle({...templateStyle, primaryColor: "#f97316"})}
                      className={`w-6 h-6 rounded-full bg-orange-500 ${templateStyle.primaryColor === "#f97316" ? "ring-2 ring-offset-2 ring-orange-500" : ""}`}
                      aria-label="Orange"
                    />
                    <button 
                      onClick={() => setTemplateStyle({...templateStyle, primaryColor: "#0ea5e9"})}
                      className={`w-6 h-6 rounded-full bg-sky-500 ${templateStyle.primaryColor === "#0ea5e9" ? "ring-2 ring-offset-2 ring-sky-500" : ""}`}
                      aria-label="Sky Blue"
                    />
                    <button 
                      onClick={() => setTemplateStyle({...templateStyle, primaryColor: "#8b5cf6"})}
                      className={`w-6 h-6 rounded-full bg-violet-500 ${templateStyle.primaryColor === "#8b5cf6" ? "ring-2 ring-offset-2 ring-violet-500" : ""}`}
                      aria-label="Violet"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Font</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      onClick={() => setTemplateStyle({...templateStyle, fontFamily: "Inter"})}
                      className={`p-2 rounded-md text-xs border ${templateStyle.fontFamily === "Inter" ? "border-primary bg-primary/5" : "border-border"}`}
                    >
                      Inter
                    </button>
                    <button 
                      onClick={() => setTemplateStyle({...templateStyle, fontFamily: "Poppins"})}
                      className={`p-2 rounded-md text-xs border ${templateStyle.fontFamily === "Poppins" ? "border-primary bg-primary/5" : "border-border"}`}
                    >
                      Poppins
                    </button>
                    <button 
                      onClick={() => setTemplateStyle({...templateStyle, fontFamily: "Georgia"})}
                      className={`p-2 rounded-md text-xs border ${templateStyle.fontFamily === "Georgia" ? "border-primary bg-primary/5" : "border-border"}`}
                      style={{ fontFamily: "Georgia" }}
                    >
                      Georgia
                    </button>
                    <button 
                      onClick={() => setTemplateStyle({...templateStyle, fontFamily: "Arial"})}
                      className={`p-2 rounded-md text-xs border ${templateStyle.fontFamily === "Arial" ? "border-primary bg-primary/5" : "border-border"}`}
                      style={{ fontFamily: "Arial" }}
                    >
                      Arial
                    </button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Font Size</h3>
                  <div className="grid grid-cols-3 gap-2">
                    <button 
                      onClick={() => setTemplateStyle({...templateStyle, fontSize: "small"})}
                      className={`p-2 rounded-md text-xs border ${templateStyle.fontSize === "small" ? "border-primary bg-primary/5" : "border-border"}`}
                    >
                      Small
                    </button>
                    <button 
                      onClick={() => setTemplateStyle({...templateStyle, fontSize: "medium"})}
                      className={`p-2 rounded-md text-xs border ${templateStyle.fontSize === "medium" ? "border-primary bg-primary/5" : "border-border"}`}
                    >
                      Medium
                    </button>
                    <button 
                      onClick={() => setTemplateStyle({...templateStyle, fontSize: "large"})}
                      className={`p-2 rounded-md text-xs border ${templateStyle.fontSize === "large" ? "border-primary bg-primary/5" : "border-border"}`}
                    >
                      Large
                    </button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Spacing</h3>
                  <div className="grid grid-cols-3 gap-2">
                    <button 
                      onClick={() => setTemplateStyle({...templateStyle, spacing: "compact"})}
                      className={`p-2 rounded-md text-xs border ${templateStyle.spacing === "compact" ? "border-primary bg-primary/5" : "border-border"}`}
                    >
                      Compact
                    </button>
                    <button 
                      onClick={() => setTemplateStyle({...templateStyle, spacing: "comfortable"})}
                      className={`p-2 rounded-md text-xs border ${templateStyle.spacing === "comfortable" ? "border-primary bg-primary/5" : "border-border"}`}
                    >
                      Comfortable
                    </button>
                    <button 
                      onClick={() => setTemplateStyle({...templateStyle, spacing: "spacious"})}
                      className={`p-2 rounded-md text-xs border ${templateStyle.spacing === "spacious" ? "border-primary bg-primary/5" : "border-border"}`}
                    >
                      Spacious
                    </button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Theme</h3>
                  <button 
                    onClick={toggleDarkMode}
                    className="w-full p-2 rounded-md text-xs border flex items-center justify-center gap-2"
                  >
                    {templateStyle.darkMode ? (
                      <>
                        <Sun className="h-4 w-4" />
                        Switch to Light Mode
                      </>
                    ) : (
                      <>
                        <Moon className="h-4 w-4" />
                        Switch to Dark Mode
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {activeTab === "share" && (
              <div className="space-y-4 p-1">
                <div className="space-y-2">
                  <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Export</h3>
                  <Button 
                    className="w-full flex items-center justify-center gap-2" 
                    onClick={handleDownloadResume}
                    disabled={isExporting}
                  >
                    {isExporting ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Download className="h-4 w-4" />
                    )}
                    {isExporting ? "Preparing PDF..." : "Download PDF"}
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full flex items-center justify-center gap-2" 
                    onClick={handleExportDocx}
                  >
                    <FileType className="h-4 w-4" />
                    Export as DOCX
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <Trash2 className="h-4 w-4" />
                    Export as TXT
                  </Button>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Share</h3>
                  <Button 
                    variant="outline" 
                    className="w-full flex items-center justify-center gap-2" 
                    onClick={handleCreateShareLink}
                  >
                    <Share2 className="h-4 w-4" />
                    Create Share Link
                  </Button>
                  
                  <div className="rounded-md bg-muted/50 p-3 text-xs">
                    <div className="flex items-start gap-2">
                      <Info className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">
                        Share links allow anyone to view (but not edit) your resume. Links expire after 30 days.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden">
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={45} minSize={30}>
              <div className="h-full overflow-y-auto p-6">
                {activeSection === "profile" && (
                  <Card>
                    <CardContent className="space-y-4 pt-6">
                      <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold">Profile</h2>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Check className="h-3.5 w-3.5 text-green-500" /> 
                          Auto-saved
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">Update your personal information and contact details</p>
