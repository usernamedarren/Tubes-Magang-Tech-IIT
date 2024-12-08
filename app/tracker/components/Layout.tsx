import Navbar from "../../components/Navbar";
import React from 'react';
import Footer from "../../components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#FDE67E]" >
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
