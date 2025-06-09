
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl font-montserrat font-bold text-star-tile-charcoal">
              Star Tile LLC
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-star-tile-slate-blue border-b-2 border-star-tile-slate-blue"
                      : "text-star-tile-charcoal hover:text-star-tile-slate-blue"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link to="/contact">
              <Button className="bg-star-tile-slate-blue hover:bg-star-tile-slate-blue/90 text-white">
                Get Free Quote
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-star-tile-charcoal hover:text-star-tile-slate-blue"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-star-tile-slate-blue bg-star-tile-light-gray"
                      : "text-star-tile-charcoal hover:text-star-tile-slate-blue hover:bg-star-tile-light-gray"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-star-tile-slate-blue hover:bg-star-tile-slate-blue/90 text-white">
                    Get Free Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
