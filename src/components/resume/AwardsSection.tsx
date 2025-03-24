
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Trash2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Award } from "@/schemas/resume";

interface AwardsSectionProps {
  awards?: Award[];
  onChange: (updatedAwards: Award[]) => void;
}

const AwardsSection = ({ awards = [], onChange }: AwardsSectionProps) => {
  const handleAddAward = () => {
    onChange([...awards, { title: "", issuer: "", date: "" }]);
  };

  const handleRemoveAward = (index: number) => {
    const updatedAwards = [...awards];
    updatedAwards.splice(index, 1);
    onChange(updatedAwards);
  };

  const handleAwardChange = (index: number, field: keyof Award, value: string) => {
    const updatedAwards = [...awards];
    updatedAwards[index] = { ...updatedAwards[index], [field]: value };
    onChange(updatedAwards);
  };

  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Awards & Achievements</h2>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Check className="h-3.5 w-3.5 text-green-500" /> 
            Auto-saved
          </div>
        </div>
        <p className="text-sm text-muted-foreground">Add awards, honors, or recognition you've received</p>
        
        {awards.map((award, index) => (
          <div key={index} className="space-y-4 mt-4 border p-4 rounded-md">
            <div className="flex justify-between items-start">
              <h3 className="font-medium">Award {index + 1}</h3>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => handleRemoveAward(index)}
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Award Title</Label>
                <Input 
                  value={award.title}
                  onChange={(e) => handleAwardChange(index, 'title', e.target.value)}
                  placeholder="Employee of the Year"
                />
              </div>
              <div className="space-y-2">
                <Label>Issuing Organization</Label>
                <Input 
                  value={award.issuer}
                  onChange={(e) => handleAwardChange(index, 'issuer', e.target.value)}
                  placeholder="Company/Institution Name"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Date Received</Label>
                <Input 
                  value={award.date}
                  onChange={(e) => handleAwardChange(index, 'date', e.target.value)}
                  placeholder="MM/YYYY"
                />
              </div>
              <div className="space-y-2">
                <Label>Description (Optional)</Label>
                <Textarea 
                  value={award.description || ''}
                  onChange={(e) => handleAwardChange(index, 'description', e.target.value)}
                  placeholder="Brief description of the award and its significance"
                  className="h-20"
                />
              </div>
            </div>
          </div>
        ))}
        
        <Button 
          variant="outline" 
          className="w-full mt-4" 
          onClick={handleAddAward}
        >
          + Add Award
        </Button>
      </CardContent>
    </Card>
  );
};

export default AwardsSection;
