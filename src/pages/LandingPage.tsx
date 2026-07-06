import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Star, CheckCircle, ShieldCheck } from "lucide-react";
import SEO from "@/components/SEO";
import ProjectModal from "@/components/ProjectModal";
import { portfolioItems } from "@/data/portfolioData";
import { FORMSPREE_FORM_ID } from "./Contact";

type PortfolioProject = (typeof portfolioItems)[number];

const LandingPage = () => {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get featured projects for the landing page
  const featuredProjects = portfolioItems.slice(0, 6);

  const handleProjectClick = (project: PortfolioProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Star Tile LLC",
    "description":
      "Professional tile installation services in Portland. Kitchen backsplashes, bathroom remodels, and custom tile work.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "649 NW 12th St",
      "addressLocality": "Gresham",
      "addressRegion": "OR",
      "postalCode": "97030",
      "addressCountry": "US"
    },
    "telephone": "+15034828395",
    "url": "https://startilellc.com/quote",
    "priceRange": "$$"
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Free Tile Installation Quote Portland Metro | Kitchen Bathroom Flooring Contractors"
        description="View our award-winning tile portfolio & request free quote. Portland Metro's top-rated contractors for kitchen backsplashes, bathroom remodels, custom installations. Quick response guaranteed."
        canonical="https://startilellc.com/quote"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-[radial-gradient(60%_80%_at_80%_0%,hsl(var(--accent)/0.25)_0%,transparent_60%)]"
          aria-hidden="true"
        />
        <div className="max-w-6xl mx-auto text-center relative">
          <Badge className="mb-5 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
            Portland's Premier Tile Specialists
          </Badge>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6 text-primary-foreground">
            Transform Your Space with
            <span className="block mt-1">Professional Tile Installation</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/80">
            See our stunning work and get your free quote today. Over 500+
            satisfied customers in Portland.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
              <span>5.0 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-accent" aria-hidden="true" />
              <span>Licensed &amp; Insured · CCB #200970</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-accent" aria-hidden="true" />
              <span>Free Consultation</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container-site py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Portfolio Showcase */}
          <div>
            <h2 className="text-3xl font-montserrat font-bold text-primary mb-8">
              Our Recent Projects
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {featuredProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className="overflow-hidden group cursor-pointer ring-1 ring-border border-0 hover:shadow-xl transition-shadow duration-300"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="relative aspect-square">
                    <img
                      src={project.image}
                      alt={`${project.title} — professional tile installation in Portland`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading={index < 4 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Badge className="bg-card text-primary">{project.category}</Badge>
                    </div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <p className="text-white text-xs font-medium bg-primary/80 backdrop-blur-sm px-2 py-1 rounded truncate">
                        {project.title}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="bg-secondary/60 p-6 rounded-xl ring-1 ring-border">
              <h3 className="font-montserrat font-semibold text-lg mb-4 text-primary">
                Why Choose Star Tile LLC?
              </h3>
              <ul className="space-y-2.5">
                {[
                  "10+ years of experience in Portland",
                  "Licensed, bonded & insured",
                  "Free estimates & consultations",
                  "Warranty on all work",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-foreground">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Lead Capture Form */}
          <div className="lg:sticky lg:top-24">
            <Card className="p-8 shadow-xl ring-1 ring-border border-0 rounded-2xl">
              <CardContent className="p-0">
                {state.succeeded ? (
                  <div className="py-10 text-center" role="status">
                    <CheckCircle className="h-16 w-16 text-accent mx-auto mb-5" aria-hidden="true" />
                    <h2 className="text-2xl font-montserrat font-bold text-primary mb-3">
                      Request Received!
                    </h2>
                    <p className="text-muted-foreground max-w-sm mx-auto mb-6">
                      We'll contact you within 24 hours with your detailed
                      estimate. Need us sooner?
                    </p>
                    <a href="tel:5034828395">
                      <Button
                        variant="outline"
                        className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                        Call (503) 482-8395
                      </Button>
                    </a>
                  </div>
                ) : (
                  <>
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-montserrat font-bold text-primary mb-2">
                        Get Your Free Quote
                      </h2>
                      <p className="text-muted-foreground">
                        Tell us about your project and we'll provide a detailed
                        estimate within 24 hours.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Honeypot for bots — hidden from real users */}
                      <input
                        type="text"
                        name="_gotcha"
                        tabIndex={-1}
                        autoComplete="off"
                        className="hidden"
                        aria-hidden="true"
                      />
                      <input type="hidden" name="source" value="quote-landing-page" />
                      <input
                        type="hidden"
                        name="_subject"
                        value="New quote request — startilellc.com /quote page"
                      />

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            autoComplete="name"
                            placeholder="Jane Smith"
                            className="mt-1.5"
                            disabled={state.submitting}
                          />
                          <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                            className="text-destructive text-sm mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            autoComplete="tel"
                            placeholder="(503) 555-1234"
                            className="mt-1.5"
                            disabled={state.submitting}
                          />
                          <ValidationError
                            prefix="Phone"
                            field="phone"
                            errors={state.errors}
                            className="text-destructive text-sm mt-1"
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
                          autoComplete="email"
                          placeholder="jane@example.com"
                          className="mt-1.5"
                          disabled={state.submitting}
                        />
                        <ValidationError
                          prefix="Email"
                          field="email"
                          errors={state.errors}
                          className="text-destructive text-sm mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="project">Project Type</Label>
                        <Input
                          id="project"
                          name="project"
                          type="text"
                          placeholder="Kitchen backsplash, bathroom remodel, etc."
                          className="mt-1.5"
                          disabled={state.submitting}
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Project Details</Label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={4}
                          placeholder="Tell us about your vision, timeline, and any specific requirements..."
                          className="mt-1.5"
                          disabled={state.submitting}
                        />
                        <ValidationError
                          prefix="Message"
                          field="message"
                          errors={state.errors}
                          className="text-destructive text-sm mt-1"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                        disabled={state.submitting}
                      >
                        {state.submitting ? "Submitting..." : "Get My Free Quote"}
                      </Button>

                      {/* Form-level errors (network, rate limits, etc.) */}
                      <ValidationError
                        errors={state.errors}
                        className="text-destructive text-sm text-center block"
                      />

                      <p className="text-xs text-muted-foreground text-center">
                        By submitting this form, you agree to be contacted about
                        your project. No spam, unsubscribe anytime.
                      </p>
                    </form>
                  </>
                )}

                {/* Project Modal */}
                <ProjectModal
                  isOpen={isModalOpen}
                  onClose={handleCloseModal}
                  project={selectedProject}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
