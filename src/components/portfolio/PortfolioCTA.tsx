
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const PortfolioCTA = () => {
  return (
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
  );
};

export default PortfolioCTA;
