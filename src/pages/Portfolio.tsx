
import { useState } from "react";
import ProjectModal from "@/components/ProjectModal";
import FilterTabs from "@/components/FilterTabs";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import PortfolioStats from "@/components/portfolio/PortfolioStats";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA";
import { portfolioItems, filters } from "@/data/portfolioData";
import SEO from "@/components/SEO";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const filteredItems = activeFilter === "All" ? portfolioItems : portfolioItems.filter(item => item.category === activeFilter);
  
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
        title="Tile Installation Portfolio | Star Tile LLC Portland"
        description="Browse our completed kitchen backsplashes, bathroom remodels, flooring, and custom tile projects across Portland."
        canonical="https://startilellc.com/portfolio"
      />
      <PortfolioHero />
      {/* Enhanced Filter Section */}
      <section className="py-16 bg-white relative -mt-6 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-noir mb-4">
              Browse Our Work
            </h2>
            <div className="w-16 h-1 bg-navy mx-auto mb-6"></div>
          </div>
          
          <FilterTabs 
            filters={filters}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>
      </section>

      <PortfolioGrid 
        filteredItems={filteredItems}
        onProjectClick={handleProjectClick}
      />

      <PortfolioStats />

      <PortfolioCTA />

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </div>
  );
};

export default Portfolio;
