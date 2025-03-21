"use client";

import { useLenis } from "@/hooks/useLenis";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import Contact from "@/components/contact/Contact";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import SocialMedia from "@/components/contact/SocialMedia";

gsap.registerPlugin(ScrollTrigger);

const Layout = ({ children }: { children: React.ReactNode }) => {
  useLenis();

  return (
    <>
      <Navbar />
      {children}
      <Contact />
      <SocialMedia />
      <Footer />
    </>
  );
};

export default Layout;
