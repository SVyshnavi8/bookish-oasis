import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
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
import BookRow from "@/components/BookRow";
import FeatureSection from "@/components/FeatureSection";
import CTASection from "@/components/CTASection";
import readingRoom from "@/assets/reading-room.jpg";
import digitalReading from "@/assets/digital-reading.jpg";
import boundlessVisual from "@/assets/boundless-visual.jpg";
import lib1 from "@/assets/lib1.jpg"; // Background for Who We Serve
import bookCover1 from "@/assets/book-cover-1.jpg";
import bookCover2 from "@/assets/book-cover-2.jpg";
import bookCover3 from "@/assets/book-cover-3.jpg";
import bookCover4 from "@/assets/book-cover-4.jpg";
import bookCover5 from "@/assets/book-cover-5.jpg";
import bookCover6 from "@/assets/book-cover-6.jpg";
import bookCover7 from "@/assets/book-cover-7.jpg";
import bookCover8 from "@/assets/book-cover-8.jpg";

const Index = () => {
  

  const newArrivals = [
    { id: "1", title: "Inner Peace", author: "Self Help", cover: bookCover8 },
    { id: "2", title: "The Duriond", author: "Historical Fiction", cover: bookCover7 },
    { id: "3", title: "Romance", author: "Love Stories", cover: bookCover6 },
    { id: "4", title: "Sci-Fi Worlds", author: "Future Fiction", cover: bookCover5 },
    { id: "5", title: "Biography", author: "Life Stories", cover: bookCover4 },
    { id: "6", title: "Mystery Thriller", author: "Ralicaterie", cover: bookCover3 },
    { id: "7", title: "Ficnon", author: "Contemporary Fiction", cover: bookCover2 },
    { id: "8", title: "The Spurks Novels", author: "Classic Literature", cover: bookCover1 },
  ];
  /* ================= PRODUCT FEATURES ================= */
  const productFeatures = [
    {
      icon: BookOpen,
      title: "Boundless",
      description:
        "A trusted digital content platform that helps libraries extend access, discovery, and engagement beyond their physical walls.",
      link: "/boundless",
    },
    {
      icon: Globe,
      title: "ePopUp Library",
      description:
        "A community outreach platform that brings the library directly into neighborhoods, schools, and partner locations.",
      link: "/epopup",
    },
    {
      icon: Layers,
      title: "TS360",
      description:
        "Tools and services that support informed selection and operational efficiency in collection development.",
      link: "/ts360",
    },
    {
      icon: BarChart3,
      title: "Bibliostat Collect & Connect",
      description:
        "Data, analytics, and insight tools that help libraries demonstrate impact and support strategic decision-making.",
      link: "/bibliostat",
    },
    {
      icon: Coffee,
      title: "Content Café",
      description:
        "Content enrichment and discovery services that enhance patron engagement and improve visibility across collections.",
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

      <section className="editorial-section py-14 md:py-2">
  <div className="editorial-container">
    <div className="max-w-4xl mx-auto space-y-6">

      {/* ================= INTRO ================= */}
      <div className="space-y-4 text-center">
        <h2 className="editorial-subheadline font-semibold text-balance">
          Digital library services company dedicated to supporting libraries and their communities
        </h2>

        <p className="editorial-body max-w-3xl mx-auto">
          We provide trusted digital products and services that help libraries expand access,
          engage patrons, and fulfill their mission in a digital-first world.
        </p>
      </div>

      {/* ================= VALUE PROPOSITION ================= */}
      <div className="space-y-4 pt-2">
        <h3 className="text-lg md:text-xl font-serif font-medium text-center">
          As an independent company solely focused on libraries, LibraryOne provides:
        </h3>

        <div className="grid md:grid-cols-2 gap-5 pt-2">
          <div className="space-y-1 p-5 rounded-lg bg-card border border-border">
            <h4 className="font-semibold text-base">Continuity of service</h4>
            <p className="text-muted-foreground text-sm">
              Reliable, uninterrupted access to digital library resources
            </p>
          </div>

          <div className="space-y-1 p-5 rounded-lg bg-card border border-border">
            <h4 className="font-semibold text-base">Clear accountability</h4>
            <p className="text-muted-foreground text-sm">
              Transparent communication and dedicated support for your library
            </p>
          </div>

          <div className="space-y-1 p-5 rounded-lg bg-card border border-border">
            <h4 className="font-semibold text-base">
              A roadmap guided by library needs
            </h4>
            <p className="text-muted-foreground text-sm">
              Product development driven by the real needs of libraries and their communities
            </p>
          </div>

          <div className="space-y-1 p-5 rounded-lg bg-card border border-border">
            <h4 className="font-semibold text-base">
              A long-term steward dedicated to Boundless and related services
            </h4>
            <p className="text-muted-foreground text-sm">
              Committed to the ongoing success and evolution of Boundless and our digital platform ecosystem
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
<section className="py-12 md:py-14">
  <div className="editorial-container">
    <div className="text-center">
      <h2 className="editorial-subheadline font-semibold text-balance">
        Boundless continues—without interruption
      </h2>

      <p className="editorial-body mt-4 md:mt-6">
        LibraryOne is the new independent home of Boundless. The platform remains
        available, supported, and actively stewarded by an experienced team with
        deep roots in library services, publishing, and digital media.
      </p>
    </div>
  </div>
</section>



   


      
{/* ================= PRODUCTS (NEW FORMAT) ================= */}
<section className="py-14 md:py-16 bg-secondary/5">
  <div className="editorial-container">
    <div className="max-w-7xl mx-auto">

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="editorial-subheadline font-semibold text-balance">
          A connected suite of digital products built for modern libraries
        </h2>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
        {productFeatures.map((feature, index) => (
          <Link
            key={feature.title}
            to={feature.link}
            className={`
              group rounded-2xl bg-card border border-border
              px-6 py-8 text-center
              transition-all duration-300
              hover:shadow-lg hover:-translate-y-1
              lg:col-span-2
              flex flex-col h-full
              ${index === 3 ? "lg:col-start-2" : ""}
            `}
          >
            {/* Icon */}
            <div
              className="w-14 h-14 mx-auto mb-4 rounded-xl
                         bg-gradient-to-r from-[#0b5fa5]/10 via-[#2aa6a6]/10 to-[#4cc9c0]/10
                         flex items-center justify-center"
            >
              <feature.icon className="w-7 h-7 text-[#2aa6a6]" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-4">
              {feature.description}
            </p>

            {/* CTA – pinned to bottom */}
            <span
              className="mt-auto inline-flex items-center justify-center gap-2
                         bg-gradient-to-r from-[#0b5fa5] via-[#2aa6a6] to-[#4cc9c0]
                         bg-clip-text text-transparent font-medium
                         group-hover:gap-3 transition-all"
            >
              Learn more <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        ))}
      </div>

    </div>
  </div>
</section>






{/* ================= Bibliostat Collect & Connect ================= */}
<section className="py-14 md:py-18 bg-background">
  <div className="editorial-container">
    <div className="max-w-6xl mx-auto">

      {/* Heading */}
      
       <div className="text-center mb-10 max-w-3xl mx-auto">
  
  {/* Main Heading */}
  <h2 className="editorial-subheadline font-semibold whitespace-nowrap">
  Turning digital strategy into measurable, real-world impact.
</h2>


  
  

  

</div>


      {/* Capability Menu */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">

        {/* Item */}
        <div className="flex items-start gap-4 group">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
            A
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-1 group-hover:text-primary transition">
              Access
            </h4>
            <p className="text-muted-foreground">
              Ensure patrons can reliably access digital resources anytime,
              anywhere—removing barriers and supporting equity.
            </p>
          </div>
        </div>

        {/* Item */}
        <div className="flex items-start gap-4 group">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
            E
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-1 group-hover:text-primary transition">
              Engagement
            </h4>
            <p className="text-muted-foreground">
              Improve discovery, usability, and interaction across digital
              collections to better connect patrons with content.
            </p>
          </div>
        </div>

        {/* Item */}
        <div className="flex items-start gap-4 group">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
            C
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-1 group-hover:text-primary transition">
              Community Outreach
            </h4>
            <p className="text-muted-foreground">
              Extend the library’s presence into the community through targeted
              digital access and outreach initiatives.
            </p>
          </div>
        </div>

        {/* Item */}
        <div className="flex items-start gap-4 group">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
            I
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-1 group-hover:text-primary transition">
              Insight & Decision-Making
            </h4>
            <p className="text-muted-foreground">
              Turn usage data into meaningful insight to support planning,
              funding, reporting, and community impact.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

      

      {/* Who We Serve Section */}
<section className="relative py-10 md:py-12 overflow-hidden bg-white">
  {/* Background */}
  <div className="absolute inset-0">
    <img
      src={lib1}
      alt="Library background"
      className="w-full h-full object-cover object-right grayscale brightness-115"
    />
    <div className="absolute inset-0 bg-white/90" />
  </div>

  {/* Content */}
  <div className="relative z-10 container mx-auto px-4 sm:px-6">
    
    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-12">
      <h2 className="font-serif text-4xl md:text-5xl font-semibold bg-gradient-to-r from-[#0b5fa5] via-[#2aa6a6] to-[#4cc9c0] bg-clip-text text-transparent">
        Who We Serve
      </h2>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
      {whoweserve.map((item) => (
        <div key={item.title} className="text-center">
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


      

      <CTASection
        title="Let's Talk About Your Library's Goals"
        description="Whether you're focused on access, outreach, discovery, or insight, LibraryOne partners with libraries to support meaningful outcomes for patrons and communities."
        primaryCTA={{ text: "Contact Us", link: "/contact" }}
      />
    </MainLayout>
  );
};

export default Index;