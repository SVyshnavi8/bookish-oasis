import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle, Check, ChevronsUpDown, X } from "lucide-react";

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

/* Products + enquiry types */
const products = [
  { value: "boundless", label: "Boundless" },
  { value: "ts360", label: "TS360" },
  { value: "epopup", label: "ePopUp" },
  { value: "content-cafe", label: "Content Café" },
  { value: "bibliostat", label: "Bibliostat CollectConnect" },

  // New options
  { value: "general-enquiry", label: "General enquiry" },
  { value: "partnership", label: "Partnership" },
];

const Demo = () => {
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
      <section className="pt-32 pb-20 md:pt-40">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* FORM – LEFT */}
            <form className="space-y-6">

              {/* First Name + Last Name */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full h-12 px-4 bg-secondary/50 rounded-lg
                               focus:outline-none focus:ring-2 focus:ring-[#2aa6a6]/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full h-12 px-4 bg-secondary/50 rounded-lg
                               focus:outline-none focus:ring-2 focus:ring-[#2aa6a6]/20"
                  />
                </div>
              </div>

              {/* Work Email + Library Name */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@library.org"
                    className="w-full h-12 px-4 bg-secondary/50 rounded-lg
                               focus:outline-none focus:ring-2 focus:ring-[#2aa6a6]/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Library Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your library"
                    className="w-full h-12 px-4 bg-secondary/50 rounded-lg
                               focus:outline-none focus:ring-2 focus:ring-[#2aa6a6]/20"
                  />
                </div>
              </div>

              {/* Products & Services */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Products & Services of Interest{" "}
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
                      className="w-full justify-between h-12 bg-secondary/50
                                 text-left font-normal"
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
              <div>
                <label className="block text-sm font-medium mb-2">
                  What interests you?
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your goals or questions..."
                  className="w-full p-4 bg-secondary/50 rounded-lg
                             focus:outline-none focus:ring-2 focus:ring-[#2aa6a6]/20
                             resize-none"
                />
              </div>

              <Button variant="hero" size="lg" className="w-full">
                Schedule Demo
              </Button>
            </form>

            {/* RIGHT CONTENT */}
            <div>
              <h1 className="editorial-headline mb-6">Request a Demo</h1>

              <p className="editorial-body mb-8">
                See how LibraryOne can transform your library&apos;s digital experience.
              </p>

              <ul className="space-y-4">
                {[
                  "Personalized walkthrough",
                  "Custom pricing",
                  "Implementation timeline",
                  "Q&A with experts",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <CheckCircle className="w-5 h-5 text-[#2aa6a6] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Demo;
