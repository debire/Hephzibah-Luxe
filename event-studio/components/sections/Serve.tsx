import Image from "next/image";
import Link from "next/link";

export default function Serve() {
  return (
    <section className="bg-background text-primary overflow-hidden">
      <div className="lg:px-12 lg:py-24 xl:px-16 xl:py-28 2xl:px-20 2xl:py-32">
        {/* Stacked layout (< lg): mobile portrait, landscape, iPad */}
        <div className="lg:hidden flex flex-col px-6 sm:px-8 md:px-10 py-6 sm:py-8 md:py-12">
          <div className="relative w-full">
            <Image
              src="/images/services/mobileserve.svg"
              alt="How we serve you"
              width={800}
              height={500}
              className="w-full h-auto"
              priority
            />
          </div>

          <div className="mt-3 sm:mt-4 md:mt-6">
            <h3 className="font-display font-thin tracking-[0.03em] text-primary text-[28px] leading-[34px] sm:text-[32px] sm:leading-[40px] md:text-[40px] md:leading-[48px]">
              Our <em className="italic">Services</em>
            </h3>

            <div className="mt-6 sm:mt-7 md:mt-8 space-y-5 sm:space-y-6">
              <p className="font-body font-extralight tracking-[0.03em] text-primary text-[15px] leading-[26px] sm:text-[16px] sm:leading-[28px] md:text-[18px] md:leading-[29px]">
                Every celebration begins with a vision — and our role is to help shape it with clarity, care, and intention. From weddings and milestone celebrations to corporate and social events, we support our clients through each decision, translating ideas into thoughtfully executed experiences.
              </p>
              <p className="font-body font-extralight tracking-[0.03em] text-primary text-[15px] leading-[26px] sm:text-[16px] sm:leading-[28px] md:text-[18px] md:leading-[29px]">
                Our work is design-led and deeply personal, focused on creating environments that feel warm, inviting, and elevated — spaces where guests feel both comfortable and captivated. Whether we are working within an intimate venue or a larger setting, our approach remains the same: transforming each space into a celebration that feels immersive, meaningful, and unmistakably yours.
              </p>
            </div>

            <Link
              href="/services"
              className="group mt-10 sm:mt-11 md:mt-12 inline-flex items-center justify-center gap-3 self-start border border-primary px-6 py-3 sm:px-7 md:px-7 md:py-3.5 transition-colors hover:bg-primary hover:text-background"
            >
              <span className="font-body font-light italic tracking-[0.01em] text-[18px] sm:text-[19px] md:text-[20px]">
                Explore our Services
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
        </div>

        {/* Two-column layout (lg+) */}
        <div className="hidden lg:grid grid-cols-[1fr_1fr] gap-10 xl:gap-14 2xl:gap-20 items-stretch">
          {/* Left: image, full-bleed to the left edge */}
          <div className="relative -ml-12 xl:-ml-16 2xl:-ml-20 self-stretch">
            <Image
              src="/images/services/serve.svg"
              alt="How we serve you"
              fill
              className="object-cover object-top"
              sizes="50vw"
            />
          </div>

          {/* Right: text content */}
          <div className="flex flex-col justify-center max-w-[560px] xl:max-w-[640px] 2xl:max-w-[720px] pt-32 xl:pt-36 2xl:pt-40">
            <h3 className="font-display font-thin tracking-[0.03em] text-primary text-[45px] leading-[50px] xl:text-[52px] xl:leading-[58px] 2xl:text-[60px] 2xl:leading-[68px]">
              Our <em className="italic">Services</em>
            </h3>

            <div className="mt-8 xl:mt-10 space-y-6">
              <p className="font-body font-extralight tracking-[0.03em] text-primary text-[18px] leading-[30px] xl:text-[20px] xl:leading-[32px] 2xl:text-[22px] 2xl:leading-[34px]">
                Every celebration begins with a vision — and our role is to help shape it with clarity, care, and intention. From weddings and milestone celebrations to corporate and social events, we support our clients through each decision, translating ideas into thoughtfully executed experiences.
              </p>
              <p className="font-body font-extralight tracking-[0.03em] text-primary text-[18px] leading-[30px] xl:text-[20px] xl:leading-[32px] 2xl:text-[22px] 2xl:leading-[34px]">
                Our work is design-led and deeply personal, focused on creating environments that feel warm, inviting, and elevated — spaces where guests feel both comfortable and captivated. Whether we are working within an intimate venue or a larger setting, our approach remains the same: transforming each space into a celebration that feels immersive, meaningful, and unmistakably yours.
              </p>
            </div>

            <Link
              href="/services"
              className="group mt-10 xl:mt-12 inline-flex items-center justify-center gap-3 self-start border border-primary px-6 py-3 xl:px-7 xl:py-3.5 2xl:px-8 2xl:py-4 transition-colors hover:bg-primary hover:text-background"
            >
              <span className="font-body font-light italic tracking-[0.01em] text-[20px] leading-[35px] xl:text-[22px] 2xl:text-[24px]">
                Explore Our Services
              </span>
              <Image
                src="/icons/buttonarrow.svg"
                alt=""
                width={24}
                height={24}
                className="w-[20px] h-[20px] xl:w-[22px] xl:h-[22px] 2xl:w-[24px] 2xl:h-[24px] transition-transform group-hover:translate-x-1 group-hover:[filter:invert(1)]"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}