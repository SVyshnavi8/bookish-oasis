import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Layers, Shuffle, BarChart3, Lightbulb } from "lucide-react";
import { Library, LineChart, Infinity } from "lucide-react";


import {
  Handshake, ShieldCheck, Building2, Users, HeartHandshake,
  ArrowRight, Globe, Scale, RefreshCw, BookOpen,
  Briefcase, Lock, Sparkles, Check
} from "lucide-react";
import Seo from "@/components/Seo";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PublisherPartnerships = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.init({
        duration: 800,       // Slightly faster for modern feel
        easing: "ease-out-cubic",
        once: true,          // Animate only once (better perf + UX)
        offset: 80,          // Start animation a bit earlier
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <MainLayout>
      <Seo
        title="Publisher Partnerships | LibraryOne"
        description="LibraryOne: A stable, long-term partner for publishers in the library ecosystem. Focused exclusively on libraries with continuity, transparency, and sustainable growth"
        path="/publisher-partnerships"
      />

      {/* Hero Section */}
      <section
        className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-[#0b5fa5]/5 via-[#2aa6a6]/5 to-[#4cc9c0]/5"
        data-aos="fade-up"
      >
        <div className="editorial-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text */}
            <div
              className="space-y-5"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <h1 className="editorial-headline mb-0 leading-none">
                A stable, focused partner for the
                <span className="block font-serif italic bg-gradient-to-r from-[#0b5fa5] via-[#2aa6a6] to-[#4cc9c0] bg-clip-text text-transparent">
                  long-term health of the library ecosystem
                </span>
              </h1>

              <p className="editorial-body leading-relaxed">
                LibraryOne partners with publishers to ensure
                <strong className="text-[#4cc9c0]"> continuity</strong>,
                <strong className="text-[#4cc9c0]"> transparency</strong>, and
                <strong className="text-[#4cc9c0]"> sustainable growth</strong>
                in the library market
              </p>

              <div className="flex flex-wrap gap-4 pt-1">
                <Link to="/contact?from=publisher-partnerships">
                  <Button variant="hero" size="lg">
                    Become a Partner
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>



            {/* Right: Image */}
            <div
              className="rounded-3xl overflow-hidden shadow-2xl"
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <img
                src="https://blog.kotobee.com/wp-content/uploads/2025/06/what-is-a-digital-library.jpg"
                alt="Modern digital library platform showcasing ebooks and publisher content"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why LibraryOne Was Started */}
      <section className="py-20 bg-white" data-aos="fade-up" data-aos-delay="100">
        <div className="editorial-container max-w-5xl mx-auto text-center space-y-10">
          <div className="inline-block">
            <h2 className="editorial-subheadline font-semibold text-[#2aa6a6]">
              Why LibraryOne was started
            </h2>
            <div className="h-1 w-24 mx-auto mt-4 rounded-full bg-gradient-to-r from-[#0b5fa5] via-[#2aa6a6] to-[#4cc9c0]" />
          </div>

          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground" data-aos="fade-up" data-aos-delay="200">
            LibraryOne was formed at a moment when critical digital library services were at risk of being discontinued. That moment highlighted a broader need in the market: a company <strong className="text-[#4cc9c0]">dedicated solely to library-focused digital platforms</strong>, without competing priorities or shifting corporate strategies
          </p>

          <p className="text-lg md:text-xl font-medium" data-aos="fade-up" data-aos-delay="300">
            LibraryOne exists to ensure these platforms remain available, well-supported, and responsibly managed
          </p>

          {/* Visual break */}
          <div className="pt-8" data-aos="zoom-in" data-aos-delay="400">
            <img
              src="https://www.betterup.com/hubfs/Happy-work-team-cheering-and-celebrating-at-meeting-team-collaboration.jpg"
              alt="Experienced team collaborating on library platforms"
              className="rounded-2xl shadow-lg mx-auto max-w-4xl w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Why Publishers Can Trust Us */}
      <section className="py-20 bg-secondary/20" data-aos="fade-up">
        <div className="editorial-container">

          <h2 className="editorial-subheadline text-center font-semibold mb-16">
            Why publishers can trust us
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

            <div className="flex gap-4 items-start">
              <div className="mt-1 text-primary">
                <Library className="h-6 w-6" />
              </div>
              <p className="editorial-body text-muted-foreground">
                Our business is focused exclusively on libraries and library platforms
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="mt-1 text-primary">
                <LineChart className="h-6 w-6" />
              </div>
              <p className="editorial-body text-muted-foreground">
                Our success is directly tied to the health of the library market
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="mt-1 text-primary">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <p className="editorial-body text-muted-foreground">
                We operate with clear accountability and open communication
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="mt-1 text-primary">
                <Infinity className="h-6 w-6" />
              </div>
              <p className="editorial-body text-muted-foreground">
                We prioritize continuity over short-term restructuring or experimentation
              </p>
            </div>

          </div>

          <div className="text-center mt-16">
            <p className="editorial-body text-muted-foreground font-semibold text-lg md:text-xl">
              LibraryOne was created to be a reliable steward—not a transient operator
            </p>
          </div>


        </div>
      </section>





      {/* Continuity Through Experience */}
      <section className="py-20 bg-white" data-aos="fade-up">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right" data-aos-delay="200">
              <h2 className="editorial-subheadline font-semibold mb-8">
                <span className="text-balance">Continuity through experience</span>
              </h2>
              <p className="text-lg leading-relaxed mb-8">
                LibraryOne is led and staffed by professionals with <strong>deep experience</strong> building and operating library and content platforms. Many members of our team previously worked on the very products publishers know and rely on today
              </p>
              <p className="text-lg font-medium text-[#0b5fa5]">
                This continuity matters. It ensures:
              </p>
              <ul className="space-y-4 mt-6">
                {[
                  "Institutional knowledge is preserved",
                  "Operational expertise remains intact",
                  "Publisher relationships are respected and understood",
                  "Platforms evolve thoughtfully, not abruptly"
                ].map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 text-lg"
                    data-aos="fade-right"
                    data-aos-delay={300 + i * 100}
                  >
                    <Check className="w-6 h-6 text-[#2aa6a6] flex-shrink-0 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div data-aos="zoom-in" data-aos-delay="400">
              <img
                src="https://images.ctfassets.net/rvt0uslu5yqp/50KC7EALOs35em6k87PhHX/9b18520080390b103fc1cd2a0c781591/social-learning-platform-hero.png"
                alt="Professional team preserving library platform knowledge"
                className="rounded-3xl shadow-2xl w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg md:text-xl font-semibold text-muted-foreground tracking-wide text-center mt-8">
              The teams responsible for successful library products in the past continue that work today—now within a company built specifically to support it
            </p>
          </div>
        </div>
      </section>

      {/* Independent by Design + Healthy Ecosystem */}
      <section
        className="py-16 bg-gradient-to-br from-[#2aa6a6]/5 to-transparent"
        data-aos="fade-up"
      >
        <div className="editorial-container max-w-5xl mx-auto text-center space-y-10">
          <div data-aos="fade-up" data-aos-delay="100">
            <h2 className="editorial-subheadline font-semibold mb-10">
              Independent by Design
            </h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              LibraryOne operates <strong>independently</strong>, with a clear mandate
              and governance focused on long-term platform stewardship. Independence
              allows us to stay focused and accountable — to publishers, libraries,
              and the market as a whole
            </p>
          </div>
        </div>
      </section>


      <section
        className="py-16 bg-gradient-to-br from-[#0b5fa5]/3 to-[#4cc9c0]/5"
        data-aos="fade-up"
      >
        <div className="editorial-container max-w-6xl mx-auto">

          {/* Heading */}
          <h2
            className="editorial-subheadline text-center font-semibold mb-16 text-balance"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Maintaining a healthy library ecosystem
          </h2>

          {/* Icon + Text (4 in a row) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { icon: Layers, title: "Multiple viable platforms" },
              { icon: Shuffle, title: "Fair, transparent distribution" },
              { icon: BarChart3, title: "Meaningful competition" },
              { icon: Lightbulb, title: "Responsible innovation" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-5"
                data-aos="fade-up"
                data-aos-delay={150 + i * 100}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-[#2aa6a6]/8 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-[#2aa6a6]" />
                </div>

                {/* Text */}
                <p className="text-base font-medium text-muted-foreground leading-snug">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          {/* Supporting Statement */}
          <p
            className="max-w-4xl mx-auto mt-16 text-center text-lg text-muted-foreground leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            By providing a <strong>stable alternative in the digital library space</strong>,
            we help ensure that no single approach or platform defines the entire market
            — benefiting publishers, libraries, and readers alike
          </p>

          {/* Strong Closing Statement */}
          <div
            className="mt-20 text-center"
            data-aos="fade-up"
            data-aos-delay="650"
          >
            <p className="text-2xl md:text-3xl lg:text-3xl font-bold leading-tight text-foreground lg:whitespace-nowrap">
              Healthy competition supports{" "}
              <span className="text-[#2aa6a6]">choice</span>,{" "}
              <span className="text-[#2aa6a6]">resilience</span>, and{" "}
              <span className="text-[#2aa6a6]">long-term sustainability</span>
            </p>
          </div>

        </div>
      </section>




      {/* CTA Footer */}
      <section className="py-16 bg-white text-center" data-aos="fade-up">
        <div className="editorial-container max-w-4xl mx-auto">

          {/* Heading */}
          <h2
            className="editorial-subheadline font-semibold mb-10 text-balance"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Long-Term Partner
          </h2>

          {/* Paragraph */}
          <p
            className="text-xl leading-relaxed mb-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            LibraryOne was created to take responsibility — for platforms, partnerships,
            and the long-term health of the library market.
            We view publishers not as
            suppliers, but as <strong>essential partners</strong> in serving readers and
            communities through libraries
          </p>

          {/* CTA */}
          <div data-aos="zoom-in" data-aos-delay="400">
            <Link to="/contact?from=publisher-partnerships">
              <Button
                variant="hero"
                size="xl"
                className="text-xl px-10 py-7 bg-gradient-to-r from-[#0b5fa5] to-[#2aa6a6]"
              >
                Let's Build a Stronger Future Together
                <Handshake className="w-6 h-6 ml-3" />
              </Button>
            </Link>
          </div>

        </div>
      </section>

    </MainLayout>
  );
};

export default PublisherPartnerships;