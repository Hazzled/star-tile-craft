
import React from 'react';
import { MapPin } from 'lucide-react';

const ServiceAreaMap = () => {
  const serviceAreas = [
    { name: 'Portland', description: 'Downtown and surrounding areas' },
    { name: 'Gresham', description: 'East Portland metro' },
    { name: 'Beaverton', description: 'West Portland metro' },
    { name: 'Lake Oswego', description: 'South Portland metro' },
    { name: 'Tigard', description: 'Southwest Portland metro' },
    { name: 'Milwaukie', description: 'Southeast Portland metro' }
  ];

  return (
    <div className="relative">
      {/* Static Map Background */}
      <div className="w-full h-96 rounded-lg shadow-lg bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
        {/* Portland Metro Area Outline */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-80 h-80">
            {/* Service Area Circle */}
            <div className="absolute inset-0 border-4 border-navy/30 rounded-full bg-navy/5"></div>
            <div className="absolute inset-4 border-2 border-navy/20 rounded-full bg-navy/3"></div>
            
            {/* City Markers */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-4 h-4 bg-navy rounded-full border-2 border-white shadow-lg"></div>
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm font-semibold text-navy whitespace-nowrap">Portland</span>
            </div>
            
            {/* Gresham */}
            <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
              <div className="w-3 h-3 bg-navy rounded-full border-2 border-white shadow-lg"></div>
              <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs text-navy whitespace-nowrap">Gresham</span>
            </div>
            
            {/* Beaverton */}
            <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
              <div className="w-3 h-3 bg-navy rounded-full border-2 border-white shadow-lg"></div>
              <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs text-navy whitespace-nowrap">Beaverton</span>
            </div>
            
            {/* Lake Oswego */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
              <div className="w-3 h-3 bg-navy rounded-full border-2 border-white shadow-lg"></div>
              <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs text-navy whitespace-nowrap">Lake Oswego</span>
            </div>
            
            {/* Tigard */}
            <div className="absolute bottom-20 left-16">
              <div className="w-3 h-3 bg-navy rounded-full border-2 border-white shadow-lg"></div>
              <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs text-navy whitespace-nowrap">Tigard</span>
            </div>
            
            {/* Milwaukie */}
            <div className="absolute bottom-20 right-16">
              <div className="w-3 h-3 bg-navy rounded-full border-2 border-white shadow-lg"></div>
              <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs text-navy whitespace-nowrap">Milwaukie</span>
            </div>
          </div>
        </div>
        
        {/* Compass */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
          <div className="w-8 h-8 flex items-center justify-center">
            <span className="text-navy font-bold text-sm">N</span>
            <div className="absolute w-0.5 h-4 bg-navy transform rotate-0 origin-bottom"></div>
          </div>
        </div>
      </div>
      
      {/* Service Areas Legend */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
        <h4 className="font-montserrat font-semibold text-gray-800 mb-3 flex items-center">
          <MapPin className="h-4 w-4 text-navy mr-2" />
          Service Areas
        </h4>
        <div className="space-y-2">
          {serviceAreas.map((area) => (
            <div key={area.name} className="flex items-start">
              <div className="w-2 h-2 bg-navy rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
              <div>
                <span className="text-sm font-medium text-gray-800">{area.name}</span>
                <p className="text-xs text-gray-600">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 pt-3 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            30-mile radius from Portland
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaMap;
