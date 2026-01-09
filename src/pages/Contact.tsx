import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Check, ChevronsUpDown, X, Sparkles } from "lucide-react";
import Seo from "@/components/Seo";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { cn } from "@/lib/utils";

/* Products + Enquiry Types (combined) */
const products = [
  { value: "boundless", label: "Boundless" },
  { value: "ts360", label: "TS360" },
  { value: "epopup", label: "ePopUp" },
  { value: "content-cafe", label: "Content Café" },
  { value: "bibliostat", label: "Bibliostat CollectConnect" },

  // New non-product options
  { value: "general-enquiry", label: "General enquiry" },
  { value: "partnership", label: "Partnership" },
];

const Contact = () => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [searchParams] = useSearchParams();

  // Auto-select product from query parameter
  useEffect(() => {
    const productParam = searchParams.get("product");
    if (productParam) {
      const productExists = products.some((p) => p.value === productParam);
      if (productExists) {
        setSelectedProducts((prev) =>
          prev.includes(productParam) ? prev : [productParam]
        );
      }
    }
  }, [searchParams]);

  return (
    <MainLayout>
      <Seo
        title="Contact LibraryOne"
        description="Get in touch with LibraryOne for product inquiries, partnerships, or support. We respond within one business day."
        path="/contact"
      />
      <section className="relative pt-32 pb-20 md:pt-40 overflow-hidden" data-aos="fade-up">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b5fa5]/6 via-[#2aa6a6]/6 to-transparent pointer-events-none" />
        <div className="editorial-container relative">

          {/* Page Heading */}
          <div className="mb-10 space-y-3 text-center lg:text-left" data-aos="fade-up">
            <p className="uppercase text-xs tracking-[0.25em] text-muted-foreground">Contact</p>
            <h1 className="editorial-headline text-4xl md:text-5xl">Get in Touch</h1>
            <p className="editorial-body max-w-3xl mx-auto lg:mx-0">
              Have questions? We’d love to hear from you. Share a bit about what you need and we’ll connect you with the right team.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">

            {/* FORM – LEFT */}
            <form
              className="space-y-6 bg-background/70 border border-border/60 rounded-2xl p-6 md:p-8 shadow-lg shadow-black/5 backdrop-blur-sm"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-secondary/40 px-3 py-1 text-xs font-semibold text-foreground">
                  <Sparkles className="w-4 h-4 text-[#2aa6a6]" />
                  We respond within 1 business day
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Tell us how we can help</h2>
                <p className="text-muted-foreground">
                  Share your details and we’ll connect you with the right team.
                </p>
              </div>

              {/* Name + Organization */}
              <div className="grid md:grid-cols-2 gap-4">
                <div data-aos="fade-up" data-aos-delay="200">
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full h-12 px-4 bg-secondary/50 rounded-lg
                               focus:outline-none focus:ring-2 focus:ring-[#2aa6a6]/20"
                  />
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                  <label className="block text-sm font-medium mb-2">Library</label>
                  <input
                    type="text"
                    placeholder="Library name"
                    className="w-full h-12 px-4 bg-secondary/50 rounded-lg
                               focus:outline-none focus:ring-2 focus:ring-[#2aa6a6]/20"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="grid gap-4">
                <div data-aos="fade-up" data-aos-delay="350">
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full h-12 px-4 bg-secondary/50 rounded-lg
                               focus:outline-none focus:ring-2 focus:ring-[#2aa6a6]/20"
                  />
                </div>
              </div>

              {/* Products & Services */}
              <div data-aos="fade-up" data-aos-delay="400">
                <label className="block text-sm font-medium mb-2">
                  Products & Services{" "}
                  <span className="text-muted-foreground text-xs">
                    (select all that apply)
                  </span>
                </label>

                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-full justify-between h-12 bg-secondary/50 text-left font-normal border-border"
                    >
                      {selectedProducts.length > 0
                        ? `${selectedProducts.length} selected`
                        : "Select products or enquiry type…"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>

                  <PopoverContent className="w-full p-0" align="start">
                    <Command>
                      <CommandInput placeholder="Search…" />
                      <CommandList>
                        <CommandEmpty>No option found.</CommandEmpty>
                        <CommandGroup>
                          {products.map((product) => (
                            <CommandItem
                              key={product.value}
                              onSelect={() => {
                                setSelectedProducts((current) =>
                                  current.includes(product.value)
                                    ? current.filter((item) => item !== product.value)
                                    : [...current, product.value]
                                );
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  selectedProducts.includes(product.value)
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {product.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>

                {/* Selected Tags */}
                {selectedProducts.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedProducts.map((value) => {
                      const product = products.find((p) => p.value === value);
                      return (
                        <div
                          key={value}
                          className="inline-flex items-center gap-2 rounded-full
                                     bg-[#2aa6a6]/10 px-3 py-1.5
                                     text-sm font-medium text-[#2aa6a6]"
                        >
                          {product?.label}
                          <button
                            type="button"
                            onClick={() =>
                              setSelectedProducts((current) =>
                                current.filter((item) => item !== value)
                              )
                            }
                            className="rounded-full hover:bg-[#2aa6a6]/20 transition"
                          >
                            <X className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Message */}
              <div data-aos="fade-up" data-aos-delay="450">
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={6}
                  placeholder="How can we help?"
                  className="w-full p-4 bg-secondary/50 rounded-lg
                             focus:outline-none focus:ring-2 focus:ring-[#2aa6a6]/20
                             resize-none"
                />
              </div>

              <div data-aos="zoom-in" data-aos-delay="500">
                <Button variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </div>
            </form>

            {/* RIGHT INFO */}
            <div
              className="space-y-6 bg-background/70 border border-border/60 rounded-2xl p-6 md:p-8 shadow-lg shadow-black/5 backdrop-blur-sm"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="space-y-2">
                <p className="uppercase text-xs tracking-[0.25em] text-muted-foreground">
                  Contact
                </p>
                <h2 className="text-2xl font-semibold">Reach us directly</h2>
                <p className="text-muted-foreground">
                  Prefer a quick note? Email or visit—whatever is easiest for you.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4 rounded-xl border border-border/70 bg-secondary/30 p-4">
                  <Mail className="w-5 h-5 text-[#2aa6a6] mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">info@libraryone.com</p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-xl border border-border/70 bg-secondary/30 p-4">
                  <MapPin className="w-5 h-5 text-[#2aa6a6] mt-1" />
                  <div>
                    <p className="font-semibold">Office</p>
                    <p className="text-muted-foreground">
                      3540 Toringdon Way, Suite 200<br />
                      #391 Charlotte, NC 28277
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
