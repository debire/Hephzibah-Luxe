// import Image from "next/image";
// import Link from "next/link";

// export default function Serve() {
//     return (
//         <section className="bg-background text-primary overflow-hidden">
//             <div className="lg:px-12 lg:py-24">
//                 {/* Mobile layout: stacked */}
//                 <div className="lg:hidden flex flex-col px-6 py-8">
//                     <div className="relative w-full">
//                         <Image
//                             src="/images/Services/mobileserve.jpg"
//                             alt="How we serve you"
//                             width={800}
//                             height={500}
//                             className="w-full h-auto"
//                         />
//                     </div>

//                     <div className="mt-3">
//                         <h3 className="font-display font-thin text-[28px] leading-[34px] tracking-[0.03em] text-primary">
//                             Our <em className="italic">Services</em>
//                         </h3>

//                         <div className="mt-6 space-y-6">
//                             <p className="font-body font-extralight text-[15px] leading-[26px] tracking-[0.03em] text-primary">
//                                 Every celebration begins with a vision — and our role is to help shape it with clarity, care, and intention. From weddings and milestone celebrations to corporate and social events, we support our clients through each decision, translating ideas into thoughtfully executed experiences.
//                             </p>
//                             <p className="font-body font-extralight text-[15px] leading-[26px] tracking-[0.03em] text-primary">
//                                 Our work is design-led and deeply personal, focused on creating environments that feel warm, inviting, and elevated — spaces where guests feel both comfortable and captivated. Whether we are working within an intimate venue or a larger setting, our approach remains the same: transforming each space into a celebration that feels immersive, meaningful, and unmistakably yours.
//                             </p>
//                         </div>

//                         <Link
//                             href="/services"
//                             className="group mt-10 inline-flex items-center justify-center gap-3 self-start border border-primary px-6 py-3 transition-colors hover:bg-primary hover:text-background"
//                         >
//                             <span className="font-body font-light italic text-[18px] tracking-[0.01em]">
//                                 Explore our Services
//                             </span>
//                             <Image
//                                 src="/icons/buttonarrow.svg"
//                                 alt=""
//                                 width={20}
//                                 height={20}
//                                 className="transition-transform group-hover:translate-x-1 group-hover:[filter:invert(1)]"
//                             />
//                         </Link>
//                     </div>
//                 </div>

//                 {/* Desktop layout: two columns */}
//                 <div className="hidden lg:grid grid-cols-2 items-stretch">
//                     {/* Left: image, full-bleed to the left edge */}
//                     <div className="relative self-stretch min-h-[700px]">
//                         <Image
//                             src="/images/Services/serve.jpg"
//                             alt="How we serve you"
//                             fill
//                             className="object-cover object-top"
//                             sizes="50vw"
//                         />
//                     </div>

//                     {/* Right: text content */}
//                     <div className="flex flex-col justify-center max-w-[560px] pt-32 pl-12 pr-12">
//                         <h3 className="font-display font-thin text-[45px] leading-[50px] tracking-[0.03em] text-primary">
//                             Our <em className="italic">Services</em>
//                         </h3>

//                         <div className="mt-8 space-y-6">
//                             <p className="font-body font-extralight text-[18px] leading-[30px] tracking-[0.03em] text-primary">
//                                 Every celebration begins with a vision — and our role is to help shape it with clarity, care, and intention. From weddings and milestone celebrations to corporate and social events, we support our clients through each decision, translating ideas into thoughtfully executed experiences.
//                             </p>
//                             <p className="font-body font-extralight text-[18px] leading-[30px] tracking-[0.03em] text-primary">
//                                 Our work is design-led and deeply personal, focused on creating environments that feel warm, inviting, and elevated — spaces where guests feel both comfortable and captivated. Whether we are working within an intimate venue or a larger setting, our approach remains the same: transforming each space into a celebration that feels immersive, meaningful, and unmistakably yours.
//                             </p>
//                         </div>

