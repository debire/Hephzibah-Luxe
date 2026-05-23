import Image from "next/image";

const heroImages = [
    { src: "/images/Hero/heroone.jpg", alt: "Elegant dinner table setting" },
    { src: "/images/Hero/herotwo.jpg", alt: "Couple celebrating with sparklers" },
    { src: "/images/Hero/herothree.jpg", alt: "Reception table with floral details" },
    { src: "/images/Hero/herofour.jpg", alt: "Couple in coordinated attire" },
    { src: "/images/Hero/herofive.jpg", alt: "Bride and groom on grand staircase" },
    { src: "/images/Hero/herosix.jpg", alt: "Ballroom event with hanging decor" },
    { src: "/images/Hero/heroseven.jpg", alt: "Reception tablescape" },
    { src: "/images/Hero/heroeight.jpg", alt: "Couple in formal evening wear" },
];

export default function Hero() {
    return (
        <section className="relative w-full h-[55vh] lg:h-[110vh] overflow-hidden bg-primary">
            {/* Desktop image grid (lg+): 4 top, 4 bottom */}
            <div className="absolute inset-0 hidden lg:flex flex-col gap-2">
                <div className="flex gap-2 flex-1">
                    {heroImages.slice(0, 4).map((image, i) => (
                        <div key={i} className="relative flex-1 overflow-hidden">
                            <Image src={image.src} alt={image.alt} fill className="object-cover" priority sizes="25vw" />
                        </div>
                    ))}
                </div>
                <div className="flex gap-2 flex-1 -ml-[8%]">
                    {heroImages.slice(4, 8).map((image, i) => (
                        <div key={i} className="relative flex-1 overflow-hidden">
                            <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="25vw" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile image grid: 3 top, 4 bottom */}
            <div className="absolute inset-0 flex lg:hidden flex-col gap-1">
                <div className="flex gap-1 flex-1 justify-center">
                    {heroImages.slice(0, 3).map((image, i) => (
                        <div key={i} className="relative w-[145px] flex-shrink-0 overflow-hidden">
                            <Image src={image.src} alt={image.alt} fill className="object-cover" priority sizes="145px" />
                        </div>
                    ))}
                </div>
                <div className="flex gap-1 flex-1 -ml-[25%]">
                    {heroImages.slice(3, 7).map((image, i) => (
                        <div key={i} className="relative w-[145px] flex-shrink-0 overflow-hidden">
                            <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="145px" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Dark overlay at 45% opacity */}
            <div className="absolute inset-0 bg-primary/30" />

            {/* Text content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-48 text-background">
                <h1 className="font-display font-thin text-center tracking-[-0.02em] text-[32px] leading-[1.1] whitespace-nowrap lg:whitespace-normal lg:text-[100px] lg:leading-[110px] max-w-[1200px]">
                    <span className="block lg:inline">
                        ARCHITECTS <em className="italic font-thin mx-2 lg:mx-4">of</em> THOUGHTFUL
                    </span>{" "}
                    <span className="block lg:inline">CELEBRATIONS</span>
                </h1>
                <p className="font-body font-normal text-center uppercase tracking-[-0.01em] text-[11px] leading-[19px] lg:text-[16px] lg:leading-[28px] mt-6 lg:mt-12 max-w-[640px]">
                    A design-led wedding and event planning & design studio shaping celebrations with intention and grace.
                </p>
            </div>
        </section>
    );
}