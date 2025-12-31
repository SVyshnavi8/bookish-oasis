import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Link as LinkIcon,
  ShoppingBag,
  Shield,
  Search,
  Palette,
  BookOpen,
  Trophy,
  UserCheck,
  Heart,
  Smile,
  Accessibility,
} from "lucide-react";
import boundlessVisual from "@/assets/boundless-visual.jpg";
import digitalReading from "@/assets/digital-reading.jpg";

const Boundless = () => {
  const keyFeatures = [
    {
      icon: Users,
      title: "Community Sharing Program",
      description: "Share your digital collection with your local schools and institutions.",
    },
    {
      icon: LinkIcon,
      title: "No Dead Ends",
      description: "Even though Boundless is a platform for your digital collection, it seamlessly connects your print and digital collections.",
    },
    {
      icon: ShoppingBag,
      title: "TS360 Integration",
      description: "Shop and add new titles directly to Boundless via TS360. Also available are our collection development services.",
    },
    {
      icon: Shield,
      title: "Patron Type Authentication",
      description: "Boundless fully supports patron type authentication.",
    },
    {
      icon: Search,
      title: "Greater Control Over Content Discovery",
      description:
        "With effective tools to control content discovery, Boundless helps libraries guide access in a thoughtful, responsible way—supporting age-appropriate content while preserving choice, privacy, and intellectual freedom.",
    },
    {
      icon: Palette,
      title: "Customizable UI",
      description: "Library-branded UI with complete customization based on your library’s preferences.",
    },
  ];

  const patronBenefits = [
    {
      icon: BookOpen,
      title: "Rich Digital Formats",
      description: "Boundless supports ebooks, eAudio, Videos, Videobooks, Newspapers, Magazines, and more.",
      image: "https://static1.squarespace.com/static/5c06ab74da02bc6a8954dab1/5e7a17138a5547407c687268/5ede9037084d712c07767e41/1591644535067/woman-sitting-on-chair-using-black-ipad-196649.jpg?format=1500w",
      alt: "Patron enjoying rich digital formats on a tablet",
    },
    {
      icon: Trophy,
      title: "Patron Engagement",
      description: "Through built-in Reading Programs and Challenges where patrons get incentivized to read more.",
      image: "https://d1ivb2c2d81ilf.cloudfront.net/city/Connect/Blog/_1740x1070_crop_center-center_none/Girls-at-the-library-holding-books.jpg",
      alt: "Children participating in a library reading challenge",
    },
    {
      icon: UserCheck,
      title: "Age-Based Profiles",
      description: "Ensure that patrons only see age-appropriate content with profile-based filtering.",
      image: "https://www.librarypoint.org/wp-content/uploads/sites/60/2022/07/image2.png",
      alt: "Parent setting up age-appropriate content filters on a library app",
    },
    {
      icon: Heart,
      title: "Personalization",
      description: "Personalized interface and recommendations based on patrons choice and activity.",
      image: "https://isbndb.com/blog/wp-content/uploads/2024/07/bookbub-app.jpg",
      alt: "Personalized book recommendations on an ebook app",
    },
    {
      icon: Smile,
      title: "Ease of Use",
      description: "A clean, intuitive experience designed for patrons of all ages and technical comfort levels—so accessing library content feels natural and welcoming.",
      image: "https://seniorlivingnearme.com/hs-fs/hubfs/Old-man-wearing-eyeglasses-to-2.jpg?width=2000&height=1333&name=Old-man-wearing-eyeglasses-to-2.jpg",
      alt: "Senior patron using an easy-to-use digital library app",
    },
    {
      icon: Accessibility,
      title: "Accessibility",
      description: "Designed to support inclusive access through mobile-friendly design and compatibility with assistive technologies.",
      image: "https://www.levelaccess.com/wp-content/uploads/2021/09/Accessible-native-mobile-apps.png",
      alt: "Accessible mobile app design for inclusive library access",
    },
  ];

  return (
    <MainLayout>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28" data-aos="fade-up">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <span className="text-primary font-medium">Boundless</span>
              <h3 className="editorial-headline">
                The Digital Library Platform Built for Libraries
              </h3>
              <p className="editorial-body">
                Boundless gives libraries a better way forward — with more control, deeper discounts, and a platform built for libraries, not against them. Give your patrons an extensive digital library of eBooks and audiobooks, from trending bestsellers to timeless classics, plus activities, customizable reading programs, and more.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/demo">
                  <Button variant="hero" size="lg">
                    Get Started (Schedule a free Demo)
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="hero-outline" size="lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg" data-aos="fade-left" data-aos-delay="300">
              <img
                src={boundlessVisual}
                alt="Boundless unlimited reading"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Designed for Libraries */}
      <section className="editorial-section bg-secondary/10" data-aos="fade-up">
        <div className="editorial-container">
          <div className="text-center mb-12">
            <h2 className="editorial-subheadline">Designed for Libraries</h2>
          </div>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="editorial-body text-lg">
              Boundless enables access to ebooks, audiobooks, videos, video books, and other digital formats through an intuitive, library-branded experience.
            </p>
          </div>

          {/* Images Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              "https://static.libnet.info/frontend-images/tile/bettendorflibrary/Home/woman-reading-ebook-at-home.jpeg",
              "https://img.mauritius-images.com/dsf/preview_watermarked/ME-PI-7647203/save_as_name/mauritius%20images%20-%2007600263%20-%20Senior%20woman%20siting%20in%20library%2C%20reading%20book.jpg",
              "https://hamiltoneastpl.org/wp-content/uploads/2025/06/audiobook-appreciation.png",
              "https://cdn.dribbble.com/userupload/18426632/file/original-0e47e3c9c03dd7e0412aa97f2a2a9248.png?resize=1200x900",
              "https://cdn.dribbble.com/userupload/11281094/file/original-10087d5dc187e939d80513bd1115fc6a.png?resize=1200x900",
              "https://www.parents.com/thmb/k8khQGxkIYf6z-FnGrHMC9AIt20=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/parentsyoutubechannelforkids-e6ae119c8f644a60913ca76b727184ea.png",
            ].map((src, index) => (
              <div key={index} className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay={index * 100}>
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Boundless - 3 Main Pillars */}
      <section className="editorial-section" data-aos="fade-up">
        <div className="editorial-container">
          <div className="text-center mb-16">
            <h2 className="editorial-headline">Why Boundless</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                num: "1",
                title: "Reclaim Your Digital Identity",
                subtitle: "Keep Your Library Front and Center",
                desc: "Boundless keeps your library at the forefront. Your patrons see your branding — so your organization stays visible and in control. Libraries deserve recognition in the digital world, and Boundless makes that possible.",
              },
              {
                num: "2",
                title: "Unlock Budget Relief",
                subtitle: "Do More with Your Digital Budget",
                desc: "Boundless gives you access to discounted digital content, including premium eBooks and audiobooks. Stop paying more for less flexibility — save more with Boundless and reinvest in your library.",
              },
              {
                num: "3",
                title: "Meet Patrons Where They Are",
                subtitle: "Seamless Access, On Your Terms",
                desc: "With Boundless, your digital collection goes wherever your community goes. It integrates with solutions like Palace, Solus, and your ILS so you can offer seamless access on your terms.",
              },
            ].map((pillar, index) => (
              <div key={index} className="space-y-6 text-center md:text-left" data-aos="fade-up" data-aos-delay={index * 200}>
                <div className="text-5xl font-bold text-primary">{pillar.num}</div>
                <h3 className="text-2xl font-serif font-medium">{pillar.title}</h3>
                <h4 className="text-lg font-medium text-foreground/80 mb-4">{pillar.subtitle}</h4>
                <p className="text-muted-foreground leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="editorial-section bg-secondary/20" data-aos="fade-up">
        <div className="editorial-container">
          <div className="text-center mb-16">
            <h2 className="editorial-headline">Key Features</h2>
            <p className="editorial-body text-lg max-w-4xl mx-auto">
              Everything You Need in One Platform<br />
              From migration to engagement, Boundless gives you the tools to build, manage, and grow a powerful digital collection that truly belongs to your library.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {keyFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Patrons - With Intro Paragraph */}
      <section className="editorial-section bg-secondary/10" data-aos="fade-up">
        <div className="editorial-container">
          <div className="text-center mb-12">
            <h2 className="editorial-headline">For Patrons</h2>
          </div>

          <div className="max-w-4xl mx-auto text-center mb-20">
            <p className="editorial-body text-lg leading-relaxed">
              Built with library values at its core, Boundless supports access, privacy, usability, and long-term stewardship while enabling libraries to expand their digital reach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {patronBenefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="space-y-6 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg mx-auto max-w-md">
                  <img
                    src={benefit.image}
                    alt={benefit.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-medium">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed px-4">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Boundless by LibraryOne - Replaced Reading Experience */}
      <section className="editorial-section" data-aos="fade-up">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg" data-aos="fade-right">
              <img
                src={digitalReading}
                alt="Person reading with Boundless"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-8" data-aos="fade-left" data-aos-delay="300">
              <h2 className="editorial-subheadline">Boundless by LibraryOne</h2>
              <p className="editorial-body">
                Boundless by LibraryOne represents continuity, focus, and accountability—supported by leadership with deep experience in libraries, publishing, and digital platforms.
              </p>
              <h3 className="text-2xl font-serif font-medium">What libraries can expect:</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Continued stability and support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Leadership with deep library, publishing, and media experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>A platform stewarded with long-term commitment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Decisions guided by how libraries serve their communities</span>
                </li>
              </ul>
              <p className="editorial-body font-medium">
                Same mission. Same platform. A renewed commitment to libraries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="editorial-section bg-foreground text-background" data-aos="fade-up">
        <div className="editorial-container text-center">
          <div className="space-y-8">
            <h2 className="editorial-headline text-background mb-6">
              Ready for Boundless Reading?
            </h2>
            <p className="text-xl text-background/70 max-w-2xl mx-auto mb-8">
              Join libraries worldwide in providing patrons with unlimited access to great content.
            </p>
            <Link to="/demo">
              <Button
                variant="default"
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
              >
                Schedule Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Boundless;