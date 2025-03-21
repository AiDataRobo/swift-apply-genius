
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Layout, CheckCircle, Check } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TemplateLibrary = () => {
  const [filter, setFilter] = useState('');
  const [industryFilter, setIndustryFilter] = useState('all');
  
  // Mock data for templates
  const templates = [
    {
      id: 1,
      name: 'Modern Professional',
      type: 'resume',
      industries: ['Technology', 'Finance', 'Business'],
      popularity: 'high',
      isPremium: false,
      previewImage: 'https://via.placeholder.com/300x400/f5f5f5/888888?text=Modern+Professional',
    },
    {
      id: 2,
      name: 'Creative Portfolio',
      type: 'resume',
      industries: ['Design', 'Marketing', 'Arts'],
      popularity: 'medium',
      isPremium: true,
      previewImage: 'https://via.placeholder.com/300x400/f8f0ff/888888?text=Creative+Portfolio',
    },
    {
      id: 3,
      name: 'Executive Clean',
      type: 'resume',
      industries: ['Business', 'Finance', 'Legal'],
      popularity: 'high',
      isPremium: true,
      previewImage: 'https://via.placeholder.com/300x400/f0f8ff/888888?text=Executive+Clean',
    },
    {
      id: 4,
      name: 'Technical Specialist',
      type: 'resume',
      industries: ['Technology', 'Engineering', 'Science'],
      popularity: 'medium',
      isPremium: false,
      previewImage: 'https://via.placeholder.com/300x400/f5fff0/888888?text=Technical+Specialist',
    },
    {
      id: 5,
      name: 'Modern Professional',
      type: 'coverletter',
      industries: ['Technology', 'Finance', 'Business'],
      popularity: 'high',
      isPremium: false,
      previewImage: 'https://via.placeholder.com/300x400/fff8f0/888888?text=Modern+Cover+Letter',
    },
    {
      id: 6,
      name: 'Creative Intro',
      type: 'coverletter',
      industries: ['Design', 'Marketing', 'Arts'],
      popularity: 'medium',
      isPremium: true,
      previewImage: 'https://via.placeholder.com/300x400/f0f5ff/888888?text=Creative+Cover+Letter',
    },
  ];
  
  // Extract unique industries for filtering
  const industries = ['all', ...new Set(templates.flatMap(t => t.industries))];
  
  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(filter.toLowerCase());
    const matchesIndustry = industryFilter === 'all' || template.industries.includes(industryFilter);
    return matchesSearch && matchesIndustry;
  });
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold">Template Library</h2>
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search templates..."
            className="pl-8 w-full sm:w-[250px]"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <div className="text-sm font-medium mr-2 mt-1">Industries:</div>
        {industries.map(industry => (
          <Badge 
            key={industry} 
            variant={industryFilter === industry ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setIndustryFilter(industry)}
          >
            {industry === 'all' ? 'All Industries' : industry}
          </Badge>
        ))}
      </div>
      
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Templates</TabsTrigger>
          <TabsTrigger value="resume">Resume Templates</TabsTrigger>
          <TabsTrigger value="coverletter">Cover Letter Templates</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {filteredTemplates.map(template => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="resume" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {filteredTemplates
              .filter(template => template.type === 'resume')
              .map(template => (
                <TemplateCard key={template.id} template={template} />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="coverletter" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {filteredTemplates
              .filter(template => template.type === 'coverletter')
              .map(template => (
                <TemplateCard key={template.id} template={template} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const TemplateCard = ({ template }) => {
  return (
    <Card className="overflow-hidden group hover:shadow-md transition-shadow">
      <div className="relative">
        <img 
          src={template.previewImage} 
          alt={template.name} 
          className="w-full h-[200px] object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Button>Use This Template</Button>
        </div>
        {template.isPremium && (
          <Badge className="absolute top-2 right-2 bg-primary" variant="secondary">
            Premium
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium">{template.name}</h3>
            <p className="text-xs text-muted-foreground capitalize">
              {template.type} Template
            </p>
          </div>
          <div className="flex items-center">
            <Badge variant="outline" className="text-xs">
              {template.popularity === 'high' ? 'Popular' : 'New'}
            </Badge>
          </div>
        </div>
        
        <div className="mt-3 flex flex-wrap gap-1">
          {template.industries.map(industry => (
            <Badge key={industry} variant="secondary" className="text-xs">
              {industry}
            </Badge>
          ))}
        </div>
        
        <div className="mt-4 flex items-center text-xs text-muted-foreground">
          <CheckCircle className="h-3.5 w-3.5 mr-1 text-green-500" />
          ATS-Friendly
          <Check className="h-3.5 w-3.5 mx-1 text-green-500" />
          Clean Design
        </div>
      </CardContent>
    </Card>
  );
};

export default TemplateLibrary;
