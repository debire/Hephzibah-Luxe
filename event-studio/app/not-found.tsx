// //Mobile and ipad correct code
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative bg-background text-primary overflow-hidden">
      {/* Desktop unplug — bleeds off top edge */}
      <Image
        src="/icons/desktopunplug.svg"
        alt=""
        width={320}
        height={800}
        className="hidden lg:block absolute -top-20 left-0 w-[220px] xl:w-[260px] 2xl:w-[300px] h-auto pointer-events-none"
      />

      {/* toprightcircle — smaller on laptop+, tucked into upper-right */}
      <Image
        src="/icons/toprightcircle.svg"
        alt=""
        width={100}
        height={100}
        className="absolute -top-6 -right-6 w-[70px] h-[70px] sm:-top-8 sm:-right-8 sm:w-[85px] sm:h-[85px] md:-top-10 md:-right-10 md:w-[100px] md:h-[100px] lg:top-10 lg:right-12 lg:w-[78px] lg:h-[78px] xl:top-14 xl:right-20 xl:w-[88px] xl:h-[88px] 2xl:right-28 2xl:w-[100px] 2xl:h-[100px] pointer-events-none"
      />

      {/* bottomleftcircle — bleeds off corner on mobile/landscape/iPad, inset on laptop+ */}
      <Image
        src="/icons/bottomleftcircle.svg"
        alt=""
        width={70}
        height={70}
        className="absolute -bottom-6 -left-6 w-[70px] h-[70px] sm:-bottom-8 sm:-left-8 sm:w-[85px] sm:h-[85px] md:-bottom-10 md:-left-10 md:w-[100px] md:h-[100px] lg:bottom-8 lg:left-[20%] lg:-translate-x-0 lg:w-[50px] lg:h-[50px] xl:left-[20%] xl:w-[58px] xl:h-[58px] 2xl:w-[66px] 2xl:h-[66px] pointer-events-none"
      />

      {/* greyx #1 — above 404 (light grey, larger on laptop+) */}
      <Image
        src="/icons/greyx.svg"
        alt=""
        width={66}
        height={66}
        className="absolute top-4 left-5 w-[40px] h-[40px] sm:top-6 sm:left-7 sm:w-[48px] sm:h-[48px] md:top-8 md:w-[60px] md:h-[60px] lg:top-[12%] lg:left-[34%] lg:w-[50px] lg:h-[50px] xl:left-[36%] xl:w-[58px] xl:h-[58px] 2xl:w-[66px] 2xl:h-[66px] pointer-events-none"
      />

      {/* greyx #2 — bottom-right (larger on laptop+, decorative anchor) */}
      <Image
        src="/icons/greyx.svg"
        alt=""
        width={90}
        height={90}
        className="absolute bottom-[14%] right-5 w-[40px] h-[40px] sm:bottom-[16%] sm:right-7 sm:w-[48px] sm:h-[48px] md:w-[60px] md:h-[60px] lg:bottom-auto lg:top-[66%] lg:right-[6%] lg:w-[70px] lg:h-[70px] xl:right-[8%] xl:w-[82px] xl:h-[82px] 2xl:w-[94px] 2xl:h-[94px] pointer-events-none"
      />

      {/* smallgreenx — left of "Page Not Found" */}
      <Image
        src="/icons/smallgreenx.svg"
        alt=""
        width={30}
        height={30}
        className="absolute top-[50%] left-5 w-[30px] h-[30px] sm:top-[56%] sm:left-7 sm:w-[36px] sm:h-[36px] md:w-[44px] md:h-[44px] lg:top-[50%] lg:left-[31%] lg:w-[24px] lg:h-[24px] xl:left-[33%] xl:w-[28px] xl:h-[28px] 2xl:w-[32px] 2xl:h-[32px] pointer-events-none"
      />

      {/* smallgreencircle — right of "404" */}
      <Image
        src="/icons/smallgreencircle.svg"
        alt=""
        width={22}
        height={22}
        className="absolute top-[42%] right-10 w-[24px] h-[24px] sm:top-[40%] sm:right-14 sm:w-[30px] sm:h-[30px] md:w-[38px] md:h-[38px] lg:top-[34%] lg:right-[30%] lg:w-[18px] lg:h-[18px] xl:right-[32%] xl:w-[22px] xl:h-[22px] 2xl:w-[26px] 2xl:h-[26px] pointer-events-none"
      />

      {/* Mobile unplug — bleeds off top-left on mobile/landscape/iPad */}
      <Image
        src="/icons/mobileunplug.svg"
        alt=""
        width={900}
        height={1100}
        className="lg:hidden absolute -top-24 -left-32 w-[900px] h-auto sm:-top-28 sm:-left-28 sm:w-[900px] md:-top-72 md:-left-64 md:w-[1200px] pointer-events-none"
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-start lg:justify-center min-h-[calc(100vh-100px)] text-center px-6 pt-[260px] pb-12 sm:pt-[320px] sm:pb-14 md:pt-[400px] md:pb-16 lg:pt-20 lg:pb-20">
        <h1 className="font-display font-thin text-primary leading-[100%] tracking-[0.02em] text-[80px] sm:text-[100px] md:text-[140px] lg:text-[180px] xl:text-[220px] 2xl:text-[260px]">
          404
        </h1>

        <h2 className="mt-4 sm:mt-5 md:mt-6 lg:mt-6 xl:mt-8 font-body font-light text-primary leading-[130%] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px] xl:text-[42px] 2xl:text-[48px]">
          Page Not Found
        </h2>

        <p className="mt-6 sm:mt-7 md:mt-8 lg:mt-6 xl:mt-8 font-sans font-light text-primary text-[14px] leading-[24px] sm:text-[15px] sm:leading-[26px] md:text-[16px] md:leading-[28px] lg:text-[16px] lg:leading-[28px] xl:text-[18px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[32px] max-w-[320px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[400px] xl:max-w-[460px] 2xl:max-w-[520px]">
          We couldn&apos;t find the page you&apos;re looking for - it might be a broken link. Let&apos;s get you back on track.
        </p>

        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-12 xl:mt-14 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-5 w-full max-w-[240px] sm:max-w-none sm:w-auto">
          {/* View Our Portfolio — filled dark */}
          <Link
            href="/portfolio"
            className="group inline-flex items-center justify-between sm:justify-center gap-6 sm:gap-8 bg-primary border border-primary px-8 sm:px-10 xl:px-12 py-3.5 sm:py-4 xl:py-5 transition-colors hover:bg-background"
          >
            <span className="font-body font-light italic text-background group-hover:text-primary transition-colors text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]">
              View Our Portfolio
            </span>
            <span className="relative inline-block w-[18px] h-[18px] xl:w-[20px] xl:h-[20px] 2xl:w-[22px] 2xl:h-[22px] flex-shrink-0">
              <Image src="/icons/whitebuttonarrow.svg" alt="" fill className="object-contain transition-opacity group-hover:opacity-0" />
              <Image src="/icons/buttonarrow.svg" alt="" fill className="object-contain opacity-0 transition-opacity group-hover:opacity-100" />
            </span>
          </Link>

          {/* Back to Homepage — outlined */}
          <Link
            href="/"
            className="group inline-flex items-center justify-between sm:justify-center gap-6 sm:gap-8 bg-background border border-primary px-8 sm:px-10 xl:px-12 py-3.5 sm:py-4 xl:py-5 transition-colors hover:bg-primary"
          >
            <span className="font-body font-light italic text-primary group-hover:text-background transition-colors text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]">
              Back to Homepage
            </span>
            <span className="relative inline-block w-[18px] h-[18px] xl:w-[20px] xl:h-[20px] 2xl:w-[22px] 2xl:h-[22px] flex-shrink-0">
              <Image src="/icons/buttonarrow.svg" alt="" fill className="object-contain transition-opacity group-hover:opacity-0" />
              <Image src="/icons/whitebuttonarrow.svg" alt="" fill className="object-contain opacity-0 transition-opacity group-hover:opacity-100" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}




