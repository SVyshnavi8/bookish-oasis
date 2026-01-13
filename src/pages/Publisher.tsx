import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
    // Small timeout helps with hydration/timing issues in some React setups
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
        description="LibraryOne: A stable, long-term partner for publishers in the library ecosystem. Focused exclusively on libraries with continuity, transparency, and sustainable growth."
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
            <div className="space-y-8" data-aos="fade-right" data-aos-delay="200">
              <span className="bg-gradient-to-r from-[#0b5fa5] via-[#2aa6a6] to-[#4cc9c0] bg-clip-text text-transparent font-semibold text-xl">
                Publisher Partnerships
              </span>

              <h1 className="editorial-headline mb-0 leading-none">
                A stable, focused partner for the <span className="text-[#2aa6a6]">long-term health</span> of the library ecosystem
              </h1>

              <p className="editorial-body text-xl max-w-3xl">
                LibraryOne partners with publishers to ensure <strong className="text-[#0b5fa5]">continuity</strong>, <strong className="text-[#2aa6a6]">transparency</strong>, and <strong className="text-[#4cc9c0]">sustainable growth</strong> in the library market.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/contact?from=publisher-partnerships">
                  <Button variant="hero" size="lg">
                    Become a Partner
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/request-demo">
                  <Button variant="outline" size="lg">
                    Learn More
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
              Why LibraryOne Was Started
            </h2>
            <div className="h-1 w-24 mx-auto mt-4 rounded-full bg-gradient-to-r from-[#0b5fa5] via-[#2aa6a6] to-[#4cc9c0]" />
          </div>

          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground" data-aos="fade-up" data-aos-delay="200">
            LibraryOne was formed at a moment when critical digital library services were at risk of being discontinued. That moment highlighted a broader need in the market: a company <strong className="text-[#0b5fa5]">dedicated solely to library-focused digital platforms</strong>, without competing priorities or shifting corporate strategies.
          </p>

          <p className="text-lg md:text-xl font-medium" data-aos="fade-up" data-aos-delay="300">
            LibraryOne exists to ensure these platforms remain available, well-supported, and responsibly managed — <span className="text-[#2aa6a6]">for the long haul</span>.
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
      <section className="py-20 bg-gradient-to-br from-[#0b5fa5]/5 to-[#4cc9c0]/5" data-aos="fade-up">
        <div className="editorial-container">
          <h2 className="editorial-subheadline text-center font-semibold mb-16 text-balance" data-aos="fade-up" data-aos-delay="100">
            Why Publishers Can Trust Us
          </h2>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                icon: Building2,
                title: "Exclusively library-focused",
                desc: "Our business is focused <strong>exclusively on libraries and library platforms</strong>. Our success is directly tied to the health of the library market."
              },
              {
                icon: ShieldCheck,
                title: "Clear accountability",
                desc: "We operate with <strong>clear accountability and open communication</strong>. We prioritize continuity over short-term restructuring or experimentation."
              },
              {
                icon: Lock,
                title: "Reliable steward",
                desc: "LibraryOne was created to be a <strong>reliable steward</strong> — not a transient operator."
              },
            ].map((item, i) => (
              <div 
                key={i} 
                className="bg-white rounded-2xl p-8 shadow-lg border border-[#2aa6a6]/10 hover:border-[#2aa6a6]/30 transition-all"
                data-aos="fade-up"
                data-aos-delay={200 + i * 150}
              >
                <div className="w-14 h-14 rounded-full bg-[#2aa6a6]/10 flex items-center justify-center mb-6 mx-auto">
                  <item.icon className="w-7 h-7 text-[#2aa6a6]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Continuity Through Experience */}
      <section className="py-20 bg-white" data-aos="fade-up">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right" data-aos-delay="200">
              <h2 className="editorial-subheadline font-semibold mb-8">
                <span className="text-balance">Continuity Through Experience</span>
              </h2>
              <p className="text-lg leading-relaxed mb-8">
                LibraryOne is led and staffed by professionals with <strong>deep experience</strong> building and operating library and content platforms. Many members of our team previously worked on the very products publishers know and rely on today.
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
        </div>
      </section>

      {/* Independent by Design + Healthy Ecosystem */}
      <section className="py-20 bg-gradient-to-br from-[#2aa6a6]/5 to-[#4cc9c0]/5" data-aos="fade-up">
        <div className="editorial-container max-w-5xl mx-auto text-center space-y-12">
          <div data-aos="fade-up" data-aos-delay="100">
            <h2 className="editorial-subheadline font-semibold mb-6">
              Independent by Design
            </h2>
            <p className="text-xl leading-relaxed">
              LibraryOne operates <strong>independently</strong>, with a clear mandate and governance focused on long-term platform stewardship. Independence allows us to stay focused and accountable — to publishers, libraries, and the market as a whole.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <h2 className="editorial-subheadline font-semibold mb-6 text-[#2aa6a6]">
              Maintaining a Healthy Library Ecosystem
            </h2>
            <p className="text-lg md:text-xl mb-10">
              A strong library market depends on <strong>multiple viable platforms</strong>, fair distribution, meaningful competition, and responsible innovation.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Globe, text: "Multiple viable platforms" },
                { icon: Scale, text: "Fair, transparent distribution" },
                { icon: RefreshCw, text: "Meaningful competition" },
                { icon: Sparkles, text: "Innovation grounded in responsibility" },
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-5 bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-md"
                  data-aos="fade-up"
                  data-aos-delay={300 + i * 150}
                >
                  <div className="w-12 h-12 rounded-full bg-[#2aa6a6]/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-[#2aa6a6]" />
                  </div>
                  <p className="text-lg font-medium">{item.text}</p>
                </div>
              ))}
            </div>

            <p className="text-xl font-semibold mt-12 italic text-[#0b5fa5]" data-aos="fade-up" data-aos-delay="600">
              By providing a stable alternative, we help ensure no single approach defines the entire market — benefiting publishers, libraries, and readers alike.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-white text-center" data-aos="fade-up">
        <div className="editorial-container max-w-4xl mx-auto space-y-8">
          <h2 className="editorial-headline text-balance" data-aos="fade-up" data-aos-delay="100">
            A <span className="text-balance">Long-Term Partner</span>
          </h2>
          
          <p className="text-xl leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            LibraryOne was created to take responsibility — for platforms, partnerships, and the long-term health of the library market. We view publishers not as suppliers, but as <strong>essential partners</strong> in serving readers and communities through libraries.
          </p>

          <div className="pt-8" data-aos="zoom-in" data-aos-delay="400">
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