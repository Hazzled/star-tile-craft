
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Kitchen Backsplashes",
      description: "Transform your kitchen with stunning custom backsplash designs that perfectly complement your style and cooking space.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Custom design consultation",
        "Premium tile selection",
        "Professional installation",
        "Grout sealing & finishing"
      ]
    },
    {
      title: "Bathroom & Shower Tile",
      description: "Create beautiful, waterproof bathroom spaces with expert tile installation that combines functionality with stunning aesthetics.",
      image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Waterproofing solutions",
        "Custom shower designs",
        "Floor-to-ceiling installations",
        "Slip-resistant options"
      ]
    },
    {
      title: "Tile & Stone Flooring",
      description: "Durable and elegant flooring solutions using ceramic, porcelain, and natural stone tiles for lasting beauty.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Ceramic & porcelain tiles",
        "Natural stone installation",
        "Radiant heating compatibility",
        "Commercial-grade options"
      ]
    },
    {
      title: "Custom Tile Projects",
      description: "Unique installations for fireplaces, patios, accent walls, and specialty areas that require expert craftsmanship.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Fireplace surrounds",
        "Outdoor patios",
        "Accent walls",
        "Commercial spaces"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Professional Tile Installation Services
          </h1>
          <p className="text-xl text-gray-200">
            Expert craftsmanship for kitchens, bathrooms, flooring, and custom projects throughout Portland
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-star-tile-charcoal mb-4">
              Our Specialized Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From kitchen backsplashes to custom installations, we bring decades of experience to every project. 
              Each service includes our commitment to quality, precision, and customer satisfaction.
            </p>
          </div>
          
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-star-tile-charcoal mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-700 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-montserrat font-semibold text-star-tile-charcoal mb-3">
                      What's Included:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-star-tile-slate-blue mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link to="/contact">
                    <Button className="bg-star-tile-slate-blue hover:bg-star-tile-slate-blue/90 text-white">
                      Get Quote for This Service
                    </Button>
                  </Link>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <Card className="overflow-hidden shadow-lg">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 md:h-80 object-cover"
                    />
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-star-tile-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-star-tile-charcoal mb-4">
              Our Installation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a proven process to ensure every project is completed to perfection, on time and within budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center bg-white">
              <CardContent className="p-6">
                <div className="bg-star-tile-slate-blue text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-montserrat font-semibold text-star-tile-charcoal mb-3">
                  Consultation
                </h3>
                <p className="text-gray-600">
                  Free in-home consultation to discuss your vision, needs, and budget.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-white">
              <CardContent className="p-6">
                <div className="bg-star-tile-slate-blue text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-montserrat font-semibold text-star-tile-charcoal mb-3">
                  Design & Quote
                </h3>
                <p className="text-gray-600">
                  Custom design proposal with detailed quote and material selection.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-white">
              <CardContent className="p-6">
                <div className="bg-star-tile-slate-blue text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-montserrat font-semibold text-star-tile-charcoal mb-3">
                  Installation
                </h3>
                <p className="text-gray-600">
                  Professional installation with meticulous attention to detail.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-white">
              <CardContent className="p-6">
                <div className="bg-star-tile-slate-blue text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-montserrat font-semibold text-star-tile-charcoal mb-3">
                  Final Inspection
                </h3>
                <p className="text-gray-600">
                  Thorough walkthrough to ensure your complete satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-star-tile-slate-blue text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
            Ready to Start Your Tile Project?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Contact us today for a free consultation and discover why we're Portland's most trusted tile installation company.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white text-star-tile-slate-blue hover:bg-gray-100 border-white">
                Get Free Consultation
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-star-tile-slate-blue">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
