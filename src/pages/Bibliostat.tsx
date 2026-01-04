import MainLayout from "@/layouts/MainLayout";
import { motion } from "framer-motion";
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

/* ---------- Motion presets ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

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
      <section className="pt-24 pb-16">
        <motion.div
          className="editorial-container grid lg:grid-cols-2 gap-10 items-center"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="space-y-5">
            <span className="bg-gradient-to-r from-[#0b5fa5] via-[#2aa6a6] to-[#4cc9c0] bg-clip-text text-transparent font-medium">
              Bibliostat Collect & Connect
            </span>

            <h1 className="editorial-headline">
              Turn library data into insight, impact, and advocacy
            </h1>

            <p className="editorial-body">
              Comprehensive data collection, analysis, and reporting platform
              that helps libraries transform data into meaningful insight and
              compelling stories.
            </p>
          </div>

          <motion.div
            variants={fadeIn}
            className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
              alt="Library data analytics dashboard"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Punch line */}
      <motion.section
        className="py-6 bg-secondary/10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="editorial-container text-center">
          <p className="text-black font-bold text-xl">
            Used by individual libraries, consortia, and State Library Agencies
          </p>
        </div>
      </motion.section>

      {/* Collect */}
      <motion.section
        className="py-12 bg-secondary/20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
      >
        <div className="editorial-container grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="editorial-subheadline">
              Collect: Data Collection Made Reliable
            </h2>

            <p className="editorial-body">
              The Collect component provides a powerful, flexible survey
              administration environment designed specifically for libraries.
            </p>

            <p className="editorial-body font-medium">
              Key capabilities include:
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

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src="https://www.ala.org/sites/default/files/styles/image_gallery_sm/public/pla/content/data/benchmark/benchmarking1_327x250.png.webp"
              alt="Survey collection interface"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Connect */}
      <motion.section
        className="py-12 bg-secondary/10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="editorial-container grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src="https://cdnwebsite.databox.com/wp-content/uploads/2024/01/09012849/Screenshot-2024-01-09-at-09.28.22-1000x558.png"
              alt="Benchmark analytics"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="space-y-4">
            <h2 className="editorial-subheadline">
              Connect: Analysis, Comparison, and Context
            </h2>

            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <BarChart3 className="w-4 h-4 text-[#2aa6a6]" />
                Analyze performance over time across hundreds of data points
              </li>
              <li className="flex gap-2">
                <Users className="w-4 h-4 text-[#2aa6a6]" />
                Compare against peer libraries
              </li>
              <li className="flex gap-2">
                <TrendingUp className="w-4 h-4 text-[#2aa6a6]" />
                Identify trends in circulation and usage
              </li>
              <li className="flex gap-2">
                <Globe className="w-4 h-4 text-[#2aa6a6]" />
                Benchmark locally or nationally
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Visibility */}
      <motion.section
        className="py-12 bg-secondary/20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="editorial-container grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="editorial-subheadline">
              Visibility at every level
            </h2>

            <p className="editorial-body">
              Bibliostat Collect & Connect includes role-based dashboards that
              provide at-a-glance insight into progress, performance, and data quality.
            </p>

            <ul className="space-y-2 text-muted-foreground">
              <li>• Survey completion tracking and milestone monitoring</li>
              <li>• Edit check summaries and resolution status</li>
              <li>• Drill-down access to individual libraries or datasets</li>
              <li>• Direct communication with participants from within the platform</li>
            </ul>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="Role-based dashboards"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Peer comparison */}
      <motion.section
        className="py-12 bg-secondary/10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="editorial-container grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="editorial-subheadline">
              Peer comparison that delivers meaningful context
            </h2>

            <ul className="space-y-2 text-muted-foreground">
              <li>• Build custom peer groups based on multiple criteria</li>
              <li>• Fine-tune comparisons using demographic data</li>
              <li>• Analyze trends across selected peers</li>
              <li>• Present results that are credible and defensible</li>
            </ul>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
              alt="Peer comparison discussion"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Bridge punch line */}
      <motion.section
        className="py-6 bg-secondary/10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="editorial-container text-center">
          <p className="text-black font-bold text-lg">
            These tools support informed decision-making and strengthen conversations
            with boards, funders, and stakeholders.
          </p>
        </div>
      </motion.section>

      {/* Tiles */}
      <motion.section
        className="py-12 bg-secondary/20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="editorial-container grid lg:grid-cols-3 gap-8">
          {tiles.map((tile, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center space-y-3"
            >
              <tile.icon className="w-8 h-8 mx-auto text-[#2aa6a6]" />
              <h3 className="text-xl font-serif font-medium">{tile.title}</h3>
              <p className="text-muted-foreground whitespace-pre-line">
                {tile.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Closing */}
      <motion.section
        className="py-12 bg-gradient-to-r from-[#0b5fa5]/5 via-[#2aa6a6]/5 to-[#4cc9c0]/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="editorial-container text-center max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Sparkles className="w-6 h-6 text-[#2aa6a6]" />
            <p className="text-black font-bold text-lg">
              Built for libraries. Trusted by agencies. Designed for impact.
            </p>
          </div>

          <p className="editorial-body text-muted-foreground text-[0.75rem] leading-relaxed">
            As part of LibraryOne, Bibliostat Collect & Connect continues to evolve as a
            platform dedicated to helping libraries use data not just to report—but to
            lead, advocate, and plan with confidence.
          </p>
        </div>
      </motion.section>
    </MainLayout>
  );
};

export default Bibliostat;
