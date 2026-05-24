import Image from "next/image";
import Link from "next/link";

export default function BeforeAfter() {
  return (
    <section className="bg-background text-primary">
      <div className="flex flex-col items-center px-6 py-20 lg:px-12 lg:py-32">
        <p className="font-display font-thin text-center text-[22px] leading-[37px] lg:text-[40px] lg:leading-[55px] tracking-[0] text-primary max-w-[1000px]">
          Our work goes beyond planning — it's about reimagining spaces with intention and care. Explore how thoughtful design transforms familiar settings into meaningful, elevated celebrations. These before-and-after moments reveal how vision and design can completely change the way a space feels.
        </p>

        <Link
          href="/before-and-after"
          className="group mt-12 lg:mt-16 inline-flex items-center justify-center gap-3 border border-primary px-6 py-3 transition-colors hover:bg-primary hover:text-background"
        >
          <span className="font-body font-light italic text-[18px] lg:text-[20px] leading-[35px] tracking-[0.01em]">
            View Our Before & After
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
    </section>
  );
}