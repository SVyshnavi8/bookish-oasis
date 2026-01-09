import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logoHeader from "@/assets/logoheader.png";

const products = [
  { label: "Solutions Overview", to: "/solutions" },
  { label: "Boundless", to: "/products/boundless" },
  { label: "ePopUp Library", to: "/epopup" },
  { label: "TS360", to: "/products/ts360" },
  { label: "Content Café", to: "/products/content-cafe" },
  { label: "Bibliostat CollectConnect", to: "/products/bibliostat" },
];

const explore = [
  { label: "Home", to: "/" },
  { label: "Libraries", to: "/libraries" },
  { label: "Resources", to: "/resources" },
  { label: "About", to: "/about" },
  { label: "Request Demo", to: "/request-demo" },
  { label: "Contact", to: "/contact" },
];

const socials = [
  { Icon: Facebook, label: "Facebook", href: "#" },
  { Icon: Twitter, label: "Twitter", href: "#" },
  { Icon: Linkedin, label: "LinkedIn", href: "#" },
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: Youtube, label: "YouTube", href: "#" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background text-sm font-body">
      <div className="editorial-container pt-10 pb-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr_1fr_1fr] items-start">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img
                src={logoHeader}
                alt="LibraryOne"
                className="h-20 md:h-24 lg:h-28 w-auto block brightness-0 invert"
              />
            </Link>
            <p className="text-background/70 leading-relaxed max-w-sm">
              Empowering libraries with innovative digital solutions that keep
              patrons connected to content anywhere.
            </p>
            <div className="flex gap-4 pt-2">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-background/60 transition-all duration-300 ease-out hover:text-background hover:-translate-y-1 hover:drop-shadow-[0_0_6px_rgba(76,201,192,0.6)]"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Products & Services */}
          <div className="space-y-4">
            <p className="uppercase text-xs tracking-[0.25em] text-background/60">
              Products & Services
            </p>
            <div className="grid gap-2 text-base">
              {products.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="space-y-4">
            <p className="uppercase text-xs tracking-[0.25em] text-background/60">
              Explore
            </p>
            <div className="grid gap-2 text-base">
              {explore.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <p className="uppercase text-xs tracking-[0.25em] text-background/60">
              Contact
            </p>
            <div className="space-y-3 text-base text-background/80">
              <Link
                to="/contact"
                className="inline-flex items-start gap-3 hover:text-background transition-colors"
              >
                <Mail className="w-4 h-4 mt-0.5" />
                <span>info@libraryone.com</span>
              </Link>
              <a
                href="tel:18007753700"
                className="inline-flex items-start gap-3 hover:text-background transition-colors"
              >
                <Phone className="w-4 h-4 mt-0.5" />
                <span>1-800-775-3700</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5" />
                <p className="leading-snug">
                  3540 Toringdon Way, Suite 200
                  <br />
                  #391 Charlotte, NC 28277
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-3 text-background/60">
          <p>© {currentYear} LibraryOne. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/contact" className="hover:text-background">
              Contact
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-background">
              Terms and Conditions
            </Link>
            <Link to="/privacy-policy" className="hover:text-background">
              Privacy Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
