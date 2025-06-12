
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  image: string;
}

interface PortfolioPreviewProps {
  recentProjects: PortfolioItem[];
  onProjectClick: (project: PortfolioItem) => void;
}

const PortfolioPreview = ({ recentProjects, onProjectClick }: PortfolioPreviewProps) => {
  return (
    <section className="py-20 bg-almond">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-noir mb-6">
            Recent Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the quality and craftsmanship that sets us apart from other tile contractors in Portland.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {recentProjects.map((project) => (
            <div 
              key={project.id} 
              className="aspect-square overflow-hidden rounded-2xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 relative"
              onClick={() => onProjectClick(project)}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <p className="text-white font-montserrat font-semibold text-lg mb-1">{project.title}</p>
                <p className="text-white/80 text-sm uppercase tracking-wider">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/portfolio">
            <Button className="bg-navy hover:bg-navy/90 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              View Full Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
