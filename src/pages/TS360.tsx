import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, TrendingUp, PieChart, Database, AlertCircle, BookOpen, Laptop, Target, Users, DollarSign, Layers } from "lucide-react";

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
      <section className="pt-32 pb-20 md:pt-40 md:pb-28" data-aos="fade-up">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <span className="text-primary font-medium">TS360</span>
              <h3 className="editorial-headline">
                A trusted collection development platform—supporting both digital and print strategies
              </h3>
              <p className="editorial-body">
                Long relied upon by librarians as a trusted tool for collection development, TS360 continues to support thoughtful planning and evaluation across formats. Going forward, TS360 will support digital ordering workflows, while remaining fully available as a collection development resource for print collections.
              </p>
              <p>
                This approach allows libraries to maintain continuity in their collection strategy while aligning transactional workflows with today’s digital priorities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/demo">
                  <Button variant="hero" size="lg">
                    Request Demo (Talk to our team)
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="hero-outline" size="lg">
                    Learn More (Contact Us)
                  </Button>
                </Link>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg" data-aos="fade-left" data-aos-delay="300">
              <img
                src="https://research.com/uploads/OCLC_Worldshare_Management_System_dashboard_1024x626_cf56c40257.png"
                alt="Library collection analytics dashboard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Important Update Callout Box */}
      <section className="py-12 bg-amber-50/70 border-y border-amber-200" data-aos="fade-up">
        <div className="editorial-container">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-5 items-start p-8 bg-amber-100/50 rounded-2xl border border-amber-300 shadow-sm">
              <div className="flex-shrink-0 mt-1">
                <AlertCircle className="w-10 h-10 text-amber-700" />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-serif font-semibold text-amber-900">
                  Important Update
                </h2>
                <div className="space-y-3 text-amber-800 leading-relaxed">
                  <p>
                    <strong>Digital ordering functionality will resume soon on TS360.</strong> We will provide clear communication and guidance as digital ordering functionality becomes available.
                  </p>
                  <p>
                    <strong>Print ordering is no longer going to be supported on TS360.</strong> However, TS360 is available as a subscription product for print and digital collection development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Clear Focus Section */}
      <section className="editorial-section bg-secondary/10" data-aos="fade-up">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <h2 className="editorial-subheadline">A Clear Focus: Digital Ordering, Broad Collection Development</h2>
              <p className="editorial-body">
                TS360 serves libraries in two important ways:
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <Laptop className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block mb-1">Digital collections:</strong>
                    TS360 will support digital ordering workflows, enabling libraries to plan and execute digital acquisitions within the platform.
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <BookOpen className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block mb-1">Print collections:</strong>
                    TS360 remains available as a subscription tool for print collection development, supporting evaluation, planning, and selection—without print ordering transactions.
                  </div>
                </li>
              </ul>
              <p className="editorial-body">
                This structure preserves TS360’s value for librarians managing both print and digital collections.
              </p>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg order-1 lg:order-2" data-aos="fade-right" data-aos-delay="300">
              <img
                src="https://www.lrs.org/wp-content/uploads/2022/08/Screenshot-27.png"
                alt="Mixed print and digital library collection formats"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Collection Development Section */}
      <section className="editorial-section bg-secondary/20" data-aos="fade-up">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg" data-aos="fade-left" data-aos-delay="300">
              <img
                src="https://about.ebsco.com/sites/default/files/acquiadam-assets/cool-tools-for-collection-development-blog-image-780.jpg"
                alt="Librarian using collection development tools"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-8">
              <h2 className="editorial-subheadline">Collection Development for Digital and Print</h2>
              <p className="editorial-body">
                The collection development tool librarians trust—now delivered as a subscription service.
              </p>
              <p className="editorial-body">
                TS360 continues to support core collection development activities across formats, including:
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <Target className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <span>Evaluating collection gaps and strengths</span>
                </li>
                <li className="flex items-start gap-4">
                  <Layers className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <span>Supporting selection decisions for digital and print materials</span>
                </li>
                <li className="flex items-start gap-4">
                  <Users className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <span>Aligning acquisitions with community needs and budgets</span>
                </li>
                <li className="flex items-start gap-4">
                  <DollarSign className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <span>Maintaining consistency across subject areas and formats</span>
                </li>
              </ul>
              <p className="editorial-body">
                In addition to the TS360 platform, LibraryOne offers collection development services that support both digital and print strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features
      <section className="editorial-section bg-secondary/10" data-aos="fade-up">
        <div className="editorial-container">
          <div className="text-center mb-16">
            <h2 className="editorial-subheadline mb-4">Powerful Analytics</h2>
            <p className="editorial-body max-w-2xl mx-auto">
              Make informed decisions with comprehensive data about your collection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="flex gap-6"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
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
      </section> */}

      {/* CTA */}
      <section className="editorial-section" data-aos="fade-up">
        <div className="editorial-container text-center">
          <h2 className="editorial-subheadline mb-6">A familiar platform. Expanded flexibility. A digital-forward future</h2>
          <p className="editorial-body max-w-2xl mx-auto mb-8">
            LibraryOne is committed to transparency, stability, and long-term stewardship as TS360 evolves to meet modern collection needs
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