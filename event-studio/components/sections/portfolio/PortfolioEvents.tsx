
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Category = "Weddings" | "Birthdays" | "Corporate" | "Social Events";
type Filter = "All Events" | Category;

interface Event {
    image: string;
    location: string;
    year: number;
    title: string;
    category: Category;
    href: string;
}

const events: Event[] = [
    {
        image: "/images/portfoliopage/portfoliotwelve.jpg",
        location: "Lagos, Nigeria",
        year: 2021,
        title: "A Golden 50th: An Intimate Two-Day Celebration of Family, Faith & Joy",
        category: "Birthdays",
        href: "/portfolio/golden-50th",
    },
    {
        image: "/images/portfoliopage/portfoliothirteen.jpg",
        location: "Lagos, Nigeria",
        year: 2022,
        title: "An Intimate 85th: A Celebration of Grace, Family & Legacy",
        category: "Birthdays",
        href: "/portfolio/intimate-85th",
    },
    {
        image: "/images/portfoliopage/portfoliofourteen.jpg",
        location: "Lagos, Nigeria",
        year: 2026,
        title: "Lagos State Government (OPL& CE) MSME Engagement Forum",
        category: "Corporate",
        href: "/portfolio/msme-forum",
    },
    {
        image: "/images/portfoliopage/portfoliofifteen.jpg",
        location: "Lagos, Nigeria",
        year: 2026,
        title: "Catherine & Esai's Nigerian & Togolese Fusion Wedding",
        category: "Weddings",
        href: "/portfolio/catherine-esai",
    },
    {
        image: "/images/portfoliopage/portfoliosixteen.jpg",
        location: "Lagos, Nigeria",
        year: 2023,
        title: "Stephanie's Modern 30th Birthday Dinner Soirée",
        category: "Birthdays",
        href: "/portfolio/stephanie-30th",
    },
];

const filters: Filter[] = ["All Events", "Weddings", "Birthdays", "Corporate", "Social Events"];

export default function PortfolioEvents() {
    const [activeFilter, setActiveFilter] = useState<Filter>("All Events");

    const visibleEvents =
        activeFilter === "All Events"
            ? events
            : events.filter((e) => e.category === activeFilter);

    // Desktop row pattern: 3, 2, 3, 2... — split visible events into rows
    const rows: Event[][] = [];
    let i = 0;
    let pattern = 3;
    while (i < visibleEvents.length) {
        rows.push(visibleEvents.slice(i, i + pattern));
        i += pattern;
        pattern = pattern === 3 ? 2 : 3;
    }

    return (
        <section className="bg-background text-primary">
            <div className="px-4 lg:px-12 py-12 lg:py-16">
                {/* Filter tabs */}
                <div className="flex items-center justify-center flex-nowrap gap-x-4 lg:gap-x-12 mb-12 lg:mb-16 overflow-x-auto scrollbar-hide">
                    {filters.map((filter) => {
                        const isActive = activeFilter === filter;
                        return (
                            <button
                                key={filter}
                                type="button"
                                onClick={() => setActiveFilter(filter)}
                                className={`font-sans font-light text-[13px] lg:text-[20px] leading-[184%] tracking-[-0.03em] text-center whitespace-nowrap pb-1 transition-colors ${isActive
                                    ? "text-primary border-b-2 border-primary"
                                    : "text-primary/70 hover:text-primary"
                                    }`}
                            >
                                {filter}
                            </button>
                        );
                    })}
                </div>

                {/* Empty state */}
                {visibleEvents.length === 0 ? (
                    <div className="flex flex-col items-center text-center py-12 lg:py-20 mx-auto">
                        <h3 className="font-display font-thin text-[28px] lg:text-[42px] leading-[120%] lg:leading-[110%] tracking-[0.01em] text-primary lg:whitespace-nowrap">
                            Your Celebration Could Be The Next Story We Tell
                        </h3>
                        <p className="mt-6 font-body font-light italic text-[15px] leading-[26px] lg:text-[17px] lg:leading-[28px] text-primary max-w-[560px]">
                            We design {activeFilter === "Social Events" ? "social events" : activeFilter.toLowerCase()} with intention, warmth, and refined detail — always centred around you. Ready to Begin? Let&apos;s create something amazing
                        </p>

                        <Link
                            href="/inquiry"
                            className="group mt-10 inline-flex items-center gap-4 border border-primary px-6 py-3 transition-colors hover:bg-primary"
                        >
                            <span className="font-body font-light italic text-[16px] leading-[26px] text-primary group-hover:text-background transition-colors">
                                Send us a message
                            </span>
                            <Image
                                src="/icons/buttonarrow.svg"
                                alt=""
                                width={18}
                                height={18}
                                className="transition-[filter,transform] group-hover:[filter:invert(1)] group-hover:translate-x-1"
                            />
                        </Link>
                    </div>
                ) : (
                    <>
                        {/* Mobile: simple 2-column grid */}
                        <div className="lg:hidden grid grid-cols-2 gap-x-4 gap-y-10">
                            {visibleEvents.map((event, idx) => (
                                <EventCard key={`${event.href}-${idx}`} event={event} />
                            ))}
                        </div>

                        {/* Desktop: 3-2-3-2 row pattern */}
                        <div className="hidden lg:flex flex-col gap-y-14">
                            {rows.map((rowEvents, rowIdx) => (
                                <div
                                    key={rowIdx}
                                    className={`grid gap-8 ${rowEvents.length === 3 ? "grid-cols-3" : "grid-cols-2"
                                        }`}
                                >
                                    {rowEvents.map((event, idx) => (
                                        <EventCard
                                            key={`${event.href}-${rowIdx}-${idx}`}
                                            event={event}
                                            compact={rowEvents.length === 2}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}

function EventCard({ event, compact = false }: { event: Event; compact?: boolean }) {
    return (
        <Link href={event.href} className="group block">
            <div
                className={`relative w-full overflow-hidden ${compact ? "aspect-[3/4] lg:aspect-[9/8]" : "aspect-[3/4]"
                    }`}
            >
                <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                />
            </div>

            <p className="mt-4 font-sans font-light text-[12px] lg:text-[15px] leading-[184%] tracking-[-0.03em] uppercase text-primary">
                {event.location} — {event.year}
            </p>
            <h3 className="mt-1 font-display font-light text-[18px] leading-[24px] lg:text-[24px] lg:leading-[32px] tracking-[0.01em] text-primary">
                {event.title}
            </h3>
        </Link>
    );
}