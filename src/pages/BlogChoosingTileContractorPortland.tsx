import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, XCircle, Phone, Mail } from "lucide-react";
import SEO from "@/components/SEO";
import { homeBreadcrumb, blogBreadcrumb, generateBreadcrumbJsonLd } from "@/lib/breadcrumbs";

export default function BlogChoosingTileContractorPortland() {
  const breadcrumbs = [
    homeBreadcrumb,
    blogBreadcrumb,
    {
      name: "How to Choose the Right Tile Contractor in Portland",
      url: "https://startilellc.com/blog/choosing-tile-contractor-portland"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Choose the Right Tile Contractor in Portland",
    "description": "Expert guide to selecting the best tile contractor in Portland. Learn about licensing, insurance, experience, and what to look for in a professional tile installer.",
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
    "datePublished": "2025-01-06",
    "dateModified": "2025-01-06",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://startilellc.com/blog/choosing-tile-contractor-portland"
    }
  };

  return (
    <>
      <SEO
        title="How to Choose Licensed Tile Contractor Portland Oregon | CCB Requirements Guide"
        description="How to choose licensed tile contractors in Oregon: CCB requirements, insurance verification, red flags to avoid. Portland Metro contractor selection guide with expert insights."
        canonical="https://www.startilellc.com/blog/choosing-tile-contractor-portland"
        structuredData={[structuredData, generateBreadcrumbJsonLd(breadcrumbs)]}
      />
      
      <article className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How to Choose the Right Tile Contractor in Portland
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your comprehensive guide to finding a licensed, insured, and experienced tile contractor for your Portland home renovation project.
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
              <span>Published January 6, 2025</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="max-w-4xl mx-auto mb-12">
            <img
              src="/lovable-uploads/134f2083-588f-4f1a-9dcb-066727768e7c.png"
              alt="Professional tile contractor working on a beautiful bathroom renovation in Portland home"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            <div className="bg-card rounded-lg p-8 shadow-sm mb-8">
              <p className="text-lg leading-relaxed mb-6">
                Choosing the right tile contractor in Portland can make the difference between a dream renovation and a costly nightmare. With Portland's unique climate considerations and the city's appreciation for quality craftsmanship, finding a contractor who understands local requirements is essential. This comprehensive guide will help you navigate the selection process and ensure your tile project exceeds expectations.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-8 mb-6">Essential Qualifications to Look For</h2>

              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">1. Valid Oregon Contractor License</h3>
              <p className="mb-4">
                In Oregon, tile contractors must hold a valid Construction Contractors Board (CCB) license. This isn't just paperwork—it's your protection. A licensed contractor like Star Tile LLC (CCB #200970) has met state requirements for insurance, bonding, and professional competency. Always verify a contractor's license status through the <a href="https://www.oregon.gov/ccb" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Oregon CCB website</a> before signing any contracts.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">2. Comprehensive Insurance Coverage</h3>
              <p className="mb-4">
                Proper insurance protects both you and the contractor. Look for contractors who carry both general liability insurance and workers' compensation coverage. This protects your property from damage and shields you from liability if someone is injured on your project. Don't just take their word for it—ask to see current insurance certificates.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">3. Local Experience and Expertise</h3>
              <p className="mb-6">
                Portland's climate presents unique challenges for tile installation. High humidity, temperature fluctuations, and seismic considerations require specific expertise. Look for contractors with extensive local experience who understand these factors and can recommend appropriate materials and installation techniques for our region.
              </p>

              <div className="bg-secondary/50 rounded-lg p-6 mb-8">
                <img
                  src="/lovable-uploads/16761e63-6932-4234-b9d7-854e9a45b901.png"
                  alt="Before and after comparison of a professional tile installation in a Portland kitchen"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-sm text-muted-foreground italic text-center">
                  Quality tile installation requires expertise in waterproofing, proper substrate preparation, and understanding local building codes.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-8 mb-6">Evaluating Contractor Quality</h2>

              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Portfolio and Past Work</h3>
              <p className="mb-4">
                A reputable contractor should proudly showcase their work. Review their <Link to="/portfolio" className="text-primary hover:underline">portfolio</Link> carefully, looking for projects similar to yours in scope and style. Pay attention to details like grout lines, corner treatments, and overall craftsmanship. Quality work speaks for itself.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">References and Reviews</h3>
              <p className="mb-4">
                Ask for recent references from projects completed in the last year. A quality contractor will readily provide contact information for satisfied customers. Additionally, check online reviews on Google, Yelp, and Better Business Bureau. Look for consistent themes in feedback and how the contractor responds to any negative reviews.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Communication and Professionalism</h3>
              <p className="mb-6">
                From your first interaction, assess the contractor's professionalism. Do they return calls promptly? Are estimates detailed and easy to understand? Do they explain their process clearly? Good communication during the selection phase often indicates how they'll handle your project.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-8 mb-6">DIY vs. Hiring a Professional</h2>
              
              <div className="overflow-x-auto mb-8">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/3">Factor</TableHead>
                      <TableHead className="w-1/3">DIY Installation</TableHead>
                      <TableHead className="w-1/3">Professional Installation</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Cost</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          Lower upfront cost
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <XCircle className="h-4 w-4 text-red-500" />
                          Higher upfront investment
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Quality Guarantee</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <XCircle className="h-4 w-4 text-red-500" />
                          No warranty protection
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          Professional warranty
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Time Investment</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <XCircle className="h-4 w-4 text-red-500" />
                          Weeks/months of work
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          Days to complete
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Expertise Required</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <XCircle className="h-4 w-4 text-red-500" />
                          Steep learning curve
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          Years of experience
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Tools & Equipment</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <XCircle className="h-4 w-4 text-red-500" />
                          Must purchase/rent
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          Professional grade tools
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Mistakes & Repairs</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <XCircle className="h-4 w-4 text-red-500" />
                          Costly to fix errors
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          Get it right first time
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-8 mb-6">Questions to Ask Potential Contractors</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-3">Licensing & Insurance</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• What's your CCB license number?</li>
                      <li>• Can you provide insurance certificates?</li>
                      <li>• Are you bonded?</li>
                      <li>• Do you pull permits when required?</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-3">Project Details</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• How long will the project take?</li>
                      <li>• What's included in your estimate?</li>
                      <li>• What warranty do you provide?</li>
                      <li>• How do you handle unexpected issues?</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-8 mb-6">Red Flags to Avoid</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Door-to-door solicitation or high-pressure sales tactics</li>
                <li>Requests for full payment upfront</li>
                <li>No physical business address or office</li>
                <li>Significantly lower bids than other contractors</li>
                <li>Cannot provide insurance certificates or license information</li>
                <li>Poor communication or unprofessional behavior</li>
                <li>No written contract or warranty</li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mt-8 mb-6">Why Choose Star Tile LLC</h2>
              <p className="mb-4">
                At Star Tile LLC, we understand that your tile project is an investment in your home's beauty and value. Our team brings years of Portland-specific experience, ensuring every installation meets the highest standards for both aesthetics and durability. From initial consultation through project completion, we're committed to transparent communication and exceptional craftsmanship.
              </p>
              
              <p className="mb-6">
                Explore our comprehensive <Link to="/services" className="text-primary hover:underline">tile installation services</Link> and learn more <Link to="/about" className="text-primary hover:underline">about our team</Link> and commitment to Portland homeowners.
              </p>

              <div className="bg-secondary/50 rounded-lg p-6 mb-8">
                <img
                  src="/lovable-uploads/1f219385-0286-432f-b4a6-63bd97af8bef.png"
                  alt="Satisfied Portland homeowners with their newly completed tile installation project"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-sm text-muted-foreground italic text-center">
                  The right contractor will deliver results that exceed your expectations and stand the test of time.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Start Your Tile Project?
                </h3>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Don't leave your tile installation to chance. Get a free consultation from Portland's trusted tile experts and discover why homeowners choose Star Tile LLC for their most important projects.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="text-lg px-8">
                    <Link to="/contact">
                      Get Your Free Consultation
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-lg px-8">
                    <a href="tel:+15035551234" className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      Call (503) 555-1234
                    </a>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Licensed • Insured • CCB #200970 • Free Estimates
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </article>
    </>
  );
}