import Image from "next/image";

const W = 1300;
const H = 900;

const POS = {
  h1: { top: 64, left: 40 },
  h2: { top: 200, left: 280 },
  leftImg: { top: 270, left: 30, w: 380, h: 470 },
  topRightImg: { top: 70, left: 850, w: 340, h: 280 },
  paragraphs: { top: 400, left: 430, w: 700 },
  bottomRightImg: { top: 700, w: 260, h: 200 },
};

function HeadingBlock({ color }: { color: "primary" | "background" }) {
  const cls = color === "primary" ? "text-primary" : "text-background";
  return (
    <>
      <h1
        className={`absolute font-display font-thin ${cls} text-[110px] leading-[120px] tracking-[-0.005em] whitespace-nowrap`}
        style={{ top: POS.h1.top, left: POS.h1.left }}
      >
        ABOUT <span className="italic">the</span> BRAND
      </h1>
      <h2
        className={`absolute font-display font-thin italic ${cls} text-[110px] leading-[120px] whitespace-nowrap`}
        style={{ top: POS.h2.top, left: POS.h2.left }}
      >
        Hephzibah Luxe
      </h2>
    </>
  );
}

// Mobile headings — placed once in dark, overlaid in white where they cross images
function MobileHeadings({ color }: { color: "primary" | "background" }) {
  const cls = color === "primary" ? "text-primary" : "text-background";
  return (
    <>
      <h1
        className={`font-display font-thin ${cls} text-[52px] leading-[58px] sm:text-[68px] sm:leading-[74px] md:text-[88px] md:leading-[96px] tracking-[-0.005em] whitespace-nowrap`}
      >
        ABOUT <span className="italic">the</span> BRAND
      </h1>
      <h2
        className={`mt-1 sm:mt-1.5 md:mt-2 font-display font-thin italic ${cls} text-[52px] leading-[58px] sm:text-[68px] sm:leading-[74px] md:text-[88px] md:leading-[96px] whitespace-nowrap`}
      >
        Hephzibah Luxe
      </h2>
    </>
  );
}

export default function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      {/* ─────────────── Desktop ─────────────── */}
      <div className="hidden lg:block relative">
        <div className="relative mx-auto" style={{ width: W, height: H }}>
          <HeadingBlock color="primary" />

          <div
            className="absolute"
            style={{ top: POS.paragraphs.top, left: POS.paragraphs.left, width: POS.paragraphs.w }}
          >
            <p className="font-body font-light text-primary text-[19px] leading-[31px] tracking-[-0.005em] mb-6">
              Hephzibah Luxe was born from years of experience long before it had a name. For over a decade, we planned informally — bringing together family celebrations, milestone moments, and meaningful gatherings with care, precision, and heart. What began as a natural calling evolved into a refined practice shaped by trust, relationships, and an understanding of what truly makes a celebration memorable.
            </p>
            <p className="font-body font-light text-primary text-[19px] leading-[31px] tracking-[-0.005em] mb-6">
              Rooted in faith and inspired by God, Hephzibah Luxe is guided by the belief that celebrations are sacred moments — worthy of intention, beauty, and excellence. Through long-standing relationships with a trusted network of vendors, we curate experiences that feel seamless, thoughtful, and elevated.
            </p>
            <p className="font-body font-light text-primary text-[19px] leading-[31px] tracking-[-0.005em]">
              Today, Hephzibah Luxe blends heritage with modern execution. Design sits at the heart of everything we do, combining creative direction with thoughtful planning systems to offer a more refined way to plan — one that prioritises clarity, collaboration, and ease, while honouring each couple&apos;s individuality.
            </p>
          </div>

          {/* Left image + white-text overlay */}
          <div
            className="absolute overflow-hidden"
            style={{ top: POS.leftImg.top, left: POS.leftImg.left, width: POS.leftImg.w, height: POS.leftImg.h }}
          >
            <Image src="/images/aboutpage/aboutone.jpg" alt="" fill className="object-cover" priority sizes="380px" />
            <div
              className="absolute"
              style={{ top: -POS.leftImg.top, left: -POS.leftImg.left, width: W }}
            >
              <HeadingBlock color="background" />
            </div>
          </div>

          {/* Top-right image + white-text overlay */}
          <div
            className="absolute overflow-hidden"
            style={{ top: POS.topRightImg.top, left: POS.topRightImg.left, width: POS.topRightImg.w, height: POS.topRightImg.h }}
          >
            <Image src="/images/aboutpage/abouttwo.jpg" alt="" fill className="object-cover" priority sizes="340px" />
            <div
              className="absolute"
              style={{ top: -POS.topRightImg.top, left: -POS.topRightImg.left, width: W }}
            >
              <HeadingBlock color="background" />
            </div>
          </div>

          {/* Bottom-right image — bleeds off right edge, sits inside canvas */}
          <div
            className="absolute"
            style={{
              top: POS.bottomRightImg.top,
              right: -115,
              width: POS.bottomRightImg.w,
              height: POS.bottomRightImg.h,
            }}
          >
            <Image src="/images/aboutpage/aboutthree.jpg" alt="" fill className="object-cover" sizes="260px" />
          </div>
        </div>
      </div>


