
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Check, 
  BookOpen, 
  TrendingUp, 
  DollarSign, 
  GraduationCap, 
  Briefcase, 
  Award, 
  ChevronRight,
  ExternalLink 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ContentPageLayout from '@/components/layout/ContentPageLayout';
import { careerPathsData } from '@/data/careerPathsData';
import ITCareerLottie from '@/components/landing/ITCareerLottie';

const CareerPathDetail = () => {
  const { pathId } = useParams<{ pathId: string }>();
  const [careerPath, setCareerPath] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the career path data based on the URL parameter
    const path = careerPathsData.find(path => path.id === pathId);
    if (path) {
      setCareerPath(path);
    }
    setLoading(false);
  }, [pathId]);

  if (loading) {
    return (
      <ContentPageLayout title="Loading Career Path...">
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </ContentPageLayout>
    );
  }

  if (!careerPath) {
    return (
      <ContentPageLayout title="Career Path Not Found">
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold mb-4">Career Path Not Found</h2>
          <p className="text-muted-foreground mb-8">The career path you're looking for doesn't exist or has been moved.</p>
          <Link to="/it-career-paths">
            <Button>Back to Career Paths</Button>
          </Link>
        </div>
      </ContentPageLayout>
    );
  }

  return (
    <ContentPageLayout 
      title={careerPath.title}
      subtitle={careerPath.description}
    >
      {/* Breadcrumbs & Back Button */}
      <div className="flex items-center gap-2 mb-8 text-sm">
        <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
        <Link to="/it-career-paths" className="text-muted-foreground hover:text-foreground">IT Career Paths</Link>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
        <span className="font-medium">{careerPath.title}</span>
      </div>

      {/* Hero Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className={`${careerPath.bgColor} p-3 rounded-xl`}>
                <span className={careerPath.iconColor}>{careerPath.icon}</span>
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">{careerPath.title}</h1>
              </div>
            </div>
            
            <p className="text-lg mb-6">{careerPath.longDescription || careerPath.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg">
                <div className="bg-green-50 p-2 rounded">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium">Growth Potential</p>
                  <p className="text-sm text-muted-foreground">{careerPath.growthPotential}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg">
                <div className="bg-blue-50 p-2 rounded">
                  <DollarSign className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">Average Salary Range</p>
                  <p className="text-sm text-muted-foreground">{careerPath.salaryRange}</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {careerPath.keySkills && careerPath.keySkills.map((skill: string, index: number) => (
                <Badge key={index} variant="secondary">{skill}</Badge>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Link to="/resume-builder">
                <Button className="glass-button">
                  <Briefcase className="mr-2 h-4 w-4" />
                  Build a Resume for This Field
                </Button>
              </Link>
              <Button variant="outline" asChild>
                <Link to="/templates">
                  Browse Resume Templates
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-slate-50 p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-4">Quick Facts</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <div className="bg-indigo-50 p-1 rounded mt-0.5">
                  <GraduationCap className="h-4 w-4 text-indigo-600" />
                </div>
                <div>
                  <p className="font-medium">Education Requirements</p>
                  <p className="text-sm text-muted-foreground">{careerPath.educationRequirements}</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-amber-50 p-1 rounded mt-0.5">
                  <Briefcase className="h-4 w-4 text-amber-600" />
                </div>
                <div>
                  <p className="font-medium">Job Outlook</p>
                  <p className="text-sm text-muted-foreground">{careerPath.jobOutlook}</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-emerald-50 p-1 rounded mt-0.5">
                  <Award className="h-4 w-4 text-emerald-600" />
                </div>
                <div>
                  <p className="font-medium">Top Certifications</p>
                  <p className="text-sm text-muted-foreground">{careerPath.topCertifications}</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-rose-50 p-1 rounded mt-0.5">
                  <BookOpen className="h-4 w-4 text-rose-600" />
                </div>
                <div>
                  <p className="font-medium">Learning Resources</p>
                  <p className="text-sm text-muted-foreground">{careerPath.learningResources}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Career Roles Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Career Roles & Positions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerPath.roles.map((role: any, index: number) => (
            <Card key={index} className="overflow-hidden h-full hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{role.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase font-medium text-slate-500 mb-1">Key Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {role.skills.map((skill: string, idx: number) => (
                        <span key={idx} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-xs uppercase font-medium text-slate-500 mb-1">Salary Range</p>
                    <p className="text-sm">{role.salary}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs uppercase font-medium text-slate-500 mb-1">Recommended Certifications</p>
                    <ul className="text-sm space-y-1">
                      {role.certifications.map((cert: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-4 w-4 text-green-600 mr-1 mt-0.5 flex-shrink-0" />
                          <span>{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Career Path Details Tabs */}
      <section className="mb-16">
        <Tabs defaultValue="skills" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="skills">Skills & Technologies</TabsTrigger>
            <TabsTrigger value="education">Education & Training</TabsTrigger>
            <TabsTrigger value="career">Career Progression</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>
          
          <TabsContent value="skills" className="p-6 bg-slate-50 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Essential Skills & Technologies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-3">Technical Skills</h4>
                <ul className="space-y-2">
                  {careerPath.technicalSkills && careerPath.technicalSkills.map((skill: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">Soft Skills</h4>
                <ul className="space-y-2">
                  {careerPath.softSkills && careerPath.softSkills.map((skill: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <h4 className="text-lg font-semibold mt-6 mb-3">Key Technologies & Tools</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {careerPath.technologies && careerPath.technologies.map((tech: string, idx: number) => (
                <div key={idx} className="bg-white p-3 rounded border text-center">
                  {tech}
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm">
                <strong>Pro Tip:</strong> {careerPath.skillTip || "Focus on building a strong foundation in the core technologies before specializing in a particular area."}
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="education" className="p-6 bg-slate-50 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Education & Training Pathways</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-3">Formal Education</h4>
                <p className="mb-2">{careerPath.formalEducation || "Recommended formal education pathways for this career:"}</p>
                <ul className="space-y-2">
                  {careerPath.educationPaths && careerPath.educationPaths.map((path: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span>{path}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3">Certifications</h4>
                <p className="mb-2">{careerPath.certificationInfo || "Industry-recognized certifications that can boost your career prospects:"}</p>
                <ul className="space-y-2">
                  {careerPath.certifications && careerPath.certifications.map((cert: any, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">{cert.name}</p>
                        {cert.description && <p className="text-sm text-muted-foreground">{cert.description}</p>}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3">Alternative Learning Paths</h4>
                <p className="mb-2">{careerPath.alternativeLearning || "Non-traditional education paths that can help you enter this field:"}</p>
                <ul className="space-y-2">
                  {careerPath.alternativePaths && careerPath.alternativePaths.map((path: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span>{path}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="career" className="p-6 bg-slate-50 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Career Progression Path</h3>
            
            <div className="relative py-6">
              {/* Career progression timeline */}
              <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200"></div>
              
              {careerPath.careerProgression && careerPath.careerProgression.map((stage: any, idx: number) => (
                <div key={idx} className="relative pl-10 mb-8">
                  <div className="absolute left-0 top-1 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center">
                    {idx + 1}
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold mb-1">{stage.level}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{stage.timeframe}</p>
                    <p className="mb-2">{stage.description}</p>
                    <div className="text-sm">
                      <p className="font-medium mb-1">Common Roles:</p>
                      <p>{stage.roles}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 p-4 bg-amber-50 rounded-lg">
              <p className="text-sm">
                <strong>Career Insight:</strong> {careerPath.careerInsight || "Career progression can vary widely based on industry, company size, and location. Continuous learning and networking are key to advancement."}
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="resources" className="p-6 bg-slate-50 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Learning Resources & Communities</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-3">Online Courses & Platforms</h4>
                <ul className="space-y-2">
                  {careerPath.onlineCourses && careerPath.onlineCourses.map((course: any, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <ExternalLink className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">{course.name}</p>
                        {course.url && <a href={course.url} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">Visit Course</a>}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3">Books & Publications</h4>
                <ul className="space-y-2">
                  {careerPath.books && careerPath.books.map((book: any, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <BookOpen className="h-4 w-4 text-violet-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">{book.title}</p>
                        {book.author && <p className="text-sm text-muted-foreground">by {book.author}</p>}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3">Communities & Networking</h4>
              <ul className="space-y-2">
                {careerPath.communities && careerPath.communities.map((community: any, idx: number) => (
                  <li key={idx} className="flex items-start">
                    <ExternalLink className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">{community.name}</p>
                      {community.description && <p className="text-sm text-muted-foreground">{community.description}</p>}
                      {community.url && <a href={community.url} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">Visit Community</a>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </section>
      
      {/* Related Career Paths */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Related Career Paths</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {careerPath.relatedPaths && careerPath.relatedPaths.map((relatedPathId: string) => {
            const related = careerPathsData.find(p => p.id === relatedPathId);
            if (!related) return null;
            
            return (
              <Card key={relatedPathId} className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`${related.bgColor} p-2 rounded-lg`}>
                      <span className={related.iconColor}>{related.icon}</span>
                    </div>
                    <h3 className="font-semibold">{related.title}</h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">{related.description}</p>
                  
                  <Link to={`/career-path/${related.id}`} className="text-primary hover:underline flex items-center">
                    Explore this path <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center mb-8">
        <h2 className="text-2xl font-bold mb-3">Start Your {careerPath.title} Career Today</h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
          Create an ATS-optimized resume tailored for {careerPath.title} roles using our AI-powered platform.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/resume-builder">
            <Button size="lg" className="glass-button">
              <Briefcase className="mr-2 h-5 w-5" />
              Build Your Resume
            </Button>
          </Link>
          <Link to="/it-career-paths">
            <Button variant="outline" size="lg">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to All Careers
            </Button>
          </Link>
        </div>
      </section>
    </ContentPageLayout>
  );
};

export default CareerPathDetail;
