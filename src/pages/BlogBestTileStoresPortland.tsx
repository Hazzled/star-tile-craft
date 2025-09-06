import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import OptimizedImage from '@/components/OptimizedImage';

const BlogBestTileStoresPortland = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Best Tile Stores in Portland for Homeowners & Contractors",
    "description": "Comprehensive guide to Portland's top tile suppliers including Bedrosians, Oregon Tile & Marble, and Pratt & Larson. Find the best selection and prices for your project.",
    "author": {
      "@type": "Organization",
      "name": "Star Tile LLC"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Star Tile LLC",
      "logo": {
        "@type": "ImageObject",
        "url": "https://startilellc.com/logo.png"
      }
    },
    "datePublished": "2025-01-15",
    "dateModified": "2025-01-15",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://startilellc.com/blog/best-tile-stores-portland"
    }
  };

  const tileStores = [
    {
      name: "Bedrosians Tile & Stone",
      specialty: "Designer tiles and natural stone",
      strengths: ["Premium selection", "Commercial-grade options", "Excellent contractor support"],
      description: "Known for high-end designer tiles and comprehensive stone selection"
    },
    {
      name: "Oregon Tile & Marble",
      specialty: "Local Portland institution",
      strengths: ["Competitive pricing", "Large inventory", "Local expertise"],
      description: "Portland's go-to source for both residential and commercial tile projects"
    },
    {
      name: "Pratt & Larson Ceramics",
      specialty: "Handcrafted ceramic tiles",
      strengths: ["Unique designs", "Custom glazes", "Artisan quality"],
      description: "Portland-based manufacturer of distinctive handmade ceramic tiles"
    },
    {
      name: "Ann Sacks",
      specialty: "Luxury tile and stone",
      strengths: ["High-end materials", "Designer collections", "Premium service"],
      description: "Upscale showroom featuring luxury tiles and natural stone"
    },
    {
      name: "The Tile Shop",
      specialty: "Wide selection and competitive prices",
      strengths: ["Budget-friendly options", "Large format tiles", "DIY support"],
      description: "National chain with extensive inventory and helpful design services"
    }
  ];

  return (
    <>
      <SEO
        title="Best Tile Stores in Portland for Homeowners & Contractors | Star Tile LLC"
        description="Discover Portland's top tile suppliers including Bedrosians, Oregon Tile & Marble, and Pratt & Larson. Compare selection, prices, and specialties for your next tile project."
        canonical="https://startilellc.com/blog/best-tile-stores-portland"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-b from-white to-almond/30">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Best Tile Stores in Portland for Homeowners & Contractors
            </h1>
            <p className="text-xl text-mist max-w-3xl mx-auto mb-8">
              Your comprehensive guide to Portland's top tile suppliers, featuring expert reviews 
              of selection, pricing, and specialties to help you find the perfect tiles for your project.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-mist">
              <span>Published January 15, 2025</span>
              <span>•</span>
              <span>7 min read</span>
            </div>
          </header>

          {/* Hero Image */}
          <div className="mb-12">
            <OptimizedImage
              src="/lovable-uploads/bdf2e6f5-6cfb-4e6a-91c3-449075bc7573.png"
              alt="Portland tile store showroom displaying various ceramic and natural stone tiles"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Introduction */}
          <section className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              Finding the right tile supplier in Portland can make or break your renovation project. 
              Whether you're a homeowner planning a bathroom remodel or a contractor sourcing materials 
              for multiple projects, the right store can save you time, money, and headaches. Portland's 
              diverse tile market offers everything from budget-friendly options to luxury designer collections.
            </p>
            
            <p className="text-lg text-charcoal leading-relaxed mb-8">
              After years of working with Portland's tile suppliers, we've compiled this comprehensive 
              guide to help you navigate the city's best options. Each store has its unique strengths, 
              and understanding these differences will help you choose the perfect supplier for your specific needs.
            </p>
          </section>

          {/* Store Reviews */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-8">Top 5 Tile Stores in Portland</h2>
            
            <div className="space-y-8">
              {tileStores.map((store, index) => (
                <Card key={index} className="border-2 border-sage/20 hover:border-sage/40 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-charcoal">{store.name}</h3>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-lg text-terracotta font-semibold mb-4">{store.specialty}</p>
                    <p className="text-charcoal mb-6">{store.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-charcoal mb-2">What They're Known For:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {store.strengths.map((strength, i) => (
                          <li key={i} className="text-mist">{strength}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Shopping Tips */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Tips for Choosing the Right Tile Store</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <OptimizedImage
                  src="/lovable-uploads/23e07dc2-2092-4fe4-955d-2827060a2131.png"
                  alt="Contractor examining tile samples at Portland tile showroom"
                  className="w-full h-60 object-cover rounded-lg shadow-md"
                />
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-4">Consider These Factors:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-terracotta mt-1 flex-shrink-0" />
                    <span className="text-charcoal"><strong>Project Budget:</strong> Luxury showrooms vs. budget-friendly options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-terracotta mt-1 flex-shrink-0" />
                    <span className="text-charcoal"><strong>Selection Size:</strong> Larger stores offer more variety</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-terracotta mt-1 flex-shrink-0" />
                    <span className="text-charcoal"><strong>Expert Support:</strong> Design consultation and technical advice</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-terracotta mt-1 flex-shrink-0" />
                    <span className="text-charcoal"><strong>Delivery Options:</strong> Important for large orders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-terracotta mt-1 flex-shrink-0" />
                    <span className="text-charcoal"><strong>Sample Policies:</strong> Take-home samples for decision-making</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Local Trends */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Portland Tile Trends & Preferences</h2>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              Portland homeowners consistently favor natural materials that complement the Pacific Northwest's 
              aesthetic. Wood-look porcelain, natural stone, and handcrafted ceramics remain popular choices. 
              The city's appreciation for artisan craftsmanship makes Pratt & Larson's handmade tiles 
              particularly sought after for unique projects.
            </p>
            
            <p className="text-lg text-charcoal leading-relaxed mb-8">
              Sustainability is also a key consideration for many Portland residents. Stores that offer 
              recycled content tiles or locally-sourced materials often see increased interest from 
              environmentally-conscious customers.
            </p>
          </section>

          {/* Internal Links */}
          <section className="mb-12">
            <Card className="bg-sage/10 border-sage/30">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-charcoal mb-4">
                  Need Professional Installation?
                </h3>
                <p className="text-lg text-charcoal mb-6">
                  Once you've found the perfect tiles, Star Tile LLC provides expert installation 
                  services throughout the Portland metro area.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="outline" size="lg">
                    <Link to="/services">
                      View Our Services
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/portfolio">
                      See Our Work
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-terracotta to-gold text-white">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Start Your Tile Project?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Let Star Tile LLC help you bring your vision to life with professional installation 
                  and expert guidance on material selection.
                </p>
                <Button asChild size="lg" variant="secondary">
                  <Link to="/contact">
                    Get Your Free Quote Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </section>
        </article>
      </div>
    </>
  );
};

export default BlogBestTileStoresPortland;