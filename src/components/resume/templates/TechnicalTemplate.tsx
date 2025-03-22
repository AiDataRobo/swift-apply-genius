
import { Resume, TemplateStyle } from "@/schemas/resume";

interface TechnicalTemplateProps {
  resume: Resume;
  style: TemplateStyle;
  visibleSections: string[];
}

const TechnicalTemplate = ({ resume, style, visibleSections }: TechnicalTemplateProps) => {
  const { 
    primaryColor = "#0ea5e9", 
    fontFamily = "Inter",
    fontSize = "medium",
    spacing = "comfortable"
  } = style;
  
  // Simple placeholder for now - in a real implementation this would have unique styling
  return (
    <div className="p-6" style={{ fontFamily }}>
      <div className="text-center text-sm text-muted-foreground mt-4">
        This is the Technical Template - design optimized for developers and engineers
      </div>
    </div>
  );
};

export default TechnicalTemplate;
