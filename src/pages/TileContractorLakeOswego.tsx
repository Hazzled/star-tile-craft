import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MapPin, Phone, Star, CheckCircle } from "lucide-react";
import SEO from "@/components/SEO";

const TileContractorLakeOswego = () => {
  const neighborhoods = [
    "First Addition", "Forest Hills", "Lake Grove", "Mountain Park",
    "Westlake", "Birdshill", "Glenmorrie", "Oswego Lake"
  ];

  const services = [
    "Luxury Master Bathroom Suites",
    "Designer Kitchen Backsplashes",
    "Premium Natural Stone",
    "Custom Mosaic Tile Art",
    "Wine Cellar Tile",
    "Pool & Spa Tile Installation"
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Star Tile LLC",
    "description": "Luxury tile contractor in Lake Oswego, Oregon",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lake Oswego",
      "addressRegion": "Oregon",
      "addressCountry": "US"
    },
    "telephone": "(503) 482-8395",
    "url": "https://startilellc.com/tile-contractor-lake-oswego",
    "servedArea": {
      "@type": "City",
      "name": "Lake Oswego, Oregon"
    },
    "serviceType": ["Luxury Tile Contractor", "Natural Stone Installation", "Designer Tile", "Custom Tile Work"]
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Luxury Tile Contractor Lake Oswego OR | Designer Tile & Natural Stone"
        description="Premier luxury tile contractor in Lake Oswego, Oregon. Designer kitchens, spa master bathrooms, custom mosaics, natural stone. Forest Hills, Mountain Park areas. Premium service!"
        canonical="https://startilellc.com/tile-contractor-lake-oswego"
        ogImage="https://startilellc.com/og-lake-oswego-tile.jpg"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              Luxury Tile Contractor in Lake Oswego
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Premium tile installation and designer services for Lake Oswego's finest homes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                  Get Premium Quote
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
              Lake Oswego's Premier Luxury Tile Specialists
            </h2>
            
            <p className="text-muted-foreground mb-6">
              Lake Oswego's discerning homeowners expect nothing less than perfection, and that's exactly what Star Tile LLC delivers. From the prestigious Forest Hills neighborhood to the elegant homes around Oswego Lake, we've established ourselves as the premier luxury tile contractor for Lake Oswego's most beautiful properties. Our expertise in high-end materials, precision installation, and custom design makes us the trusted choice for homeowners who demand the finest craftsmanship.
            </p>

            <p className="text-muted-foreground mb-6">
              Whether you're creating a spa-like master bathroom retreat in Mountain Park or designing a gourmet kitchen in Westlake, we understand that Lake Oswego homes require an elevated level of attention to detail. Our licensed contractors specialize in premium natural stone, custom mosaic work, and designer tile installations that complement the sophisticated architecture found throughout Lake Oswego. From First Addition's classic homes to the contemporary designs in Glenmorrie, we bring the expertise needed to enhance your home's luxury and value.
            </p>

            <p className="text-muted-foreground mb-8">
              Star Tile LLC has earned the trust of Lake Oswego's most discerning homeowners through our unwavering commitment to excellence. Our portfolio includes some of the area's most stunning tile installations, from wine cellars in Birdshill to pool areas overlooking the lake. When you choose us for your Lake Oswego project, you're choosing a contractor who understands luxury, appreciates quality, and delivers results that exceed even the highest expectations.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Services */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-montserrat font-semibold text-foreground mb-4 flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    Lake Oswego Luxury Services
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
                    Lake Oswego Areas We Serve
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {neighborhoods.map((neighborhood, index) => (
                      <div key={index} className="text-sm text-muted-foreground">
                        {neighborhood}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    Plus West Linn & surrounding areas
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
            Elevate Your Lake Oswego Home to New Heights
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join Lake Oswego's most discerning homeowners who trust Star Tile LLC for their luxury renovations. Exceptional quality, impeccable service, stunning results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                Schedule Luxury Consultation
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Luxury Portfolio
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-primary-foreground/80">
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <span className="ml-2">CCB #200970 | Lake Oswego's Luxury Choice</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TileContractorLakeOswego;