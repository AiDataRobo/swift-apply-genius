
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Language } from "@/schemas/resume";

interface LanguagesSectionProps {
  languages: Language[];
  onChange: (languages: Language[]) => void;
}

const proficiencyLevels = [
  "Elementary",
  "Limited", 
  "Professional", 
  "Full Professional", 
  "Native"
];

const LanguagesSection = ({ languages, onChange }: LanguagesSectionProps) => {
  const handleAddLanguage = () => {
    onChange([...languages, { name: "" }]);
  };

  const handleRemoveLanguage = (index: number) => {
    const updatedLanguages = [...languages];
    updatedLanguages.splice(index, 1);
    onChange(updatedLanguages);
  };

  const handleLanguageChange = (index: number, field: keyof Language, value: string) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index] = { ...updatedLanguages[index], [field]: value };
    onChange(updatedLanguages);
  };

  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <h2 className="text-xl font-semibold">Languages</h2>
        <p className="text-sm text-muted-foreground">Add languages you speak and your proficiency level</p>
        
        {languages.map((language, index) => (
          <div key={index} className="space-y-4 mt-4 border p-4 rounded-md">
            <div className="flex justify-between items-center gap-4">
              <div className="flex-1">
                <label className="text-sm font-medium mb-1 block">Language</label>
                <Input 
                  value={language.name}
                  onChange={(e) => handleLanguageChange(index, "name", e.target.value)}
                  placeholder="e.g., English, Spanish, French"
                />
              </div>
              <div className="flex-1">
                <label className="text-sm font-medium mb-1 block">Proficiency</label>
                <Select 
                  value={language.proficiency} 
                  onValueChange={(value) => handleLanguageChange(index, "proficiency", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select proficiency" />
                  </SelectTrigger>
                  <SelectContent>
                    {proficiencyLevels.map((level) => (
                      <SelectItem key={level} value={level}>{level}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button 
                variant="ghost" 
                size="icon"
                className="mt-6"
                onClick={() => handleRemoveLanguage(index)}
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>
          </div>
        ))}
        
        <Button 
          variant="outline" 
          className="w-full mt-4" 
          onClick={handleAddLanguage}
        >
          + Add Language
        </Button>
      </CardContent>
    </Card>
  );
};

export default LanguagesSection;
