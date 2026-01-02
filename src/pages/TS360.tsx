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
<section
  className="pt-20 pb-12 md:pt-28 md:pb-16"
  data-aos="fade-up"
>
  <div className="editorial-container">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      
      {/* Left Content */}
      <div
        className="space-y-6"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <span className="bg-gradient-to-r from-[#0b5fa5] via-[#2aa6a6] to-[#4cc9c0] bg-clip-text text-transparent font-medium">
          TS360
        </span>

        <h1 className="editorial-headline mb-4">
          A Trusted Collection Development Platform— 
          <span className="block font-serif italic bg-gradient-to-r from-[#0b5fa5] via-[#2aa6a6] to-[#4cc9c0] bg-clip-text text-transparent">
            supporting both digital and print strategies
          </span>
        </h1>

        <p className="editorial-body">
          Long relied upon by librarians as a trusted tool for collection
          development, TS360 continues to support thoughtful planning and
          evaluation across formats.
        </p>

        <p className="editorial-body">
          Going forward, TS360 will support{" "}
          <span className="font-semibold text-foreground">
            digital ordering workflows
          </span>, while remaining available as a{" "}
          <span className="font-semibold text-foreground">
            collection development resource for print collections
          </span>. This approach allows libraries to maintain continuity in
          their collection strategy while aligning transactional workflows
          with today’s digital priorities.
        </p>

        <div className="flex flex-wrap gap-4 pt-1">
          <Link to="/demo">
            <Button variant="hero" size="lg">
              Talk to our Team
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div
        className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        <img
          src="https://research.com/uploads/OCLC_Worldshare_Management_System_dashboard_1024x626_cf56c40257.png"
          alt="Library collection analytics and decision-support dashboard"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  </div>
</section>


      {/* Important Update – Colorful Gradient */}
<section
  className="py-6 bg-gradient-to-r from-indigo-50 via-sky-50 to-teal-50"
  data-aos="fade-up"
>
  <div className="editorial-container">
    <div className="max-w-4xl mx-auto">

      <div className="relative p-5 rounded-xl border border-indigo-200/60
                      bg-gradient-to-br from-white via-indigo-50 to-teal-50
                      shadow-sm">

        {/* Top Accent Bar */}
        <span className="absolute top-0 left-0 h-1 w-full
                         bg-gradient-to-r from-indigo-500 via-sky-500 to-teal-400
                         rounded-t-xl" />

        <div className="flex gap-4 items-start">

          {/* Icon */}
          <div className="flex-shrink-0 mt-0.5">
            <AlertCircle className="w-8 h-8 text-indigo-600" />
          </div>

          {/* Content */}
          <div className="space-y-2">
            <h2 className="text-xl font-serif font-semibold
                           bg-gradient-to-r from-indigo-700 via-sky-700 to-teal-600
                           bg-clip-text text-transparent leading-tight">
              Important Update
            </h2>

            <div className="space-y-2 text-slate-700 leading-relaxed text-sm md:text-base">
              <p>
                <strong className="text-slate-900">
                  Print ordering is no longer going to be supported on TS360.   
                </strong>{" "}
                However, TS360 will be available as a subscription product for print and digital collection development.
              </p>

              <p>
                <strong className="text-slate-900">
                  Digital ordering functionality will resume soon on TS360.
                </strong>{" "}
                 We are currently transitioning the systems to LibraryOne’s infrastructure. We will provide communication and guidance as digital ordering functionality becomes available. 
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

{/* A Clear Focus Section */}
<section
  className="py-10 bg-secondary/10"
  data-aos="fade-up"
>
  <div className="editorial-container">
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

      {/* Text */}
      <div className="space-y-4 order-2 lg:order-1">
        
        <h2 className="editorial-subheadline font-semibold text-balance">
        A Clear Focus: Digital Ordering and Broad Collection Development
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
              print ordering transactions.
            </div>
          </li>
        </ul>

        <p className="editorial-body">
          This structure preserves TS360’s value for librarians managing both
          print and digital collections.
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
  className="py-10 bg-secondary/20"
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
        
        <h2 className="editorial-subheadline font-semibold text-balance">
  <span className="block">Collection Development for</span>
  <span className="block">Digital and Print</span>
</h2>


        <p className="editorial-body">
          The collection development tool librarians trust—now delivered as a
          subscription service.
        </p>

        <p className="editorial-body">
          TS360 continues to support core collection development activities
          across formats, including:
        </p>

        <ul className="space-y-3">
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

       <p className="editorial-body">
  In addition to the TS360 platform, LibraryOne offers{" "}
  <span className="font-semibold text-foreground">
    collection development services
  </span>{" "}
  that support both digital and print strategies.
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#0b5fa5]/10 via-[#2aa6a6]/10 to-[#4cc9c0]/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-[#2aa6a6]" />
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


<section
  className="py-10"
  data-aos="fade-up"
>
  <div className="editorial-container text-center space-y-4">

    {/* TS360 Icon */}
    <div className="flex justify-center">
      <div className="w-14 h-14 rounded-full
                      bg-gradient-to-r from-[#0b5fa5]/15 via-[#2aa6a6]/15 to-[#4cc9c0]/15
                      flex items-center justify-center">
        <Layers className="w-7 h-7 text-[#0b5fa5]" />
      </div>
    </div>

    {/* Heading */}
    <h2 className="editorial-subheadline font-semibold text-balance">
      A familiar platform. Expanded flexibility. A digital-forward future
    </h2>

    {/* Description */}
    <p className="editorial-body max-w-3xl mx-auto text-center">
  <span className="block">
    LibraryOne is committed to transparency, stability, and long-term stewardship
  </span>
  <span className="block">
    as TS360 evolves to meet modern collection needs.
  </span>
</p>


  </div>
</section>


    </MainLayout>
  );
};

export default TS360;