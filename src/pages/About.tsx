
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle, Award, Users, Clock } from "lucide-react";

const About = () => {
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
            Portland's Go-To Tile Installation Company
          </h1>
          <p className="text-xl text-gray-200">
            Over a decade of expert craftsmanship serving the Portland Metro Area
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              As Portland's go-to tile installation company, we've been delivering exceptional craftsmanship and service for over a decade. Locally owned and operated, we take pride in transforming homes and businesses with tile work that's built to last.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our team of skilled tile installers is handpicked for their expertise, attention to detail, and commitment to excellence. Whether it's a kitchen backsplash, bathroom remodel, or a full flooring overhaul, we ensure every tile is perfectly placed and every project exceeds expectations.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Why settle for average when you can work with Portland's most trusted tile professionals? Contact us today and let's bring your vision to life—with quality that stands the test of time.
            </p>
          </div>
          
          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="bg-star-tile-slate-blue hover:bg-star-tile-slate-blue/90 text-white">
                Start Your Project Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-star-tile-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center bg-white">
              <CardContent className="p-6">
                <div className="bg-star-tile-slate-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-montserrat font-bold text-star-tile-charcoal mb-2">10+</h3>
                <p className="text-gray-600">Years Experience</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-white">
              <CardContent className="p-6">
                <div className="bg-star-tile-slate-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-montserrat font-bold text-star-tile-charcoal mb-2">500+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-white">
              <CardContent className="p-6">
                <div className="bg-star-tile-slate-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-montserrat font-bold text-star-tile-charcoal mb-2">100%</h3>
                <p className="text-gray-600">Licensed & Insured</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-white">
              <CardContent className="p-6">
                <div className="bg-star-tile-slate-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-montserrat font-bold text-star-tile-charcoal mb-2">CCB</h3>
                <p className="text-gray-600">#200970</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-star-tile-charcoal mb-6">
                Our Promise to You
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-star-tile-slate-blue mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-montserrat font-semibold text-star-tile-charcoal mb-2">
                      Quality Craftsmanship
                    </h3>
                    <p className="text-gray-600">
                      Every tile is meticulously placed with precision and care, ensuring lasting beauty and durability.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-star-tile-slate-blue mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-montserrat font-semibold text-star-tile-charcoal mb-2">
                      Transparent Communication
                    </h3>
                    <p className="text-gray-600">
                      We keep you informed throughout the entire process, from initial consultation to project completion.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-star-tile-slate-blue mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-montserrat font-semibold text-star-tile-charcoal mb-2">
                      Timely Completion
                    </h3>
                    <p className="text-gray-600">
                      We respect your time and schedule, delivering projects on time without compromising quality.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-star-tile-slate-blue mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-montserrat font-semibold text-star-tile-charcoal mb-2">
                      Customer Satisfaction
                    </h3>
                    <p className="text-gray-600">
                      Your satisfaction is our priority. We're not finished until you're completely happy with the results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:pl-8">
              <img 
                src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Quality tile installation"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-star-tile-slate-blue text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
            Ready to Work with Portland's Best?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Join hundreds of satisfied customers who trust Star Tile LLC for their tile installation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white text-star-tile-slate-blue hover:bg-gray-100 border-white">
                Get Your Free Quote
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

export default About;
