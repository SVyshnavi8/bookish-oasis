import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import ScrollToTop from "@/components/ScrollToTop";

import Index from "./pages/Index";
import Solutions from "./pages/Solutions";
import Libraries from "./pages/Libraries";
import About from "./pages/About";
import Resources from "./pages/Resources";
import TS360 from "./pages/TS360";
import Boundless from "./pages/Boundless";
import ContentCafe from "./pages/ContentCafe";
import EPopUp from "./pages/EPopUp";
import Bibliostat from "./pages/Bibliostat"; // ← Added
import Contact from "./pages/Contact";
import Demo from "./pages/Demo";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const queryClient = new QueryClient();

const App = () => {
  const [mounted, setMounted] = useState(false);

  // Prevent UI libraries from crashing on initial mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  if (!mounted) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* UI libraries safe mount */}
        <Toaster />
        <Sonner />

        {/* Router for client-side routing */}
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/libraries" element={<Libraries />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/ts360" element={<TS360 />} />
            <Route path="/products/boundless" element={<Boundless />} />
            <Route path="/products/content-cafe" element={<ContentCafe />} />
            <Route path="/products/epopup" element={<EPopUp />} />
            <Route path="/products/bibliostat" element={<Bibliostat />} /> {/* ← Added route */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} /> 
            <Route path="/terms-and-conditions" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;