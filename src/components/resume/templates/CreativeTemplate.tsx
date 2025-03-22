import { Resume, TemplateStyle } from "@/schemas/resume";

interface CreativeTemplateProps {
  resume: Resume;
  style: TemplateStyle;
  visibleSections: string[];
}

const CreativeTemplate = ({ resume, style, visibleSections }: CreativeTemplateProps) => {
  const { 
    primaryColor = "#8b5cf6", 
    fontFamily = "Inter",
    fontSize = "medium",
    spacing = "comfortable"
  } = style;
  
  // Simple placeholder for now - in a real implementation this would have unique styling
  return (
    <div className="p-6" style={{ fontFamily }}>
      {visibleSections.includes("profile") && (
        <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: `${primaryColor}10` }}>
          <h1 className="text-3xl font-bold" style={{ color: primaryColor }}>{resume.profile.name}</h1>
          <p className="text-lg italic">{resume.profile.title}</p>
          <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3 text-sm">
            {resume.profile.email && (
              <span className="px-2 py-1 rounded-full text-xs" style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }}>
                {resume.profile.email}
              </span>
            )}
            {resume.profile.phone && (
              <span className="px-2 py-1 rounded-full text-xs" style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }}>
                {resume.profile.phone}
              </span>
            )}
            {resume.profile.location && (
              <span className="px-2 py-1 rounded-full text-xs" style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }}>
                {resume.profile.location}
              </span>
            )}
          </div>
        </div>
      )}
      
      {/* Other sections would be included here with creative styling */}
      <div className="text-center text-sm text-muted-foreground mt-4">
        This is the Creative Template - a modern, vibrant design for creative professionals
      </div>
    </div>
  );
};

export default CreativeTemplate;
