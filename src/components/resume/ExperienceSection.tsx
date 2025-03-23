
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Trash2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Experience } from "@/schemas/resume";

interface ExperienceSectionProps {
  experiences: Experience[];
  onChange: (updatedExperiences: Experience[]) => void;
}

const ExperienceSection = ({ experiences, onChange }: ExperienceSectionProps) => {
  const handleAddExperience = () => {
    onChange([
      ...experiences, 
      { 
        title: "", 
        company: "", 
        location: "", 
        startDate: "", 
        endDate: "", 
        description: "" 
      }
    ]);
  };

  const handleRemoveExperience = (index: number) => {
    const updatedExperiences = [...experiences];
    updatedExperiences.splice(index, 1);
    onChange(updatedExperiences);
  };

  const handleExperienceChange = (index: number, field: keyof Experience, value: string) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index] = { ...updatedExperiences[index], [field]: value };
    onChange(updatedExperiences);
  };

  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Work Experience</h2>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Check className="h-3.5 w-3.5 text-green-500" /> 
            Auto-saved
          </div>
        </div>
        <p className="text-sm text-muted-foreground">Add your work history, starting with your most recent position</p>
        
        {experiences.map((experience, index) => (
          <div key={index} className="space-y-4 mt-4 border p-4 rounded-md">
            <div className="flex justify-between items-start">
              <h3 className="font-medium">Position {index + 1}</h3>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => handleRemoveExperience(index)}
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Job Title</Label>
                <Input 
                  value={experience.title}
                  onChange={(e) => handleExperienceChange(index, 'title', e.target.value)}
                  placeholder="Senior Software Engineer"
                />
              </div>
              <div className="space-y-2">
                <Label>Company</Label>
                <Input 
                  value={experience.company}
                  onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                  placeholder="Company Name"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Location</Label>
                <Input 
                  value={experience.location || ''}
                  onChange={(e) => handleExperienceChange(index, 'location', e.target.value)}
                  placeholder="City, State/Country"
                />
              </div>
              <div className="space-y-2">
                <Label>Start Date</Label>
                <Input 
                  value={experience.startDate}
                  onChange={(e) => handleExperienceChange(index, 'startDate', e.target.value)}
                  placeholder="MM/YYYY or Month YYYY"
                />
              </div>
              <div className="space-y-2">
                <Label>End Date</Label>
                <Input 
                  value={experience.endDate || ''}
                  onChange={(e) => handleExperienceChange(index, 'endDate', e.target.value)}
                  placeholder="MM/YYYY or 'Present'"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea 
                value={experience.description || ''}
                onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                placeholder="Describe your responsibilities, achievements, and the skills you utilized"
                rows={4}
              />
            </div>
          </div>
        ))}
        
        <Button 
          variant="outline" 
          className="w-full mt-4" 
          onClick={handleAddExperience}
        >
          + Add Work Experience
        </Button>
      </CardContent>
    </Card>
  );
};

export default ExperienceSection;
