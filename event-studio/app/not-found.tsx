import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative bg-background text-primary overflow-hidden">
      {/* ──────── Desktop unplug — absolute, left side ──────── */}
      <Image
        src="/icons/desktopunplug.svg"
        alt=""
        width={320}
        height={800}
        className="hidden lg:block absolute left-0 top-0 w-[220px] xl:w-[270px] 2xl:w-[320px] h-auto pointer-events-none"
      />

      {/* ──────── Decorative icons ──────── */}

      {/* toprightcircle — mobile bleeds off corner, desktop inset */}
      <Image
        src="/icons/toprightcircle.svg"
        alt=""
        width={140}
        height={140}
        className="absolute -top-6 -right-6 w-[70px] h-[70px] sm:-top-8 sm:-right-8 sm:w-[85px] sm:h-[85px] md:-top-10 md:-right-10 md:w-[100px] md:h-[100px] lg:top-12 lg:right-16 lg:w-[110px] lg:h-[110px] xl:top-16 xl:right-24 xl:w-[130px] xl:h-[130px] 2xl:w-[150px] 2xl:h-[150px] pointer-events-none"
      />

      {/* bottomleftcircle — bottom-left corner */}
      <Image
        src="/icons/bottomleftcircle.svg"
        alt=""
        width={80}
        height={80}
        className="absolute bottom-4 left-3 w-[36px] h-[36px] sm:bottom-6 sm:left-4 sm:w-[44px] sm:h-[44px] md:w-[54px] md:h-[54px] lg:bottom-10 lg:left-[180px] lg:w-[58px] lg:h-[58px] xl:left-[220px] xl:w-[66px] xl:h-[66px] 2xl:w-[74px] 2xl:h-[74px] pointer-events-none"
      />

      {/* greyx #1 — mobile top-left, desktop above 404 */}
      <Image
        src="/icons/greyx.svg"
        alt=""
        width={42}
        height={42}
        className="absolute top-4 left-5 w-[22px] h-[22px] sm:top-6 sm:left-7 sm:w-[26px] sm:h-[26px] md:top-8 md:w-[32px] md:h-[32px] lg:top-[18%] lg:left-[36%] lg:w-[38px] lg:h-[38px] xl:left-[38%] xl:w-[44px] xl:h-[44px] 2xl:w-[50px] 2xl:h-[50px] pointer-events-none"
      />

      {/* greyx #2 — mobile bottom-right, desktop mid-right */}
      <Image
        src="/icons/greyx.svg"
        alt=""
        width={42}
        height={42}
        className="absolute bottom-[14%] right-5 w-[22px] h-[22px] sm:bottom-[16%] sm:right-7 sm:w-[26px] sm:h-[26px] md:w-[32px] md:h-[32px] lg:bottom-auto lg:top-[60%] lg:right-[8%] lg:w-[38px] lg:h-[38px] xl:right-[10%] xl:w-[44px] xl:h-[44px] 2xl:w-[50px] 2xl:h-[50px] pointer-events-none"
      />

      {/* smallgreenx — left of "Page Not Found" */}
      <Image
        src="/icons/smallgreenx.svg"
        alt=""
        width={26}
        height={26}
        className="absolute top-[58%] left-5 w-[14px] h-[14px] sm:top-[56%] sm:left-7 sm:w-[16px] sm:h-[16px] md:w-[20px] md:h-[20px] lg:top-[52%] lg:left-[33%] lg:w-[22px] lg:h-[22px] xl:left-[35%] xl:w-[26px] xl:h-[26px] 2xl:w-[30px] 2xl:h-[30px] pointer-events-none"
      />

      {/* smallgreencircle — right of "404" */}
      <Image
        src="/icons/smallgreencircle.svg"
        alt=""
        width={22}
        height={22}
        className="absolute top-[42%] right-10 w-[10px] h-[10px] sm:top-[40%] sm:right-14 sm:w-[12px] sm:h-[12px] md:w-[14px] md:h-[14px] lg:top-[36%] lg:right-[34%] lg:w-[18px] lg:h-[18px] xl:right-[36%] xl:w-[22px] xl:h-[22px] 2xl:w-[26px] 2xl:h-[26px] pointer-events-none"
      />

      {/* ──────── Main content ──────── */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-100px)] text-center px-6 py-12 sm:py-14 md:py-16 lg:py-20">
        {/* Mobile unplug — in flow above 404 */}
        <Image
          src="/icons/mobileunplug.svg"
          alt=""
          width={400}
          height={500}
          className="lg:hidden mb-2 sm:mb-4 md:mb-6 w-[220px] h-auto sm:w-[260px] md:w-[320px]"
        />

        <h1 className="font-display font-thin text-primary leading-[100%] tracking-[0.02em] text-[80px] sm:text-[100px] md:text-[140px] lg:text-[180px] xl:text-[220px] 2xl:text-[260px]">
          404
        </h1>

        <h2 className="mt-4 sm:mt-5 md:mt-6 lg:mt-6 xl:mt-8 font-body font-light text-primary leading-[130%] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px] xl:text-[42px] 2xl:text-[48px]">
          Page Not Found
        </h2>

        <p className="mt-6 sm:mt-7 md:mt-8 lg:mt-6 xl:mt-8 font-sans font-light text-primary text-[14px] leading-[24px] sm:text-[15px] sm:leading-[26px] md:text-[16px] md:leading-[28px] lg:text-[16px] lg:leading-[28px] xl:text-[18px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-[32px] max-w-[320px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[560px] xl:max-w-[640px] 2xl:max-w-[720px]">
          We couldn&apos;t find the page you&apos;re looking for - it might be a broken link. Let&apos;s get you back on track.
        </p>

        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-12 xl:mt-14 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 w-full max-w-[300px] sm:max-w-none">
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