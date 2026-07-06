
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectModal from "@/components/ProjectModal";
import { portfolioItems } from "@/data/portfolioData";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";
import SEO from "@/components/SEO";
import { generateBreadcrumbJsonLd, homeBreadcrumb } from "@/lib/breadcrumbs";

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

  // Remove duplicate LocalBusiness schema - using only index.html version

  const breadcrumbs = generateBreadcrumbJsonLd([homeBreadcrumb]);

  return (
    <div className="min-h-screen">
      <SEO 
        title="Star Tile LLC | Expert Tile Installation & Remodeling in Portland Oregon"
        description="Portland Metro's trusted tile installation company since 2014. Kitchen backsplashes, bathroom remodels & custom flooring. Licensed CCB #200970. Serving Gresham to Beaverton. Free estimates!"
        canonical="https://startilellc.com/"
        structuredData={breadcrumbs}
      />
      <HeroSection />
      {/* Enhanced intro section with internal links */}
      <section className="py-12 md:py-16 bg-card border-y border-border text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Welcome to Star Tile LLC, your premier tile installation company serving the Portland Metro Area.
            We specialize in kitchen backsplashes, bathroom renovations, and custom tile work that transforms your space.
            Ready to get started? <Link to="/services" className="text-primary font-semibold underline underline-offset-4 decoration-accent/40 hover:decoration-accent">Explore our services</Link>,{" "}
            <Link to="/tile-installation-portland" className="text-primary font-semibold underline underline-offset-4 decoration-accent/40 hover:decoration-accent">learn about Portland tile installation</Link>,
            or <Link to="/portfolio" className="text-primary font-semibold underline underline-offset-4 decoration-accent/40 hover:decoration-accent">view our portfolio</Link> to see our craftsmanship in action.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <Link to="/tile-cost-calculator" className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Get Cost Estimate
            </Link>
            <Link to="/contact" className="border border-primary/30 text-primary px-5 py-2.5 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-medium">
              Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <ServicesOverview />
      <PortfolioPreview 
        recentProjects={recentProjects}
        onProjectClick={handleProjectClick}
      />
      <WhyChooseUs />
      <FAQSection />
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
