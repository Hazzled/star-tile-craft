import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="section bg-primary text-primary-foreground relative overflow-hidden">
      <div
        className="absolute inset-0 bg-[radial-gradient(60%_80%_at_20%_100%,hsl(var(--accent)/0.25)_0%,transparent_60%)]"
        aria-hidden="true"
      />
      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-5 text-primary-foreground">
          Ready to Transform Your Space?
        </h2>
        <p className="text-lg md:text-xl mb-10 text-primary-foreground/80 leading-relaxed">
          Get a free consultation and a detailed quote — usually within 24
          hours. Let's bring your tile vision to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/quote">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 text-base shadow-lg group"
            >
              Get a Free Quote
              <ArrowRight
                className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </Button>
          </Link>
          <a href="tel:5034828395">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 text-base"
            >
              <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
              (503) 482-8395
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
