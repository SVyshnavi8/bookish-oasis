import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Award, Users, HeartHandshake } from "lucide-react";
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
  const popularBooks = [
    { id: "1", title: "The Spurks Novels", author: "Classic Literature", cover: bookCover1 },
    { id: "2", title: "Ficnon", author: "Contemporary Fiction", cover: bookCover2 },
    { id: "3", title: "Mystery Thriller", author: "Ralicaterie", cover: bookCover3 },
    { id: "4", title: "Biography", author: "Life Stories", cover: bookCover4 },
    { id: "5", title: "Sci-Fi Worlds", author: "Future Fiction", cover: bookCover5 },
    { id: "6", title: "Romance", author: "Love Stories", cover: bookCover6 },
    { id: "7", title: "The Duriond", author: "Historical Fiction", cover: bookCover7 },
    { id: "8", title: "Inner Peace", author: "Self Help", cover: bookCover8 },
  ];

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

  const whoweserve = [
    { icon: ShieldCheck, title: "Public Libraries" },
    { icon: Award, title: "Academic Libraries" },
    { icon: Users, title: "Consortia & Systems" },
    { icon: HeartHandshake, title: "Publishers" },
  ];

  return (
    <MainLayout>
      <HeroSection />

      <section className="editorial-section">
        <div className="editorial-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <h2 className="editorial-subheadline text-balance text-center">
                Digital library services company dedicated to supporting libraries and their communities
              </h2>
              <p className="editorial-body text-center max-w-3xl mx-auto">
                We provide trusted digital products and services that help libraries expand access, engage patrons, and fulfill their mission in a digital-first world.
              </p>
            </div>

            <div className="pt-8 space-y-6">
              <h3 className="text-xl md:text-2xl font-serif font-medium text-center">
                As an independent company solely focused on libraries, LibraryOne provides:
              </h3>
              <div className="grid md:grid-cols-2 gap-6 pt-4">
                <div className="space-y-2 p-6 rounded-lg bg-card border border-border">
                  <h4 className="font-semibold text-lg">Continuity of service</h4>
                  <p className="text-muted-foreground text-sm">
                    Reliable, uninterrupted access to digital library resources
                  </p>
                </div>
                <div className="space-y-2 p-6 rounded-lg bg-card border border-border">
                  <h4 className="font-semibold text-lg">Clear accountability</h4>
                  <p className="text-muted-foreground text-sm">
                    Transparent communication and dedicated support for your library
                  </p>
                </div>
                <div className="space-y-2 p-6 rounded-lg bg-card border border-border">
                  <h4 className="font-semibold text-lg">A roadmap guided by library needs</h4>
                  <p className="text-muted-foreground text-sm">
                    Product development driven by the real needs of libraries and their communities
                  </p>
                </div>
                <div className="space-y-2 p-6 rounded-lg bg-card border border-border">
                  <h4 className="font-semibold text-lg">A long-term steward dedicated to Boundless and related services</h4>
                  <p className="text-muted-foreground text-sm">
                    Committed to the ongoing success and evolution of Boundless and our digital platform ecosystem
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6 space-y-4 max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl font-serif font-medium text-center">
                Boundless continues—without interruption.
              </p>
              <p className="editorial-body text-center">
                LibraryOne is the new independent home of Boundless. The platform remains available, supported, and actively stewarded by an experienced team with deep roots in library services, publishing, and digital media.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BookRow title="Popular This Week" books={popularBooks} />

      {/* Products Section */}
      <section className="editorial-section bg-secondary/5">
        <div className="editorial-container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="editorial-subheadline">
                A connected suite of digital products built for modern libraries
              </h2>
            </div>

            {/* Product Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {/* Boundless */}
              <Link 
                to="/boundless" 
                className="group block rounded-2xl overflow-hidden bg-card border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="text-center space-y-3 p-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">B</span>
                    </div>
                    <h3 className="text-2xl font-serif font-semibold">Boundless</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    A trusted digital content platform that helps libraries extend access, discovery, and engagement beyond their physical walls.
                  </p>
                  <span className="inline-flex items-center gap-2 mt-4 text-primary font-medium group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>

              {/* ePopUp Library */}
              <Link 
                to="/epopup" 
                className="group block rounded-2xl overflow-hidden bg-card border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="text-center space-y-3 p-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">eP</span>
                    </div>
                    <h3 className="text-2xl font-serif font-semibold">ePopUp Library</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    A community outreach platform that brings the library directly into neighborhoods, schools, events, and partner locations.
                  </p>
                  <span className="inline-flex items-center gap-2 mt-4 text-primary font-medium group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>

              {/* TS360 */}
              <Link 
                to="/ts360" 
                className="group block rounded-2xl overflow-hidden bg-card border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="text-center space-y-3 p-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">T</span>
                    </div>
                    <h3 className="text-2xl font-serif font-semibold">TS360</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Comprehensive collection management and analytics platform that helps libraries understand usage, optimize acquisitions, and maximize collection impact.
                  </p>
                  <span className="inline-flex items-center gap-2 mt-4 text-primary font-medium group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>

              {/* Bibliostat Collect & Connect */}
              <Link 
                to="/bibliostat" 
                className="group block rounded-2xl overflow-hidden bg-card border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="text-center space-y-3 p-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">B</span>
                    </div>
                    <h3 className="text-2xl font-serif font-semibold">Bibliostat Collect & Connect</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Data, analytics, and insight tools that help libraries understand usage, demonstrate impact, and support strategic decision-making.
                  </p>
                  <span className="inline-flex items-center gap-2 mt-4 text-primary font-medium group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>

              {/* Content Café */}
              <Link 
                to="/content-cafe" 
                className="group block rounded-2xl overflow-hidden bg-card border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="text-center space-y-3 p-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">C</span>
                    </div>
                    <h3 className="text-2xl font-serif font-semibold">Content Café</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Content enrichment and discovery services that enhance patron engagement and improve visibility across collections.
                  </p>
                  <span className="inline-flex items-center gap-2 mt-4 text-primary font-medium group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BookRow title="New Arrivals" books={newArrivals} />

      {/* Who We Serve Section - Added after Staff Picks */}
      <section className="relative py-16 md:py-20 overflow-hidden bg-white">
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
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary">
              Who We Serve
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
            {whoweserve.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookRow title="Staff Picks" books={popularBooks.slice().reverse()} />

      <CTASection
        title="Let's Talk About Your Library's Goals"
        description="Whether you're focused on access, outreach, discovery, or insight, LibraryOne partners with libraries to support meaningful outcomes for patrons and communities."
        primaryCTA={{ text: "Contact Us", link: "/contact" }}
      />
    </MainLayout>
  );
};

export default Index;