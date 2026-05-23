// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// const portfolioImages = [
//   "/images/Portfolio/portfolioone.jpg",
//   "/images/hero/herofour.jpg",
//   "/images/Intro/introfive.jpg",
//   "/images/Intro/introsix.jpg",
//   "/images/Portfolio/portfoliotwo.jpg",
// ];

// export default function Portfolio() {
//   const loopedImages = [...portfolioImages, ...portfolioImages];
//   const trackRef = useRef<HTMLDivElement>(null);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     const track = trackRef.current;
//     if (!track) return;

//     let position = 0;
//     let currentSpeed = 0;
//     const targetSpeedNormal = 0.6; // pixels per frame at 60fps
//     let rafId: number;
//     let lastTime = performance.now();

//     const animate = (time: number) => {
//       const delta = time - lastTime;
//       lastTime = time;

//       // Ease current speed toward target (0 when hovered, normal otherwise)
//       const targetSpeed = isHovered ? 0 : targetSpeedNormal;
//       currentSpeed += (targetSpeed - currentSpeed) * 0.04;

//       position -= currentSpeed * (delta / 16.67); // normalize to 60fps

//       // Reset when one set has scrolled past
//       const resetWidth = track.scrollWidth / 2;
//       if (Math.abs(position) >= resetWidth) {
//         position += resetWidth;
//       }

//       track.style.transform = `translateX(${position}px)`;
//       rafId = requestAnimationFrame(animate);
//     };

//     rafId = requestAnimationFrame(animate);

//     return () => cancelAnimationFrame(rafId);
//   }, [isHovered]);

//   return (
//     <section className="relative overflow-hidden">
//       {/* Two-tone background */}
//       <div className="absolute inset-0 flex flex-col">
//         <div className="bg-background h-[180px] lg:h-[200px] flex-shrink-0" />
//         <div className="bg-secondary flex-1" />
//       </div>

//       <div className="relative grid grid-cols-[1fr_1.2fr] lg:grid-cols-[1fr_2fr] items-start">
//         {/* Left column */}
//         <div className="flex flex-col">
//           <div className="px-6 pt-8 pb-6 lg:px-12 lg:pt-10 lg:pb-10">
//             <p className="font-body font-extralight italic text-primary text-[16px] leading-[26px] lg:text-[28px] lg:leading-[40px] tracking-[0.01em]">
//               Designed with care, guided by experience, and brought together with presence
//             </p>
//           </div>

//           <div className="flex flex-col px-6 pb-12 pt-16 lg:px-12 lg:pt-20 lg:pb-32">
//             <h3 className="font-display font-thin text-[32px] leading-[38px] lg:text-[45px] lg:leading-[50px] tracking-[0.03em] text-background">
//               Our <em className="italic">Portfolio</em>
//             </h3>

//             <p className="mt-6 font-body font-extralight text-[14px] leading-[24px] lg:text-[18px] lg:leading-[30px] tracking-[0.03em] text-background max-w-[400px]">
//               Explore the moments we've brought to life through intentional planning and thoughtful design. Each celebration reflects a story of care, collaboration, and experience.
//             </p>

//             <Link
//               href="/portfolio"
//               className="group mt-8 lg:mt-10 inline-flex items-center justify-center gap-2 lg:gap-3 self-start border border-background px-4 py-2.5 lg:px-6 lg:py-3 transition-colors hover:bg-background"
//             >
//               <span className="font-body font-light italic text-[14px] lg:text-[20px] leading-[22px] lg:leading-[35px] tracking-[0.01em] text-background group-hover:text-secondary transition-colors">
//                 View Our Past Projects
//               </span>
//               <span className="relative inline-block w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]">
//                 <Image
//                   src="/icons/whitebuttonarrow.svg"
//                   alt=""
//                   fill
//                   className="object-contain transition-opacity group-hover:opacity-0"
//                 />
//                 <Image
//                   src="/icons/buttonarrow.svg"
//                   alt=""
//                   fill
//                   className="object-contain opacity-0 transition-opacity group-hover:opacity-100"
//                 />
//               </span>
//             </Link>
//           </div>
//         </div>

