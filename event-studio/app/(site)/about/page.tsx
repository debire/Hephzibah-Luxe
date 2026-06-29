import AboutHero from "@/components/sections/about/AboutHero";
import AboutIntro from "@/components/sections/about/AboutIntro";
import BehindTheBrand from "@/components/sections/about/BehindTheBrand";
import AboutTestimonial from "@/components/sections/about/AboutTestimonial";
import Instagram from "@/components/sections/Instagram";

export default function AboutPage() {
    return (
        <main>
            <AboutHero />
            <AboutIntro />
            <BehindTheBrand />
            <AboutTestimonial />
            <Instagram />
        </main>
    );
}