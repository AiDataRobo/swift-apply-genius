
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Trash2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Publication } from "@/schemas/resume";

interface PublicationsSectionProps {
  publications?: Publication[];
  onChange: (updatedPublications: Publication[]) => void;
}

const PublicationsSection = ({ publications = [], onChange }: PublicationsSectionProps) => {
  const handleAddPublication = () => {
    onChange([...publications, { title: "", publisher: "", date: "" }]);
  };

  const handleRemovePublication = (index: number) => {
    const updatedPublications = [...publications];
    updatedPublications.splice(index, 1);
    onChange(updatedPublications);
  };

  const handlePublicationChange = (index: number, field: keyof Publication, value: string) => {
    const updatedPublications = [...publications];
    updatedPublications[index] = { ...updatedPublications[index], [field]: value };
    onChange(updatedPublications);
  };

  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Publications</h2>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Check className="h-3.5 w-3.5 text-green-500" /> 
            Auto-saved
          </div>
        </div>
        <p className="text-sm text-muted-foreground">Add your published works, articles, or papers</p>
        
        {publications.map((pub, index) => (
          <div key={index} className="space-y-4 mt-4 border p-4 rounded-md">
            <div className="flex justify-between items-start">
              <h3 className="font-medium">Publication {index + 1}</h3>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => handleRemovePublication(index)}
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>
            
            <div className="space-y-2">
              <Label>Title</Label>
              <Input 
                value={pub.title}
                onChange={(e) => handlePublicationChange(index, 'title', e.target.value)}
                placeholder="Publication Title"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Publisher</Label>
                <Input 
                  value={pub.publisher}
                  onChange={(e) => handlePublicationChange(index, 'publisher', e.target.value)}
                  placeholder="Publisher/Journal Name"
                />
              </div>
              <div className="space-y-2">
                <Label>Publication Date</Label>
                <Input 
                  value={pub.date}
                  onChange={(e) => handlePublicationChange(index, 'date', e.target.value)}
                  placeholder="MM/YYYY"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>URL (Optional)</Label>
                <Input 
                  value={pub.url || ''}
                  onChange={(e) => handlePublicationChange(index, 'url', e.target.value)}
                  placeholder="https://"
                />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea 
                  value={pub.description || ''}
                  onChange={(e) => handlePublicationChange(index, 'description', e.target.value)}
                  placeholder="Brief description of the publication"
                  className="h-20"
                />
              </div>
            </div>
          </div>
        ))}
        
        <Button 
          variant="outline" 
          className="w-full mt-4" 
          onClick={handleAddPublication}
        >
          + Add Publication
        </Button>
      </CardContent>
    </Card>
  );
};

export default PublicationsSection;
