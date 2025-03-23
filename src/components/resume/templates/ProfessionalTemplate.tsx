
import { Resume, TemplateStyle } from "@/schemas/resume";

interface ProfessionalTemplateProps {
  resume: Resume;
  style: TemplateStyle;
  visibleSections: string[];
  sectionOrder: string[];
}

const ProfessionalTemplate = ({ resume, style, visibleSections, sectionOrder }: ProfessionalTemplateProps) => {
  const { 
    primaryColor = "#1e293b", 
    fontFamily = "Inter",
    fontSize = "medium",
    spacing = "comfortable"
  } = style;
  
  // Simple placeholder for now - in a real implementation this would have unique styling
  return (
    <div className="p-6" style={{ fontFamily }}>
      {visibleSections.includes("profile") && (
        <div className="mb-6 border-b pb-4" style={{ borderColor: primaryColor }}>
          <h1 className="text-2xl font-bold" style={{ color: primaryColor }}>{resume.profile.name}</h1>
          <p className="text-lg font-medium">{resume.profile.title}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm">
            {resume.profile.email && <span>{resume.profile.email}</span>}
            {resume.profile.phone && <span>{resume.profile.phone}</span>}
            {resume.profile.location && <span>{resume.profile.location}</span>}
          </div>
        </div>
      )}
      
      {/* Other sections would be included here with professional styling */}
      <div className="text-center text-sm text-muted-foreground mt-4">
        This is the Professional Template - a traditional, corporate-friendly design
      </div>
    </div>
  );
};

export default ProfessionalTemplate;
