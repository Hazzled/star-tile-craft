
import React from 'react';
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    category: string;
    image: string;
  };
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <Card 
      className="group overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
        
        {/* View Project Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          <div className="bg-white text-navy px-6 py-3 rounded-lg font-bold shadow-xl transform scale-95 group-hover:scale-100 transition-transform duration-300 flex items-center gap-2">
            View Project
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
          <span className="text-xs font-bold text-white bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full uppercase tracking-wider">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold text-navy bg-navy/10 px-4 py-2 rounded-full uppercase tracking-wider">
            {project.category}
          </span>
        </div>
        <h3 className="text-xl font-montserrat font-bold text-noir leading-tight group-hover:text-navy transition-colors duration-300">
          {project.title}
        </h3>
      </div>
    </Card>
  );
};

export default ProjectCard;
