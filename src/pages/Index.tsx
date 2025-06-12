
import React, { useState } from 'react';
import ProjectModal from "@/components/ProjectModal";
import { portfolioItems } from "@/data/portfolioData";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FinalCTA from "@/components/home/FinalCTA";

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get the first 6 projects for recent projects section
  const recentProjects = portfolioItems.slice(0, 6);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <PortfolioPreview 
        recentProjects={recentProjects}
        onProjectClick={handleProjectClick}
      />
      <WhyChooseUs />
      <TestimonialsSection />
      <FinalCTA />

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </div>
  );
};

export default Index;
