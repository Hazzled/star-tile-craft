import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MapPin, Phone, Star, CheckCircle } from "lucide-react";
import SEO from "@/components/SEO";
import { generateBreadcrumbJsonLd, homeBreadcrumb, servicesBreadcrumb } from "@/lib/breadcrumbs";

const TileContractorBeaverton = () => {
  const neighborhoods = [
    "Cedar Hills", "Murray Hill", "Sexton Mountain", "West Slope", 
    "Raleigh Hills", "Garden Home", "Cooper Mountain", "Denney Whitford"
  ];

  const services = [
    "Kitchen Backsplash Design",
    "Master Bathroom Remodeling", 
    "Tile & Stone Flooring",
    "Custom Shower Installation",
    "Fireplace Tile Surrounds",
    "Commercial Tile Work"
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Star Tile LLC",
    "description": "Professional tile contractor in Beaverton, Oregon",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Beaverton",
      "addressRegion": "Oregon", 
      "addressCountry": "US"
    },
    "telephone": "(503) 482-8395",
    "url": "https://www.startilellc.com/tile-contractor-beaverton",
    "servedArea": {
      "@type": "City",
      "name": "Beaverton, Oregon"
    },
    "serviceType": ["Tile Contractor", "Bathroom Remodel", "Kitchen Backsplash", "Tile Installation"]
  };

  const breadcrumbs = generateBreadcrumbJsonLd([
    homeBreadcrumb,
    servicesBreadcrumb,
    { name: "Tile Contractor Beaverton", url: "https://www.startilellc.com/tile-contractor-beaverton" }
  ]);

  return (
    <div className="min-h-screen">
      <SEO 
        title="Tile Contractor Beaverton Oregon | Cedar Hills & Cooper Mountain Kitchen & Bath"
        description="Beaverton's trusted tile contractor: Cedar Hills, Murray Hill, Cooper Mountain specialists. Kitchen remodels, luxury bathrooms, custom installations. Licensed Oregon CCB #200970."
        canonical="https://www.startilellc.com/tile-contractor-beaverton"
        ogImage="https://www.startilellc.com/og-beaverton-tile.jpg"
        structuredData={[structuredData, breadcrumbs]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              Beaverton's Premier Tile Contractor
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Expert tile installation and remodeling services for Beaverton homes and businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                  Get Free Beaverton Quote
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
              Beaverton's Trusted Tile Installation Specialists
            </h2>
            
            <p className="text-muted-foreground mb-6">
              Beaverton homeowners know quality when they see it, and that's exactly what Star Tile LLC delivers. From the established neighborhoods of Cedar Hills to the newer developments on Cooper Mountain, we've been the trusted tile contractor for Beaverton residents who demand exceptional craftsmanship. Our expertise spans everything from elegant kitchen backsplashes in Murray Hill homes to luxury bathroom remodels in the West Slope area.
            </p>

            <p className="text-muted-foreground mb-6">
              What sets us apart in Beaverton is our deep understanding of the area's diverse housing stock. Whether you're updating a 1970s ranch in Sexton Mountain or renovating a contemporary home in Denney Whitford, we bring the right approach to every project. Our licensed contractors are familiar with Beaverton's building codes and requirements, ensuring your tile installation not only meets but exceeds local standards.
            </p>

            <p className="text-muted-foreground mb-8">
              We're proud to serve as Beaverton's go-to tile contractor, with hundreds of completed projects throughout the city. From Garden Home to Raleigh Hills, our reputation for quality workmanship, fair pricing, and exceptional customer service has made us the contractor of choice for discerning Beaverton homeowners. When you choose Star Tile LLC, you're choosing a contractor who understands Beaverton and delivers results that last.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Services */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-montserrat font-semibold text-foreground mb-4 flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    Beaverton Tile Services
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
                    Beaverton Areas We Serve
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {neighborhoods.map((neighborhood, index) => (
                      <div key={index} className="text-sm text-muted-foreground">
                        {neighborhood}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    Plus all Beaverton neighborhoods
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
            Transform Your Beaverton Home Today
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Experience why Beaverton residents choose Star Tile LLC for their most important remodeling projects. Quality you can trust, service you can count on.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                Schedule Free Consultation
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Our Beaverton Work
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-primary-foreground/80">
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <span className="ml-2">CCB #200970 | Serving Beaverton Since 2014</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TileContractorBeaverton;