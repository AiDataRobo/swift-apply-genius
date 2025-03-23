
import { Resume, TemplateStyle } from "@/schemas/resume";
import ModernTemplate from "./ModernTemplate";
import MinimalTemplate from "./MinimalTemplate";
import ProfessionalTemplate from "./ProfessionalTemplate";
import CreativeTemplate from "./CreativeTemplate";
import TechnicalTemplate from "./TechnicalTemplate";
import ExecutiveTemplate from "./ExecutiveTemplate";
import AtsTemplate from "./AtsTemplate";

interface ResumeTemplateProps {
  resumeData: Resume;
  templateStyle: TemplateStyle;
  visibleSections: string[];
  sectionOrder: string[];
}

const ResumeTemplate = ({ resumeData, templateStyle, visibleSections, sectionOrder }: ResumeTemplateProps) => {
  switch (templateStyle.template) {
    case "modern":
      return <ModernTemplate resume={resumeData} style={templateStyle} visibleSections={visibleSections} />;
    case "minimal":
      return <MinimalTemplate resume={resumeData} style={templateStyle} visibleSections={visibleSections} />;
    case "professional":
      return <ProfessionalTemplate resume={resumeData} style={templateStyle} visibleSections={visibleSections} />;
    case "creative":
      return <CreativeTemplate resume={resumeData} style={templateStyle} visibleSections={visibleSections} />;
    case "technical":
      return <TechnicalTemplate resume={resumeData} style={templateStyle} visibleSections={visibleSections} />;
    case "executive":
      return <ExecutiveTemplate resume={resumeData} style={templateStyle} visibleSections={visibleSections} />;
    case "ats":
      return <AtsTemplate resume={resumeData} style={templateStyle} visibleSections={visibleSections} />;
    default:
      return <ModernTemplate resume={resumeData} style={templateStyle} visibleSections={visibleSections} />;
  }
};

export default ResumeTemplate;
