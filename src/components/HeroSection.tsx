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
                Your Gateway to
                <span className="block font-serif italic text-primary">
                  Boundless Reading
                </span>
              </h1>
              <p className="editorial-body max-w-lg">
                Discover thousands of ebooks, audiobooks, and digital resources 
                through your library. A premium reading experience designed for 
                modern readers.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/browse">
                <Button variant="hero" size="lg">
                  Explore Collection
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="hero-outline" size="lg">
                  Request Demo
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-12 pt-8">
              <div>
                <p className="text-3xl md:text-4xl font-serif font-semibold">25K+</p>
                <p className="text-sm text-muted-foreground mt-1">Libraries Served</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-serif font-semibold">2M+</p>
                <p className="text-sm text-muted-foreground mt-1">Titles Available</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-serif font-semibold">50M+</p>
                <p className="text-sm text-muted-foreground mt-1">Active Readers</p>
              </div>
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
