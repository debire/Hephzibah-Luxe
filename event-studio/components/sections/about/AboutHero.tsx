// import Image from "next/image";

// // Fixed-width design canvas. Section has overflow-hidden so excess clips
// // gracefully on narrower viewports (sides clip equally via mx-auto).
// const W = 1300;
// const H = 900;

// // All positions in container space, left/top-based for consistency.
// const POS = {
//   h1: { top: 64, left: 40 },
//   h2: { top: 200, left: 280 },
//   leftImg: { top: 270, left: 30, w: 380, h: 470 },
//   topRightImg: { top: 70, left: 920, w: 340, h: 250 },
//   paragraphs: { top: 400, left: 430, w: 760 },
//   bottomRightImg: { w: 220, h: 165 }, // Positioned on section, not container
// };

// function HeadingBlock({ color }: { color: "primary" | "background" }) {
//   const cls = color === "primary" ? "text-primary" : "text-background";
//   return (
//     <>
//       <h1
//         className={`absolute font-display font-thin ${cls} text-[110px] leading-[120px] tracking-[-0.005em] whitespace-nowrap`}
//         style={{ top: POS.h1.top, left: POS.h1.left }}
//       >
//         ABOUT <span className="italic">the</span> BRAND
//       </h1>
//       <h2
//         className={`absolute font-display font-thin italic ${cls} text-[110px] leading-[120px] whitespace-nowrap`}
//         style={{ top: POS.h2.top, left: POS.h2.left }}
//       >
//         Hephzibah Luxe
//       </h2>
//     </>
//   );
// }

// export default function AboutHero() {
//   return (
//     <section className="relative w-full overflow-hidden bg-background">
//       {/* ─────────────── Desktop ─────────────── */}
//       <div className="hidden lg:block relative">
//         <div className="relative mx-auto" style={{ width: W, height: H }}>
//           {/* Layer 1: Dark heading */}
//           <HeadingBlock color="primary" />

//           {/* Paragraphs */}
//           <div
//             className="absolute"
//             style={{ top: POS.paragraphs.top, left: POS.paragraphs.left, width: POS.paragraphs.w }}
//           >
//             <p className="font-body font-light text-primary text-[19px] leading-[31px] tracking-[-0.005em] mb-6">
//               Hephzibah Luxe was born from years of experience long before it had a name. For over a decade, we planned informally — bringing together family celebrations, milestone moments, and meaningful gatherings with care, precision, and heart. What began as a natural calling evolved into a refined practice shaped by trust, relationships, and an understanding of what truly makes a celebration memorable.
//             </p>
//             <p className="font-body font-light text-primary text-[19px] leading-[31px] tracking-[-0.005em] mb-6">
//               Rooted in faith and inspired by God, Hephzibah Luxe is guided by the belief that celebrations are sacred moments — worthy of intention, beauty, and excellence. Through long-standing relationships with a trusted network of vendors, we curate experiences that feel seamless, thoughtful, and elevated.
//             </p>
//             <p className="font-body font-light text-primary text-[19px] leading-[31px] tracking-[-0.005em]">
//               Today, Hephzibah Luxe blends heritage with modern execution. Design sits at the heart of everything we do, combining creative direction with thoughtful planning systems to offer a more refined way to plan — one that prioritises clarity, collaboration, and ease, while honouring each couple&apos;s individuality.
//             </p>
//           </div>

//           {/* Left image + white-text overlay */}
//           <div
//             className="absolute overflow-hidden"
//             style={{ top: POS.leftImg.top, left: POS.leftImg.left, width: POS.leftImg.w, height: POS.leftImg.h }}
//           >
//             <Image
//               src="/images/aboutpage/aboutone.jpg"
//               alt=""
//               fill
//               className="object-cover"
//               priority
//               sizes="380px"
//             />
//             <div
//               className="absolute"
//               style={{ top: -POS.leftImg.top, left: -POS.leftImg.left, width: W }}
//             >
//               <HeadingBlock color="background" />
//             </div>
//           </div>

