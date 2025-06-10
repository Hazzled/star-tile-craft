
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
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        
        {/* Service Areas Card */}
        <div className="lg:col-span-1 order-2 lg:order-1">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-navy/10 rounded-lg mr-3">
                <Home className="h-5 w-5 text-navy" />
              </div>
              <h3 className="text-xl font-montserrat font-bold text-gray-900">
                Service Areas
              </h3>
            </div>
            
            <div className="space-y-4">
              {serviceAreas.map((area) => (
                <div key={area.name} className="flex items-start group hover:bg-gray-50 p-3 rounded-lg transition-colors">
                  <div className={`w-3 h-3 rounded-full mr-4 mt-1.5 flex-shrink-0 ${
                    area.isMain ? 'bg-navy shadow-lg' : 'bg-navy/60'
                  }`}></div>
                  <div className="flex-1">
                    <h4 className={`font-montserrat font-semibold ${
                      area.isMain ? 'text-navy text-lg' : 'text-gray-800'
                    }`}>
                      {area.name}
                    </h4>
                    <p className="text-sm text-gray-600 mt-0.5">{area.description}</p>
                  </div>
                  {area.isMain && (
                    <div className="ml-2">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-navy/10 text-navy">
                        HQ
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center text-sm text-gray-600">
                <Navigation className="h-4 w-4 mr-2 text-navy" />
                <span className="font-medium">30-mile service radius</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Serving the greater Portland Metro area
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Map Area */}
        <div className="lg:col-span-2 order-1 lg:order-2">
          <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg overflow-hidden h-96 lg:h-[500px]">
            
            {/* Map Background with Geographic Layout */}
            <div className="absolute inset-0 p-8">
              <div className="relative w-full h-full">
                
                {/* Service Radius Rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Outer radius ring */}
                    <div className="absolute inset-0 w-80 h-80 border-2 border-navy/20 rounded-full bg-navy/5"></div>
                    {/* Inner radius ring */}
                    <div className="absolute inset-6 border border-navy/15 rounded-full bg-navy/3"></div>
                    {/* Core area */}
                    <div className="absolute inset-12 border border-navy/10 rounded-full bg-navy/2"></div>
                  </div>
                </div>

                {/* Portland - Center (Main Location) */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="relative group">
                    <div className="w-6 h-6 bg-navy rounded-full border-3 border-white shadow-lg group-hover:scale-110 transition-transform"></div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-md border border-gray-200">
                      <span className="text-sm font-montserrat font-bold text-navy whitespace-nowrap">Portland</span>
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-white border-l border-t border-gray-200 rotate-45"></div>
                    </div>
                  </div>
                </div>

                {/* Beaverton - West */}
                <div className="absolute top-1/2 left-16 transform -translate-y-1/2 z-10">
                  <div className="relative group">
                    <div className="w-4 h-4 bg-navy/80 rounded-full border-2 border-white shadow-lg group-hover:scale-110 transition-transform"></div>
                    <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-sm border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs font-medium text-gray-800 whitespace-nowrap">Beaverton</span>
                    </div>
                  </div>
                </div>

                {/* Gresham - East */}
                <div className="absolute top-1/2 right-16 transform -translate-y-1/2 z-10">
                  <div className="relative group">
                    <div className="w-4 h-4 bg-navy/80 rounded-full border-2 border-white shadow-lg group-hover:scale-110 transition-transform"></div>
                    <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-sm border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs font-medium text-gray-800 whitespace-nowrap">Gresham</span>
                    </div>
                  </div>
                </div>

                {/* Lake Oswego - South */}
                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="relative group">
                    <div className="w-4 h-4 bg-navy/80 rounded-full border-2 border-white shadow-lg group-hover:scale-110 transition-transform"></div>
                    <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-sm border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs font-medium text-gray-800 whitespace-nowrap">Lake Oswego</span>
                    </div>
                  </div>
                </div>

                {/* Tigard - Southwest */}
                <div className="absolute bottom-24 left-20 z-10">
                  <div className="relative group">
                    <div className="w-4 h-4 bg-navy/80 rounded-full border-2 border-white shadow-lg group-hover:scale-110 transition-transform"></div>
                    <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-sm border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs font-medium text-gray-800 whitespace-nowrap">Tigard</span>
                    </div>
                  </div>
                </div>

                {/* Milwaukie - Southeast */}
                <div className="absolute bottom-24 right-20 z-10">
                  <div className="relative group">
                    <div className="w-4 h-4 bg-navy/80 rounded-full border-2 border-white shadow-lg group-hover:scale-110 transition-transform"></div>
                    <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-sm border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs font-medium text-gray-800 whitespace-nowrap">Milwaukie</span>
                    </div>
                  </div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
                  {/* Lines from Portland to each city */}
                  <line x1="50%" y1="50%" x2="12%" y2="50%" stroke="#153147" strokeWidth="1" opacity="0.3" strokeDasharray="3,3" />
                  <line x1="50%" y1="50%" x2="88%" y2="50%" stroke="#153147" strokeWidth="1" opacity="0.3" strokeDasharray="3,3" />
                  <line x1="50%" y1="50%" x2="50%" y2="80%" stroke="#153147" strokeWidth="1" opacity="0.3" strokeDasharray="3,3" />
                  <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="#153147" strokeWidth="1" opacity="0.3" strokeDasharray="3,3" />
                  <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="#153147" strokeWidth="1" opacity="0.3" strokeDasharray="3,3" />
                </svg>
              </div>
            </div>

            {/* Modern Compass */}
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <span className="text-navy font-bold text-sm">N</span>
                <div className="absolute w-0.5 h-4 bg-navy transform rotate-0 origin-bottom"></div>
                <div className="absolute w-2 h-2 border-t-2 border-r-2 border-navy transform rotate-45 -translate-y-1"></div>
              </div>
            </div>

            {/* Geographic Labels */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm border border-gray-200">
              <p className="text-xs text-gray-600 font-medium">Portland Metro Area</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaMap;
