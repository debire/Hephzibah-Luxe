import PortfolioHero from "@/components/sections/portfolio/PortfolioHero";
import PortfolioEvents from "@/components/sections/portfolio/PortfolioEvents";
import AboutTestimonial from "@/components/sections/about/AboutTestimonial";
import Instagram from "@/components/sections/Instagram";

export default function PortfolioPage() {
    return (
        <main>
            <PortfolioHero />
            <PortfolioEvents />
            <AboutTestimonial />
            <Instagram />
        </main>
    );
}