//         {/* Right column: carousel */}
//         <div
//           className="relative overflow-hidden bg-background h-[400px] lg:h-[520px] mt-12 lg:mt-[100px] mb-8 lg:mb-16"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           <div
//             ref={trackRef}
//             className="absolute inset-0 flex gap-2 will-change-transform"
//           >
//             {loopedImages.map((src, i) => (
//               <div
//                 key={i}
//                 className="relative flex-shrink-0 w-[130px] lg:w-[360px] h-full"
//               >
//                 <Image
//                   src={src}
//                   alt=""
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 1024px) 130px, 360px"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import Image from "next/image";
import Link from "next/link";

const portfolioImages = [
  "/images/Portfolio/portfolioone.jpg",
  "/images/Hero/herofour.jpg",
  "/images/Intro/introfive.jpg",
  "/images/Intro/introsix.jpg",
  "/images/Portfolio/portfoliotwo.jpg",
];

export default function Portfolio() {
  const loopedImages = [...portfolioImages, ...portfolioImages];

  return (
    <section className="relative overflow-hidden">
      {/* Two-tone background */}
      <div className="absolute inset-0 flex flex-col">
        <div className="bg-background h-[180px] lg:h-[200px] flex-shrink-0" />
        <div className="bg-secondary flex-1" />
      </div>

      <div className="relative grid grid-cols-[1.6fr_1fr] lg:grid-cols-[1fr_2fr] items-start">
        {/* Left column */}
        <div className="flex flex-col">
          <div className="px-6 pt-8 pb-6 lg:px-12 lg:pt-10 lg:pb-10">
            <p className="font-body font-extralight italic text-primary text-[16px] leading-[26px] lg:text-[28px] lg:leading-[40px] tracking-[0.01em]">
              Designed with care, guided by experience, and brought together with presence
            </p>
          </div>

          <div className="flex flex-col px-6 pb-12 pt-16 lg:px-12 lg:pt-20 lg:pb-32">
            <h3 className="font-display font-thin text-[32px] leading-[38px] lg:text-[45px] lg:leading-[50px] tracking-[0.03em] text-background">
              Our <em className="italic">Portfolio</em>
            </h3>

            <p className="mt-6 font-body font-extralight text-[14px] leading-[24px] lg:text-[18px] lg:leading-[30px] tracking-[0.03em] text-background max-w-[400px]">
              Explore the moments we've brought to life through intentional planning and thoughtful design. Each celebration reflects a story of care, collaboration, and experience.
            </p>

            <Link
              href="/portfolio"
              className="group mt-8 lg:mt-10 inline-flex items-center justify-center gap-2 lg:gap-3 self-start border border-background px-4 py-2.5 lg:px-6 lg:py-3 transition-colors hover:bg-background"
            >
              <span className="font-body font-light italic text-[14px] lg:text-[20px] leading-[22px] lg:leading-[35px] tracking-[0.01em] text-background group-hover:text-secondary transition-colors">
                View Our Past Projects
              </span>
              <span className="relative inline-block w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]">
                <Image
                  src="/icons/whitebuttonarrow.svg"
                  alt=""
                  fill
                  className="object-contain transition-opacity group-hover:opacity-0"
                />
                <Image
                  src="/icons/buttonarrow.svg"
                  alt=""
                  fill
                  className="object-contain opacity-0 transition-opacity group-hover:opacity-100"
                />
              </span>
            </Link>
          </div>
        </div>

        {/* Right column: carousel */}
        <div className="relative overflow-hidden bg-background h-[400px] lg:h-[520px] mt-12 lg:mt-[100px] mb-8 lg:mb-16">
          <div className="absolute inset-0 flex gap-2 animate-scroll-x">
            {loopedImages.map((src, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 w-[200px] lg:w-[360px] h-full"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 200px, 360px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}