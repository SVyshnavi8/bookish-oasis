import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Check, ChevronsUpDown, X } from "lucide-react";

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

const products = [
  { value: "boundless", label: "Boundless" },
  { value: "ts360", label: "TS360" },
  { value: "epopup", label: "ePopUp" },
  { value: "content-cafe", label: "Content Café" },
  { value: "bibliostat", label: "Bibliostat CollectConnect" },
];

const Contact = () => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [searchParams] = useSearchParams();

  // Auto-select product from query parameter
  useEffect(() => {
    const productParam = searchParams.get("product");
    if (productParam) {
      // Check if the product value exists in the products array
      const productExists = products.some((p) => p.value === productParam);
      if (productExists) {
        setSelectedProducts((prev) => {
          if (!prev.includes(productParam)) {
            return [productParam];
          }
          return prev;
        });
      }
    }
  }, [searchParams]);

  return (
    <MainLayout>
      <section className="pt-32 pb-20 md:pt-40" data-aos="fade-up">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
            {/* FORM – LEFT */}
            <form className="space-y-6" data-aos="fade-right" data-aos-delay="100">
              {/* Name + Organization */}
              <div className="grid md:grid-cols-2 gap-4">
                <div data-aos="fade-up" data-aos-delay="200">
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full h-12 px-4 bg-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2aa6a6]/20"
                  />
                </div>
                <div data-aos="fade-up" data-aos-delay="250">
                  <label className="block text-sm font-medium mb-2">Organization</label>
                  <input
                    type="text"
                    placeholder="Your organization"
                    className="w-full h-12 px-4 bg-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2aa6a6]/20"
                  />
                </div>
              </div>

              {/* Library + Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div data-aos="fade-up" data-aos-delay="300">
                  <label className="block text-sm font-medium mb-2">Library</label>
                  <input
                    type="text"
                    placeholder="Library name"
                    className="w-full h-12 px-4 bg-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2aa6a6]/20"
                  />
                </div>
                <div data-aos="fade-up" data-aos-delay="350">
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full h-12 px-4 bg-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2aa6a6]/20"
                  />
                </div>
              </div>

              {/* Products & Services – Multi Select with Tags Below */}
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
                      className="w-full justify-between h-12 bg-secondary/50 text-left font-normal"
                    >
                      {selectedProducts.length > 0
                        ? `${selectedProducts.length} selected`
                        : "Select products..."}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0" align="start">
                    <Command>
                      <CommandInput placeholder="Search products..." />
                      <CommandList>
                        <CommandEmpty>No product found.</CommandEmpty>
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

                {/* Selected Products Tags */}
                {selectedProducts.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedProducts.map((value) => {
                      const product = products.find((p) => p.value === value);
                      return (
                        <div
                          key={value}
                          className="inline-flex items-center gap-2 rounded-full bg-[#2aa6a6]/10 px-3 py-1.5 text-sm font-medium text-[#2aa6a6]"
                        >
                          {product?.label}
                          <button
                            type="button"
                            onClick={() =>
                              setSelectedProducts((current) =>
                                current.filter((item) => item !== value)
                              )
                            }
                            className="rounded-full hover:bg-[#2aa6a6]/20 focus:outline-none transition"
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
                  className="w-full p-4 bg-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2aa6a6]/20 resize-none"
                />
              </div>

              <div data-aos="zoom-in" data-aos-delay="500">
                <Button variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </div>
            </form>

            {/* RIGHT INFO */}
            <div data-aos="fade-left" data-aos-delay="200">
              <h1 className="editorial-headline mb-6">Get in Touch</h1>

              <p
                className="editorial-body mb-12"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Have questions? We’d love to hear from you
              </p>

              <div className="space-y-6">
                <div className="flex gap-4" data-aos="fade-up" data-aos-delay="400">
                  <Mail className="w-5 h-5 text-[#2aa6a6] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">info@libraryone.com</p>
                  </div>
                </div>

                <div className="flex gap-4" data-aos="fade-up" data-aos-delay="500">
                  <MapPin className="w-5 h-5 text-[#2aa6a6] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Office</p>
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