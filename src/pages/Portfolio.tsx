

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Trophy, Shield, Clock } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import FilterTabs from "@/components/FilterTabs";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const filters = ["All", "Kitchens", "Bathrooms", "Flooring", "Custom"];
  
  const portfolioItems = [
    {
      id: 1,
      category: "Kitchens",
      title: "Elegant White Marble Kitchen",
      image: "/lovable-uploads/21f0f05e-9773-4f7f-bf75-cdbde68a73ae.png",
      images: [
        "/lovable-uploads/21f0f05e-9773-4f7f-bf75-cdbde68a73ae.png",
        "/lovable-uploads/46aebe0b-9644-4569-a9b9-a2d42cb7e190.png",
        "/lovable-uploads/b56c3eb7-7296-4cd2-9e3e-68e1ed117331.png"
      ]
    },
    {
      id: 2,
      category: "Bathrooms",
      title: "Luxury Marble Vanity Installation",
      image: "/lovable-uploads/814f0794-7444-48c4-80fd-1e53408ed461.png",
      images: [
        "/lovable-uploads/814f0794-7444-48c4-80fd-1e53408ed461.png",
        "/lovable-uploads/24afa924-fd37-43dd-93d7-9f57ef34abcd.png"
      ]
    },
    {
      id: 3,
      category: "Custom",
      title: "Premium Marble Countertop",
      image: "/lovable-uploads/635e42ad-ec12-4e8c-8201-c8e81e9f1a48.png",
      images: [
        "/lovable-uploads/635e42ad-ec12-4e8c-8201-c8e81e9f1a48.png"
      ]
    }
  ];

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
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
      }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-gray-900/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold mb-6 tracking-tight">
            Our Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Explore our recent tile installation projects throughout the Portland Metro Area
          </p>
        </div>
        
        {/* Curved divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 text-white" preserveAspectRatio="none" viewBox="0 0 1200 120" fill="currentColor">
            <path d="M0,120 C150,80 350,40 600,60 C850,80 1050,100 1200,80 L1200,120 Z" />
          </svg>
        </div>
      </section>

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

      {/* Enhanced Portfolio Grid */}
      <section className="py-8 bg-gradient-to-b from-white to-almond/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <ProjectCard
                key={item.id}
                project={item}
                onClick={() => handleProjectClick(item)}
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

      {/* Enhanced Project Highlights Section */}
      <section className="py-20 bg-gradient-to-r from-almond via-white to-almond">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-noir mb-6">
              Project Highlights
            </h2>
            <div className="w-24 h-1 bg-navy mx-auto mb-6"></div>
            <p className="text-lg text-mist max-w-3xl mx-auto leading-relaxed">
              Every project showcases our commitment to quality, attention to detail, and customer satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4">
                <div className="bg-navy/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-navy/20 transition-colors duration-300">
                  <Trophy className="w-10 h-10 text-navy" />
                </div>
                <div className="text-5xl font-montserrat font-bold text-navy mb-4 group-hover:scale-110 transition-transform duration-300">
                  500+
                </div>
                <h3 className="text-xl font-montserrat font-bold text-noir mb-4">
                  Projects Completed
                </h3>
                <p className="text-mist leading-relaxed">
                  Successfully completed tile installations across Portland Metro Area
                </p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4">
                <div className="bg-navy/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-navy/20 transition-colors duration-300">
                  <Shield className="w-10 h-10 text-navy" />
                </div>
                <div className="text-5xl font-montserrat font-bold text-navy mb-4 group-hover:scale-110 transition-transform duration-300">
                  100%
                </div>
                <h3 className="text-xl font-montserrat font-bold text-noir mb-4">
                  Customer Satisfaction
                </h3>
                <p className="text-mist leading-relaxed">
                  Every project completed to exceed customer expectations
                </p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4">
                <div className="bg-navy/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-navy/20 transition-colors duration-300">
                  <Clock className="w-10 h-10 text-navy" />
                </div>
                <div className="text-5xl font-montserrat font-bold text-navy mb-4 group-hover:scale-110 transition-transform duration-300">
                  10+
                </div>
                <h3 className="text-xl font-montserrat font-bold text-noir mb-4">
                  Years Experience
                </h3>
                <p className="text-mist leading-relaxed">
                  Over a decade of professional tile installation expertise
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
      }} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/90 to-navy/95" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-8 text-white leading-tight">
            Ready to Create Your Own Masterpiece?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Let's discuss your tile installation project and bring your vision to life with the same quality you see here.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-navy hover:bg-gray-100 font-bold text-lg px-10 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <a href="/contact" className="flex items-center gap-2">
                Request Free Consultation
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white hover:bg-white font-bold text-lg px-10 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-slate-900">
              <a href="tel:5034828395">Call (503) 482-8395</a>
            </Button>
          </div>
        </div>
      </section>

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

