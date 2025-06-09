
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Kitchens", "Bathrooms", "Flooring", "Custom"];

  const portfolioItems = [
    {
      id: 1,
      category: "Kitchens",
      title: "Modern Kitchen Backsplash",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      category: "Bathrooms",
      title: "Luxury Bathroom Remodel",
      image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      category: "Flooring",
      title: "Porcelain Tile Flooring",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      category: "Custom",
      title: "Fireplace Surround",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      category: "Kitchens",
      title: "Subway Tile Backsplash",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      category: "Bathrooms",
      title: "Master Bath Renovation",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      category: "Flooring",
      title: "Natural Stone Flooring",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      category: "Custom",
      title: "Outdoor Patio Installation",
      image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 9,
      category: "Kitchens",
      title: "Contemporary Kitchen Design",
      image: "https://images.unsplash.com/photo-1565538420870-da08ff96a207?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 10,
      category: "Bathrooms",
      title: "Spa-Style Bathroom",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 11,
      category: "Flooring",
      title: "Luxury Vinyl Plank",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 12,
      category: "Custom",
      title: "Accent Wall Feature",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const filteredItems = activeFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-200">
            Explore our recent tile installation projects throughout the Portland Metro Area
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                variant={activeFilter === filter ? "default" : "outline"}
                className={
                  activeFilter === filter
                    ? "bg-star-tile-slate-blue hover:bg-star-tile-slate-blue/90 text-white"
                    : "text-star-tile-slate-blue border-star-tile-slate-blue hover:bg-star-tile-slate-blue hover:text-white"
                }
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-star-tile-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-star-tile-slate-blue bg-star-tile-slate-blue/10 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-montserrat font-semibold text-star-tile-charcoal">
                    {item.title}
                  </h3>
                </div>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">
                No projects found for the selected category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-star-tile-charcoal mb-4">
              Project Highlights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every project showcases our commitment to quality, attention to detail, and customer satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-montserrat font-bold text-star-tile-slate-blue mb-2">
                500+
              </div>
              <h3 className="text-lg font-montserrat font-semibold text-star-tile-charcoal mb-2">
                Projects Completed
              </h3>
              <p className="text-gray-600">
                Successfully completed tile installations across Portland Metro Area
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-montserrat font-bold text-star-tile-slate-blue mb-2">
                100%
              </div>
              <h3 className="text-lg font-montserrat font-semibold text-star-tile-charcoal mb-2">
                Customer Satisfaction
              </h3>
              <p className="text-gray-600">
                Every project completed to exceed customer expectations
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-montserrat font-bold text-star-tile-slate-blue mb-2">
                10+
              </div>
              <h3 className="text-lg font-montserrat font-semibold text-star-tile-charcoal mb-2">
                Years Experience
              </h3>
              <p className="text-gray-600">
                Over a decade of professional tile installation expertise
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-star-tile-slate-blue text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
            Ready to Create Your Own Masterpiece?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Let's discuss your tile installation project and bring your vision to life with the same quality you see here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-star-tile-slate-blue hover:bg-gray-100 border-white">
              <a href="/contact">Get Your Free Quote</a>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-star-tile-slate-blue">
              <a href="tel:5034828395">Call (503) 482-8395</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
