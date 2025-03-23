
import { Resume, TemplateStyle } from "@/schemas/resume";

interface ModernTemplateProps {
  resume: Resume;
  style: TemplateStyle;
  visibleSections: string[];
  sectionOrder: string[];
}

const ModernTemplate = ({ resume, style, visibleSections, sectionOrder }: ModernTemplateProps) => {
  const { 
    primaryColor = "#1a73e8", 
    fontFamily = "Inter",
    fontSize = "medium",
    spacing = "comfortable"
  } = style;
  
  const spacingClass = {
    compact: "space-y-3",
    comfortable: "space-y-5",
    spacious: "space-y-7"
  }[spacing];
  
  const fontSizeClass = {
    small: "text-xs",
    medium: "text-sm",
    large: "text-base"
  }[fontSize];

  // Function to render sections in the order specified by sectionOrder
  const renderSections = () => {
    return sectionOrder
      .filter(section => visibleSections.includes(section))
      .map(section => {
        switch (section) {
          case "profile":
            return visibleSections.includes("profile") && (
              <div key="profile" className="mb-6">
                <h1 className="text-3xl font-bold" style={{ color: primaryColor }}>
                  {resume.profile.name}
                </h1>
                <p className="text-lg text-gray-700">{resume.profile.title}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-gray-600">
                  {resume.profile.email && <span>{resume.profile.email}</span>}
                  {resume.profile.phone && <span>{resume.profile.phone}</span>}
                  {resume.profile.location && <span>{resume.profile.location}</span>}
                  {resume.profile.linkedin && <span>{resume.profile.linkedin}</span>}
                  {resume.profile.website && <span>{resume.profile.website}</span>}
                </div>
                {resume.profile.summary && (
                  <p className={`mt-3 ${fontSizeClass}`}>{resume.profile.summary}</p>
                )}
              </div>
            );
          case "skills":
            return visibleSections.includes("skills") && resume.skills.length > 0 && (
              <div key="skills" className="mb-6">
                <h2 className="text-lg font-semibold mb-2 pb-1 border-b" style={{ color: primaryColor }}>
                  Skills
                </h2>
                {resume.skills.map((skillGroup, i) => (
                  <div key={i} className="mb-2">
                    <h3 className="text-sm font-medium">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {skillGroup.items.map((skill, j) => (
                        <span key={j} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            );
          case "experience":
            return visibleSections.includes("experience") && resume.experience.length > 0 && (
              <div key="experience" className="mb-6">
                <h2 className="text-lg font-semibold mb-2 pb-1 border-b" style={{ color: primaryColor }}>
                  Experience
                </h2>
                {resume.experience.map((job, i) => (
                  <div key={i} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <h3 className="text-sm font-medium">{job.title}</h3>
                      <span className="text-xs text-gray-600">
                        {job.startDate} - {job.endDate || "Present"}
                      </span>
                    </div>
                    <p className="text-xs text-gray-700 mb-1">
                      {job.company}, {job.location}
                    </p>
                    {job.description && <p className={`${fontSizeClass}`}>{job.description}</p>}
                    {job.bullets && job.bullets.length > 0 && (
                      <ul className={`list-disc pl-5 mt-1 ${fontSizeClass}`}>
                        {job.bullets.map((bullet, index) => (
                          <li key={index}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            );
          case "education":
            return visibleSections.includes("education") && resume.education.length > 0 && (
              <div key="education" className="mb-6">
                <h2 className="text-lg font-semibold mb-2 pb-1 border-b" style={{ color: primaryColor }}>
                  Education
                </h2>
                {resume.education.map((edu, i) => (
                  <div key={i} className="mb-3">
                    <div className="flex justify-between mb-1">
                      <h3 className="text-sm font-medium">{edu.degree}</h3>
                      <span className="text-xs text-gray-600">
                        {edu.startDate} - {edu.endDate || "Present"}
                      </span>
                    </div>
                    <p className="text-xs text-gray-700 mb-1">{edu.institution}</p>
                    {edu.description && <p className={`${fontSizeClass}`}>{edu.description}</p>}
                    {edu.gpa && <p className="text-xs">GPA: {edu.gpa}</p>}
                  </div>
                ))}
              </div>
            );
          case "projects":
            return visibleSections.includes("projects") && resume.projects.length > 0 && (
              <div key="projects" className="mb-6">
                <h2 className="text-lg font-semibold mb-2 pb-1 border-b" style={{ color: primaryColor }}>
                  Projects
                </h2>
                {resume.projects.map((project, i) => (
                  <div key={i} className="mb-3">
                    <h3 className="text-sm font-medium">{project.title}</h3>
                    {project.description && <p className={`${fontSizeClass} mb-1`}>{project.description}</p>}
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-1">
                        {project.technologies.map((tech, j) => (
                          <span key={j} className="text-xs px-2 py-0.5 bg-gray-100 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            );
          case "certificates":
            return visibleSections.includes("certificates") && resume.certificates.length > 0 && (
              <div key="certificates" className="mb-6">
                <h2 className="text-lg font-semibold mb-2 pb-1 border-b" style={{ color: primaryColor }}>
                  Certifications
                </h2>
                {resume.certificates.map((cert, i) => (
                  <div key={i} className="mb-2">
                    <div className="flex justify-between">
                      <h3 className="text-sm font-medium">{cert.title}</h3>
                      <span className="text-xs text-gray-600">{cert.date}</span>
                    </div>
                    <p className="text-xs text-gray-700">{cert.issuer}</p>
                    {cert.description && <p className={`${fontSizeClass} mt-1`}>{cert.description}</p>}
                  </div>
                ))}
              </div>
            );
          case "languages":
            return visibleSections.includes("languages") && resume.languages && resume.languages.length > 0 && (
              <div key="languages" className="mb-6">
                <h2 className="text-lg font-semibold mb-2 pb-1 border-b" style={{ color: primaryColor }}>
                  Languages
                </h2>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {resume.languages.map((language, i) => (
                    <div key={i} className="flex items-center">
                      <span className="font-medium text-sm">{language.name}</span>
                      {language.proficiency && (
                        <span className="text-xs text-gray-600 ml-1">({language.proficiency})</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          case "interests":
            return visibleSections.includes("interests") && resume.interests && resume.interests.length > 0 && (
              <div key="interests">
                <h2 className="text-lg font-semibold mb-2 pb-1 border-b" style={{ color: primaryColor }}>
                  Interests
                </h2>
                <div className="flex flex-wrap gap-2">
                  {resume.interests.map((interest, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                      {interest.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          default:
            return null;
        }
      });
  };

  return (
    <div className={spacingClass} style={{ fontFamily }}>
      {renderSections()}
    </div>
  );
};

export default ModernTemplate;
