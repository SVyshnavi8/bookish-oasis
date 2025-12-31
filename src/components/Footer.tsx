import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logoHeader from "@/assets/logoheader.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="editorial-container py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left: Brand & Tagline */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src={logoHeader} 
                alt="LibraryOne" 
                className="h-24 md:h-28 w-auto"
              />
            </Link>
            <p className="text-sm text-background/60 leading-relaxed max-w-xs">
              Empowering libraries to connect communities with the world of knowledge.
            </p>
          </div>

          {/* Center: Empty for balance */}
          <div className="hidden lg:block" />

          {/* Right: Contact Info + Social */}
          <div className="lg:pl-20 flex flex-col justify-between min-h-[180px]">
            
            {/* Contact Info - Clickable wrapper */}
            <Link to="/contact" className="block space-y-3 text-sm group cursor-pointer">
              <p className="font-medium group-hover:text-background/90 transition-colors">
                LibraryOne Digital Inc
              </p>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-background/60 mt-0.5 flex-shrink-0" />
                <span className="text-background/60 group-hover:text-background/90 transition-colors">
                  1-800-775-1800
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-background/60 mt-0.5 flex-shrink-0" />
                <span className="text-background/60 group-hover:text-background/90 transition-colors">
                  info@libraryone.com
                </span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-background/60 mt-0.5 flex-shrink-0" />
                <p className="text-background/60 group-hover:text-background/90 transition-colors">
                  3540 Toringdon Way, Suite 200<br />
                  #391 Charlotte, NC 28277
                </p>
              </div>
            </Link>

            {/* Social Icons - Closer to bottom bar */}
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-background/60 hover:text-background transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-background/60 hover:text-background transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-background/60 hover:text-background transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
          <p>© 2025 LibraryOne. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-background transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;