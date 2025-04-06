
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileUp, CheckCircle, XCircle, AlertCircle, FileText, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { motion, AnimatePresence } from "framer-motion";

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

  // Reset success/error state after 5 seconds
  useEffect(() => {
    if (uploadStatus !== 'idle') {
      const timer = setTimeout(() => {
        setUploadStatus('idle');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [uploadStatus]);

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
          'Authorization': `Bearer ${await supabase.auth.getSession().then(res => res.data.session?.access_token)}`
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
    <Card className="shadow-sm bg-white overflow-hidden">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center">
          <Upload className="mr-2 h-5 w-5 text-primary" />
          Upload Your Resume
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div 
          className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-all duration-200 relative
            ${file ? 'border-primary/40 bg-primary/5' : 'border-slate-300 hover:border-primary/30 hover:bg-slate-50'}`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={() => fileInputRef.current?.click()}
        >
          {/* Animated background flare effect */}
          {!file && (
            <AnimatePresence>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-lg pointer-events-none" 
                animate={{
                  x: ["0%", "100%"],
                  opacity: [0, 0.2, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  repeatDelay: 1
                }}
              />
            </AnimatePresence>
          )}
          
          {!file ? (
            <div className="space-y-3 relative z-10">
              <motion.div 
                className="bg-slate-100 rounded-full p-3 w-16 h-16 mx-auto flex items-center justify-center"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(224, 242, 254, 0.8)" }}
                transition={{ duration: 0.2 }}
              >
                <FileUp className="h-8 w-8 text-slate-500" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-medium">Drag &amp; drop your resume here</p>
                <p className="text-sm text-muted-foreground mt-1">or click to browse files</p>
              </motion.div>
              <motion.div 
                className="text-xs text-muted-foreground mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <p>Accepted formats: PDF, DOCX | Maximum size: 5MB</p>
              </motion.div>
            </div>
          ) : (
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-primary/10 rounded-full p-2 w-12 h-12 mx-auto flex items-center justify-center">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium text-slate-900 break-all">{file.name}</p>
                <p className="text-xs text-muted-foreground">
                  {(file.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
            </motion.div>
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
          <motion.div 
            className="flex items-center gap-2 text-xs text-destructive"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <AlertCircle className="h-3 w-3" />
            <span>{errorMessage}</span>
          </motion.div>
        )}

        {file && (
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
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
            </motion.div>
            
            <div className="text-xs text-right">
              {uploadStatus === 'success' && (
                <motion.span 
                  className="text-green-600 flex items-center"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <CheckCircle className="h-3 w-3 mr-1" /> Upload successful
                </motion.span>
              )}
              {uploadStatus === 'error' && (
                <motion.span 
                  className="text-destructive flex items-center"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <XCircle className="h-3 w-3 mr-1" /> Upload failed
                </motion.span>
              )}
            </div>
          </div>
        )}

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button 
            className="w-full relative overflow-hidden group"
            disabled={!file || isUploading}
            onClick={handleSubmit}
          >
            {/* Shimmer effect on hover */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 pointer-events-none"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            
            {isUploading ? (
              <>
                <div className="h-4 w-4 rounded-full border-2 border-t-transparent border-white animate-spin mr-2" />
                <span className="relative z-10">Uploading...</span>
              </>
            ) : (
              <span className="relative z-10">Submit Resume For Review</span>
            )}
          </Button>
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default ResumeUploadWidget;
