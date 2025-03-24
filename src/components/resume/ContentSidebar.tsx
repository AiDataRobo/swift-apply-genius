
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
  Plus,
  Trash2
} from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";

interface ContentSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  availableSections: string[];
  onAddCustomSection?: (sectionName: string) => void;
  onRemoveSection?: (sectionName: string) => void;
}

const ContentSidebar = ({ 
  activeSection, 
  onSectionChange,
  availableSections,
  onAddCustomSection,
  onRemoveSection
}: ContentSidebarProps) => {
  const [showAddSection, setShowAddSection] = useState(false);
  const [newSectionName, setNewSectionName] = useState("");

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

  const handleAddSection = () => {
    if (newSectionName && onAddCustomSection) {
      onAddCustomSection(newSectionName.trim());
      setNewSectionName("");
      setShowAddSection(false);
    }
  };

  // Filter section items to only show those in availableSections
  const filteredSectionItems = sectionItems.filter(item => 
    availableSections.includes(item.id)
  );

  // Get custom sections (sections in availableSections but not in sectionItems)
  const customSections = availableSections.filter(
    section => !sectionItems.some(item => item.id === section) && section !== "sections"
  );

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
    
      {filteredSectionItems.map((item, index) => (
        <motion.button 
          key={item.id}
          onClick={() => onSectionChange(item.id)}
          className={`w-full flex items-center justify-between text-sm p-2 rounded-md transition-all duration-200 ${
            activeSection === item.id 
            ? "bg-primary/10 text-primary font-medium" 
            : "hover:bg-muted"
          }`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          whileHover={{ x: 2 }}
        >
          <div className="flex items-center">
            <item.icon className={`h-4 w-4 mr-2 ${activeSection === item.id ? "text-primary" : ""}`} />
            {item.label}
          </div>
          
          <div className="flex items-center">
            {item.status === "required" && (
              <Badge variant="outline" className="text-[9px] px-1 py-0 h-4 border-primary/20 text-primary">
                Required
              </Badge>
            )}
            
            {activeSection === item.id && item.status !== "required" && (
              <motion.div 
                className="h-1.5 w-1.5 rounded-full bg-primary mr-2"
                layoutId="activeDot"
              />
            )}

            {item.status !== "required" && onRemoveSection && (
              <Button
                variant="ghost"
                size="icon"
                className="h-5 w-5 ml-1 opacity-0 group-hover:opacity-100 hover:opacity-100"
                onClick={(e) => {
                  e.stopPropagation();
                  onRemoveSection(item.id);
                }}
              >
                <Trash2 className="h-3 w-3 text-muted-foreground" />
              </Button>
            )}
          </div>
        </motion.button>
      ))}

      {/* Custom sections */}
      {customSections.map((section, index) => (
        <motion.button 
          key={section}
          onClick={() => onSectionChange(section)}
          className={`w-full flex items-center justify-between text-sm p-2 rounded-md transition-all duration-200 group ${
            activeSection === section 
            ? "bg-primary/10 text-primary font-medium" 
            : "hover:bg-muted"
          }`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: (filteredSectionItems.length + index) * 0.05 }}
          whileHover={{ x: 2 }}
        >
          <div className="flex items-center">
            <FileText className={`h-4 w-4 mr-2 ${activeSection === section ? "text-primary" : ""}`} />
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </div>
          
          <div className="flex items-center">
            {activeSection === section && (
              <motion.div 
                className="h-1.5 w-1.5 rounded-full bg-primary mr-2"
                layoutId="activeDot"
              />
            )}

            {onRemoveSection && (
              <Button
                variant="ghost"
                size="icon"
                className="h-5 w-5 opacity-0 group-hover:opacity-100 hover:opacity-100"
                onClick={(e) => {
                  e.stopPropagation();
                  onRemoveSection(section);
                }}
              >
                <Trash2 className="h-3 w-3 text-muted-foreground" />
              </Button>
            )}
          </div>
        </motion.button>
      ))}
      
      <Separator className="my-3" />

      {/* Add Section Button & Form */}
      {showAddSection ? (
        <div className="p-2 bg-muted/50 rounded-md">
          <Input 
            value={newSectionName}
            onChange={(e) => setNewSectionName(e.target.value)}
            placeholder="Section name..."
            className="text-sm mb-2"
          />
          <div className="flex gap-2">
            <Button 
              size="sm" 
              className="w-full text-xs" 
              onClick={handleAddSection}
              disabled={!newSectionName.trim()}
            >
              Add
            </Button>
            <Button 
              size="sm" 
              variant="ghost" 
              className="w-full text-xs" 
              onClick={() => setShowAddSection(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full flex items-center gap-1 text-xs"
          onClick={() => setShowAddSection(true)}
        >
          <Plus className="h-3.5 w-3.5" />
          Add Custom Section
        </Button>
      )}
      
      <motion.button 
        onClick={() => onSectionChange("sections")}
        className={`w-full flex items-center text-sm p-2 rounded-md mt-2 ${
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
