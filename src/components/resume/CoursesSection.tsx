
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Trash2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Course } from "@/schemas/resume";

interface CoursesSectionProps {
  courses?: Course[];
  onChange: (updatedCourses: Course[]) => void;
}

const CoursesSection = ({ courses = [], onChange }: CoursesSectionProps) => {
  const handleAddCourse = () => {
    onChange([...courses, { name: "", institution: "", date: "" }]);
  };

  const handleRemoveCourse = (index: number) => {
    const updatedCourses = [...courses];
    updatedCourses.splice(index, 1);
    onChange(updatedCourses);
  };

  const handleCourseChange = (index: number, field: keyof Course, value: string) => {
    const updatedCourses = [...courses];
    updatedCourses[index] = { ...updatedCourses[index], [field]: value };
    onChange(updatedCourses);
  };

  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Courses</h2>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Check className="h-3.5 w-3.5 text-green-500" /> 
            Auto-saved
          </div>
        </div>
        <p className="text-sm text-muted-foreground">Add relevant courses and training</p>
        
        {courses.map((course, index) => (
          <div key={index} className="space-y-4 mt-4 border p-4 rounded-md">
            <div className="flex justify-between items-start">
              <h3 className="font-medium">Course {index + 1}</h3>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => handleRemoveCourse(index)}
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Course Name</Label>
                <Input 
                  value={course.name}
                  onChange={(e) => handleCourseChange(index, 'name', e.target.value)}
                  placeholder="Course Title"
                />
              </div>
              <div className="space-y-2">
                <Label>Institution</Label>
                <Input 
                  value={course.institution}
                  onChange={(e) => handleCourseChange(index, 'institution', e.target.value)}
                  placeholder="Institution/Platform Name"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Completion Date</Label>
                <Input 
                  value={course.date}
                  onChange={(e) => handleCourseChange(index, 'date', e.target.value)}
                  placeholder="MM/YYYY"
                />
              </div>
              <div className="space-y-2">
                <Label>Credential ID (Optional)</Label>
                <Input 
                  value={course.credential || ''}
                  onChange={(e) => handleCourseChange(index, 'credential', e.target.value)}
                  placeholder="Certificate ID or URL"
                />
              </div>
            </div>
          </div>
        ))}
        
        <Button 
          variant="outline" 
          className="w-full mt-4" 
          onClick={handleAddCourse}
        >
          + Add Course
        </Button>
      </CardContent>
    </Card>
  );
};

export default CoursesSection;
