
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, UserCircle, Mail, Phone, MapPin, FileText } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Contact } from "@/schemas/resume";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ProfileSectionProps {
  profile: Contact;
  onChange: (field: keyof Contact, value: string) => void;
}

const ProfileSection = ({ profile, onChange }: ProfileSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="border-primary/10">
        <CardContent className="space-y-4 pt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <UserCircle className="h-5 w-5 text-primary" />
              Profile
            </h2>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Check className="h-3.5 w-3.5 text-green-500" /> 
              Auto-saved
            </div>
          </div>
          <p className="text-sm text-muted-foreground">This section appears at the top of your resume and provides an overview of who you are</p>
          
          <div className="space-y-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-1.5">
                  <UserCircle className="h-3.5 w-3.5 text-primary/70" />
                  Full Name
                </Label>
                <Input 
                  id="name"
                  value={profile.name || ''} 
                  onChange={(e) => onChange('name', e.target.value)}
                  placeholder="John Doe"
                  className="transition-all border-input/60 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Label htmlFor="title" className="flex items-center gap-1.5 cursor-help">
                        <FileText className="h-3.5 w-3.5 text-primary/70" />
                        Professional Title
                      </Label>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs max-w-[200px]">
                        Use a specific title that matches the job you're applying for
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <Input 
                  id="title"
                  value={profile.title || ''} 
                  onChange={(e) => onChange('title', e.target.value)}
                  placeholder="Software Engineer"
                  className="transition-all border-input/60 focus:border-primary"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5 text-primary/70" />
                  Email
                </Label>
                <Input 
                  id="email"
                  type="email"
                  value={profile.email || ''} 
                  onChange={(e) => onChange('email', e.target.value)}
                  placeholder="john@example.com"
                  className="transition-all border-input/60 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5 text-primary/70" />
                  Phone
                </Label>
                <Input 
                  id="phone"
                  value={profile.phone || ''} 
                  onChange={(e) => onChange('phone', e.target.value)}
                  placeholder="(123) 456-7890"
                  className="transition-all border-input/60 focus:border-primary"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="location" className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-primary/70" />
                Location
              </Label>
              <Input 
                id="location"
                value={profile.location || ''} 
                onChange={(e) => onChange('location', e.target.value)}
                placeholder="San Francisco, CA"
                className="transition-all border-input/60 focus:border-primary"
              />
            </div>
            
            <div className="space-y-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Label htmlFor="summary" className="flex items-center gap-1.5 cursor-help">
                      Professional Summary
                    </Label>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs max-w-[250px]">
                      Keep your summary concise (2-3 sentences) and highlight your most relevant skills and experience
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <Textarea 
                id="summary"
                value={profile.summary || ''} 
                onChange={(e) => onChange('summary', e.target.value)}
                placeholder="Brief overview of your experience, skills, and career goals"
                rows={5}
                className="transition-all border-input/60 focus:border-primary resize-none"
              />
              <div className="flex justify-end">
                <p className="text-xs text-muted-foreground">
                  {profile.summary?.length || 0}/250 characters
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProfileSection;
