import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, Award, Clock, Shield, Trophy, ArrowRight, Instagram, Facebook } from "lucide-react";
const Index = () => {
  const services = [{
    title: "Kitchen Backsplashes",
    description: "Transform your kitchen with stunning custom backsplash designs that perfectly complement your style.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }, {
    title: "Bathroom & Shower Tile",
    description: "Create beautiful, waterproof bathroom spaces with expert tile installation.",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }, {
    title: "Tile & Stone Flooring",
    description: "Durable and elegant flooring solutions using ceramic, porcelain, and natural stone tiles.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }, {
    title: "Custom Tile Projects",
    description: "Unique installations for fireplaces, patios, accent walls, and specialty areas.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }];
  const portfolioPreview = ["https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"];
  const testimonials = [{
    name: "Sarah Johnson",
    initials: "SJ",
    text: "Star Tile completely transformed our kitchen! The craftsmanship is impeccable and they finished on time.",
    rating: 5
  }, {
    name: "Mike Davis",
    initials: "MD",
    text: "Professional, reliable, and their attention to detail is amazing. Highly recommend for any tile work!",
    rating: 5
  }, {
    name: "Jennifer Liu",
    initials: "JL",
    text: "Our bathroom remodel exceeded expectations. The team was courteous and the quality is outstanding.",
    rating: 5
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[700px] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
      }} />
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-montserrat font-bold mb-6 leading-tight tracking-tight">
            Portland's Premier<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Tile Installation
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-300 font-light">
            Over a decade of expert craftsmanship • Licensed & Insured • CCB #200970
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-navy to-navy/90 hover:from-navy/90 hover:to-navy/80 text-white px-10 py-4 text-lg rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 group">
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-noir mb-6">
              Our Expert Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From kitchen backsplashes to custom installations, we bring your vision to life with precision and style.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg group">
                <div className="relative overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-montserrat font-semibold text-noir mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link to="/services">
                    <Button variant="outline" className="text-navy border-navy hover:bg-navy hover:text-white transition-all duration-300 rounded-lg">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-almond">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-noir mb-6">
              Recent Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the quality and craftsmanship that sets us apart from other tile contractors in Portland.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {portfolioPreview.map((image, index) => <div key={index} className="aspect-square overflow-hidden rounded-2xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
                <img src={image} alt={`Portfolio project ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>)}
          </div>
          
          <div className="text-center">
            <Link to="/portfolio">
              <Button className="bg-navy hover:bg-navy/90 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                View Full Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-almond">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-noir mb-6">
              Why Choose Star Tile LLC?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-navy to-navy/80 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-montserrat font-semibold text-noir mb-4">
                Over a Decade of Experience
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                More than 10 years serving Portland with expert tile installation and customer satisfaction.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-navy to-navy/80 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-montserrat font-semibold text-noir mb-4">
                Licensed & Insured
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Fully licensed (CCB #200970) and insured for your peace of mind and protection.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-navy to-navy/80 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <Trophy className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-montserrat font-semibold text-noir mb-4">
                Meticulous Craftsmanship
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Every tile perfectly placed with attention to detail that exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-noir mb-6">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <Card key={index} className="bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-navy to-navy/80 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold text-noir text-lg">
                        {testimonial.name}
                      </p>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />)}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-navy to-noir text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 to-noir/90" />
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-10 text-gray-200 leading-relaxed">
            Contact us today for a free consultation and quote. Let's bring your tile vision to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white text-navy hover:bg-gray-100 border-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold">
                Get Free Quote
              </Button>
            </Link>
            <a href="tel:5034828395">
              <Button size="lg" variant="outline" className="border-white hover:bg-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-slate-800">
                Call (503) 482-8395
              </Button>
            </a>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;