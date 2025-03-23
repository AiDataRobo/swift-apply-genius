
import { Resume, TemplateStyle } from "@/schemas/resume";
import { Badge } from "@/components/ui/badge";

interface TechnicalTemplateProps {
  resume: Resume;
  style: TemplateStyle;
  visibleSections: string[];
  sectionOrder: string[];
}

const TechnicalTemplate = ({ resume, style, visibleSections, sectionOrder }: TechnicalTemplateProps) => {
  const { 
    primaryColor = "#0ea5e9", 
    fontFamily = "Inter",
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
  const sectionSpacing = {
    compact: "mb-3",
    comfortable: "mb-5",
    spacious: "mb-7"
  }[spacing] || "mb-5";
  
  return (
    <div 
      className={`w-full ${fontSizeClass}`} 
      style={{ 
        fontFamily,
        color: darkMode ? "#e2e8f0" : "#334155"
      }}
    >
      {/* Header */}
      {visibleSections.includes("profile") && (
        <div className={`${sectionSpacing}`}>
          <h1 className="text-2xl font-bold mb-1" style={{ color: primaryColor }}>
            {resume.profile.name}
          </h1>
          <p className="text-lg mb-2">{resume.profile.title}</p>
          
          <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2 text-sm">
            {resume.profile.email && (
              <span className="flex items-center gap-1">
                <span>📧</span> {resume.profile.email}
              </span>
            )}
            {resume.profile.phone && (
              <span className="flex items-center gap-1">
                <span>📱</span> {resume.profile.phone}
              </span>
            )}
            {resume.profile.location && (
              <span className="flex items-center gap-1">
                <span>📍</span> {resume.profile.location}
              </span>
            )}
            {resume.profile.website && (
              <span className="flex items-center gap-1">
                <span>🌐</span> {resume.profile.website}
              </span>
            )}
            {resume.profile.linkedin && (
              <span className="flex items-center gap-1">
                <span>💼</span> {resume.profile.linkedin}
              </span>
            )}
          </div>
          
          {resume.profile.summary && (
            <p className="mt-3">{resume.profile.summary}</p>
          )}
        </div>
      )}
      
      {/* Technical Skills */}
      {visibleSections.includes("skills") && (
        <div className={`${sectionSpacing}`}>
          <h2 className="text-lg font-semibold mb-2 pb-1 border-b" style={{ color: primaryColor, borderColor: primaryColor }}>
            Technical Skills
          </h2>
          <div className="space-y-2">
            {resume.skills.map((skillGroup, index) => (
              <div key={index}>
                <h3 className="font-medium">{skillGroup.category}:</h3>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline"
                      className="rounded-md py-0.5 font-normal"
                      style={{ 
                        borderColor: `${primaryColor}40`, 
                        backgroundColor: `${primaryColor}10`
                      }}
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Work Experience */}
      {visibleSections.includes("experience") && resume.experience && (
        <div className={`${sectionSpacing}`}>
          <h2 className="text-lg font-semibold mb-2 pb-1 border-b" style={{ color: primaryColor, borderColor: primaryColor }}>
            Professional Experience
          </h2>
          <div className="space-y-4">
            {resume.experience.map((job, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <h3 className="font-medium">{job.title}</h3>
                  <span className="text-xs opacity-80">
                    {job.startDate} - {job.endDate || "Present"}
                  </span>
                </div>
                <div className="flex items-baseline justify-between">
                  <p>{job.company}{job.location ? `, ${job.location}` : ''}</p>
                </div>
                <p className="mt-1 text-sm opacity-90">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Projects */}
      {visibleSections.includes("projects") && resume.projects && (
        <div className={`${sectionSpacing}`}>
          <h2 className="text-lg font-semibold mb-2 pb-1 border-b" style={{ color: primaryColor, borderColor: primaryColor }}>
            Projects
          </h2>
          <div className="space-y-3">
            {resume.projects.map((project, index) => (
              <div key={index}>
                <h3 className="font-medium">{project.title}</h3>
                <p className="text-sm mt-1 opacity-90">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-1 mt-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Education */}
      {visibleSections.includes("education") && resume.education && (
        <div className={`${sectionSpacing}`}>
          <h2 className="text-lg font-semibold mb-2 pb-1 border-b" style={{ color: primaryColor, borderColor: primaryColor }}>
            Education
          </h2>
          <div className="space-y-3">
            {resume.education.map((edu, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <h3 className="font-medium">{edu.degree}</h3>
                  <span className="text-xs opacity-80">
                    {edu.startDate} - {edu.endDate || "Present"}
                  </span>
                </div>
                <p>{edu.institution}</p>
                {edu.description && (
                  <p className="mt-1 text-sm opacity-90">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Certificates */}
      {visibleSections.includes("certificates") && resume.certificates && (
        <div className={`${sectionSpacing}`}>
          <h2 className="text-lg font-semibold mb-2 pb-1 border-b" style={{ color: primaryColor, borderColor: primaryColor }}>
            Certifications
          </h2>
          <div className="space-y-2">
            {resume.certificates.map((cert, index) => (
              <div key={index} className="flex justify-between">
                <span className="font-medium">{cert.title}</span>
                <span className="text-xs opacity-80">{cert.issuer}, {cert.date}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Languages */}
      {visibleSections.includes("languages") && resume.languages && (
        <div className={`${sectionSpacing}`}>
          <h2 className="text-lg font-semibold mb-2 pb-1 border-b" style={{ color: primaryColor, borderColor: primaryColor }}>
            Languages
          </h2>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {resume.languages.map((lang, index) => (
              <div key={index} className="flex items-center">
                <span className="font-medium">{lang.name}</span>
                <span className="mx-1">-</span>
                <span className="opacity-80">{lang.proficiency}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Interests */}
      {visibleSections.includes("interests") && resume.interests && (
        <div>
          <h2 className="text-lg font-semibold mb-2 pb-1 border-b" style={{ color: primaryColor, borderColor: primaryColor }}>
            Interests
          </h2>
          <div className="flex flex-wrap gap-2">
            {resume.interests.map((interest, index) => (
              <Badge 
                key={index}
                variant="outline" 
                className="rounded-md"
                style={{ borderColor: `${primaryColor}30` }}
              >
                {interest.name}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TechnicalTemplate;