//           {/* Top-right image + white-text overlay (LEFT-based positioning now) */}
//           <div
//             className="absolute overflow-hidden"
//             style={{ top: POS.topRightImg.top, left: POS.topRightImg.left, width: POS.topRightImg.w, height: POS.topRightImg.h }}
//           >
//             <Image
//               src="/images/aboutpage/abouttwo.jpg"
//               alt=""
//               fill
//               className="object-cover"
//               priority
//               sizes="340px"
//             />
//             <div
//               className="absolute"
//               style={{ top: -POS.topRightImg.top, left: -POS.topRightImg.left, width: W }}
//             >
//               <HeadingBlock color="background" />
//             </div>
//           </div>
//         </div>

//         {/* Bottom-right image — flush to section's extreme right-bottom corner */}
//         <div
//           className="absolute right-0 bottom-0"
//           style={{ width: POS.bottomRightImg.w, height: POS.bottomRightImg.h }}
//         >
//           <Image
//             src="/images/aboutpage/aboutthree.jpg"
//             alt=""
//             fill
//             className="object-cover"
//             sizes="220px"
//           />
//         </div>
//       </div>

//       {/* ─────────────── Mobile ─────────────── */}
//       <div className="lg:hidden relative pt-8">
//         {/* Top: heading with abouttwo.jpg floated to the right edge */}
//         <div className="px-4 relative">
//           <div className="float-right relative w-[38%] aspect-[4/3] -mr-4 mb-2 ml-3">
//             <Image
//               src="/images/aboutpage/abouttwo.jpg"
//               alt=""
//               fill
//               className="object-cover"
//               priority
//               sizes="40vw"
//             />
//           </div>

//           <h1 className="font-display font-thin text-primary text-[38px] leading-[44px] tracking-[-0.005em]">
//             ABOUT <span className="italic">the</span> BRAND
//           </h1>
//           <h2 className="mt-2 font-display font-thin italic text-primary text-[38px] leading-[44px]">
//             Hephzibah Luxe
//           </h2>

//           <div className="clear-both" />
//         </div>

//         {/* Body: aboutone.jpg floated to the left edge, paragraphs wrap */}
//         <div className="px-4 mt-6 relative">
//           <div className="float-left relative w-[45%] aspect-[3/4] -ml-4 mr-4 mb-2">
//             <Image
//               src="/images/aboutpage/aboutone.jpg"
//               alt=""
//               fill
//               className="object-cover"
//               priority
//               sizes="50vw"
//             />
//           </div>

//           <div className="font-body font-light text-primary text-[15px] leading-[26px] tracking-[-0.005em] space-y-4">
//             <p>
//               Hephzibah Luxe was born from years of experience long before it had a name. For over a decade, we planned informally — bringing together family celebrations, milestone moments, and meaningful gatherings with care, precision, and heart. What began as a natural calling evolved into a refined practice shaped by trust, relationships, and an understanding of what truly makes a celebration memorable.
//             </p>
//             <p>
//               Rooted in faith and inspired by God, Hephzibah Luxe is guided by the belief that celebrations are sacred moments — worthy of intention, beauty, and excellence. Through long-standing relationships with a trusted network of vendors, we curate experiences that feel seamless, thoughtful, and elevated.
//             </p>
//             <p>
//               Today, Hephzibah Luxe blends heritage with modern execution. Design sits at the heart of everything we do, combining creative direction with thoughtful planning systems to offer a more refined way to plan — one that prioritises clarity, collaboration, and ease, while honouring each couple&apos;s individuality.
//             </p>
//           </div>

//           <div className="clear-both" />
//         </div>

//         {/* Bottom-right image — flush to right edge of section */}
//         <div className="relative w-[38%] aspect-[4/3] ml-auto mt-6">
//           <Image
//             src="/images/aboutpage/aboutthree.jpg"
//             alt=""
//             fill
//             className="object-cover"
//             sizes="40vw"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }



import Image from "next/image";

const W = 1300;
const H = 900;

