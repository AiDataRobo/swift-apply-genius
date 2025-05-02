
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { careerPathsData } from '@/data/careerPathsData';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, FileText, CheckCircle } from "lucide-react";
import { Button } from '@/components/ui/button';

const CareerPathCard = ({ career, index }: { career: typeof careerPathsData[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 + 0.2 }}
    >
      <Card className="h-full hover:shadow-md transition-shadow duration-300 overflow-hidden border-slate-100">
        <div className={`h-1 ${career.accentColor}`}></div>
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <div className={`w-10 h-10 rounded-lg ${career.iconBgColor} flex items-center justify-center mr-3`}>
              {career.icon}
            </div>
            <h3 className="text-lg font-semibold">{career.title}</h3>
          </div>
          
          <p className="text-muted-foreground text-sm mb-4">{career.description}</p>
          
          <div className="mb-6 space-y-2">
            <div className="flex items-start">
              <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2 shrink-0" />
              <span className="text-sm">{career.avgSalary}</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2 shrink-0" />
              <span className="text-sm">{career.demand}</span>
            </div>
          </div>
          
          <Button variant="outline" className="w-full" asChild>
            <Link to={`/career/${career.slug}`}>
              Explore this Career
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ExploreITCareerPathsSection = () => {
  // Display only the first 6 career paths
  const displayedCareers = careerPathsData.slice(0, 6);
  
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-medium text-primary">CAREER PATHS</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Explore IT Career Paths
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Discover high-demand IT careers and create targeted resumes for your dream role
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCareers.map((career, index) => (
            <CareerPathCard key={career.slug} career={career} index={index} />
          ))}
        </div>
        
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Button size="lg" className="px-8" asChild>
            <Link to="/career-quiz">
              <FileText className="mr-2 h-5 w-5" />
              Take Career Quiz
            </Link>
          </Button>
          
          <Link to="/it-career-paths" className="inline-block mt-4 text-primary hover:underline ml-6">
            View All Career Paths
            <ArrowRight className="inline ml-1 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ExploreITCareerPathsSection;
