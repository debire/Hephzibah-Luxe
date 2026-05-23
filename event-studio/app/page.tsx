import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Serve from "@/components/sections/Serve";
import Portfolio from "@/components/sections/Portfolio";


export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Serve />
      <Portfolio />
    </main>
  );
}