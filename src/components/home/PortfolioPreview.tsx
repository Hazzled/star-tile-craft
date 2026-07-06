
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  image: string;
}

interface PortfolioPreviewProps {
  recentProjects: PortfolioItem[];
  onProjectClick: (project: PortfolioItem) => void;
}

const PortfolioPreview = ({ recentProjects, onProjectClick }: PortfolioPreviewProps) => {
  return (
    <section className="section bg-background" aria-labelledby="portfolio-heading">
      <div className="container-site">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="eyebrow">Recent Projects</p>
          <h2 id="portfolio-heading" className="section-title mb-5">
            Craftsmanship You Can See
          </h2>
          <p className="section-lead">
            Real kitchens, bathrooms, and floors we've transformed for
            homeowners across the Portland Metro.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {recentProjects.map((project) => (
            <button
              key={project.id}
              type="button"
              className="aspect-square overflow-hidden rounded-xl group cursor-pointer relative ring-1 ring-border shadow-sm hover:shadow-xl transition-all duration-300 text-left"
              onClick={() => onProjectClick(project)}
              aria-label={`View project: ${project.title}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <p className="text-white font-montserrat font-semibold text-sm md:text-base mb-0.5 line-clamp-2">
                  {project.title}
                </p>
                <p className="text-white/80 text-xs uppercase tracking-wider">{project.category}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="text-center">
          <Link to="/portfolio">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 shadow-sm"
            >
              View Full Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
