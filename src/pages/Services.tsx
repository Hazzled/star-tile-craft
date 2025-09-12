
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle, Hammer, Droplets, Home, Sparkles, Phone, ClipboardCheck, Wrench, Eye } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { generateBreadcrumbJsonLd, homeBreadcrumb } from "@/lib/breadcrumbs";

const Services = () => {
  const serviceOverview = [{
    icon: <Hammer className="h-8 w-8" />,
    title: "Kitchen Backsplashes",
    description: "Custom designs that transform your cooking space"
  }, {
    icon: <Droplets className="h-8 w-8" />,
    title: "Bathroom & Shower",
    description: "Waterproof installations with stunning aesthetics"
  }, {
    icon: <Home className="h-8 w-8" />,
    title: "Flooring Solutions",
    description: "Durable ceramic, porcelain, and natural stone"
  }, {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Custom Projects",
    description: "Unique installations for any space"
  }];
  const services = [
    {
      title: "Kitchen Backsplashes",
      description: "Transform your kitchen with stunning custom backsplash designs that perfectly complement your style and cooking space.",
      image: "/lovable-uploads/b947b3d6-9c5f-4715-a0d3-49aa3dc2206d.png",
      features: ["Custom design consultation", "Premium tile selection", "Professional installation", "Grout sealing & finishing"]
    }, {
      title: "Bathroom & Shower Tile",
      description: "Create beautiful, waterproof bathroom spaces with expert tile installation that combines functionality with stunning aesthetics.",
      image: "/lovable-uploads/9adb0b06-75d6-411c-a8f8-621a8352881b.png",
      features: ["Waterproofing solutions", "Custom shower designs", "Floor-to-ceiling installations", "Slip-resistant options"]
    }, {
      title: "Tile & Stone Flooring",
      description: "Durable and elegant flooring solutions using ceramic, porcelain, and natural stone tiles for lasting beauty.",
      image: "/lovable-uploads/5a30d583-2cd7-47d4-86ed-14f99bc228d6.png",
      features: ["Ceramic & porcelain tiles", "Natural stone installation", "Radiant heating compatibility", "Commercial-grade options"]
    }, {
      title: "Custom Tile Projects",
      description: "Unique installations for fireplaces, patios, accent walls, and specialty areas that require expert craftsmanship.",
      image: "/lovable-uploads/64fc2389-3550-4178-84c4-1935c25c0988.png",
      features: ["Fireplace surrounds", "Outdoor patios", "Accent walls", "Commercial spaces"]
    }
  ];
  const breadcrumbs = generateBreadcrumbJsonLd([
    homeBreadcrumb,
    { name: "Services", url: "https://startilellc.com/services" }
  ]);

  return <div className="min-h-screen">
      <SEO 
        title="Professional Tile Installation Services | Kitchen & Bathroom Specialists Portland OR"
        description="Licensed tile contractor specializing in bathrooms, kitchens, and flooring in Portland. Expert craftsmanship with 10+ years experience. Free estimates!"
        canonical="https://startilellc.com/services"
        structuredData={breadcrumbs}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-gray-900 to-navy text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" style={{
        backgroundImage: "url('/lovable-uploads/3f39a99b-8332-4ddc-97fe-5195e245d335.png')"
      }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 className="text-5xl md:text-6xl font-montserrat font-bold mb-6" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }}>
            Professional Tile Installation Services
          </motion.h1>
          <motion.p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            Expert craftsmanship for kitchens, bathrooms, flooring, and custom projects throughout Portland
          </motion.p>
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }}>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-navy hover:bg-gray-100 text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Get Free Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <h2 className="text-4xl font-montserrat font-bold text-navy mb-4">
              Our Specialized Services
            </h2>
            <div className="w-24 h-1 bg-navy mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From kitchen backsplashes to custom installations, we bring decades of experience to every project.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceOverview.map((service, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} whileHover={{
            scale: 1.05
          }}>
                <Card className="text-center p-6 h-full bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                  <CardContent className="flex flex-col items-center space-y-4 p-0">
                    <div className="bg-navy text-white p-4 rounded-full">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-montserrat font-semibold text-navy">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Individual Service Blocks */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => <motion.div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`} initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8,
            delay: index * 0.1
          }}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} bg-almond p-8 rounded-2xl`}>
                  <h3 className="text-3xl font-montserrat font-bold text-navy mb-6">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-montserrat font-semibold text-navy mb-4 flex items-center">
                      <CheckCircle className="h-6 w-6 text-navy mr-2" />
                      What's Included:
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => <motion.li key={featureIndex} className="flex items-center" initial={{
                    opacity: 0,
                    x: -20
                  }} whileInView={{
                    opacity: 1,
                    x: 0
                  }} viewport={{
                    once: true
                  }} transition={{
                    duration: 0.4,
                    delay: featureIndex * 0.1
                  }}>
                          <div className="w-2 h-2 bg-navy rounded-full mr-4"></div>
                          <span className="text-gray-700 text-lg">{feature}</span>
                        </motion.li>)}
                    </ul>
                  </div>
                  
                  <Link to="/contact">
                    <Button className="bg-navy hover:bg-navy/90 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
                      Get Quote for This Service
                    </Button>
                  </Link>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <motion.div whileHover={{
                scale: 1.02
              }} transition={{
                duration: 0.3
              }}>
                    <Card className="overflow-hidden shadow-2xl border-0 rounded-2xl group">
                      <img src={service.image} alt={service.title} className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700" />
                    </Card>
                  </motion.div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-gradient-to-r from-almond to-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <h2 className="text-4xl font-montserrat font-bold text-navy mb-4">
              Our Installation Process
            </h2>
            <div className="w-24 h-1 bg-navy mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a proven process to ensure every project is completed to perfection, on time and within budget.
            </p>
          </motion.div>
          
          {/* Process Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-20 left-0 right-0 h-1 bg-navy/20 hidden lg:block"></div>
            <div className="absolute top-20 left-0 h-1 bg-navy hidden lg:block animate-pulse" style={{
            width: '100%'
          }}></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[{
              step: 1,
              icon: <Phone className="h-8 w-8" />,
              title: "Consultation",
              description: "Free in-home consultation to discuss your vision, needs, and budget."
            }, {
              step: 2,
              icon: <ClipboardCheck className="h-8 w-8" />,
              title: "Design & Quote",
              description: "Custom design proposal with detailed quote and material selection."
            }, {
              step: 3,
              icon: <Wrench className="h-8 w-8" />,
              title: "Installation",
              description: "Professional installation with meticulous attention to detail."
            }, {
              step: 4,
              icon: <Eye className="h-8 w-8" />,
              title: "Final Inspection",
              description: "Thorough walkthrough to ensure your complete satisfaction."
            }].map((process, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 50
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: index * 0.15
            }} className="relative flex flex-col">
                  <Card className="text-center bg-white shadow-xl border-0 rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-500 h-full">
                    <CardContent className="p-8 flex flex-col items-center h-full">
                      {/* Step Number */}
                      <div className="relative mb-6 flex justify-center">
                        <div className="bg-navy text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold shadow-lg relative z-10">
                          {process.step}
                        </div>
                        {/* Connector line for desktop */}
                        {index < 3 && <div className="hidden lg:block absolute top-8 left-full w-full h-1 bg-navy/20 -translate-y-1/2"></div>}
                      </div>
                      
                      {/* Icon */}
                      <div className="bg-almond text-navy rounded-full w-12 h-12 flex items-center justify-center mb-4">
                        {process.icon}
                      </div>
                      
                      <h3 className="text-xl font-montserrat font-semibold text-navy mb-4 text-center">
                        {process.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-center flex-1">
                        {process.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>)}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{
        backgroundImage: "url('/lovable-uploads/b947b3d6-9c5f-4715-a0d3-49aa3dc2206d.png')"
      }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }}>
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              Ready to Start Your Tile Project?
            </h2>
            <p className="text-xl mb-10 text-gray-200 leading-relaxed">
              Contact us today for a free consultation and discover why we're Portland's most trusted tile installation company.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-navy hover:bg-gray-100 px-8 py-4 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                  Get Free Consultation
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="border-white hover:bg-white px-8 py-4 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 text-slate-900">
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>;
};

export default Services;
