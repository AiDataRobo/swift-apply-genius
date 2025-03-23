
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Contact } from "@/schemas/resume";

interface ProfileSectionProps {
  profile: Contact;
  onChange: (field: keyof Contact, value: string) => void;
}

const ProfileSection = ({ profile, onChange }: ProfileSectionProps) => {
  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Profile</h2>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Check className="h-3.5 w-3.5 text-green-500" /> 
            Auto-saved
          </div>
        </div>
        <p className="text-sm text-muted-foreground">Update your personal information and contact details</p>
        
        <div className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name"
                value={profile.name || ''} 
                onChange={(e) => onChange('name', e.target.value)}
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="title">Professional Title</Label>
              <Input 
                id="title"
                value={profile.title || ''} 
                onChange={(e) => onChange('title', e.target.value)}
                placeholder="Software Engineer"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email"
                type="email"
                value={profile.email || ''} 
                onChange={(e) => onChange('email', e.target.value)}
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input 
                id="phone"
                value={profile.phone || ''} 
                onChange={(e) => onChange('phone', e.target.value)}
                placeholder="(123) 456-7890"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input 
              id="location"
              value={profile.location || ''} 
              onChange={(e) => onChange('location', e.target.value)}
              placeholder="San Francisco, CA"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="summary">Professional Summary</Label>
            <Textarea 
              id="summary"
              value={profile.summary || ''} 
              onChange={(e) => onChange('summary', e.target.value)}
              placeholder="Brief overview of your experience, skills, and career goals"
              rows={5}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileSection;
