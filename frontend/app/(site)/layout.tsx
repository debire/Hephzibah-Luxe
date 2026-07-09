import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/layout/LenisProvider";
import type { ReactNode } from "react";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <LenisProvider>
      <Navbar />
      {children}
      <Footer />
    </LenisProvider>
  );
}