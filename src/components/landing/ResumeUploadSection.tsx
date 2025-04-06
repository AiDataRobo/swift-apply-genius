
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileUp, CheckCircle, XCircle, AlertCircle, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

const ResumeUploadSection = () => {
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
      setErrorMessage('Invalid file format. Please upload a PDF or DOCX file.');
      toast({
        title: "Invalid File Format",
        description: "Only PDF and DOCX files are accepted.",
        variant: "destructive"
      });
      setFile(null);
      return;
    }
    
    // Validate file size
    const fileSizeMB = selectedFile.size / (1024 * 1024);
    if (fileSizeMB > maxSizeMB) {
      setErrorMessage(`File size exceeds ${maxSizeMB}MB limit.`);
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
    event.stopPropagation();
    
    const droppedFile = event.dataTransfer.files?.[0];
    
    if (!droppedFile) {
      return;
    }
    
    // Validate file type
    if (!acceptedFileTypes.includes(droppedFile.type)) {
      setErrorMessage('Invalid file format. Please upload a PDF or DOCX file.');
      toast({
        title: "Invalid File Format",
        description: "Only PDF and DOCX files are accepted.",
        variant: "destructive"
      });
      return;
    }
    
    // Validate file size
    const fileSizeMB = droppedFile.size / (1024 * 1024);
    if (fileSizeMB > maxSizeMB) {
      setErrorMessage(`File size exceeds ${maxSizeMB}MB limit.`);
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
    
    setIsUploading(true);
    setUploadStatus('idle');
    
    try {
      let filePath;
      
      // If user is authenticated, save the file to their folder
      if (user) {
        filePath = `${user.id}/${Date.now()}-${file.name}`;
      } else {
        // For anonymous uploads
        filePath = `anonymous/${Date.now()}-${file.name}`;
      }
      
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
          'Authorization': `Bearer ${user ? supabase.auth.getSession().then(res => res.data.session?.access_token) : ''}`
        },
        body: JSON.stringify({
          user_id: user ? user.id : null,
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
        description: "We've received your resume and will review it shortly!",
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

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="upload-resume" className="py-24 bg-gradient-to-tr from-slate-50 to-white">
      <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-7xl">
        <div className="text-center mb-12">
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-medium text-primary">RESUME REVIEW</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Upload Your Resume For Expert Review
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Get personalized feedback on how to improve your resume and increase your chances of landing interviews
          </motion.p>
        </div>

        <motion.div 
          className="max-w-3xl mx-auto"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card className="p-8 border border-slate-200 shadow-sm bg-white rounded-xl overflow-hidden">
            <div className="space-y-6">
              {/* Upload Area */}
              <div 
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-200
                  ${file ? 'border-primary/40 bg-primary/5' : 'border-slate-300 hover:border-primary/30 hover:bg-slate-50'}`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={() => fileInputRef.current?.click()}
              >
                {!file ? (
                  <div className="space-y-4">
                    <div className="bg-slate-100 rounded-full p-4 w-20 h-20 mx-auto flex items-center justify-center">
                      <FileUp className="h-10 w-10 text-slate-500" />
                    </div>
                    <div>
                      <p className="text-lg font-medium">Drag &amp; drop your resume here</p>
                      <p className="text-sm text-muted-foreground mt-2">or click to browse files</p>
                    </div>
                    <div className="text-xs text-muted-foreground mt-4">
                      <p>Accepted formats: PDF, DOCX</p>
                      <p>Maximum size: 5MB</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="bg-primary/10 rounded-full p-3 w-16 h-16 mx-auto flex items-center justify-center">
                      <FileText className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <p className="text-lg font-medium text-slate-900 break-all">{file.name}</p>
                      <p className="text-sm text-muted-foreground mt-1">
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

              {/* Error Message */}
              {errorMessage && (
                <div className="flex items-center gap-2 text-sm text-destructive">
                  <AlertCircle className="h-4 w-4" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* File Actions */}
              {file && (
                <div className="flex justify-between items-center">
                  <Button 
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile();
                    }}
                    className="text-sm"
                  >
                    <XCircle className="h-4 w-4 mr-2" />
                    Remove
                  </Button>
                  
                  <div className="text-sm text-right">
                    {uploadStatus === 'success' && (
                      <span className="text-green-600 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-1" /> Upload successful
                      </span>
                    )}
                    {uploadStatus === 'error' && (
                      <span className="text-destructive flex items-center">
                        <XCircle className="h-4 w-4 mr-1" /> Upload failed
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <Button 
                  className="w-full py-6 text-lg font-medium"
                  disabled={!file || isUploading}
                  onClick={handleSubmit}
                >
                  {isUploading ? (
                    <>
                      <div className="h-5 w-5 rounded-full border-2 border-t-transparent border-white animate-spin mr-2" />
                      Uploading...
                    </>
                  ) : (
                    'Submit Resume For Review'
                  )}
                </Button>
              </div>

              {/* Privacy Notice */}
              <div className="text-xs text-center text-muted-foreground mt-4">
                <p>
                  By uploading your resume, you agree to our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                  Your file will be securely stored and reviewed only for career guidance purposes.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeUploadSection;
