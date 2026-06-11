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
        <section className="relative z-40 bg-secondary text-background py-14 sm:py-16 md:py-20 lg:py-16 xl:py-20 2xl:py-24 overflow-hidden">
            <div className="px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                    >
                        {testimonials.map((t, i) => (
                            <div key={i} className="w-full flex-shrink-0">
                                {/* Stacked / float layout (< lg): mobile portrait, landscape, iPad */}
                                <div className="lg:hidden">
                                    <div className="float-left w-[110px] sm:w-[130px] md:w-[160px] mr-5 sm:mr-6 md:mr-7 mb-2">
                                        <div className="relative w-full aspect-[3/4] overflow-hidden">
                                            <Image
                                                src={t.image}
                                                alt={t.name}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 130px, 160px"
                                                priority={i === 0}
                                            />
                                        </div>
                                    </div>

                                    <h2 className="font-display font-thin tracking-[0] text-background text-[24px] sm:text-[28px] md:text-[36px] leading-[100%] pt-3 md:pt-4">
                                        {t.name}
                                    </h2>

                                    <p className="mt-7 sm:mt-8 md:mt-10 font-body font-medium text-background text-[14px] leading-[20px] sm:text-[15px] sm:leading-[22px] md:text-[17px] md:leading-[24px]">
                                        {t.subheader}
                                    </p>

                                    <p className="mt-4 sm:mt-5 md:mt-6 font-body font-light text-background text-[14px] leading-[22px] sm:text-[15px] sm:leading-[24px] md:text-[18px] md:leading-[28px]">
                                        {t.quote}
                                    </p>

                                    <div className="clear-both" />

                                    <Link
                                        href={t.href}
                                        className="group mt-8 sm:mt-9 md:mt-10 inline-flex items-center justify-center gap-3 border border-background px-6 py-3 md:px-7 md:py-3.5 transition-colors hover:bg-background"
                                    >
                                        <span className="font-body font-light italic tracking-[0.01em] text-background group-hover:text-secondary transition-colors text-[16px] sm:text-[17px] md:text-[19px]">
                                            {t.cta}
                                        </span>
                                        <span className="relative inline-block w-[18px] h-[18px] md:w-[19px] md:h-[19px]">
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

                                {/* Two-column layout (lg+): laptop, monitor */}
                                <div className="hidden lg:grid grid-cols-2 gap-16 xl:gap-20 2xl:gap-24 items-stretch">
                                    <div className="relative w-full min-h-[560px] xl:min-h-[640px] 2xl:min-h-[720px] overflow-hidden">
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
                                        <h2 className="font-display font-thin tracking-[0] text-background text-[44px] xl:text-[52px] 2xl:text-[60px] leading-[100%]">
                                            {t.name}
                                        </h2>

                                        <p className="mt-32 xl:mt-36 2xl:mt-40 font-body font-medium text-background text-[20px] leading-[25px] xl:text-[22px] xl:leading-[28px] 2xl:text-[24px] 2xl:leading-[30px]">
                                            {t.subheader}
                                        </p>

                                        <p className="mt-6 xl:mt-7 2xl:mt-8 font-body font-light text-background text-[20px] leading-[25px] xl:text-[22px] xl:leading-[32px] 2xl:text-[24px] 2xl:leading-[36px] max-w-[560px] xl:max-w-[640px] 2xl:max-w-[720px]">
                                            {t.quote}
                                        </p>

                                        <Link
                                            href={t.href}
                                            className="group mt-10 xl:mt-12 inline-flex items-center justify-center gap-3 self-start border border-background px-6 py-3 xl:px-7 xl:py-3.5 2xl:px-8 2xl:py-4 transition-colors hover:bg-background"
                                        >
                                            <span className="font-body font-light italic tracking-[0.01em] text-background group-hover:text-secondary transition-colors text-[20px] leading-[35px] xl:text-[22px] 2xl:text-[24px]">
                                                {t.cta}
                                            </span>
                                            <span className="relative inline-block w-[20px] h-[20px] xl:w-[22px] xl:h-[22px] 2xl:w-[24px] 2xl:h-[24px]">
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
                <div className="flex items-center justify-center gap-3 mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            aria-label={`Go to testimonial ${i + 1}`}
                            className={`h-2.5 w-2.5 md:h-3 md:w-3 xl:h-3.5 xl:w-3.5 rounded-full border border-background transition-colors ${i === activeIndex ? "bg-background" : "bg-[#C4C4C480]"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}