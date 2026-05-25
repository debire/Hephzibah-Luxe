"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const desktopRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: desktopProgress } = useScroll({
    target: desktopRef,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: mobileProgress } = useScroll({
    target: mobileRef,
    offset: ["start start", "end end"],
  });

  const desktopX = useTransform(desktopProgress, [0, 1], ["0%", "-75%"]);
  const mobileX = useTransform(mobileProgress, [0, 1], ["0%", "-65%"]);

  return (
    <>
      {/* Desktop: scroll-pinned horizontal section */}
      <section
        ref={desktopRef}
        className="hidden lg:block relative h-[400vh] bg-background"
      >
        <div className="sticky top-0 h-screen overflow-hidden flex items-center">
          <div className="flex w-full h-full items-center">
            {/* Left: static text column - fixed width, content stays put */}
            <div className="flex-shrink-0 w-[40%] px-12">
              <h2 className="font-display font-thin text-[120px] leading-[130px] tracking-[0] text-primary">
                EXPLORE
                <br />
                <em className="italic font-thin">our</em> SERVICES
              </h2>

              <p className="mt-8 font-body font-light text-[19px] leading-[28px] text-primary max-w-[460px]">
                We design celebrations of every kind — weddings, milestones, corporate events, and private gatherings — each approached with the same level of intention and care. From intimate moments to larger-scale occasions, our focus remains on thoughtful planning, seamless flow, and an experience that feels considered from beginning to end.
              </p>

              <Link
                href="/inquiry"
                className="group mt-10 inline-flex items-center justify-center gap-3 border border-primary px-6 py-3 transition-colors hover:bg-primary hover:text-background"
              >
                <span className="font-body font-light italic text-[20px] leading-[35px] tracking-[0.01em]">
                  Send us a message
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

            {/* Right: horizontally scrolling service cards - constrained to 60% width */}
            <div className="w-[60%] h-full overflow-hidden flex items-center">
              <motion.div
                style={{ x: desktopX }}
                className="flex gap-10 pl-4 pr-12 items-center"
              >
                {services.map((service, i) => (
                  <div
                    key={i}
                    className={`flex-shrink-0 w-[380px] ${
                      i % 2 === 1 ? "-mt-32" : "mt-0"
                    }`}
                  >
                    <div className="relative w-full aspect-[3/4] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="380px"
                      />
                    </div>
                    <h3 className="mt-6 font-display font-thin text-[30px] leading-[1.2] tracking-[0] text-primary">
                      {service.title}
                    </h3>
                    <p className="mt-4 font-body font-light text-[19px] leading-[28px] text-primary">
                      {service.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile: scroll-pinned with text on top, horizontal cards below */}
      <section
        ref={mobileRef}
        className="lg:hidden relative h-[300vh] bg-background"
      >
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
          {/* Top: static text */}
          <div className="px-6 pt-12 pb-6 flex-shrink-0">
            <h2 className="font-display font-thin text-[48px] leading-[52px] tracking-[0] text-primary">
              EXPLORE
              <br />
              <em className="italic font-thin">our</em> SERVICES
            </h2>

            <p className="mt-5 font-body font-light text-[14px] leading-[22px] text-primary">
              We design celebrations of every kind — weddings, milestones, corporate events, and private gatherings — each approached with the same level of intention and care.
            </p>

            <Link
              href="/inquiry"
              className="group mt-5 inline-flex items-center justify-center gap-3 border border-primary px-5 py-2.5 transition-colors hover:bg-primary hover:text-background"
            >
              <span className="font-body font-light italic text-[15px] tracking-[0.01em]">
                Send us a message
              </span>
              <Image
                src="/icons/buttonarrow.svg"
                alt=""
                width={16}
                height={16}
                className="transition-transform group-hover:translate-x-1 group-hover:[filter:invert(1)]"
              />
            </Link>
          </div>

          {/* Bottom: horizontal scrolling cards */}
          <div className="flex-1 overflow-hidden flex items-center">
            <motion.div
              style={{ x: mobileX }}
              className="flex gap-6 pl-6 pr-6 items-center"
            >
              {services.map((service, i) => (
                <div
                  key={i}
                  className={`flex-shrink-0 w-[240px] ${
                    i % 2 === 1 ? "-mt-12" : "mt-0"
                  }`}
                >
                  <div className="relative w-full aspect-[3/4] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="240px"
                    />
                  </div>
                  <h3 className="mt-3 font-display font-thin text-[20px] leading-[1.2] tracking-[0] text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-2 font-body font-light text-[13px] leading-[20px] text-primary">
                    {service.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}