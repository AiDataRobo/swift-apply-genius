
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Trash2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface CustomSectionItem {
  title: string;
  description?: string;
}

interface CustomSectionProps {
  sectionName: string;
  items: CustomSectionItem[];
  onChange: (items: CustomSectionItem[]) => void;
}

const CustomSection = ({ sectionName, items = [], onChange }: CustomSectionProps) => {
  const handleAddItem = () => {
    onChange([...items, { title: "", description: "" }]);
  };

  const handleRemoveItem = (index: number) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    onChange(updatedItems);
  };

  const handleItemChange = (index: number, field: keyof CustomSectionItem, value: string) => {
    const updatedItems = [...items];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    onChange(updatedItems);
  };

  // Format section name for display (capitalize first letter of each word)
  const formattedSectionName = sectionName
    .split(/[_\s]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">{formattedSectionName}</h2>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Check className="h-3.5 w-3.5 text-green-500" /> 
            Auto-saved
          </div>
        </div>
        <p className="text-sm text-muted-foreground">Add items to your {formattedSectionName.toLowerCase()} section</p>
        
        {items.map((item, index) => (
          <div key={index} className="space-y-4 mt-4 border p-4 rounded-md">
            <div className="flex justify-between items-start">
              <h3 className="font-medium">Item {index + 1}</h3>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => handleRemoveItem(index)}
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>
            
            <div className="space-y-2">
              <Label>Title</Label>
              <Input 
                value={item.title}
                onChange={(e) => handleItemChange(index, 'title', e.target.value)}
                placeholder="Enter title"
              />
            </div>
            
            <div className="space-y-2">
              <Label>Description (Optional)</Label>
              <Textarea 
                value={item.description || ''}
                onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                placeholder="Enter description"
                className="h-20"
              />
            </div>
          </div>
        ))}
        
        <Button 
          variant="outline" 
          className="w-full mt-4" 
          onClick={handleAddItem}
        >
          + Add Item
        </Button>
      </CardContent>
    </Card>
  );
};

export default CustomSection;
