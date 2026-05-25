import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesIntro from "@/components/sections/services/ServicesIntro";
import WhyWork from "@/components/sections/services/WhyWork";
// import ExploreServices from "@/components/sections/services/ExploreServices";


export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesIntro />
      <WhyWork />
      {/* <ExploreServices /> */}
    </main>
  );
}