
import React, { createContext, useContext, useReducer, useState, useRef } from 'react';

// Type definitions
export type ResumeTemplate = 'modern' | 'minimal' | 'professional' | 'creative' | 'technical' | 'executive' | 'ats';

// Action types
type ActionType = 
  | { type: 'UPDATE_SECTION'; section: string; data: any }
  | { type: 'RESET_RESUME' }
  | { type: 'LOAD_RESUME'; data: any };

// Resume state interface
interface ResumeState {
  // Resume sections
  profile: any;
  experience: any[];
  education: any[];
  skills: any[];
  projects?: any[];
  certificates?: any[];
  languages?: any[];
  interests?: any[];
  awards?: any[];
  courses?: any[];
  declaration?: any;
  customSections?: Record<string, any[]>;
}

// Initial state
const initialState: ResumeState = {
  profile: {
    name: '',
    title: '',
    summary: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    linkedin: ''
  },
  experience: [],
  education: [],
  skills: [],
  projects: [],
  certificates: [],
  languages: [],
  interests: [],
  awards: [],
  courses: [],
  declaration: { text: '' },
  customSections: {}
};

// Template style interface
export interface TemplateStyle {
  template: ResumeTemplate;
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  fontSize: 'small' | 'medium' | 'large';
  spacing: 'compact' | 'comfortable' | 'spacious';
  showPhoto: boolean;
  darkMode: boolean;
  layout: 'single' | 'two-column';
  paperSize: 'a4' | 'letter' | 'legal';
  borderStyle: 'none' | 'simple' | 'shadow' | 'double';
  headerStyle: 'standard' | 'centered' | 'compact' | 'modern';
  sectionHeadingStyle: 'standard' | 'underlined' | 'boxed' | 'colored';
  bulletStyle: 'disc' | 'circle' | 'square' | 'dash' | 'arrow';
  accentElements: 'none' | 'dots' | 'lines' | 'shapes' | 'bars';
  dateFormat: 'mmyyyy' | 'mmyy' | 'monthyear' | 'monthyy';
  includePageNumbers: boolean;
  showBorders: boolean;
  roundedCorners: boolean;
  customHeaderImage?: string;
  lineHeight: 'tight' | 'normal' | 'relaxed';
  textAlign: 'left' | 'center' | 'justified';
}

// Default template style
const defaultTemplateStyle: TemplateStyle = {
  template: 'modern',
  primaryColor: '#333333',
  secondaryColor: '#666666',
  fontFamily: 'Inter',
  fontSize: 'medium',
  spacing: 'comfortable',
  showPhoto: false,
  darkMode: false,
  layout: 'single',
  paperSize: 'a4',
  borderStyle: 'none',
  headerStyle: 'standard',
  sectionHeadingStyle: 'standard',
  bulletStyle: 'disc',
  accentElements: 'none',
  dateFormat: 'mmyyyy',
  includePageNumbers: false,
  showBorders: false,
  roundedCorners: false,
  lineHeight: 'normal',
  textAlign: 'left'
};

// Reducer
const resumeReducer = (state: ResumeState, action: ActionType): ResumeState => {
  switch (action.type) {
    case 'UPDATE_SECTION':
      return {
        ...state,
        [action.section]: action.data
      };
    case 'RESET_RESUME':
      return initialState;
    case 'LOAD_RESUME':
      return action.data;
    default:
      return state;
  }
};

// Context interface
export interface ResumeContextType {
  resumeState: ResumeState;
  dispatch: React.Dispatch<ActionType>;
  template: ResumeTemplate;
  setTemplate: React.Dispatch<React.SetStateAction<ResumeTemplate>>;
  // Additional properties needed by components
  resumeData: ResumeState;
  templateStyle: TemplateStyle;
  visibleSections: string[];
  sectionOrder: string[];
  resumeRef: React.RefObject<HTMLDivElement>;
  isExporting: boolean;
  handleDownloadResume: () => void;
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
  showInstructions: boolean;
  toggleInstructions: () => void;
  setSectionOrder: React.Dispatch<React.SetStateAction<string[]>>;
  setVisibleSections: React.Dispatch<React.SetStateAction<string[]>>;
  // Handler functions
  handleProfileChange: (profile: any) => void;
  handleSkillsChange: (skills: any[]) => void;
  handleExperienceChange: (experience: any[]) => void;
  handleEducationChange: (education: any[]) => void;
  handleProjectsChange: (projects: any[]) => void;
  handleCertificatesChange: (certificates: any[]) => void;
  handleLanguagesChange: (languages: any[]) => void;
  handleInterestsChange: (interests: any[]) => void;
  handleDeclarationChange: (declaration: any) => void;
  handleAwardsChange: (awards: any[]) => void;
  handleCoursesChange: (courses: any[]) => void;
  handleCustomSectionChange: (sectionName: string, items: any[]) => void;
}

