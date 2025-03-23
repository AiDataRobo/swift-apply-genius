
import { Resume, TemplateStyle } from "@/schemas/resume";

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
  
  // Simple placeholder for now - in a real implementation this would have unique styling
  return (
    <div className="p-6" style={{ fontFamily }}>
      <div className="text-center text-sm text-muted-foreground mt-4">
        This is the Executive Template - sophisticated design for senior professionals and executives
      </div>
    </div>
  );
};

export default ExecutiveTemplate;
