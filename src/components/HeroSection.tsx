import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-library.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative pt-24 md:pt-32 pb-14 md:pb-16 lg:pb-24 overflow-hidden"
      data-aos="fade-up"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-background" />

      <div className="editorial-container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center pt-16 md:pt-0">

          {/* ================= CONTENT ================= */}
          <div
            className="space-y-8"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            {/* Headline */}
            <h1
              className="editorial-headline text-balance mb-0 leading-none"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Digital products and services that help libraries serve their
              communities —
              <span
                className="block font-serif italic leading-[1.2] pb-1 
                bg-gradient-to-r from-[#0b5fa5] via-[#2aa6a6] to-[#4cc9c0] 
                bg-clip-text text-transparent"
              >
                Everywhere
              </span>
            </h1>

            {/* Description */}
            <p
              className="editorial-body max-w-xl"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              LibraryOne is the independent home of Boundless and a growing
              portfolio of digital platforms designed to expand access,
              strengthen engagement, and support libraries in fulfilling their
              role as essential community institutions
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Link to="/solutions">
                <Button variant="hero" size="lg">
                  Explore Our Products
                  <ArrowRight className="w-5 h-5 ml-2" />
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
            className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <img
              src={heroImage}
              alt="Digital library platform with floating books and modern devices"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
