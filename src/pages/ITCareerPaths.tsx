
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Code, Shield, Database, Cloud, Laptop, Layout, 
  Check, Briefcase, GraduationCap, DollarSign, TrendingUp, HelpCircle 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import ContentPageLayout from '@/components/layout/ContentPageLayout';

// Career path data structure
const careerPaths = [
  {
    id: 'software-development',
    title: 'Software Development',
    description: 'Design, develop, and maintain software applications and systems.',
    icon: <Code className="h-8 w-8" />,
    bgColor: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    roles: [
      {
        title: 'Frontend Developer',
        skills: ['HTML/CSS', 'JavaScript', 'React/Angular/Vue', 'Responsive Design'],
        salary: '$75,000 - $120,000',
        certifications: ['Meta Front-End Developer', 'JavaScript Certification'],
        description: 'Create the user interface and user experience of websites and applications.'
      },
      {
        title: 'Backend Developer',
        skills: ['Python', 'Java', 'Node.js', 'Databases', 'API Design'],
        salary: '$85,000 - $140,000',
        certifications: ['AWS Certified Developer', 'Oracle Certified Professional'],
        description: 'Build server-side logic, databases, and application integration.'
      },
      {
        title: 'Full Stack Developer',
        skills: ['Frontend & Backend Technologies', 'DevOps', 'System Architecture'],
        salary: '$90,000 - $150,000',
        certifications: ['Full Stack Web Developer Certification', 'MongoDB Certification'],
        description: 'Handle both client and server-side development for complete web applications.'
      },
      {
        title: 'Mobile Developer',
        skills: ['Swift (iOS)', 'Kotlin (Android)', 'React Native', 'Flutter'],
        salary: '$80,000 - $130,000',
        certifications: ['Android Certified Developer', 'Apple Certified iOS Developer'],
        description: 'Create applications for mobile devices across various platforms.'
      }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Protect systems, networks, and programs from digital attacks.',
    icon: <Shield className="h-8 w-8" />,
    bgColor: 'bg-red-50',
    iconColor: 'text-red-600',
    roles: [
      {
        title: 'Security Analyst',
        skills: ['Security Information Systems', 'Threat Detection', 'Risk Assessment'],
        salary: '$85,000 - $130,000',
        certifications: ['CompTIA Security+', 'Certified Information Systems Security Professional (CISSP)'],
        description: 'Monitor and analyze security systems and respond to security breaches.'
      },
      {
        title: 'Ethical Hacker',
        skills: ['Penetration Testing', 'Vulnerability Assessment', 'Coding'],
        salary: '$90,000 - $150,000',
        certifications: ['Certified Ethical Hacker (CEH)', 'GIAC Penetration Tester'],
        description: 'Identify and fix security vulnerabilities before malicious hackers can exploit them.'
      },
      {
        title: 'Security Engineer',
        skills: ['Network Security', 'Security Architecture', 'Secure Coding Practices'],
        salary: '$100,000 - $160,000',
        certifications: ['Certified Information Security Manager (CISM)', 'GIAC Security Essentials'],
        description: 'Design and implement security solutions to protect organizational assets.'
      }
    ]
  },
  {
    id: 'data-science',
    title: 'Data Science & AI',
    description: 'Extract insights and build predictive models from complex data.',
    icon: <Database className="h-8 w-8" />,
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
    roles: [
      {
        title: 'Data Analyst',
        skills: ['SQL', 'Excel', 'Data Visualization (Tableau/Power BI)', 'Statistics'],
        salary: '$65,000 - $95,000',
        certifications: ['Microsoft Certified: Data Analyst Associate', 'IBM Data Analyst Professional'],
        description: 'Transform and analyze data to support business decision-making.'
      },
      {
        title: 'Data Scientist',
        skills: ['Python/R', 'Machine Learning', 'Statistical Analysis', 'Big Data'],
        salary: '$95,000 - $165,000',
        certifications: ['IBM Data Science Professional', 'Google Data Analytics Professional'],
        description: 'Apply algorithms, statistical models, and machine learning to extract patterns from data.'
      },
      {
        title: 'AI Engineer',
        skills: ['Deep Learning', 'Neural Networks', 'Natural Language Processing', 'Computer Vision'],
        salary: '$110,000 - $180,000',
        certifications: ['Microsoft Certified: Azure AI Engineer', 'TensorFlow Developer Certificate'],
        description: 'Design and implement AI systems that can perform tasks that typically require human intelligence.'
      }
    ]
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Computing & DevOps',
    description: 'Build, deploy, and manage applications in cloud environments.',
    icon: <Cloud className="h-8 w-8" />,
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    roles: [
      {
        title: 'Cloud Engineer',
        skills: ['AWS/Azure/GCP', 'Cloud Architecture', 'IaaS, PaaS, SaaS'],
        salary: '$90,000 - $140,000',
        certifications: ['AWS Certified Solutions Architect', 'Microsoft Certified: Azure Solutions Architect'],
        description: 'Design and implement cloud-based solutions for organizations.'
      },
      {
        title: 'DevOps Engineer',
        skills: ['CI/CD', 'Docker', 'Kubernetes', 'Terraform', 'Automation'],
        salary: '$100,000 - $160,000',
        certifications: ['AWS Certified DevOps Engineer', 'Docker Certified Associate'],
        description: 'Bridge software development and IT operations to improve deployment frequency and reliability.'
      },
      {
        title: 'Site Reliability Engineer',
        skills: ['Monitoring', 'Incident Response', 'System Design', 'Performance Optimization'],
        salary: '$120,000 - $180,000',
        certifications: ['Google Professional Cloud DevOps Engineer', 'Kubernetes Administrator (CKA)'],
        description: 'Focus on availability, latency, performance, and capacity of software systems.'
      }
    ]
  },
  {
    id: 'it-support',
    title: 'IT Support & Networking',
    description: 'Maintain and optimize IT infrastructure and provide technical support.',
    icon: <Laptop className="h-8 w-8" />,
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
    roles: [
      {
        title: 'IT Support Specialist',
        skills: ['Technical Troubleshooting', 'Desktop Support', 'Customer Service'],
        salary: '$45,000 - $80,000',
        certifications: ['CompTIA A+', 'Microsoft Certified: Modern Desktop Administrator'],
        description: 'Provide technical assistance to computer users and resolve hardware/software issues.'
      },
      {
        title: 'Network Administrator',
        skills: ['Network Protocols', 'Routing/Switching', 'Network Security'],
        salary: '$65,000 - $110,000',
        certifications: ['CompTIA Network+', 'Cisco Certified Network Associate (CCNA)'],
        description: 'Maintain and administer computer networks and related computing environments.'
      },
      {
        title: 'System Administrator',
        skills: ['Windows/Linux', 'Server Management', 'Virtualization'],
        salary: '$70,000 - $120,000',
        certifications: ['Red Hat Certified System Administrator', 'Microsoft Certified: Windows Server'],
        description: 'Configure, maintain, and ensure the reliable operation of computer systems.'
      }
    ]
  },
  {
    id: 'product-design',
    title: 'Product & UI/UX Design',
    description: 'Create intuitive, user-friendly digital products and experiences.',
    icon: <Layout className="h-8 w-8" />,
    bgColor: 'bg-amber-50',
    iconColor: 'text-amber-600',
    roles: [
      {
        title: 'UX Designer',
        skills: ['User Research', 'Information Architecture', 'Wireframing', 'Usability Testing'],
        salary: '$75,000 - $120,000',
        certifications: ['Nielsen Norman Group UX Certification', 'Google UX Design Professional'],
        description: 'Research and optimize the user experience of digital products.'
      },
      {
        title: 'UI Designer',
        skills: ['Visual Design', 'Typography', 'Color Theory', 'Design Systems'],
        salary: '$70,000 - $115,000',
        certifications: ['Adobe Certified Expert', 'Interaction Design Foundation Certification'],
        description: 'Create visually appealing, intuitive interfaces for digital products.'
      },
      {
        title: 'Product Manager',
        skills: ['Product Strategy', 'Market Research', 'Agile Methodologies', 'User Stories'],
        salary: '$90,000 - $150,000',
        certifications: ['Certified Scrum Product Owner', 'Product Management Certification'],
        description: 'Lead the development and launch of products from conception to market.'
      }
    ]
  }
];

// FAQ data
const faqItems = [
  {
    question: 'What IT career has the highest salary potential?',
    answer: 'AI and Machine Learning Engineers, Cloud Architects, and Information Security Specialists typically have the highest salary potential. However, salary varies by location, experience, and specific company.'
  },
  {
    question: 'Do I need a computer science degree to work in IT?',
    answer: 'No, while a relevant degree can be helpful, many IT professionals enter the field through alternative pathways like bootcamps, certifications, and self-learning. Skills and hands-on experience are often valued over formal education.'
  },
  {
    question: 'Which IT field is growing the fastest?',
    answer: 'Artificial Intelligence, Cybersecurity, and Cloud Computing are currently experiencing the fastest growth in the IT industry. These fields offer abundant opportunities for career advancement.'
  },
  {
    question: 'How do I choose the right IT career for me?',
    answer: 'Consider your personal interests, strengths, work style preferences, and desired salary. Try exploring different areas through online courses or small projects before committing to a specific path.'
  },
  {
    question: 'How can I transition into IT from another field?',
    answer: 'Start by identifying transferable skills from your current role, focus on learning fundamental IT concepts, obtain relevant certifications, build a portfolio of projects, and network with IT professionals.'
  }
];

// Quiz questions for career recommendation
const quizQuestions = [
  {
    id: 'q1',
    question: 'What aspect of IT interests you the most?',
    options: [
      { value: 'software', label: 'Building software applications' },
      { value: 'security', label: 'Protecting systems from threats' },
      { value: 'data', label: 'Analyzing data and finding patterns' },
      { value: 'infrastructure', label: 'Managing IT systems and cloud services' },
      { value: 'design', label: 'Creating user interfaces and experiences' }
    ]
  },
  {
    id: 'q2',
    question: 'How would you describe your problem-solving style?',
    options: [
      { value: 'creative', label: 'Creative and innovative' },
      { value: 'analytical', label: 'Analytical and detail-oriented' },
      { value: 'strategic', label: 'Strategic and big-picture focused' },
      { value: 'practical', label: 'Practical and hands-on' },
      { value: 'collaborative', label: 'Collaborative and people-oriented' }
    ]
  },
  {
    id: 'q3',
    question: 'What kind of work environment do you prefer?',
    options: [
      { value: 'flexible', label: 'Flexible and varied projects' },
      { value: 'structured', label: 'Structured with clear processes' },
      { value: 'innovative', label: 'Fast-paced and innovative' },
      { value: 'collaborative', label: 'Collaborative team-based work' },
      { value: 'independent', label: 'Independent with autonomy' }
    ]
  }
];

const ITCareerPaths = () => {
  // State for career quiz
  const [showQuiz, setShowQuiz] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [recommendation, setRecommendation] = useState<string | null>(null);

  // Handle quiz submission
  const handleQuizSubmit = () => {
    // Simple recommendation logic based on answers
    if (answers.q1 === 'software') {
      setRecommendation('software-development');
    } else if (answers.q1 === 'security') {
      setRecommendation('cybersecurity');
    } else if (answers.q1 === 'data') {
      setRecommendation('data-science');
    } else if (answers.q1 === 'infrastructure') {
      setRecommendation('cloud-devops');
    } else if (answers.q1 === 'design') {
      setRecommendation('product-design');
    } else {
      // Default or fallback recommendation
      setRecommendation('software-development');
    }
  };

  // Reset quiz
  const resetQuiz = () => {
    setAnswers({});
    setRecommendation(null);
  };

  return (
    <ContentPageLayout 
      title="IT Career Paths Guide" 
      subtitle="Explore different IT careers, required skills, salary insights, and growth opportunities."
    >
      {/* Hero Section */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Discover Your Ideal <span className="text-primary">IT Career Path</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              The tech industry offers diverse and rewarding career opportunities. 
              Explore various paths to find the one that matches your skills, interests, 
              and career goals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="glass-button"
                onClick={() => setShowQuiz(true)}
              >
                Take Career Quiz
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.scrollTo({ top: document.getElementById('career-paths')?.offsetTop - 100, behavior: 'smooth' })}
              >
                Browse All Careers
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src="/placeholder.svg" 
              alt="IT Career Paths" 
              className="rounded-xl shadow-lg max-w-full h-auto"
              style={{ maxHeight: '400px' }}
            />
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section id="career-paths" className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore IT Career Paths</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Each IT career path offers unique challenges and rewards. Explore the details 
            of each path to find your best fit.
          </p>
        </div>

        <Tabs defaultValue="software-development" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-8 gap-2">
            {careerPaths.map((path) => (
              <TabsTrigger 
                key={path.id} 
                value={path.id}
                className="px-4 py-2 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <span className="flex items-center gap-2">
                  <span className={path.iconColor}>{path.icon}</span>
                  <span className="hidden md:inline">{path.title}</span>
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {careerPaths.map((path) => (
            <TabsContent key={path.id} value={path.id} className="focus:outline-none">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                  <div className={`${path.bgColor} inline-flex rounded-xl p-4 mb-4`}>
                    <span className={path.iconColor}>{path.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{path.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6">{path.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-lg mb-3">Career Outlook</h4>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="bg-green-50 p-2 rounded">
                        <TrendingUp className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">Growth Potential</p>
                        <p className="text-sm text-muted-foreground">
                          {path.id === 'software-development' && 'Projected 22% growth over the next decade'}
                          {path.id === 'cybersecurity' && 'Projected 33% growth over the next decade'}
                          {path.id === 'data-science' && 'Projected 31% growth over the next decade'}
                          {path.id === 'cloud-devops' && 'Projected 25% growth over the next decade'}
                          {path.id === 'it-support' && 'Projected 15% growth over the next decade'}
                          {path.id === 'product-design' && 'Projected 20% growth over the next decade'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-50 p-2 rounded">
                        <DollarSign className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Salary Range</p>
                        <p className="text-sm text-muted-foreground">
                          {path.id === 'software-development' && '$75,000 - $150,000 depending on specialization'}
                          {path.id === 'cybersecurity' && '$85,000 - $160,000 depending on role'}
                          {path.id === 'data-science' && '$65,000 - $180,000 based on expertise'}
                          {path.id === 'cloud-devops' && '$90,000 - $180,000 with experience'}
                          {path.id === 'it-support' && '$45,000 - $120,000 varying by position'}
                          {path.id === 'product-design' && '$70,000 - $150,000 based on role'}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <Link to="/resume-builder">
                    <Button className="glass-button">Build a Resume for This Field</Button>
                  </Link>
                </div>
                
                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="font-semibold text-lg mb-4">Key Roles</h4>
                  <div className="space-y-4">
                    {path.roles.map((role, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                        <h5 className="font-semibold mb-2">{role.title}</h5>
                        <p className="text-sm text-muted-foreground mb-3">{role.description}</p>
                        
                        <div className="space-y-3">
                          <div>
                            <p className="text-xs uppercase font-medium text-slate-500 mb-1">Key Skills</p>
                            <div className="flex flex-wrap gap-2">
                              {role.skills.map((skill, idx) => (
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
                              {role.certifications.map((cert, idx) => (
                                <li key={idx} className="flex items-start">
                                  <Check className="h-4 w-4 text-green-600 mr-1 mt-0.5 flex-shrink-0" />
                                  <span>{cert}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Career Quiz Section */}
      <section id="career-quiz" className="mb-20 bg-slate-50 rounded-xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3">Find Your IT Career Match</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take our quick quiz to discover which IT career paths best match your interests, skills, and preferences.
          </p>
        </div>

        {!showQuiz && !recommendation ? (
          <div className="text-center">
            <Button 
              size="lg" 
              className="glass-button"
              onClick={() => setShowQuiz(true)}
            >
              Start Career Quiz
            </Button>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm">
            {recommendation ? (
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="bg-green-100 p-4 rounded-full">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Your Result</h3>
                <p className="mb-4">Based on your answers, you might enjoy a career in:</p>
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <h4 className="text-xl font-semibold mb-2">
                    {careerPaths.find(path => path.id === recommendation)?.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {careerPaths.find(path => path.id === recommendation)?.description}
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    className="glass-button"
                    onClick={() => {
                      document.getElementById(recommendation)?.scrollIntoView({ behavior: 'smooth' });
                      const tabTrigger = document.querySelector(`[data-state="inactive"][value="${recommendation}"]`) as HTMLElement;
                      if (tabTrigger) tabTrigger.click();
                    }}
                  >
                    Explore This Path
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={resetQuiz}
                  >
                    Restart Quiz
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold mb-6">Answer a few questions to get started</h3>
                <div className="space-y-8">
                  {quizQuestions.map((q) => (
                    <div key={q.id} className="mb-6">
                      <p className="font-medium mb-3">{q.question}</p>
                      <div className="space-y-2">
                        {q.options.map((option) => (
                          <label key={option.value} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-slate-50">
                            <input
                              type="radio"
                              name={q.id}
                              value={option.value}
                              checked={answers[q.id] === option.value}
                              onChange={() => setAnswers({...answers, [q.id]: option.value})}
                              className="mr-3"
                            />
                            <span>{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="text-center">
                    <Button 
                      className="glass-button w-full"
                      onClick={handleQuizSubmit}
                      disabled={Object.keys(answers).length < quizQuestions.length}
                    >
                      Get My Results
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </section>

      {/* FAQ Section */}
      <section id="faq" className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Common questions about IT careers and how to get started in the field.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2 text-primary" />
                    <span>{item.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Start Your IT Career with JobOnboard
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
          Create an ATS-optimized resume tailored for IT careers. Our AI-powered platform helps you showcase your technical skills and land interviews.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/resume-builder">
            <Button size="lg" className="glass-button">
              <Briefcase className="mr-2 h-5 w-5" />
              Build Your Resume Today
            </Button>
          </Link>
          <Link to="/templates">
            <Button variant="outline" size="lg">
              <span>Browse Resume Templates</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </ContentPageLayout>
  );
};

export default ITCareerPaths;
