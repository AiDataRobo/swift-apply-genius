
import { Resume, TemplateStyle } from "@/schemas/resume";

interface AtsTemplateProps {
  resume: Resume;
  style: TemplateStyle;
  visibleSections: string[];
}

const AtsTemplate = ({ resume, style, visibleSections }: AtsTemplateProps) => {
  const { 
    primaryColor = "#333333", 
    fontFamily = "Inter",
    fontSize = "medium",
    spacing = "comfortable"
  } = style;
  
  // Simple placeholder for now - in a real implementation this would have unique styling
  return (
    <div className="p-6" style={{ fontFamily }}>
      <div className="text-center text-sm text-muted-foreground mt-4">
        This is the ATS Template - optimized for applicant tracking systems with a simple, clean layout
      </div>
    </div>
  );
};

export default AtsTemplate;
