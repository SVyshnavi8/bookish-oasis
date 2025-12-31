import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Star, Bookmark, MessageSquare } from "lucide-react";
import readingRoom from "@/assets/reading-room.jpg";

const ContentCafe = () => {
  const features = [
    {
      icon: Search,
      title: "Rich Discovery",
      description: "Help patrons find their next favorite read with powerful search and browse tools.",
    },
    {
      icon: Star,
      title: "Reviews & Ratings",
      description: "Community reviews and professional ratings to guide reading decisions.",
    },
    {
      icon: Bookmark,
      title: "Reading Lists",
      description: "Curated lists and personalized recommendations based on reading history.",
    },
    {
      icon: MessageSquare,
      title: "Book Summaries",
      description: "Detailed synopses and author information for every title.",
    },
  ];

  return (
    <MainLayout>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <span className="text-primary font-medium">Content Discovery</span>
              <h1 className="editorial-headline">
                Content Cafe
              </h1>
              <p className="editorial-body">
                Rich metadata and discovery tools that help patrons find exactly 
                what they're looking for. Beautiful book details, reviews, and 
                personalized recommendations.
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
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={readingRoom}
                alt="Content discovery experience"
                className="w-full h-full object-cover"
              />
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
          <h2 className="editorial-subheadline mb-6">Enhance Your Catalog</h2>
          <p className="editorial-body max-w-2xl mx-auto mb-8">
            Add rich content and discovery features to your library catalog.
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

export default ContentCafe;
