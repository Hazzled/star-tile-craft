
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle, Award, Users, Clock, ArrowUp, Quote } from "lucide-react";

const About = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Enhanced Overlay */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold mb-6 tracking-tight text-shadow-lg">
            Portland's Go-To Tile Installation Company
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light tracking-wide">
            Over a decade of expert craftsmanship serving the Portland Metro Area
          </p>
        </div>
        {/* Curved divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-white"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-white"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* Two-Column Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed">
                  As Portland's go-to tile installation company, we've been delivering exceptional craftsmanship and service for over a decade. Locally owned and operated, we take pride in transforming homes and businesses with tile work that's built to last.
                </p>
                
                {/* Pull Quote */}
                <div className="my-8 p-6 bg-gray-50 border-l-4 border-navy relative">
                  <Quote className="absolute top-4 left-4 h-6 w-6 text-navy opacity-30" />
                  <blockquote className="text-lg font-medium text-navy italic pl-8">
                    "Our team of skilled tile installers is handpicked for their expertise, attention to detail, and commitment to excellence."
                  </blockquote>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Whether it's a kitchen backsplash, bathroom remodel, or a full flooring overhaul, we ensure every tile is perfectly placed and every project exceeds expectations.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Why settle for average when you can work with Portland's most trusted tile professionals? Contact us today and let's bring your vision to life—with quality that stands the test of time.
                </p>
              </div>
              
              <div className="pt-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-navy hover:bg-navy/90 text-white px-8 py-4 text-lg">
                    Start Your Project Today
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="lg:pl-8">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Quality tile installation"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-almond">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-noir mb-4">
              Trusted by Portland
            </h2>
            <p className="text-xl text-gray-600">
              The numbers that speak to our commitment and expertise
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-navy to-navy/80 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Clock className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-4xl font-montserrat font-bold text-noir mb-2">10+</h3>
                <p className="text-gray-600 font-medium">Years Experience</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-navy to-navy/80 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-4xl font-montserrat font-bold text-noir mb-2">500+</h3>
                <p className="text-gray-600 font-medium">Happy Clients</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-navy to-navy/80 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-4xl font-montserrat font-bold text-noir mb-2">100%</h3>
                <p className="text-gray-600 font-medium">Licensed & Insured</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-navy to-navy/80 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-4xl font-montserrat font-bold text-noir mb-2">CCB</h3>
                <p className="text-gray-600 font-medium">#200970</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Our Promise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-noir mb-6">
                  Our Promise to You
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Four pillars that define our commitment to excellence
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="bg-navy rounded-full w-12 h-12 flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-xl text-noir mb-3">
                      Quality Craftsmanship
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Every tile is meticulously placed with precision and care, ensuring lasting beauty and durability.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-navy rounded-full w-12 h-12 flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-xl text-noir mb-3">
                      Transparent Communication
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We keep you informed throughout the entire process, from initial consultation to project completion.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-navy rounded-full w-12 h-12 flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-xl text-noir mb-3">
                      Timely Completion
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We respect your time and schedule, delivering projects on time without compromising quality.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-navy rounded-full w-12 h-12 flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-xl text-noir mb-3">
                      Customer Satisfaction
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Your satisfaction is our priority. We're not finished until you're completely happy with the results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:pl-8">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Quality tile installation"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-24 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-black/70" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Ready to Work with Portland's Best?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of satisfied customers who trust Star Tile LLC for their tile installation needs. Your dream space is just one call away.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-navy hover:bg-gray-100 text-lg px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Get Your Free Quote
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="text-white border-2 border-white hover:bg-white hover:text-navy text-lg px-8 py-4 font-semibold transition-all duration-300">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className="absolute bottom-8 right-8 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      </section>
    </div>
  );
};

export default About;
