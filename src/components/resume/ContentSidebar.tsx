
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
import { motion } from "framer-motion";

interface ContentSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const ContentSidebar = ({ activeSection, onSectionChange }: ContentSidebarProps) => {
  const sectionItems = [
    { id: "profile", icon: User, label: "Profile" },
    { id: "skills", icon: Code, label: "Skills" },
    { id: "experience", icon: Briefcase, label: "Experience" },
    { id: "education", icon: GraduationCap, label: "Education" },
    { id: "projects", icon: FileCode, label: "Projects" },
    { id: "certificates", icon: Award, label: "Certificates" },
    { id: "languages", icon: Languages, label: "Languages" },
    { id: "interests", icon: Heart, label: "Interests" },
  ];

  return (
    <motion.div 
      className="space-y-1.5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-3">
        <p className="text-xs text-muted-foreground mb-2">Edit your resume sections</p>
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
          {activeSection === item.id && (
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
