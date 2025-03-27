
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import ContentPageLayout from '@/components/layout/ContentPageLayout';
import NavBar from '@/components/landing/NavBar';
import Footer from '@/components/landing/Footer';
import { motion } from 'framer-motion';

// Template types
type TemplateType = 'modern' | 'minimal' | 'professional' | 'creative' | 'technical' | 'executive' | 'ats';

interface Template {
  id: string;
  name: string;
  type: TemplateType;
  image: string;
  description: string;
  premium: boolean;
}

const templates: Template[] = [
  {
    id: 'modern-1',
    name: 'Modern Clean',
    type: 'modern',
    image: '/placeholder.svg',
    description: 'A clean and modern design with a sidebar for your personal details.',
    premium: false
  },
  {
    id: 'minimal-1',
    name: 'Minimal Classic',
    type: 'minimal',
    image: '/placeholder.svg',
    description: 'A minimalist design that focuses on content with elegant typography.',
    premium: false
  },
  {
    id: 'professional-1',
    name: 'Professional Bold',
    type: 'professional',
    image: '/placeholder.svg',
    description: 'A professional layout with a bold header and clear section distinctions.',
    premium: false
  },
  {
    id: 'creative-1',
    name: 'Creative Portfolio',
    type: 'creative',
    image: '/placeholder.svg',
    description: 'A creative design for showcasing your portfolio and skills visually.',
    premium: true
  },
  {
    id: 'technical-1',
    name: 'Technical Specs',
    type: 'technical',
    image: '/placeholder.svg',
    description: 'A specialized design for technical roles with skills graphics and code snippets.',
    premium: true
  },
  {
    id: 'ats-1',
    name: 'ATS Optimized',
    type: 'ats',
    image: '/placeholder.svg',
    description: 'Specifically designed to pass Applicant Tracking Systems with proper formatting.',
    premium: false
  },
  {
    id: 'executive-1',
    name: 'Executive Summary',
    type: 'executive',
    image: '/placeholder.svg',
    description: 'An executive level resume with emphasis on leadership and achievements.',
    premium: true
  }
];

// Framer Motion variants for animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const TemplatesPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [filteredTemplates, setFilteredTemplates] = useState<Template[]>(templates);

  useEffect(() => {
    let results = templates;
    
    // Apply search filter
    if (searchTerm) {
      results = results.filter(template => 
        template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        template.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply type filter
    if (filterType !== 'all') {
      results = results.filter(template => template.type === filterType);
    }
    
    setFilteredTemplates(results);
  }, [searchTerm, filterType]);

  const handleSelectTemplate = (templateId: string) => {
    navigate(`/resume-builder?template=${templateId}`);
  };

  return (
    <>
      <NavBar />
      <ContentPageLayout title="Resume Templates">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">Resume Templates</h1>
              <p className="text-muted-foreground">Choose from {templates.length} professionally designed templates</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input
                  placeholder="Search templates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <Select
                  value={filterType}
                  onValueChange={setFilterType}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Templates</SelectItem>
                    <SelectItem value="modern">Modern</SelectItem>
                    <SelectItem value="minimal">Minimal</SelectItem>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="creative">Creative</SelectItem>
                    <SelectItem value="technical">Technical</SelectItem>
                    <SelectItem value="executive">Executive</SelectItem>
                    <SelectItem value="ats">ATS Optimized</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {filteredTemplates.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl font-medium">No templates found matching your criteria</p>
                <Button 
                  variant="link" 
                  onClick={() => {
                    setSearchTerm('');
                    setFilterType('all');
                  }}
                >
                  Clear filters
                </Button>
              </div>
            ) : (
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {filteredTemplates.map((template) => (
                  <motion.div
                    key={template.id}
                    className="relative group rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
                    variants={itemVariants}
                  >
                    <div className="aspect-[4/5] overflow-hidden bg-muted">
                      <img 
                        src={template.image} 
                        alt={template.name}
                        className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg">{template.name}</h3>
                        {template.premium && (
                          <span className="bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-xs px-2 py-1 rounded-full font-medium">
                            Premium
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{template.description}</p>
                      <Button 
                        className="w-full"
                        onClick={() => handleSelectTemplate(template.id)}
                      >
                        Use This Template
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </ContentPageLayout>
      <Footer />
    </>
  );
};

export default TemplatesPage;
