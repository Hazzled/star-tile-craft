import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MapPin, Phone, Star, CheckCircle } from "lucide-react";
import SEO from "@/components/SEO";
import { generateBreadcrumbJsonLd, homeBreadcrumb, servicesBreadcrumb } from "@/lib/breadcrumbs";

const TileContractorGresham = () => {
  const neighborhoods = [
    "Powell Valley", "Downtown Gresham", "Pleasant Valley", "Centennial",
    "Mount Scott", "Hollybrook", "Regency", "Springwater"
  ];

  const services = [
    "Farmhouse Kitchen Backsplashes",
    "Spa-Style Bathroom Remodels",
    "Rustic Stone & Tile Flooring",
    "Outdoor Patio Tile",
    "Mudroom Tile Solutions",
    "Entryway & Foyer Design"
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Star Tile LLC",
    "description": "Professional tile contractor in Gresham, Oregon",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gresham",
      "addressRegion": "Oregon",
      "addressCountry": "US"
    },
    "telephone": "(503) 482-8395",
    "url": "https://startilellc.com/tile-contractor-gresham",
    "servedArea": {
      "@type": "City",
      "name": "Gresham, Oregon"
    },
    "serviceType": ["Tile Contractor", "Bathroom Remodel", "Kitchen Tile", "Outdoor Tile"]
  };

  const breadcrumbs = generateBreadcrumbJsonLd([
    homeBreadcrumb,
    servicesBreadcrumb,
    { name: "Tile Contractor Gresham", url: "https://startilellc.com/tile-contractor-gresham" }
  ]);

  return (
    <div className="min-h-screen">
      <SEO 
        title="Gresham Tile Contractor | Powell Valley & Pleasant Valley Kitchen Bathroom Specialists"
        description="Gresham tile installation experts: Powell Valley, Pleasant Valley, Centennial. Farmhouse kitchens, spa bathrooms, outdoor patio tile. 10+ years local experience."
        canonical="https://www.startilellc.com/tile-contractor-gresham"
        ogImage="https://startilellc.com/og-gresham-tile.jpg"
        structuredData={[structuredData, breadcrumbs]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              Gresham's Trusted Tile Contractor
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Indoor and outdoor tile installation specialists serving Gresham and East Portland
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                  Get Free Gresham Quote
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
              Gresham's Premier Tile Installation Specialists
            </h2>
            
            <p className="text-muted-foreground mb-6">
              Gresham's beautiful setting at the foothills of the Cascade Mountains calls for tile work that complements both indoor comfort and outdoor living. Star Tile LLC has been serving Gresham homeowners with exceptional tile installation services that honor the area's connection to nature. From farmhouse-style kitchens in Powell Valley to contemporary bathrooms in Pleasant Valley, we bring the perfect blend of craftsmanship and design sense to every Gresham project.
            </p>

            <p className="text-muted-foreground mb-6">
              What makes us Gresham's preferred tile contractor is our understanding of the area's unique lifestyle needs. Many Gresham homes feature larger lots and outdoor spaces that benefit from our expertise in patio tile, outdoor kitchens, and weather-resistant installations. Whether you're in the established neighborhoods near Mount Scott or the newer developments in Centennial, we know how to create tile solutions that withstand Oregon's climate while enhancing your home's natural beauty.
            </p>

            <p className="text-muted-foreground mb-8">
              From downtown Gresham's historic homes to the spacious properties in Springwater, Star Tile LLC has earned a reputation for delivering tile work that exceeds expectations. Our licensed contractors understand Gresham's building codes and the practical needs of homes that often feature mudrooms, entryways, and outdoor living spaces. When you choose us, you're choosing a contractor who appreciates Gresham's lifestyle and delivers results that enhance it.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Services */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-montserrat font-semibold text-foreground mb-4 flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    Gresham Tile Services
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
                    Gresham Areas We Serve
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {neighborhoods.map((neighborhood, index) => (
                      <div key={index} className="text-sm text-muted-foreground">
                        {neighborhood}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    Plus outer East Portland areas
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
            Bring Your Gresham Home Vision to Life
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Experience the Star Tile LLC difference. From indoor luxury to outdoor durability, we create tile installations that enhance Gresham living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                Start Your Gresham Project
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Our Gresham Work
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-primary-foreground/80">
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <span className="ml-2">CCB #200970 | Serving East Portland</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TileContractorGresham;