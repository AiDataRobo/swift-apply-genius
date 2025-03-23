
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Plus, Trash2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Project } from "@/schemas/resume";

interface ProjectsSectionProps {
  projects: Project[];
  onChange: (updatedProjects: Project[]) => void;
}

const ProjectsSection = ({ projects, onChange }: ProjectsSectionProps) => {
  const handleAddProject = () => {
    onChange([
      ...projects, 
      { 
        title: "", 
        description: "",
        technologies: []
      }
    ]);
  };

  const handleRemoveProject = (index: number) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    onChange(updatedProjects);
  };

  const handleProjectChange = (index: number, field: keyof Project, value: string) => {
    const updatedProjects = [...projects];
    updatedProjects[index] = { ...updatedProjects[index], [field]: value };
    onChange(updatedProjects);
  };

  const handleAddTechnology = (projectIndex: number) => {
    const updatedProjects = [...projects];
    const currentTechnologies = updatedProjects[projectIndex].technologies || [];
    updatedProjects[projectIndex].technologies = [...currentTechnologies, ""];
    onChange(updatedProjects);
  };

  const handleTechnologyChange = (projectIndex: number, techIndex: number, value: string) => {
    const updatedProjects = [...projects];
    const technologies = [...(updatedProjects[projectIndex].technologies || [])];
    technologies[techIndex] = value;
    updatedProjects[projectIndex].technologies = technologies;
    onChange(updatedProjects);
  };

  const handleRemoveTechnology = (projectIndex: number, techIndex: number) => {
    const updatedProjects = [...projects];
    const technologies = [...(updatedProjects[projectIndex].technologies || [])];
    technologies.splice(techIndex, 1);
    updatedProjects[projectIndex].technologies = technologies;
    onChange(updatedProjects);
  };

  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Projects</h2>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Check className="h-3.5 w-3.5 text-green-500" /> 
            Auto-saved
          </div>
        </div>
        <p className="text-sm text-muted-foreground">Showcase your best projects and personal work</p>
        
        {projects.map((project, projectIndex) => (
          <div key={projectIndex} className="space-y-4 mt-4 border p-4 rounded-md">
            <div className="flex justify-between items-start">
              <h3 className="font-medium">Project {projectIndex + 1}</h3>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => handleRemoveProject(projectIndex)}
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label>Project Title</Label>
                <Input 
                  value={project.title}
                  onChange={(e) => handleProjectChange(projectIndex, 'title', e.target.value)}
                  placeholder="E-commerce Platform, Portfolio Website, etc."
                />
              </div>
              
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea 
                  value={project.description || ''}
                  onChange={(e) => handleProjectChange(projectIndex, 'description', e.target.value)}
                  placeholder="Brief overview of the project, your role, and key features"
                  rows={3}
                />
              </div>
              
              <div className="space-y-2">
                <Label>Technologies Used</Label>
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center gap-1 bg-secondary px-3 py-1.5 rounded-full">
                      <Input 
                        className="border-0 bg-transparent p-0 h-auto w-auto min-w-0 focus-visible:ring-0"
                        value={tech}
                        onChange={(e) => handleTechnologyChange(projectIndex, techIndex, e.target.value)}
                        placeholder="Add technology"
                      />
                      <button 
                        type="button" 
                        onClick={() => handleRemoveTechnology(projectIndex, techIndex)}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))}
                  <button 
                    type="button"
                    onClick={() => handleAddTechnology(projectIndex)}
                    className="flex items-center gap-1 border border-dashed px-3 py-1.5 rounded-full text-sm text-muted-foreground hover:text-foreground"
                  >
                    <Plus className="h-3.5 w-3.5" />
                    Add Technology
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <Button 
          variant="outline" 
          className="w-full mt-4" 
          onClick={handleAddProject}
        >
          + Add Project
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectsSection;