const POS = {
  h1: { top: 64, left: 40 },
  h2: { top: 200, left: 280 },
  leftImg: { top: 270, left: 30, w: 380, h: 470 },
  topRightImg: { top: 70, left: 920, w: 340, h: 250 },
  paragraphs: { top: 400, left: 430, w: 760 },
  bottomRightImg: { w: 160, h: 120 }, // reduced size
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
        className={`font-display font-thin ${cls} text-[30px] leading-[36px] tracking-[-0.005em] whitespace-nowrap`}
      >
        ABOUT <span className="italic">the</span> BRAND
      </h1>
      <h2
        className={`mt-2 font-display font-thin italic ${cls} text-[30px] leading-[36px] whitespace-nowrap`}
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
        </div>

        {/* Bottom-right small image */}
        <div
          className="absolute right-0 bottom-0"
          style={{ width: POS.bottomRightImg.w, height: POS.bottomRightImg.h }}
        >
          <Image src="/images/aboutpage/aboutthree.jpg" alt="" fill className="object-cover" sizes="160px" />
        </div>
      </div>

      {/* ─────────────── Mobile ─────────────── */}
      <div className="lg:hidden relative pt-8">
        {/* Top section: heading area with abouttwo.jpg flush right and overlay text */}
        <div className="px-4 relative">
          {/* abouttwo image - top-right, with white overlay copy */}
          <div className="absolute top-0 right-0 w-[40%] aspect-[4/3] overflow-hidden">
            <Image src="/images/aboutpage/abouttwo.jpg" alt="" fill className="object-cover" priority sizes="40vw" />
            {/* White overlay version of the heading, positioned to align with the dark one below */}
            <div className="absolute top-0 left-0 w-screen pl-4 pt-0">
              <MobileHeadings color="background" />
            </div>
          </div>

          {/* Dark heading (sits behind / outside the image area) */}
          <MobileHeadings color="primary" />
        </div>

        {/* Body: aboutone.jpg edge-bleeds left, paragraphs wrap to the right */}
        <div className="px-4 mt-8 relative">
          {/* aboutone with white overlay headings (slimmer + negative left margin) */}
          <div className="float-left relative w-[36%] aspect-[3/4] -ml-8 mr-4 mb-2 overflow-hidden">
            <Image src="/images/aboutpage/aboutone.jpg" alt="" fill className="object-cover" priority sizes="40vw" />
            {/* White overlay of the headings positioned to match the dark ones above */}
            <div className="absolute -top-[120px] left-8 w-screen">
              <MobileHeadings color="background" />
            </div>
          </div>

          <div className="font-body font-light text-primary text-[15px] leading-[26px] tracking-[-0.005em] space-y-4">
            <p>
              Hephzibah Luxe was born from years of experience long before it had a name. For over a decade, we planned informally — bringing together family celebrations, milestone moments, and meaningful gatherings with care, precision, and heart. What began as a natural calling evolved into a refined practice shaped by trust, relationships, and an understanding of what truly makes a celebration memorable.
            </p>
            <p>
              Rooted in faith and inspired by God, Hephzibah Luxe is guided by the belief that celebrations are sacred moments — worthy of intention, beauty, and excellence. Through long-standing relationships with a trusted network of vendors, we curate experiences that feel seamless, thoughtful, and elevated.
            </p>
            <p>
              Today, Hephzibah Luxe blends heritage with modern execution. Design sits at the heart of everything we do, combining creative direction with thoughtful planning systems to offer a more refined way to plan — one that prioritises clarity, collaboration, and ease, while honouring each couple&apos;s individuality.
            </p>
          </div>

          <div className="clear-both" />
        </div>

        {/* Bottom-right small image */}
        <div className="relative w-[28%] aspect-[4/3] ml-auto mt-6">
          <Image src="/images/aboutpage/aboutthree.jpg" alt="" fill className="object-cover" sizes="30vw" />
        </div>
      </div>
    </section>
  );
}



// import Image from "next/image";

// // ────── Desktop ──────
// const W = 1300;
// const H = 900;

// const POS = {
//   h1: { top: 64, left: 40 },
//   h2: { top: 200, left: 280 },
//   leftImg: { top: 270, left: 30, w: 380, h: 470 },
//   topRightImg: { top: 70, left: 920, w: 340, h: 250 },
//   paragraphs: { top: 400, left: 430, w: 760 },
//   bottomRightImg: { w: 160, h: 120 },
// };