// Default section order
const defaultSectionOrder = [
  'profile',
  'experience',
  'education',
  'skills',
  'projects',
  'certificates',
  'languages',
  'interests',
  'awards',
  'courses',
  'declaration',
  'sections'
];

// Create context
const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

// Provider component
export const ResumeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [resumeState, dispatch] = useReducer(resumeReducer, initialState);
  const [template, setTemplate] = useState<ResumeTemplate>('modern');
  const [templateStyle, setTemplateStyle] = useState<TemplateStyle>(defaultTemplateStyle);
  const [activeSection, setActiveSection] = useState('profile');
  const [sectionOrder, setSectionOrder] = useState(defaultSectionOrder);
  const [visibleSections, setVisibleSections] = useState(defaultSectionOrder);
  const [isExporting, setIsExporting] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const resumeRef = useRef<HTMLDivElement>(null);

  // Toggle instructions visibility
  const toggleInstructions = () => setShowInstructions(!showInstructions);

  // Handler for resume download
  const handleDownloadResume = async () => {
    setIsExporting(true);
    try {
      // Placeholder for actual PDF generation logic
      console.log('Downloading resume...');
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error('Error downloading resume:', error);
    } finally {
      setIsExporting(false);
    }
  };

  // Section update handlers
  const handleProfileChange = (profile: any) => {
    dispatch({ type: 'UPDATE_SECTION', section: 'profile', data: profile });
  };

  const handleSkillsChange = (skills: any[]) => {
    dispatch({ type: 'UPDATE_SECTION', section: 'skills', data: skills });
  };

  const handleExperienceChange = (experience: any[]) => {
    dispatch({ type: 'UPDATE_SECTION', section: 'experience', data: experience });
  };

  const handleEducationChange = (education: any[]) => {
    dispatch({ type: 'UPDATE_SECTION', section: 'education', data: education });
  };

  const handleProjectsChange = (projects: any[]) => {
    dispatch({ type: 'UPDATE_SECTION', section: 'projects', data: projects });
  };

  const handleCertificatesChange = (certificates: any[]) => {
    dispatch({ type: 'UPDATE_SECTION', section: 'certificates', data: certificates });
  };

  const handleLanguagesChange = (languages: any[]) => {
    dispatch({ type: 'UPDATE_SECTION', section: 'languages', data: languages });
  };

  const handleInterestsChange = (interests: any[]) => {
    dispatch({ type: 'UPDATE_SECTION', section: 'interests', data: interests });
  };

  const handleDeclarationChange = (declaration: any) => {
    dispatch({ type: 'UPDATE_SECTION', section: 'declaration', data: declaration });
  };

  const handleAwardsChange = (awards: any[]) => {
    dispatch({ type: 'UPDATE_SECTION', section: 'awards', data: awards });
  };

  const handleCoursesChange = (courses: any[]) => {
    dispatch({ type: 'UPDATE_SECTION', section: 'courses', data: courses });
  };

  const handleCustomSectionChange = (sectionName: string, items: any[]) => {
    const updatedCustomSections = {
      ...resumeState.customSections,
      [sectionName]: items
    };
    dispatch({
      type: 'UPDATE_SECTION',
      section: 'customSections',
      data: updatedCustomSections
    });
  };

  const value = {
    resumeState,
    dispatch,
    template,
    setTemplate,
    // Additional properties
    resumeData: resumeState,
    templateStyle,
    visibleSections,
    sectionOrder,
    resumeRef,
    isExporting,
    handleDownloadResume,
    activeSection,
    setActiveSection,
    showInstructions,
    toggleInstructions,
    setSectionOrder,
    setVisibleSections,
    // Handler functions
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
  };

  return (
    <ResumeContext.Provider value={value}>
      {children}
    </ResumeContext.Provider>
  );
};

// Custom hook
export const useResumeContext = () => {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error('useResumeContext must be used within a ResumeProvider');
  }
  return context;
};
