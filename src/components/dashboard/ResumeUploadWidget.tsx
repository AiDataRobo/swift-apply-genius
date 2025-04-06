
import React, { useState, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileUp, CheckCircle, XCircle, AlertCircle, FileText, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

const ResumeUploadWidget = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const { user } = useAuth();
  
  const acceptedFileTypes = [
    'application/pdf', 
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ];
  const maxSizeMB = 5;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    
    if (!selectedFile) {
      setFile(null);
      return;
    }
    
    // Validate file type
    if (!acceptedFileTypes.includes(selectedFile.type)) {
      setErrorMessage('Only PDF and DOCX files are accepted.');
      toast({
        title: "Invalid File Format",
        description: "Please upload a PDF or DOCX file.",
        variant: "destructive"
      });
      setFile(null);
      return;
    }
    
    // Validate file size
    const fileSizeMB = selectedFile.size / (1024 * 1024);
    if (fileSizeMB > maxSizeMB) {
      setErrorMessage(`Maximum file size is ${maxSizeMB}MB.`);
      toast({
        title: "File Too Large",
        description: `Maximum file size is ${maxSizeMB}MB.`,
        variant: "destructive"
      });
      setFile(null);
      return;
    }
    
    setFile(selectedFile);
    setUploadStatus('idle');
    setErrorMessage('');
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    
    const droppedFile = event.dataTransfer.files?.[0];
    
    if (!droppedFile) {
      return;
    }
    
    // Validate file type
    if (!acceptedFileTypes.includes(droppedFile.type)) {
      setErrorMessage('Only PDF and DOCX files are accepted.');
      toast({
        title: "Invalid File Format",
        description: "Please upload a PDF or DOCX file.",
        variant: "destructive"
      });
      return;
    }
    
    // Validate file size
    const fileSizeMB = droppedFile.size / (1024 * 1024);
    if (fileSizeMB > maxSizeMB) {
      setErrorMessage(`Maximum file size is ${maxSizeMB}MB.`);
      toast({
        title: "File Too Large",
        description: `Maximum file size is ${maxSizeMB}MB.`,
        variant: "destructive"
      });
      return;
    }
    
    setFile(droppedFile);
    setUploadStatus('idle');
    setErrorMessage('');
  };
  
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const removeFile = () => {
    setFile(null);
    setUploadStatus('idle');
    setErrorMessage('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      setErrorMessage('Please select a file to upload.');
      toast({
        title: "No File Selected",
        description: "Please select a resume file to upload.",
        variant: "destructive"
      });
      return;
    }
    
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please log in to submit your resume.",
        variant: "destructive"
      });
      return;
    }
    
    setIsUploading(true);
    setUploadStatus('idle');
    
    try {
      const filePath = `${user.id}/${Date.now()}-${file.name}`;
      
      // Upload file to Supabase Storage
      const { data, error } = await supabase.storage
        .from('resumes')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        });
        
      if (error) {
        throw error;
      }
      
      // Call the Edge Function instead of direct RPC call to bypass TypeScript error
      const functionUrl = `https://myxltvsyrmmiqmhgdsbi.supabase.co/functions/v1/create-resume-submission`;
      const response = await fetch(functionUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabase.auth.getSession().then(res => res.data.session?.access_token)}`
        },
        body: JSON.stringify({
          user_id: user.id,
          file_path: filePath,
          file_name: file.name,
          file_size: file.size,
          file_type: file.type,
          status: 'pending'
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to process resume submission');
      }
      
      setUploadStatus('success');
      toast({
        title: "Resume Uploaded Successfully",
        description: "We've received your resume and will provide feedback soon.",
      });
      
      // Reset form after successful submission
      setTimeout(() => {
        setFile(null);
        setUploadStatus('idle');
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }, 3000);
      
    } catch (error: any) {
      console.error("Upload error:", error);
      setUploadStatus('error');
      setErrorMessage(error.message || 'Failed to upload resume. Please try again.');
      toast({
        title: "Upload Failed",
        description: "There was an error uploading your resume. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Card className="shadow-sm bg-white">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center">
          <Upload className="mr-2 h-5 w-5 text-primary" />
          Upload Your Resume
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div 
          className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-all duration-200
            ${file ? 'border-primary/40 bg-primary/5' : 'border-slate-300 hover:border-primary/30 hover:bg-slate-50'}`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={() => fileInputRef.current?.click()}
        >
          {!file ? (
            <div className="space-y-3">
              <div className="bg-slate-100 rounded-full p-3 w-16 h-16 mx-auto flex items-center justify-center">
                <FileUp className="h-8 w-8 text-slate-500" />
              </div>
              <div>
                <p className="font-medium">Drag &amp; drop your resume here</p>
                <p className="text-sm text-muted-foreground mt-1">or click to browse files</p>
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                <p>Accepted formats: PDF, DOCX | Maximum size: 5MB</p>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="bg-primary/10 rounded-full p-2 w-12 h-12 mx-auto flex items-center justify-center">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium text-slate-900 break-all">{file.name}</p>
                <p className="text-xs text-muted-foreground">
                  {(file.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
            </div>
          )}
          
          <input 
            type="file" 
            className="hidden" 
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          />
        </div>

        {errorMessage && (
          <div className="flex items-center gap-2 text-xs text-destructive">
            <AlertCircle className="h-3 w-3" />
            <span>{errorMessage}</span>
          </div>
        )}

        {file && (
          <div className="flex justify-between items-center">
            <Button 
              variant="outline"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                removeFile();
              }}
              className="text-xs"
            >
              <XCircle className="h-3 w-3 mr-1" />
              Remove
            </Button>
            
            <div className="text-xs text-right">
              {uploadStatus === 'success' && (
                <span className="text-green-600 flex items-center">
                  <CheckCircle className="h-3 w-3 mr-1" /> Upload successful
                </span>
              )}
              {uploadStatus === 'error' && (
                <span className="text-destructive flex items-center">
                  <XCircle className="h-3 w-3 mr-1" /> Upload failed
                </span>
              )}
            </div>
          </div>
        )}

        <Button 
          className="w-full"
          disabled={!file || isUploading}
          onClick={handleSubmit}
        >
          {isUploading ? (
            <>
              <div className="h-4 w-4 rounded-full border-2 border-t-transparent border-white animate-spin mr-2" />
              Uploading...
            </>
          ) : (
            'Submit Resume For Review'
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ResumeUploadWidget;
