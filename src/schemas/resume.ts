import { z } from "zod";

// Basic schemas
export const contactSchema = z.object({
  name: z.string(),
  title: z.string(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  location: z.string().optional(),
  photo: z.string().optional(),
  linkedin: z.string().optional(),
  website: z.string().optional(),
  summary: z.string().optional()
});

export const skillItemSchema = z.object({
  name: z.string(),
  level: z.number().min(1).max(5).optional()
});

export const skillGroupSchema = z.object({
  category: z.string(),
  items: z.array(skillItemSchema)
});

export const experienceSchema = z.object({
  title: z.string(),
  company: z.string(),
  location: z.string().optional(),
  startDate: z.string(),
  endDate: z.string().optional(),
  current: z.boolean().optional(),
  description: z.string().optional(),
  bullets: z.array(z.string()).optional()
});

export const educationSchema = z.object({
  degree: z.string(),
  institution: z.string(),
  location: z.string().optional(),
  startDate: z.string(),
  endDate: z.string().optional(),
  current: z.boolean().optional(),
  description: z.string().optional(),
  gpa: z.string().optional()
});

export const projectSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  url: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  technologies: z.array(z.string()).optional()
});

export const certificateSchema = z.object({
  title: z.string(),
  issuer: z.string(),
  date: z.string(),
  url: z.string().optional(),
  description: z.string().optional()
});

export const languageSchema = z.object({
  name: z.string(),
  proficiency: z.enum(["Elementary", "Limited", "Professional", "Full Professional", "Native"]).optional()
});

export const interestSchema = z.object({
  name: z.string()
});

export const awardSchema = z.object({
  title: z.string(),
  issuer: z.string(),
  date: z.string(),
  description: z.string().optional()
});

export const organizationSchema = z.object({
  name: z.string(),
  role: z.string(),
  startDate: z.string(),
  endDate: z.string().optional(),
  current: z.boolean().optional(),
  description: z.string().optional()
});

export const publicationSchema = z.object({
  title: z.string(),
  publisher: z.string(),
  date: z.string(),
  url: z.string().optional(),
  description: z.string().optional()
});

export const courseSchema = z.object({
  name: z.string(),
  institution: z.string(),
  date: z.string(),
  credential: z.string().optional(),
  url: z.string().optional()
});

export const referenceSchema = z.object({
  name: z.string(),
  title: z.string(),
  company: z.string(),
  email: z.string().optional(),
  phone: z.string().optional(),
  relationship: z.string().optional()
});

export const declarationSchema = z.object({
  text: z.string(),
  signature: z.string().optional(),
  date: z.string().optional(),
  place: z.string().optional()
});

export const resumeSchema = z.object({
  profile: contactSchema,
  skills: z.array(skillGroupSchema),
  experience: z.array(experienceSchema),
  education: z.array(educationSchema),
  projects: z.array(projectSchema),
  certificates: z.array(certificateSchema),
  languages: z.array(languageSchema).optional(),
  interests: z.array(interestSchema).optional(),
  awards: z.array(awardSchema).optional(),
  organizations: z.array(organizationSchema).optional(),
  publications: z.array(publicationSchema).optional(),
  courses: z.array(courseSchema).optional(),
  references: z.array(referenceSchema).optional(),
  declaration: declarationSchema.optional(),
  sections: z.array(z.string()).optional(),
  customSections: z.record(z.string(), z.array(z.object({
    title: z.string(),
    description: z.string().optional()
  }))).optional()
});

export const templateStyleSchema = z.object({
  template: z.enum(["modern", "minimal", "professional", "creative", "technical", "executive", "ats"]),
  primaryColor: z.string(),
  secondaryColor: z.string(),
  fontFamily: z.string(),
  fontSize: z.enum(["small", "medium", "large"]),
  spacing: z.enum(["compact", "comfortable", "spacious"]),
  showPhoto: z.boolean(),
  darkMode: z.boolean(),
  layout: z.enum(["single", "two-column"]),
  paperSize: z.enum(["a4", "letter", "legal"]).default("a4"),
  borderStyle: z.enum(["none", "simple", "shadow", "double"]).default("none"),
  headerStyle: z.enum(["standard", "centered", "compact", "modern"]).default("standard"),
  sectionHeadingStyle: z.enum(["standard", "underlined", "boxed", "colored"]).default("standard"),
  bulletStyle: z.enum(["disc", "circle", "square", "dash", "arrow"]).default("disc"),
  accentElements: z.enum(["none", "dots", "lines", "shapes", "bars"]).default("none"),
  dateFormat: z.enum(["mmyyyy", "mmyy", "monthyear", "monthyy"]).default("mmyyyy"),
  includePageNumbers: z.boolean().default(false),
  showBorders: z.boolean().default(false),
  roundedCorners: z.boolean().default(false),
  customHeaderImage: z.string().optional(),
  lineHeight: z.enum(["tight", "normal", "relaxed"]).default("normal"),
  textAlign: z.enum(["left", "center", "justified"]).default("left")
});

export type Contact = z.infer<typeof contactSchema>;
export type SkillItem = z.infer<typeof skillItemSchema>;
export type SkillGroup = z.infer<typeof skillGroupSchema>;
export type Experience = z.infer<typeof experienceSchema>;
export type Education = z.infer<typeof educationSchema>;
export type Project = z.infer<typeof projectSchema>;
export type Certificate = z.infer<typeof certificateSchema>;
export type Language = z.infer<typeof languageSchema>;
export type Interest = z.infer<typeof interestSchema>;
export type Award = z.infer<typeof awardSchema>;
export type Organization = z.infer<typeof organizationSchema>;
export type Publication = z.infer<typeof publicationSchema>;
export type Course = z.infer<typeof courseSchema>;
export type Reference = z.infer<typeof referenceSchema>;
export type Declaration = z.infer<typeof declarationSchema>;
export type Resume = z.infer<typeof resumeSchema>;
export type TemplateStyle = z.infer<typeof templateStyleSchema>;
