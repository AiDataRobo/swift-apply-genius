
import { Resume, TemplateStyle } from "@/schemas/resume";

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
  
  // Simple placeholder for now - in a real implementation this would have unique styling
  return (
    <div className="p-6" style={{ fontFamily }}>
      {visibleSections.includes("profile") && (
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold uppercase tracking-wider">{resume.profile.name}</h1>
          <p className="text-md text-gray-700 mt-1">{resume.profile.title}</p>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 mt-3 text-xs text-gray-600">
            {resume.profile.email && <span>{resume.profile.email}</span>}
            {resume.profile.phone && <span>• {resume.profile.phone}</span>}
            {resume.profile.location && <span>• {resume.profile.location}</span>}
          </div>
        </div>
      )}
      
      {/* Other sections would be included here with minimal styling */}
      <div className="text-center text-sm text-muted-foreground mt-4">
        This is the Minimal Template - a clean, simple design with emphasis on content
      </div>
    </div>
  );
};

export default MinimalTemplate;
