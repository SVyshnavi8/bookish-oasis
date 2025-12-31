import bookCover1 from "@/assets/book-cover-1.jpg";
import bookCover2 from "@/assets/book-cover-2.jpg";
import bookCover3 from "@/assets/book-cover-3.jpg";
import bookCover4 from "@/assets/book-cover-4.jpg";
import bookCover5 from "@/assets/book-cover-5.jpg";
import bookCover6 from "@/assets/book-cover-6.jpg";

interface BookRowProps {
  title: string;
  books: Array<{
    id: string;
    title: string;
    author: string;
    cover: string;
  }>;
}

const defaultBooks = [
  { id: "1", title: "The Spurks Novels", author: "Classic Literature", cover: bookCover1 },
  { id: "2", title: "Ficnon", author: "Contemporary Fiction", cover: bookCover2 },
  { id: "3", title: "Mystery Thriller", author: "Ralicaterie", cover: bookCover3 },
  { id: "4", title: "Biography Memoir", author: "Life Stories", cover: bookCover4 },
  { id: "5", title: "Sci-Fi Worlds", author: "Future Fiction", cover: bookCover5 },
  { id: "6", title: "Romance", author: "Love Stories", cover: bookCover6 },
  { id: "7", title: "The Spurks Novels", author: "Classic Literature", cover: bookCover1 },
  { id: "8", title: "Ficnon", author: "Contemporary Fiction", cover: bookCover2 },
];

const BookRow = ({ title, books = defaultBooks }: BookRowProps) => {
  return (
    <section className="py-12 md:py-16">
      <div className="editorial-container">
        <h2 className="editorial-subheadline mb-8">{title}</h2>
      </div>
      
      <div className="pl-6 md:pl-8 lg:pl-12">
        <div className="horizontal-scroll pr-6 md:pr-8 lg:pr-12">
          {books.map((book, index) => (
            <div
              key={`${book.id}-${index}`}
              className="book-cover w-36 md:w-44 flex-shrink-0 cursor-pointer group"
            >
              <div className="aspect-[2/3] rounded-lg overflow-hidden mb-3 shadow-md group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-medium text-sm truncate">{book.title}</h3>
              <p className="text-xs text-muted-foreground truncate">{book.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookRow;
