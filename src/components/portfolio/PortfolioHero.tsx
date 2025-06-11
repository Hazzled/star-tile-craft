
import React from 'react';

const PortfolioHero = () => {
  return (
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
  );
};

export default PortfolioHero;
