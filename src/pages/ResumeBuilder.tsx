
import { useState } from "react";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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
  FilePlus2
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ResumeBuilder = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("content");
  const [activeSection, setActiveSection] = useState("profile");
  const [resumeData, setResumeData] = useState({
    profile: {
      name: "Sarah Johnson",
      title: "Senior Frontend Developer",
      email: "sarah@example.com",
      phone: "(123) 456-7890",
      location: "San Francisco, CA",
      summary: "Passionate frontend developer with 5+ years of experience creating responsive and accessible web applications."
    },
    skills: [
      { category: "Programming", items: ["JavaScript", "TypeScript", "React", "Vue.js", "HTML5", "CSS3", "Tailwind CSS"] },
      { category: "Tools", items: ["Git", "Webpack", "Jest", "Figma"] },
      { category: "Soft Skills", items: ["Team Leadership", "Communication", "Problem Solving"] }
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
    ]
  });

  const [templateStyle, setTemplateStyle] = useState({
    template: "modern",
    primaryColor: "#1a73e8",
    fontFamily: "Inter",
    fontSize: "medium",
    spacing: "comfortable"
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <LayoutTemplate className="h-5 w-5" />
            <h1 className="text-lg font-semibold">Resume Builder</h1>
          </div>
          <div className="flex items-center space-x-3">
            <button className="flex items-center text-sm px-3 py-1.5 rounded-md bg-muted hover:bg-muted/80">
              <FileText className="h-4 w-4 mr-1.5" />
              Save
            </button>
            <button className="flex items-center text-sm px-3 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90">
              <Download className="h-4 w-4 mr-1.5" />
              Export
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex overflow-hidden">
        <div className="w-[220px] border-r bg-card p-3 flex flex-col">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 w-full mb-4">
              <TabsTrigger value="content" className="text-xs px-2 py-1">
                <Pencil className="h-3.5 w-3.5 mr-1" />
                Content
              </TabsTrigger>
              <TabsTrigger value="customize" className="text-xs px-2 py-1">
                <Settings className="h-3.5 w-3.5 mr-1" />
                Customize
              </TabsTrigger>
              <TabsTrigger value="share" className="text-xs px-2 py-1">
                <LinkIcon className="h-3.5 w-3.5 mr-1" />
                Share
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex-1 overflow-y-auto">
            {activeTab === "content" && (
              <div className="space-y-2">
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
              </div>
            )}

            {activeTab === "customize" && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Templates</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      onClick={() => setTemplateStyle({...templateStyle, template: "modern"})}
                      className={`p-2 rounded-md text-xs border flex flex-col items-center ${templateStyle.template === "modern" ? "border-primary" : "border-border"}`}
                    >
                      <FileText className="h-8 w-8 mb-1" />
                      Modern
                    </button>
                    <button 
                      onClick={() => setTemplateStyle({...templateStyle, template: "minimal"})}
                      className={`p-2 rounded-md text-xs border flex flex-col items-center ${templateStyle.template === "minimal" ? "border-primary" : "border-border"}`}
                    >
                      <FileDown className="h-8 w-8 mb-1" />
                      Minimal
                    </button>
                    <button 
                      onClick={() => setTemplateStyle({...templateStyle, template: "ats"})}
                      className={`p-2 rounded-md text-xs border flex flex-col items-center ${templateStyle.template === "ats" ? "border-primary" : "border-border"}`}
                    >
                      <FilePlus2 className="h-8 w-8 mb-1" />
                      ATS
                    </button>
                    <button 
                      onClick={() => setTemplateStyle({...templateStyle, template: "creative"})}
                      className={`p-2 rounded-md text-xs border flex flex-col items-center ${templateStyle.template === "creative" ? "border-primary" : "border-border"}`}
                    >
                      <FileCode className="h-8 w-8 mb-1" />
                      Creative
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Colors</h3>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => setTemplateStyle({...templateStyle, primaryColor: "#1a73e8"})}
                      className={`w-6 h-6 rounded-full bg-blue-600 ${templateStyle.primaryColor === "#1a73e8" ? "ring-2 ring-offset-2 ring-blue-600" : ""}`}
                    />
                    <button 
                      onClick={() => setTemplateStyle({...templateStyle, primaryColor: "#15803d"})}
                      className={`w-6 h-6 rounded-full bg-green-700 ${templateStyle.primaryColor === "#15803d" ? "ring-2 ring-offset-2 ring-green-700" : ""}`}
                    />
                    <button 
                      onClick={() => setTemplateStyle({...templateStyle, primaryColor: "#7c3aed"})}
                      className={`w-6 h-6 rounded-full bg-purple-600 ${templateStyle.primaryColor === "#7c3aed" ? "ring-2 ring-offset-2 ring-purple-600" : ""}`}
                    />
                    <button 
                      onClick={() => setTemplateStyle({...templateStyle, primaryColor: "#be123c"})}
                      className={`w-6 h-6 rounded-full bg-rose-700 ${templateStyle.primaryColor === "#be123c" ? "ring-2 ring-offset-2 ring-rose-700" : ""}`}
                    />
                    <button 
                      onClick={() => setTemplateStyle({...templateStyle, primaryColor: "#1e293b"})}
                      className={`w-6 h-6 rounded-full bg-slate-800 ${templateStyle.primaryColor === "#1e293b" ? "ring-2 ring-offset-2 ring-slate-800" : ""}`}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Font</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      onClick={() => setTemplateStyle({...templateStyle, fontFamily: "Inter"})}
                      className={`p-2 rounded-md text-xs border ${templateStyle.fontFamily === "Inter" ? "border-primary" : "border-border"}`}
                    >
                      Inter
                    </button>
                    <button 
                      onClick={() => setTemplateStyle({...templateStyle, fontFamily: "Poppins"})}
                      className={`p-2 rounded-md text-xs border ${templateStyle.fontFamily === "Poppins" ? "border-primary" : "border-border"}`}
                    >
                      Poppins
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "share" && (
              <div className="space-y-4 p-1">
                <div className="space-y-2">
                  <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Export</h3>
                  <button className="w-full flex items-center justify-center text-sm py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </button>
                  <button className="w-full flex items-center justify-center text-sm py-2 rounded-md bg-muted hover:bg-muted/80">
                    <Download className="h-4 w-4 mr-2" />
                    Export as DOCX
                  </button>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Share</h3>
                  <button className="w-full flex items-center justify-center text-sm py-2 rounded-md bg-muted hover:bg-muted/80">
                    <Share2 className="h-4 w-4 mr-2" />
                    Create Share Link
                  </button>
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
                      <h2 className="text-xl font-semibold">Profile</h2>
                      <p className="text-sm text-muted-foreground">Update your personal information and contact details</p>
                      
                      <div className="space-y-4 mt-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <label className="text-sm font-medium" htmlFor="name">Full Name</label>
                            <input 
                              id="name"
                              type="text" 
                              className="w-full px-3 py-2 border rounded-md text-sm" 
                              value={resumeData.profile.name}
                              onChange={(e) => setResumeData({
                                ...resumeData,
                                profile: { ...resumeData.profile, name: e.target.value }
                              })}
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium" htmlFor="title">Job Title</label>
                            <input 
                              id="title"
                              type="text" 
                              className="w-full px-3 py-2 border rounded-md text-sm" 
                              value={resumeData.profile.title}
                              onChange={(e) => setResumeData({
                                ...resumeData,
                                profile: { ...resumeData.profile, title: e.target.value }
                              })}
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <label className="text-sm font-medium" htmlFor="email">Email</label>
                            <input 
                              id="email"
                              type="email" 
                              className="w-full px-3 py-2 border rounded-md text-sm" 
                              value={resumeData.profile.email}
                              onChange={(e) => setResumeData({
                                ...resumeData,
                                profile: { ...resumeData.profile, email: e.target.value }
                              })}
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium" htmlFor="phone">Phone</label>
                            <input 
                              id="phone"
                              type="text" 
                              className="w-full px-3 py-2 border rounded-md text-sm" 
                              value={resumeData.profile.phone}
                              onChange={(e) => setResumeData({
                                ...resumeData,
                                profile: { ...resumeData.profile, phone: e.target.value }
                              })}
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium" htmlFor="location">Location</label>
                          <input 
                            id="location"
                            type="text" 
                            className="w-full px-3 py-2 border rounded-md text-sm" 
                            value={resumeData.profile.location}
                            onChange={(e) => setResumeData({
                              ...resumeData,
                              profile: { ...resumeData.profile, location: e.target.value }
                            })}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium" htmlFor="summary">Professional Summary</label>
                          <textarea 
                            id="summary"
                            rows={4} 
                            className="w-full px-3 py-2 border rounded-md text-sm" 
                            value={resumeData.profile.summary}
                            onChange={(e) => setResumeData({
                              ...resumeData,
                              profile: { ...resumeData.profile, summary: e.target.value }
                            })}
                          />
                        </div>
                        
                        <div className="mt-4">
                          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm">
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
                
                {activeSection === "skills" && (
                  <Card>
                    <CardContent className="space-y-4 pt-6">
                      <h2 className="text-xl font-semibold">Technical Skills</h2>
                      <p className="text-sm text-muted-foreground">Highlight your expertise and technical abilities</p>
                      
                      {resumeData.skills.map((skillGroup, groupIndex) => (
                        <div key={groupIndex} className="space-y-3 mt-4 border p-4 rounded-md">
                          <div className="flex justify-between items-center">
                            <div className="space-y-2">
                              <label className="text-sm font-medium">Skill Category</label>
                              <input 
                                type="text" 
                                className="w-full px-3 py-2 border rounded-md text-sm" 
                                value={skillGroup.category}
                                onChange={(e) => {
                                  const updatedSkills = [...resumeData.skills];
                                  updatedSkills[groupIndex].category = e.target.value;
                                  setResumeData({...resumeData, skills: updatedSkills});
                                }}
                              />
                            </div>
                            <button className="text-destructive hover:text-destructive/90 text-sm">
                              Remove
                            </button>
                          </div>
                          
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Skills (comma separated)</label>
                            <textarea 
                              rows={2} 
                              className="w-full px-3 py-2 border rounded-md text-sm" 
                              value={skillGroup.items.join(", ")}
                              onChange={(e) => {
                                const updatedSkills = [...resumeData.skills];
                                updatedSkills[groupIndex].items = e.target.value.split(",").map(item => item.trim());
                                setResumeData({...resumeData, skills: updatedSkills});
                              }}
                            />
                          </div>
                        </div>
                      ))}
                      
                      <button className="w-full mt-4 px-4 py-2 border border-dashed rounded-md text-sm text-muted-foreground hover:text-foreground">
                        + Add Skill Category
                      </button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </ResizablePanel>
            
            <ResizableHandle withHandle />
            
            <ResizablePanel defaultSize={55}>
              <div className="h-full overflow-y-auto bg-muted/30 flex items-center justify-center p-6">
                <div className="w-full max-w-[600px] min-h-[800px] mx-auto bg-white shadow-lg rounded-md overflow-hidden">
                  <div className="p-8" style={{fontFamily: templateStyle.fontFamily}}>
                    <div className="mb-6">
                      <h1 className="text-3xl font-bold" style={{color: templateStyle.primaryColor}}>{resumeData.profile.name}</h1>
                      <p className="text-lg text-gray-700">{resumeData.profile.title}</p>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-gray-600">
                        <span>{resumeData.profile.email}</span>
                        <span>{resumeData.profile.phone}</span>
                        <span>{resumeData.profile.location}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h2 className="text-lg font-semibold mb-2 pb-1 border-b" style={{color: templateStyle.primaryColor}}>Professional Summary</h2>
                      <p className="text-sm">{resumeData.profile.summary}</p>
                    </div>

                    <div className="mb-6">
                      <h2 className="text-lg font-semibold mb-2 pb-1 border-b" style={{color: templateStyle.primaryColor}}>Skills</h2>
                      {resumeData.skills.map((skillGroup, i) => (
                        <div key={i} className="mb-2">
                          <h3 className="text-sm font-medium">{skillGroup.category}</h3>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {skillGroup.items.map((skill, j) => (
                              <span key={j} className="text-xs px-2 py-1 bg-gray-100 rounded-full">{skill}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6">
                      <h2 className="text-lg font-semibold mb-2 pb-1 border-b" style={{color: templateStyle.primaryColor}}>Experience</h2>
                      {resumeData.experience.map((job, i) => (
                        <div key={i} className="mb-4">
                          <div className="flex justify-between mb-1">
                            <h3 className="text-sm font-medium">{job.title}</h3>
                            <span className="text-xs text-gray-600">{job.startDate} - {job.endDate}</span>
                          </div>
                          <p className="text-xs text-gray-700 mb-1">{job.company}, {job.location}</p>
                          <p className="text-xs">{job.description}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6">
                      <h2 className="text-lg font-semibold mb-2 pb-1 border-b" style={{color: templateStyle.primaryColor}}>Education</h2>
                      {resumeData.education.map((edu, i) => (
                        <div key={i} className="mb-3">
                          <div className="flex justify-between mb-1">
                            <h3 className="text-sm font-medium">{edu.degree}</h3>
                            <span className="text-xs text-gray-600">{edu.startDate} - {edu.endDate}</span>
                          </div>
                          <p className="text-xs text-gray-700 mb-1">{edu.institution}</p>
                          <p className="text-xs">{edu.description}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6">
                      <h2 className="text-lg font-semibold mb-2 pb-1 border-b" style={{color: templateStyle.primaryColor}}>Projects</h2>
                      {resumeData.projects.map((project, i) => (
                        <div key={i} className="mb-3">
                          <h3 className="text-sm font-medium">{project.title}</h3>
                          <p className="text-xs mb-1">{project.description}</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {project.technologies.map((tech, j) => (
                              <span key={j} className="text-xs px-2 py-0.5 bg-gray-100 rounded-full">{tech}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold mb-2 pb-1 border-b" style={{color: templateStyle.primaryColor}}>Certifications</h2>
                      {resumeData.certificates.map((cert, i) => (
                        <div key={i} className="mb-2">
                          <div className="flex justify-between">
                            <h3 className="text-sm font-medium">{cert.title}</h3>
                            <span className="text-xs text-gray-600">{cert.date}</span>
                          </div>
                          <p className="text-xs text-gray-700">{cert.issuer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
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
