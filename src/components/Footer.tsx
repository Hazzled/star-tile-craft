
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-noir text-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/images/brand/star-tile-logo.png" 
              alt="Star Tile LLC" 
              className="h-16 w-auto mb-4 filter invert"
            />
            <p className="text-mist mb-4">
              Portland's premier tile installation company with over a decade of experience. 
              Licensed, insured, and dedicated to exceptional craftsmanship.
            </p>
            <p className="text-sm text-mist">
              CCB #200970 | Licensed & Insured
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-mist hover:text-ivory transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/tile-installation-portland" className="text-mist hover:text-ivory transition-colors">
                  Portland Tile Installation
                </Link>
              </li>
              <li>
                <Link to="/tile-cost-calculator" className="text-mist hover:text-ivory transition-colors">
                  Cost Calculator
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-mist hover:text-ivory transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-mist hover:text-ivory transition-colors">
                  Tile Tips & Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tile-contractor-beaverton" className="text-mist hover:text-ivory transition-colors">
                  Beaverton
                </Link>
              </li>
              <li>
                <Link to="/tile-contractor-gresham" className="text-mist hover:text-ivory transition-colors">
                  Gresham
                </Link>
              </li>
              <li>
                <Link to="/tile-contractor-lake-oswego" className="text-mist hover:text-ivory transition-colors">
                  Lake Oswego
                </Link>
              </li>
              <li>
                <Link to="/tile-contractor-tigard" className="text-mist hover:text-ivory transition-colors">
                  Tigard
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-mist hover:text-ivory transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-mist" />
                <a href="tel:5034828395" className="text-mist hover:text-ivory transition-colors">
                  (503) 482-8395
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-mist" />
                <a href="mailto:Contact@Startilellc.com" className="text-mist hover:text-ivory transition-colors">
                  Contact@Startilellc.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-mist" />
                <span className="text-mist">Portland, Oregon USA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-navy mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-mist mb-4 sm:mb-0">
              © 2024 Star Tile LLC. All rights reserved. | Serving the Portland Metro Area
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-mist hover:text-ivory transition-colors text-sm">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
