
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

// Resume schema
export const resumeSchema = z.object({
  profile: contactSchema,
  skills: z.array(skillGroupSchema),
  experience: z.array(experienceSchema),
  education: z.array(educationSchema),
  projects: z.array(projectSchema),
  certificates: z.array(certificateSchema),
  languages: z.array(languageSchema).optional(),
  interests: z.array(interestSchema).optional(),
  sections: z.array(z.string()).optional(),
  customSections: z.record(z.string(), z.array(z.object({
    title: z.string(),
    description: z.string().optional()
  }))).optional()
});

export const templateStyleSchema = z.object({
  template: z.enum(["modern", "minimal", "professional", "creative", "executive", "technical", "ats"]),
  primaryColor: z.string(),
  secondaryColor: z.string().optional(),
  fontFamily: z.string(),
  fontSize: z.enum(["small", "medium", "large"]),
  spacing: z.enum(["compact", "comfortable", "spacious"]),
  showPhoto: z.boolean().optional(),
  darkMode: z.boolean().optional(),
  layout: z.enum(["single", "two-column", "mixed"]).optional(),
  sectionOrder: z.array(z.string()).optional()
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
export type Resume = z.infer<typeof resumeSchema>;
export type TemplateStyle = z.infer<typeof templateStyleSchema>;
