
import { Resume, TemplateStyle } from "@/schemas/resume";
import { motion } from "framer-motion";

interface ExecutiveTemplateProps {
  resume: Resume;
  style: TemplateStyle;
  visibleSections: string[];
  sectionOrder: string[];
}

const ExecutiveTemplate = ({ resume, style, visibleSections, sectionOrder }: ExecutiveTemplateProps) => {
  const { 
    primaryColor = "#1e293b", 
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
      {/* Header with visual flair - executive style */}
      {visibleSections.includes("profile") && (
        <motion.div 
          className={`mb-6 ${getSpacing()}`}
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="w-full">
              {/* Name section with decorative line */}
              <div className="relative">
                <h1 
                  className="text-3xl font-bold uppercase tracking-wider"
                  style={{ color: primaryColor }}
                >
                  {resume.profile.name || "JOHN DOE"}
                </h1>
                <div 
                  className="h-1 mt-2 w-24" 
                  style={{ backgroundColor: primaryColor }}
                />
              </div>
              
              <p className="text-xl mt-2 font-medium">
                {resume.profile.title || "Executive Position"}
              </p>
              
              {resume.profile.summary && (
                <p className={`mt-4 ${getTextSize()} leading-relaxed text-justify`}>
                  {resume.profile.summary}
                </p>
              )}
            </div>
            
            {/* Contact information with elegant styling */}
            <div className="min-w-[200px] p-4 rounded-sm" style={{ 
              backgroundColor: style.darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
              borderLeft: `2px solid ${primaryColor}`
            }}>
              <ul className={`${getSpacing()} ${getTextSize()}`}>
                {resume.profile.email && (
                  <li className="flex items-start">
                    <span className="font-semibold min-w-[80px]">Email:</span> 
                    <span>{resume.profile.email}</span>
                  </li>
                )}
                
                {resume.profile.phone && (
                  <li className="flex items-start">
                    <span className="font-semibold min-w-[80px]">Phone:</span> 
                    <span>{resume.profile.phone}</span>
                  </li>
                )}
                
                {resume.profile.location && (
                  <li className="flex items-start">
                    <span className="font-semibold min-w-[80px]">Location:</span> 
                    <span>{resume.profile.location}</span>
                  </li>
                )}
                
                {resume.profile.linkedin && (
                  <li className="flex items-start">
                    <span className="font-semibold min-w-[80px]">LinkedIn:</span> 
                    <span>{resume.profile.linkedin}</span>
                  </li>
                )}
                
                {resume.profile.website && (
                  <li className="flex items-start">
                    <span className="font-semibold min-w-[80px]">Website:</span> 
                    <span>{resume.profile.website}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </motion.div>
      )}
      
      {/* Section placeholders with professional styling */}
      {sectionOrder.map((section, index) => {
        if (visibleSections.includes(section) && section !== "profile") {
          return (
            <motion.div 
              key={section} 
              className="mb-6"
              variants={itemVariants}
            >
              <h2 
                className="text-xl font-bold uppercase mb-3 tracking-wider border-b pb-1"
                style={{ borderColor: primaryColor, color: primaryColor }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </h2>
              
              <div className={`${getSpacing()} ${getTextSize()}`}>
                {/* Placeholder content */}
                <p className="text-muted-foreground italic">
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
        className="text-center text-sm text-muted-foreground mt-8 border-t pt-4"
        style={{ borderColor: `${primaryColor}40` }}
        variants={itemVariants}
      >
        Executive Template - sophisticated design for senior professionals and executives
      </motion.div>
    </motion.div>
  );
};

export default ExecutiveTemplate;
