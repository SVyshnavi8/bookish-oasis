import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Newspaper, Languages, Clock } from "lucide-react";
import libraryInterior from "@/assets/library-interior.jpg";

const PressReader = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Access newspapers and magazines from over 100 countries in 60+ languages.",
    },
    {
      icon: Newspaper,
      title: "7,000+ Publications",
      description: "From local newspapers to international magazines, we have it all.",
    },
    {
      icon: Languages,
      title: "Multilingual",
      description: "Support diverse communities with content in their native languages.",
    },
    {
      icon: Clock,
      title: "Same-Day Delivery",
      description: "Publications available as soon as they're released, often before print.",
    },
  ];

  return (
    <MainLayout>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="editorial-container">
          <div className="max-w-3xl">
            <span className="text-primary font-medium">News & Magazines</span>
            <h1 className="editorial-headline mt-4 mb-6">
              PressReader
            </h1>
            <p className="editorial-body mb-8">
              Give your patrons access to thousands of newspapers and magazines 
              from around the world. Keep your community connected to global news 
              and perspectives.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/demo">
                <Button variant="hero" size="lg">
                  Request Demo
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-20">
        <div className="editorial-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-serif font-semibold text-primary mb-2">7,000+</p>
              <p className="text-muted-foreground">Publications</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-semibold text-primary mb-2">100+</p>
              <p className="text-muted-foreground">Countries</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-semibold text-primary mb-2">60+</p>
              <p className="text-muted-foreground">Languages</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-semibold text-primary mb-2">24/7</p>
              <p className="text-muted-foreground">Access</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="editorial-section bg-secondary/20">
        <div className="editorial-container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-medium mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="editorial-section">
        <div className="editorial-container text-center">
          <h2 className="editorial-subheadline mb-6">Expand Your Periodical Collection</h2>
          <p className="editorial-body max-w-2xl mx-auto mb-8">
            Add world-class news and magazine content to your library.
          </p>
          <Link to="/demo">
            <Button variant="hero" size="lg">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default PressReader;
