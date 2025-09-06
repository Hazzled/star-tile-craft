import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MapPin, Phone, Star, CheckCircle } from "lucide-react";
import SEO from "@/components/SEO";

const TileContractorTigard = () => {
  const neighborhoods = [
    "Bull Mountain", "Summerfield", "Metzger", "King City", 
    "Fanno Creek", "Walters", "Greenburg", "Downtown Tigard"
  ];

  const services = [
    "Luxury Bathroom Tile",
    "Gourmet Kitchen Backsplashes",
    "Natural Stone Installation", 
    "Porcelain & Ceramic Tile",
    "Tile Repair & Restoration",
    "Waterproofing Solutions"
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Star Tile LLC",
    "description": "Professional tile contractor in Tigard, Oregon",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tigard",
      "addressRegion": "Oregon",
      "addressCountry": "US"
    },
    "telephone": "(503) 482-8395",
    "url": "https://startilellc.com/tile-contractor-tigard",
    "servedArea": {
      "@type": "City",
      "name": "Tigard, Oregon"
    },
    "serviceType": ["Tile Contractor", "Bathroom Tile", "Kitchen Tile", "Natural Stone Installation"]
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Tile Contractor Tigard Oregon | Star Tile LLC - Expert Installation"
        description="Professional tile contractor in Tigard, OR. Luxury bathrooms, kitchen backsplashes, natural stone. Serving Bull Mountain, Summerfield, King City. Free quotes!"
        canonical="https://startilellc.com/tile-contractor-tigard"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              Expert Tile Contractor in Tigard
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Premium tile installation and renovation services for Tigard homeowners
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                  Get Free Tigard Quote
                </Button>
              </Link>
              <a href="tel:5034828395">
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Phone className="mr-2 h-5 w-5" />
                  (503) 482-8395
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-montserrat font-bold text-foreground mb-6">
              Tigard's Leading Tile Installation Experts
            </h2>
            
            <p className="text-muted-foreground mb-6">
              Tigard's growing community of discerning homeowners deserves tile work that reflects their high standards. Star Tile LLC has been serving Tigard with exceptional tile installation services, from the upscale Bull Mountain area to the family-friendly Summerfield neighborhood. Our expertise in both classic and contemporary tile design makes us the preferred contractor for Tigard homes that demand the perfect balance of beauty and functionality.
            </p>

            <p className="text-muted-foreground mb-6">
              Whether you're in a luxury home in King City or a charming property near Fanno Creek, we understand that every Tigard home has its own character and needs. Our licensed tile contractors bring over a decade of experience to every project, ensuring that your kitchen backsplash, bathroom remodel, or flooring installation meets the highest standards. We're familiar with Tigard's building requirements and neighborhood aesthetics, delivering results that enhance both your home's value and your daily living experience.
            </p>

            <p className="text-muted-foreground mb-8">
              From the established neighborhoods around Metzger to the newer developments in Greenburg, Star Tile LLC has built a reputation as Tigard's most trusted tile contractor. Our commitment to quality craftsmanship, transparent communication, and customer satisfaction has made us the go-to choice for Tigard homeowners who refuse to compromise on excellence. When you choose us, you're choosing a partner who understands Tigard and delivers tile work that stands the test of time.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Services */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-montserrat font-semibold text-foreground mb-4 flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    Tigard Tile Services
                  </h3>
                  <ul className="space-y-2">
                    {services.map((service, index) => (
                      <li key={index} className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {service}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Areas Served */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-montserrat font-semibold text-foreground mb-4 flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-primary" />
                    Tigard Areas We Serve
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {neighborhoods.map((neighborhood, index) => (
                      <div key={index} className="text-sm text-muted-foreground">
                        {neighborhood}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    Plus surrounding Tigard areas
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
            Elevate Your Tigard Home with Expert Tile Work
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Discover why Tigard homeowners trust Star Tile LLC for their most important renovation projects. Premium quality, professional service, guaranteed results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                Start Your Tigard Project
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                See Tigard Projects
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-primary-foreground/80">
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <span className="ml-2">CCB #200970 | Tigard's Trusted Choice</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TileContractorTigard;