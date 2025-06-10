import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, Award, Clock, Shield } from "lucide-react";
import { BackgroundPaths } from "@/components/ui/background-paths";

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
    text: "Star Tile completely transformed our kitchen! The craftsmanship is impeccable and they finished on time.",
    rating: 5
  }, {
    name: "Mike Davis",
    text: "Professional, reliable, and their attention to detail is amazing. Highly recommend for any tile work!",
    rating: 5
  }, {
    name: "Jennifer Liu",
    text: "Our bathroom remodel exceeded expectations. The team was courteous and the quality is outstanding.",
    rating: 5
  }];
  return <div className="min-h-screen">
      {/* Hero Section with Animated Background */}
      <section className="relative h-[600px] overflow-hidden">
        <BackgroundPaths title="Portland's Premier Tile Installation" />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-gray-800/50 z-20" />
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-10" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
        }} />
        <div className="relative z-30 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Over a decade of expert craftsmanship • Licensed & Insured • CCB #200970
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-navy hover:bg-navy/90 text-ivory px-8 py-3 text-lg rounded-sm">
                Get a Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-star-tile-charcoal mb-4">
              Our Expert Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From kitchen backsplashes to custom installations, we bring your vision to life with precision and style.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-w-4 aspect-h-3">
                  <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-montserrat font-semibold text-star-tile-charcoal mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <Link to="/services">
                    <Button variant="outline" className="text-star-tile-slate-blue border-star-tile-slate-blue hover:bg-star-tile-slate-blue hover:text-white">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16 bg-star-tile-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-star-tile-charcoal mb-4">
              Recent Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See the quality and craftsmanship that sets us apart from other tile contractors in Portland.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {portfolioPreview.map((image, index) => <div key={index} className="aspect-square overflow-hidden rounded-lg">
                <img src={image} alt={`Portfolio project ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>)}
          </div>
          
          <div className="text-center">
            <Link to="/portfolio">
              <Button className="bg-star-tile-slate-blue hover:bg-star-tile-slate-blue/90 text-white">
                View Full Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-star-tile-charcoal mb-4">
              Why Choose Star Tile LLC?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-star-tile-slate-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-star-tile-charcoal mb-3">
                Over a Decade of Experience
              </h3>
              <p className="text-gray-600">
                More than 10 years serving Portland with expert tile installation and customer satisfaction.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-star-tile-slate-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-star-tile-charcoal mb-3">
                Licensed & Insured
              </h3>
              <p className="text-gray-600">
                Fully licensed (CCB #200970) and insured for your peace of mind and protection.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-star-tile-slate-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-star-tile-charcoal mb-3">
                Meticulous Craftsmanship
              </h3>
              <p className="text-gray-600">
                Every tile perfectly placed with attention to detail that exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-star-tile-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-star-tile-charcoal mb-4">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-montserrat font-semibold text-star-tile-charcoal">
                    — {testimonial.name}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-star-tile-slate-blue text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Contact us today for a free consultation and quote. Let's bring your tile vision to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white text-star-tile-slate-blue hover:bg-gray-100 border-white">
                Get Free Quote
              </Button>
            </Link>
            <a href="tel:5034828395">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-star-tile-slate-blue">
                Call (503) 482-8395
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;
