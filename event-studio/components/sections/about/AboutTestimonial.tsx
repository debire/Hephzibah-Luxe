// import Image from "next/image";
// import Link from "next/link";

// export default function AboutTestimonial() {
//   return (
//     <section className="relative bg-secondary text-background py-16 lg:py-32 overflow-hidden">
//       {/* ───── Desktop edge images (flush to viewport edges) ───── */}
//       <div className="hidden lg:block absolute top-16 left-0 w-[130px] xl:w-[180px] h-[320px] xl:h-[420px]">
//         <Image
//           src="/images/aboutpage/aboutfour.jpg"
//           alt=""
//           fill
//           className="object-cover"
//           sizes="180px"
//         />
//       </div>

//       <div className="hidden lg:block absolute bottom-16 right-0 w-[130px] xl:w-[180px] h-[320px] xl:h-[420px]">
//         <Image
//           src="/images/aboutpage/aboutfive.jpg"
//           alt=""
//           fill
//           className="object-cover"
//           sizes="180px"
//         />
//       </div>

//       {/* ───────────────── Desktop content ───────────────── */}
//       <div className="hidden lg:block relative z-10 max-w-7xl mx-auto pl-[180px] pr-[80px] xl:pl-[240px] xl:pr-[140px]">
//         <p className="font-display font-thin text-[45px] leading-[55px] text-background mb-10">
//           &ldquo;I walked into a room filled with love, laughter, and surprises I never saw coming. The celebration was seamless, and beautifully put together. My wife and Hephzibah Luxe created an evening that was deeply meaningful and beyond my wildest dreams — a birthday I will never forget. I am truly grateful to the Hephzibah Luxe team.&rdquo;
//         </p>

//         <p className="font-sans font-light text-[20px] leading-[35px] tracking-[0.2em] text-background mb-14">
//           — SHOLA, THE CELEBRANT
//         </p>

//         <div className="flex flex-col sm:flex-row gap-6 items-start">
//           <Link
//             href="/portfolio"
//             className="group inline-flex items-center gap-8 border border-background px-8 py-3 transition-colors hover:bg-background"
//           >
//             <span className="font-body font-light italic text-[20px] leading-[35px] text-background group-hover:text-secondary transition-colors">
//               View Our Portfolio
//             </span>
//             <span className="relative inline-block w-[20px] h-[20px] flex-shrink-0">
//               <Image src="/icons/whitebuttonarrow.svg" alt="" fill className="object-contain transition-opacity group-hover:opacity-0" />
//               <Image src="/icons/buttonarrow.svg" alt="" fill className="object-contain opacity-0 transition-opacity group-hover:opacity-100" />
//             </span>
//           </Link>

//           <Link
//             href="/services"
//             className="group inline-flex items-center gap-8 border border-background px-8 py-3 transition-colors hover:bg-background"
//           >
//             <span className="font-body font-light italic text-[20px] leading-[35px] text-background group-hover:text-secondary transition-colors">
//               Explore Our Services
//             </span>
//             <span className="relative inline-block w-[20px] h-[20px] flex-shrink-0">
//               <Image src="/icons/whitebuttonarrow.svg" alt="" fill className="object-contain transition-opacity group-hover:opacity-0" />
//               <Image src="/icons/buttonarrow.svg" alt="" fill className="object-contain opacity-0 transition-opacity group-hover:opacity-100" />
//             </span>
//           </Link>
//         </div>
//       </div>

//       {/* ───────────────── Mobile content ───────────────── */}
//       <div className="lg:hidden px-4 relative z-10">
//         {/* Top row: small flush-left image + quote */}
//         <div className="flex gap-4 items-start">
//           <div className="relative w-[60px] -ml-4 aspect-[3/4] flex-shrink-0">
//             <Image
//               src="/images/aboutpage/aboutfour.jpg"
//               alt=""
//               fill
//               className="object-cover"
//               sizes="60px"
//             />
//           </div>

//           <p className="flex-1 font-display font-thin text-[22px] leading-[34px] text-background">
//             &ldquo;I walked into a room filled with love, laughter, and surprises I never saw coming. The celebration was seamless, and beautifully put together. My wife and Hephzibah Luxe created an evening that was deeply meaningful and beyond my wildest dreams — a birthday I will never forget. I am truly grateful to the Hephzibah Luxe team.&rdquo;
//           </p>
//         </div>