//                         <Link
//                             href="/services"
//                             className="group mt-10 inline-flex items-center justify-center gap-3 self-start border border-primary px-6 py-3 transition-colors hover:bg-primary hover:text-background"
//                         >
//                             <span className="font-body font-light italic text-[20px] leading-[35px] tracking-[0.01em]">
//                                 Explore Our Services
//                             </span>
//                             <Image
//                                 src="/icons/buttonarrow.svg"
//                                 alt=""
//                                 width={20}
//                                 height={20}
//                                 className="transition-transform group-hover:translate-x-1 group-hover:[filter:invert(1)]"
//                             />
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }



import Image from "next/image";
import Link from "next/link";

export default function Serve() {
  return (
    <section className="bg-background text-primary">
      <div className="lg:px-12 lg:py-24">
        {/* Mobile layout: stacked */}
        <div className="lg:hidden flex flex-col px-6 py-6">
          <div className="relative w-full">
            <Image
              src="/images/Services/mobileserve.jpg"
              alt="How we serve you"
              width={800}
              height={500}
              className="w-full h-auto"
            />
          </div>

          <div className="mt-3">
            <h3 className="font-display font-thin text-[28px] leading-[34px] tracking-[0.03em] text-primary">
              Our <em className="italic">Services</em>
            </h3>

            <div className="mt-6 space-y-6">
              <p className="font-body font-extralight text-[15px] leading-[26px] tracking-[0.03em] text-primary">
                Every celebration begins with a vision — and our role is to help shape it with clarity, care, and intention. From weddings and milestone celebrations to corporate and social events, we support our clients through each decision, translating ideas into thoughtfully executed experiences.
              </p>
              <p className="font-body font-extralight text-[15px] leading-[26px] tracking-[0.03em] text-primary">
                Our work is design-led and deeply personal, focused on creating environments that feel warm, inviting, and elevated — spaces where guests feel both comfortable and captivated. Whether we are working within an intimate venue or a larger setting, our approach remains the same: transforming each space into a celebration that feels immersive, meaningful, and unmistakably yours.
              </p>
            </div>

            <Link
              href="/services"
              className="group mt-10 inline-flex items-center justify-center gap-3 self-start border border-primary px-6 py-3 transition-colors hover:bg-primary hover:text-background"
            >
              <span className="font-body font-light italic text-[18px] tracking-[0.01em]">
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

        {/* Desktop layout: two columns */}
        <div className="hidden lg:grid grid-cols-[1fr_1fr] gap-12 items-stretch">
          {/* Left: image, full-bleed to the left edge */}
          <div className="relative -ml-12 self-stretch">
            <Image
              src="/images/Services/serve.jpg"
              alt="How we serve you"
              fill
              className="object-cover object-top"
              sizes="50vw"
            />
          </div>

          {/* Right: text content */}
          <div className="flex flex-col justify-center max-w-[560px] pt-32">
            <h3 className="font-display font-thin text-[45px] leading-[50px] tracking-[0.03em] text-primary">
              Our <em className="italic">Services</em>
            </h3>

            <div className="mt-8 space-y-6">
              <p className="font-body font-extralight text-[18px] leading-[30px] tracking-[0.03em] text-primary">
                Every celebration begins with a vision — and our role is to help shape it with clarity, care, and intention. From weddings and milestone celebrations to corporate and social events, we support our clients through each decision, translating ideas into thoughtfully executed experiences.
              </p>
              <p className="font-body font-extralight text-[18px] leading-[30px] tracking-[0.03em] text-primary">
                Our work is design-led and deeply personal, focused on creating environments that feel warm, inviting, and elevated — spaces where guests feel both comfortable and captivated. Whether we are working within an intimate venue or a larger setting, our approach remains the same: transforming each space into a celebration that feels immersive, meaningful, and unmistakably yours.
              </p>
            </div>

            <Link
              href="/services"
              className="group mt-10 inline-flex items-center justify-center gap-3 self-start border border-primary px-6 py-3 transition-colors hover:bg-primary hover:text-background"
            >
              <span className="font-body font-light italic text-[20px] leading-[35px] tracking-[0.01em]">
                Explore Our Services
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
      </div>
    </section>
  );
}