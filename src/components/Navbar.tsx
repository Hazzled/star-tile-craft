
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Clock, ShieldCheck } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/blog", label: "Blog" },
    { path: "/tile-cost-calculator", label: "Calculator" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Utility strip */}
      <div className="hidden md:block bg-primary text-primary-foreground/90 text-sm">
        <div className="container-site flex items-center justify-between h-9">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              Licensed &amp; Insured — CCB #200970
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              Mon–Fri 7am–6pm · Sat 8am–4pm
            </span>
          </div>
          <a
            href="tel:5034828395"
            className="flex items-center gap-1.5 font-semibold hover:text-primary-foreground transition-colors"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            (503) 482-8395
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container-site">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0" aria-label="Star Tile LLC — home">
              <img
                src="/images/brand/star-tile-logo.png"
                alt="Star Tile LLC"
                className="h-10 w-auto"
                width="180"
                height="40"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(link.path)
                      ? "text-accent"
                      : "text-foreground/80 hover:text-primary hover:bg-secondary/60"
                  }`}
                  aria-current={isActive(link.path) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <Link to="/quote">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-sm">
                  Get a Free Quote
                </Button>
              </Link>
            </div>

            {/* Mobile: call + menu buttons */}
            <div className="flex lg:hidden items-center gap-1">
              <a
                href="tel:5034828395"
                className="p-2.5 text-primary hover:text-accent transition-colors"
                aria-label="Call Star Tile LLC at (503) 482-8395"
              >
                <Phone size={20} aria-hidden="true" />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 text-primary hover:text-accent transition-colors"
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute inset-x-0 top-16 bg-background border-b border-border shadow-lg">
            <div className="container-site py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2.5 text-base font-medium rounded-md transition-colors ${
                    isActive(link.path)
                      ? "text-accent bg-secondary/60"
                      : "text-foreground hover:text-primary hover:bg-secondary/60"
                  }`}
                  aria-current={isActive(link.path) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3">
                <Link to="/quote" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                    Get a Free Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
