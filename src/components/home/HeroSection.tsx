import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const HeroSection = () => {
  const navigate = useNavigate();
  const handleGetQuoteClick = () => {
    navigate('/contact');
  };
  return <section className="relative h-[700px] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
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
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button size="lg" className="bg-gradient-to-r from-navy to-navy/90 hover:from-navy/90 hover:to-navy/80 text-white px-10 py-4 text-lg rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 group" onClick={handleGetQuoteClick} aria-label="Get a free tile installation quote">
            Get a Free Quote
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Button>
          
          <Link to="/about">
            <Button size="lg" variant="outline" className="border-2 border-white hover:bg-white px-8 py-4 text-lg rounded-xl transition-all duration-300 text-slate-950">
              Learn About Us
            </Button>
          </Link>
        </div>
        
        <div className="text-sm text-gray-400">
          <Link to="/services" className="hover:text-white underline">
            View Our Services
          </Link>
          {" • "}
          <Link to="/portfolio" className="hover:text-white underline">
            See Our Work
          </Link>
        </div>
      </div>
    </section>;
};
export default HeroSection;