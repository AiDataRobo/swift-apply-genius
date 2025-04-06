
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Sparkles, Upload, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import CalBookingModal from "@/components/booking/CalBookingModal";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

const HeroCallToAction = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const { user } = useAuth();
  
  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);

  // Reset success state after 3 seconds
  useEffect(() => {
    if (uploadSuccess) {
      const timer = setTimeout(() => {
        setUploadSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [uploadSuccess]);

  const handleResumeReviewClick = (e: React.MouseEvent) => {
    e.preventDefault();
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    
    if (!selectedFile) return;
    
    // Validate file type
    const acceptedFileTypes = [
      'application/pdf', 
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];

    if (!acceptedFileTypes.includes(selectedFile.type)) {
      toast({
        title: "Invalid File Format",
        description: "Please upload a PDF or DOCX file.",
        variant: "destructive"
      });
      return;
    }
    
    // Validate file size
    const maxSizeMB = 5;
    const fileSizeMB = selectedFile.size / (1024 * 1024);
    if (fileSizeMB > maxSizeMB) {
      toast({
        title: "File Too Large",
        description: `Maximum file size is ${maxSizeMB}MB.`,
        variant: "destructive"
      });
      return;
    }
    
    setFile(selectedFile);
    await handleUpload(selectedFile);
  };

  const handleUpload = async (fileToUpload: File) => {
    if (!fileToUpload) return;
    
    setIsUploading(true);
    
    try {
      let filePath;
      
      // If user is authenticated, save the file to their folder
      if (user) {
        filePath = `${user.id}/${Date.now()}-${fileToUpload.name}`;
      } else {
        // For anonymous uploads
        filePath = `anonymous/${Date.now()}-${fileToUpload.name}`;
      }
      
      // Upload file to Supabase Storage
      const { data, error } = await supabase.storage
        .from('resumes')
        .upload(filePath, fileToUpload, {
          cacheControl: '3600',
          upsert: false
        });
        
      if (error) {
        throw error;
      }
      
      // Call the Edge Function to create resume submission
      const functionUrl = `https://myxltvsyrmmiqmhgdsbi.supabase.co/functions/v1/create-resume-submission`;
      const response = await fetch(functionUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user ? await supabase.auth.getSession().then(res => res.data.session?.access_token) : ''}`
        },
        body: JSON.stringify({
          user_id: user ? user.id : null,
          file_path: filePath,
          file_name: fileToUpload.name,
          file_size: fileToUpload.size,
          file_type: fileToUpload.type,
          status: 'pending'
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to process resume submission');
      }
      
      setUploadSuccess(true);
      toast({
        title: "Resume Uploaded Successfully",
        description: "We've received your resume and will provide feedback soon.",
      });
      
    } catch (error: any) {
      console.error("Upload error:", error);
      toast({
        title: "Upload Failed",
        description: "There was an error uploading your resume. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsUploading(false);
      setFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="flex-1"
      >
        <Link to="/resume-builder" className="block">
          <Button size="lg" className="glass-button w-full sm:w-auto py-6 px-8 h-auto text-base">
            <FileText className="mr-2 h-5 w-5" />
            Create Your Resume
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </motion.div>
      
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="flex-1"
      >
        <Button 
          variant="outline" 
          size="lg"
          className="group border-primary/20 hover:border-primary/40 w-full py-6 px-8 h-auto text-base relative overflow-hidden"
          onClick={handleResumeReviewClick}
          disabled={isUploading}
        >
          {isUploading ? (
            <>
              <div className="h-4 w-4 rounded-full border-2 border-t-transparent border-current animate-spin mr-2" />
              <span>Uploading...</span>
            </>
          ) : uploadSuccess ? (
            <>
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-center"
              >
                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                <span>Upload Successful</span>
              </motion.div>
            </>
          ) : (
            <>
              <AnimatePresence>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"
                  animate={{
                    x: ["0%", "100%"],
                    opacity: [0, 0.3, 0]
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

              <Sparkles className="mr-2 h-5 w-5 text-amber-500 group-hover:scale-110 transition-transform" />
              <span className="relative z-10">Review Your Resume</span>
            </>
          )}
        </Button>
      </motion.div>

      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      />

      <CalBookingModal 
        isOpen={isBookingModalOpen} 
        onClose={closeBookingModal} 
        calLink="vishal17/expertcareeradvice"
      />
    </div>
  );
};

export default HeroCallToAction;