// //Desktop correct code
// import Image from "next/image";
// import Link from "next/link";

// export default function NotFound() {
//   return (
//     <section className="relative bg-background text-primary overflow-hidden">
//       {/* Desktop unplug — bleeds off top edge */}
//       <Image
//         src="/icons/desktopunplug.svg"
//         alt=""
//         width={320}
//         height={800}
//         className="hidden lg:block absolute -top-20 left-0 w-[220px] xl:w-[260px] 2xl:w-[300px] h-auto pointer-events-none"
//       />

//       {/* toprightcircle — smaller on laptop+, tucked into upper-right */}
//       <Image
//         src="/icons/toprightcircle.svg"
//         alt=""
//         width={100}
//         height={100}
//         className="absolute -top-6 -right-6 w-[70px] h-[70px] sm:-top-8 sm:-right-8 sm:w-[85px] sm:h-[85px] md:-top-10 md:-right-10 md:w-[100px] md:h-[100px] lg:top-10 lg:right-12 lg:w-[78px] lg:h-[78px] xl:top-14 xl:right-20 xl:w-[88px] xl:h-[88px] 2xl:right-28 2xl:w-[100px] 2xl:h-[100px] pointer-events-none"
//       />

//       {/* bottomleftcircle — bottom center on laptop+ */}
//       <Image
//         src="/icons/bottomleftcircle.svg"
//         alt=""
//         width={70}
//         height={70}
//         className="absolute bottom-4 left-3 w-[36px] h-[36px] sm:bottom-6 sm:left-4 sm:w-[44px] sm:h-[44px] md:w-[54px] md:h-[54px] lg:bottom-8 lg:left-[30%] lg:w-[50px] lg:h-[50px] xl:left-[%] xl:w-[58px] xl:h-[58px] 2xl:w-[66px] 2xl:h-[66px] pointer-events-none"
//       />

