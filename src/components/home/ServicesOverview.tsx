
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ServicesOverview = () => {
  const services = [{
    title: "Kitchen Backsplashes",
    description: "Transform your kitchen with stunning custom backsplash designs that perfectly complement your style.",
    image: "/lovable-uploads/1b833cb8-335b-4b65-bcd0-5eb69c6a9076.png"
  }, {
    title: "Bathroom & Shower Tile",
    description: "Create beautiful, waterproof bathroom spaces with expert tile installation.",
    image: "/lovable-uploads/88907a77-a669-40de-b427-7b4f0a578e62.png"
  }, {
    title: "Tile & Stone Flooring",
    description: "Durable and elegant flooring solutions using ceramic, porcelain, and natural stone tiles.",
    image: "/lovable-uploads/7c8f4090-7d94-4b46-9292-e9c1722e7cc1.png"
  }, {
    title: "Custom Tile Projects",
    description: "Unique installations for fireplaces, patios, accent walls, and specialty areas.",
    image: "/lovable-uploads/23e07dc2-2092-4fe4-955d-2827060a2131.png"
  }];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-noir mb-6">
            Our Expert Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From kitchen backsplashes to custom installations, we bring your vision to life with precision and style.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg group flex flex-col h-full">
              <div className="relative overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-montserrat font-semibold text-noir mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <Link to="/services" className="mt-auto">
                  <Button variant="outline" className="text-navy border-navy hover:bg-navy hover:text-white transition-all duration-300 rounded-lg">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
