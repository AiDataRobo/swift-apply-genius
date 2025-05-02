
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, FileText, CheckCircle, AlertCircle, ArrowRight, Upload } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

const AIAssistantPanel = () => {
  // State for resume upload and analysis
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const { toast } = useToast();

  // Mock data for ATS score
  const resumeScore = 78;
  const suggestions = [
    {
      id: 1,
      type: 'improvement',
      title: 'Add quantifiable achievements',
      description: 'Include metrics and results to strengthen your work experience section.',
      icon: <CheckCircle className="h-5 w-5 text-amber-500" />,
    },
    {
      id: 2,
      type: 'warning',
      title: 'Skills section needs work',
      description: 'Your technical skills section is missing key technologies for this role.',
      icon: <AlertCircle className="h-5 w-5 text-destructive" />,
    },
    {
      id: 3,
      type: 'enhancement',
      title: 'Improve job title alignment',
      description: "Adjust your job titles to better match the positions you're applying for.",
      icon: <AlertCircle className="h-5 w-5 text-primary" />,
    },
  ];

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      toast({
        title: "Resume uploaded",
        description: "Your resume is ready for ATS analysis.",
      });
    }
  };

  const analyzeResume = () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please upload a resume to analyze.",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate analysis process
    setTimeout(() => {
      setIsAnalyzing(false);
      setIsUploaded(true);
      toast({
        title: "ATS Analysis Complete",
        description: "Your resume scored 78/100. View detailed suggestions below.",
      });
    }, 2500);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Sparkles className="h-5 w-5 text-primary mr-2" />
          <h2 className="text-2xl font-bold">ATS Score Checker</h2>
        </div>
      </div>

      {/* Resume Upload Section */}
      <Card className="overflow-hidden">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center p-6 border-2 border-dashed border-muted-foreground/25 rounded-lg text-center">
            <div className="mb-4 bg-muted/50 p-3 rounded-full">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            
            <h3 className="text-lg font-medium mb-2">Upload your resume</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Upload your resume to check its ATS compatibility score
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <Button variant="outline" className="relative overflow-hidden" onClick={() => document.getElementById('resume-upload')?.click()}>
                <Upload className="mr-2 h-4 w-4" />
                Select Resume
                <input
                  id="resume-upload"
                  type="file"
                  accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={handleFileChange}
                />
              </Button>
              
              <Button 
                disabled={!file || isAnalyzing} 
                onClick={analyzeResume} 
                className="flex-1"
              >
                {isAnalyzing ? (
                  <>
                    <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></div>
                    Analyzing...
                  </>
                ) : (
                  "Check ATS Score"
                )}
              </Button>
            </div>
            
            {file && (
              <div className="mt-4 text-sm flex items-center gap-2 text-primary">
                <CheckCircle className="h-4 w-4" />
                <span className="font-medium">{file.name}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {/* ATS Score Card */}
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-4">ATS Optimization Score</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Current Score</span>
                <span className="font-medium">{resumeScore}/100</span>
              </div>
              
              <Progress value={resumeScore} className="h-3 w-full" />
              
              <div className="flex items-center space-x-2 mt-2">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                <span className="text-xs text-muted-foreground">0-50: Needs Work</span>
                
                <div className="h-2.5 w-2.5 rounded-full bg-amber-500 ml-2"></div>
                <span className="text-xs text-muted-foreground">51-80: Good</span>
                
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 ml-2"></div>
                <span className="text-xs text-muted-foreground">81-100: Excellent</span>
              </div>
            </div>
            
            <div className="mt-6">
              <Button className="w-full">
                Get Detailed Analysis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Keywords Analysis */}
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-4">ATS Keywords Summary</h3>
            
            <div className="space-y-3">
              <div className="bg-muted/30 p-3 rounded-lg">
                <h4 className="text-sm font-medium">Missing Keywords</h4>
                <div className="flex flex-wrap gap-1 mt-2">
                  {["Project Management", "Agile", "Leadership", "Data Analysis", "Strategic Planning"].map((keyword, idx) => (
                    <span key={idx} className="bg-destructive/10 text-destructive text-xs px-2 py-1 rounded-full">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-muted/30 p-3 rounded-lg">
                <h4 className="text-sm font-medium">Detected Keywords</h4>
                <div className="flex flex-wrap gap-1 mt-2">
                  {["React", "TypeScript", "UI/UX", "Frontend", "JavaScript"].map((keyword, idx) => (
                    <span key={idx} className="bg-green-500/10 text-green-600 text-xs px-2 py-1 rounded-full">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <Button variant="outline" className="w-full">
                Generate Keyword Suggestions
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Improvement Suggestions */}
      <div>
        <h3 className="text-lg font-semibold mb-4">ATS Improvement Suggestions</h3>
        <div className="space-y-3">
          {suggestions.map(suggestion => (
            <div key={suggestion.id} className="flex items-start p-4 bg-secondary/30 rounded-lg">
              <div className="mr-3 mt-0.5">
                {suggestion.icon}
              </div>
              <div>
                <h4 className="font-medium">{suggestion.title}</h4>
                <p className="text-sm text-muted-foreground">{suggestion.description}</p>
                <div className="mt-2">
                  <Button variant="ghost" size="sm" className="h-7 px-2 text-xs text-primary">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIAssistantPanel;
