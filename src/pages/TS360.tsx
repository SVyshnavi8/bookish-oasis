import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import libraryBg from "@/assets/ts360.png";
import { ArrowRight, BarChart3, TrendingUp, PieChart, Database, AlertCircle, BookOpen, Laptop, Target, Users, DollarSign, Layers, Info, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import Seo from "@/components/Seo";

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

  // Important updates for the auto-scrolling carousel
  const updates = [
    {
      icon: AlertCircle,
      title: "Print Ordering No Longer Supported",
      text: "Print ordering is no longer supported on TS360. TS360 remains available as a subscription product for print and digital collection development.",
    },
    {
      icon: Info,
      title: "Digital Ordering Transition",
      text: "Digital ordering functionality will resume on TS360. Systems are currently transitioning to LibraryOne’s infrastructure. Guidance will be shared as it becomes available.",
    },
    {
      icon: BookOpen,
      title: "Continued Collection Support",
      text: "TS360 supports thoughtful planning, evaluation, and selection across both digital and print formats.",
    },
  ];

  // Auto-scrolling carousel logic
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % updates.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [updates.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + updates.length) % updates.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % updates.length);
  };

  return (
    <MainLayout>
      <Seo
        title="TS360 collection analytics"
        description="TS360 by LibraryOne delivers collection analytics, budget insights, and integrated data to guide smarter acquisitions and patron-centric collections."
        path="/ts360"
      />
      {/* Hero */}
      {/* ================= TS360 HERO SECTION ================= */}
      <section
        className="relative flex items-center overflow-hidden pt-24 md:pt-32 pb-16"
        style={{
          backgroundImage: `url(${libraryBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        data-aos="fade"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/80 to-foreground/60" />

        {/* Decorative Accents */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-bright/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-foreground/30 to-transparent" />

        {/* Content */}
        <div className="relative z-10 editorial-container w-full">
          <div className="max-w-4xl space-y-5">

            {/* Product Badge */}
            <h2
              className="font-display font-medium tracking-tight
               text-4xl sm:text-5xl md:text-6xl lg:text-7xl
               text-[#2aa6a6] text-start mb-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              TS360
            </h2>

            {/* Headline */}
            <h1
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl
               font-medium leading-none tracking-tight
               text-primary-foreground mb-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              A trusted collection development platform—
              <span className="block mt-1 italic gradient-text">
                supporting both digital and print strategies
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-lg md:text-xl leading-relaxed
               text-primary-foreground/80 max-w-2xl"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Long relied upon by librarians as a trusted tool for collection
              development, TS360 continues to support thoughtful planning and
              evaluation across formats
            </p>

            {/* Extended Description */}
            <p
              className="text-lg md:text-xl leading-relaxed
               text-primary-foreground/75 max-w-2xl"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Going forward, TS360 will support{" "}
              <span className="font-semibold text-primary-foreground">
                digital ordering workflows
              </span>, while remaining available as a{" "}
              <span className="font-semibold text-primary-foreground">
                collection development resource for print collections
              </span>.{" "}
              This approach allows libraries to maintain continuity in their
              collection strategy while aligning transactional workflows with
              today’s digital priorities
            </p>

            {/* CTA */}
            <div data-aos="zoom-in" data-aos-delay="550">
              <Link to="/request-demo?product=ts360">
                <Button
                  size="lg"
                  variant="outline"
                  className="
              border-2 border-[#2aa6a6]
              text-[#2aa6a6]
              hover:bg-[#2aa6a6]
              hover:text-white
              focus-visible:ring-2
              focus-visible:ring-[#2aa6a6]
              transition-all
            "
                >
                  Request Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>


      {/* Important Updates – Automatic Carousel with Arrow Navigation */}
      <section
        className="py-6 bg-[#2aa6a6]/5"
        data-aos="fade-up"
      >
        <div className="editorial-container">
          <div className="max-w-4xl mx-auto">

            <div className="flex gap-5 items-start
                      border-l-4 border-[#2aa6a6]
                      pl-5">

              {/* Icon */}
              <div className="flex-shrink-0 mt-1">
                <AlertCircle className="w-7 h-7 text-[#2aa6a6]" />
              </div>

              {/* Content */}
              <div className="space-y-3">

                <h2
                  className="text-lg md:text-xl font-serif font-semibold
                       text-[#2aa6a6]"
                >
                  Important Update
                </h2>

                <div className="space-y-2 text-slate-700 leading-relaxed text-sm md:text-base">

                  <p>
                    <strong className="text-slate-900">
                      Print ordering is no longer supported on TS360.
                    </strong>{" "}
                    TS360 remains available as a subscription product for print and
                    digital collection development
                  </p>

                  <p>
                    <strong className="text-slate-900">
                      Digital ordering functionality will resume on TS360.
                    </strong>{" "}
                    Systems are currently transitioning to LibraryOne’s infrastructure.
                    Communication and guidance will be shared as functionality becomes
                    available
                  </p>

                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* A Clear Focus Section */}
      <section
        className="pt-10 pb-8 bg-secondary/10"
        data-aos="fade-up"
      >
        <div className="editorial-container">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Text */}
            <div className="space-y-4 order-2 lg:order-1">

              <h2 className="editorial-subheadline font-semibold text-balance">
                A clear focus
              </h2>

              <p className="editorial-body">
                TS360 serves libraries in two important ways:
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Laptop className="w-6 h-6 text-[#2aa6a6] flex-shrink-0 mt-0.5" />
                  <div className="text-sm md:text-base leading-relaxed">
                    <strong className="block mb-0.5">Digital collections:</strong>
                    TS360 will support digital ordering workflows, enabling libraries
                    to plan and execute digital acquisitions within the platform.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-[#2aa6a6] flex-shrink-0 mt-0.5" />
                  <div className="text-sm md:text-base leading-relaxed">
                    <strong className="block mb-0.5">Print collections:</strong>
                    TS360 remains available as a subscription tool for print collection
                    development, supporting evaluation, planning, and selection—without
                    print ordering transactions
                  </div>
                </li>
              </ul>

              <p className="mt-4 text-lg md:text-xl font-medium text-foreground leading-snug max-w-xl">
                This structure preserves TS360’s value for librarians managing both
                print and digital collections
              </p>

            </div>

            {/* Image */}
            <div
              className="aspect-[4/3] rounded-xl overflow-hidden shadow-md order-1 lg:order-2"
              data-aos="fade-right"
              data-aos-delay="200"
            >
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
      <section
        className="py-16 bg-secondary/20"
        data-aos="fade-up"
      >
        <div className="editorial-container">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Image */}
            <div
              className="aspect-[4/3] rounded-xl overflow-hidden shadow-md"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <img
                src="https://about.ebsco.com/sites/default/files/acquiadam-assets/cool-tools-for-collection-development-blog-image-780.jpg"
                alt="Librarian using collection development tools"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-4">

              <h2 className="editorial-subheadline font-semibold text-balance mt-0 md:-mt-12">
                <span className="block">Collection development for</span>
                <span className="block">digital and print</span>
              </h2>

              <p className="editorial-body">
                TS360 continues to support core collection development activities
                across formats, including:
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm md:text-base leading-relaxed">
                  <Target className="w-6 h-6 text-[#2aa6a6] flex-shrink-0 mt-0.5" />
                  <span>Evaluating collection gaps and strengths</span>
                </li>

                <li className="flex items-start gap-3 text-sm md:text-base leading-relaxed">
                  <Layers className="w-6 h-6 text-[#2aa6a6] flex-shrink-0 mt-0.5" />
                  <span>
                    Supporting selection decisions for digital and print materials
                  </span>
                </li>

                <li className="flex items-start gap-3 text-sm md:text-base leading-relaxed">
                  <Users className="w-6 h-6 text-[#2aa6a6] flex-shrink-0 mt-0.5" />
                  <span>
                    Aligning acquisitions with community needs and budgets
                  </span>
                </li>

                <li className="flex items-start gap-3 text-sm md:text-base leading-relaxed">
                  <DollarSign className="w-6 h-6 text-[#2aa6a6] flex-shrink-0 mt-0.5" />
                  <span>
                    Maintaining consistency across subject areas and formats
                  </span>
                </li>
              </ul>

              {/* Supporting line — NOT a closing */}
              <p className="mt-4 text-lg md:text-xl font-medium text-foreground leading-snug max-w-xl">
                In addition to the TS360 platform, LibraryOne offers collection
                development services that support both digital and print strategies
              </p>


            </div>
          </div>
        </div>
      </section>



      {/* CTA */}
      <section
        className="py-10"
        data-aos="fade-up"
      >
        <div className="editorial-container text-center space-y-6">
          {/* Main Heading */}
          <h2 className="editorial-subheadline font-semibold text-balance text-center mb-6">
            A familiar platform. Expanded flexibility. A digital-forward future
          </h2>

          {/* Description */}
          <p className="editorial-body text-lg md:text-xl max-w-4xl mx-auto leading-snug">
            <span className="block">
              LibraryOne is committed to transparency, stability, and long-term stewardship
            </span>
            <span className="block">
              as TS360 evolves to meet modern collection needs
            </span>
          </p>

          <div
            data-aos="zoom-in"
            data-aos-delay="700"
            className="mt-8 md:mt-10"
          >
            <Link to="/contact?product=ts360">
              <Button variant="hero" size="lg">
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

        </div>
      </section>

    </MainLayout>
  );
};
//ts360
export default TS360;