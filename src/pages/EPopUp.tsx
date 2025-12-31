import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Newspaper, Languages, Clock, QrCode, LinkIcon, Users, Sparkles, Target, Users2, Building2, Handshake, UserPlus, BookOpen, Footprints, ArrowRightCircle } from "lucide-react";
import bostonImage from "@/assets/boston.png";
import louisImage from "@/assets/Louis.png";

const EPopUp = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Access newspapers and magazines from over 100 countries in 60+ languages.",
    },
    {
      icon: Newspaper,
      title: "7,000+ Publications",
      description: "From local newspapers to international magazines, we have it all.",
    },
    {
      icon: Languages,
      title: "Multilingual",
      description: "Support diverse communities with content in their native languages.",
    },
    {
      icon: Clock,
      title: "Same-Day Delivery",
      description: "Publications available as soon as they're released, often before print.",
    },
  ];

  return (
    <MainLayout>
      {/* Hero with Image */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28" data-aos="fade-up">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8" data-aos="fade-right" data-aos-delay="200">
              <span className="text-primary font-medium">ePopUp Library</span>
              <h1 className="editorial-headline mt-4 mb-6">
                Extend your library beyond its walls
              </h1>
              <p className="editorial-body mb-8">
                ePopUp Library helps libraries meet their community outreach goals by making digital resources visible, accessible, and relevant in the places where people already are. Take your digital collection directly into their communities—at hospitals, public transport, schools, neighborhoods and more. The possibilities are boundless.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/demo">
                  <Button variant="hero" size="lg">
                    Request Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg" data-aos="zoom-in" data-aos-delay="400">
              <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&q=80"
                alt="People reading digital news on tablets in public spaces like transit and waiting areas"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Is ePopUp Library */}
      <section className="editorial-section bg-secondary/10" data-aos="fade-up">
        <div className="editorial-container">
          <div className="max-w-4xl mx-auto text-center space-y-8 py-16">
            <h2 className="editorial-subheadline" data-aos="fade-up" data-aos-delay="200">
              What Is ePopUp Library
            </h2>
            <p className="editorial-body text-lg leading-relaxed max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="400">
              ePopUp Library is a community outreach platform that enables libraries to create temporary or location-based digital collections that introduce people to library resources, services, and stories—often for the first time.
            </p>
            <p className="editorial-body text-lg leading-relaxed max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="600">
              It is designed not just to provide access, but to spark awareness, connection, and participation.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="editorial-section bg-secondary/20" data-aos="fade-up">
        <div className="editorial-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="editorial-subheadline text-center mb-12" data-aos="fade-up">
              How It Works
            </h2>
            <ul className="space-y-10">
              <li className="flex items-start gap-6" data-aos="fade-right" data-aos-delay="100">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <p className="editorial-body text-lg leading-relaxed">
                  Curate digital collections targeted for these locations.
                </p>
              </li>
              <li className="flex items-start gap-6" data-aos="fade-right" data-aos-delay="200">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <QrCode className="w-6 h-6 text-primary" />
                </div>
                <p className="editorial-body text-lg leading-relaxed">
                  Deploy access through QR codes or simple links
                </p>
              </li>
              <li className="flex items-start gap-6" data-aos="fade-left" data-aos-delay="300">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <LinkIcon className="w-6 h-6 text-primary" />
                </div>
                <p className="editorial-body text-lg leading-relaxed">
                  Provide immediate discovery without barriers
                </p>
              </li>
              <li className="flex items-start gap-6" data-aos="fade-left" data-aos-delay="400">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <p className="editorial-body text-lg leading-relaxed">
                  Guide users toward library membership and services
                </p>
              </li>
            </ul>
            <p className="editorial-body text-lg text-center mt-16 font-medium" data-aos="fade-up" data-aos-delay="600">
              Simple to deploy. Easy to engage. Purpose-built for outreach.
            </p>
          </div>
        </div>
      </section>

      {/* Meet people where they are */}
      <section className="editorial-section bg-secondary/10" data-aos="fade-up">
        <div className="editorial-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="editorial-subheadline text-center mb-12" data-aos="fade-up">
              Meet people where they are.
            </h2>
            <p className="editorial-body text-lg text-center mb-12 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Libraries increasingly serve communities beyond their buildings. ePopUp Library enables libraries to extend their presence into these spaces with purpose and clarity.
            </p>
            <p className="text-center text-muted-foreground mb-10" data-aos="fade-up" data-aos-delay="300">
              With ePopUp Library, libraries can:
            </p>
            <ul className="space-y-10">
              <li className="flex items-start gap-6" data-aos="fade-right" data-aos-delay="400">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <p className="editorial-body text-lg leading-relaxed">
                  Support outreach and engagement initiatives
                </p>
              </li>
              <li className="flex items-start gap-6" data-aos="fade-right" data-aos-delay="500">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users2 className="w-6 h-6 text-primary" />
                </div>
                <p className="editorial-body text-lg leading-relaxed">
                  Reach new and underserved audiences
                </p>
              </li>
              <li className="flex items-start gap-6" data-aos="fade-left" data-aos-delay="600">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <p className="editorial-body text-lg leading-relaxed">
                  Align digital access with community programming
                </p>
              </li>
              <li className="flex items-start gap-6" data-aos="fade-left" data-aos-delay="700">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Handshake className="w-6 h-6 text-primary" />
                </div>
                <p className="editorial-body text-lg leading-relaxed">
                  Reinforce the library’s role as a community partner
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* From discovery to membership */}
      <section className="editorial-section bg-secondary/20" data-aos="fade-up">
        <div className="editorial-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="editorial-subheadline text-center mb-12" data-aos="fade-up">
              From discovery to membership
            </h2>
            <p className="editorial-body text-lg text-center mb-12 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              ePopUp Library is designed to convert interest into action. By introducing people to library resources in community settings, it creates natural pathways to:
            </p>
            <ul className="space-y-10">
              <li className="flex items-start gap-6" data-aos="fade-right" data-aos-delay="300">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <UserPlus className="w-6 h-6 text-primary" />
                </div>
                <p className="editorial-body text-lg leading-relaxed">
                  Library card sign-ups
                </p>
              </li>
              <li className="flex items-start gap-6" data-aos="fade-right" data-aos-delay="400">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <p className="editorial-body text-lg leading-relaxed">
                  Deeper digital engagement
                </p>
              </li>
              <li className="flex items-start gap-6" data-aos="fade-left" data-aos-delay="500">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Footprints className="w-6 h-6 text-primary" />
                </div>
                <p className="editorial-body text-lg leading-relaxed">
                  Increased visits to library branches
                </p>
              </li>
              <li className="flex items-start gap-6" data-aos="fade-left" data-aos-delay="600">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <ArrowRightCircle className="w-6 h-6 text-primary" />
                </div>
                <p className="editorial-body text-lg leading-relaxed">
                  Stronger participation in programs and services
                </p>
              </li>
            </ul>
            <p className="editorial-body text-lg text-center mt-16 font-medium" data-aos="fade-up" data-aos-delay="800">
              ePopUp Library doesn’t replace the physical library—it helps bring people to it.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies - New Styling: Inline Image + Text (No Cards) */}
            {/* Case Studies - Compact Inline Layout with Smaller Images */}
      <section className="editorial-section bg-secondary/10" data-aos="fade-up">
        <div className="editorial-container">
          <h2 className="editorial-subheadline text-center mb-12" data-aos="fade-up">
            Case Studies
          </h2>
          <div className="space-y-16">
            {/* Boston Public Library */}
            <div className="grid lg:grid-cols-2 gap-8 items-center" data-aos="fade-up" data-aos-delay="200">
              <div className="rounded-xl overflow-hidden shadow-md">
                <img
                  src={bostonImage}
                  alt="Boston Public Library ePopUp deployment"
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              <div className="space-y-5">
                <h3 className="text-2xl font-serif font-medium">Boston Public Library</h3>
                <p className="editorial-body leading-relaxed text-muted-foreground">
                  Bringing digital collections to commuters on the MBTA with "Browse, Borrow, Board."
                </p>
                <a
                  href="https://www.bpl.org/news/browse-borrow-board/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                >
                  Learn more
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>

            {/* St. Louis County Library */}
            <div className="grid lg:grid-cols-2 gap-8 items-center lg:grid-flow-dense" data-aos="fade-up" data-aos-delay="400">
              <div className="order-2 lg:order-1 space-y-5">
                <h3 className="text-2xl font-serif font-medium">St. Louis County Library</h3>
                <p className="editorial-body leading-relaxed text-muted-foreground">
                  Extending digital access to community locations with dedicated ePopUp collections, including children's content.
                </p>
                <a
                  href="https://www.slcl.org/resources/epop-up-library"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                >
                  Learn more
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
              <div className="order-1 lg:order-2 rounded-xl overflow-hidden shadow-md">
                <img
                  src={louisImage}
                  alt="St. Louis County Library ePopUp outreach"
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="editorial-section" data-aos="fade-up">
        <div className="editorial-container text-center">
          <h2 className="editorial-subheadline mb-6" data-aos="fade-up" data-aos-delay="200">
            ePopUp Library by LibraryOne 
          </h2>
          <p className="editorial-body max-w-2xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="400">
            ePopUp Library reflects our commitment to helping libraries expand their impact, tell their story, and strengthen connections with the communities they serve
          </p>
        </div>
      </section>
    </MainLayout>
  );
};

export default EPopUp;