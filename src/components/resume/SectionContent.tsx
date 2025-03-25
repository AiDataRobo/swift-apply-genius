
import React from "react";
import { useResumeContext } from "@/contexts/ResumeContext";
import ProfileSection from "@/components/resume/ProfileSection";
import SkillsSection from "@/components/resume/SkillsSection";
import ExperienceSection from "@/components/resume/ExperienceSection";
import EducationSection from "@/components/resume/EducationSection";
import ProjectsSection from "@/components/resume/ProjectsSection";
import CertificatesSection from "@/components/resume/CertificatesSection";
import LanguagesSection from "@/components/resume/LanguagesSection";
import InterestsSection from "@/components/resume/InterestsSection";
import SectionReorder from "@/components/resume/SectionReorder";
import DeclarationSection from "@/components/resume/DeclarationSection";
import AwardsSection from "@/components/resume/AwardsSection";
import CoursesSection from "@/components/resume/CoursesSection";
import CustomSection from "@/components/resume/CustomSection";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const SectionContent: React.FC = () => {
  const { 
    activeSection, 
    sectionOrder, 
    setActiveSection, 
    resumeData,
    showInstructions,
    toggleInstructions,
    handleProfileChange,
    handleSkillsChange,
    handleExperienceChange,
    handleEducationChange,
    handleProjectsChange,
    handleCertificatesChange, 
    handleLanguagesChange,
    handleInterestsChange,
    handleDeclarationChange,
    handleAwardsChange,
    handleCoursesChange,
    handleCustomSectionChange
  } = useResumeContext();

  const renderSectionContent = () => {
    switch (activeSection) {
      case "profile":
        return (
          <ProfileSection 
            profile={resumeData.profile}
            onChange={handleProfileChange}
          />
        );
      case "skills":
        return (
          <SkillsSection
            skills={resumeData.skills}
            onChange={handleSkillsChange}
          />
        );
      case "experience":
        return (
          <ExperienceSection
            experiences={resumeData.experience}
            onChange={handleExperienceChange}
          />
        );
      case "education":
        return (
          <EducationSection
            education={resumeData.education}
            onChange={handleEducationChange}
          />
        );
      case "projects":
        return (
          <ProjectsSection
            projects={resumeData.projects}
            onChange={handleProjectsChange}
          />
        );
      case "certificates":
        return (
          <CertificatesSection
            certificates={resumeData.certificates}
            onChange={handleCertificatesChange}
          />
        );
      case "languages":
        return (
          <LanguagesSection
            languages={resumeData.languages || []}
            onChange={handleLanguagesChange}
          />
        );
      case "interests":
        return (
          <InterestsSection
            interests={resumeData.interests || []}
            onChange={handleInterestsChange}
          />
        );
      case "awards":
        return (
          <AwardsSection
            awards={resumeData.awards || []}
            onChange={handleAwardsChange}
          />
        );
      case "courses":
        return (
          <CoursesSection
            courses={resumeData.courses || []}
            onChange={handleCoursesChange}
          />
        );
      case "declaration":
        return (
          <DeclarationSection
            declaration={resumeData.declaration}
            onChange={handleDeclarationChange}
          />
        );
      case "sections":
        return (
          <SectionReorder />
        );
      default:
        if (resumeData.customSections && resumeData.customSections[activeSection]) {
          return (
            <CustomSection
              sectionName={activeSection}
              items={resumeData.customSections[activeSection]}
              onChange={(items) => handleCustomSectionChange(activeSection, items)}
            />
          );
        }
        return null;
    }
  };

  const renderTips = () => {
    if (!showInstructions) return null;
    
    return (
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6 text-sm"
      >
        <div className="flex items-start gap-3">
          <Sparkles className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium text-blue-700">Resume Building Tips</h3>
            {activeSection === "profile" && (
              <p className="text-blue-600 mt-1">Use a professional summary that highlights your key strengths and career goals in 2-3 sentences.</p>
            )}
            {activeSection === "skills" && (
              <p className="text-blue-600 mt-1">Group similar skills and prioritize those most relevant to the job you're applying for.</p>
            )}
            {activeSection === "experience" && (
              <p className="text-blue-600 mt-1">Use action verbs and quantify achievements with numbers when possible (e.g., "Increased sales by 20%").</p>
            )}
            {activeSection === "education" && (
              <p className="text-blue-600 mt-1">List your most recent education first, and include relevant coursework or academic achievements.</p>
            )}
            {activeSection === "projects" && (
              <p className="text-blue-600 mt-1">Highlight projects that demonstrate your skills and are relevant to your target position.</p>
            )}
            {activeSection === "certificates" && (
              <p className="text-blue-600 mt-1">Include the date of certification and any expiration dates if applicable.</p>
            )}
            {activeSection === "languages" && (
              <p className="text-blue-600 mt-1">Be honest about your proficiency level for each language you list.</p>
            )}
            {activeSection === "interests" && (
              <p className="text-blue-600 mt-1">Include interests that demonstrate valuable soft skills or align with company culture.</p>
            )}
            {activeSection === "awards" && (
              <p className="text-blue-600 mt-1">Showcase awards that highlight your achievements and recognition in your field.</p>
            )}
            {activeSection === "courses" && (
              <p className="text-blue-600 mt-1">List relevant courses that have enhanced your skills or knowledge in your profession.</p>
            )}
            {activeSection === "declaration" && (
              <p className="text-blue-600 mt-1">Keep your declaration concise and professional, typically stating the information provided is accurate.</p>
            )}
            {activeSection === "sections" && (
              <p className="text-blue-600 mt-1">Arrange sections in order of relevance to the position you're applying for.</p>
            )}
            {resumeData.customSections && resumeData.customSections[activeSection] && (
              <p className="text-blue-600 mt-1">Customize this section to highlight additional qualifications relevant to your target job.</p>
            )}
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-5 w-5 text-blue-500" 
            onClick={toggleInstructions}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="h-full overflow-y-auto p-6 relative">
      <AnimatePresence>
        {renderTips()}
      </AnimatePresence>

      {renderSectionContent()}

      <div className="flex justify-between mt-8">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            const currentIndex = sectionOrder.indexOf(activeSection);
            if (currentIndex > 0) {
              setActiveSection(sectionOrder[currentIndex - 1]);
            }
          }}
          disabled={sectionOrder.indexOf(activeSection) === 0 || activeSection === "sections"}
          className="flex items-center gap-1"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous Section
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            const currentIndex = sectionOrder.indexOf(activeSection);
            if (currentIndex < sectionOrder.length - 1) {
              setActiveSection(sectionOrder[currentIndex + 1]);
            }
          }}
          disabled={sectionOrder.indexOf(activeSection) === sectionOrder.length - 1 || activeSection === "sections"}
          className="flex items-center gap-1"
        >
          Next Section
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default SectionContent;
