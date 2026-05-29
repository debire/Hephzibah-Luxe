"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const portfolioImages = [
  "/images/portfoliopage/portfolioone.jpg",
  "/images/portfoliopage/portfoliotwo.jpg",
  "/images/portfoliopage/portfoliothree.jpg",
  "/images/portfoliopage/portfoliofour.jpg",
  "/images/portfoliopage/portfoliofive.jpg",
  "/images/portfoliopage/portfoliosix.jpg",
  "/images/portfoliopage/portfolioseven.jpg",
  "/images/portfoliopage/portfolioeight.jpg",
  "/images/portfoliopage/portfolionine.jpg",
  "/images/portfoliopage/portfolioten.jpg",
  "/images/portfoliopage/portfolioeleven.jpg",
];

export default function PortfolioHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % portfolioImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-primary overflow-hidden">
      <div className="relative z-10 pt-20 lg:pt-16 pb-20 lg:pb-32 flex flex-col items-center">
        <h1
          className="font-display font-thin text-background text-center relative z-20 text-[72px] lg:text-[150px] leading-[100%] tracking-[0.03em]"
        >
          PORTFOLIO
        </h1>

        {/* Image overlaps the heading by ~50% of its height */}
        <div className="relative -mt-[36px] lg:-mt-[72px] w-[300px] h-[330px] lg:w-[500px] lg:h-[550px] overflow-hidden z-10">
          {portfolioImages.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt=""
              fill
              priority={i === 0}
              className={`object-cover transition-opacity duration-1000 ease-in-out ${
                i === activeIndex ? "opacity-100" : "opacity-0"
              }`}
              sizes="(max-width: 1024px) 300px, 500px"
            />
          ))}
        </div>
      </div>
    </section>
  );
}