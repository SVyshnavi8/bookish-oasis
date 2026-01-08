import MainLayout from "@/layouts/MainLayout";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  HeartHandshake,
  BookOpen,
  Globe,
  Layers,
  BarChart3,
  Coffee,
} from "lucide-react";

import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import lib1 from "@/assets/lib1.jpg";
import bgImage from "@/assets/img1.jpeg";


import bookCover1 from "@/assets/book-cover-1.jpg";
import bookCover2 from "@/assets/book-cover-2.jpg";
import bookCover3 from "@/assets/book-cover-3.jpg";
import bookCover4 from "@/assets/book-cover-4.jpg";
import bookCover5 from "@/assets/book-cover-5.jpg";
import bookCover6 from "@/assets/book-cover-6.jpg";
import bookCover7 from "@/assets/book-cover-7.jpg";
import bookCover8 from "@/assets/book-cover-8.jpg";

const Index = () => {
  const productFeatures = [
    {
      icon: BookOpen,
      title: "Boundless",
      description:
        "A trusted digital content platform that helps libraries extend access, discovery, and engagement beyond their physical walls",
      link: "/boundless",
    },
    {
      icon: Globe,
      title: "ePopUp Library",
      description:
        "A community outreach platform that brings the library directly into neighborhoods, schools, and partner locations",
      link: "/epopup",
    },
    {
      icon: Layers,
      title: "TS360",
      description:
        "Tools and services that support informed selection and operational efficiency in collection development",
      link: "/ts360",
    },
    {
      icon: BarChart3,
      title: "Bibliostat CollectConnect",
      description:
        "Data, analytics, and insight tools that help libraries demonstrate impact and support strategic decision-making",
      link: "/bibliostat",
    },
    {
      icon: Coffee,
      title: "Content Café",
      description:
        "Content enrichment and discovery services that enhance patron engagement and improve visibility across collections",
      link: "/content-cafe",
    },
  ];

  const whoweserve = [
    { icon: ShieldCheck, title: "Public Libraries" },
    { icon: Award, title: "Academic Libraries" },
    { icon: Users, title: "Consortia & Systems" },
    { icon: HeartHandshake, title: "Publishers" },
  ];

  return (
    <MainLayout>
      <HeroSection />
      {/* ================= CLEAN INTRO SECTION ================= */}
      <section
        data-aos="fade-up"
        className="relative py-12 md:py-16 lg:py-20 bg-background overflow-hidden"
      >
        <div className="editorial-container">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">

            {/* LEFT : IMAGE (Reduced Width) */}
            <div
              className="relative w-full h-[300px] md:h-[360px] rounded-3xl overflow-hidden shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img
                src={bgImage}   // replace with your image
                alt="LibraryOne supporting libraries and communities"
                className="w-full h-full object-cover"
              />
            </div>

            {/* RIGHT : TEXT CONTENT */}
            <div className="space-y-10">

              {/* Top Heading */}
              <div data-aos="fade-up" data-aos-delay="100">
                <h2 className="editorial-subheadline font-semibold text-balance text-left">
                  Digital library services company dedicated to supporting libraries and their communities
                </h2>
              </div>

              {/* Sub Heading */}
              <h3
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-2xl md:text-3xl font-serif font-medium text-left"
              >
                As an independent company solely focused on libraries, LibraryOne provides:
              </h3>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-8 max-w-xl">

                <div data-aos="fade-up" data-aos-delay="300" className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0b5fa5]/10 to-[#4cc9c0]/10 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#2aa6a6]" />
                  </div>
                  <h4 className="font-semibold text-lg">Continuity of service</h4>
                </div>

                <div data-aos="fade-up" data-aos-delay="400" className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0b5fa5]/10 to-[#4cc9c0]/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-[#2aa6a6]" />
                  </div>
                  <h4 className="font-semibold text-lg">Clear accountability</h4>
                </div>

                <div data-aos="fade-up" data-aos-delay="500" className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0b5fa5]/10 to-[#4cc9c0]/10 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-[#2aa6a6]" />
                  </div>
                  <h4 className="font-semibold text-lg">A roadmap guided by library needs</h4>
                </div>

                <div data-aos="fade-up" data-aos-delay="600" className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0b5fa5]/10 to-[#4cc9c0]/10 flex items-center justify-center flex-shrink-0">
                    <HeartHandshake className="w-5 h-5 text-[#2aa6a6]" />
                  </div>
                  <h4 className="font-semibold text-lg">
                    A long-term steward dedicated to Boundless and related services
                  </h4>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>





      {/* ================= BOUNDLESS CONTINUES ================= */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#2aa6a6]/10 via-[#4cc9c0]/10 to-[#ecfeff]">
        <div className="editorial-container">
          <div className="mx-auto text-center px-6">
            <h2 className="editorial-subheadline font-semibold mb-6">
              Boundless continues—without interruption !
            </h2>

            <p className="editorial-body max-w-6xl mx-auto leading-relaxed">
              LibraryOne is the new independent home of Boundless. The platform remains available, supported,
              and actively stewarded by an experienced team with deep roots in library services, publishing,
              and digital media
            </p>
          </div>
        </div>
      </section>



      {/* ================= PRODUCTS SECTION ================= */}
      <section className="py-14 md:py-16 bg-secondary/5">
        <div className="editorial-container">
          <h2 data-aos="fade-up" className="editorial-subheadline font-semibold text-balance text-center mb-10">
            A connected suite of digital products built for modern libraries
          </h2>

          {/* Mobile Carousel - shows 1 card at a time */}
          <div className="md:hidden max-w-sm mx-auto relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {productFeatures.map((feature, index) => (
                  <CarouselItem key={feature.title} className="pl-2 md:pl-4">
                    <Link
                      to={feature.link}
                      className="group rounded-2xl bg-card border border-border px-6 py-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full"
                    >
                      <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-r from-[#0b5fa5]/10 via-[#2aa6a6]/10 to-[#4cc9c0]/10 flex items-center justify-center">
                        <feature.icon className="w-7 h-7 text-[#2aa6a6]" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4 flex-1">{feature.description}</p>
                      <span className="mt-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0b5fa5] via-[#2aa6a6] to-[#4cc9c0] bg-clip-text text-transparent font-medium group-hover:gap-3 transition-all">
                        Learn more <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4 h-10 w-10 bg-background/80 backdrop-blur-sm" />
              <CarouselNext className="-right-4 h-10 w-10 bg-background/80 backdrop-blur-sm" />
            </Carousel>
          </div>

          {/* Desktop Grid - shows 2 cards on tablet, 3 on desktop */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {productFeatures.map((feature, index) => (
              <div
                key={feature.title}
                data-aos="fade-up"
                data-aos-delay={100 + index * 100}
                className="lg:col-span-2"
                style={index === 3 ? { gridColumnStart: 2 } : undefined}
              >
                <Link
                  to={feature.link}
                  className="group rounded-2xl bg-card border border-border px-6 py-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-r from-[#0b5fa5]/10 via-[#2aa6a6]/10 to-[#4cc9c0]/10 flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-[#2aa6a6]" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 flex-1">{feature.description}</p>
                  <span className="mt-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0b5fa5] via-[#2aa6a6] to-[#4cc9c0] bg-clip-text text-transparent font-medium group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= IMPACT SECTION ================= */}
      <section
        data-aos="fade-up"
        className="py-14 md:py-18 relative bg-gradient-to-br from-slate-50 via-blue-50/60 to-indigo-50/40 overflow-hidden"
      >
        <div className="editorial-container">
          <h2
            data-aos="fade-up"
            className="editorial-subheadline font-semibold text-center mb-10"
          >
            Turning digital strategy into measurable, real-world impact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 lg:gap-x-16 gap-y-8 md:gap-y-12 max-w-5xl mx-auto">

            {/* Access */}
            <div data-aos="fade-right" data-aos-delay="100" className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1 group-hover:text-primary transition">
                  Access
                </h4>
                <p className="text-muted-foreground">
                  Ensure patrons can reliably access digital resources anytime, anywhere—removing barriers and supporting equity.
                </p>
              </div>
            </div>

            {/* Engagement */}
            <div data-aos="fade-left" data-aos-delay="200" className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.122 2.122" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1 group-hover:text-primary transition">
                  Engagement
                </h4>
                <p className="text-muted-foreground">
                  Improve discovery, usability, and interaction across digital collections to better connect patrons with content.
                </p>
              </div>
            </div>

            {/* Community */}
            <div data-aos="fade-right" data-aos-delay="300" className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0A5.002 5.002 0 019 14c0-4.418 3.582-8 8-8s8 3.582 8 8c0 1.637-.756 3.118-1.944 4.143M9.143 12.143A5.002 5.002 0 0117 14c0 1.637-.756 3.118-1.944 4.143" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1 group-hover:text-primary transition">
                  Community Outreach
                </h4>
                <p className="text-muted-foreground">
                  Extend the library’s presence into the community through targeted digital access and outreach initiatives.
                </p>
              </div>
            </div>

            {/* Insight */}
            <div data-aos="fade-left" data-aos-delay="400" className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1 group-hover:text-primary transition">
                  Insight & Decision-Making
                </h4>
                <p className="text-muted-foreground">
                  Turn usage data into meaningful insight to support planning, funding, reporting, and community impact
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= WHO WE SERVE ================= */}
      <section data-aos="fade-up" className="relative py-10 md:py-12 overflow-hidden bg-white">
        <div className="absolute inset-0">
          <img
            src={lib1}
            alt="Library background"
            className="w-full h-full object-cover object-right grayscale brightness-115"
          />
          <div className="absolute inset-0 bg-white/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <h2
            data-aos="zoom-in"
            data-aos-delay="100"
            className="font-serif text-4xl md:text-5xl font-semibold bg-gradient-to-r from-[#0b5fa5] via-[#2aa6a6] to-[#4cc9c0] bg-clip-text text-transparent text-center max-w-3xl mx-auto mb-12"
          >
            Who we serve
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
            {whoweserve.map((item, index) => (
              <div
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-[#0b5fa5]/10 via-[#2aa6a6]/10 to-[#4cc9c0]/10 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-[#2aa6a6]" />
                </div>
                <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <div data-aos="fade-up">
        <CTASection
          title="Let's talk about your library's goals"
          description="LibraryOne partners with libraries to support meaningful outcomes for patrons and communities"
          primaryCTA={{ text: "Contact Us", link: "/contact" }}
        />
      </div>
    </MainLayout>
  );
};

export default Index;