import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Users, BookOpen, Globe } from "lucide-react";
import libraryInterior from "@/assets/library-interior.jpg";
import readingRoom from "@/assets/reading-room.jpg";

const Libraries = () => {
  const benefits = [
    {
      icon: Users,
      title: "Expand Your Reach",
      description: "Connect with patrons wherever they are. Our mobile-first platform ensures your library is always accessible.",
    },
    {
      icon: BookOpen,
      title: "Curated Collections",
      description: "Access millions of titles from leading publishers. Build collections that reflect your community's interests.",
    },
    {
      icon: Building2,
      title: "Cost Effective",
      description: "Flexible pricing models that scale with your needs. Only pay for what your patrons use.",
    },
    {
      icon: Globe,
      title: "Global Content",
      description: "Newspapers, magazines, and books from around the world. Support diverse communities with multilingual content.",
    },
  ];

  return (
    <MainLayout>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <h1 className="editorial-headline">
                Empowering Libraries
                <span className="block font-serif italic bg-gradient-to-r from-[#0b5fa5] via-[#2aa6a6] to-[#4cc9c0] bg-clip-text text-transparent">Worldwide</span>
              </h1>
              <p className="editorial-body">
                From small community libraries to major academic institutions, 
                we partner with libraries of all sizes to deliver exceptional 
                digital experiences to their patrons.
              </p>
              <Link to="/demo">
                <Button variant="hero" size="lg">
                  Partner With Us
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={libraryInterior}
                alt="Modern library with patrons"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="editorial-section bg-secondary/20">
        <div className="editorial-container">
          <div className="text-center mb-16">
            <h2 className="editorial-subheadline mb-4">Why Libraries Choose Us</h2>
            <p className="editorial-body max-w-2xl mx-auto">
              Join thousands of libraries that trust LibraryOne to power their 
              digital services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#0b5fa5]/10 via-[#2aa6a6]/10 to-[#4cc9c0]/10 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-[#2aa6a6]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-medium mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="editorial-section">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={readingRoom}
                alt="Cozy reading environment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <blockquote className="text-2xl md:text-3xl font-serif leading-relaxed">
                "LibraryOne has transformed how our patrons engage with digital content. 
                The seamless experience keeps them coming back."
              </blockquote>
              <div>
                <p className="font-medium">Sarah Mitchell</p>
                <p className="text-muted-foreground">Director, Metropolitan Public Library</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="editorial-section bg-foreground text-background">
        <div className="editorial-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-serif font-semibold mb-2">25K+</p>
              <p className="text-background/60">Library Partners</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-serif font-semibold mb-2">150+</p>
              <p className="text-background/60">Countries</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-serif font-semibold mb-2">50M+</p>
              <p className="text-background/60">Active Readers</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-serif font-semibold mb-2">2M+</p>
              <p className="text-background/60">Titles</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="editorial-section">
        <div className="editorial-container text-center">
          <h2 className="editorial-subheadline mb-6">Join Our Library Network</h2>
          <p className="editorial-body max-w-2xl mx-auto mb-8">
            Whether you serve a small town or a major city, we have solutions 
            that fit your needs and budget.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/demo">
              <Button variant="hero" size="lg">
                Request Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button variant="hero-outline" size="lg">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Libraries;
