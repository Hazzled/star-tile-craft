
import React from 'react';
import { MapPin, Home, Navigation } from 'lucide-react';

const ServiceAreaMap = () => {
  const serviceAreas = [
    { name: 'Portland', description: 'Downtown and surrounding areas', isMain: true },
    { name: 'Beaverton', description: 'West Portland metro', isMain: false },
    { name: 'Gresham', description: 'East Portland metro', isMain: false },
    { name: 'Lake Oswego', description: 'South Portland metro', isMain: false },
    { name: 'Tigard', description: 'Southwest Portland metro', isMain: false },
    { name: 'Milwaukie', description: 'Southeast Portland metro', isMain: false }
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 backdrop-blur-sm">
        <div className="flex items-center justify-center mb-8">
          <div className="p-3 bg-navy/10 rounded-lg mr-4">
            <Home className="h-6 w-6 text-navy" />
          </div>
          <h3 className="text-2xl font-montserrat font-bold text-gray-900">
            Service Areas
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {serviceAreas.map((area) => (
            <div key={area.name} className="flex items-start group hover:bg-gray-50 p-4 rounded-xl transition-all duration-200 hover:shadow-md">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-navy/10 mr-4 flex-shrink-0 group-hover:bg-navy/20 transition-colors">
                <MapPin className={`h-5 w-5 ${area.isMain ? 'text-navy' : 'text-navy/70'}`} />
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-1">
                  <h4 className={`font-montserrat font-semibold ${
                    area.isMain ? 'text-navy text-lg' : 'text-gray-800'
                  }`}>
                    {area.name}
                  </h4>
                  {area.isMain && (
                    <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-navy/10 text-navy">
                      HQ
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center pt-6 border-t border-gray-200">
          <div className="flex items-center justify-center text-navy mb-2">
            <Navigation className="h-5 w-5 mr-2" />
            <span className="font-montserrat font-semibold text-lg">30-mile service radius</span>
          </div>
          <p className="text-gray-600">
            Serving the greater Portland Metro area with professional tile installation services
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaMap;
