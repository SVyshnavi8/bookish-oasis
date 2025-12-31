import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Infinity, Clock, Sparkles, Smartphone } from "lucide-react";
import boundlessVisual from "@/assets/boundless-visual.jpg";
import digitalReading from "@/assets/digital-reading.jpg";

const Boundless = () => {
  const features = [
    {
      icon: Infinity,
      title: "Unlimited Access",
      description: "No holds, no waitlists. Patrons can access titles instantly, 24/7.",
    },
    {
      icon: Clock,
      title: "Always Available",
      description: "Popular titles are always ready to read. No more disappointing patrons.",
    },
    {
      icon: Sparkles,
      title: "Curated Selection",
      description: "Hand-picked titles from bestselling authors and emerging voices.",
    },
    {
      icon: Smartphone,
      title: "Read Anywhere",
      description: "Beautiful reading experience on any device, online or offline.",
    },
  ];

  return (
    <MainLayout>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <span className="text-primary font-medium">Unlimited Reading</span>
              <h1 className="editorial-headline">
                Boundless
              </h1>
              <p className="editorial-body">
                Give your patrons unlimited access to a curated collection of 
                popular ebooks and audiobooks. No holds, no waitlists — just 
                pure reading pleasure.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/demo">
                  <Button variant="hero" size="lg">
                    Get Started(Schedule Demo)
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="hero-outline" size="lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <img
                src={boundlessVisual}
                alt="Boundless unlimited reading"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="editorial-section bg-secondary/20">
        <div className="editorial-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-serif font-medium mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reading Experience */}
      <section className="editorial-section">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={digitalReading}
                alt="Person reading with Boundless"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="editorial-subheadline">A Premium Reading Experience</h2>
              <p className="editorial-body">
                Boundless isn't just about access — it's about creating the best 
                possible reading experience. Our app features beautiful typography, 
                customizable themes, and seamless syncing across all your devices.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Adjustable fonts and themes
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Offline reading support
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Audiobook narration with adjustable speed
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Bookmarks and highlights sync
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="editorial-section bg-foreground text-background">
        <div className="editorial-container text-center">
          <h2 className="editorial-headline text-background mb-6">
            Ready for Boundless Reading?
          </h2>
          <p className="text-xl text-background/70 max-w-2xl mx-auto mb-8">
            Join libraries worldwide in providing patrons with unlimited access 
            to great content.
          </p>
          <Link to="/demo">
            <Button
              variant="default"
              size="lg"
              className="bg-background text-foreground hover:bg-background/90"
            >
              Schedule Demo
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default Boundless;
