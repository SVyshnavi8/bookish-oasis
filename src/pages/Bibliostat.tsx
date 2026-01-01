import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, TrendingUp, Users, FileText, Target, Lightbulb, CheckCircle, Sparkles, Globe } from "lucide-react";

const Bibliostat = () => {
  const tiles = [
    {
      icon: FileText,
      title: "Turn data into stories that resonate.",
      description:
        "Flexible reporting tools that allow libraries to design tables, charts, and visual outputs tailored to different audiences and use cases – Board & City Councils, Funding justifications, Strategic planning, and annual reporting.\n\nBy connecting performance data to outcomes, libraries can clearly articulate their value and needs.",
    },
    {
      icon: Target,
      title: "Measure what matters to your community.",
      description:
        "Identify trends and outcomes that align with community goals:\n\n• Growth in digital lending\n• Changes in usage by audience level\n• Resource investment per capita\n• Longitudinal performance over time\n\nThese insights help libraries align services with community priorities and demonstrate responsiveness to changing needs.",
    },
    {
      icon: Lightbulb,
      title: "From compliance to confidence.",
      description:
        "By combining accurate data collection with powerful analysis and reporting, Bibliostat Collect & Connect supports:\n\n• Evidence-based planning\n• Stronger funding narratives\n• Transparent accountability\n• Confident advocacy\n\nLibraries gain the ability to speak clearly and credibly about their impact—backed by data they trust.",
    },
  ];

  return (
    <MainLayout>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28" data-aos="fade-up">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8" data-aos="fade-right" data-aos-delay="200">
              <span className="bg-gradient-to-r from-[#0b5fa5] via-[#2aa6a6] to-[#4cc9c0] bg-clip-text text-transparent font-medium">Bibliostat Collect & Connect</span>
              <h1 className="editorial-headline">
                Turn library data into insight, impact, and advocacy
              </h1>
              <p className="editorial-body text-lg">
                Comprehensive data collection, analysis, and reporting platform that helps libraries transform data into meaningful insight and compelling stories.
              </p>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg" data-aos="zoom-in" data-aos-delay="400">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
                alt="Library data analytics dashboard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="editorial-section bg-secondary/10" data-aos="fade-up">
        <div className="editorial-container">
          <div className="max-w-4xl mx-auto text-center space-y-8 py-12">
            <h2 className="editorial-subheadline">Overview</h2>
            <p className="editorial-body text-lg leading-relaxed max-w-3xl mx-auto">
              Used by individual libraries, consortia, and State Library Agencies, Bibliostat Collect & Connect supports the full data lifecycle—from survey collection and validation to peer comparison, trend analysis, and stakeholder-ready reporting.
            </p>
            <p className="editorial-body text-lg leading-relaxed max-w-3xl mx-auto">
              The platform empowers libraries to move beyond compliance reporting and use their data to inform decisions, demonstrate value, and support advocacy.
            </p>
          </div>
        </div>
      </section>

      {/* Collect Section */}
      <section className="editorial-section bg-secondary/20" data-aos="fade-up">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <h2 className="editorial-subheadline">Collect: Data Collection Made Reliable</h2>
              <p className="editorial-body">
                The Collect component provides a powerful, flexible survey administration environment designed specifically for libraries. It supports statewide and local data collection efforts, including annual public library surveys and custom informational surveys.
              </p>
              <p className="editorial-body font-medium">Key capabilities include:</p>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2aa6a6] flex-shrink-0" />
                  Modern, intuitive survey management workflows
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2aa6a6] flex-shrink-0" />
                  Real-time edit checks that reduce errors at entry
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2aa6a6] flex-shrink-0" />
                  Automatic validation and resolution guidance
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2aa6a6] flex-shrink-0" />
                  Support for multiple users and collaborative data entry
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2aa6a6] flex-shrink-0" />
                  Access to up to six years of historical reference data
                </li>
              </ul>
              <p className="editorial-body">
                For State Library Agencies, Collect is optimized to support error-free submission of Public Library Survey data to IMLS. For individual libraries, it provides a reliable way to gather consistent, high-quality data year over year.
              </p>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://www.ala.org/sites/default/files/styles/image_gallery_sm/public/pla/content/data/benchmark/benchmarking1_327x250.png.webp?itok=vcsJBS9d"
                alt="Library survey data collection interface"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="editorial-section bg-secondary/10" data-aos="fade-up">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
              <img
                src="https://cdnwebsite.databox.com/wp-content/uploads/2024/01/09012849/Screenshot-2024-01-09-at-09.28.22-1000x558.png"
                alt="Library peer comparison and benchmark analytics"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="editorial-subheadline">Connect: Analysis, Comparison, and Context</h2>
              <p className="editorial-body">
                The Connect component provides robust analytics, peer comparison tools, and reporting capabilities that help libraries interpret their data in context.
              </p>
              <p className="editorial-body">Libraries and agencies can:</p>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <BarChart3 className="w-5 h-5 text-[#2aa6a6] flex-shrink-0" />
                  Analyze performance over time across hundreds of data points
                </li>
                <li className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-[#2aa6a6] flex-shrink-0" />
                  Compare against peer libraries using statistical and categorical criteria
                </li>
                <li className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-[#2aa6a6] flex-shrink-0" />
                  Identify trends in circulation, digital lending, expenditures, and usage
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-[#2aa6a6] flex-shrink-0" />
                  Benchmark locally, regionally, or nationally
                </li>
              </ul>
              <p className="editorial-body">
                This ability to compare like-to-like performance helps libraries move from raw numbers to actionable insight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contextual Performance Section */}
<section className="editorial-section bg-secondary/20" data-aos="fade-up">
  <div className="editorial-container">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      
      {/* Content */}
      <div className="space-y-8">
        <h2 className="editorial-subheadline">
          Understand performance in context—not isolation
        </h2>

        <p className="editorial-body">
          One of the most powerful capabilities of Bibliostat Collect & Connect
          is its peer comparison functionality. Rather than viewing performance
          in isolation, libraries can evaluate outcomes alongside comparable
          institutions to gain meaningful perspective.
        </p>

        <ul className="space-y-4 text-muted-foreground">
          <li className="flex items-start gap-3">
            <Users className="w-5 h-5 text-[#2aa6a6] flex-shrink-0 mt-1" />
            <span>
              <strong>Build custom peer groups</strong> based on multiple criteria,
              fine-tuning comparisons using demographic and operational data.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <TrendingUp className="w-5 h-5 text-[#2aa6a6] flex-shrink-0 mt-1" />
            <span>
              <strong>Analyze trends across peers and timeframes</strong>,
              ensuring results are credible, relevant, and defensible.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <BarChart3 className="w-5 h-5 text-[#2aa6a6] flex-shrink-0 mt-1" />
            <span>
              Use contextual insights to support informed decision-making and
              strengthen conversations with boards, funders, and stakeholders.
            </span>
          </li>
        </ul>
      </div>

      {/* Image */}
      <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="Library data comparison and analytics"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  </div>
</section>


      {/* Three Highlight Tiles */}
      <section className="editorial-section bg-secondary/20" data-aos="fade-up">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-3 gap-12">
            {tiles.map((tile, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-border text-center space-y-6"
                data-aos="fade-up"
                data-aos-delay={100 + index * 200}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#0b5fa5]/10 via-[#2aa6a6]/10 to-[#4cc9c0]/10 flex items-center justify-center mx-auto">
                  <tile.icon className="w-8 h-8 text-[#2aa6a6]" />
                </div>
                <h3 className="text-2xl font-serif font-medium">{tile.title}</h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {tile.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="editorial-section bg-gradient-to-r from-[#0b5fa5]/5 via-[#2aa6a6]/5 to-[#4cc9c0]/5 py-20" data-aos="fade-up">
        <div className="editorial-container text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <Sparkles className="w-16 h-16 text-[#2aa6a6] mx-auto" />
            <p className="editorial-body text-2xl font-medium max-w-3xl mx-auto">
              Built for libraries. Trusted by agencies. Designed for impact.
            </p>
            <p className="editorial-body text-lg text-muted-foreground max-w-3xl mx-auto">
              As part of LibraryOne, Bibliostat Collect & Connect continues to evolve as a platform dedicated to helping libraries use data not just to report—but to lead, advocate, and plan with confidence.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Bibliostat;