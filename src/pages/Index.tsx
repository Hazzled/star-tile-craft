
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectModal from "@/components/ProjectModal";
import { portfolioItems } from "@/data/portfolioData";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FinalCTA from "@/components/home/FinalCTA";
import SEO from "@/components/SEO";

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
      <SEO 
        title="Expert Tile Installation in Portland | Star Tile LLC"
        description="Professional tile work for kitchens, bathrooms, and floors in Portland. Licensed & insured with 10+ years of experience. Get a free quote."
        canonical="https://startilellc.com/"
      />
      <HeroSection />
      {/* Enhanced intro section with internal links */}
      <section className="py-12 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-600 leading-relaxed">
            As Portland's premier tile installation company, we bring over a decade of expertise to every project. 
            From <Link to="/services" className="text-navy hover:underline font-medium">kitchen backsplashes and bathroom remodels</Link> to 
            custom flooring solutions, our team delivers exceptional craftsmanship that stands the test of time. 
            <Link to="/about" className="text-navy hover:underline font-medium">Learn more about our story</Link> and 
            discover why hundreds of Portland homeowners trust us with their tile installation needs.
          </p>
        </div>
      </section>

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
