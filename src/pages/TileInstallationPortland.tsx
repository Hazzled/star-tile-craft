import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MapPin, Phone, Star, CheckCircle } from "lucide-react";
import SEO from "@/components/SEO";
import { generateBreadcrumbJsonLd, homeBreadcrumb, servicesBreadcrumb } from "@/lib/breadcrumbs";

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

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Tile Installation Services",
    "description": "Professional tile installation for kitchens, bathrooms, and flooring in Portland, Oregon",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Star Tile LLC",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Portland",
        "addressRegion": "Oregon",
        "addressCountry": "US"
      },
      "telephone": "(503) 482-8395",
      "url": "https://startilellc.com/tile-installation-portland"
    },
    "areaServed": [
      "Portland, Oregon",
      "Pearl District",
      "Alberta Arts District", 
      "Sellwood",
      "Hawthorne",
      "Laurelhurst",
      "Irvington",
      "Beaumont-Wilshire"
    ],
    "serviceType": [
      "Kitchen Backsplash Installation",
      "Bathroom Tile Installation", 
      "Shower Tile Installation",
      "Floor Tile Installation",
      "Custom Tile Work",
      "Grout Repair"
    ]
  };

  const breadcrumbs = generateBreadcrumbJsonLd([
    homeBreadcrumb,
    servicesBreadcrumb,
    { name: "Tile Installation Portland", url: "https://startilellc.com/tile-installation-portland" }
  ]);

  return (
    <div className="min-h-screen">
      <SEO 
        title="Portland Tile Installation | Pearl District Hawthorne Alberta Kitchen Bathroom Experts"
        description="Professional tile installation in Portland, OR. Kitchen backsplashes, bathroom tile, flooring experts. Serving Pearl District, Hawthorne, Alberta areas. Licensed & insured. Free quotes!"
        canonical="https://startilellc.com/tile-installation-portland"
        ogImage="https://startilellc.com/og-portland-tile.jpg"
        structuredData={[serviceData, breadcrumbs]}
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
                <Button size="lg" variant="outline" className="border-background text-foreground hover:bg-background hover:text-primary">
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
              Portland's unique character deserves tile work that matches its creativity and craftsmanship. From the trendy Pearl District lofts requiring sleek modern backsplashes to the artistic Alberta Arts District homes needing vibrant custom tile designs, Star Tile LLC has been transforming Portland homes with exceptional tile installations since 2014. Our deep understanding of Portland's diverse neighborhoods means we deliver tile solutions that perfectly complement each area's distinct architectural personality.
            </p>

            <p className="text-muted-foreground mb-6">
              In the historic Sellwood neighborhood, we specialize in preserving the charm of vintage homes while adding contemporary tile features that enhance both beauty and functionality. Our work in Laurelhurst focuses on honoring the area's classic Craftsman architecture with tile selections that complement original woodwork and period details. Meanwhile, in the bustling Hawthorne District, we create stunning kitchen backsplashes and bathroom renovations that match the area's eclectic, artistic vibe.
            </p>

            <p className="text-muted-foreground mb-6">
              Portland's rainy climate demands expert waterproofing and moisture management in every tile installation. Our licensed contractors are specialists in Pacific Northwest building requirements, ensuring your tile work not only looks beautiful but withstands Portland's wet winters and dry summers. From Irvington's stately homes to Beaumont-Wilshire's mid-century moderns, we bring climate-appropriate expertise to every project. Our comprehensive <Link to="/services" className="text-primary hover:text-primary/80 underline">tile installation services</Link> include proper substrate preparation, moisture barriers, and premium waterproofing systems.
            </p>

            <p className="text-muted-foreground mb-6">
              Whether you're renovating a Pearl District condo kitchen, updating a Belmont bungalow bathroom, or creating custom tile features in a Richmond craftsman, our team understands the unique requirements of each Portland neighborhood. We work with homeowners in Woodstock to select tiles that complement the area's family-friendly atmosphere, while our Beaumont-Wilshire projects often showcase sophisticated natural stone installations that match the neighborhood's upscale character.
            </p>

            <p className="text-muted-foreground mb-8">
              Our portfolio of completed Portland projects spans every neighborhood and style imaginable. From historic preservation work in Irvington to cutting-edge contemporary designs in the South Waterfront, we've earned our reputation as Portland's most trusted tile installation company. Browse our <Link to="/portfolio" className="text-primary hover:text-primary/80 underline">portfolio of completed projects</Link> to see examples of our work throughout the Rose City, including stunning kitchen transformations, spa-like bathroom retreats, and custom tile installations that truly capture the spirit of Portland living.
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
              <Button size="lg" variant="outline" className="border-background text-foreground hover:bg-background hover:text-primary">
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