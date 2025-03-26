
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Check, Search, Download, FileText, Star, Filter } from 'lucide-react';
import ContentPageLayout from '@/components/layout/ContentPageLayout';

const TemplatesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [filterStyle, setFilterStyle] = useState<string>('all');
  
  // Template data structure
  const resumeTemplates = [
    {
      id: 'modern',
      name: 'Modern Professional',
      type: 'resume',
      style: 'professional',
      isPopular: true,
      isPremium: false,
      description: 'Clean and professional template with a sidebar layout',
      imageSrc: '/lovable-uploads/632f7133-bba3-48c3-abfb-99add820f62b.png'
    },
    {
      id: 'minimal',
      name: 'Minimal Classic',
      type: 'resume',
      style: 'minimal',
      isPopular: true,
      isPremium: false,
      description: 'Simple and elegant design with clean typography',
      imageSrc: '/lovable-uploads/632f7133-bba3-48c3-abfb-99add820f62b.png'
    },
    {
      id: 'creative',
      name: 'Creative Portfolio',
      type: 'resume',
      style: 'creative',
      isPopular: false,
      isPremium: true,
      description: 'Vibrant and unique layout for creative professionals',
      imageSrc: '/lovable-uploads/632f7133-bba3-48c3-abfb-99add820f62b.png'
    },
    {
      id: 'technical',
      name: 'Technical Specialist',
      type: 'resume',
      style: 'technical',
      isPopular: false,
      isPremium: false,
      description: 'Focused layout for technical skills and achievements',
      imageSrc: '/lovable-uploads/632f7133-bba3-48c3-abfb-99add820f62b.png'
    },
    {
      id: 'executive',
      name: 'Executive Professional',
      type: 'resume',
      style: 'professional',
      isPopular: false,
      isPremium: true,
      description: 'Sophisticated design for executive and leadership roles',
      imageSrc: '/lovable-uploads/632f7133-bba3-48c3-abfb-99add820f62b.png'
    },
    {
      id: 'ats',
      name: 'ATS Optimized',
      type: 'resume',
      style: 'minimal',
      isPopular: true,
      isPremium: false,
      description: 'Simple format designed to pass applicant tracking systems',
      imageSrc: '/lovable-uploads/632f7133-bba3-48c3-abfb-99add820f62b.png'
    },
    {
      id: 'professional-cover',
      name: 'Professional Cover Letter',
      type: 'coverletter',
      style: 'professional',
      isPopular: false,
      isPremium: false,
      description: 'Matching cover letter for the modern professional resume',
      imageSrc: '/lovable-uploads/632f7133-bba3-48c3-abfb-99add820f62b.png'
    },
    {
      id: 'creative-cover',
      name: 'Creative Cover Letter',
      type: 'coverletter',
      style: 'creative',
      isPopular: false,
      isPremium: true,
      description: 'Artistic cover letter design for creatives',
      imageSrc: '/lovable-uploads/632f7133-bba3-48c3-abfb-99add820f62b.png'
    }
  ];
  
  // Filter templates based on search query and selected filters
  const filteredTemplates = resumeTemplates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' || template.type === filterType;
    const matchesStyle = filterStyle === 'all' || template.style === filterStyle;
    
    return matchesSearch && matchesType && matchesStyle;
  });

  // Animation variants for templates grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <ContentPageLayout>
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="flex flex-col space-y-8">
          {/* Header section */}
          <div>
            <h1 className="text-3xl font-bold mb-3">Resume Templates</h1>
            <p className="text-muted-foreground max-w-3xl">
              Choose from our professionally designed templates. Each template is ATS-friendly 
              and optimized to help you stand out to recruiters.
            </p>
          </div>
          
          {/* Search and filters */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search"
                placeholder="Search templates..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2 items-center self-start md:self-auto">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm mr-2">Filters:</span>
              <select 
                className="text-sm border rounded-md p-1 bg-background"
                value={filterStyle}
                onChange={(e) => setFilterStyle(e.target.value)}
              >
                <option value="all">All Styles</option>
                <option value="professional">Professional</option>
                <option value="creative">Creative</option>
                <option value="minimal">Minimal</option>
                <option value="technical">Technical</option>
              </select>
            </div>
          </div>
          
          {/* Tabs for different template types */}
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="all" onClick={() => setFilterType('all')}>All Templates</TabsTrigger>
              <TabsTrigger value="resume" onClick={() => setFilterType('resume')}>Resume Templates</TabsTrigger>
              <TabsTrigger value="coverletter" onClick={() => setFilterType('coverletter')}>Cover Letter Templates</TabsTrigger>
            </TabsList>
            
            {/* All templates tab content */}
            <TabsContent value="all">
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {filteredTemplates.map((template) => (
                  <TemplateCard key={template.id} template={template} />
                ))}
              </motion.div>
            </TabsContent>
            
            {/* Resume templates tab content */}
            <TabsContent value="resume">
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {filteredTemplates
                  .filter(template => template.type === 'resume')
                  .map((template) => (
                    <TemplateCard key={template.id} template={template} />
                  ))}
              </motion.div>
            </TabsContent>
            
            {/* Cover letter templates tab content */}
            <TabsContent value="coverletter">
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {filteredTemplates
                  .filter(template => template.type === 'coverletter')
                  .map((template) => (
                    <TemplateCard key={template.id} template={template} />
                  ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </ContentPageLayout>
  );
};

// Template card component
interface TemplateProps {
  template: {
    id: string;
    name: string;
    type: string;
    style: string;
    isPopular: boolean;
    isPremium: boolean;
    description: string;
    imageSrc: string;
  }
}

const TemplateCard: React.FC<TemplateProps> = ({ template }) => {
  return (
    <motion.div 
      className="group border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      variants={itemVariants}
    >
      <div className="relative aspect-[3/4] bg-muted overflow-hidden">
        <img 
          src={template.imageSrc} 
          alt={template.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Popular badge */}
        {template.isPopular && (
          <Badge className="absolute top-3 left-3 bg-primary" variant="secondary">
            <Star className="h-3 w-3 mr-1 fill-current" /> Popular
          </Badge>
        )}
        
        {/* Premium badge */}
        {template.isPremium && (
          <Badge className="absolute top-3 right-3 bg-amber-500/90" variant="secondary">
            Premium
          </Badge>
        )}
        
        {/* Overlay with buttons */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-3 transition-opacity duration-300">
          <Link to={`/resume-builder?template=${template.id}`}>
            <Button variant="default">
              Use Template
            </Button>
          </Link>
          <Button variant="outline" className="bg-white/10">
            Preview
          </Button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-medium text-base mb-1">{template.name}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{template.description}</p>
          </div>
        </div>
        
        <div className="flex items-center mt-3 text-xs text-muted-foreground">
          <div className="flex items-center mr-4">
            <FileText className="h-3.5 w-3.5 mr-1" />
            <span className="capitalize">{template.type}</span>
          </div>
          <div className="flex items-center">
            <Check className="h-3.5 w-3.5 mr-1 text-green-500" />
            <span>ATS-Friendly</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TemplatesPage;
