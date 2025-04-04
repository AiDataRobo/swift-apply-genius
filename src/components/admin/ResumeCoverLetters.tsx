
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Search, Download, Eye, BarChart, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAdminData } from '@/hooks/useAdminData';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';

const ResumeCoverLetters = () => {
  const { documents, isLoadingDocuments, refetchDocuments } = useAdminData();
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedDocument, setSelectedDocument] = useState<any>(null);
  const [isViewingDetails, setIsViewingDetails] = useState(false);

  // Filter documents based on search term and filters
  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = 
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      doc.userEmail.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = typeFilter === 'all' || doc.documentType === typeFilter;
    
    const reviewStatus = doc.is_reviewed ? 'reviewed' : 'not_reviewed';
    const matchesStatus = statusFilter === 'all' || (
      (statusFilter === 'reviewed' && doc.is_reviewed) || 
      (statusFilter === 'not_reviewed' && !doc.is_reviewed)
    );
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const handleViewDetails = (document: any) => {
    setSelectedDocument(document);
    setIsViewingDetails(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Resume & Cover Letter Submissions</h2>
        <Button onClick={() => refetchDocuments()}>
          <FileText className="mr-2 h-4 w-4" />
          Refresh
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Document Management</CardTitle>
          <CardDescription>
            View and manage all resume and cover letter submissions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by title or user email..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-40">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Document Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Documents</SelectItem>
                  <SelectItem value="resume">Resumes Only</SelectItem>
                  <SelectItem value="coverLetter">Cover Letters Only</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40">
                  <BarChart className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Review Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="reviewed">Reviewed</SelectItem>
                  <SelectItem value="not_reviewed">Not Reviewed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoadingDocuments ? (
                  Array(5).fill(0).map((_, i) => (
                    <TableRow key={i}>
                      <TableCell><Skeleton className="h-5 w-48" /></TableCell>
                      <TableCell><Skeleton className="h-5 w-24" /></TableCell>
                      <TableCell><Skeleton className="h-5 w-40" /></TableCell>
                      <TableCell><Skeleton className="h-5 w-24" /></TableCell>
                      <TableCell><Skeleton className="h-5 w-24" /></TableCell>
                      <TableCell className="text-right"><Skeleton className="h-9 w-20 ml-auto" /></TableCell>
                    </TableRow>
                  ))
                ) : filteredDocuments.length > 0 ? (
                  filteredDocuments.map((doc) => (
                    <TableRow key={doc.id}>
                      <TableCell className="font-medium">{doc.title}</TableCell>
                      <TableCell>
                        <Badge variant={doc.documentType === 'resume' ? 'default' : 'secondary'}>
                          {doc.documentType === 'resume' ? 'Resume' : 'Cover Letter'}
                        </Badge>
                      </TableCell>
                      <TableCell>{doc.userEmail}</TableCell>
                      <TableCell>{new Date(doc.created_at).toLocaleDateString()}</TableCell>
                      <TableCell>
                        {doc.documentType === 'resume' ? (
                          doc.is_reviewed ? (
                            <Badge variant="success" className="bg-green-500">Reviewed</Badge>
                          ) : (
                            <Badge variant="outline">Not Reviewed</Badge>
                          )
                        ) : (
                          <Badge variant="outline">N/A</Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="sm" onClick={() => handleViewDetails(doc)}>
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center">
                      No documents found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      
      {/* Document Details Dialog */}
      <Dialog open={isViewingDetails} onOpenChange={setIsViewingDetails}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Document Details</DialogTitle>
            <DialogDescription>
              Detailed information about the selected document
            </DialogDescription>
          </DialogHeader>
          
          {selectedDocument && (
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-medium">Document Information</h3>
                  <div className="mt-2 space-y-2">
                    <div>
                      <span className="text-sm text-muted-foreground">Title:</span>
                      <p className="font-medium">{selectedDocument.title}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Type:</span>
                      <p>{selectedDocument.documentType === 'resume' ? 'Resume' : 'Cover Letter'}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Created:</span>
                      <p>{new Date(selectedDocument.created_at).toLocaleString()}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Last Updated:</span>
                      <p>{new Date(selectedDocument.updated_at).toLocaleString()}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">User Information</h3>
                  <div className="mt-2 space-y-2">
                    <div>
                      <span className="text-sm text-muted-foreground">Email:</span>
                      <p>{selectedDocument.userEmail}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">User ID:</span>
                      <p className="text-xs break-all">{selectedDocument.user_id}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {selectedDocument.documentType === 'resume' && (
                <div>
                  <h3 className="text-lg font-medium">Review Status</h3>
                  <div className="mt-2 border rounded-md p-4 bg-muted/30">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-sm text-muted-foreground">Status:</span>
                        <p className="font-medium">
                          {selectedDocument.is_reviewed ? 'Reviewed' : 'Not Reviewed'}
                        </p>
                      </div>
                      
                      {selectedDocument.is_reviewed && selectedDocument.ats_score !== null && (
                        <div className="text-center">
                          <span className="text-sm text-muted-foreground">ATS Score:</span>
                          <div className="text-2xl font-bold mt-1">
                            {selectedDocument.ats_score}/100
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsViewingDetails(false)}>
                  Close
                </Button>
                <Button>
                  <Download className="mr-2 h-4 w-4" />
                  Download Document
                </Button>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ResumeCoverLetters;
