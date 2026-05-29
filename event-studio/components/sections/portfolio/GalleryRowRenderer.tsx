import Image from "next/image";
import type { GalleryRow } from "@/data/portfolio";

export default function GalleryRowRenderer({ row }: { row: GalleryRow }) {
  if (row.type === "testimonial") {
    return (
      <div className="my-8 lg:my-16 px-4 lg:px-12 max-w-[1100px] mx-auto text-center">
        <blockquote className="font-display font-thin text-primary text-[20px] leading-[32px] lg:text-[42px] lg:leading-[60px] tracking-[0.01em]">
          &ldquo;{row.quote}&rdquo;
        </blockquote>
        <p className="mt-6 font-sans font-light text-[11px] lg:text-[13px] tracking-[0.2em] uppercase text-primary">
          — {row.attribution}
        </p>
      </div>
    );
  }

  const count = row.images.length;

  // Single image
  if (count === 1) {
    return (
      <div className="relative w-full aspect-[3/2] lg:aspect-[5/3] overflow-hidden">
        <Image
          src={row.images[0]}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
    );
  }

  // 2 images
  if (count === 2) {
    const gridStyle = row.ratios
      ? { gridTemplateColumns: `${row.ratios[0]}fr ${row.ratios[1]}fr` }
      : undefined;

    return (
      <div
        className={`grid gap-2 lg:gap-3 items-stretch ${!gridStyle ? "grid-cols-2" : ""}`}
        style={gridStyle}
      >
        {row.images.map((src, i) => (
          <div key={i} className="relative w-full aspect-[3/4] lg:aspect-[4/3] overflow-hidden">
            <Image src={src} alt="" fill className="object-cover" sizes="50vw" />
          </div>
        ))}
      </div>
    );
  }

  // 3 images — 2+1 stacked on mobile, 3 columns on desktop
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
      {row.images.map((src, i) => (
        <div
          key={i}
          className={`relative w-full aspect-[3/4] overflow-hidden ${
            row.images.length === 3 && i === 2 ? "col-span-2 lg:col-span-1" : ""
          }`}
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}