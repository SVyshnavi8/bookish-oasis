import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-library.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-background" />
      
      <div className="editorial-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <h1 className="editorial-headline text-balance">
                Digital products and services that help libraries serve their
                <span className="block font-serif italic text-primary">
                  communities—everywhere
                </span>
              </h1>
              <p className="editorial-body max-w-lg">
                LibraryOne is the independent home of Boundless and a growing portfolio of digital platforms designed to expand access, strengthen engagement, and support libraries in fulfilling their role as essential community institutions
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

          {/* Visual */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Digital library platform with floating books and modern devices"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
