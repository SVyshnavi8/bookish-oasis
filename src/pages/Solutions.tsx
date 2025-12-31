import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, BookOpen, Headphones, Globe } from "lucide-react";
import libraryInterior from "@/assets/library-interior.jpg";
import readingRoom from "@/assets/reading-room.jpg";
import digitalReading from "@/assets/digital-reading.jpg";

const Solutions = () => {
  const solutions = [
    {
      icon: BookOpen,
      title: "TS360",
      description: "Comprehensive collection management and analytics platform for modern libraries. Gain insights into patron behavior, optimize acquisitions, and maximize your collection's impact.",
      link: "/ts360",
    },
    {
      icon: Sparkles,
      title: "Boundless",
      description: "Unlimited access to a curated selection of popular ebooks and audiobooks. Give your patrons the freedom to read without waitlists or holds.",
      link: "/boundless",
    },
    {
      icon: Headphones,
      title: "Content Cafe",
      description: "Rich metadata and content discovery tools to help patrons find their next favorite read. Beautiful book details, reviews, and recommendations.",
      link: "/content-cafe",
    },
    {
      icon: Globe,
      title: "PressReader",
      description: "Access to thousands of newspapers and magazines from around the world. Keep your community connected to global news and perspectives.",
      link: "/pressreader",
    },
  ];

  return (
    <MainLayout>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="editorial-container">
          <div className="max-w-3xl">
            <h1 className="editorial-headline mb-6">
              Solutions Built for
              <span className="block font-serif italic text-primary">Modern Libraries</span>
            </h1>
            <p className="editorial-body">
              From collection management to patron engagement, our suite of solutions 
              helps libraries thrive in the digital age. Each product is designed to 
              integrate seamlessly with your existing systems.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="pb-20">
        <div className="editorial-container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {solutions.map((solution) => (
              <Link
                key={solution.title}
                to={solution.link}
                className="group p-8 md:p-10 rounded-2xl bg-secondary/30 hover:bg-secondary/50 transition-colors duration-300"
              >
                <solution.icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-2xl md:text-3xl font-serif font-medium mb-4">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {solution.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="editorial-section bg-secondary/20">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <h2 className="editorial-subheadline">Seamless Integration</h2>
              <p className="editorial-body">
                Our solutions work together and integrate with your existing ILS. 
                Whether you're using SirsiDynix, Innovative, or any other system, 
                LibraryOne connects seamlessly to enhance your digital offerings.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  MARC record integration
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Single sign-on authentication
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Real-time usage analytics
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Automated collection development
                </li>
              </ul>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={libraryInterior}
                alt="Modern library interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="editorial-section">
        <div className="editorial-container text-center">
          <h2 className="editorial-subheadline mb-6">Ready to Get Started?</h2>
          <p className="editorial-body max-w-2xl mx-auto mb-8">
            Schedule a personalized demo to see how LibraryOne can transform 
            your library's digital presence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/demo">
              <Button variant="hero" size="lg">
                Schedule Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="hero-outline" size="lg">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Solutions;
