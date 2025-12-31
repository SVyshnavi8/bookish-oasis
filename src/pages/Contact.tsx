import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => (
  <MainLayout>
    <section className="pt-32 pb-20 md:pt-40">
      <div className="editorial-container">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h1 className="editorial-headline mb-6">Get in Touch</h1>
            <p className="editorial-body mb-12">Have questions? We'd love to hear from you.</p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">info@libraryone.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">1-800-775-1800</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
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
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full h-12 px-4 bg-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full h-12 px-4 bg-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={5}
                placeholder="How can we help?"
                className="w-full p-4 bg-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
              />
            </div>
            <Button variant="hero" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  </MainLayout>
);

export default Contact;