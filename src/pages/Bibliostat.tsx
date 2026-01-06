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
} from "lucide-react";

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
      {/* Hero */}
      <section className="pt-24 pb-16">
        <div
          className="editorial-container grid lg:grid-cols-2 gap-10 items-center"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <div className="space-y-5">
            <span className="bg-gradient-to-r from-[#0b5fa5] via-[#2aa6a6] to-[#4cc9c0] bg-clip-text text-transparent font-medium">
              Bibliostat CollectConnect
            </span>

            <h1 className="editorial-headline">
              Turn library data into insight, impact, and advocacy
            </h1>

            <p className="editorial-body">
              Comprehensive data collection, analysis, and reporting platform
              that helps libraries transform data into meaningful insight and
              compelling stories
            </p>
          </div>

          <div
            className="aspect-[3/2] rounded-2xl overflow-hidden shadow-lg"
            data-aos="fade"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
              alt="Library data analytics dashboard"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Punch line */}
      <section
        className="py-6 bg-secondary/10"
        data-aos="fade"
        data-aos-duration="600"
      >
        <div className="editorial-container text-center">
          <p className="text-black font-semibold text-xl md:text-xl leading-snug">
            Bibliostat CollectConnect supports the full data lifecycle— <br/>from survey collection 
            and validation to peer comparison, trend analysis, and stakeholder-ready reporting
          </p>
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
        Collect: Data Collection Made Reliable
      </h2>

      <p className="editorial-body">
        The Collect component provides a powerful, flexible survey
        administration environment designed specifically for libraries
      </p>

      <ul className="space-y-2 text-muted-foreground">
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
  className="py-12 bg-secondary/10"
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

      <ul className="space-y-2 text-muted-foreground">
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

      {/* Visibility */}
      <section
  className="py-12 bg-secondary/20"
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
    <div className="aspect-[3/2] rounded-2xl overflow-hidden shadow-lg">
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
  className="py-12 bg-secondary/10"
  data-aos="fade-up"
  data-aos-duration="700"
>
  <div className="editorial-container">
    <div className="grid lg:grid-cols-2 gap-10 items-start">

      {/* LEFT SIDE — IMAGE */}
      <div className="aspect-[3/2] rounded-2xl overflow-hidden shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
          alt="Peer comparison discussion"
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT SIDE — CONTENT */}
      <div className="space-y-4">
        <h2 className="editorial-subheadline font-semibold text-balance">
          Peer comparison that delivers meaningful context
        </h2>

        <ul className="space-y-2 text-muted-foreground">
          <li>• Build custom peer groups based on multiple criteria</li>
          <li>• Fine-tune comparisons using demographic data</li>
          <li>• Analyze trends across selected peers</li>
          <li>• Present results that are credible and defensible</li>
        </ul>
      </div>

    </div>
  </div>
</section>



      {/* Bridge punch line */}
      <section
        className="py-6 bg-secondary/10"
        data-aos="fade"
        data-aos-duration="600"
      >
        <div className="editorial-container text-center">
  <p className="text-black font-semibold text-xl md:text-2xl leading-snug">
    These tools support informed decision-making and strengthen conversations
    with boards, funders, and stakeholders.
  </p>
</div>

      </section>

      {/* Tiles */}
      <section
        className="py-12 bg-secondary/20"
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
      </section>


      {/* Closing */}
      <section
        className="py-10 md:py-14 bg-gradient-to-r from-[#0b5fa5]/5 via-[#2aa6a6]/5 to-[#4cc9c0]/5"
        data-aos="fade"
        data-aos-duration="800"
      >
        <div className="editorial-container text-center max-w-5xl mx-auto space-y-6">

          
<h2 className="
  editorial-subheadline 
  font-semibold 
  whitespace-nowrap
  bg-gradient-to-r from-[#0b5fa5] via-[#2aa6a6] to-[#4cc9c0]
  bg-clip-text text-transparent
">
  Bibliostat CollectConnect
</h2>



          

          {/* Headline */}
          <h2 className="editorial-subheadline font-semibold whitespace-nowrap">
            Built for libraries. Trusted by agencies. Designed for impact
          </h2>

          {/* Body */}
          

          {/* CTA Button */}
          <div
            data-aos="zoom-in"
            data-aos-delay="800"
            className="mt-8 md:mt-10 flex justify-center"
          >
            <Link to="/contact">
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
