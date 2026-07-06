
import { Link } from "react-router-dom";
import { Clock, Shield, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const reasons = [
  {
    icon: Clock,
    title: "Over a Decade of Experience",
    description:
      "More than 10 years serving Portland with expert tile installation and customer satisfaction.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description:
      "Fully licensed (CCB #200970) and insured for your peace of mind and protection.",
  },
  {
    icon: Trophy,
    title: "Meticulous Craftsmanship",
    description:
      "Every tile perfectly placed with attention to detail that exceeds expectations.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section bg-secondary/50" aria-labelledby="why-heading">
      <div className="container-site">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="eyebrow">Why Star Tile</p>
          <h2 id="why-heading" className="section-title mb-5">
            The Trusted Choice for Tile in Portland
          </h2>
          <p className="section-lead">
            <Link to="/about" className="text-primary font-medium underline underline-offset-4 decoration-accent/40 hover:decoration-accent">
              Our experienced team
            </Link>{" "}
            has built a reputation for excellence throughout the Portland Metro
            Area —{" "}
            <Link to="/services" className="text-primary font-medium underline underline-offset-4 decoration-accent/40 hover:decoration-accent">
              discover our proven process
            </Link>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-card rounded-xl p-8 ring-1 ring-border shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <reason.icon className="h-6 w-6 text-accent" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-primary mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/about">
            <Button
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground px-8"
            >
              Read Our Full Story
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
