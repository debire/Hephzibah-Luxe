import Image from "next/image";
import Link from "next/link";

export default function Intention() {
    return (
        <section className="relative z-40">
            <div
                className="relative w-full min-h-[600px] lg:min-h-screen flex items-center justify-center py-8 lg:py-20 px-6 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url(/images/servicespage/intentionbg.jpg)" }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-primary/60" />

                {/* Content */}
                <div className="relative z-10 max-w-5xl mx-auto text-center text-background">
                    <h2 className="font-display font-thin text-[34px] leading-[100%] lg:text-[50px] tracking-[0.01em] mb-10 lg:mb-12">
                        Where intention leads, ease follows — thoughtfully planned, so every moment feels effortless.
                    </h2>

                    <div className="mb-10 lg:mb-12 max-w-4xl mx-auto">
                        <p className="font-body font-light text-[16px] leading-[28px] lg:text-[24px] lg:leading-[35px] tracking-[0]">
                            Luxury, to us, is intention. It&apos;s found in the quiet details, the seamless flow, and the confidence that comes from knowing every moment is thoughtfully handled. We create events that feel beautiful, meaningful, and effortless — so you can be fully present and enjoy the celebration.
                        </p>
                    </div>

                    <p className="mb-10 lg:mb-12 font-sans font-light text-[14px] leading-[24px] lg:text-[20px] lg:leading-[35px] tracking-[0.01em] uppercase">
                        — Winifred Ojulari, CEO Hephzibah Luxe
                    </p>

                    <div className="flex flex-row items-center justify-center gap-3 sm:gap-6">
                        <Link
                            href="/portfolio"
                            className="group inline-flex items-center gap-2 lg:gap-3 border border-background px-4 py-2 lg:px-8 transition-all duration-300 hover:bg-background"
                        >
                            <span className="font-body font-light italic text-[13px] lg:text-[20px] leading-[24px] lg:leading-[35px] text-background group-hover:text-primary transition-colors whitespace-nowrap">
                                View our Portfolio
                            </span>
                            <span className="relative inline-block w-[16px] h-[12px] lg:w-[20px] lg:h-[14px]">
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

                        <Link
                            href="/portfolio"
                            className="group inline-flex items-center gap-2 lg:gap-3 border border-background px-4 py-2 lg:px-8 transition-all duration-300 hover:bg-background"
                        >
                            <span className="font-body font-light italic text-[13px] lg:text-[20px] leading-[24px] lg:leading-[35px] text-background group-hover:text-primary transition-colors whitespace-nowrap">
                                View our Portfolio
                            </span>
                            <span className="relative inline-block w-[16px] h-[12px] lg:w-[20px] lg:h-[14px]">
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
            </div>
        </section>
    );
}