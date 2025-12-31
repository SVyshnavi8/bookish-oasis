import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Target, Users, Lightbulb } from "lucide-react";
import libraryInterior from "@/assets/library-interior.jpg";
import readingRoom from "@/assets/reading-room.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Reading",
      description: "We believe in the transformative power of reading. Every feature we build is designed to remove barriers between readers and great content.",
    },
    {
      icon: Target,
      title: "Library-First",
      description: "Libraries are at the heart of communities. We build tools that empower libraries to serve their patrons better than ever before.",
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "We work closely with librarians, publishers, and readers to create solutions that truly meet their needs.",
    },
    {
      icon: Lightbulb,
      title: "Continuous Innovation",
      description: "The digital landscape evolves constantly. We stay ahead by investing in research and development.",
    },
  ];

  return (
    <MainLayout>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="editorial-container">
          <div className="max-w-3xl">
            <h1 className="editorial-headline mb-6">
              Connecting Readers
              <span className="block font-serif italic text-primary">to Knowledge</span>
            </h1>
            <p className="editorial-body">
              LibraryOne was founded on a simple belief: everyone deserves access to 
              the world's knowledge. For over two decades, we've partnered with libraries 
              to make that vision a reality.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="editorial-section bg-secondary/20">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <h2 className="editorial-subheadline">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2000, LibraryOne began with a vision to transform how 
                  libraries connect with their communities in the digital age. What 
                  started as a small team of librarians and technologists has grown 
                  into a global platform serving millions of readers.
                </p>
                <p>
                  Today, we partner with over 25,000 libraries worldwide, providing 
                  access to millions of ebooks, audiobooks, magazines, and newspapers. 
                  Our technology powers the digital collections of public libraries, 
                  academic institutions, and corporate organizations across 150 countries.
                </p>
                <p>
                  But our mission remains unchanged: to empower libraries and connect 
                  readers with content that informs, inspires, and entertains.
                </p>
              </div>
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <img
                src={libraryInterior}
                alt="LibraryOne headquarters"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="editorial-section">
        <div className="editorial-container">
          <div className="text-center mb-16">
            <h2 className="editorial-subheadline mb-4">What We Believe</h2>
            <p className="editorial-body max-w-2xl mx-auto">
              Our values guide every decision we make and every product we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {values.map((value) => (
              <div key={value.title} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-medium mb-2">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Quote */}
      <section className="editorial-section bg-foreground text-background">
        <div className="editorial-container">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-serif leading-relaxed mb-8">
              "Libraries are more than buildings filled with books. They are 
              community centers, learning hubs, and gateways to opportunity. 
              Our job is to help them thrive in the digital era."
            </blockquote>
            <div>
              <p className="font-medium text-background">Michael Chen</p>
              <p className="text-background/60">CEO & Co-Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="editorial-section">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="editorial-subheadline">Join Our Team</h2>
              <p className="editorial-body">
                We're always looking for passionate people who want to make a 
                difference. Explore our open positions and become part of the 
                LibraryOne story.
              </p>
              <Link to="/careers">
                <Button variant="hero" size="lg">
                  View Careers
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
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
