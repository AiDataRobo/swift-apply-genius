
import { Resume, TemplateStyle } from "@/schemas/resume";
import ModernTemplate from "./ModernTemplate";
import MinimalTemplate from "./MinimalTemplate";
import ProfessionalTemplate from "./ProfessionalTemplate";
import CreativeTemplate from "./CreativeTemplate";
import TechnicalTemplate from "./TechnicalTemplate";
import ExecutiveTemplate from "./ExecutiveTemplate";
import AtsTemplate from "./AtsTemplate";

interface ResumeTemplateProps {
  resume: Resume;
  style: TemplateStyle;
  visibleSections: string[];
}

const ResumeTemplate = ({ resume, style, visibleSections }: ResumeTemplateProps) => {
  switch (style.template) {
    case "modern":
      return <ModernTemplate resume={resume} style={style} visibleSections={visibleSections} />;
    case "minimal":
      return <MinimalTemplate resume={resume} style={style} visibleSections={visibleSections} />;
    case "professional":
      return <ProfessionalTemplate resume={resume} style={style} visibleSections={visibleSections} />;
    case "creative":
      return <CreativeTemplate resume={resume} style={style} visibleSections={visibleSections} />;
    case "technical":
      return <TechnicalTemplate resume={resume} style={style} visibleSections={visibleSections} />;
    case "executive":
      return <ExecutiveTemplate resume={resume} style={style} visibleSections={visibleSections} />;
    case "ats":
      return <AtsTemplate resume={resume} style={style} visibleSections={visibleSections} />;
    default:
      return <ModernTemplate resume={resume} style={style} visibleSections={visibleSections} />;
  }
};

export default ResumeTemplate;
