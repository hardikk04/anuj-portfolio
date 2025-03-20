"use client";

import { useLenis } from "@/hooks/useLenis";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import Contact from "@/components/contact/Contact";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  useLenis();
  
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <>
      <Navbar />
      {children}
      <Contact />
      <Footer />
    </>
  );
};

export default Layout;
