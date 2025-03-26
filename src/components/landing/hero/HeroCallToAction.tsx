
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { ArrowRight, FileText, Upload } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const HeroCallToAction: React.FC = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    
    if (!file) return;
    
    // Check file type
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!validTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF or Word document",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate file upload
    setIsUploading(true);
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      setUploadProgress(progress);
      
      if (progress >= 100) {
        clearInterval(interval);
        setIsUploading(false);
        setIsDialogOpen(true);
        // Reset the file input
        event.target.value = '';
      }
    }, 100);
  };

  return (
    <>
      <motion.div 
        className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6 }
          }
        }}
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button className="glass-button text-base py-6 px-8 rounded-xl w-full sm:w-auto group relative overflow-hidden" asChild>
            <Link to="/resume-builder">
              <span className="relative z-10 flex items-center">
                Create My Resume
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <motion.span 
                className="absolute inset-0 bg-primary/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 1 }}
              />
            </Link>
          </Button>
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="relative"
        >
          <Button variant="outline" className="text-base py-6 px-8 rounded-xl w-full sm:w-auto group hover:bg-secondary/80">
            <label className="flex items-center cursor-pointer">
              <Upload className="mr-2 h-5 w-5 group-hover:text-primary transition-colors" />
              Upload Resume for Free Review
              <input 
                type="file" 
                className="hidden" 
                accept=".pdf,.doc,.docx" 
                onChange={handleFileUpload} 
                disabled={isUploading}
              />
            </label>
          </Button>
          
          {isUploading && (
            <div className="absolute -bottom-8 left-0 w-full px-1">
              <Progress value={uploadProgress} className="h-2" />
              <p className="text-xs text-center mt-1 text-muted-foreground">Uploading... {uploadProgress}%</p>
            </div>
          )}
        </motion.div>
      </motion.div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Resume Review in Progress</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center space-y-4 py-4">
            <div className="w-32 h-32 mb-2">
              {/* Fallback to a simple animation if Lottie is not suitable here */}
              <motion.div 
                className="w-full h-full rounded-full border-4 border-primary/30 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <FileText size={40} className="text-primary" />
              </motion.div>
            </div>
            <h3 className="text-lg font-medium">Our AI is analyzing your resume</h3>
            <p className="text-sm text-center text-muted-foreground">
              We're checking your formatting, ATS compatibility, keywords, and more. 
              This takes about 1-2 minutes.
            </p>
            <div className="w-full mt-4">
              <Progress value={45} className="h-2" /> 
              <p className="text-xs text-center mt-1 text-muted-foreground">Analysis Progress: 45%</p>
            </div>
            <p className="text-sm text-primary mt-4">
              We'll email you a detailed report as soon as it's ready
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HeroCallToAction;
