import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logoHeader from "@/assets/logoheader.png";

/* ---------- Products & Services Dropdown Links ---------- */
const solutionLinks = [
  { name: "Boundless", path: "/products/boundless" },
  { name: "TS360", path: "/ts360" },
  { name: "ePopUp", path: "/products/epopup" },
  { name: "Content Café", path: "/products/content-cafe" },
  { name: "Bibliostat CollectConnect", path: "/products/bibliostat" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSolutionsOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-[0_6px_30px_-18px_rgba(0,0,0,0.4)]"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <nav className="editorial-container">
        <div className="flex items-center justify-between h-[60px] sm:h-[64px] md:h-[80px]">

          {/* Logo */}
          <Link to="/" aria-label="LibraryOne home">
            <img
              src={logoHeader}
              alt="LibraryOne"
              className="h-14 sm:h-16 md:h-18 lg:h-20 w-auto"
            />
          </Link>

          {/* ================= Desktop Navigation ================= */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">

            <Link
              to="/"
              className={`text-base lg:text-lg font-medium ${
                isActive("/") ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </Link>

            {/* Products & Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <button
                type="button"
                className="inline-flex items-center gap-1 text-base lg:text-lg font-medium text-muted-foreground hover:text-foreground cursor-pointer"
                aria-haspopup="menu"
                aria-expanded={isSolutionsOpen}
              >
                Products & Services
                <ChevronDown className="w-4 h-4" />
              </button>

              <div
                className={`absolute left-0 mt-2 w-72 rounded-xl bg-background border shadow-xl transition-all ${
                  isSolutionsOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <div className="py-2">
                  {solutionLinks.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-5 py-2 text-muted-foreground hover:bg-secondary/40 hover:text-foreground"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className={`text-base lg:text-lg font-medium ${
                isActive("/about") ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              About Us
            </Link>

            <Link
              to="/publishers"
              className={`text-base lg:text-lg font-medium ${
                isActive("/publishers")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Publisher Partnerships
            </Link>

            <Link
              to="/contact"
              className={`text-base lg:text-lg font-medium ${
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
            className="md:hidden p-2 rounded-lg border bg-background"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* ================= Mobile Menu ================= */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="flex flex-col gap-6 px-6 py-6">

              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>

              <div>
                <button
                  type="button"
                  className="text-left"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Products & Services
                </button>

                <div className="pl-4 mt-3 flex flex-col gap-2">
                  {solutionLinks.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-muted-foreground"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
                About Us
              </Link>

              <Link to="/publishers" onClick={() => setIsMobileMenuOpen(false)}>
                Publisher Partnerships
              </Link>

              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
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
