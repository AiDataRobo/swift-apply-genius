
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

  // Process the resume data to include only visible sections
  const processedResumeData: Resume = {
    ...resumeData,
    // Filter out sections that shouldn't be visible
    sections: sectionOrder.filter(section => visibleSections.includes(section)),
    // Only include custom sections that are in the visible sections
    customSections: resumeData.customSections ? 
      Object.fromEntries(
        Object.entries(resumeData.customSections)
          .filter(([key]) => visibleSections.includes(key))
      ) : {}
  };

  const renderTemplate = () => {
    switch (templateStyle.template) {
      case "modern":
        return <ModernTemplate resume={processedResumeData} style={templateStyle} visibleSections={visibleSections} sectionOrder={sectionOrder} />;
      case "minimal":
        return <MinimalTemplate resume={processedResumeData} style={templateStyle} visibleSections={visibleSections} sectionOrder={sectionOrder} />;
      case "professional":
        return <ProfessionalTemplate resume={processedResumeData} style={templateStyle} visibleSections={visibleSections} sectionOrder={sectionOrder} />;
      case "creative":
        return <CreativeTemplate resume={processedResumeData} style={templateStyle} visibleSections={visibleSections} sectionOrder={sectionOrder} />;
      case "technical":
        return <TechnicalTemplate resume={processedResumeData} style={templateStyle} visibleSections={visibleSections} sectionOrder={sectionOrder} />;
      case "executive":
        return <ExecutiveTemplate resume={processedResumeData} style={templateStyle} visibleSections={visibleSections} sectionOrder={sectionOrder} />;
      case "ats":
        return <AtsTemplate resume={processedResumeData} style={templateStyle} visibleSections={visibleSections} sectionOrder={sectionOrder} />;
      default:
        return <ModernTemplate resume={processedResumeData} style={templateStyle} visibleSections={visibleSections} sectionOrder={sectionOrder} />;
    }
  };

  return (
    <motion.div {...fadeInAnimation}>
      {renderTemplate()}
    </motion.div>
  );
};

export default ResumeTemplate;
