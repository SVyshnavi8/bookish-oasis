import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
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
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <nav className="editorial-container">
        {/* REDUCED HEADER HEIGHT */}
        <div className="flex items-center justify-between h-[60px] sm:h-[64px] md:h-[80px]">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logoHeader}
              alt="LibraryOne"
              className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto"
            />
          </Link>

          {/* ================= Desktop Navigation ================= */}
          <div className="hidden md:flex items-center h-full gap-10">

            <Link
              to="/"
              className={`text-lg font-medium tracking-wide flex items-center h-full ${
                isActive("/")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </Link>

            {/* Products and Services */}
            <div className="relative group flex items-center h-full">
              <Link
                to="/solutions"
                className={`inline-flex items-center gap-1 text-lg font-medium tracking-wide h-full ${
                  isActive("/solutions")
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Products and Services
                <ChevronDown className="w-4 h-4 mt-0.5" />
              </Link>

              {/* Dropdown */}
              <div className="absolute left-0 top-full mt-2 w-72 rounded-xl bg-background border border-border/50 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {solutionLinks.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-5 py-2 text-base tracking-wide text-muted-foreground hover:bg-secondary/40 hover:text-foreground"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className={`text-lg font-medium tracking-wide flex items-center h-full ${
                isActive("/about")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              About LibraryOne
            </Link>

            <Link
              to="/contact"
              className={`text-lg font-medium tracking-wide flex items-center h-full ${
                isActive("/contact")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Contact
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
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
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
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-medium"
              >
                Contact
              </Link>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
