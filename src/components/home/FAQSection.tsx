import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQSection = () => {
  const faqs = [
    {
      question: "How long does a typical tile installation project take?",
      answer: "Project timelines vary based on scope and size. A standard bathroom remodel typically takes 5-7 days, while kitchen backsplashes can be completed in 2-3 days. Larger projects like whole-home flooring may take 1-2 weeks. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you handle waterproofing before tile installation?",
      answer: "Absolutely! Proper waterproofing is essential, especially in Portland's damp climate. We use industry-leading waterproofing membranes and follow all local building codes to ensure your tile installation is protected against moisture damage for years to come."
    },
    {
      question: "What types of tile do you work with?",
      answer: "We work with all types of tile including ceramic, porcelain, natural stone (marble, granite, travertine), glass tile, and mosaic. Our team has experience with both residential and commercial installations, from simple subway tiles to complex custom patterns."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, Star Tile LLC is fully licensed (CCB #200970) and insured in Oregon. We carry comprehensive liability insurance and workers' compensation coverage to protect both our team and your property during every project."
    },
    {
      question: "Do you provide free estimates?",
      answer: "Yes, we offer free, no-obligation estimates for all tile installation projects in the Portland metro area. We'll visit your property, assess your needs, and provide a detailed written estimate with no hidden fees."
    },
    {
      question: "What areas do you serve around Portland?",
      answer: "We serve the entire Portland metro area including Beaverton, Tigard, Gresham, Lake Oswego, Milwaukie, and surrounding communities. Contact us to confirm we service your specific location."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-20 bg-gray-50">
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-noir mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our 
            <Link to="/services" className="text-navy hover:underline font-medium"> tile installation services</Link> in Portland.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-lg shadow-md border-0 px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-noir hover:text-navy py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Have more questions? We're here to help!
          </p>
          <Link to="/contact">
            <Button className="bg-navy hover:bg-navy/90 text-white px-8 py-3 rounded-xl">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;