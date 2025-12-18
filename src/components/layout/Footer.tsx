import { Link } from "react-router-dom";
import { Facebook, Mail, Phone, MapPin } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const services = [
  "Photography",
  "Videography",
  "Podcasting",
  "T-Shirt Printing",
  "Advertising",
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
];

export const Footer = () => {
  return (
    <footer className="bg-hero text-hero-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold">
                Spark<span className="text-accent">snap</span> Media
              </span>
            </Link>
            <p className="text-hero-foreground/70 leading-relaxed">
              Your one-stop creative media hub. We bring your vision to life through photography, videography, podcasting, t-shirt printing, and advertising.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-hero-foreground/10 flex items-center justify-center text-hero-foreground/60 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-hero-foreground/70 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-hero-foreground/70 hover:text-accent transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-hero-foreground/70">
                  Bondo, Siaya County, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a
                  href="tel:+254799654108"
                  className="text-hero-foreground/70 hover:text-accent transition-colors"
                >
                  +254 799 654108
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a
                  href="mailto:vooom009@gmail.com"
                  className="text-hero-foreground/70 hover:text-accent transition-colors"
                >
                  vooom009@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-hero-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-hero-foreground/50 text-sm">
            © {new Date().getFullYear()} Sparksnap Media. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-hero-foreground/50">
            <Link to="/privacy" className="hover:text-hero-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-hero-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
