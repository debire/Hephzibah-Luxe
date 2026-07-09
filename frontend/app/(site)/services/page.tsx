import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesIntro from "@/components/sections/services/ServicesIntro";
import WhyWork from "@/components/sections/services/WhyWork";
import ExploreServices from "@/components/sections/services/ExploreServices";
import StickyServices from "@/components/sections/services/StickyServices";
import Intention from "@/components/sections/services/Intention";
import Process from "@/components/sections/services/Process";
import Testimonials from "@/components/sections/Testimonials";
import ReadyToBegin from "@/components/sections/services/ReadyToBegin";
import Instagram from "@/components/sections/Instagram";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesIntro />
      <WhyWork />
      <ExploreServices />
      <StickyServices />
      <Intention />
      <Process />
      <Testimonials />
      <ReadyToBegin />
      <Instagram />
    </main>
  );
}