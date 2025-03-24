
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Trash2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Reference } from "@/schemas/resume";

interface ReferencesSectionProps {
  references?: Reference[];
  onChange: (updatedReferences: Reference[]) => void;
}

const ReferencesSection = ({ references = [], onChange }: ReferencesSectionProps) => {
  const handleAddReference = () => {
    onChange([...references, { name: "", title: "", company: "" }]);
  };

  const handleRemoveReference = (index: number) => {
    const updatedReferences = [...references];
    updatedReferences.splice(index, 1);
    onChange(updatedReferences);
  };

  const handleReferenceChange = (index: number, field: keyof Reference, value: string) => {
    const updatedReferences = [...references];
    updatedReferences[index] = { ...updatedReferences[index], [field]: value };
    onChange(updatedReferences);
  };

  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">References</h2>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Check className="h-3.5 w-3.5 text-green-500" /> 
            Auto-saved
          </div>
        </div>
        <p className="text-sm text-muted-foreground">Add professional references</p>
        
        {references.map((reference, index) => (
          <div key={index} className="space-y-4 mt-4 border p-4 rounded-md">
            <div className="flex justify-between items-start">
              <h3 className="font-medium">Reference {index + 1}</h3>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => handleRemoveReference(index)}
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Name</Label>
                <Input 
                  value={reference.name}
                  onChange={(e) => handleReferenceChange(index, 'name', e.target.value)}
                  placeholder="Full Name"
                />
              </div>
              <div className="space-y-2">
                <Label>Title</Label>
                <Input 
                  value={reference.title}
                  onChange={(e) => handleReferenceChange(index, 'title', e.target.value)}
                  placeholder="Professional Title"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Company</Label>
                <Input 
                  value={reference.company}
                  onChange={(e) => handleReferenceChange(index, 'company', e.target.value)}
                  placeholder="Company Name"
                />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input 
                  value={reference.email || ''}
                  onChange={(e) => handleReferenceChange(index, 'email', e.target.value)}
                  placeholder="email@example.com"
                  type="email"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Phone (Optional)</Label>
                <Input 
                  value={reference.phone || ''}
                  onChange={(e) => handleReferenceChange(index, 'phone', e.target.value)}
                  placeholder="Phone Number"
                />
              </div>
              <div className="space-y-2">
                <Label>Relationship</Label>
                <Input 
                  value={reference.relationship || ''}
                  onChange={(e) => handleReferenceChange(index, 'relationship', e.target.value)}
                  placeholder="e.g., Former Manager"
                />
              </div>
            </div>
          </div>
        ))}
        
        <Button 
          variant="outline" 
          className="w-full mt-4" 
          onClick={handleAddReference}
        >
          + Add Reference
        </Button>
      </CardContent>
    </Card>
  );
};

export default ReferencesSection;
