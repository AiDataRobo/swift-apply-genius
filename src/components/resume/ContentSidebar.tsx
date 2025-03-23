
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Code, 
  Briefcase, 
  GraduationCap, 
  FileCode, 
  Award, 
  Languages, 
  Heart, 
  ArrowUpDown 
} from "lucide-react";

interface ContentSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const ContentSidebar = ({ activeSection, onSectionChange }: ContentSidebarProps) => {
  return (
    <div className="space-y-1.5">
      <div className="mb-3">
        <p className="text-xs text-muted-foreground mb-2">Edit your resume sections</p>
      </div>
    
      <button 
        onClick={() => onSectionChange("profile")}
        className={`w-full flex items-center text-sm p-2 rounded-md ${activeSection === "profile" ? "bg-primary/10 text-primary" : "hover:bg-muted"}`}
      >
        <User className="h-4 w-4 mr-2" />
        Profile
      </button>
      <button 
        onClick={() => onSectionChange("skills")}
        className={`w-full flex items-center text-sm p-2 rounded-md ${activeSection === "skills" ? "bg-primary/10 text-primary" : "hover:bg-muted"}`}
      >
        <Code className="h-4 w-4 mr-2" />
        Skills
      </button>
      <button 
        onClick={() => onSectionChange("experience")}
        className={`w-full flex items-center text-sm p-2 rounded-md ${activeSection === "experience" ? "bg-primary/10 text-primary" : "hover:bg-muted"}`}
      >
        <Briefcase className="h-4 w-4 mr-2" />
        Experience
      </button>
      <button 
        onClick={() => onSectionChange("education")}
        className={`w-full flex items-center text-sm p-2 rounded-md ${activeSection === "education" ? "bg-primary/10 text-primary" : "hover:bg-muted"}`}
      >
        <GraduationCap className="h-4 w-4 mr-2" />
        Education
      </button>
      <button 
        onClick={() => onSectionChange("projects")}
        className={`w-full flex items-center text-sm p-2 rounded-md ${activeSection === "projects" ? "bg-primary/10 text-primary" : "hover:bg-muted"}`}
      >
        <FileCode className="h-4 w-4 mr-2" />
        Projects
      </button>
      <button 
        onClick={() => onSectionChange("certificates")}
        className={`w-full flex items-center text-sm p-2 rounded-md ${activeSection === "certificates" ? "bg-primary/10 text-primary" : "hover:bg-muted"}`}
      >
        <Award className="h-4 w-4 mr-2" />
        Certificates
      </button>
      <button 
        onClick={() => onSectionChange("languages")}
        className={`w-full flex items-center text-sm p-2 rounded-md ${activeSection === "languages" ? "bg-primary/10 text-primary" : "hover:bg-muted"}`}
      >
        <Languages className="h-4 w-4 mr-2" />
        Languages
      </button>
      <button 
        onClick={() => onSectionChange("interests")}
        className={`w-full flex items-center text-sm p-2 rounded-md ${activeSection === "interests" ? "bg-primary/10 text-primary" : "hover:bg-muted"}`}
      >
        <Heart className="h-4 w-4 mr-2" />
        Interests
      </button>
      
      <Separator className="my-3" />
      
      <button 
        onClick={() => onSectionChange("sections")}
        className={`w-full flex items-center text-sm p-2 rounded-md ${activeSection === "sections" ? "bg-primary/10 text-primary" : "hover:bg-muted"}`}
      >
        <ArrowUpDown className="h-4 w-4 mr-2" />
        Reorder Sections
      </button>
    </div>
  );
};

export default ContentSidebar;
