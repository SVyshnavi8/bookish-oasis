import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import ScrollToTop from "@/components/ScrollToTop";

import Index from "./pages/Index";
import Browse from "./pages/Browse";
import Solutions from "./pages/Solutions";
import Libraries from "./pages/Libraries";
import About from "./pages/About";
import Resources from "./pages/Resources";
import TS360 from "./pages/TS360";
import Boundless from "./pages/Boundless";
import ContentCafe from "./pages/ContentCafe";
import EPopUp from "./pages/EPopUp";
import Bibliostat from "./pages/Bibliostat"; // ← Added
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
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
        <HashRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/libraries" element={<Libraries />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/ts360" element={<TS360 />} />
            <Route path="/boundless" element={<Boundless />} />
            <Route path="/content-cafe" element={<ContentCafe />} />
            <Route path="/epopup" element={<EPopUp />} />
            <Route path="/bibliostat" element={<Bibliostat />} /> {/* ← Added route */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;