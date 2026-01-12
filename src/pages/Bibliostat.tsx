import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  BarChart3,
  TrendingUp,
  Users,
  FileText,
  Target,
  Lightbulb,
  CheckCircle,
  Sparkles,
  Globe,
  Sliders,
} from "lucide-react";
import Seo from "@/components/Seo";

const tiles = [
  {
    icon: FileText,
    title: "Turn data into stories that resonate",
    description:
      "Flexible reporting tools that allow libraries to design tables, charts, and visual outputs tailored to different audiences and use cases – Board & City Councils, Funding justifications, Strategic planning, and annual reporting.\n\nBy connecting performance data to outcomes, libraries can clearly articulate their value and needs",
  },
  {
    icon: Target,
    title: "Measure what matters to your community",
    description:
      "Identify trends and outcomes that align with community goals:\n\n• Growth in digital lending\n• Changes in usage by audience level\n• Resource investment per capita\n• Longitudinal performance over time\n\nThese insights help libraries align services with community priorities and demonstrate responsiveness to changing needs",
  },
  {
    icon: Lightbulb,
    title: "From compliance to confidence",
    description:
      "By combining accurate data collection with powerful analysis and reporting, Bibliostat CollectConnect supports:\n\n• Evidence-based planning\n• Stronger funding narratives\n• Transparent accountability\n• Confident advocacy\n\nLibraries gain the ability to speak clearly and credibly about their impact—backed by data they trust",
  },
];

