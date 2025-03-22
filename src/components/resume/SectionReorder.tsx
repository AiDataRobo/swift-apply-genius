
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Card, CardContent } from "@/components/ui/card";
import { GripVertical, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

interface SectionReorderProps {
  sections: string[];
  visibleSections: string[];
  onReorder: (sections: string[]) => void;
  onVisibilityChange: (sections: string[]) => void;
}

const sectionIcons: Record<string, string> = {
  profile: "👤",
  skills: "🛠️",
  experience: "💼",
  education: "🎓",
  projects: "🚀",
  certificates: "🏆",
  languages: "🌐",
  interests: "⭐"
};

const SectionReorder = ({ 
  sections, 
  visibleSections, 
  onReorder, 
  onVisibilityChange 
}: SectionReorderProps) => {
  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    
    const items = Array.from(sections);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    onReorder(items);
  };

  const toggleSectionVisibility = (section: string) => {
    if (visibleSections.includes(section)) {
      onVisibilityChange(visibleSections.filter(s => s !== section));
    } else {
      onVisibilityChange([...visibleSections, section]);
    }
  };

  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <h2 className="text-xl font-semibold">Resume Sections</h2>
        <p className="text-sm text-muted-foreground">Drag and drop to reorder sections or toggle to show/hide</p>
        
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="sections">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="space-y-2"
              >
                {sections.map((section, index) => {
                  const isVisible = visibleSections.includes(section);
                  return (
                    <Draggable key={section} draggableId={section} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className={`flex items-center justify-between p-3 rounded-md border ${isVisible ? 'bg-card' : 'bg-muted/30'}`}
                        >
                          <div className="flex items-center">
                            <div {...provided.dragHandleProps} className="mr-2 cursor-grab">
                              <GripVertical className="h-4 w-4 text-muted-foreground" />
                            </div>
                            <span className="mr-2">{sectionIcons[section] || "📄"}</span>
                            <span className="capitalize">{section}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => toggleSectionVisibility(section)}
                            >
                              {isVisible ? (
                                <Eye className="h-4 w-4" />
                              ) : (
                                <EyeOff className="h-4 w-4 text-muted-foreground" />
                              )}
                            </Button>
                            <Switch
                              checked={isVisible}
                              onCheckedChange={() => toggleSectionVisibility(section)}
                            />
                          </div>
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </CardContent>
    </Card>
  );
};

export default SectionReorder;
