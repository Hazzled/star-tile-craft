
import { useState, useEffect } from "react";
import LazyProjectModal from "@/components/LazyProjectModal";
import FilterTabs from "@/components/FilterTabs";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import PortfolioStats from "@/components/portfolio/PortfolioStats";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA";
import { loadPortfolioData, getFilteredPortfolio } from "@/data/portfolioDataLoader";
import SEO from "@/components/SEO";
import { generateBreadcrumbJsonLd, homeBreadcrumb } from "@/lib/breadcrumbs";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [portfolioItems, setPortfolioItems] = useState<any[]>([]);
  const [filters, setFilters] = useState<string[]>([]);
  const [filteredItems, setFilteredItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Load portfolio data on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await loadPortfolioData();
        setPortfolioItems(data.portfolioItems);
        setFilters(data.filters);
        setFilteredItems(data.portfolioItems);
      } catch (error) {
        console.error('Failed to load portfolio data:', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  // Update filtered items when filter changes
  useEffect(() => {
    const updateFilter = async () => {
      const filtered = await getFilteredPortfolio(activeFilter);
      setFilteredItems(filtered);
    };
    if (portfolioItems.length > 0) {
      updateFilter();
    }
  }, [activeFilter, portfolioItems]);
  
  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const breadcrumbs = generateBreadcrumbJsonLd([
    homeBreadcrumb,
    { name: "Portfolio", url: "https://www.startilellc.com/portfolio" }
  ]);

  return (
    <div className="min-h-screen">
      <SEO 
        title="Portland Tile Installation Portfolio | Before & After Projects Gallery"
        description="View 50+ completed tile projects across Portland Metro: modern kitchens, luxury bathrooms, custom showers. Before & after photos from Hawthorne to Lake Oswego."
        canonical="https://www.startilellc.com/portfolio"
        structuredData={breadcrumbs}
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

      {loading ? (
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      ) : (
        <>
          <PortfolioGrid 
            filteredItems={filteredItems}
            onProjectClick={handleProjectClick}
          />

          <PortfolioStats />

          <PortfolioCTA />
        </>
      )}

      {/* Lazy Project Modal */}
      <LazyProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </div>
  );
};

export default Portfolio;
