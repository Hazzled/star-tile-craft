
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const ServiceAreaMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const serviceAreas = [
    { name: 'Portland', coordinates: [-122.6765, 45.5152] },
    { name: 'Gresham', coordinates: [-122.4315, 45.5001] },
    { name: 'Beaverton', coordinates: [-122.8037, 45.4871] },
    { name: 'Lake Oswego', coordinates: [-122.6706, 45.4207] },
    { name: 'Tigard', coordinates: [-122.7715, 45.4312] },
    { name: 'Milwaukie', coordinates: [-122.6396, 45.4459] }
  ];

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-122.6765, 45.5152], // Portland center
      zoom: 10
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      // Add service area markers
      serviceAreas.forEach((area) => {
        // Create custom marker element
        const markerElement = document.createElement('div');
        markerElement.className = 'custom-marker';
        markerElement.style.cssText = `
          width: 20px;
          height: 20px;
          background-color: #153147;
          border: 2px solid white;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        `;

        // Create popup
        const popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <div class="p-2">
              <h3 class="font-semibold text-navy">${area.name}</h3>
              <p class="text-sm text-gray-600">Service Area</p>
            </div>
          `);

        // Add marker with popup
        new mapboxgl.Marker(markerElement)
          .setLngLat(area.coordinates as [number, number])
          .setPopup(popup)
          .addTo(map.current!);
      });

      // Add service area circle
      map.current!.addSource('service-area', {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-122.6765, 45.5152]
          }
        }
      });

      map.current!.addLayer({
        id: 'service-area-circle',
        type: 'circle',
        source: 'service-area',
        paint: {
          'circle-radius': {
            stops: [
              [8, 50],
              [12, 100]
            ]
          },
          'circle-color': '#153147',
          'circle-opacity': 0.1,
          'circle-stroke-color': '#153147',
          'circle-stroke-width': 2,
          'circle-stroke-opacity': 0.3
        }
      });
    });

    setShowTokenInput(false);
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (showTokenInput) {
    return (
      <div className="bg-gray-100 rounded-lg p-8 text-center">
        <MapPin className="h-12 w-12 text-navy mx-auto mb-4" />
        <h3 className="text-xl font-montserrat font-semibold text-gray-800 mb-4">
          Interactive Service Area Map
        </h3>
        <p className="text-gray-600 mb-6">
          Enter your Mapbox public token to view our interactive service area map.
          Get your token at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-navy hover:underline">mapbox.com</a>
        </p>
        <div className="max-w-md mx-auto space-y-4">
          <Input
            type="text"
            placeholder="Enter Mapbox public token"
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
          />
          <Button 
            onClick={initializeMap}
            disabled={!mapboxToken}
            className="bg-navy hover:bg-navy/80 text-white"
          >
            Load Interactive Map
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div ref={mapContainer} className="w-full h-96 rounded-lg shadow-lg" />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <h4 className="font-montserrat font-semibold text-gray-800 mb-2">Service Areas</h4>
        <div className="space-y-1">
          {serviceAreas.map((area) => (
            <div key={area.name} className="flex items-center text-sm">
              <div className="w-2 h-2 bg-navy rounded-full mr-2"></div>
              <span className="text-gray-700">{area.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaMap;
