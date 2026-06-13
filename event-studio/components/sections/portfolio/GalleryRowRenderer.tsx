import Image from "next/image";
import type { GalleryRow } from "@/data/portfolio";

export default function GalleryRowRenderer({ row }: { row: GalleryRow }) {
  if (row.type === "testimonial") {
    return (
      <div className="my-8 sm:my-10 md:my-12 lg:my-16 xl:my-20 2xl:my-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[1100px] xl:max-w-[1280px] 2xl:max-w-[1440px] mx-auto text-center">
        <blockquote className="font-display font-thin tracking-[0.01em] text-primary text-[20px] leading-[32px] sm:text-[22px] sm:leading-[34px] md:text-[28px] md:leading-[42px] lg:text-[42px] lg:leading-[60px] xl:text-[48px] xl:leading-[66px] 2xl:text-[54px] 2xl:leading-[72px]">
          &ldquo;{row.quote}&rdquo;
        </blockquote>
        <p className="mt-6 sm:mt-7 md:mt-8 font-sans font-light tracking-[0.2em] uppercase text-primary text-[11px] sm:text-[12px] md:text-[13px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]">
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

  const isRatioRow = !!row.ratios;

  // 50/50 rows use aspect ratio on each image (both same width, so same height).
  // Ratio rows use a fixed responsive height on the row, with images filling that height.
  return (
    <div
      className={`grid gap-2 lg:gap-3 items-stretch ${!gridStyle ? "grid-cols-2" : ""} ${
        isRatioRow
          ? "h-[260px] sm:h-[320px] md:h-[400px] lg:h-[440px] xl:h-[500px] 2xl:h-[560px]"
          : ""
      }`}
      style={gridStyle}
    >
      {row.images.map((src, i) => (
        <div
          key={i}
          className={`relative w-full overflow-hidden ${
            isRatioRow ? "h-full" : "aspect-[3/4] lg:aspect-[4/3]"
          }`}
        >
          <Image src={src} alt="" fill className="object-cover" sizes="50vw" />
        </div>
      ))}
    </div>
  );
}

  // 3 images — 2+1 stacked until laptop, 3 columns on laptop+
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