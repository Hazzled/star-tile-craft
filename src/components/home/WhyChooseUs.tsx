
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Shield, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-almond">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-noir mb-6">
            Why Choose Star Tile LLC?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            <Link to="/about" className="text-primary hover:underline font-medium">Our experienced team</Link> has 
            built a reputation for excellence throughout the Portland Metro Area. 
            <Link to="/services" className="text-primary hover:underline font-medium">Discover our proven process</Link> and 
            see why we're the trusted choice for tile installation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center group">
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
              <Clock className="h-10 w-10 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-montserrat font-semibold text-noir mb-4">
              Over a Decade of Experience
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              More than 10 years serving Portland with expert tile installation and customer satisfaction.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
              <Shield className="h-10 w-10 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-montserrat font-semibold text-noir mb-4">
              Licensed & Insured
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Fully licensed (CCB #200970) and insured for your peace of mind and protection.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
              <Trophy className="h-10 w-10 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-montserrat font-semibold text-noir mb-4">
              Meticulous Craftsmanship
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Every tile perfectly placed with attention to detail that exceeds expectations.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link to="/about">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl">
              Read Our Full Story
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
