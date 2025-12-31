import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, TrendingUp, PieChart, Database } from "lucide-react";
import libraryInterior from "@/assets/library-interior.jpg";

const TS360 = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Collection Analytics",
      description: "Understand which titles are performing and which need attention. Make data-driven acquisition decisions.",
    },
    {
      icon: TrendingUp,
      title: "Usage Trends",
      description: "Track patron behavior over time. Identify emerging interests and adapt your collection accordingly.",
    },
    {
      icon: PieChart,
      title: "Budget Optimization",
      description: "Maximize your collection budget with insights into cost-per-use and circulation patterns.",
    },
    {
      icon: Database,
      title: "Integrated Data",
      description: "Connect data from multiple sources for a complete picture of your library's digital ecosystem.",
    },
  ];

  return (
    <MainLayout>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <span className="text-primary font-medium">Collection Management</span>
              <h1 className="editorial-headline">
                TS360
              </h1>
              <p className="editorial-body">
                The comprehensive analytics and collection management platform that 
                gives you complete visibility into your digital library's performance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/demo">
                  <Button variant="hero" size="lg">
                    Request Demo
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
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={libraryInterior}
                alt="TS360 analytics dashboard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="editorial-section bg-secondary/20">
        <div className="editorial-container">
          <div className="text-center mb-16">
            <h2 className="editorial-subheadline mb-4">Powerful Analytics</h2>
            <p className="editorial-body max-w-2xl mx-auto">
              Make informed decisions with comprehensive data about your collection.
            </p>
          </div>

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
          <h2 className="editorial-subheadline mb-6">Ready to Transform Your Data?</h2>
          <p className="editorial-body max-w-2xl mx-auto mb-8">
            See how TS360 can help you make smarter decisions about your collection.
          </p>
          <Link to="/demo">
            <Button variant="hero" size="lg">
              Schedule Demo
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default TS360;
