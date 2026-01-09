import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content" role="main" className="flex-1 focus:outline-none">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
