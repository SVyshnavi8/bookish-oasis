import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <MainLayout>
      <section className="min-h-screen flex items-center justify-center py-20">
        <div className="text-center px-6">
          <p className="text-8xl font-serif font-bold text-primary/20 mb-4">404</p>
          <h1 className="text-3xl font-serif font-semibold mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button variant="hero" size="lg">
              <Home className="w-5 h-5" />
              Back to Home
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default NotFound;
