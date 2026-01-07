import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Star, Bookmark, MessageSquare, Sparkles, FileText, BookMarked, Eye, Link2, Heart, Target, Wrench, DollarSign, CheckCircle, BookOpen, Database, TrendingUp } from "lucide-react";

const ContentCafe = () => {
  const features = [
    {
      icon: Search,
      title: "Rich Discovery",
      description: "Help patrons find their next favorite read with powerful search and browse tools.",
    },
    {
      icon: Star,
      title: "Reviews & Ratings",
      description: "Community reviews and professional ratings to guide reading decisions.",
    },
    {
      icon: Bookmark,
      title: "Reading Lists",
      description: "Curated lists and personalized recommendations based on reading history.",
    },
    {
      icon: MessageSquare,
      title: "Book Summaries",
      description: "Detailed synopses and author information for every title.",
    },
  ];

  return (
    <MainLayout>
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
                Content Café
              </span>

              <h1 className="editorial-headline mb-0 leading-none">
                Enrich discovery. Deepen engagement. Do more with your collections
              </h1>

              <p className="editorial-body max-w-xl">
                Enhance your library collections through rich content enrichment
                that improves discovery, understanding, and engagement for patrons
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/demo?product=content-cafe">
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
                src="https://iii.com/wp-content/uploads/2022/03/image-3.png"
                alt="Enriched library catalog with book covers, reviews, ratings, and summaries"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>



      <section
        className="relative py-16 overflow-hidden
       bg-gradient-to-br from-[#0b5fa5]/5 via-[#2aa6a6]/5 to-[#4cc9c0]/5"
      >
        {/* subtle texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none
            bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]
            [background-size:18px_18px]" />

        <div className="editorial-container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">

            {/* Icon strip */}
            <div className="flex justify-center gap-6">
              <div className="w-12 h-12 rounded-full bg-[#2aa6a6]/10 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-[#2aa6a6]" />
              </div>
              <div className="w-12 h-12 rounded-full bg-[#2aa6a6]/10 flex items-center justify-center">
                <Database className="w-6 h-6 text-[#2aa6a6]" />
              </div>
              <div className="w-12 h-12 rounded-full bg-[#2aa6a6]/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#2aa6a6]" />
              </div>
            </div>

            {/* Heading with gradient underline */}
            <div className="inline-block">
              <h2
                className="editorial-subheadline font-semibold text-balance"
                data-aos="fade-up"
              >
                Why Content Café?
              </h2>

              {/* underline */}
              <div className="h-1 w-24 mx-auto mt-3 rounded-full
                  bg-gradient-to-r from-[#0b5fa5] via-[#2aa6a6] to-[#4cc9c0]" />
            </div>

            {/* Added images for visual enhancement */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://gethublet.com/hubfs/Photos%20for%20Website/Handheld%20Library%20RFID%20Loan%202.jpg"
                  alt="Library patron using a tablet for digital content discovery"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://www.crowntv-us.com/wp-content/uploads/2025/01/AD_4nXfcfI8O382hJvL-uDuu_Oy7m57p_-qOGsz9hQYmocDLrlVCnzAHMGzcjkbhMQukkPn0CAY_mPwId_9nrT4vEZTkwcYm3PE2x6X4sr_DNiFLGUp3KykFlWK1w5tOWx0VVs0wjHJvCw.jpg"
                  alt="Modern library with digital signage helping patrons discover content"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Text */}
            <p
              className="text-lg md:text-xl leading-relaxed text-muted-foreground"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Libraries invest heavily in their collections, yet too often those materials
              remain under-discovered or under-used. Content Café adds meaningful context—
              descriptions, reviews, and related content—so patrons understand what materials
              are about and why they matter
            </p>

          </div>
        </div>
      </section>


      {/* ================= CONTENT ENRICHMENT ================= */}
      <section className="py-20 bg-secondary/20">
        <div className="editorial-container">
          <h2 className="editorial-subheadline text-center font-semibold mb-12">
            Content enrichment capabilities
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <ul className="space-y-8">
              {[
                {
                  icon: BookMarked,
                  text:
                    "Enhances bibliographic records with rich, curated content that supports discovery and decision-making",
                },
                {
                  icon: FileText,
                  text:
                    "Clear descriptions help patrons understand scope, tone, and relevance—reducing uncertainty",
                },
                {
                  icon: Star,
                  text:
                    "Thoughtfully selected reviews and related titles encourage deeper exploration",
                },
                {
                  icon: Sparkles,
                  text:
                    "Supports browsing, curiosity, and serendipitous discovery",
                },
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex gap-5 items-start"
                  data-aos="fade-up"
                  data-aos-delay={i * 150}
                >
                  <div className="w-11 h-11 rounded-full bg-gradient-to-r from-[#0b5fa5]/10 via-[#2aa6a6]/10 to-[#4cc9c0]/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#2aa6a6]" />
                  </div>
                  <p className="editorial-body text-lg">{item.text}</p>
                </li>
              ))}
            </ul>

            <div
              className="rounded-3xl overflow-hidden shadow-xl"
              data-aos="zoom-in"
            >
              <img
                src="https://images.unsplash.com/photo-1516979187457-637abb4f9353"
                alt="Enhanced catalog interface"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= BETTER DISCOVERY ================= */}
      <section className="py-20 bg-secondary/10">
        <div className="editorial-container">
          <h2 className="editorial-subheadline text-center font-semibold mb-12">
            Better content leads to better discovery
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">

            {/* LEFT — IMAGE */}
            <div data-aos="fade-right">
              <img
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66"
                alt="Reader browsing books"
                className="rounded-3xl shadow-lg w-full object-cover"
              />
            </div>

            {/* RIGHT — CONTENT */}
            <div className="space-y-6" data-aos="fade-left">
              {[
                {
                  icon: Eye,
                  text: "Understand what a title is about before selecting it",
                },
                {
                  icon: Link2,
                  text: "Discover related materials they may not have searched for",
                },
                {
                  icon: Heart,
                  text: "Engage more deeply across formats, genres, and subjects",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-5 border-l-4 border-[#2aa6a6] pl-6"
                  data-aos="fade-up"
                  data-aos-delay={i * 120}
                >
                  <item.icon className="w-7 h-7 text-[#2aa6a6] flex-shrink-0" />
                  <p className="editorial-body text-lg">{item.text}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>



      {/* ================= PRICING – HEADLINE ================= */}
      {/* Designed for libraries. Priced for sustainability. - Style 3: Accent Bar */}
      <section
        className="editorial-section bg-white py-6 md:py-8"
        data-aos="fade-up"
      >
        <div className="editorial-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div
                className="inline-block px-6 py-2 bg-gradient-to-r from-[#0b5fa5]/10 via-[#2aa6a6]/10 to-[#4cc9c0]/10 rounded-full mb-4"
                data-aos="fade-up"
              >
                <h2 className="editorial-subheadline font-semibold text-balance text-[#2aa6a6]">
                  Designed for libraries. Priced for sustainability
                </h2>
              </div>
            </div>

            <p
              className="editorial-body text-lg text-center mb-8 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Content Café was built with a clear understanding of library budgets and
              priorities. <br />
              It delivers essential enrichment capabilities without
              unnecessary complexity or cost
            </p>



            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div
                className="flex items-center gap-5 border-l-4 border-[#2aa6a6] pl-6 py-3"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <Target className="w-7 h-7 text-[#2aa6a6] flex-shrink-0" />
                <p className="editorial-body">
                  A focused feature set aligned with real library needs
                </p>
              </div>

              <div
                className="flex items-center gap-5 border-l-4 border-[#2aa6a6] pl-6 py-3"
                data-aos="fade-right"
                data-aos-delay="500"
              >
                <Wrench className="w-7 h-7 text-[#2aa6a6] flex-shrink-0" />
                <p className="editorial-body">
                  Simple implementation and maintenance
                </p>
              </div>

              <div
                className="flex items-center gap-5 border-l-4 border-[#2aa6a6] pl-6 py-3"
                data-aos="fade-left"
                data-aos-delay="600"
              >
                <DollarSign className="w-7 h-7 text-[#2aa6a6] flex-shrink-0" />
                <p className="editorial-body">
                  Transparent, predictable pricing
                </p>
              </div>

              <div
                className="flex items-center gap-5 border-l-4 border-[#2aa6a6] pl-6 py-3"
                data-aos="fade-left"
                data-aos-delay="700"
              >
                <CheckCircle className="w-7 h-7 text-[#2aa6a6] flex-shrink-0" />
                <p className="editorial-body">
                  A cost-effective alternative to more expensive enrichment solutions
                </p>
              </div>

            </div>

          </div>
          <div className="mt-12 text-center">
            <p className="text-lg md:text-xl font-semibold text-muted-foreground tracking-wide text-center mt-8" data-aos="fade-up"
              data-aos-delay="800">
              Libraries can enhance discovery and engagement without over-investing in
              features they don’t need
            </p>
          </div>
        </div>
      </section>
      {/* Features */}
      {/* <section className="editorial-section bg-secondary/10" data-aos="fade-up">
        <div className="editorial-container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="flex gap-6"
                data-aos="slide-up"
                data-aos-delay={200 + index * 150}
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

      {/* CTA - Compact Version with Commitment Statement */}
      <section
        className="editorial-section bg-gradient-to-r from-[#0b5fa5]/5 via-[#2aa6a6]/5 to-[#4cc9c0]/5 py-16"
        data-aos="fade-up"
      >
        <div className="editorial-container text-center">

          {/* Heading */}
          <h2
            className="editorial-subheadline font-semibold text-balance text-center mb-6 text-foreground"
          >
            Content Café
          </h2>


          {/* Description */}
          <p
            className="editorial-body text-lg md:text-xl max-w-5xl mx-auto mb-8 leading-snug text-muted-foreground"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            LibraryOne’s commitment to providing focused,
            high-value digital services that help libraries maximize impact while
            respecting budgets and workflows
          </p>

          {/* CTA */}
          <div data-aos="zoom-in" data-aos-delay="700">
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

export default ContentCafe;
