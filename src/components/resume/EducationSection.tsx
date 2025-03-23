
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Trash2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Education } from "@/schemas/resume";

interface EducationSectionProps {
  education: Education[];
  onChange: (updatedEducation: Education[]) => void;
}

const EducationSection = ({ education, onChange }: EducationSectionProps) => {
  const handleAddEducation = () => {
    onChange([
      ...education, 
      { 
        degree: "", 
        institution: "", 
        startDate: "", 
        endDate: "" 
      }
    ]);
  };

  const handleRemoveEducation = (index: number) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    onChange(updatedEducation);
  };

  const handleEducationChange = (index: number, field: keyof Education, value: string) => {
    const updatedEducation = [...education];
    updatedEducation[index] = { ...updatedEducation[index], [field]: value };
    onChange(updatedEducation);
  };

  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Education</h2>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Check className="h-3.5 w-3.5 text-green-500" /> 
            Auto-saved
          </div>
        </div>
        <p className="text-sm text-muted-foreground">Add your educational background</p>
        
        {education.map((edu, index) => (
          <div key={index} className="space-y-4 mt-4 border p-4 rounded-md">
            <div className="flex justify-between items-start">
              <h3 className="font-medium">Education {index + 1}</h3>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => handleRemoveEducation(index)}
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Degree/Certification</Label>
                <Input 
                  value={edu.degree}
                  onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                  placeholder="Bachelor of Science in Computer Science"
                />
              </div>
              <div className="space-y-2">
                <Label>Institution</Label>
                <Input 
                  value={edu.institution}
                  onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                  placeholder="University Name"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Location</Label>
                <Input 
                  value={edu.location || ''}
                  onChange={(e) => handleEducationChange(index, 'location', e.target.value)}
                  placeholder="City, State/Country"
                />
              </div>
              <div className="space-y-2">
                <Label>Start Date</Label>
                <Input 
                  value={edu.startDate}
                  onChange={(e) => handleEducationChange(index, 'startDate', e.target.value)}
                  placeholder="YYYY"
                />
              </div>
              <div className="space-y-2">
                <Label>End Date</Label>
                <Input 
                  value={edu.endDate || ''}
                  onChange={(e) => handleEducationChange(index, 'endDate', e.target.value)}
                  placeholder="YYYY or 'Present'"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea 
                value={edu.description || ''}
                onChange={(e) => handleEducationChange(index, 'description', e.target.value)}
                placeholder="Add details like GPA, honors, relevant coursework, etc."
                rows={4}
              />
            </div>
          </div>
        ))}
        
        <Button 
          variant="outline" 
          className="w-full mt-4" 
          onClick={handleAddEducation}
        >
          + Add Education
        </Button>
      </CardContent>
    </Card>
  );
};

export default EducationSection;
