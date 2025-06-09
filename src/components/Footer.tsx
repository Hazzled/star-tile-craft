
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-star-tile-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-montserrat font-bold mb-4">Star Tile LLC</h3>
            <p className="text-gray-300 mb-4">
              Portland's premier tile installation company with over a decade of experience. 
              Licensed, insured, and dedicated to exceptional craftsmanship.
            </p>
            <p className="text-sm text-gray-400">
              CCB #200970 | Licensed & Insured
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-montserrat font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-montserrat font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-gray-400" />
                <a href="tel:5034828395" className="text-gray-300 hover:text-white transition-colors">
                  (503) 482-8395
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-gray-400" />
                <a href="mailto:Contact@Startilellc.com" className="text-gray-300 hover:text-white transition-colors">
                  Contact@Startilellc.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-gray-400" />
                <span className="text-gray-300">Portland, Oregon USA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Star Tile LLC. All rights reserved. | Serving the Portland Metro Area
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
