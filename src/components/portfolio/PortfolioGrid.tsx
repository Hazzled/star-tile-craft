
import React from 'react';
import ProjectCard from "@/components/ProjectCard";

interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  image: string;
  images?: string[];
}

interface PortfolioGridProps {
  filteredItems: PortfolioItem[];
  onProjectClick: (project: PortfolioItem) => void;
}

const PortfolioGrid = ({ filteredItems, onProjectClick }: PortfolioGridProps) => {
  return (
    <section className="py-8 bg-gradient-to-b from-white to-almond/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <ProjectCard
              key={item.id}
              project={item}
              onClick={() => onProjectClick(item)}
            />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-mist font-medium">
              No projects found for the selected category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioGrid;
