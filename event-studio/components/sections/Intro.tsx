"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const introImages = [
  "/images/hero/herofive.jpg",
  "/images/Intro/introtwo.jpg",
  "/images/Intro/introthree.jpg",
  "/images/Intro/introfour.jpg",
  "/images/Intro/introfive.jpg",
];

export default function Intro() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % introImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-background text-primary">
      <div className="px-6 py-8 lg:px-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-10 items-stretch">
          {/* Left column: logo, heading, paragraphs, button */}
          <div className="flex flex-col">
            {/* Desktop logo */}
            <div className="hidden lg:block mb-6">
              <Image src="/brand/bluelogo.svg" alt="" width={180} height={180} />
            </div>

            {/* Mobile logo - left aligned */}
            <div className="lg:hidden mb-4">
              <Image src="/brand/bluelogo.svg" alt="" width={110} height={110} />
            </div>

            <h2 className="font-display font-thin text-[28px] leading-[34px] lg:text-[45px] lg:leading-[50px] tracking-[0.03em] text-primary max-w-[560px]">
              Behind every seamless celebration is a team defined by care, professionalism, and genuine connection.
            </h2>

            <div className="mt-8 lg:mt-10 space-y-6 max-w-[520px]">
              <p className="font-body font-extralight text-[15px] leading-[26px] lg:text-[19px] lg:leading-[30px] tracking-[0.03em] text-primary">
                Hephzibah Luxe is a design-led wedding and event planning studio guided by intention, care, and refined execution. Our work is shaped by years of experience, a deep respect for meaningful moments, and the belief that celebrations should feel personal, considered, and beautifully brought to life.
              </p>
              <p className="font-body font-extralight text-[15px] leading-[26px] lg:text-[19px] lg:leading-[30px] tracking-[0.03em] text-primary">
                From intimate gatherings to milestone celebrations, we approach every event with presence, creativity, and thoughtful collaboration — curating experiences that feel effortless, warm, and memorable.
              </p>
              <p className="font-body font-extralight italic text-[15px] leading-[26px] lg:text-[19px] lg:leading-[30px] tracking-[0.03em] text-primary">
                The story behind our work is one best discovered through our journey.
              </p>
            </div>

            <Link
              href="/about"
              className="group mt-10 lg:mt-12 inline-flex items-center justify-center gap-3 self-start border border-primary px-6 py-3 transition-colors hover:bg-primary hover:text-background"
            >
              <span className="font-body font-light italic text-[18px] lg:text-[20px] leading-[35px] tracking-[0.01em]">
                About the Brand
              </span>
              <Image
                src="/icons/buttonarrow.svg"
                alt=""
                width={20}
                height={20}
                className="transition-transform group-hover:translate-x-1 group-hover:[filter:invert(1)]"
              />
            </Link>
          </div>

          {/* Right column: image carousel */}
          <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-auto lg:self-stretch lg:mt-[112px] overflow-hidden">
            {introImages.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt="Hephzibah Luxe event"
                fill
                priority={i === 0}
                className={`object-cover transition-opacity duration-1000 ease-in-out ${
                  i === activeIndex ? "opacity-100" : "opacity-0"
                }`}
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}