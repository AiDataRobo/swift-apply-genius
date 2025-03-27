
import React from 'react';

export interface DesignSidebarProps {
  templateStyle: any;
  onStyleChange: (style: any) => void;
}

const DesignSidebar = ({ templateStyle, onStyleChange }: DesignSidebarProps) => {
  return (
    <div className="border-r h-full p-4">
      <h2 className="text-lg font-semibold mb-4">Design</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium mb-2">Font Family</h3>
          <select
            value={templateStyle.fontFamily}
            onChange={(e) => onStyleChange({ ...templateStyle, fontFamily: e.target.value })}
            className="w-full p-2 border rounded"
          >
            <option value="Inter">Inter</option>
            <option value="Roboto">Roboto</option>
            <option value="Poppins">Poppins</option>
          </select>
        </div>
        
        <div>
          <h3 className="text-sm font-medium mb-2">Color</h3>
          <input
            type="color"
            value={templateStyle.color}
            onChange={(e) => onStyleChange({ ...templateStyle, color: e.target.value })}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default DesignSidebar;
