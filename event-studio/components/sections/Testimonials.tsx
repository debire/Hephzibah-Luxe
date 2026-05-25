"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
    {
        image: "/images/testimonial/testimonialone.jpg",
        name: "Lagos State Government",
        subheader: "Lagos State Government (OPL & CE) MSME Engagement Forum",
        quote:
            "“Working with Hephzibah Luxe was a wonderful experience. Despite the short notice and tight budget, the team ensured the event was well organised and ran smoothly from start to finish. Their coordination and attention to detail helped create a welcoming and professional atmosphere for our guests. We truly appreciated their commitment and calm execution throughout the process.”",
        cta: "View their Forum",
        href: "/portfolio",
    },
    {
        image: "/images/testimonial/testimonialtwo.jpg",
        name: "Winnie, Celebrant",
        subheader: "A Golden 50th: An Intimate Two-Day Celebration of Family, Faith & Joy",
        quote:
            "“I wanted something simple, but meaningful — and that's exactly what this was. Every detail felt intentional, and the photos captured me in such a beautiful and authentic way. There was a quiet attention to detail that made me feel completely at ease, and that really reflected in the final images. What I loved most is that the focus never shifted away from me. It truly felt like the perfect way to step into fifty.”",
        cta: "View her Birthday",
        href: "/portfolio",
    },
    {
        image: "/images/testimonial/testimonialthree.jpg",
        name: "Shola, Manager",
        subheader: "Lagos State Government (OPL & CE) MSME Engagement Forum",
        quote:
            "“Hephzibah Luxe delivered an exceptionally well-organised event from start to finish. Their attention to detail, calm coordination, and ability to manage multiple stakeholders allowed our team to focus on the purpose of the launch while trusting that every element was handled seamlessly. The experience was polished, professional, and executed to a very high standard.”",
        cta: "View their Launch",
        href: "/portfolio",
    },
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative z-40 bg-secondary text-background py-16 lg:py-16 overflow-hidden">
            <div className="px-6 lg:px-12">
                {/* Slide track */}
                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                    >
                        {testimonials.map((t, i) => (
                            <div
                                key={i}
                                className="w-full flex-shrink-0"
                            >
                                {/* Mobile layout: image floated left, text wraps */}
                                <div className="lg:hidden">
                                    <div className="float-left w-[100px] mr-5 mb-2">
                                        <div className="relative w-full aspect-[3/4] overflow-hidden">
                                            <Image
                                                src={t.image}
                                                alt={t.name}
                                                fill
                                                className="object-cover"
                                                sizes="160px"
                                                priority={i === 0}
                                            />
                                        </div>
                                    </div>

                                    <h2 className="font-display font-thin text-[24px] leading-[100%] tracking-[0] text-background pt-3">
                                        {t.name}
                                    </h2>

                                    <p className="mt-7 font-body font-medium text-[14px] leading-[20px] text-background">
                                        {t.subheader}
                                    </p>

                                    <p className="mt-4 font-body font-light text-[14px] leading-[22px] text-background">
                                        {t.quote}
                                    </p>

                                    <div className="clear-both" />

                                    <Link
                                        href={t.href}
                                        className="group mt-8 inline-flex items-center justify-center gap-3 border border-background px-6 py-3 transition-colors hover:bg-background"
                                    >
                                        <span className="font-body font-light italic text-[16px] tracking-[0.01em] text-background group-hover:text-secondary transition-colors">
                                            {t.cta}
                                        </span>
                                        <span className="relative inline-block w-[18px] h-[18px]">
                                            <Image
                                                src="/icons/whitebuttonarrow.svg"
                                                alt=""
                                                fill
                                                className="object-contain transition-opacity group-hover:opacity-0"
                                            />
                                            <Image
                                                src="/icons/buttonarrow.svg"
                                                alt=""
                                                fill
                                                className="object-contain opacity-0 transition-opacity group-hover:opacity-100"
                                            />
                                        </span>
                                    </Link>
                                </div>

                                {/* Desktop layout: two-column grid */}
                                <div className="hidden lg:grid grid-cols-2 gap-16 items-start">
                                    <div className="relative w-full h-[560px] overflow-hidden">
                                        <Image
                                            src={t.image}
                                            alt={t.name}
                                            fill
                                            className="object-cover"
                                            sizes="50vw"
                                            priority={i === 0}
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <h2 className="font-display font-thin text-[60px] leading-[100%] tracking-[0] text-background">
                                            {t.name}
                                        </h2>

                                        <p className="mt-32 font-body font-medium text-[20px] leading-[25px] text-background">
                                            {t.subheader}
                                        </p>

                                        <p className="mt-6 font-body font-light text-[20px] leading-[25px] text-background max-w-[560px]">
                                            {t.quote}
                                        </p>

                                        <Link
                                            href={t.href}
                                            className="group mt-10 inline-flex items-center justify-center gap-3 self-start border border-background px-6 py-3 transition-colors hover:bg-background"
                                        >
                                            <span className="font-body font-light italic text-[20px] leading-[35px] tracking-[0.01em] text-background group-hover:text-secondary transition-colors">
                                                {t.cta}
                                            </span>
                                            <span className="relative inline-block w-[20px] h-[20px]">
                                                <Image
                                                    src="/icons/whitebuttonarrow.svg"
                                                    alt=""
                                                    fill
                                                    className="object-contain transition-opacity group-hover:opacity-0"
                                                />
                                                <Image
                                                    src="/icons/buttonarrow.svg"
                                                    alt=""
                                                    fill
                                                    className="object-contain opacity-0 transition-opacity group-hover:opacity-100"
                                                />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination dots */}
                <div className="flex items-center justify-center gap-3 mt-6 lg:mt-12">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            aria-label={`Go to testimonial ${i + 1}`}
                            className={`h-2.5 w-2.5 rounded-full border border-background transition-colors ${i === activeIndex ? "bg-background" : "bg-[#C4C4C480]"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}