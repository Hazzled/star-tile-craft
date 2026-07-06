
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import kitchenBacksplashImage from "@/assets/kitchen-blue-tile-backsplash.webp";

const services = [
  {
    title: "Kitchen Backsplashes",
    description:
      "Transform your kitchen with stunning custom backsplash designs that perfectly complement your style.",
    image: kitchenBacksplashImage,
  },
  {
    title: "Bathroom & Shower Tile",
    description:
      "Create beautiful, waterproof bathroom spaces with expert tile installation.",
    image: "/lovable-uploads/88907a77-a669-40de-b427-7b4f0a578e62.png",
  },
  {
    title: "Tile & Stone Flooring",
    description:
      "Durable and elegant flooring solutions using ceramic, porcelain, and natural stone tiles.",
    image: "/lovable-uploads/7c8f4090-7d94-4b46-9292-e9c1722e7cc1.png",
  },
  {
    title: "Custom Tile Projects",
    description:
      "Unique installations for fireplaces, patios, accent walls, and specialty areas.",
    image: "/lovable-uploads/23e07dc2-2092-4fe4-955d-2827060a2131.png",
  },
];

const ServicesOverview = () => {
  return (
    <section className="section bg-card" aria-labelledby="services-heading">
      <div className="container-site">
        <header className="text-center max-w-3xl mx-auto mb-14">
          <p className="eyebrow">What We Do</p>
          <h2 id="services-heading" className="section-title mb-5">
            Expert Services for Every Surface
          </h2>
          <p className="section-lead">
            From kitchen backsplashes to custom installations, we bring your
            vision to life with precision and style.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
          {services.map((service) => (
            <article key={service.title} role="listitem" className="img-card group flex flex-col">
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} — professional tile installation example`}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="300"
                  height="208"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-montserrat font-semibold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm hover:gap-2.5 transition-all"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Explore service
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
