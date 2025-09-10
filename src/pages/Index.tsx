
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Star Tile LLC",
    "image": "https://www.startilellc.com/lovable-uploads/star-tile-logo.png",
    "@id": "https://www.startilellc.com/",
    "url": "https://www.startilellc.com/",
    "telephone": "(503) 482-8395",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main St",
      "addressLocality": "Portland",
      "addressRegion": "OR",
      "postalCode": "97201",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 45.5152,
      "longitude": -122.6784
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    }
  };

  const breadcrumbs = generateBreadcrumbJsonLd([homeBreadcrumb]);

  return (
    <div className="min-h-screen">
      <SEO 
        title="Star Tile LLC | Expert Tile Installation & Remodeling in Portland Oregon"
        description="Portland's premier tile installation experts. Kitchen backsplashes, bathroom remodels, flooring & custom tile work. Licensed CCB #200970. Free estimates!"
        canonical="https://www.startilellc.com"
        structuredData={[structuredData, breadcrumbs]}
      />
      <HeroSection />
      {/* Enhanced intro section with internal links */}
      <section className="py-12 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-600 leading-relaxed">
            As Gresham's premier tile installation company, we bring over a decade of expertise to every project in the greater Portland metro area. 
            From <Link to="/services" className="text-navy hover:underline font-medium">kitchen backsplashes and bathroom remodels</Link> to 
            custom flooring solutions, our team delivers exceptional craftsmanship that stands the test of time. 
            <Link to="/about" className="text-navy hover:underline font-medium">Learn more about our story</Link> and 
            discover why hundreds of Gresham and East Portland homeowners trust us with their tile installation needs.
          </p>
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
