
import React from 'react';

export interface ContentSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  availableSections: string[];
}

const ContentSidebar = ({ activeSection, onSectionChange, availableSections }: ContentSidebarProps) => {
  return (
    <div className="border-r h-full p-4">
      <h2 className="text-lg font-semibold mb-4">Content</h2>
      <div className="space-y-2">
        {availableSections.map((section) => (
          <button
            key={section}
            className={`w-full text-left px-3 py-2 rounded ${
              activeSection === section ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'
            }`}
            onClick={() => onSectionChange(section)}
          >
            {section}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ContentSidebar;