{/* ─────────────── Mobile / Landscape / iPad ─────────────── */}
<div className="lg:hidden relative overflow-hidden">
  {/* Heading row — centered heading with top-right image overlapping */}
  <div className="relative px-4 sm:px-6 md:px-8 pt-6 sm:pt-8 md:pt-10">
    {/* Centered dark heading */}
    <div className="text-center">
      <MobileHeadings color="primary" />
    </div>

{/* Top-right image — bleeds off right, sits below top with space above, overlays heading text */}
<div className="absolute top-8 sm:top-10 md:top-12 -right-6 sm:-right-8 md:-right-10 w-[36%] sm:w-[34%] md:w-[32%] aspect-[4/3] overflow-hidden z-20">
  <Image src="/images/aboutpage/abouttwo.jpg" alt="" fill className="object-cover" priority sizes="40vw" />
  {/* White heading overlay — shifted up to compensate for image's top offset, so heading lands at correct page position */}
  <div className="absolute -top-2 sm:-top-2 md:-top-2 right-6 sm:right-8 md:right-10 w-screen text-center">
    <MobileHeadings color="background" />
  </div>
</div>
  </div>

  {/* Content row — left image + first paragraph side by side */}
  <div className="relative px-4 sm:px-6 md:px-8 flex items-start gap-4 sm:gap-5 md:gap-6">
    {/* Left image — bleeds off left, extends up into heading area, with white-overlay heading */}
    <div className="relative w-[46%] sm:w-[44%] md:w-[42%] aspect-[5/8] sm:aspect-[5/8] md:aspect-[4/7] -ml-8 sm:-ml-10 md:-ml-12 -mt-16 sm:-mt-20 md:-mt-24 flex-shrink-0 overflow-hidden z-10">
      <Image src="/images/aboutpage/aboutone.jpg" alt="" fill className="object-cover" priority sizes="46vw" />
      {/* White heading overlay — positioned to align with the dark heading above */}
      <div className="absolute -top-[56px] sm:-top-[74px] md:-top-[104px] left-8 sm:left-10 md:left-12 w-screen text-center">
        <MobileHeadings color="background" />
      </div>
    </div>

    {/* First paragraph — sits beside left image */}
    <p className="font-body font-light text-primary text-[15px] leading-[26px] sm:text-[16px] sm:leading-[28px] md:text-[18px] md:leading-[30px] tracking-[-0.005em] flex-1">
      Hephzibah Luxe was born from years of experience long before it had a name. For over a decade, we planned informally — bringing together family celebrations, milestone moments, and meaningful gatherings with care, precision, and heart. What began as a natural calling evolved into a refined practice shaped by trust, relationships, and an understanding of what truly makes a celebration memorable.
    </p>
  </div>

{/* Remaining paragraphs — full width */}
<div className="px-4 sm:px-6 md:px-8 mt-3 sm:mt-4 md:mt-4 font-body font-light text-primary text-[15px] leading-[26px] sm:text-[16px] sm:leading-[28px] md:text-[18px] md:leading-[30px] tracking-[-0.005em] relative">
  <p className="mb-3 sm:mb-4">
    Rooted in faith and inspired by God, Hephzibah Luxe is guided by the belief that celebrations are sacred moments — worthy of intention, beauty, and excellence. Through long-standing relationships with a trusted network of vendors, we curate experiences that feel seamless, thoughtful, and elevated.
  </p>
  <p>
    {/* Image floats right at top of paragraph; text wraps left + below image */}
    <span className="block float-right relative w-[40%] sm:w-[38%] md:w-[36%] aspect-[4/3] -mr-4 sm:-mr-6 md:-mr-8 ml-4 mb-0 overflow-hidden">
      <Image src="/images/aboutpage/aboutthree.jpg" alt="" fill className="object-cover" sizes="40vw" />
    </span>
    Today, Hephzibah Luxe blends heritage with modern execution. Design sits at the heart of everything we do, combining creative direction with thoughtful planning systems to offer a more refined way to plan — one that prioritises clarity, collaboration, and ease, while honouring each couple&apos;s individuality.
  </p>
</div>
</div>
    </section>
  );
}