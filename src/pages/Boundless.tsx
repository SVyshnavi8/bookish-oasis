import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import img1 from "@/assets/video_book.png";
import img2 from "@/assets/book.png";
import img3 from "@/assets/audio.png";
import img4 from "@/assets/audio_book.png";
import img5 from "@/assets/kids.png";
import img6 from "@/assets/kids_book.png";
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
        "Effective tools to control the content discovery in a thoughtful, responsible way—supporting age-appropriate access while preserving choice, privacy, and intellectual freedom. ",
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
      image: "https://thgmwriters.com/wp-content/uploads/2023/01/Book-reading-data-statistics-United-States-2022-age.png",
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
      <section
        className="pt-20 pb-12 md:pt-28 md:pb-16"
        data-aos="fade-up"
      >
        <div className="editorial-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left Content */}
            <div
              className="space-y-6"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <span className="bg-gradient-to-r from-[#0b5fa5] via-[#2aa6a6] to-[#4cc9c0] bg-clip-text text-transparent font-medium">
                Boundless
              </span>

              <h1 className="editorial-headline mb-4">
                The Digital library platform —
                <span className="block font-serif italic bg-gradient-to-r from-[#0b5fa5] via-[#2aa6a6] to-[#4cc9c0] bg-clip-text text-transparent">
                  Built for libraries
                </span>
              </h1>

              <p className="editorial-body">
                Boundless gives libraries a better way forward—with more control,
                deeper discounts, and a platform built for libraries, not against
                them. Given your patrons an extensive digital collection of eBooks
                and audiobooks, from trending bestsellers to timeless classics, plus
                activities, customizable reading programs, and more.
              </p>

              <div className="flex flex-wrap gap-4 pt-1">
                <Link to="/demo">
                  <Button variant="hero" size="lg">
                    Request Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div
              className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <img
                src={boundlessVisual}
                alt="Boundless digital library platform experience"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>



      {/* Designed for Libraries */}
      <section
        className="editorial-section bg-secondary/10 py-10"
        data-aos="fade-up"
      >
        <div className="editorial-container">

          {/* Heading */}
          <div className="text-center mb-6">
            <h2 className="editorial-subheadline font-semibold text-balance">
              Designed for Libraries
            </h2>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="editorial-body text-base md:text-lg">
              Boundless enables access to ebooks, audiobooks, videos, video books, and other digital formats through an intuitive, library-branded experience.
            </p>
          </div>

          {/* Images Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              img1,
              img2,
              img3,
              img4,
              img5,
              img6,
            ].map((src, index) => (
              <div
                key={index}
                className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <img
                  src={src}
                  alt={`Boundless feature ${index + 1}`}
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
            <h2 className="editorial-subheadline font-semibold text-balance mb-4">
              Why Boundless?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                num: "1",
                title: "Reclaim Your Digital Identity",
                desc: "Boundless keeps your library at the forefront. Your patrons see your branding — so your organization stays visible and in control. Libraries deserve recognition in the digital world, and Boundless makes that possible.",
              },
              {
                num: "2",
                title: "Unlock Budget Relief",
                desc: "Boundless gives you access to discounted digital content, including premium eBooks and audiobooks. Stop paying more for less flexibility — save more with Boundless and reinvest in your library.",
              },
              {
                num: "3",
                title: "Meet Patrons Where They Are",
                desc: "With Boundless, your digital collection goes wherever your community goes. It integrates with solutions like Palace, Solus, and your ILS so you can offer seamless access on your terms.",
              },
            ].map((pillar, index) => (
              <div
                key={index}
                className="space-y-6 text-center md:text-left"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-[#0b5fa5] via-[#2aa6a6] to-[#4cc9c0] bg-clip-text text-transparent">
                  {pillar.num}
                </div>

                <h3 className="text-2xl font-serif font-medium">
                  {pillar.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* Key Features */}
      <section
        className="editorial-section bg-secondary/20 py-12 md:py-14"
        data-aos="fade-up"
      >
        <div className="editorial-container">

          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="editorial-subheadline font-semibold text-balance mb-4">
              Everything You Need in One Platform
            </h2>

            <p className="editorial-body text-lg max-w-4xl mx-auto leading-relaxed">
              From migration to engagement, Boundless gives you the tools to build,
              manage, and grow a powerful digital collection that truly belongs to
              your library.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {keyFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-[#0b5fa5]/10 via-[#2aa6a6]/10 to-[#4cc9c0]/10 flex items-center justify-center mb-5">
                  <feature.icon className="w-8 h-8 text-[#2aa6a6]" />
                </div>

                <h3 className="text-lg font-serif font-medium mb-2">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* For Patrons - With Intro Paragraph */}
      <section
        className="editorial-section bg-secondary/10 py-12 md:py-14"
        data-aos="fade-up"
      >
        <div className="editorial-container">

          {/* Section Heading */}
          <div className="text-center mb-8">

            <h2 className="editorial-subheadline font-semibold text-balance">
              A Delightful Patron Experience
            </h2>
          </div>

          {/* Intro Paragraph */}


          {/* Patron Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {patronBenefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="space-y-4 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                {/* Image */}
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-md mx-auto max-w-md">
                  <img
                    src={benefit.image}
                    alt={benefit.alt}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-serif font-medium">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-sm px-3">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-lg md:text-xl font-bold text-foreground leading-relaxed">
              Built with library values at its core, Boundless supports access, privacy,usability,
              <br />
              and long-term stewardship while enabling libraries to expand their digital reach.
            </p>
          </div>
        </div>
      </section>

      {/* Boundless by LibraryOne - Replaced Reading Experience */}
      <section className="editorial-section py-12" data-aos="fade-up">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* Image */}
            <div
              className="w-full max-w-xl"
              data-aos="fade-right"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={digitalReading}
                  alt="Person reading with Boundless"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div
              className="max-w-xl space-y-4 pt-1"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <h2 className="editorial-subheadline font-semibold text-balance">
                Boundless
              </h2>

              <p className="editorial-body">
                Boundless represents continuity, focus, and accountability—supported
                by leadership with deep experience in libraries, publishing, and
                digital platforms.
              </p>

              <h3 className="text-xl font-serif font-medium pt-2">
                What libraries can expect:
              </h3>

              <ul className="space-y-3 text-muted-foreground">
                {[
                  "Continued stability and support",
                  "Leadership with deep library, publishing, and media experience",
                  "A platform stewarded with long-term commitment",
                  "Decisions guided by how libraries serve their communities",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-[#0b5fa5] via-[#2aa6a6] to-[#4cc9c0] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section Closing Line */}
          <div className="mt-8 text-center">
            <p className="text-lg md:text-xl font-semibold text-foreground tracking-wide">
              Same mission. Same platform. A renewed commitment to libraries
            </p>
          </div>
        </div>
      </section>

      {/* CTA – Full Background Image with Gradient */}
      <section
        className="relative editorial-section py-14 text-foreground bg-cover bg-center"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1800&q=80")`,
        }}
        data-aos="fade-up"
      >
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90"></div>

        <div className="editorial-container text-center relative z-10">
          <h2 className="editorial-subheadline font-semibold text-balance mb-8">
            Ready for Boundless?
          </h2>

          <Link to="/contact">
            <Button
              variant="default"
              size="lg"
              className="inline-flex items-center gap-2 px-9"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

    </MainLayout>
  );
};

export default Boundless;