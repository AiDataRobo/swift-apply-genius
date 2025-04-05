
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import ITCareerLottie from './ITCareerLottie';
import { careerPathsData } from '@/data/careerPathsData';

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

  const scrollToCareerQuiz = () => {
    const quizSection = document.getElementById('career-quiz');
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.href = "/career-paths#career-quiz";
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
        {careerPathsData.map((path) => (
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
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Popular Roles:</h4>
                      <div className="flex flex-wrap gap-2">
                        {path.roles.slice(0, 3).map((role, idx) => (
                          <span 
                            key={idx} 
                            className="text-xs bg-slate-100 px-2 py-1 rounded-full"
                          >
                            {role.title}
                          </span>
                        ))}
                        {path.roles.length > 3 && (
                          <span className="text-xs bg-slate-100 px-2 py-1 rounded-full">
                            +{path.roles.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    <Link to={`/career-paths/${path.id}`} className="mt-auto">
                      <Button 
                        variant="outline" 
                        className="w-full justify-between"
                      >
                        Explore Career Path <ArrowRight className="h-4 w-4" />
                      </Button>
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
                      {path.keySkills && path.keySkills.slice(0, 4).join(', ')}
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
          <Button size="lg" className="glass-button" onClick={scrollToCareerQuiz}>
            Take the Career Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExploreITCareerPathsSection;
