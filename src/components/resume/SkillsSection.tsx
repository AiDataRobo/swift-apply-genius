
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Plus, Trash2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { SkillGroup, SkillItem } from "@/schemas/resume";

interface SkillsSectionProps {
  skills: SkillGroup[];
  onChange: (updatedSkills: SkillGroup[]) => void;
}

const SkillsSection = ({ skills, onChange }: SkillsSectionProps) => {
  const handleAddCategory = () => {
    onChange([...skills, { category: "", items: [] }]);
  };

  const handleRemoveCategory = (index: number) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    onChange(updatedSkills);
  };

  const handleCategoryChange = (index: number, value: string) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = { ...updatedSkills[index], category: value };
    onChange(updatedSkills);
  };

  const handleAddSkill = (categoryIndex: number) => {
    const updatedSkills = [...skills];
    updatedSkills[categoryIndex].items = [
      ...updatedSkills[categoryIndex].items,
      { name: "" }
    ];
    onChange(updatedSkills);
  };

  const handleRemoveSkill = (categoryIndex: number, skillIndex: number) => {
    const updatedSkills = [...skills];
    updatedSkills[categoryIndex].items.splice(skillIndex, 1);
    onChange(updatedSkills);
  };

  const handleSkillChange = (categoryIndex: number, skillIndex: number, value: string) => {
    const updatedSkills = [...skills];
    updatedSkills[categoryIndex].items[skillIndex] = { name: value };
    onChange(updatedSkills);
  };

  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Skills</h2>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Check className="h-3.5 w-3.5 text-green-500" /> 
            Auto-saved
          </div>
        </div>
        <p className="text-sm text-muted-foreground">Highlight your technical and professional skills</p>
        
        {skills.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-4 mt-4 border p-4 rounded-md">
            <div className="flex justify-between items-center gap-4">
              <div className="flex-1">
                <Label className="mb-2 block">Skill Category</Label>
                <Input 
                  value={category.category}
                  onChange={(e) => handleCategoryChange(categoryIndex, e.target.value)}
                  placeholder="e.g., Programming Languages, Tools, Soft Skills"
                />
              </div>
              <Button 
                variant="ghost" 
                size="icon"
                className="mt-7"
                onClick={() => handleRemoveCategory(categoryIndex)}
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>
            
            <div className="space-y-2">
              <Label className="mb-2 block">Skills</Label>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-1 bg-secondary px-3 py-1.5 rounded-full">
                    <Input 
                      className="border-0 bg-transparent p-0 h-auto w-auto min-w-0 focus-visible:ring-0"
                      value={skill.name}
                      onChange={(e) => handleSkillChange(categoryIndex, skillIndex, e.target.value)}
                      placeholder="Add skill"
                    />
                    <button 
                      type="button" 
                      onClick={() => handleRemoveSkill(categoryIndex, skillIndex)}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
                <button 
                  type="button"
                  onClick={() => handleAddSkill(categoryIndex)}
                  className="flex items-center gap-1 border border-dashed px-3 py-1.5 rounded-full text-sm text-muted-foreground hover:text-foreground"
                >
                  <Plus className="h-3.5 w-3.5" />
                  Add Skill
                </button>
              </div>
            </div>
          </div>
        ))}
        
        <Button 
          variant="outline" 
          className="w-full mt-4" 
          onClick={handleAddCategory}
        >
          + Add Skill Category
        </Button>
      </CardContent>
    </Card>
  );
};

export default SkillsSection;
