import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    solutions: [
      { name: "TS360", path: "/ts360" },
      { name: "Boundless", path: "/boundless" },
      { name: "Content Cafe", path: "/content-cafe" },
      { name: "PressReader", path: "/pressreader" },
    ],
    resources: [
      { name: "Case Studies", path: "/case-studies" },
      { name: "Webinars", path: "/webinar" },
      { name: "Press Releases", path: "/press-releases" },
      { name: "BiblioStat", path: "/bibliostat" },
    ],
    company: [
      { name: "About Us", path: "/about" },
      { name: "Careers", path: "/careers" },
      { name: "Contact", path: "/contact" },
      { name: "Founding Principles", path: "/founding-principles" },
    ],
    legal: [
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms & Conditions", path: "/terms-and-conditions" },
    ],
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="editorial-container py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl font-semibold">
                LibraryOne
              </span>
            </Link>
            <p className="mt-4 text-sm text-background/60 leading-relaxed max-w-xs">
              Empowering libraries to connect communities with the world of knowledge.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-medium text-sm mb-4 text-background/80">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-medium text-sm mb-4 text-background/80">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium text-sm mb-4 text-background/80">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-medium text-sm mb-4 text-background/80">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-background/10">
          <p className="text-sm text-background/50">
            © {currentYear} LibraryOne. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
