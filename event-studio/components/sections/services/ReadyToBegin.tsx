import Image from "next/image";
import Link from "next/link";

export default function ReadyToBegin() {
  return (
    <section className="relative z-40 bg-background text-primary">
      <div className="flex flex-col items-center text-center px-6 py-20 lg:px-12 lg:py-32">
        <h2 className="font-display font-thin text-[30px] leading-[100%] lg:text-[45px] tracking-[-0.01em] text-primary max-w-[1000px]">
          Ready to Begin Your Celebration With Intention?
        </h2>

        <p className="mt-8 lg:mt-10 font-body font-light text-[15px] leading-[24px] lg:text-[18px] lg:leading-[29px] tracking-[0] text-primary max-w-[860px]">
          Every celebration we plan is thoughtfully customised to reflect your vision, priorities, and scale. We work with care and flexibility, guiding each client toward what&apos;s possible with intention and clarity. If you&apos;re ready to begin the conversation, we&apos;d love to hear from you.
        </p>

        <Link
          href="/inquiry"
          className="group mt-10 lg:mt-12 inline-flex items-center justify-center gap-3 border border-primary px-6 py-3 transition-colors hover:bg-primary hover:text-background"
        >
          <span className="font-body font-light italic text-[18px] lg:text-[20px] leading-[35px] tracking-[0.01em]">
            Send us a message
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
    </section>
  );
}