// // ────── Mobile ──────
// // 380px design canvas — common phone width. overflow-hidden on section
// // clips edges on narrower screens (e.g. 360px). Headings use 32px, which
// // fits "ABOUT the BRAND" on one line at this canvas width.
// const MW = 380;
// const MH = 200; // Heading area height; paragraph block starts after this

// const MPOS = {
//   h1: { top: 20, left: 16 },
//   h2: { top: 70, left: 24 },
//   topRightImg: { top: 8, left: 250, w: 115, h: 80 },
//   leftImg: { top: 140, left: 0, w: 100, h: 240 }, // Overlaps h2, extends into paragraph area
//   bottomRightImg: { w: 110, h: 80 },
// };

// function Headings({ color, mobile = false }: { color: "primary" | "background"; mobile?: boolean }) {
//   const cls = color === "primary" ? "text-primary" : "text-background";
//   const pos = mobile ? MPOS : POS;
//   const sizeCls = mobile
//     ? "text-[32px] leading-[38px]"
//     : "text-[110px] leading-[120px]";

//   return (
//     <>
//       <h1
//         className={`absolute font-display font-thin ${cls} ${sizeCls} tracking-[-0.005em] whitespace-nowrap`}
//         style={{ top: pos.h1.top, left: pos.h1.left }}
//       >
//         ABOUT <span className="italic">the</span> BRAND
//       </h1>
//       <h2
//         className={`absolute font-display font-thin italic ${cls} ${sizeCls} whitespace-nowrap`}
//         style={{ top: pos.h2.top, left: pos.h2.left }}
//       >
//         Hephzibah Luxe
//       </h2>
//     </>
//   );
// }

// export default function AboutHero() {
//   return (
//     <section className="relative w-full overflow-hidden bg-background">
//       {/* ─────────────── Desktop ─────────────── */}
//       <div className="hidden lg:block relative">
//         <div className="relative mx-auto" style={{ width: W, height: H }}>
//           <Headings color="primary" />

//           <div
//             className="absolute"
//             style={{ top: POS.paragraphs.top, left: POS.paragraphs.left, width: POS.paragraphs.w }}
//           >
//             <p className="font-body font-light text-primary text-[19px] leading-[31px] tracking-[-0.005em] mb-6">
//               Hephzibah Luxe was born from years of experience long before it had a name. For over a decade, we planned informally — bringing together family celebrations, milestone moments, and meaningful gatherings with care, precision, and heart. What began as a natural calling evolved into a refined practice shaped by trust, relationships, and an understanding of what truly makes a celebration memorable.
//             </p>
//             <p className="font-body font-light text-primary text-[19px] leading-[31px] tracking-[-0.005em] mb-6">
//               Rooted in faith and inspired by God, Hephzibah Luxe is guided by the belief that celebrations are sacred moments — worthy of intention, beauty, and excellence. Through long-standing relationships with a trusted network of vendors, we curate experiences that feel seamless, thoughtful, and elevated.
//             </p>
//             <p className="font-body font-light text-primary text-[19px] leading-[31px] tracking-[-0.005em]">
//               Today, Hephzibah Luxe blends heritage with modern execution. Design sits at the heart of everything we do, combining creative direction with thoughtful planning systems to offer a more refined way to plan — one that prioritises clarity, collaboration, and ease, while honouring each couple&apos;s individuality.
//             </p>
//           </div>

//           <div
//             className="absolute overflow-hidden"
//             style={{ top: POS.leftImg.top, left: POS.leftImg.left, width: POS.leftImg.w, height: POS.leftImg.h }}
//           >
//             <Image src="/images/aboutpage/aboutone.jpg" alt="" fill className="object-cover" priority sizes="380px" />
//             <div className="absolute" style={{ top: -POS.leftImg.top, left: -POS.leftImg.left, width: W }}>
//               <Headings color="background" />
//             </div>
//           </div>

//           <div
//             className="absolute overflow-hidden"
//             style={{ top: POS.topRightImg.top, left: POS.topRightImg.left, width: POS.topRightImg.w, height: POS.topRightImg.h }}
//           >
//             <Image src="/images/aboutpage/abouttwo.jpg" alt="" fill className="object-cover" priority sizes="340px" />
//             <div className="absolute" style={{ top: -POS.topRightImg.top, left: -POS.topRightImg.left, width: W }}>
//               <Headings color="background" />
//             </div>
//           </div>
//         </div>

