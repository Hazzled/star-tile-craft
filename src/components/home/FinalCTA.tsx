
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-navy to-noir text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy/90 to-noir/90" />
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
          Ready to Transform Your Space?
        </h2>
        <p className="text-xl mb-10 text-gray-200 leading-relaxed">
          Contact us today for a free consultation and quote. Let's bring your tile vision to life!
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
          <Link to="/contact">
            <Button size="lg" variant="outline" className="bg-white text-navy hover:bg-gray-100 border-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold">
              Get Free Quote
            </Button>
          </Link>
          <a href="tel:5034828395">
            <Button size="lg" variant="outline" className="border-white hover:bg-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-slate-800">
              Call (503) 482-8395
            </Button>
          </a>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-white hover:text-gray-300 transition-colors">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">
            <Facebook className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
