
import { useForm, ValidationError } from "@formspree/react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  CheckCircle,
  Loader2,
  ShieldCheck,
} from "lucide-react";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import SEO from "@/components/SEO";
import { generateBreadcrumbJsonLd, homeBreadcrumb } from "@/lib/breadcrumbs";

export const FORMSPREE_FORM_ID = "xvzjyqvz";

const Contact = () => {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);

  const breadcrumbs = generateBreadcrumbJsonLd([
    homeBreadcrumb,
    { name: "Contact", url: "https://startilellc.com/contact" },
  ]);

  return (
    <div className="min-h-screen">
      <SEO
        title="Get Free Tile Installation Quote Portland Metro | Licensed Contractors (503) 482-8395"
        description="Request a free in-home tile consultation across Portland Metro. Licensed contractors respond within 24 hours. Call (503) 482-8395."
        canonical="https://startilellc.com/contact"
        structuredData={breadcrumbs}
      />

      {/* Page header */}
      <section className="bg-secondary/50 border-b border-border">
        <div className="container-site py-14 md:py-20 text-center">
          <p className="eyebrow">Contact Us</p>
          <h1 className="section-title mb-5">Get Your Free Quote Today</h1>
          <p className="section-lead max-w-2xl mx-auto">
            Ready to start your tile project? Tell us what you have in mind and
            we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Form + contact info */}
      <section className="section bg-background">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="shadow-lg ring-1 ring-border border-0 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-montserrat font-bold text-primary">
                    Request Your Free Consultation
                  </CardTitle>
                  <p className="text-muted-foreground pt-1">
                    Fill out the form below and we'll contact you within 24 hours
                    to discuss your project.
                  </p>
                  <div className="flex flex-wrap gap-2 text-sm pt-1">
                    <Link
                      to="/tile-cost-calculator"
                      className="text-accent font-medium hover:underline underline-offset-4"
                    >
                      Try our cost calculator first →
                    </Link>
                  </div>
                </CardHeader>
                <CardContent>
                  {state.succeeded ? (
                    <div className="py-12 text-center" role="status">
                      <CheckCircle className="h-16 w-16 text-accent mx-auto mb-5" aria-hidden="true" />
                      <h2 className="text-2xl font-montserrat font-bold text-primary mb-3">
                        Thank You!
                      </h2>
                      <p className="text-muted-foreground max-w-md mx-auto mb-6">
                        Your message is on its way. We'll contact you within 24
                        hours. Need us sooner?
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
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Honeypot for bots — hidden from real users */}
                      <input
                        type="text"
                        name="_gotcha"
                        tabIndex={-1}
                        autoComplete="off"
                        className="hidden"
                        aria-hidden="true"
                      />
                      <input type="hidden" name="source" value="contact-page" />
                      <input
                        type="hidden"
                        name="_subject"
                        value="New quote request — startilellc.com contact form"
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <Label htmlFor="name" className="font-medium">
                            Full Name *
                          </Label>
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
                          <Label htmlFor="phone" className="font-medium">
                            Phone Number *
                          </Label>
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
                        <Label htmlFor="email" className="font-medium">
                          Email Address *
                        </Label>
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
                        <Label htmlFor="message" className="font-medium">
                          Project Details
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={5}
                          placeholder="Tell us about your tile project — type of installation, space size, timeline, etc."
                          className="mt-1.5 resize-none"
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
                        disabled={state.submitting}
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 text-base shadow-md"
                      >
                        {state.submitting ? (
                          <>
                            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                            Sending Message...
                          </>
                        ) : (
                          "Get My Free Quote"
                        )}
                      </Button>

                      {/* Form-level errors (network, rate limits, etc.) */}
                      <ValidationError
                        errors={state.errors}
                        className="text-destructive text-sm text-center block"
                      />
                      <p className="text-xs text-muted-foreground text-center">
                        We only use your details to respond to your inquiry — no
                        spam, ever.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="shadow-sm ring-1 ring-border border-0 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-xl font-montserrat font-bold text-primary">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-0">
                  <div className="flex items-center py-3.5">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="h-5 w-5 text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold text-primary text-sm">Phone</p>
                      <a
                        href="tel:5034828395"
                        className="text-foreground/80 hover:text-accent transition-colors"
                      >
                        (503) 482-8395
                      </a>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-center py-3.5">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="h-5 w-5 text-accent" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-montserrat font-semibold text-primary text-sm">Email</p>
                      <a
                        href="mailto:Contact@Startilellc.com"
                        className="text-foreground/80 hover:text-accent transition-colors break-all"
                      >
                        Contact@Startilellc.com
                      </a>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-center py-3.5">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold text-primary text-sm">
                        Service Area
                      </p>
                      <p className="text-foreground/80">Portland Metro Area, Oregon</p>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-center py-3.5">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="h-5 w-5 text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold text-primary text-sm">
                        Business Hours
                      </p>
                      <p className="text-foreground/80 text-sm">
                        Mon–Fri: 7am–6pm · Sat: 8am–4pm
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground shadow-sm border-0 rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <ShieldCheck className="h-6 w-6 text-accent" aria-hidden="true" />
                    <h2 className="text-lg font-montserrat font-bold text-primary-foreground">
                      Licensed &amp; Insured
                    </h2>
                  </div>
                  <p className="mb-1 font-semibold">CCB #200970</p>
                  <p className="text-primary-foreground/75 text-sm leading-relaxed">
                    Fully licensed and insured for your protection and peace of
                    mind.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="section bg-card border-t border-border">
        <div className="container-site">
          <div className="text-center mb-10">
            <p className="eyebrow">Where We Work</p>
            <h2 className="section-title mb-4">Our Service Areas</h2>
            <p className="section-lead max-w-2xl mx-auto">
              We proudly serve homeowners and businesses throughout the greater
              Portland Metro area.
            </p>
          </div>

          <ServiceAreaMap />
        </div>
      </section>
    </div>
  );
};

export default Contact;