//         <div
//           className="absolute right-0 bottom-0"
//           style={{ width: POS.bottomRightImg.w, height: POS.bottomRightImg.h }}
//         >
//           <Image src="/images/aboutpage/aboutthree.jpg" alt="" fill className="object-cover" sizes="160px" />
//         </div>
//       </div>

//       {/* ─────────────── Mobile ─────────────── */}
//       <div className="lg:hidden relative">
//         {/* Fixed-canvas heading area — same overlay technique as desktop */}
//         <div className="relative mx-auto" style={{ width: MW, height: MH }}>
//           <Headings color="primary" mobile />

//           {/* abouttwo with white-heading overlay */}
//           <div
//             className="absolute overflow-hidden"
//             style={{ top: MPOS.topRightImg.top, left: MPOS.topRightImg.left, width: MPOS.topRightImg.w, height: MPOS.topRightImg.h }}
//           >
//             <Image src="/images/aboutpage/abouttwo.jpg" alt="" fill className="object-cover" priority sizes="115px" />
//             <div className="absolute" style={{ top: -MPOS.topRightImg.top, left: -MPOS.topRightImg.left, width: MW }}>
//               <Headings color="background" mobile />
//             </div>
//           </div>
//         </div>

//         {/* Paragraph area: floated aboutone (extends up to overlap h2) */}
//         <div className="relative mx-auto" style={{ width: MW }}>
//           <div className="px-4 relative">
//             {/* Floated left, with negative marginTop so its top sits at MH offset relative to paragraph block */}
//             <div
//               className="float-left relative overflow-hidden -ml-4 mr-3 mb-2"
//               style={{
//                 width: MPOS.leftImg.w,
//                 height: MPOS.leftImg.h,
//                 marginTop: MPOS.leftImg.top - MH, // = 140 - 200 = -60 → pulls image up to overlap h2
//               }}
//             >
//               <Image src="/images/aboutpage/aboutone.jpg" alt="" fill className="object-cover" priority sizes="100px" />
//               {/* Overlay anchored to the same canvas top/left as the dark heading.
//                   Float visual top = MH + marginTop = MPOS.leftImg.top
//                   Float visual left = 0 → matches MPOS.leftImg.left */}
//               <div
//                 className="absolute"
//                 style={{ top: -MPOS.leftImg.top, left: -MPOS.leftImg.left, width: MW }}
//               >
//                 <Headings color="background" mobile />
//               </div>
//             </div>

//             <div className="font-body font-light text-primary text-[15px] leading-[26px] tracking-[-0.005em]">
//               <p>
//                 Hephzibah Luxe was born from years of experience long before it had a name. For over a decade, we planned informally — bringing together family celebrations, milestone moments, and meaningful gatherings with care, precision, and heart. What began as a natural calling evolved into a refined practice shaped by trust, relationships, and an understanding of what truly makes a celebration memorable.
//               </p>
//               <p className="mt-4">
//                 Rooted in faith and inspired by God, Hephzibah Luxe is guided by the belief that celebrations are sacred moments — worthy of intention, beauty, and excellence. Through long-standing relationships with a trusted network of vendors, we curate experiences that feel seamless, thoughtful, and elevated.
//               </p>

//               {/* aboutthree floated right INSIDE the text flow so paragraphs wrap */}
//               <div
//                 className="float-right relative -mr-4 ml-3 mt-2 mb-1"
//                 style={{ width: MPOS.bottomRightImg.w, height: MPOS.bottomRightImg.h }}
//               >
//                 <Image src="/images/aboutpage/aboutthree.jpg" alt="" fill className="object-cover" sizes="110px" />
//               </div>

//               <p className="mt-4">
//                 Today, Hephzibah Luxe blends heritage with modern execution. Design sits at the heart of everything we do, combining creative direction with thoughtful planning systems to offer a more refined way to plan — one that prioritises clarity, collaboration, and ease, while honouring each couple&apos;s individuality.
//               </p>
//             </div>

//             <div className="clear-both" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }