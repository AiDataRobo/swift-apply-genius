
import { Resume, TemplateStyle } from "@/schemas/resume";
import { motion } from "framer-motion";

interface MinimalTemplateProps {
  resume: Resume;
  style: TemplateStyle;
  visibleSections: string[];
  sectionOrder: string[];
}

const MinimalTemplate = ({ resume, style, visibleSections, sectionOrder }: MinimalTemplateProps) => {
  const { 
    primaryColor = "#333333", 
    fontFamily = "Inter",
    fontSize = "medium",
    spacing = "comfortable"
  } = style;
  
  // Determine text size based on fontSize setting
  const getTextSize = () => {
    switch (fontSize) {
      case "small": return "text-sm";
      case "large": return "text-lg";
      default: return "text-base"; // medium
    }
  };
  
  // Determine spacing based on spacing setting
  const getSpacing = () => {
    switch (spacing) {
      case "compact": return "space-y-2";
      case "spacious": return "space-y-6";
      default: return "space-y-4"; // comfortable
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  };
  
  return (
    <motion.div 
      className="p-6 min-h-[1100px]" 
      style={{ 
        fontFamily,
        color: style.darkMode ? "#e2e8f0" : "#1e293b",
        backgroundColor: style.darkMode ? "#1a202c" : "#ffffff"
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {visibleSections.includes("profile") && (
        <motion.div 
          className={`mb-8 text-center ${getSpacing()}`}
          variants={itemVariants}
        >
          <h1 
            className="text-2xl font-bold uppercase tracking-wider"
            style={{ color: primaryColor }}
          >
            {resume.profile.name || "JOHN DOE"}
          </h1>
          <p className={`${getTextSize()} mt-1`} style={{ color: style.darkMode ? "#cbd5e1" : "#4b5563" }}>
            {resume.profile.title || "Professional Role"}
          </p>
          
          <div className={`flex flex-wrap justify-center gap-x-3 gap-y-1 mt-3 ${getTextSize()}`} style={{ color: style.darkMode ? "#94a3b8" : "#6b7280" }}>
            {resume.profile.email && <span>{resume.profile.email}</span>}
            {resume.profile.phone && <span>• {resume.profile.phone}</span>}
            {resume.profile.location && <span>• {resume.profile.location}</span>}
            {resume.profile.linkedin && <span>• {resume.profile.linkedin}</span>}
            {resume.profile.website && <span>• {resume.profile.website}</span>}
          </div>
          
          {resume.profile.summary && (
            <p className={`mt-4 max-w-2xl mx-auto ${getTextSize()} leading-relaxed text-center`} style={{ color: style.darkMode ? "#cbd5e1" : "#4b5563" }}>
              {resume.profile.summary}
            </p>
          )}
          
          {/* Subtle decorative line */}
          <div 
            className="h-px w-24 mx-auto mt-4" 
            style={{ backgroundColor: primaryColor }}
          />
        </motion.div>
      )}
      
      {/* Section rendering based on sectionOrder */}
      {sectionOrder.map((section, index) => {
        if (visibleSections.includes(section) && section !== "profile") {
          return (
            <motion.div 
              key={section} 
              className="mb-6"
              variants={itemVariants}
            >
              <h2 
                className="text-lg font-semibold uppercase mb-3 tracking-wider text-center"
                style={{ color: primaryColor }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </h2>
              
              {/* Decorative dots for section separation */}
              <div className="flex justify-center mb-4">
                <div className="flex gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: primaryColor }}
                    />
                  ))}
                </div>
              </div>
              
              <div className={`${getSpacing()} ${getTextSize()}`}>
                {/* Placeholder content */}
                <p className="text-center text-muted-foreground italic">
                  {section === "experience" && "Professional experience will be displayed here"}
                  {section === "education" && "Education details will be displayed here"}
                  {section === "skills" && "Key skills and competencies will be displayed here"}
                  {section === "projects" && "Notable projects will be displayed here"} 
                  {section === "certificates" && "Professional certifications will be displayed here"}
                  {section === "languages" && "Language proficiencies will be displayed here"}
                  {section === "interests" && "Personal interests will be displayed here"}
                </p>
              </div>
            </motion.div>
          );
        }
        return null;
      })}
      
      <motion.div 
        className="text-center text-sm text-muted-foreground mt-8"
        variants={itemVariants}
      >
        Minimal Template - a clean, simple design with emphasis on content
      </motion.div>
    </motion.div>
  );
};

export default MinimalTemplate;
