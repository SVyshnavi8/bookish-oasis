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

const Footer = () => {
  return (
    <footer className="bg-foreground text-background text-sm font-body">
      <div className="editorial-container pt-6 pb-8">

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-start">

          {/* Left: Brand & Tagline */}
          <div className="space-y-2">
            <Link to="/" className="inline-block">
              <img
                src={logoHeader}
                alt="LibraryOne"
                className="h-28 md:h-32 lg:h-36 w-auto block"
              />
            </Link>

            <p className="text-background/70 leading-relaxed max-w-xs">
              Empowering libraries with innovative digital solutions
            </p>
          </div>

          {/* Right: Contact + Social */}
          <div className="lg:pl-6 lg:ml-auto flex flex-col gap-4 max-w-sm mt-8">

            {/* Contact Info */}
            <Link
              to="/contact"
              className="block space-y-2 group cursor-pointer"
            >
              <p className="font-medium group-hover:text-background/90 transition-colors">
                LibraryOne Digital Inc
              </p>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-background/60 mt-0.5" />
                <span className="text-background/60 group-hover:text-background/90">
                  1-800-775-1800
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-background/60 mt-0.5" />
                <span className="text-background/60 group-hover:text-background/90">
                  info@libraryone.com
                </span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-background/60 mt-0.5" />
                <p className="text-background/60 group-hover:text-background/90 leading-snug">
                  3540 Toringdon Way, Suite 200<br />
                  #391 Charlotte, NC 28277
                </p>
              </div>
            </Link>

            {/* Social Icons with Animation */}
            <div className="flex gap-4 pt-2">
              {[Facebook, Twitter, Linkedin, Instagram, Youtube].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="
                      cursor-pointer
                      text-background/60
                      transition-all duration-300 ease-out
                      hover:text-background
                      hover:-translate-y-1
                      hover:scale-110
                      hover:drop-shadow-[0_0_6px_rgba(76,201,192,0.6)]
                    "
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              )}
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-4 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-3 text-background/50">
          <p>© 2025 LibraryOne. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-background">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-background">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
