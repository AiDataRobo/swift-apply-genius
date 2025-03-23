
import { Resume, TemplateStyle } from "@/schemas/resume";
import ModernTemplate from "./ModernTemplate";
import MinimalTemplate from "./MinimalTemplate";
import ProfessionalTemplate from "./ProfessionalTemplate";
import CreativeTemplate from "./CreativeTemplate";
import TechnicalTemplate from "./TechnicalTemplate";
import ExecutiveTemplate from "./ExecutiveTemplate";
import AtsTemplate from "./AtsTemplate";
import { motion } from "framer-motion";

interface ResumeTemplateProps {
  resumeData: Resume;
  templateStyle: TemplateStyle;
  visibleSections: string[];
  sectionOrder: string[];
}

const ResumeTemplate = ({ resumeData, templateStyle, visibleSections, sectionOrder }: ResumeTemplateProps) => {
  const fadeInAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 }
  };

  const renderTemplate = () => {
    switch (templateStyle.template) {
      case "modern":
        return <ModernTemplate resume={resumeData} style={templateStyle} visibleSections={visibleSections} sectionOrder={sectionOrder} />;
      case "minimal":
        return <MinimalTemplate resume={resumeData} style={templateStyle} visibleSections={visibleSections} sectionOrder={sectionOrder} />;
      case "professional":
        return <ProfessionalTemplate resume={resumeData} style={templateStyle} visibleSections={visibleSections} sectionOrder={sectionOrder} />;
      case "creative":
        return <CreativeTemplate resume={resumeData} style={templateStyle} visibleSections={visibleSections} sectionOrder={sectionOrder} />;
      case "technical":
        return <TechnicalTemplate resume={resumeData} style={templateStyle} visibleSections={visibleSections} sectionOrder={sectionOrder} />;
      case "executive":
        return <ExecutiveTemplate resume={resumeData} style={templateStyle} visibleSections={visibleSections} sectionOrder={sectionOrder} />;
      case "ats":
        return <AtsTemplate resume={resumeData} style={templateStyle} visibleSections={visibleSections} sectionOrder={sectionOrder} />;
      default:
        return <ModernTemplate resume={resumeData} style={templateStyle} visibleSections={visibleSections} sectionOrder={sectionOrder} />;
    }
  };

  return (
    <motion.div {...fadeInAnimation}>
      {renderTemplate()}
    </motion.div>
  );
};

export default ResumeTemplate;