//       {/* greyx #1 — above 404 (light grey, larger on laptop+) */}
//       <Image
//         src="/icons/greyx.svg"
//         alt=""
//         width={66}
//         height={66}
//         className="absolute top-4 left-5 w-[22px] h-[22px] sm:top-6 sm:left-7 sm:w-[26px] sm:h-[26px] md:top-8 md:w-[32px] md:h-[32px] lg:top-[12%] lg:left-[34%] lg:w-[50px] lg:h-[50px] xl:left-[36%] xl:w-[58px] xl:h-[58px] 2xl:w-[66px] 2xl:h-[66px] pointer-events-none"
//       />

//       {/* greyx #2 — bottom-right (larger on laptop+, decorative anchor) */}
//       <Image
//         src="/icons/greyx.svg"
//         alt=""
//         width={90}
//         height={90}
//         className="absolute bottom-[14%] right-5 w-[22px] h-[22px] sm:bottom-[16%] sm:right-7 sm:w-[26px] sm:h-[26px] md:w-[32px] md:h-[32px] lg:bottom-auto lg:top-[66%] lg:right-[6%] lg:w-[70px] lg:h-[70px] xl:right-[8%] xl:w-[82px] xl:h-[82px] 2xl:w-[94px] 2xl:h-[94px] pointer-events-none"
//       />

//       {/* smallgreenx — left of "Page Not Found" */}
//       <Image
//         src="/icons/smallgreenx.svg"
//         alt=""
//         width={30}
//         height={30}
//         className="absolute top-[58%] left-5 w-[14px] h-[14px] sm:top-[56%] sm:left-7 sm:w-[16px] sm:h-[16px] md:w-[20px] md:h-[20px] lg:top-[50%] lg:left-[31%] lg:w-[24px] lg:h-[24px] xl:left-[33%] xl:w-[28px] xl:h-[28px] 2xl:w-[32px] 2xl:h-[32px] pointer-events-none"
//       />

