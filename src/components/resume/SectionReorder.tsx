
import { useResumeContext } from "@/contexts/ResumeContext";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown, Check, Eye, EyeOff } from "lucide-react";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const SectionReorder = () => {
  const { 
    sectionOrder, 
    visibleSections, 
    setSectionOrder, 
    setVisibleSections 
  } = useResumeContext();

  const moveSectionUp = (index: number) => {
    if (index > 0) {
      const newOrder = [...sectionOrder];
      [newOrder[index], newOrder[index - 1]] = [newOrder[index - 1], newOrder[index]];
      setSectionOrder(newOrder);
      
      toast.success("Section order updated", {
        description: "The section has been moved up"
      });
    }
  };

  const moveSectionDown = (index: number) => {
    if (index < sectionOrder.length - 1) {
      const newOrder = [...sectionOrder];
      [newOrder[index], newOrder[index + 1]] = [newOrder[index + 1], newOrder[index]];
      setSectionOrder(newOrder);
      
      toast.success("Section order updated", {
        description: "The section has been moved down"
      });
    }
  };

  const toggleVisibility = (section: string) => {
    const isVisible = visibleSections.includes(section);
    
    if (isVisible) {
      // Don't allow hiding required sections
      if (["profile", "skills", "experience", "education"].includes(section)) {
        toast.error("Cannot hide required sections", {
          description: "Profile, skills, experience and education are required"
        });
        return;
      }
      
      setVisibleSections(visibleSections.filter(s => s !== section));
      
      toast.success("Section hidden", {
        description: `The ${section} section is now hidden from your resume`
      });
    } else {
      setVisibleSections([...visibleSections, section]);
      
      toast.success("Section shown", {
        description: `The ${section} section is now visible on your resume`
      });
    }
  };

  // Format section name for display
  const formatSectionName = (name: string) => {
    return name
      .split(/[_\s]/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Reorder Sections</h2>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Check className="h-3.5 w-3.5 text-green-500" /> 
            Auto-saved
          </div>
        </div>
        <p className="text-sm text-muted-foreground">Drag and drop sections to change their order or toggle visibility</p>
        
        <div className="space-y-2 mt-4">
          {sectionOrder.map((section, index) => (
            <div 
              key={section} 
              className="flex items-center justify-between p-3 bg-card border rounded-md"
            >
              <div className="flex items-center">
                <div className="w-10 text-center text-muted-foreground">
                  {index + 1}
                </div>
                <span className="font-medium">{formatSectionName(section)}</span>
                
                {["profile", "skills", "experience", "education"].includes(section) && (
                  <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                    Required
                  </span>
                )}
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex items-center space-x-2">
                  <Switch 
                    id={`show-${section}`}
                    checked={visibleSections.includes(section)}
                    onCheckedChange={() => toggleVisibility(section)}
                    disabled={["profile", "skills", "experience", "education"].includes(section)}
                  />
                  <Label htmlFor={`show-${section}`} className="text-xs">
                    {visibleSections.includes(section) ? 
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" /> Show
                      </div> : 
                      <div className="flex items-center gap-1">
                        <EyeOff className="h-3 w-3" /> Hide
                      </div>
                    }
                  </Label>
                </div>
                
                <div className="flex">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => moveSectionUp(index)}
                    disabled={index === 0}
                    className="h-7 w-7"
                  >
                    <ArrowUp className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => moveSectionDown(index)}
                    disabled={index === sectionOrder.length - 1}
                    className="h-7 w-7"
                  >
                    <ArrowDown className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-muted/40 p-3 rounded-md text-sm mt-4">
          <p className="text-muted-foreground">Tip: The order of sections on this page will be reflected in your resume. Customize the order to highlight your most relevant qualifications for the job.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SectionReorder;
