import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Newspaper, Languages, Clock, QrCode, LinkIcon, Users, Sparkles, Target, Users2, Building2, Handshake, UserPlus, BookOpen, Footprints, ArrowRightCircle } from "lucide-react";
import bostonImage from "@/assets/boston1.png";
import louisImage from "@/assets/Louis.png";
import extendImage from "@/assets/beyond2.jpg";
import epopupImage from "@/assets/epopup.jpg";

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
      <section className="pt-32 pb-12 md:pt-40 md:pb-16" data-aos="fade-up">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8" data-aos="fade-right" data-aos-delay="200">
              <span className="bg-gradient-to-r from-[#0b5fa5] via-[#2aa6a6] to-[#4cc9c0] bg-clip-text text-transparent font-medium">ePopUp Library</span>
              <h1 className="editorial-headline mt-4 mb-6">
                Extend your library beyond its walls -
                <span className="block font-serif italic bg-gradient-to-r from-[#0b5fa5] via-[#2aa6a6] to-[#4cc9c0] bg-clip-text text-transparent">
                  The possibilities are boundless
                </span>
              </h1>
              <p className="editorial-body mb-8">
                ePopUp Library helps libraries meet their community outreach goals by making digital resources visible, accessible, and relevant in the places where people already are. Take your digital collection directly into their communities—at hospitals, public transport, schools, neighborhoods and more
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
                // src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&q=80"
                src={extendImage}
                alt="People reading digital news on tablets in public spaces like transit and waiting areas"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Is ePopUp Library */}
      <section
        className="editorial-section bg-secondary/10 py-10 md:py-12"
        data-aos="fade-up"
      >
        <div className="editorial-container">
          <div className="max-w-4xl mx-auto text-center space-y-3 py-2">
            <h2 className="editorial-subheadline font-semibold text-balance mt-6"
              data-aos="fade-up"
              data-aos-delay="200">What is ePopUp Library?</h2>
            <p
              className="editorial-body text-lg leading-relaxed max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              ePopUp Library is a community outreach platform that enables libraries to
              create temporary or location-based digital collections that introduce
              people to library resources, services, and stories—often for the first time.
            </p>
            <div className="mt-14 text-center">
              <p className="text-lg md:text-xl font-semibold text-foreground tracking-wide"
                data-aos="fade-up"
                data-aos-delay="600">
                It is designed not just to provide access, but to spark awareness,
                connection, and participation
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* How It Works */}
      <section
        className="editorial-section bg-secondary/20 py-12 md:py-16"
        data-aos="fade-up"
      >
        <div className="editorial-container">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* LEFT : TEXT */}
            <div className="flex flex-col space-y-8">

              {/* Section Title – centered within LEFT column */}
              <h2
                className="editorial-subheadline font-semibold text-balance text-center"
                data-aos="fade-up"
              >
                How it works
              </h2>

              <ul className="space-y-6">
                <li
                  className="flex items-start gap-5"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#0b5fa5]/10 via-[#2aa6a6]/10 to-[#4cc9c0]/10 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-[#2aa6a6]" />
                  </div>
                  <p className="editorial-body text-lg leading-relaxed">
                    Curate digital collections targeted for these locations.
                  </p>
                </li>

                <li
                  className="flex items-start gap-5"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#0b5fa5]/10 via-[#2aa6a6]/10 to-[#4cc9c0]/10 flex items-center justify-center">
                    <QrCode className="w-6 h-6 text-[#2aa6a6]" />
                  </div>
                  <p className="editorial-body text-lg leading-relaxed">
                    Deploy access through QR codes or simple links
                  </p>
                </li>

                <li
                  className="flex items-start gap-5"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#0b5fa5]/10 via-[#2aa6a6]/10 to-[#4cc9c0]/10 flex items-center justify-center">
                    <LinkIcon className="w-6 h-6 text-[#2aa6a6]" />
                  </div>
                  <p className="editorial-body text-lg leading-relaxed">
                    Provide immediate discovery without barriers
                  </p>
                </li>

                <li
                  className="flex items-start gap-5"
                  data-aos="fade-left"
                  data-aos-delay="400"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#0b5fa5]/10 via-[#2aa6a6]/10 to-[#4cc9c0]/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#2aa6a6]" />
                  </div>
                  <p className="editorial-body text-lg leading-relaxed">
                    Guide users toward library membership and services
                  </p>
                </li>
              </ul>
            </div>

            {/* RIGHT : IMAGE – slightly reduced height */}
            <div
              className="relative w-full h-[320px] md:h-[380px] rounded-3xl overflow-hidden shadow-lg order-first lg:order-last"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img
                src="https://images.prismic.io/msj-dev/b40a773a-f054-4a89-bb89-39907fa9d4e8_art-gallery-visitor-scanning-qr-code-2022-03-31-17-39-39-utc.jpg?auto=compress,format&w=1200"
                alt="Visitor scanning a QR code poster to access digital content in a public space"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg md:text-2xl font-semibold text-foreground tracking-wide text-center mt-8">
              Simple to deploy. Easy to engage. Purpose-built for outreach
            </p>
          </div>
        </div>
      </section>


      {/* Meet people where they are */}
      <section
        className="editorial-section bg-secondary/10 py-12 md:py-16"
        data-aos="fade-up"
      >
        <div className="editorial-container w-full">
          {/* Section Title */}
          <h2
            className="editorial-subheadline font-semibold text-balance text-center mb-14"
            data-aos="fade-up"
          >
            Meet people where they are
          </h2>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* LEFT: IMAGE – further reduced height */}
            <div
              className="relative w-full h-[360px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <img
                src={epopupImage}
                alt="People using digital devices together in a public community space"
                className="w-full h-full object-cover"
              />
            </div>

            {/* RIGHT: TEXT */}
            <div className="space-y-8">

              <p
                className="editorial-body text-lg text-center max-w-3xl mx-auto lg:text-left lg:mx-0"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Libraries increasingly serve communities beyond their buildings.
                ePopUp Library enables libraries to extend their presence into these
                spaces with purpose and clarity
              </p>

              <p
                className="text-center text-muted-foreground lg:text-left"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                With ePopUp Library, libraries can:
              </p>

              {/* Staggered benefits – tightened but readable */}
              <div className="space-y-6">
                <div
                  className="flex items-center gap-5 max-w-lg"
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#0b5fa5]/10 via-[#2aa6a6]/10 to-[#4cc9c0]/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-[#2aa6a6]" />
                  </div>
                  <p className="editorial-body text-lg">
                    Support outreach and engagement initiatives
                  </p>
                </div>

                <div
                  className="flex items-center gap-5 max-w-lg ml-auto"
                  data-aos="fade-left"
                  data-aos-delay="500"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#0b5fa5]/10 via-[#2aa6a6]/10 to-[#4cc9c0]/10 flex items-center justify-center">
                    <Users2 className="w-6 h-6 text-[#2aa6a6]" />
                  </div>
                  <p className="editorial-body text-lg">
                    Reach new and underserved audiences
                  </p>
                </div>

                <div
                  className="flex items-center gap-5 max-w-lg"
                  data-aos="fade-right"
                  data-aos-delay="600"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#0b5fa5]/10 via-[#2aa6a6]/10 to-[#4cc9c0]/10 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-[#2aa6a6]" />
                  </div>
                  <p className="editorial-body text-lg">
                    Align digital access with community programming
                  </p>
                </div>

                <div
                  className="flex items-center gap-5 max-w-lg ml-auto"
                  data-aos="fade-left"
                  data-aos-delay="700"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#0b5fa5]/10 via-[#2aa6a6]/10 to-[#4cc9c0]/10 flex items-center justify-center">
                    <Handshake className="w-6 h-6 text-[#2aa6a6]" />
                  </div>
                  <p className="editorial-body text-lg">
                    Reinforce the library’s role as a community partner
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* From discovery to membership */}
      <section className="editorial-section bg-secondary/20 py-14 md:py-18" data-aos="fade-up">
        <div className="editorial-container">
          <div className="max-w-6xl mx-auto text-center">

            {/* Heading */}
            <h2 className="editorial-subheadline font-semibold text-balance text-center mb-10" data-aos="fade-up">
              From discovery to membership
            </h2>

            <p
              className="editorial-body text-lg max-w-3xl mx-auto mb-16"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              ePopUp Library is designed to convert interest into action. By introducing
              people to library resources in community settings, it creates natural
              pathways to:
            </p>

            {/* Journey Flow */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">

              <div data-aos="fade-up" data-aos-delay="300">
                <UserPlus className="w-8 h-8 text-[#2aa6a6] mx-auto mb-4" />
                <p className="editorial-body text-lg">
                  Library card sign-ups
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="400">
                <BookOpen className="w-8 h-8 text-[#2aa6a6] mx-auto mb-4" />
                <p className="editorial-body text-lg">
                  Deeper digital engagement
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="500">
                <Footprints className="w-8 h-8 text-[#2aa6a6] mx-auto mb-4" />
                <p className="editorial-body text-lg">
                  Increased visits to library branches
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="600">
                <ArrowRightCircle className="w-8 h-8 text-[#2aa6a6] mx-auto mb-4" />
                <p className="editorial-body text-lg">
                  Stronger participation in programs and services
                </p>
              </div>

            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg md:text-2xl font-semibold text-foreground tracking-wide text-center mt-8"
              data-aos="fade-up"
              data-aos-delay="600">
              ePopUp Library doesn’t replace the physical library — it helps bring people to it
            </p>
          </div>
        </div>
      </section>


      {/* Case Studies - New Styling: Inline Image + Text (No Cards) */}
      <section className="editorial-section bg-secondary/10 pt-8 pb-12" data-aos="fade-up">
        <div className="editorial-container">
          <h2
            className="editorial-subheadline font-semibold text-balance text-center mb-14"
            data-aos="fade-up"
          >
            Case studies
          </h2>

          <div className="space-y-16">

            {/* Boston Public Library */}
            <div
              className="grid lg:grid-cols-2 gap-8 items-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {/* IMAGE */}
              <div className="rounded-xl overflow-hidden shadow-md bg-muted/10">
                <img
                  src={bostonImage}
                  alt="Boston Public Library ePopUp deployment"
                  className="w-full h-auto object-contain md:h-96 md:object-cover"
                />
              </div>

              {/* TEXT */}
              <div className="space-y-5">
                <h3 className="text-2xl font-serif font-medium">
                  Boston Public Library
                </h3>

                <p className="editorial-body leading-relaxed text-muted-foreground">
                  Bringing digital collections to commuters on the MBTA with
                  “Browse, Borrow, Board”
                </p>

                <a
                  href="https://www.bpl.org/news/browse-borrow-board/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#2aa6a6] hover:text-[#2aa6a6]/80 font-medium"
                >
                  Learn more
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>

            {/* St. Louis County Library */}
            <div
              className="grid lg:grid-cols-2 gap-8 items-center lg:grid-flow-dense"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {/* TEXT */}
              <div className="order-2 lg:order-1 space-y-5">
                <h3 className="text-2xl font-serif font-medium">
                  St. Louis County Library
                </h3>

                <p className="editorial-body leading-relaxed text-muted-foreground">
                  Extending digital access to community locations with dedicated ePopUp
                  collections, including children&apos;s content
                </p>

                <a
                  href="https://www.slcl.org/resources/epop-up-library"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#2aa6a6] hover:text-[#2aa6a6]/80 font-medium"
                >
                  Learn more
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>

              {/* IMAGE */}
              <div className="order-1 lg:order-2 rounded-xl overflow-hidden shadow-md bg-muted/10">
                <img
                  src={louisImage}
                  alt="St. Louis County Library ePopUp outreach"
                  className="w-full h-auto object-contain md:h-96 md:object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* CTA */}
      <section
        className="relative editorial-section py-10 md:py-14 overflow-hidden bg-gradient-to-b from-transparent to-secondary/5"
        data-aos="fade-up"
      >
        {/* Subtle abstract wave background */}
        <div className="absolute inset-0 -z-10">
          <img
            src="https://www.shutterstock.com/image-vector/abstract-teal-wavy-background-smooth-260nw-2625445239.jpg"
            alt="Soft flowing teal and cyan abstract waves background"
            className="w-full h-full object-cover opacity-20 scale-110"
          />
        </div>

        <div className="editorial-container text-center relative z-10">
          <h2
            className="editorial-subheadline font-semibold text-balance text-center mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            ePopUp Library
          </h2>

          <p
            className="editorial-body text-lg md:text-xl max-w-4xl mx-auto leading-snug"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            ePopUp Library reflects our commitment to helping libraries expand their impact,
            <br />
            tell their story, and strengthen connections with the communities they serve
          </p>
          <div
            data-aos="zoom-in"
            data-aos-delay="700"
            className="mt-8 md:mt-10"
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

export default EPopUp;