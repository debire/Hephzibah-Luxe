import Image from "next/image";
import Link from "next/link";

const services = [
    {
        image: "/images/hero/herofive.jpg",
        title: "Weddings",
        description:
            "Thoughtfully planned weddings that honour your story, your culture, and your vision — guided with care from the first conversation to the final moment.",
    },
    {
        image: "/images/servicespage/birthday.jpg",
        title: "Birthdays & Milestones",
        description:
            "From intimate dinners to meaningful milestones, we curate celebrations that feel personal, refined, and beautifully considered — shaped to honour the moment and the people gathered to celebrate it.",
    },
    {
        image: "/images/intro/introfive.jpg",
        title: "Corporate & Brand Events",
        description:
            "Polished, intentional events designed to reflect your brand, engage your guests, and deliver a seamless, elevated experience from arrival to conclusion.",
    },
    {
        image: "/images/hero/heroone.jpg",
        title: "Private Events & Social Gatherings",
        description:
            "Private dinners, proposals, naming ceremonies, and intimate gatherings — thoughtfully shaped moments, held with the same care and intention as our largest celebrations.",
    },
];

export default function ExploreServices() {
    return (
        <section className="bg-background py-16 lg:py-24 overflow-hidden">
            <div className="px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    {/* Left: sticky text content - 55% */}
                    <div className="lg:w-[55%] lg:sticky lg:top-32 h-fit flex-shrink-0">
                        <h2 className="font-display font-thin text-primary mb-8 text-[64px] leading-[1] lg:text-[120px] lg:leading-[1.05] tracking-[0]">
                            <span className="block">EXPLORE</span>
                            <span className="block">
                                <em className="italic font-thin">our</em> SERVICES
                            </span>
                        </h2>

                        <p className="font-body font-light text-primary text-[15px] leading-[26px] lg:text-[19px] lg:leading-[28px] mb-10 max-w-[560px]">
                            We design celebrations of every kind — weddings, milestones, corporate events, and private gatherings — each approached with the same level of intention and care. From intimate moments to larger-scale occasions, our focus remains on thoughtful planning, seamless flow, and an experience that feels considered from beginning to end.
                        </p>

                        <Link
                            href="/inquiry"
                            className="group inline-flex items-center justify-center gap-6 border border-primary px-6 py-3 transition-colors hover:bg-primary"
                        >
                            <span className="font-body font-light italic text-[18px] lg:text-[20px] tracking-[0.01em] text-primary group-hover:text-background transition-colors">
                                Send us a message
                            </span>
                            <span className="relative inline-block w-[20px] h-[20px]">
                                <Image
                                    src="/icons/buttonarrow.svg"
                                    alt=""
                                    fill
                                    className="object-contain transition-opacity group-hover:opacity-0"
                                />
                                <Image
                                    src="/icons/whitebuttonarrow.svg"
                                    alt=""
                                    fill
                                    className="object-contain opacity-0 transition-opacity group-hover:opacity-100"
                                />
                            </span>
                        </Link>
                    </div>

                    {/* Right: horizontal scroll cards - 45% */}
                    <div className="lg:w-[45%] min-w-0">
                        <div className="flex gap-8 overflow-x-auto pb-2 scrollbar-hide">
                            {services.map((service, i) => (
                                <div
                                    key={i}
                                    className={`flex-none w-[300px] md:w-[340px] group ${i % 2 === 0 ? "mt-12 lg:mt-20" : ""
                                        }`}
                                >
                                    <div className="relative w-full aspect-[3/4] overflow-hidden mb-6">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            sizes="340px"
                                        />
                                    </div>
                                    <h3 className="font-display font-thin text-primary text-[26px] lg:text-[30px] mb-3 leading-tight tracking-[0]">
                                        {service.title}
                                    </h3>
                                    <p className="font-body font-light text-primary text-[15px] lg:text-[19px] leading-[24px] lg:leading-[28px]">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}