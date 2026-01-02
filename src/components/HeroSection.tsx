import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-library.jpg";

const HeroSection = () => {
  return (
    <section className="relative flex items-center py-14 md:py-16 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-background" />

      <div className="editorial-container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          
          {/* ================= CONTENT ================= */}
          <div className="space-y-6 animate-slide-up">
            <div className="space-y-4">
              <h1 className="editorial-headline text-balance">
                Digital products and services that help libraries serve their
                communities
                <span className="block font-serif italic bg-gradient-to-r from-[#0b5fa5] via-[#2aa6a6] to-[#4cc9c0] bg-clip-text text-transparent">
                  —everywhere
                </span>
              </h1>

              <p className="editorial-body max-w-lg">
                LibraryOne is the independent home of Boundless and a growing
                portfolio of digital platforms designed to expand access,
                strengthen engagement, and support libraries in fulfilling their
                role as essential community institutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/solutions">
                <Button variant="hero" size="lg">
                  Explore Our Products
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>

              <Link to="/contact">
                <Button variant="hero-outline" size="lg">
                  Talk to Us
                </Button>
              </Link>
            </div>
          </div>

          {/* ================= IMAGE ================= */}
          <div
            className="relative animate-fade-in"
            style={{ animationDelay: "0.25s" }}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Digital library platform with floating books and modern devices"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative glow */}
            <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-gradient-to-r from-[#0b5fa5]/10 via-[#2aa6a6]/10 to-[#4cc9c0]/10 rounded-full blur-3xl" />
            <div className="absolute -top-6 -right-6 w-36 h-36 bg-gradient-to-r from-[#0b5fa5]/5 via-[#2aa6a6]/5 to-[#4cc9c0]/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
