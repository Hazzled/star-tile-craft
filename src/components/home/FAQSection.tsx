import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "How long does a typical tile installation project take?",
    answer:
      "Project timelines vary based on scope and size. A standard bathroom remodel typically takes 5-7 days, while kitchen backsplashes can be completed in 2-3 days. Larger projects like whole-home flooring may take 1-2 weeks. We provide detailed timelines during our initial consultation.",
  },
  {
    question: "Do you handle waterproofing before tile installation?",
    answer:
      "Absolutely! Proper waterproofing is essential, especially in Portland's damp climate. We use industry-leading waterproofing membranes and follow all local building codes to ensure your tile installation is protected against moisture damage for years to come.",
  },
  {
    question: "What types of tile do you work with?",
    answer:
      "We work with all types of tile including ceramic, porcelain, natural stone (marble, granite, travertine), glass tile, and mosaic. Our team has experience with both residential and commercial installations, from simple subway tiles to complex custom patterns.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, Star Tile LLC is fully licensed (CCB #200970) and insured in Oregon. We carry comprehensive liability insurance and workers' compensation coverage to protect both our team and your property during every project.",
  },
  {
    question: "Do you provide free estimates?",
    answer:
      "Yes, we offer free, no-obligation estimates for all tile installation projects in the Portland metro area. We'll visit your property, assess your needs, and provide a detailed written estimate with no hidden fees.",
  },
  {
    question: "What areas do you serve around Portland?",
    answer:
      "We serve the entire Portland metro area including Beaverton, Tigard, Gresham, Lake Oswego, Milwaukie, and surrounding communities. Contact us to confirm we service your specific location.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const FAQSection = () => {
  return (
    <section className="section bg-card" aria-labelledby="faq-heading">
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="eyebrow">FAQ</p>
          <h2 id="faq-heading" className="section-title mb-5">
            Frequently Asked Questions
          </h2>
          <p className="section-lead">
            Get answers to common questions about our{" "}
            <Link
              to="/services"
              className="text-primary font-medium underline underline-offset-4 decoration-accent/40 hover:decoration-accent"
            >
              tile installation services
            </Link>{" "}
            in Portland.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background rounded-xl ring-1 ring-border border-0 px-6 data-[state=open]:ring-accent/40"
            >
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-primary hover:text-accent hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-5">Have more questions? We're here to help.</p>
          <Link to="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
