
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Trash2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Organization } from "@/schemas/resume";

interface OrganizationsSectionProps {
  organizations?: Organization[];
  onChange: (updatedOrganizations: Organization[]) => void;
}

const OrganizationsSection = ({ organizations = [], onChange }: OrganizationsSectionProps) => {
  const handleAddOrganization = () => {
    onChange([...organizations, { name: "", role: "", startDate: "" }]);
  };

  const handleRemoveOrganization = (index: number) => {
    const updatedOrganizations = [...organizations];
    updatedOrganizations.splice(index, 1);
    onChange(updatedOrganizations);
  };

  const handleOrganizationChange = (index: number, field: keyof Organization, value: string) => {
    const updatedOrganizations = [...organizations];
    updatedOrganizations[index] = { ...updatedOrganizations[index], [field]: value };
    onChange(updatedOrganizations);
  };

  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Organizations</h2>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Check className="h-3.5 w-3.5 text-green-500" /> 
            Auto-saved
          </div>
        </div>
        <p className="text-sm text-muted-foreground">Add professional organizations or memberships</p>
        
        {organizations.map((org, index) => (
          <div key={index} className="space-y-4 mt-4 border p-4 rounded-md">
            <div className="flex justify-between items-start">
              <h3 className="font-medium">Organization {index + 1}</h3>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => handleRemoveOrganization(index)}
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Organization Name</Label>
                <Input 
                  value={org.name}
                  onChange={(e) => handleOrganizationChange(index, 'name', e.target.value)}
                  placeholder="Organization Name"
                />
              </div>
              <div className="space-y-2">
                <Label>Role/Position</Label>
                <Input 
                  value={org.role}
                  onChange={(e) => handleOrganizationChange(index, 'role', e.target.value)}
                  placeholder="Your Role"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Start Date</Label>
                <Input 
                  value={org.startDate}
                  onChange={(e) => handleOrganizationChange(index, 'startDate', e.target.value)}
                  placeholder="MM/YYYY"
                />
              </div>
              <div className="space-y-2">
                <Label>End Date</Label>
                <Input 
                  value={org.endDate || ''}
                  onChange={(e) => handleOrganizationChange(index, 'endDate', e.target.value)}
                  placeholder="MM/YYYY or Present"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Description (Optional)</Label>
              <Textarea 
                value={org.description || ''}
                onChange={(e) => handleOrganizationChange(index, 'description', e.target.value)}
                placeholder="Describe your involvement and achievements"
                className="h-20"
              />
            </div>
          </div>
        ))}
        
        <Button 
          variant="outline" 
          className="w-full mt-4" 
          onClick={handleAddOrganization}
        >
          + Add Organization
        </Button>
      </CardContent>
    </Card>
  );
};

export default OrganizationsSection;
