
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Shield, Database, Cloud, Laptop, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';

const careerPaths = [
  {
    id: 'software-development',
    title: 'Software Development',
    description: 'Frontend, Backend, Full Stack, Mobile Development',
    icon: <Code className="h-8 w-8 text-indigo-600" />,
    bgColor: 'bg-indigo-50',
    iconColor: 'text-indigo-600'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Ethical Hacking, Security Analyst, Incident Response',
    icon: <Shield className="h-8 w-8 text-red-600" />,
    bgColor: 'bg-red-50',
    iconColor: 'text-red-600'
  },
  {
    id: 'data-science',
    title: 'Data Science & AI',
    description: 'Machine Learning, Data Analyst, AI Engineer',
    icon: <Database className="h-8 w-8 text-purple-600" />,
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600'
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Computing & DevOps',
    description: 'AWS, Azure, DevOps Engineer',
    icon: <Cloud className="h-8 w-8 text-blue-600" />,
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    id: 'it-support',
    title: 'IT Support & Networking',
    description: 'Network Engineer, System Administrator',
    icon: <Laptop className="h-8 w-8 text-green-600" />,
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600'
  },
  {
    id: 'product-design',
    title: 'Product & UI/UX Design',
    description: 'Product Manager, UX Designer',
    icon: <Layout className="h-8 w-8 text-amber-600" />,
    bgColor: 'bg-amber-50',
    iconColor: 'text-amber-600'
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                    <div className={`${path.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                      {path.icon}
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
          <Link to="/it-career-paths">
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
