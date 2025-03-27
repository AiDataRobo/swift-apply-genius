import React, { createContext, useContext, useReducer, useState } from 'react';

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
  // Other sections...
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
  // Initialize other sections...
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
}

// Create context
const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

// Provider component
export const ResumeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [resumeState, dispatch] = useReducer(resumeReducer, initialState);
  const [template, setTemplate] = useState<ResumeTemplate>('modern');

  const value = {
    resumeState,
    dispatch,
    template,
    setTemplate
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
