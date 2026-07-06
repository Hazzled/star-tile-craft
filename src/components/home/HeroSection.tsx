import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Star, MapPin } from "lucide-react";

// React 18 only forwards the lowercase DOM attribute; the camelCase prop
// triggers an "unknown prop" warning during prerendering.
const imgPriority: Record<string, string> = { fetchpriority: "high" };

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Soft background wash */}
      <div
        className="absolute inset-0 bg-[radial-gradient(70%_60%_at_80%_20%,hsl(var(--secondary))_0%,transparent_70%)]"
        aria-hidden="true"
      />

      <div className="container-site relative py-16 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <header className="max-w-xl">
            <p className="eyebrow animate-fade-up">Portland Metro Tile Contractor</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold leading-[1.05] mb-6 animate-fade-up">
              Tile Installation Done Right, Down to the Last Grout Line
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-up-delay-1">
              Kitchen backsplashes, bathroom remodels, and custom tile work for
              homes across Portland, Gresham, and the surrounding metro — built
              on more than a decade of craftsmanship.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10 animate-fade-up-delay-1">
              <Link to="/quote">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 text-base shadow-md group"
                >
                  Get a Free Quote
                  <ArrowRight
                    className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground px-8 text-base"
                >
                  See Our Work
                </Button>
              </Link>
            </div>

            {/* Trust row */}
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-foreground/80 animate-fade-up-delay-2">
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent" aria-hidden="true" />
                Licensed &amp; Insured · CCB #200970
              </li>
              <li className="flex items-center gap-2">
                <Star className="h-4 w-4 text-accent" aria-hidden="true" />
                10+ years of expert installs
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                Serving the Portland Metro
              </li>
            </ul>
          </header>

          {/* Photography */}
          <div className="relative animate-fade-up-delay-1">
            <div
              className="absolute -bottom-6 -right-6 w-2/3 h-2/3 rounded-2xl bg-accent/15"
              aria-hidden="true"
            />
            <img
              src="/images/portfolio/kitchen-marble-complete.png"
              alt="Bright white kitchen with marble backsplash and island tile installed by Star Tile LLC"
              className="relative w-full h-auto rounded-2xl shadow-xl ring-1 ring-border object-cover"
              width="1100"
              height="733"
              {...imgPriority}
            />
            <div className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6 bg-card/95 backdrop-blur rounded-xl shadow-lg px-5 py-4 ring-1 ring-border">
              <p className="font-montserrat font-bold text-primary text-2xl leading-none mb-1">
                500+
              </p>
              <p className="text-sm text-muted-foreground">projects completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
