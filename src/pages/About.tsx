import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Target, Users, Lightbulb } from "lucide-react";
import libraryInterior from "@/assets/library-interior.jpg";
import readingRoom from "@/assets/reading-room.jpg";
import aboutImage1 from "@/assets/about1.jpg";
import aboutImage2 from "@/assets/about2.jpg";
import Seo from "@/components/Seo";

const About = () => {
  return (
    <MainLayout>
      <Seo
        title="About LibraryOne"
        description="Learn about LibraryOne’s mission, team, and commitment to long-term stewardship of digital library services like Boundless and more."
        path="/about"
      />
      {/* Hero + Vision (Merged) */}
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        data-aos="fade-up"
      >
        {/* Soft background gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-br
               from-[#0b5fa5]/5 via-[#2aa6a6]/5 to-[#4cc9c0]/5"
        />

        {/* Subtle glow accents */}
        <div className="absolute -top-32 left-1/3 w-96 h-96 bg-[#2aa6a6]/15 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-[#0b5fa5]/15 rounded-full blur-3xl opacity-40" />

        <div className="editorial-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

            {/* LEFT — IMAGE */}
            <div
              className="order-2 lg:order-1"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://www.hdrinc.com/sites/default/files/2022-12/belmar-public-library-reading-room-d2100-1055_1.png"
                  alt="Bright, welcoming modern public library reading room with natural light and community seating"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* RIGHT — TEXT */}
            <div
              className="order-1 lg:order-2 text-center lg:text-left space-y-10"
              data-aos="fade-left"
            >

              {/* Brand headline + underline (sequenced animation) */}
              <div className="space-y-4">
                <h1
                  className="editorial-headline"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <span className="text-foreground">Library</span>
                  <span
                    className="bg-gradient-to-r from-[#0b5fa5] via-[#2aa6a6] to-[#4cc9c0]
                         bg-clip-text text-transparent"
                  >
                    One
                  </span>
                </h1>

                {/* Underline — appears just AFTER the heading */}
                <div
                  className="mx-auto lg:mx-0 h-1 w-24 rounded-full
                       bg-gradient-to-r from-[#0b5fa5] via-[#2aa6a6] to-[#4cc9c0]"
                  data-aos="fade-up"
                  data-aos-delay="250"
                />
              </div>

              {/* Commitment statement */}
              <p
                className="text-lg md:text-xl font-semibold tracking-wide text-foreground"
                data-aos="fade-up"
                data-aos-delay="350"
              >
                Built with purpose. Committed for the long term.
              </p>

              {/* Vision text */}
              <p
                className="editorial-body text-xl leading-relaxed text-foreground/90"
                data-aos="fade-up"
                data-aos-delay="450"
              >
                We envision a future where every library—regardless of size or budget—can
                reach every patron, support their community’s goals, and remain an essential
                civic institution in the digital age.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="editorial-section bg-secondary/20 py-16">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <div className="space-y-6">
              <h2
                className="editorial-subheadline font-semibold text-balance"
                data-aos="fade-right"
              >
                Our Story
              </h2>

              <div
                className="space-y-5 text-muted-foreground
                     text-sm md:text-xl leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <p>
                  LibraryOne was created to ensure continuity, stability, and focus for
                  digital services that libraries depended on
                </p>

                <p>
                  When Baker & Taylor made the decision to wind down Boundless and other
                  digital products, we—former Baker & Taylor colleagues who built the
                  product, served customers, and partnered with suppliers—and a few
                  professionals with long-standing experience in publishing and media
                  came together with a shared conviction: these platforms mattered too
                  much to let them disappear
                </p>

                <p>
                  That conviction led us to form LibraryOne—providing Boundless and
                  related products with a focused, independent home dedicated to their
                  long-term stewardship
                </p>

                <p>
                  LibraryOne is not an experiment. It is the continuation of expertise,
                  relationships, and institutional knowledge—now aligned under a single
                  mission: to support libraries and the communities they serve
                </p>
              </div>
            </div>

            <div
              className="aspect-square rounded-2xl overflow-hidden shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <img
                src={libraryInterior}
                alt="Modern library interior with patrons reading"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>


      <section className="editorial-section bg-gradient-to-r from-[#0b5fa5]/5 via-[#2aa6a6]/5 to-[#4cc9c0]/5 py-14">
        <div className="editorial-container">

          {/* Section Heading */}
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="editorial-subheadline font-semibold text-balance mb-10"
              data-aos="fade-up"
            >
              Continuity You Can Trust
            </h2>
          </div>

          {/* First block: Image LEFT, Text RIGHT */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-14">
            <div className="flex justify-center">
              <img
                src={aboutImage1}
                alt="Team ensuring knowledge transfer and business continuity"
                className="rounded-lg shadow-xl w-full max-w-md h-64 object-cover"
                data-aos="zoom-in"
                data-aos-delay="200"
              />
            </div>

            <div>
              <p
                className="editorial-body text-lg leading-relaxed text-foreground/90"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                For publishers and library partners, continuity matters. The systems,
                workflows, and institutional knowledge that made this business valuable
                did not disappear—they were preserved intentionally
              </p>
            </div>
          </div>

          {/* Second block: Text LEFT, Image RIGHT */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className="editorial-body text-lg leading-relaxed text-foreground/90"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                The same experienced team remains in place, bringing decades of combined
                expertise in content distribution, library services, and publisher
                partnerships. We understand the operational realities of libraries, the
                commercial imperatives of publishers, and the importance of dependable
                execution on both sides
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src={aboutImage2}
                alt="Professional handshake symbolizing trust and strong partnerships"
                className="rounded-lg shadow-xl w-full max-w-md h-64 object-cover"
                data-aos="zoom-in"
                data-aos-delay="300"
              />
            </div>
          </div>

        </div>
      </section>


      {/* Mission */}
      <section
        className="py-20 bg-background"
        data-aos="fade-up"
      >
        <div className="editorial-container">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 items-center">

            {/* Left rail — label */}
            <div className="lg:col-span-3">
              <h3
                  className="editorial-subheadline font-semibold text-balance"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <span className="text-foreground">Miss</span>
                  <span
                    className="bg-gradient-to-r from-[#0b5fa5] via-[#2aa6a6] to-[#4cc9c0]
                         bg-clip-text text-transparent"
                  >
                    ion
                  </span>
                </h3>
            </div>

            {/* Right content */}
            <div className="lg:col-span-9 space-y-6">

              <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-foreground">
                Supporting libraries with purpose, stability, and care
              </h2>

              {/* Gradient underline — same as LibraryOne */}
              <div
                className="h-1 w-24 rounded-full
                     bg-gradient-to-r from-[#0b5fa5] via-[#2aa6a6] to-[#4cc9c0]"
                data-aos="fade-up"
                data-aos-delay="200"
              />

              <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                We empower libraries with trusted digital content and services that help
                them serve patrons equitably, deepen community engagement, and support
                lifelong learning.
              </p>

            </div>

          </div>
        </div>
      </section>



      {/* Team */}
      <section
        className="editorial-section bg-secondary/10 py-16"
        data-aos="fade-up"
      >
        <div className="editorial-container">

          {/* Section Heading */}
          <div
            className="text-center mb-14"
            data-aos="fade-up"
          >
            <h2 className="editorial-subheadline font-semibold text-balance mb-2">
              Our Team
            </h2>
          </div>

          {/* Team Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="text-center space-y-4" data-aos="fade-up" data-aos-delay="100">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80"
                  alt="Leadership & Strategy"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-medium">Leadership & Strategy</p>
            </div>

            <div className="text-center space-y-4" data-aos="fade-up" data-aos-delay="200">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?w=800&q=80"
                  alt="Library Services"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-medium">Library Services</p>
            </div>

            <div className="text-center space-y-4" data-aos="fade-up" data-aos-delay="300">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=800&q=80"
                  alt="Publisher Partnerships"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-medium">Publisher Partnerships</p>
            </div>

            <div className="text-center space-y-4" data-aos="fade-up" data-aos-delay="400">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=800&q=80"
                  alt="Technology & Operations"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-medium">Technology & Operations</p>
            </div>

          </div>
        </div>
      </section>


      {/* Leadership Quote */}
      <section className="editorial-section bg-foreground text-background py-16">
        <div className="editorial-container">
          <div
            className="max-w-3xl mx-auto text-center"
            data-aos="fade-up"
          >
            <blockquote className="text-2xl md:text-3xl font-serif leading-relaxed">
              "Libraries are more than buildings filled with books. They are
              community centers, learning hubs, and gateways to opportunity.
              Our job is to help them thrive in the digital era"
            </blockquote>
          </div>
        </div>
      </section>

      {/* Looking Ahead */}
      <section className="editorial-section py-16">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2
                className="editorial-subheadline font-semibold text-balance"
                data-aos="fade-left"
              >
                Looking Ahead
              </h2>
              <p
                className="editorial-body"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                LibraryOne was created with a clear mandate:
                to be a stable, focused, and accountable partner to libraries for the long term
              </p>
              <p
                className="editorial-body"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                We are building deliberately, investing responsibly, and listening closely—because the work libraries do deserves nothing less
              </p>
            </div>
            <div
              className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <img
                src={readingRoom}
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;