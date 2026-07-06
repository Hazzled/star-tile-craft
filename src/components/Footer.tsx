
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-noir text-ivory">
      <div className="container-site py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <img
              src="/images/brand/star-tile-logo.png"
              alt="Star Tile LLC"
              className="h-12 w-auto mb-5 invert"
              width="216"
              height="48"
              loading="lazy"
            />
            <p className="text-mist mb-4 leading-relaxed">
              Portland's premier tile installation company with over a decade of
              experience. Licensed, insured, and dedicated to exceptional
              craftsmanship.
            </p>
            <p className="text-sm text-mist mb-5">CCB #200970 · Licensed &amp; Insured</p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/startilellc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mist hover:text-ivory transition-colors"
                aria-label="Star Tile LLC on Instagram"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://www.facebook.com/startilellc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mist hover:text-ivory transition-colors"
                aria-label="Star Tile LLC on Facebook"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Services">
            <h2 className="text-lg font-montserrat font-semibold mb-4 text-ivory">Our Services</h2>
            <ul className="space-y-2.5">
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
                  Tile Tips &amp; Guides
                </Link>
              </li>
            </ul>
          </nav>

          {/* Service Areas */}
          <nav aria-label="Service areas">
            <h2 className="text-lg font-montserrat font-semibold mb-4 text-ivory">Service Areas</h2>
            <ul className="space-y-2.5">
              <li>
                <Link to="/tile-installation-portland" className="text-mist hover:text-ivory transition-colors">
                  Portland
                </Link>
              </li>
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
            </ul>
          </nav>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-montserrat font-semibold mb-4 text-ivory">Contact</h2>
            <address className="not-italic space-y-3.5">
              <a
                href="tel:5034828395"
                className="flex items-center text-mist hover:text-ivory transition-colors"
              >
                <Phone className="h-4 w-4 mr-3 flex-shrink-0" aria-hidden="true" />
                (503) 482-8395
              </a>
              <a
                href="mailto:Contact@Startilellc.com"
                className="flex items-center text-mist hover:text-ivory transition-colors break-all"
              >
                <Mail className="h-4 w-4 mr-3 flex-shrink-0" aria-hidden="true" />
                Contact@Startilellc.com
              </a>
              <p className="flex items-start text-mist">
                <MapPin className="h-4 w-4 mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                <span>
                  649 NW 12th St
                  <br />
                  Gresham, OR 97030
                </span>
              </p>
              <p className="flex items-start text-mist">
                <Clock className="h-4 w-4 mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                <span>
                  Mon–Fri: 7am–6pm
                  <br />
                  Sat: 8am–4pm · Sun: Closed
                </span>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-ivory/10 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-mist text-sm">
              © {new Date().getFullYear()} Star Tile LLC. All rights reserved. Serving the Portland
              Metro Area.
            </p>
            <Link
              to="/privacy-policy"
              className="text-mist hover:text-ivory transition-colors text-sm"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
