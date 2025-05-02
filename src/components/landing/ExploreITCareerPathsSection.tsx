
import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Trophy, TrendingUp } from "lucide-react";
import { careerPathsData } from "@/data/careerPathsData";

interface CareerPathCardProps {
  path: typeof careerPathsData[0];
  index: number;
}

const CareerPathCard: React.FC<CareerPathCardProps> = ({ path, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      key={path.id}
    >
      <Card className="bg-white border border-slate-100 overflow-hidden hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
        <div
          className={`p-6 ${path.bgColor}`}
        >
          <div className="mb-4 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: path.iconColor }}>
            {path.icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{path.title}</h3>
          <p className="text-muted-foreground text-sm mb-4">{path.description}</p>
          
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="flex items-center">
              <TrendingUp className="h-4 w-4 text-blue-500 mr-2" />
              <span className="text-xs text-slate-600">{path.growthPotential}</span>
            </div>
            <div className="flex items-center">
              <Trophy className="h-4 w-4 text-amber-500 mr-2" />
              <span className="text-xs text-slate-600">{path.salaryRange}</span>
            </div>
          </div>
          
          <Link to={`/career-path/${path.id}`} className="inline-flex items-center text-primary hover:underline text-sm font-medium">
            Explore this Career
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </Card>
    </motion.div>
  );
};

const ExploreITCareerPathsSection = () => {
  return (
    <div className="container mx-auto px-6 max-w-7xl py-24">
      <div className="text-center mb-12">
        <motion.div 
          className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-medium text-primary">TECH CAREERS</span>
        </motion.div>
        
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
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
          Discover high-demand tech roles, salary potential, and skills required to succeed in today's job market
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {careerPathsData.slice(0, 6).map((path, index) => (
          <CareerPathCard key={path.id} path={path} index={index} />
        ))}
      </div>
      
      <div className="text-center">
        <Button asChild>
          <Link to="/it-career-paths">
            Explore All Career Paths
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ExploreITCareerPathsSection;
