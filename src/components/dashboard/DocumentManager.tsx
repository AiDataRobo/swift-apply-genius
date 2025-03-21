
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { PlusCircle, Search, File, FileText, Edit, Copy, Download, Trash, Eye } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const DocumentManager = () => {
  const [filter, setFilter] = useState('');
  
  // Mock data
  const documents = [
    { 
      id: 1, 
      type: 'resume', 
      title: 'Software Developer Resume', 
      lastUpdated: '2 days ago',
      tags: ['Tech', 'Development']
    },
    { 
      id: 2, 
      type: 'resume', 
      title: 'Product Manager Resume', 
      lastUpdated: '1 week ago',
      tags: ['Product', 'Management', 'Tech']
    },
    { 
      id: 3, 
      type: 'coverletter', 
      title: 'Front-end Developer Cover Letter', 
      lastUpdated: '3 days ago',
      tags: ['Tech', 'Development']
    },
    { 
      id: 4, 
      type: 'coverletter', 
      title: 'Marketing Specialist Cover Letter', 
      lastUpdated: '5 days ago',
      tags: ['Marketing']
    },
  ];
  
  const filteredDocuments = documents.filter(doc => 
    doc.title.toLowerCase().includes(filter.toLowerCase()) ||
    doc.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
  );
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold">My Documents</h2>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search documents..."
              className="pl-8 w-full sm:w-[250px]"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            New Document
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Documents</TabsTrigger>
          <TabsTrigger value="resumes">Resumes</TabsTrigger>
          <TabsTrigger value="coverletters">Cover Letters</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredDocuments.map(doc => (
              <DocumentCard key={doc.id} document={doc} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="resumes" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredDocuments
              .filter(doc => doc.type === 'resume')
              .map(doc => (
                <DocumentCard key={doc.id} document={doc} />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="coverletters" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredDocuments
              .filter(doc => doc.type === 'coverletter')
              .map(doc => (
                <DocumentCard key={doc.id} document={doc} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const DocumentCard = ({ document }) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="bg-primary/5 p-4 flex items-center justify-between">
        {document.type === 'resume' ? 
          <File className="h-5 w-5 text-primary" /> : 
          <FileText className="h-5 w-5 text-primary" />
        }
        <span className="text-xs text-muted-foreground">Updated {document.lastUpdated}</span>
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium mb-2">{document.title}</h3>
        <div className="flex flex-wrap gap-1 mb-4">
          {document.tags.map(tag => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between pt-2">
          <div className="flex gap-1">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Eye className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Edit className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex gap-1">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Download className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DocumentManager;
