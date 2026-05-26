import BeforeAfterHero from "@/components/sections/beforeafter/BeforeAfterHero";
import Reimagining from "@/components/sections/beforeafter/Reimagining";
import Transformations from "@/components/sections/beforeafter/Transformations";
import Instagram from "@/components/sections/Instagram";

export default function BeforeAfterPage() {
    return (
        <main>
            <BeforeAfterHero />
            <Reimagining />
            <Transformations />
            <Instagram />
        </main>
    );
}