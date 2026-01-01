import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Star, Bookmark, MessageSquare, Sparkles, FileText, BookMarked, Eye, Link2, Heart, Target, Wrench, DollarSign, CheckCircle } from "lucide-react";

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
      <section className="pt-32 pb-20 md:pt-40 md:pb-28" data-aos="fade-up">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8" data-aos="fade-right" data-aos-delay="200">
              <span className="bg-gradient-to-r from-[#0b5fa5] via-[#2aa6a6] to-[#4cc9c0] bg-clip-text text-transparent font-medium">Content Café</span>
              <h1 className="editorial-headline">
                Enrich discovery. Deepen engagement. Do more with your collections
              </h1>
              <p className="editorial-body">
                Enhance your library collections through rich content enrichment that improves discovery, understanding, and engagement for patrons
              </p>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg" data-aos="zoom-in" data-aos-delay="400">
              <img
                src="https://iii.com/wp-content/uploads/2022/03/image-3.png"
                alt="Enriched library catalog with book covers, reviews, ratings, and summaries"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Content Café? */}
      <section className="editorial-section bg-secondary/10" data-aos="fade-up">
        <div className="editorial-container">
          <div className="max-w-4xl mx-auto text-center space-y-8 py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#0b5fa5]/10 via-[#2aa6a6]/10 to-[#4cc9c0]/10 mb-6" data-aos="flip-up" data-aos-delay="200">
              <Sparkles className="w-8 h-8 text-[#2aa6a6]" />
            </div>
            <h2 className="editorial-subheadline" data-aos="fade-up" data-aos-delay="300">
              Why Content Café?
            </h2>
            <p className="editorial-body text-lg leading-relaxed max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="500">
              Libraries invest heavily in their collections, yet too often those materials remain under-discovered or under-used. Content Café addresses this challenge by adding meaningful context—descriptions, reviews, and related content—that helps patrons understand what materials are about and why they matter.
            </p>
          </div>
        </div>
      </section>

      {/* Content Enrichment Capabilities - Style 1: Clean List */}
      <section className="editorial-section bg-secondary/20" data-aos="fade-up">
        <div className="editorial-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="editorial-subheadline text-center mb-12" data-aos="fade-up">
              Content Enrichment Capabilities
            </h2>
            <ul className="space-y-10">
              <li className="flex items-start gap-6" data-aos="fade-right" data-aos-delay="100">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#0b5fa5]/10 via-[#2aa6a6]/10 to-[#4cc9c0]/10 flex items-center justify-center">
                  <BookMarked className="w-6 h-6 text-[#2aa6a6]" />
                </div>
                <p className="editorial-body text-lg leading-relaxed">
                  Enhances bibliographic records with rich, curated content that supports discovery and decision-making.
                </p>
              </li>
              <li className="flex items-start gap-6" data-aos="fade-right" data-aos-delay="200">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#0b5fa5]/10 via-[#2aa6a6]/10 to-[#4cc9c0]/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-[#2aa6a6]" />
                </div>
                <p className="editorial-body text-lg leading-relaxed">
                  Clear, informative descriptions help patrons quickly understand the scope, tone, and relevance of materials—reducing friction and uncertainty in the discovery process.
                </p>
              </li>
              <li className="flex items-start gap-6" data-aos="fade-left" data-aos-delay="300">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#0b5fa5]/10 via-[#2aa6a6]/10 to-[#4cc9c0]/10 flex items-center justify-center">
                  <Star className="w-6 h-6 text-[#2aa6a6]" />
                </div>
                <p className="editorial-body text-lg leading-relaxed">
                  Thoughtfully selected reviews and connections to related titles encourage exploration, comparison, and deeper engagement across collections.
                </p>
              </li>
              <li className="flex items-start gap-6" data-aos="fade-left" data-aos-delay="400">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#0b5fa5]/10 via-[#2aa6a6]/10 to-[#4cc9c0]/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-[#2aa6a6]" />
                </div>
                <p className="editorial-body text-lg leading-relaxed">
                  Helps patrons move beyond simple searching to informed discovery—supporting browsing, serendipity, and curiosity.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

            {/* Better content leads to better discovery - New Style: Inline Icons with Accent Lines */}
      <section className="editorial-section bg-secondary/10" data-aos="fade-up">
        <div className="editorial-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="editorial-subheadline text-center mb-12" data-aos="fade-up">
              Better content leads to better discovery.
            </h2>
            <p className="editorial-body text-lg text-center mb-12 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Enhanced records make it easier for patrons to:
            </p>

            <div className="space-y-12">
              <div className="flex items-center gap-8" data-aos="fade-right" data-aos-delay="300">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#0b5fa5]/10 via-[#2aa6a6]/10 to-[#4cc9c0]/10 flex items-center justify-center">
                    <Eye className="w-10 h-10 text-[#2aa6a6]" />
                  </div>
                </div>
                <div className="flex-1 border-l-4 border-[#2aa6a6] pl-8">
                  <p className="editorial-body text-xl leading-relaxed">
                    Understand what a title is about before selecting it
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-8" data-aos="fade-right" data-aos-delay="400">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#0b5fa5]/10 via-[#2aa6a6]/10 to-[#4cc9c0]/10 flex items-center justify-center">
                    <Link2 className="w-10 h-10 text-[#2aa6a6]" />
                  </div>
                </div>
                <div className="flex-1 border-l-4 border-[#2aa6a6] pl-8">
                  <p className="editorial-body text-xl leading-relaxed">
                    Discover related materials they may not have searched for explicitly
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-8" data-aos="fade-left" data-aos-delay="500">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#0b5fa5]/10 via-[#2aa6a6]/10 to-[#4cc9c0]/10 flex items-center justify-center">
                    <Heart className="w-10 h-10 text-[#2aa6a6]" />
                  </div>
                </div>
                <div className="flex-1 border-l-4 border-[#2aa6a6] pl-8">
                  <p className="editorial-body text-xl leading-relaxed">
                    Engage more deeply with collections across formats and subjects
                  </p>
                </div>
              </div>
            </div>

            <p className="editorial-body text-lg text-center mt-16 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="600">
              For libraries, this means improved visibility and usage of existing collections—without acquiring additional content.
            </p>
          </div>
        </div>
      </section>

      {/* Designed for libraries. Priced for sustainability. - Style 3: Accent Bar */}
      <section className="editorial-section bg-white" data-aos="fade-up">
        <div className="editorial-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-8 py-3 bg-gradient-to-r from-[#0b5fa5]/10 via-[#2aa6a6]/10 to-[#4cc9c0]/10 rounded-full mb-6" data-aos="fade-up">
                <h2 className="editorial-subheadline text-[#2aa6a6]">Designed for libraries. Priced for sustainability.</h2>
              </div>
            </div>
            <p className="editorial-body text-lg text-center mb-12 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Content Café was built with a clear understanding of library budgets and priorities. It delivers essential enrichment capabilities without unnecessary complexity or cost.
            </p>
            <p className="text-center text-muted-foreground mb-10" data-aos="fade-up" data-aos-delay="300">
              Key advantages include:
            </p>
            <div className="space-y-8">
              <div className="flex items-center gap-6 border-l-4 border-[#2aa6a6] pl-8 py-4" data-aos="fade-right" data-aos-delay="400">
                <Target className="w-8 h-8 text-[#2aa6a6] flex-shrink-0" />
                <p className="editorial-body">A focused feature set aligned with real library needs</p>
              </div>
              <div className="flex items-center gap-6 border-l-4 border-[#2aa6a6] pl-8 py-4" data-aos="fade-right" data-aos-delay="500">
                <Wrench className="w-8 h-8 text-[#2aa6a6] flex-shrink-0" />
                <p className="editorial-body">Simple implementation and maintenance</p>
              </div>
              <div className="flex items-center gap-6 border-l-4 border-[#2aa6a6] pl-8 py-4" data-aos="fade-left" data-aos-delay="600">
                <DollarSign className="w-8 h-8 text-[#2aa6a6] flex-shrink-0" />
                <p className="editorial-body">Transparent, predictable pricing</p>
              </div>
              <div className="flex items-center gap-6 border-l-4 border-[#2aa6a6] pl-8 py-4" data-aos="fade-left" data-aos-delay="700">
                <CheckCircle className="w-8 h-8 text-[#2aa6a6] flex-shrink-0" />
                <p className="editorial-body">A cost-effective alternative to more expensive enrichment solutions</p>
              </div>
            </div>
            <p className="editorial-body text-lg text-center mt-12 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="800">
              Libraries can enhance discovery and engagement without over-investing in features they don’t need.
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
      <section className="editorial-section bg-gradient-to-r from-[#0b5fa5]/5 via-[#2aa6a6]/5 to-[#4cc9c0]/5 py-16" data-aos="fade-up">
        <div className="editorial-container text-center">
          <p className="editorial-body text-lg max-w-4xl mx-auto mb-8 text-foreground/80" data-aos="fade-up" data-aos-delay="100">
            Content Café reflects LibraryOne’s commitment to providing focused, high-value digital services that help libraries maximize impact while respecting budgets and workflows.
          </p>
          <div data-aos="zoom-in" data-aos-delay="700">
            <Link to="/demo">
              <Button variant="hero" size="lg">
                Get Started
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