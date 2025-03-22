
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Interest } from "@/schemas/resume";

interface InterestsSectionProps {
  interests: Interest[];
  onChange: (interests: Interest[]) => void;
}

const InterestsSection = ({ interests, onChange }: InterestsSectionProps) => {
  const handleAddInterest = () => {
    onChange([...interests, { name: "" }]);
  };

  const handleRemoveInterest = (index: number) => {
    const updatedInterests = [...interests];
    updatedInterests.splice(index, 1);
    onChange(updatedInterests);
  };

  const handleInterestChange = (index: number, value: string) => {
    const updatedInterests = [...interests];
    updatedInterests[index] = { name: value };
    onChange(updatedInterests);
  };

  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <h2 className="text-xl font-semibold">Interests & Hobbies</h2>
        <p className="text-sm text-muted-foreground">Share your personal interests to add personality to your resume</p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {interests.map((interest, index) => (
            <div key={index} className="flex items-center gap-1 bg-secondary px-3 py-1.5 rounded-full">
              <Input 
                className="border-0 bg-transparent p-0 h-auto w-auto min-w-0 focus-visible:ring-0"
                value={interest.name}
                onChange={(e) => handleInterestChange(index, e.target.value)}
                placeholder="Add interest"
              />
              <button 
                type="button" 
                onClick={() => handleRemoveInterest(index)}
                className="text-muted-foreground hover:text-destructive"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
          <button 
            type="button"
            onClick={handleAddInterest}
            className="flex items-center gap-1 border border-dashed px-3 py-1.5 rounded-full text-sm text-muted-foreground hover:text-foreground"
          >
            <Plus className="h-3.5 w-3.5" />
            Add Interest
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default InterestsSection;
