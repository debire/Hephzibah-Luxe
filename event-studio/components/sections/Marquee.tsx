const phrase = "Start with intention";
const phrase2 = "End with an unforgettable celebration";

export default function Marquee() {
  // Build a repeated array of phrases for seamless looping
  const items = Array.from({ length: 6 }, (_, i) =>
    i % 2 === 0 ? phrase : phrase2
  );
  const looped = [...items, ...items];

  return (
    <section className="bg-background overflow-hidden py-8 lg:py-12 border-y border-primary/10">
      <div className="flex animate-scroll-x whitespace-nowrap">
        {looped.map((text, i) => (
          <span
            key={i}
            className="font-body font-light italic text-primary text-[28px] lg:text-[40px] leading-[35px] tracking-[0.01em] px-1 flex items-center"
          >
            {text}
            <span className="mx-6 text-primary/60">·</span>
          </span>
        ))}
      </div>
    </section>
  );
}