//         {/* Bottom row: byline + buttons on left, image (cropped at right edge) on right */}
//         <div className="mt-10 flex gap-4 items-start">
//           <div className="flex-1 flex flex-col items-start">
//             <p className="font-sans font-light text-[13px] leading-[24px] tracking-[0.2em] text-background">
//               — SHOLA, THE CELEBRANT
//             </p>

//             <div className="mt-6 flex flex-col gap-4">
//               <Link
//                 href="/portfolio"
//                 className="group inline-flex items-center gap-6 border border-background px-6 py-2.5 transition-colors hover:bg-background"
//               >
//                 <span className="font-body font-light italic text-[16px] leading-[28px] text-background group-hover:text-secondary transition-colors">
//                   View our Portfolio
//                 </span>
//                 <span className="relative inline-block w-[18px] h-[18px] flex-shrink-0">
//                   <Image src="/icons/whitebuttonarrow.svg" alt="" fill className="object-contain transition-opacity group-hover:opacity-0" />
//                   <Image src="/icons/buttonarrow.svg" alt="" fill className="object-contain opacity-0 transition-opacity group-hover:opacity-100" />
//                 </span>
//               </Link>

//               <Link
//                 href="/services"
//                 className="group inline-flex items-center gap-6 border border-background px-6 py-2.5 transition-colors hover:bg-background"
//               >
//                 <span className="font-body font-light italic text-[16px] leading-[28px] text-background group-hover:text-secondary transition-colors">
//                   Explore our Services
//                 </span>
//                 <span className="relative inline-block w-[18px] h-[18px] flex-shrink-0">
//                   <Image src="/icons/whitebuttonarrow.svg" alt="" fill className="object-contain transition-opacity group-hover:opacity-0" />
//                   <Image src="/icons/buttonarrow.svg" alt="" fill className="object-contain opacity-0 transition-opacity group-hover:opacity-100" />
//                 </span>
//               </Link>
//             </div>
//           </div>

//           {/* Cropped image — extends past the viewport's right edge */}
//           <div className="relative w-[200px] -mr-16 aspect-[3/4] flex-shrink-0 self-end">
//             <Image
//               src="/images/aboutpage/aboutfive.jpg"
//               alt=""
//               fill
//               className="object-cover"
//               sizes="200px"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import Image from "next/image";
import Link from "next/link";

