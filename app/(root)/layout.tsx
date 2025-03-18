"use client";
import { useLenis } from "@/hooks/useLenis";

const Layout = ({ children }: { children: React.ReactNode }) => {
  useLenis();
  return <>{children}</>;
};

export default Layout;
