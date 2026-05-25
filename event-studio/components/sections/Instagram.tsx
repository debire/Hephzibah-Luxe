import Image from "next/image";
import Link from "next/link";

const instagramImages = [
  "/images/hero/herofive.jpg",
  "/images/insta/instagramtwo.jpg",
  "/images/insta/instagramthree.jpg",
  "/images/intro/introfive.jpg",
];

export default function Instagram() {
  return (
    <section className="relative z-40 bg-background text-primary py-16 lg:py-24">
      <div className="px-6 lg:px-12">
        {/* Top row: heading + button (desktop side-by-side, mobile heading only) */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10 lg:mb-16">
          <h2 className="font-display font-thin text-[36px] leading-[44px] lg:text-[55px] lg:leading-[60px] tracking-[0] text-primary max-w-[500px]">
            Follow <em className="italic">Hephzibah Luxe</em>
            <span className="block pl-12 lg:pl-20">On Instagram</span>
          </h2>

          {/* Desktop button - top right */}
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex group items-center justify-between gap-6 self-start border border-primary px-6 py-4 transition-colors hover:bg-primary hover:text-background min-w-[340px]"
          >
            <span className="font-sans text-[14px] tracking-[0.15em] uppercase text-primary group-hover:text-background transition-colors">
              Follow Hephzibah Luxe
            </span>
            <Image
              src="/icons/instagram.svg"
              alt=""
              width={22}
              height={22}
              className="group-hover:[filter:invert(1)] transition-[filter]"
            />
          </Link>
        </div>

        {/* Image grid - 4 columns on both mobile and desktop */}
        <div className="grid grid-cols-4 gap-3 lg:gap-6">
          {instagramImages.map((src, i) => (
            <div key={i} className="relative aspect-square overflow-hidden">
              <Image
                src={src}
                alt=""
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 1024px) 25vw, 20vw"
              />
            </div>
          ))}
        </div>

        {/* Mobile button - below images */}
        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="lg:hidden mt-8 group flex items-center justify-center gap-4 border border-primary px-6 py-4 transition-colors hover:bg-primary"
        >
          <span className="font-sans text-[13px] tracking-[0.15em] uppercase text-primary group-hover:text-background transition-colors">
            Follow Hephzibah Luxe
          </span>
          <Image
            src="/icons/instagram.svg"
            alt=""
            width={22}
            height={22}
            className="group-hover:[filter:invert(1)] transition-[filter]"
          />
        </Link>
      </div>
    </section>
  );
}