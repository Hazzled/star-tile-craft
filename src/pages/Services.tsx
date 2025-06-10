import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Kitchen Backsplashes",
      description: "Transform your kitchen with stunning custom backsplash designs that perfectly complement your style and cooking space.",
      image: "/lovable-uploads/b947b3d6-9c5f-4715-a0d3-49aa3dc2206d.png",
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
      image: "/lovable-uploads/9adb0b06-75d6-411c-a8f8-621a8352881b.png",
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
      image: "/lovable-uploads/5a30d583-2cd7-47d4-86ed-14f99bc228d6.png",
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
      image: "/lovable-uploads/64fc2389-3550-4178-84c4-1935c25c0988.png",
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
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/lovable-uploads/3f39a99b-8332-4ddc-97fe-5195e245d335.png')"
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 animate-fade-in">
            Professional Tile Installation Services
          </h1>
          <p className="text-xl text-gray-200 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Expert craftsmanship for kitchens, bathrooms, flooring, and custom projects throughout Portland
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
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
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in hover-scale transition-all duration-500 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
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
                        <li 
                          key={featureIndex} 
                          className="flex items-center animate-fade-in"
                          style={{ animationDelay: `${index * 0.2 + featureIndex * 0.1}s` }}
                        >
                          <CheckCircle className="h-5 w-5 text-star-tile-slate-blue mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link to="/contact">
                    <Button className="bg-star-tile-slate-blue hover:bg-star-tile-slate-blue/90 text-white hover-scale transition-all duration-300">
                      Get Quote for This Service
                    </Button>
                  </Link>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover-scale group">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <motion.section 
        className="py-16 bg-star-tile-light-gray"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-star-tile-charcoal mb-4">
              Our Installation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a proven process to ensure every project is completed to perfection, on time and within budget.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Consultation",
                description: "Free in-home consultation to discuss your vision, needs, and budget."
              },
              {
                step: 2,
                title: "Design & Quote",
                description: "Custom design proposal with detailed quote and material selection."
              },
              {
                step: 3,
                title: "Installation",
                description: "Professional installation with meticulous attention to detail."
              },
              {
                step: 4,
                title: "Final Inspection",
                description: "Thorough walkthrough to ensure your complete satisfaction."
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="text-center bg-white hover:shadow-xl transition-all duration-500 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <motion.div 
                      className="bg-star-tile-slate-blue text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.15 + 0.3,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ 
                        rotate: 360,
                        transition: { duration: 0.5 }
                      }}
                    >
                      {process.step}
                    </motion.div>
                    <motion.h3 
                      className="text-lg font-montserrat font-semibold text-star-tile-charcoal mb-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.15 + 0.5 }}
                    >
                      {process.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600 flex-grow"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.15 + 0.6 }}
                    >
                      {process.description}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-16 bg-star-tile-slate-blue text-white overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
            Ready to Start Your Tile Project?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Contact us today for a free consultation and discover why we're Portland's most trusted tile installation company.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-star-tile-slate-blue hover:bg-gray-100 border-white hover-scale transition-all duration-300"
              >
                Get Free Consultation
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-star-tile-slate-blue hover-scale transition-all duration-300"
              >
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