//       {/* smallgreencircle — right of "404" */}
//       <Image
//         src="/icons/smallgreencircle.svg"
//         alt=""
//         width={22}
//         height={22}
//         className="absolute top-[42%] right-10 w-[10px] h-[10px] sm:top-[40%] sm:right-14 sm:w-[12px] sm:h-[12px] md:w-[14px] md:h-[14px] lg:top-[34%] lg:right-[30%] lg:w-[18px] lg:h-[18px] xl:right-[32%] xl:w-[22px] xl:h-[22px] 2xl:w-[26px] 2xl:h-[26px] pointer-events-none"
//       />

//       {/* Main content */}
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-100px)] text-center px-6 py-12 sm:py-14 md:py-16 lg:py-20">
//         {/* Mobile unplug — in flow above 404 */}
//         <Image
//           src="/icons/mobileunplug.svg"
//           alt=""
//           width={400}
//           height={500}
//           className="lg:hidden mb-2 sm:mb-4 md:mb-6 w-[220px] h-auto sm:w-[260px] md:w-[320px]"
//         />

//         <h1 className="font-display font-thin text-primary leading-[100%] tracking-[0.02em] text-[80px] sm:text-[100px] md:text-[140px] lg:text-[180px] xl:text-[220px] 2xl:text-[260px]">
//           404
//         </h1>

//         <h2 className="mt-4 sm:mt-5 md:mt-6 lg:mt-6 xl:mt-8 font-body font-light text-primary leading-[130%] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px] xl:text-[42px] 2xl:text-[48px]">
//           Page Not Found
//         </h2>

//         <p className="mt-6 sm:mt-7 md:mt-8 lg:mt-6 xl:mt-8 font-sans font-light text-primary text-[14px] leading-[24px] sm:text-[15px] sm:leading-[26px] md:text-[16px] md:leading-[28px] lg:text-[16px] lg:leading-[28px] xl:text-[18px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[32px] max-w-[320px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[440px] xl:max-w-[500px] 2xl:max-w-[560px]">
//           We couldn&apos;t find the page you&apos;re looking for - it might be a broken link. Let&apos;s get you back on track.
//         </p>

//         <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-12 xl:mt-14 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-5 w-full max-w-[300px] sm:max-w-none sm:w-auto">
//           {/* View Our Portfolio — filled dark */}
//           <Link
//             href="/portfolio"
//             className="group inline-flex items-center justify-between sm:justify-center gap-6 sm:gap-8 bg-primary border border-primary px-8 sm:px-10 xl:px-12 py-3.5 sm:py-4 xl:py-5 transition-colors hover:bg-background"
//           >
//             <span className="font-body font-light italic text-background group-hover:text-primary transition-colors text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]">
//               View Our Portfolio
//             </span>
//             <span className="relative inline-block w-[18px] h-[18px] xl:w-[20px] xl:h-[20px] 2xl:w-[22px] 2xl:h-[22px] flex-shrink-0">
//               <Image src="/icons/whitebuttonarrow.svg" alt="" fill className="object-contain transition-opacity group-hover:opacity-0" />
//               <Image src="/icons/buttonarrow.svg" alt="" fill className="object-contain opacity-0 transition-opacity group-hover:opacity-100" />
//             </span>
//           </Link>

//           {/* Back to Homepage — outlined */}
//           <Link
//             href="/"
//             className="group inline-flex items-center justify-between sm:justify-center gap-6 sm:gap-8 bg-background border border-primary px-8 sm:px-10 xl:px-12 py-3.5 sm:py-4 xl:py-5 transition-colors hover:bg-primary"
//           >
//             <span className="font-body font-light italic text-primary group-hover:text-background transition-colors text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]">
//               Back to Homepage
//             </span>
//             <span className="relative inline-block w-[18px] h-[18px] xl:w-[20px] xl:h-[20px] 2xl:w-[22px] 2xl:h-[22px] flex-shrink-0">
//               <Image src="/icons/buttonarrow.svg" alt="" fill className="object-contain transition-opacity group-hover:opacity-0" />
//               <Image src="/icons/whitebuttonarrow.svg" alt="" fill className="object-contain opacity-0 transition-opacity group-hover:opacity-100" />
//             </span>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }


