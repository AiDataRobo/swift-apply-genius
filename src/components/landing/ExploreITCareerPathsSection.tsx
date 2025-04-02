
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Code, Shield, Database, Cloud, Laptop, Layout,
  ChartBar, BarChart4, Users, Lightbulb 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import ITCareerLottie from './ITCareerLottie';

const careerPaths = [
  {
    id: 'software-development',
    title: 'Software Development',
    description: 'Frontend, Backend, Full Stack, Mobile Development',
    icon: <Code className="h-8 w-8 text-indigo-600" />,
    bgColor: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    animation: '/animations/software-development.json'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Ethical Hacking, Security Analyst, Incident Response',
    icon: <Shield className="h-8 w-8 text-red-600" />,
    bgColor: 'bg-red-50',
    iconColor: 'text-red-600',
    animation: '/animations/cybersecurity.json'
  },
  {
    id: 'data-science',
    title: 'Data Science & AI',
    description: 'Machine Learning, Data Analyst, AI Engineer',
    icon: <Database className="h-8 w-8 text-purple-600" />,
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
    animation: '/animations/data-science.json'
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Computing & DevOps',
    description: 'AWS, Azure, DevOps Engineer',
    icon: <Cloud className="h-8 w-8 text-blue-600" />,
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    animation: '/animations/cloud-computing.json'
  },
  {
    id: 'it-support',
    title: 'IT Support & Networking',
    description: 'Network Engineer, System Administrator',
    icon: <Laptop className="h-8 w-8 text-green-600" />,
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
    animation: '/animations/it-support.json'
  },
  {
    id: 'product-design',
    title: 'Product & UI/UX Design',
    description: 'Product Manager, UX Designer',
    icon: <Layout className="h-8 w-8 text-amber-600" />,
    bgColor: 'bg-amber-50',
    iconColor: 'text-amber-600',
    animation: '/animations/product-design.json'
  },
  {
    id: 'project-management',
    title: 'Project Management',
    description: 'Project Manager, Program Manager, Scrum Master',
    icon: <ChartBar className="h-8 w-8 text-blue-600" />,
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    animation: '/animations/project-management.json'
  },
  {
    id: 'business-analysis',
    title: 'Business & Data Analysis',
    description: 'Business Analyst, Data Analyst, BI Specialist',
    icon: <BarChart4 className="h-8 w-8 text-teal-600" />,
    bgColor: 'bg-teal-50',
    iconColor: 'text-teal-600',
    animation: '/animations/business-analysis.json'
  },
  {
    id: 'customer-success',
    title: 'Customer Success & Marketing',
    description: 'CSM, Marketing Manager, Digital Marketing',
    icon: <Users className="h-8 w-8 text-pink-600" />,
    bgColor: 'bg-pink-50',
    iconColor: 'text-pink-600',
    animation: '/animations/customer-success.json'
  }
];

const ExploreITCareerPathsSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="container mx-auto px-6 py-20 md:px-10 lg:px-20 max-w-7xl">
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
          <span className="text-xs font-medium text-primary">CAREER EXPLORATION</span>
        </div>
        <h2 className="section-heading mb-4">Explore IT Career Paths</h2>
        <p className="section-subheading mx-auto">
          Discover the diverse opportunities in information technology and find your perfect career match
        </p>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {careerPaths.map((path) => (
          <motion.div key={path.id} variants={itemVariants}>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`${path.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-2`}>
                        {path.icon}
                      </div>
                      {path.animation && (
                        <div className="w-12 h-12">
                          <ITCareerLottie animationPath={path.animation} width={48} height={48} />
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{path.title}</h3>
                    <p className="text-muted-foreground mb-6 flex-grow">{path.description}</p>
                    <Link to={`/it-career-paths#${path.id}`} className="inline-flex items-center text-primary font-medium hover:underline">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent className="p-4 bg-white shadow-lg rounded-md border">
                <div className="flex flex-col gap-2">
                  <h4 className="font-medium">{path.title}</h4>
                  <p className="text-sm text-muted-foreground">{path.description}</p>
                  <div className="mt-2">
                    <span className="text-xs font-semibold text-primary">Popular skills:</span>
                    <p className="text-xs text-muted-foreground mt-1">
                      {path.id === 'software-development' && 'JavaScript, React, Python, Node.js'}
                      {path.id === 'cybersecurity' && 'Network Security, Penetration Testing, Security Analysis'}
                      {path.id === 'data-science' && 'Python, R, SQL, Machine Learning, Statistical Analysis'}
                      {path.id === 'cloud-devops' && 'AWS, Azure, Docker, Kubernetes, CI/CD'}
                      {path.id === 'it-support' && 'Networking, System Administration, Troubleshooting'}
                      {path.id === 'product-design' && 'UI/UX Design, Figma, User Research, Prototyping'}
                      {path.id === 'project-management' && 'Agile, JIRA, MS Project, Stakeholder Management'}
                      {path.id === 'business-analysis' && 'SQL, Process Modeling, Requirements Gathering, Excel'}
                      {path.id === 'customer-success' && 'CRM, Communication, Retention Strategies, Upselling'}
                    </p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-3">Not sure which career fits you?</h3>
          <p className="text-muted-foreground mb-6">Take our AI-powered career quiz and discover the IT path that matches your skills and interests.</p>
          <Link to="/it-career-paths#career-quiz">
            <Button size="lg" className="glass-button">
              Take the Career Quiz
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreITCareerPathsSection;
