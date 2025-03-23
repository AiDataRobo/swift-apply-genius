
import { Resume, TemplateStyle } from "@/schemas/resume";

interface AtsTemplateProps {
  resume: Resume;
  style: TemplateStyle;
  visibleSections: string[];
}

const AtsTemplate = ({ resume, style, visibleSections }: AtsTemplateProps) => {
  const { 
    fontFamily = "Arial",
    fontSize = "medium",
    spacing = "comfortable",
    darkMode = false
  } = style;
  
  // Font size based on fontSize setting
  const fontSizeClass = {
    small: "text-xs",
    medium: "text-sm",
    large: "text-base"
  }[fontSize] || "text-sm";
  
  // Spacing based on spacing setting
  const lineHeight = {
    compact: "leading-snug",
    comfortable: "leading-normal",
    spacious: "leading-relaxed"
  }[spacing] || "leading-normal";
  
  return (
    <div 
      className={`w-full ${fontSizeClass} ${lineHeight}`} 
      style={{ 
        fontFamily,
        color: darkMode ? "#e2e8f0" : "#333333"
      }}
    >
      {/* Header - always minimal for ATS */}
      {visibleSections.includes("profile") && (
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-center mb-1">
            {resume.profile.name}
          </h1>
          <p className="text-center mb-2">{resume.profile.title}</p>
          
          <div className="text-center mb-3">
            {resume.profile.email && <span>{resume.profile.email}</span>}
            {resume.profile.phone && <span> | {resume.profile.phone}</span>}
            {resume.profile.location && <span> | {resume.profile.location}</span>}
          </div>
          
          {resume.profile.summary && (
            <div className="mt-4">
              <h2 className="text-lg font-bold mb-1">SUMMARY</h2>
              <p>{resume.profile.summary}</p>
            </div>
          )}
        </div>
      )}
      
      {/* Skills - Plain text for ATS */}
      {visibleSections.includes("skills") && (
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">SKILLS</h2>
          {resume.skills.map((skillGroup, index) => (
            <div key={index} className="mb-2">
              <p><strong>{skillGroup.category}:</strong> {skillGroup.items.map(item => item.name).join(", ")}</p>
            </div>
          ))}
        </div>
      )}
      
      {/* Experience */}
      {visibleSections.includes("experience") && resume.experience && (
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">EXPERIENCE</h2>
          {resume.experience.map((job, index) => (
            <div key={index} className="mb-4">
              <p className="font-bold">{job.title}</p>
              <p>{job.company}, {job.location} ({job.startDate} - {job.endDate || "Present"})</p>
              <p className="mt-1">{job.description}</p>
            </div>
          ))}
        </div>
      )}
      
      {/* Education */}
      {visibleSections.includes("education") && resume.education && (
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">EDUCATION</h2>
          {resume.education.map((edu, index) => (
            <div key={index} className="mb-3">
              <p className="font-bold">{edu.degree}</p>
              <p>{edu.institution} ({edu.startDate} - {edu.endDate || "Present"})</p>
              {edu.description && <p>{edu.description}</p>}
            </div>
          ))}
        </div>
      )}
      
      {/* Projects - Usually important for technical roles */}
      {visibleSections.includes("projects") && resume.projects && (
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">PROJECTS</h2>
          {resume.projects.map((project, index) => (
            <div key={index} className="mb-3">
              <p className="font-bold">{project.title}</p>
              <p>{project.description}</p>
              {project.technologies && <p><strong>Technologies:</strong> {project.technologies.join(", ")}</p>}
            </div>
          ))}
        </div>
      )}
      
      {/* Certificates */}
      {visibleSections.includes("certificates") && resume.certificates && (
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">CERTIFICATIONS</h2>
          {resume.certificates.map((cert, index) => (
            <div key={index} className="mb-1">
              <p>{cert.title} - {cert.issuer} ({cert.date})</p>
            </div>
          ))}
        </div>
      )}
      
      {/* Languages */}
      {visibleSections.includes("languages") && resume.languages && (
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">LANGUAGES</h2>
          <p>{resume.languages.map(lang => `${lang.name} (${lang.proficiency})`).join(", ")}</p>
        </div>
      )}
      
      {/* Interests - Simple for ATS */}
      {visibleSections.includes("interests") && resume.interests && (
        <div>
          <h2 className="text-lg font-bold mb-2">INTERESTS</h2>
          <p>{resume.interests.map(interest => interest.name).join(", ")}</p>
        </div>
      )}
    </div>
  );
};

export default AtsTemplate;
