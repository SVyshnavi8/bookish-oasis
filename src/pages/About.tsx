import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Target, Users, Lightbulb } from "lucide-react";
import libraryInterior from "@/assets/library-interior.jpg";
import readingRoom from "@/assets/reading-room.jpg";

const About = () => {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="editorial-container">
          <div className="max-w-3xl">
            <h1 
              className="editorial-headline mb-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className="text-foreground">Library</span>
              <span className="bg-gradient-to-r from-[#0b5fa5] via-[#2aa6a6] to-[#4cc9c0] bg-clip-text text-transparent">One</span>
            </h1>
            <p 
              className="text-lg md:text-xl font-semibold text-foreground tracking-wide mt-8"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Built with purpose. Committed for the long term
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
<section className="editorial-section bg-gradient-to-r from-[#0b5fa5]/5 via-[#2aa6a6]/5 to-[#4cc9c0]/5 py-16">
  <div className="editorial-container">
    <div className="max-w-5xl mx-auto text-center">
      <h2 
        className="editorial-subheadline font-semibold text-balance text-center mb-6"
        data-aos="fade-up"
      >
        Vision
      </h2>

      <p 
        className="editorial-body text-xl leading-relaxed max-w-5xl mx-auto text-foreground/90"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        We envision a future where every library—regardless of size or budget—can reach every patron, support their community’s goals, and remain an essential civic institution in the digital age.
      </p>
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
                className="space-y-4 text-muted-foreground leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <p>
                  LibraryOne was created to ensure continuity, stability, and focus for digital services that libraries depended on.
                </p>
                <p>
                  When Baker & Taylor made the decision to wind down Boundless and other digital products, we—former Baker & Taylor colleagues who built the product, served customers, and partnered with suppliers—and a few professionals with long-standing experience in publishing and media came together with a shared conviction: these platforms mattered too much to let them disappear.
                </p>
                <p>
                  That conviction led us to form LibraryOne—providing Boundless and related products with a focused, independent home dedicated to their long-term stewardship.
                </p>
                <p>
                  LibraryOne is not an experiment. It is the continuation of expertise, relationships, and institutional knowledge—now aligned under a single mission: to support libraries and the communities they serve.
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
                alt="LibraryOne headquarters"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Continuity */}
      <section className="editorial-section bg-gradient-to-r from-[#0b5fa5]/5 via-[#2aa6a6]/5 to-[#4cc9c0]/5 py-16">
        <div className="editorial-container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 
              className="editorial-subheadline font-semibold text-balance text-center mb-6"
              data-aos="fade-up"
            >
              Continuity You Can Trust
            </h2>
            <p 
              className="editorial-body text-lg leading-relaxed max-w-3xl mx-auto text-foreground/90"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              For publishers and library partners, continuity matters. The systems, workflows, and institutional knowledge that made this business valuable did not disappear—they were preserved intentionally.
            </p>
            <p 
              className="editorial-body text-lg leading-relaxed max-w-3xl mx-auto text-foreground/90"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              The same experienced team remains in place, bringing decades of combined expertise in content distribution, library services, and publisher partnerships. We understand the operational realities of libraries, the commercial imperatives of publishers, and the importance of dependable execution on both sides.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Team */}
      <section className="editorial-section bg-secondary/10 py-16">
        <div className="editorial-container">
          {/* Mission */}
          <div 
            className="max-w-4xl mx-auto text-center space-y-6 mb-16"
            data-aos="fade-up"
          >
            <h2 className="editorial-subheadline font-semibold text-balance text-center mb-4">Our Mission</h2>
            <p className="editorial-body text-xl leading-relaxed max-w-3xl mx-auto text-foreground/90">
              We empower libraries with trusted digital content and services that help them serve patrons equitably, deepen community engagement, and support lifelong learning.
            </p>
          </div>

          {/* Team */}
          <div 
            className="text-center mb-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="editorial-subheadline font-semibold text-balance text-center mb-4">Our Team</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div 
              className="text-center space-y-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80"
                  alt="Leadership & Strategy"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-medium">Leadership & Strategy</p>
            </div>
            <div 
              className="text-center space-y-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?w=800&q=80"
                  alt="Library Services"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-medium">Library Services</p>
            </div>
            <div 
              className="text-center space-y-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=800&q=80"
                  alt="Publisher Partnerships"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-medium">Publisher Partnerships</p>
            </div>
            <div 
              className="text-center space-y-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
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
              Our job is to help them thrive in the digital era."
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
                to be a stable, focused, and accountable partner to libraries for the long term.
              </p>
              <p 
                className="editorial-body"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                We are building deliberately, investing responsibly, and listening closely—because the work libraries do deserves nothing less.
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