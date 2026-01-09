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
  { name: "Bibliostat CollectConnect", path: "/bibliostat" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 overflow-x-clip ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-[0_6px_30px_-18px_rgba(0,0,0,0.4)]"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <nav className="editorial-container">
        {/* REDUCED HEADER HEIGHT */}
        <div className="flex items-center justify-between h-[60px] sm:h-[64px] md:h-[80px]">

          {/* Logo */}
          <Link to="/" className="flex items-center" aria-label="LibraryOne home">
            <img
              src={logoHeader}
              alt="LibraryOne"
              className="h-14 sm:h-16 md:h-18 lg:h-20 w-auto"
            />
          </Link>

          {/* ================= Desktop Navigation ================= */}
          <div className="hidden md:flex items-center h-full gap-6 lg:gap-8">

            <Link
              to="/"
              className={`text-base lg:text-lg font-medium tracking-wide flex items-center h-full whitespace-nowrap ${
                isActive("/")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`text-base lg:text-lg font-medium tracking-wide flex items-center h-full whitespace-nowrap ${
                isActive("/about")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              About Us
            </Link>

            {/* Products and Services */}
            <div className="relative group flex items-center h-full" role="presentation">
              <Link
                to="/solutions"
                className={`inline-flex items-center gap-1 text-base lg:text-lg font-medium tracking-wide h-full whitespace-nowrap ${
                  isActive("/solutions")
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Products and Services
                <ChevronDown className="w-4 h-4 mt-0.5" />
              </Link>

              {/* Dropdown */}
              <div
                className="absolute left-0 top-full mt-2 w-72 rounded-xl bg-background border border-border/50 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                role="menu"
                aria-label="Products and services"
              >
                <div className="py-2">
                  {solutionLinks.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-5 py-2 text-base tracking-wide text-muted-foreground hover:bg-secondary/40 hover:text-foreground"
                      role="menuitem"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* <Link
              to="/libraries"
              className={`text-base lg:text-lg font-medium tracking-wide flex items-center h-full whitespace-nowrap ${
                isActive("/libraries")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Libraries
            </Link>

            <Link
              to="/resources"
              className={`text-base lg:text-lg font-medium tracking-wide flex items-center h-full whitespace-nowrap ${
                isActive("/resources")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Resources
            </Link> */}

            <Link
              to="/contact"
              className={`text-base lg:text-lg font-medium tracking-wide flex items-center h-full whitespace-nowrap ${
                isActive("/contact")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Contact
            </Link>

            <Link to="/request-demo">
              <Button
                variant="hero"
                size="sm"
                className="shadow-sm hover:shadow-md transition-all whitespace-nowrap"
              >
                Request Demo
              </Button>
            </Link>
          </div>

          {/* ================= Mobile Menu Button ================= */}
          <button
            className="md:hidden p-2 rounded-lg border border-border/60 bg-background/80 backdrop-blur"
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
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md shadow-inner">
            <div className="flex flex-col gap-6 px-6 py-6">

              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-medium"
              >
                Home
              </Link>

              <div className="flex flex-col gap-4">
                <Link
                  to="/solutions"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-medium"
                >
                  Products and Services
                </Link>

                <div className="pl-4 flex flex-col gap-3">
                  {solutionLinks.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg text-muted-foreground"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-medium"
              >
                About
              </Link>

              <Link
                to="/libraries"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-medium"
              >
                Libraries
              </Link>

              <Link
                to="/resources"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-medium"
              >
                Resources
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-medium"
              >
                Contact
              </Link>

              <Link
                to="/request-demo"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-semibold text-[#0b5fa5]"
              >
                Request Demo
              </Link>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
