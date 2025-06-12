
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-[700px] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{
        backgroundImage: "url('/lovable-uploads/3064f45d-5bdd-4cc9-a1f5-e0e0d12d6681.png')"
      }} />
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
        <header>
          <h1 className="text-6xl md:text-7xl font-montserrat font-bold mb-6 leading-tight tracking-tight">
            Portland's Premier<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Tile Installation
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-300 font-light">
            Over a decade of expert craftsmanship • Licensed & Insured • CCB #200970
          </p>
        </header>
        <Link to="/contact" aria-label="Get a free tile installation quote">
          <Button size="lg" className="bg-gradient-to-r from-navy to-navy/90 hover:from-navy/90 hover:to-navy/80 text-white px-10 py-4 text-lg rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 group">
            Get a Free Quote
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
