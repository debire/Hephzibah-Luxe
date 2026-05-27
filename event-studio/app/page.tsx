import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Serve from "@/components/sections/Serve";
import Portfolio from "@/components/sections/Portfolio";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Celebration from "@/components/sections/Celebration";
import Marquee from "@/components/sections/Marquee";
import Testimonials from "@/components/sections/Testimonials";
import Instagram from "@/components/sections/Instagram";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Serve />
      <Portfolio />
      <BeforeAfter />
      <Celebration />
      <Marquee />
      <Testimonials />
      <Instagram />
    </main>
  );
}