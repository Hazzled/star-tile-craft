
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import OptimizedImage from "@/components/OptimizedImage";

const ServicesOverview = () => {
  const services = [{
    title: "Kitchen Backsplashes",
    description: "Transform your kitchen with stunning custom backsplash designs that perfectly complement your style.",
    image: "/images/ui/kitchen-service.png"
  }, {
    title: "Bathroom & Shower Tile",
    description: "Create beautiful, waterproof bathroom spaces with expert tile installation.",
    image: "/images/ui/bathroom-service.png"
  }, {
    title: "Tile & Stone Flooring",
    description: "Durable and elegant flooring solutions using ceramic, porcelain, and natural stone tiles.",
    image: "/images/ui/flooring-service.png"
  }, {
    title: "Custom Tile Projects",
    description: "Unique installations for fireplaces, patios, accent walls, and specialty areas.",
    image: "/images/ui/custom-service.png"
  }];

  return (
    <section className="py-20 bg-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 id="services-heading" className="text-4xl md:text-5xl font-montserrat font-bold text-noir mb-6">
            Our Expert Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From kitchen backsplashes to custom installations, we bring your vision to life with precision and style.
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
          {services.map((service, index) => (
            <article key={index} role="listitem">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg group flex flex-col h-full">
                <div className="relative overflow-hidden">
                  <OptimizedImage 
                    src={service.image} 
                    alt={`${service.title} - Professional tile installation example`}
                    width={300}
                    height={224}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-montserrat font-semibold text-noir mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <div className="flex justify-center mt-auto">
                    <Link to="/services" aria-label={`Learn more about ${service.title} services`}>
                      <Button variant="outline" className="text-navy border-navy hover:bg-navy hover:text-white transition-all duration-300 rounded-lg">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
