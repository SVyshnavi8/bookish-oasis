import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => (
  <MainLayout>
    <section
      className="pt-32 pb-20 md:pt-40"
      data-aos="fade-up"
    >
      <div className="editorial-container">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">

          {/* LEFT INFO */}
          <div data-aos="fade-right" data-aos-delay="100">
            <h1 className="editorial-headline mb-6">
              Get in Touch
            </h1>

            <p
              className="editorial-body mb-12"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Have questions? We'd love to hear from you
            </p>

            <div className="space-y-6">
              <div
                className="flex gap-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Mail className="w-5 h-5 text-[#2aa6a6] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">info@libraryone.com</p>
                </div>
              </div>

              <div
                className="flex gap-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Phone className="w-5 h-5 text-[#2aa6a6] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">1-800-775-1800</p>
                </div>
              </div>

              <div
                className="flex gap-4"
                data-aos="fade-up"
                data-aos-delay="500"
              >
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

          {/* FORM */}
          <form
            className="space-y-5"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div data-aos="fade-up" data-aos-delay="300">
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full h-12 px-4 bg-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2aa6a6]/20"
              />
            </div>

            <div data-aos="fade-up" data-aos-delay="350">
              <label className="block text-sm font-medium mb-2">Organization</label>
              <input
                type="text"
                placeholder="Your organization"
                className="w-full h-12 px-4 bg-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2aa6a6]/20"
              />
            </div>

            <div data-aos="fade-up" data-aos-delay="400">
              <label className="block text-sm font-medium mb-2">Library</label>
              <input
                type="text"
                placeholder="Library name"
                className="w-full h-12 px-4 bg-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2aa6a6]/20"
              />
            </div>

            <div data-aos="fade-up" data-aos-delay="450">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full h-12 px-4 bg-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2aa6a6]/20"
              />
            </div>

            <div data-aos="fade-up" data-aos-delay="500">
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={5}
                placeholder="How can we help?"
                className="w-full p-4 bg-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2aa6a6]/20 resize-none"
              />
            </div>

            <div
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <Button variant="hero" size="lg" className="w-full">
                Send Message
              </Button>
            </div>
          </form>

        </div>
      </div>
    </section>
  </MainLayout>
);

export default Contact;
