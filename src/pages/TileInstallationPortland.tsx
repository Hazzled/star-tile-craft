import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MapPin, Phone, Star, CheckCircle } from "lucide-react";
import SEO from "@/components/SEO";

const TileInstallationPortland = () => {
  const neighborhoods = [
    "Pearl District", "Hawthorne", "Alberta", "Sellwood", "Irvington", 
    "Laurelhurst", "Beaumont-Wilshire", "Woodstock", "Richmond", "Belmont"
  ];

  const services = [
    "Kitchen Backsplash Installation",
    "Bathroom & Shower Tile",
    "Hardwood & Tile Flooring",
    "Custom Tile Design",
    "Grout Repair & Replacement",
    "Waterproofing Services"
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Star Tile LLC",
    "description": "Professional tile installation services in Portland, Oregon",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Portland",
      "addressRegion": "Oregon",
      "addressCountry": "US"
    },
    "telephone": "(503) 482-8395",
    "url": "https://startilellc.com/tile-installation-portland",
    "servedArea": {
      "@type": "City",
      "name": "Portland, Oregon"
    },
    "serviceType": ["Tile Installation", "Kitchen Backsplash", "Bathroom Tile", "Flooring"]
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Tile Installation Portland Oregon | Star Tile LLC - Licensed Contractors"
        description="Expert tile installation in Portland, OR. Kitchen backsplashes, bathroom remodels, flooring. Serving Pearl District, Hawthorne, Alberta & all Portland neighborhoods. Free estimates!"
        canonical="https://startilellc.com/tile-installation-portland"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              Portland Tile Installation Experts
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Professional tile contractors serving the Rose City with over 10 years of experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                  Get Free Portland Quote
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
              Trusted Tile Installation Throughout Portland
            </h2>
            
            <p className="text-muted-foreground mb-6">
              Portland's unique character deserves tile work that matches its creativity and craftsmanship. From the trendy Pearl District to the artistic Alberta neighborhood, Star Tile LLC has been transforming Portland homes with exceptional tile installations since 2014. Our local expertise means we understand Portland's architectural diversity, from classic Craftsman homes in Laurelhurst to modern condos in the South Waterfront.
            </p>

            <p className="text-muted-foreground mb-6">
              Portland's rainy climate demands proper waterproofing and moisture management in tile installations. Our licensed contractors are experts in Pacific Northwest building requirements, ensuring your tile work not only looks beautiful but withstands Portland's wet winters and dry summers. Whether you're renovating a historic home in Irvington or updating a mid-century modern in Beaumont-Wilshire, we bring the right expertise to every project.
            </p>

            <p className="text-muted-foreground mb-8">
              We're proud to be Portland's go-to tile installation company, serving neighborhoods from Hawthorne to Sellwood, Richmond to Woodstock. Our commitment to quality craftsmanship, transparent pricing, and exceptional customer service has made us the trusted choice for hundreds of Portland homeowners who demand nothing less than perfection.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Services */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-montserrat font-semibold text-foreground mb-4 flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    Our Portland Services
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
                    Portland Areas We Serve
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {neighborhoods.map((neighborhood, index) => (
                      <div key={index} className="text-sm text-muted-foreground">
                        {neighborhood}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    Plus all other Portland neighborhoods
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
            Ready to Start Your Portland Tile Project?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join hundreds of satisfied Portland homeowners who trust Star Tile LLC for exceptional tile installation. Licensed, insured, and locally owned.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                Get Your Free Portland Estimate
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Portland Projects
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-primary-foreground/80">
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <span className="ml-2">CCB #200970 | Licensed & Insured</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TileInstallationPortland;