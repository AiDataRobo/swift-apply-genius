
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
  ArrowUpDown,
  CheckCircle2,
  BookOpen,
  Users,
  FileText,
  Landmark,
  ScrollText,
  ClipboardSignature,
  Plus
} from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface ContentSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const ContentSidebar = ({ activeSection, onSectionChange }: ContentSidebarProps) => {
  const sectionItems = [
    { id: "profile", icon: User, label: "Profile", status: "required" },
    { id: "skills", icon: Code, label: "Skills", status: "required" },
    { id: "experience", icon: Briefcase, label: "Experience", status: "required" },
    { id: "education", icon: GraduationCap, label: "Education", status: "required" },
    { id: "projects", icon: FileCode, label: "Projects", status: "optional" },
    { id: "certificates", icon: Award, label: "Certificates", status: "optional" },
    { id: "languages", icon: Languages, label: "Languages", status: "optional" },
    { id: "courses", icon: BookOpen, label: "Courses", status: "optional" },
    { id: "awards", icon: Award, label: "Awards", status: "optional" },
    { id: "organizations", icon: Landmark, label: "Organizations", status: "optional" },
    { id: "publications", icon: ScrollText, label: "Publications", status: "optional" },
    { id: "references", icon: Users, label: "References", status: "optional" },
    { id: "interests", icon: Heart, label: "Interests", status: "optional" },
    { id: "declaration", icon: ClipboardSignature, label: "Declaration", status: "optional" },
  ];

  return (
    <motion.div 
      className="space-y-1.5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-3">
        <p className="text-xs text-muted-foreground mb-2 flex justify-between">
          <span>Resume Sections</span>
          <span className="text-green-500 flex items-center">
            <CheckCircle2 className="h-3 w-3 mr-1" />Auto-saved
          </span>
        </p>
      </div>
    
      {sectionItems.map((item, index) => (
        <motion.button 
          key={item.id}
          onClick={() => onSectionChange(item.id)}
          className={`w-full flex items-center text-sm p-2 rounded-md transition-all duration-200 ${
            activeSection === item.id 
            ? "bg-primary/10 text-primary font-medium" 
            : "hover:bg-muted"
          }`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          whileHover={{ x: 2 }}
        >
          <item.icon className={`h-4 w-4 mr-2 ${activeSection === item.id ? "text-primary" : ""}`} />
          {item.label}
          
          {item.status === "required" && (
            <Badge variant="outline" className="ml-auto text-[9px] px-1 py-0 h-4 border-primary/20 text-primary">
              Required
            </Badge>
          )}
          
          {activeSection === item.id && item.status !== "required" && (
            <motion.div 
              className="ml-auto h-1.5 w-1.5 rounded-full bg-primary"
              layoutId="activeDot"
            />
          )}
        </motion.button>
      ))}
      
      <Separator className="my-3" />
      
      <motion.button 
        onClick={() => onSectionChange("sections")}
        className={`w-full flex items-center text-sm p-2 rounded-md ${
          activeSection === "sections" 
          ? "bg-primary/10 text-primary" 
          : "hover:bg-muted"
        }`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        whileHover={{ x: 2 }}
      >
        <ArrowUpDown className="h-4 w-4 mr-2" />
        Reorder Sections
        {activeSection === "sections" && (
          <motion.div 
            className="ml-auto h-1.5 w-1.5 rounded-full bg-primary"
            layoutId="activeDot"
          />
        )}
      </motion.button>
    </motion.div>
  );
};

export default ContentSidebar;
