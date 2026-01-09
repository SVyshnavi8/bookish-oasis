import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Seo from "@/components/Seo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <MainLayout>
      <Seo
        title="Page not found"
        description="The page you’re looking for could not be found on LibraryOne. Return home to explore our digital library solutions."
        path={location.pathname}
      />
      <section
        className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-br from-secondary/40 via-background to-background"
        aria-labelledby="notfound-heading"
      >
        <div className="max-w-3xl w-full">
          <div className="bg-background/80 border border-border/60 rounded-2xl shadow-lg shadow-black/5 p-8 md:p-10 text-center space-y-6 backdrop-blur">
            {/* <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-secondary/60 text-sm font-semibold text-foreground/80">
              <Home className="w-4 h-4 text-[#2aa6a6]" aria-hidden="true" />
              Lost your way?
            </div> */}
            <p className="text-7xl md:text-8xl font-serif font-bold bg-gradient-to-r from-[#0b5fa5]/25 via-[#2aa6a6]/25 to-[#4cc9c0]/25 inline-block px-4 py-1 rounded-lg">
              404
            </p>
            <h1 id="notfound-heading" className="text-3xl md:text-4xl font-semibold">
              Page not found
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The page you’re looking for doesn’t exist or may have moved. Try heading back home or exploring our solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <Link to="/" className="w-full sm:w-auto">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  <Home className="w-5 h-5" />
                  Back to Home
                </Button>
              </Link>
              <Link to="/solutions" className="w-full sm:w-auto">
                <Button variant="hero-outline" size="lg" className="w-full sm:w-auto">
                  View Solutions
                </Button>
              </Link>
            </div>
          </div>  
        </div>
      </section>
    </MainLayout>
  );
};

export default NotFound;
