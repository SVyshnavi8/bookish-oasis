import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Video, BookOpen, TrendingUp } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      icon: FileText,
      title: "Case Studies",
      description: "See how libraries around the world are using LibraryOne to transform their digital services.",
      link: "/case-studies",
      count: "24 Studies",
    },
    {
      icon: Video,
      title: "Webinars",
      description: "Join our educational sessions on library technology, best practices, and industry trends.",
      link: "/webinar",
      count: "Monthly",
    },
    {
      icon: BookOpen,
      title: "Press Releases",
      description: "Stay up to date with our latest announcements, partnerships, and product launches.",
      link: "/press-releases",
      count: "Latest News",
    },
    {
      icon: TrendingUp,
      title: "BiblioStat",
      description: "Access library usage statistics and industry benchmarks to inform your decisions.",
      link: "/bibliostat",
      count: "Analytics",
    },
  ];

  return (
    <MainLayout>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="editorial-container">
          <div className="max-w-3xl">
            <h1 className="editorial-headline mb-6">
              Resources for
              <span className="block font-serif italic text-primary">Library Success</span>
            </h1>
            <p className="editorial-body">
              Explore our library of case studies, webinars, and research to help 
              you get the most out of your digital services.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="pb-20">
        <div className="editorial-container">
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource) => (
              <Link
                key={resource.title}
                to={resource.link}
                className="group p-8 md:p-10 rounded-2xl bg-secondary/30 hover:bg-secondary/50 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <resource.icon className="w-10 h-10 text-primary" />
                  <span className="text-sm text-muted-foreground">{resource.count}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-medium mb-4">
                  {resource.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {resource.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:gap-3 transition-all">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="editorial-section bg-secondary/20">
        <div className="editorial-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="editorial-subheadline mb-4">Stay Informed</h2>
            <p className="editorial-body mb-8">
              Subscribe to our newsletter for the latest updates, industry insights, 
              and exclusive content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 px-4 bg-background border-0 rounded-full text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Button variant="hero">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="editorial-section">
        <div className="editorial-container text-center">
          <h2 className="editorial-subheadline mb-6">Need More Information?</h2>
          <p className="editorial-body max-w-2xl mx-auto mb-8">
            Our team is here to help. Contact us for personalized guidance on 
            implementing LibraryOne at your institution.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default Resources;
