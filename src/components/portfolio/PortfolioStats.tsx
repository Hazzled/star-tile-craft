
import React from 'react';
import { Trophy, Shield, Clock } from "lucide-react";

const PortfolioStats = () => {
  return (
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
  );
};

export default PortfolioStats;
