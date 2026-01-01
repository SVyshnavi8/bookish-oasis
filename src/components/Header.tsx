import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoHeader from "@/assets/logoheader.png";

/* ---------- Solutions Dropdown Links ---------- */
const solutionLinks = [
  { name: "Boundless", path: "/boundless" },
  { name: "TS360", path: "/ts360" },
  { name: "ePopUp", path: "/epopup" },
  { name: "Content Café", path: "/content-cafe" },
  { name: "Bibliostat Collect & Connect", path: "/bibliostat" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="editorial-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logoHeader}
              alt="LibraryOne"
              className="h-20 md:h-24 w-auto"
            />
          </Link>

          {/* ================= Desktop Navigation ================= */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              to="/"
              className={`text-sm font-medium ${
                isActive("/")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </Link>

            {/* Products & Services (Clickable + Dropdown) */}
            <div className="relative group">
              <Link
                to="/solutions"
                className={`inline-flex items-center gap-1 text-sm font-medium ${
                  isActive("/solutions")
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Products and Services
                <ChevronDown className="w-4 h-4 mt-0.5" />
              </Link>

              {/* Dropdown */}
              <div className="absolute left-0 top-full mt-3 w-64 rounded-xl bg-background border border-border/50 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {solutionLinks.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:bg-secondary/40 hover:text-foreground"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className={`text-sm font-medium ${
                isActive("/about")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={`text-sm font-medium ${
                isActive("/contact")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* ================= Desktop CTA ================= */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link to="/demo">
              <Button variant="default" size="sm">
                Request Demo
              </Button>
            </Link>
          </div>

          {/* ================= Mobile Menu Button ================= */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* ================= Mobile Menu ================= */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-muted-foreground"
              >
                Home
              </Link>

              {/* Mobile Products & Services */}
              <div className="flex flex-col gap-2">
                <Link
                  to="/solutions"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-foreground"
                >
                  Products and Services
                </Link>

                <div className="pl-4 flex flex-col gap-2">
                  {solutionLinks.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-sm text-muted-foreground"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-muted-foreground"
              >
                About
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-muted-foreground"
              >
                Contact
              </Link>

              <div className="flex flex-col gap-3 pt-4 border-t border-border/50">
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Sign In
                  </Button>
                </Link>
                <Link to="/demo" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="default" className="w-full">
                    Request Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
