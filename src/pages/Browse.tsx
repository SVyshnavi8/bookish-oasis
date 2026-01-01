import MainLayout from "@/layouts/MainLayout";
import BookRow from "@/components/BookRow";
import CTASection from "@/components/CTASection";
import { Search } from "lucide-react";
import bookCover1 from "@/assets/book-cover-1.jpg";
import bookCover2 from "@/assets/book-cover-2.jpg";
import bookCover3 from "@/assets/book-cover-3.jpg";
import bookCover4 from "@/assets/book-cover-4.jpg";
import bookCover5 from "@/assets/book-cover-5.jpg";
import bookCover6 from "@/assets/book-cover-6.jpg";
import bookCover7 from "@/assets/book-cover-7.jpg";
import bookCover8 from "@/assets/book-cover-8.jpg";

const Browse = () => {
  const categories = [
    {
      name: "Fiction",
      books: [
        { id: "1", title: "The Spurks Novels", author: "Classic Literature", cover: bookCover1 },
        { id: "2", title: "Ficnon", author: "Contemporary", cover: bookCover2 },
        { id: "3", title: "Mystery Thriller", author: "Ralicaterie", cover: bookCover3 },
        { id: "4", title: "Romance", author: "Love Stories", cover: bookCover6 },
        { id: "5", title: "The Duriond", author: "Historical", cover: bookCover7 },
        { id: "6", title: "Sci-Fi Worlds", author: "Future Fiction", cover: bookCover5 },
      ],
    },
    {
      name: "Non-Fiction",
      books: [
        { id: "1", title: "Biography", author: "Life Stories", cover: bookCover4 },
        { id: "2", title: "Inner Peace", author: "Self Help", cover: bookCover8 },
        { id: "3", title: "The Spurks Novels", author: "Classic", cover: bookCover1 },
        { id: "4", title: "Biography", author: "Memoir", cover: bookCover4 },
        { id: "5", title: "Inner Peace", author: "Wellness", cover: bookCover8 },
        { id: "6", title: "The Spurks Novels", author: "History", cover: bookCover1 },
      ],
    },
    {
      name: "Mystery & Thriller",
      books: [
        { id: "1", title: "Mystery Thriller", author: "Ralicaterie", cover: bookCover3 },
        { id: "2", title: "The Duriond", author: "Dark Secrets", cover: bookCover7 },
        { id: "3", title: "Mystery Thriller", author: "Crime", cover: bookCover3 },
        { id: "4", title: "Sci-Fi Worlds", author: "Tech Thriller", cover: bookCover5 },
        { id: "5", title: "The Duriond", author: "Suspense", cover: bookCover7 },
        { id: "6", title: "Mystery Thriller", author: "Detective", cover: bookCover3 },
      ],
    },
    {
      name: "Science Fiction & Fantasy",
      books: [
        { id: "1", title: "Sci-Fi Worlds", author: "Future Fiction", cover: bookCover5 },
        { id: "2", title: "The Duriond", author: "Epic Fantasy", cover: bookCover7 },
        { id: "3", title: "Ficnon", author: "Dystopian", cover: bookCover2 },
        { id: "4", title: "Sci-Fi Worlds", author: "Space Opera", cover: bookCover5 },
        { id: "5", title: "The Duriond", author: "Magic", cover: bookCover7 },
        { id: "6", title: "Ficnon", author: "Cyberpunk", cover: bookCover2 },
      ],
    },
    {
      name: "Romance",
      books: [
        { id: "1", title: "Romance", author: "Love Stories", cover: bookCover6 },
        { id: "2", title: "Romance", author: "Contemporary", cover: bookCover6 },
        { id: "3", title: "The Duriond", author: "Historical Romance", cover: bookCover7 },
        { id: "4", title: "Romance", author: "Romantic Comedy", cover: bookCover6 },
        { id: "5", title: "Romance", author: "Young Adult", cover: bookCover6 },
        { id: "6", title: "The Duriond", author: "Period Drama", cover: bookCover7 },
      ],
    },
  ];

  return (
    <MainLayout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="editorial-container">
          <div className="max-w-3xl">
            <h1 className="editorial-headline mb-6">
              Discover Your Next
              <span className="block font-serif italic bg-gradient-to-r from-[#0b5fa5] via-[#2aa6a6] to-[#4cc9c0] bg-clip-text text-transparent">Great Read</span>
            </h1>
            <p className="editorial-body mb-8">
              Explore our curated collection of ebooks, audiobooks, and digital content. 
              From bestsellers to hidden gems, find something that speaks to you.
            </p>

            {/* Search */}
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search titles, authors, or genres..."
                className="w-full h-14 pl-12 pr-4 bg-secondary/50 border-0 rounded-full text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#2aa6a6]/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Rows */}
      {categories.map((category) => (
        <BookRow key={category.name} title={category.name} books={category.books} />
      ))}

      <CTASection
        title="Can't Find What You're Looking For?"
        description="Our library partners add new titles every day. Request a specific title or explore our complete catalog."
        primaryCTA={{ text: "Request a Title", link: "/contact" }}
        secondaryCTA={{ text: "View Full Catalog", link: "/solutions" }}
      />
    </MainLayout>
  );
};

export default Browse;
