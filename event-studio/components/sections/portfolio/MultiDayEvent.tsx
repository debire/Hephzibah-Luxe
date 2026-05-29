import Image from "next/image";
import Link from "next/link";
import type { PortfolioEvent } from "@/data/portfolio";

export default function MultiDayEvent({ event }: { event: PortfolioEvent }) {
  return (
    <section className="bg-background text-primary">
      <div className="px-4 lg:px-12 py-10 lg:py-14">
        {/* Back link */}
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 font-sans font-light text-[13px] lg:text-[14px] text-primary hover:opacity-70 transition-opacity"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          <span className="underline underline-offset-4">View all Events</span>
        </Link>

        {/* Location + year */}
        <p className="mt-10 lg:mt-12 font-sans font-light text-[12px] lg:text-[14px] leading-[184%] tracking-[-0.03em] uppercase text-primary">
          {event.location} — {event.year}
        </p>

        {/* Title */}
        <h1 className="mt-2 font-display font-thin italic text-primary text-[28px] leading-[36px] lg:text-[43px] lg:leading-[52px] tracking-[0.02em]">
          {event.title}
        </h1>

        {/* Description paragraphs */}
        {event.description && (
          <div className="mt-8 max-w-[1450px] space-y-3">
            {event.description.map((para, idx) => (
              <p
                key={idx}
                className="font-body font-light text-primary text-[14px] leading-[24px] lg:text-[15px] lg:leading-[25px]"
              >
                {para}
              </p>
            ))}
          </div>
        )}

        {/* Sub-events grid */}
        {event.subEvents && event.subEvents.length > 0 && (
          <div className="mt-14 lg:mt-20 grid grid-cols-2 md:grid-cols-3 gap-x-4 lg:gap-x-8 gap-y-12">
            {event.subEvents.map((sub) => (
              <Link
                key={sub.slug}
                href={`/portfolio/${event.slug}/${sub.slug}`}
                className="group block"
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden">
                  <Image
                    src={sub.image}
                    alt={sub.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <p className="mt-5 font-sans font-light text-[13px] lg:text-[15px] leading-[184%] tracking-[-0.03em] uppercase text-primary">
                  {sub.subtitle}
                </p>
                <h3 className="mt-1 font-display font-light text-primary text-[15px] leading-[28px] lg:text-[24px] lg:leading-[32px] tracking-[0.01em]">
                  {sub.title}
                </h3>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}