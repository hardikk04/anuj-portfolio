"use client";

import { useLenis } from "@/hooks/useLenis";
import Navbar from "@/components/shared/navbar/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  useLenis();
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
