import Image from "next/image";
import Link from "next/link";

export default function Celebration() {
    return (
        <section className="bg-secondary text-background">
            {/* Mobile: stacked */}
            <div className="lg:hidden flex flex-col">
                <div className="relative w-full aspect-[4/3]">
                    <Image
                        src="/images/celebration/shape.jpg"
                        alt="Elegant table setting"
                        fill
                        className="object-cover"
                        sizes="100vw"
                    />
                </div>

                <div className="flex flex-col items-center px-6 py-16 text-center">
                    <h2 className="font-display font-thin text-[28px] leading-[34px] tracking-[0.03em] text-background max-w-[400px]">
                        Where Your Celebration Takes Shape
                    </h2>

                    <p className="mt-8 font-body font-extralight text-[15px] leading-[26px] tracking-[0.03em] text-background max-w-[420px]">
                        Ready to start planning a celebration that feels thoughtful, meaningful, and beautifully considered? Whether you're at the early stages or refining the details, we're here to listen and guide you with care. We would love to hear more about your vision.
                    </p>

                    <Link
                        href="/inquiry"
                        className="group mt-10 inline-flex items-center justify-center gap-3 border border-background px-6 py-3 transition-colors hover:bg-background"
                    >
                        <span className="font-body font-light italic text-[18px] tracking-[0.01em] text-background group-hover:text-secondary transition-colors">
                            Send us a message
                        </span>
                        <span className="relative inline-block w-[16px] h-[16px]">
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

            {/* Desktop: two columns */}
            <div className="hidden lg:grid grid-cols-2 items-stretch">
                <div className="relative self-stretch min-h-[640px]">
                    <Image
                        src="/images/celebration/shape.jpg"
                        alt="Elegant table setting"
                        fill
                        className="object-cover"
                        sizes="50vw"
                    />
                </div>

                <div className="flex flex-col items-center justify-center text-center px-12 py-20">
                    <h2 className="font-display font-thin text-[35px] leading-[100%] tracking-[0.01em] text-background whitespace-nowrap">
                        Where Your Celebration Takes Shape
                    </h2>

                    <p className="mt-10 font-body font-extralight text-[18px] leading-[30px] tracking-[0.03em] text-background max-w-[480px]">
                        Ready to start planning a celebration that feels thoughtful, meaningful, and beautifully considered? Whether you're at the early stages or refining the details, we're here to listen and guide you with care. We would love to hear more about your vision.
                    </p>

                    <Link
                        href="/inquiry"
                        className="group mt-12 inline-flex items-center justify-center gap-3 border border-background px-6 py-3 transition-colors hover:bg-background"
                    >
                        <span className="font-body font-light italic text-[20px] leading-[35px] tracking-[0.01em] text-background group-hover:text-secondary transition-colors">
                            Send us a message
                        </span>
                        <span className="relative inline-block w-[20px] h-[20px]">
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
        </section>
    );
}