const Bibliostat = () => {
  return (
    <MainLayout>
      <Seo
        title="Bibliostat CollectConnect"
        description="Bibliostat CollectConnect by LibraryOne helps libraries capture, analyze, and present data to demonstrate impact and guide strategic decisions."
        path="/bibliostat"
      />
      {/* Hero */}
      <section
        className="pt-32 pb-12 md:pt-40 md:pb-16"
        data-aos="fade-up"
      >
        <div className="editorial-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* LEFT CONTENT */}
            <div
              className="space-y-8"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <span className="bg-gradient-to-r from-[#0b5fa5] via-[#2aa6a6] to-[#4cc9c0] bg-clip-text text-transparent font-medium">
                Bibliostat CollectConnect
              </span>

              <h1 className="editorial-headline mb-0 leading-none">
                Turn library data into insight, impact, and advocacy
              </h1>

              <p className="editorial-body max-w-xl">
                Comprehensive data collection, analysis, and reporting platform
                that helps libraries transform data into meaningful insight and
                compelling stories
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/request-demo?product=bibliostat">
                  <Button variant="hero" size="lg">
                    Request Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div
              className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
                alt="Library data analytics dashboard"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Punch line */}
      <section
        className="relative py-10 md:py-12 overflow-hidden"
        data-aos="fade-up"
      >
        {/* Layered gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r
                  from-[#0b5fa5]/10 via-[#2aa6a6]/10 to-[#4cc9c0]/10" />

        {/* Soft glow blobs */}
        <div className="absolute -top-24 left-1/4 w-72 h-72 bg-[#2aa6a6]/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-24 right-1/4 w-72 h-72 bg-[#0b5fa5]/20 rounded-full blur-3xl opacity-40" />

        {/* Content */}
        <div className="relative editorial-container">
          <div className="max-w-5xl mx-auto text-center space-y-6">

            {/* Accent line */}
            <div className="mx-auto h-1 w-24 rounded-full
                      bg-gradient-to-r from-[#0b5fa5] via-[#2aa6a6] to-[#4cc9c0]" />

            {/* Text */}
            <p className="text-2xl md:text-3xl font-semibold text-foreground leading-snug">
              Bibliostat CollectConnect supports the full data lifecycle
            </p>

            <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              From survey collection and validation to peer comparison,
              trend analysis, and stakeholder-ready reporting
            </p>

          </div>
        </div>
      </section>



      {/* Collect */}
      <section
        className="pt-12 pb-20 bg-secondary/20"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <div className="editorial-container grid lg:grid-cols-2 gap-10 items-stretch">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-start space-y-4">
            <h2 className="editorial-subheadline font-semibold text-balance">
              Collect: Data collection made reliable
            </h2>

            <p className="editorial-body">
              The Collect component provides a powerful, flexible survey
              administration environment designed specifically for libraries
            </p>

            <ul className="space-y-4 text-muted-foreground">
              {[
                "Modern, intuitive survey management workflows",
                "Real-time edit checks that reduce errors at entry",
                "Automatic validation and resolution guidance",
                "Support for multiple users and collaborative data entry",
                "Access to up to six years of historical reference data",
              ].map((item, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-[#2aa6a6] mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex items-start">
            <div className="aspect-[3/2] w-full rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://www.ala.org/sites/default/files/styles/image_gallery_sm/public/pla/content/data/benchmark/benchmarking1_327x250.png.webp"
                alt="Survey collection interface"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>



      {/* Connect */}
      <section
        className="py-16 bg-secondary/10"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <div className="editorial-container grid lg:grid-cols-2 gap-10 items-start">

          {/* Image */}
          <div className="aspect-[3/2] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://cdnwebsite.databox.com/wp-content/uploads/2024/01/09012849/Screenshot-2024-01-09-at-09.28.22-1000x558.png"
              alt="Benchmark analytics"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-4 lg:pt-1">
            <h2 className="editorial-subheadline font-semibold text-balance">
              Connect: Analysis, Comparison, and Context
            </h2>

            <p className="editorial-body mt-4">
              The Connect component provides robust analytics, peer comparison tools,
              and reporting capabilities that help libraries interpret their data in
              context
            </p>

            <ul className="space-y-5 text-muted-foreground">
              <li className="flex gap-2">
                <BarChart3 className="w-4 h-4 text-[#2aa6a6] mt-1" />
                Analyze performance over time across hundreds of data points
              </li>
              <li className="flex gap-2">
                <Users className="w-4 h-4 text-[#2aa6a6] mt-1" />
                Compare against peer libraries
              </li>
              <li className="flex gap-2">
                <TrendingUp className="w-4 h-4 text-[#2aa6a6] mt-1" />
                Identify trends in circulation and usage
              </li>
              <li className="flex gap-2">
                <Globe className="w-4 h-4 text-[#2aa6a6] mt-1" />
                Benchmark locally or nationally
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Tiles */}
      {/* <section
        className="relative py-16 overflow-hidden
       bg-gradient-to-br from-[#0b5fa5]/5 via-[#2aa6a6]/5 to-[#4cc9c0]/5"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <div className="editorial-container grid lg:grid-cols-3 gap-10 text-center">
          {tiles.map((tile, i) => (
            <div
              key={i}
              className="space-y-4"
              data-aos="fade-up"
              data-aos-delay={i * 200}
            >
              <tile.icon className="w-10 h-10 mx-auto text-[#2aa6a6]" />
              <h3 className="editorial-subheadline font-semibold text-balance text-xl font-medium">
                {tile.title}
              </h3>
            </div>
          ))}
        </div>
      </section> */}

      {/* Visibility */}
      <section
        className="py-16 bg-secondary/20"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <div className="editorial-container grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT CONTENT */}
          <div className="space-y-4">
            <h2 className="editorial-subheadline font-semibold text-balance">
              Visibility at every level
            </h2>

            <p className="editorial-body">
              Bibliostat CollectConnect includes role-based dashboards that
              provide at-a-glance insight into progress, performance, and data quality
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="aspect-[5/2] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="Role-based dashboards"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>


      {/* Peer comparison */}

      <section
        className="py-16 bg-secondary/10"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <div className="editorial-container">
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* LEFT SIDE — IMAGE */}
            <div className="aspect-[4/2] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
                alt="Peer comparison discussion"
                className="w-full h-full object-cover"
              />
            </div>

            {/* RIGHT SIDE — CONTENT */}
            <div className="space-y-5">
              <h2 className="editorial-subheadline font-semibold text-balance">
                Peer comparison that delivers meaningful context
              </h2>

              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-[#2aa6a6] mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">
                    Build custom peer groups based on multiple criteria
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <Sliders className="w-5 h-5 text-[#2aa6a6] mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">
                    Fine-tune comparisons using demographic data
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-[#2aa6a6] mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">
                    Analyze trends across selected peers
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2aa6a6] mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">
                    Present results that are credible and defensible
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Bridge punch line */}
      <section
        className="py-2 bg-secondary/10"
        data-aos="fade"
        data-aos-duration="600"
      >
        <div className="editorial-container text-center">
          <p className="text-black font-semibold text-xl text-muted-foreground md:text-xl leading-snug">
            These tools support informed decision-making and strengthen conversations
            with boards, funders, and stakeholders
          </p>
        </div>

      </section>

      {/* Closing */}
      {/* <section
        className="editorial-section bg-gradient-to-r from-[#0b5fa5]/5 via-[#2aa6a6]/5 to-[#4cc9c0]/5 py-16"
        data-aos="fade-up"
      >
        <div className="editorial-container text-center">

          <h2
            className="editorial-subheadline font-semibold text-balance text-center mb-6 text-foreground"
          >
            Bibliostat CollectConnect
          </h2>

          <p
            className="editorial-body text-lg md:text-xl max-w-5xl mx-auto mb-8 leading-snug text-muted-foreground"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Built for libraries. Trusted by agencies. Designed for impact
          </p>

          <div data-aos="zoom-in" data-aos-delay="700">
            <Link to="/contact?product=content-cafe">
              <Button variant="hero" size="lg">
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

        </div>
      </section> */}

      <section
        className="relative py-20 overflow-hidden
  bg-gradient-to-br from-[#0b5fa5]/5 via-[#2aa6a6]/5 to-[#4cc9c0]/5"
        data-aos="fade-up"
      >
        <div className="editorial-container text-center">

          {/* Heading */}
          <h2
            className="editorial-subheadline font-semibold text-balance mb-4 text-foreground"
            data-aos="fade-up"
          >
            Bibliostat CollectConnect
          </h2>

          {/* Small Text */}
          <p
            className="editorial-body text-lg md:text-xl max-w-4xl mx-auto mb-12 leading-snug text-muted-foreground"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Built for libraries. Trusted by agencies. Designed for impact.
          </p>

          {/* Tiles */}
          <div className="grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto mb-14">
            {tiles.map((tile, i) => (
              <div
                key={i}
                className="space-y-4"
                data-aos="fade-up"
                data-aos-delay={i * 200}
              >
                <tile.icon className="w-10 h-10 mx-auto text-[#2aa6a6]" />
                <h3 className="editorial-subheadline text-xl font-medium">
                  {tile.title}
                </h3>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div data-aos="zoom-in" data-aos-delay="600">
            <Link to="/contact?product=content-cafe">
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

export default Bibliostat;
