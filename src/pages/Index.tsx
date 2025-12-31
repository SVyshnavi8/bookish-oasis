import MainLayout from "@/layouts/MainLayout";
import HeroSection from "@/components/HeroSection";
import BookRow from "@/components/BookRow";
import FeatureSection from "@/components/FeatureSection";
import CTASection from "@/components/CTASection";
import readingRoom from "@/assets/reading-room.jpg";
import libraryInterior from "@/assets/library-interior.jpg";
import digitalReading from "@/assets/digital-reading.jpg";
import boundlessVisual from "@/assets/boundless-visual.jpg";
import bookCover1 from "@/assets/book-cover-1.jpg";
import bookCover2 from "@/assets/book-cover-2.jpg";
import bookCover3 from "@/assets/book-cover-3.jpg";
import bookCover4 from "@/assets/book-cover-4.jpg";
import bookCover5 from "@/assets/book-cover-5.jpg";
import bookCover6 from "@/assets/book-cover-6.jpg";
import bookCover7 from "@/assets/book-cover-7.jpg";
import bookCover8 from "@/assets/book-cover-8.jpg";

const Index = () => {
  const popularBooks = [
    { id: "1", title: "The Spurks Novels", author: "Classic Literature", cover: bookCover1 },
    { id: "2", title: "Ficnon", author: "Contemporary Fiction", cover: bookCover2 },
    { id: "3", title: "Mystery Thriller", author: "Ralicaterie", cover: bookCover3 },
    { id: "4", title: "Biography", author: "Life Stories", cover: bookCover4 },
    { id: "5", title: "Sci-Fi Worlds", author: "Future Fiction", cover: bookCover5 },
    { id: "6", title: "Romance", author: "Love Stories", cover: bookCover6 },
    { id: "7", title: "The Duriond", author: "Historical Fiction", cover: bookCover7 },
    { id: "8", title: "Inner Peace", author: "Self Help", cover: bookCover8 },
  ];

  const newArrivals = [
    { id: "1", title: "Inner Peace", author: "Self Help", cover: bookCover8 },
    { id: "2", title: "The Duriond", author: "Historical Fiction", cover: bookCover7 },
    { id: "3", title: "Romance", author: "Love Stories", cover: bookCover6 },
    { id: "4", title: "Sci-Fi Worlds", author: "Future Fiction", cover: bookCover5 },
    { id: "5", title: "Biography", author: "Life Stories", cover: bookCover4 },
    { id: "6", title: "Mystery Thriller", author: "Ralicaterie", cover: bookCover3 },
    { id: "7", title: "Ficnon", author: "Contemporary Fiction", cover: bookCover2 },
    { id: "8", title: "The Spurks Novels", author: "Classic Literature", cover: bookCover1 },
  ];

  return (
    <MainLayout>
      <HeroSection />

      <BookRow title="Popular This Week" books={popularBooks} />

      <FeatureSection
        title="Transform Your Library Experience"
        description="LibraryOne brings the future of reading to your community. Our platform connects patrons with millions of ebooks, audiobooks, and digital resources seamlessly integrated with your existing library systems."
        image={libraryInterior}
        imageAlt="Modern library interior with natural lighting"
        linkTo="/solutions"
        linkText="Explore Solutions"
      />

      <BookRow title="New Arrivals" books={newArrivals} />

      <FeatureSection
        title="Read Anywhere, Anytime"
        description="Whether at home, commuting, or on vacation, your library travels with you. Access your collection across all devices with our beautifully designed reading experience."
        image={digitalReading}
        imageAlt="Person reading on tablet in comfortable setting"
        linkTo="/boundless"
        linkText="Learn About Boundless"
        reverse
      />

      <section className="editorial-section">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <h2 className="editorial-subheadline text-balance">
                Powered by Innovation, Driven by Readers
              </h2>
              <p className="editorial-body">
                Our technology platform processes millions of transactions daily, 
                connecting readers with content they love while providing libraries 
                with powerful analytics and management tools.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <p className="text-3xl font-serif font-semibold">99.9%</p>
                  <p className="text-sm text-muted-foreground mt-1">Uptime Guarantee</p>
                </div>
                <div>
                  <p className="text-3xl font-serif font-semibold">24/7</p>
                  <p className="text-sm text-muted-foreground mt-1">Support Available</p>
                </div>
                <div>
                  <p className="text-3xl font-serif font-semibold">150+</p>
                  <p className="text-sm text-muted-foreground mt-1">Countries Served</p>
                </div>
                <div>
                  <p className="text-3xl font-serif font-semibold">500+</p>
                  <p className="text-sm text-muted-foreground mt-1">Publisher Partners</p>
                </div>
              </div>
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <img
                src={boundlessVisual}
                alt="Abstract visualization of digital library"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <BookRow title="Staff Picks" books={popularBooks.slice().reverse()} />

      <CTASection
        title="Ready to Transform Your Library?"
        description="Join thousands of libraries worldwide in providing patrons with an exceptional digital reading experience. Schedule a demo today."
        primaryCTA={{ text: "Schedule Demo", link: "/demo" }}
        secondaryCTA={{ text: "Contact Sales", link: "/contact" }}
      />
    </MainLayout>
  );
};

export default Index;