export default function AboutTestimonial() {
    return (
        <section className="relative bg-secondary text-background py-16 lg:py-32 overflow-hidden">
            {/* ───── Desktop edge images (flush to viewport edges) ───── */}
            <div className="hidden lg:block absolute top-16 left-0 w-[130px] xl:w-[180px] h-[320px] xl:h-[420px]">
                <Image
                    src="/images/aboutpage/aboutfour.jpg"
                    alt=""
                    fill
                    className="object-cover"
                    sizes="180px"
                />
            </div>

            <div className="hidden lg:block absolute bottom-16 right-0 w-[130px] xl:w-[180px] h-[320px] xl:h-[420px]">
                <Image
                    src="/images/aboutpage/aboutfive.jpg"
                    alt=""
                    fill
                    className="object-cover"
                    sizes="180px"
                />
            </div>

            {/* ───────────────── Desktop content ───────────────── */}
            <div className="hidden lg:block relative z-10 max-w-7xl mx-auto pl-[180px] pr-[80px] xl:pl-[240px] xl:pr-[140px]">
                <p className="font-display font-thin text-[45px] leading-[55px] text-background mb-10">
                    &ldquo;I walked into a room filled with love, laughter, and surprises I never saw coming. The celebration was seamless, and beautifully put together. My wife and Hephzibah Luxe created an evening that was deeply meaningful and beyond my wildest dreams — a birthday I will never forget. I am truly grateful to the Hephzibah Luxe team.&rdquo;
                </p>

                <p className="font-sans font-light text-[20px] leading-[35px] tracking-[0.2em] text-background mb-14">
                    — SHOLA, THE CELEBRANT
                </p>

                <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <Link
                        href="/portfolio"
                        className="group inline-flex items-center gap-8 border border-background px-8 py-3 transition-colors hover:bg-background"
                    >
                        <span className="font-body font-light italic text-[20px] leading-[35px] text-background group-hover:text-secondary transition-colors">
                            View Our Portfolio
                        </span>
                        <span className="relative inline-block w-[20px] h-[20px] flex-shrink-0">
                            <Image src="/icons/whitebuttonarrow.svg" alt="" fill className="object-contain transition-opacity group-hover:opacity-0" />
                            <Image src="/icons/buttonarrow.svg" alt="" fill className="object-contain opacity-0 transition-opacity group-hover:opacity-100" />
                        </span>
                    </Link>

                    <Link
                        href="/services"
                        className="group inline-flex items-center gap-8 border border-background px-8 py-3 transition-colors hover:bg-background"
                    >
                        <span className="font-body font-light italic text-[20px] leading-[35px] text-background group-hover:text-secondary transition-colors">
                            Explore Our Services
                        </span>
                        <span className="relative inline-block w-[20px] h-[20px] flex-shrink-0">
                            <Image src="/icons/whitebuttonarrow.svg" alt="" fill className="object-contain transition-opacity group-hover:opacity-0" />
                            <Image src="/icons/buttonarrow.svg" alt="" fill className="object-contain opacity-0 transition-opacity group-hover:opacity-100" />
                        </span>
                    </Link>
                </div>
            </div>

            {/* ───────────────── Mobile content ───────────────── */}
            <div className="lg:hidden relative z-10 px-6 min-h-[710px]">
                {/* Left edge image - bleeds off the left side */}
                <div
                    className="absolute"
                    style={{
                        width: "189px",
                        height: "214px",
                        top: "-10px",
                        left: "-140px",
                    }}
                >
                    <Image
                        src="/images/aboutpage/aboutfour.jpg"
                        alt=""
                        fill
                        className="object-cover"
                        sizes="189px"
                    />
                </div>

                {/* Right edge image - bleeds off the right side */}
                <div
                    className="absolute"
                    style={{
                        width: "189px",
                        height: "234px",
                        top: "474px",
                        left: "345px",
                    }}
                >
                    <Image
                        src="/images/aboutpage/aboutfive.jpg"
                        alt=""
                        fill
                        className="object-cover"
                        sizes="189px"
                    />
                </div>

                {/* Centered content */}
                <div className="relative pl-12 pr-3">
                    <p className="font-display font-thin text-[25px] leading-[42px] text-background mb-8">
                        &ldquo;I walked into a room filled with love, laughter, and surprises I never saw coming. The celebration was seamless, and beautifully put together. My wife and Hephzibah Luxe created an evening that was deeply meaningful and beyond my wildest dreams — a birthday I will never forget. I am truly grateful to the Hephzibah Luxe team.&rdquo;
                    </p>

                    <p className="font-sans font-light text-[13px] leading-[24px] tracking-[0.2em] text-background mb-8">
                        — SHOLA, THE CELEBRANT
                    </p>

                    <div className="flex flex-col gap-4 items-start">
                        <Link
                            href="/portfolio"
                            className="group inline-flex items-center gap-6 border border-background px-6 py-2.5 transition-colors hover:bg-background"
                        >
                            <span className="font-body font-light italic text-[16px] leading-[28px] text-background group-hover:text-secondary transition-colors">
                                View our Portfolio
                            </span>
                            <span className="relative inline-block w-[18px] h-[18px] flex-shrink-0">
                                <Image src="/icons/whitebuttonarrow.svg" alt="" fill className="object-contain transition-opacity group-hover:opacity-0" />
                                <Image src="/icons/buttonarrow.svg" alt="" fill className="object-contain opacity-0 transition-opacity group-hover:opacity-100" />
                            </span>
                        </Link>

                        <Link
                            href="/services"
                            className="group inline-flex items-center gap-6 border border-background px-6 py-2.5 transition-colors hover:bg-background"
                        >
                            <span className="font-body font-light italic text-[16px] leading-[28px] text-background group-hover:text-secondary transition-colors">
                                Explore our Services
                            </span>
                            <span className="relative inline-block w-[18px] h-[18px] flex-shrink-0">
                                <Image src="/icons/whitebuttonarrow.svg" alt="" fill className="object-contain transition-opacity group-hover:opacity-0" />
                                <Image src="/icons/buttonarrow.svg" alt="" fill className="object-contain opacity-0 transition-opacity group-hover:opacity-100" />
                            </span>
                        </Link>
                    </div>
        </div>
      </div >
    </section >
  );
}