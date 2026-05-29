import Link from "next/link";
import type { PortfolioEvent } from "@/data/portfolio";
import GalleryRowRenderer from "./GalleryRowRenderer";

export default function SingleDayEvent({ event }: { event: PortfolioEvent }) {
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
        <h1 className="mt-2 font-display font-thin italic text-primary text-[28px] leading-[36px] lg:text-[45px] lg:leading-[52px] tracking-[0.02em]">
          {event.title}
        </h1>

        {/* Description */}
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

        {/* Gallery */}
        {event.gallery && (
          <div className="mt-12 lg:mt-16 flex flex-col gap-2 lg:gap-3">
            {event.gallery.map((row, idx) => (
              <GalleryRowRenderer key={idx} row={row} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}