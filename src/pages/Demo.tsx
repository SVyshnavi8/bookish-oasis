import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const Demo = () => (
  <MainLayout>
    <section className="pt-32 pb-20 md:pt-40">
      <div className="editorial-container">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h1 className="editorial-headline mb-6">Request a Demo</h1>
            <p className="editorial-body mb-8">See how LibraryOne can transform your library's digital experience.</p>
            <ul className="space-y-4">
              {["Personalized walkthrough", "Custom pricing", "Implementation timeline", "Q&A with experts"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground"><CheckCircle className="w-5 h-5 text-primary" />{item}</li>
              ))}
            </ul>
          </div>
          <form className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div><label className="block text-sm font-medium mb-2">First Name</label><input type="text" className="w-full h-12 px-4 bg-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20" /></div>
              <div><label className="block text-sm font-medium mb-2">Last Name</label><input type="text" className="w-full h-12 px-4 bg-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20" /></div>
            </div>
            <div><label className="block text-sm font-medium mb-2">Work Email</label><input type="email" className="w-full h-12 px-4 bg-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20" /></div>
            <div><label className="block text-sm font-medium mb-2">Library Name</label><input type="text" className="w-full h-12 px-4 bg-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20" /></div>
            <div><label className="block text-sm font-medium mb-2">What interests you?</label><textarea rows={3} className="w-full p-4 bg-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20" /></div>
            <Button variant="hero" size="lg" className="w-full">Schedule Demo</Button>
          </form>
        </div>
      </div>
    </section>
  </MainLayout>
);

export default Demo;
