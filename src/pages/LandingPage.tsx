import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Star, CheckCircle } from "lucide-react";
import SEO from "@/components/SEO";
import { portfolioItems } from "@/data/portfolioData";
import { useToast } from "@/hooks/use-toast";

const LandingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Get featured projects for the landing page
  const featuredProjects = portfolioItems.slice(0, 6);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Request Submitted!",
        description: "We'll contact you within 24 hours to discuss your project.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        project: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Star Tile LLC",
    "description": "Professional tile installation services in Portland. Kitchen backsplashes, bathroom remodels, and custom tile work.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Portland",
      "addressRegion": "Oregon"
    },
    "telephone": "(503) 555-0123",
    "url": "https://startilellc.com",
    "priceRange": "$$"
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Get Your Dream Tile Project Quote | Star Tile LLC Portland"
        description="View our stunning tile installation portfolio and get a free quote. Kitchen backsplashes, bathroom remodels, and custom tile work in Portland."
        canonical="https://startilellc.com/quote"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
            Portland's Premier Tile Specialists
          </Badge>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6">
            Transform Your Space with
            <span className="block text-accent"> Professional Tile Installation</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            See our stunning work and get your free quote today. Over 500+ satisfied customers in Portland.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>Free Consultation</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Portfolio Showcase */}
          <div>
            <h2 className="text-3xl font-montserrat font-bold text-foreground mb-8">
              Our Recent Projects
            </h2>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {featuredProjects.map((project, index) => (
                <Card key={project.id} className="overflow-hidden group cursor-pointer">
                  <div className="relative aspect-square">
                    <img 
                      src={project.image} 
                      alt={`${project.title} - Professional tile installation in Portland`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading={index < 4 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Badge className="bg-white text-primary">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Why Choose Star Tile LLC?</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  15+ years of experience in Portland
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Licensed, bonded & insured
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Free estimates & consultations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Warranty on all work
                </li>
              </ul>
            </div>
          </div>

          {/* Lead Capture Form */}
          <div className="lg:sticky lg:top-8">
            <Card className="p-8 shadow-xl border-2">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-montserrat font-bold text-foreground mb-2">
                    Get Your Free Quote
                  </h2>
                  <p className="text-muted-foreground">
                    Tell us about your project and we'll provide a detailed estimate within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(503) 555-0123"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="project">Project Type</Label>
                    <Input
                      id="project"
                      name="project"
                      type="text"
                      value={formData.project}
                      onChange={handleInputChange}
                      placeholder="Kitchen backsplash, bathroom remodel, etc."
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your vision, timeline, and any specific requirements..."
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Get My Free Quote"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to be contacted about your project. 
                    No spam, unsubscribe anytime.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;