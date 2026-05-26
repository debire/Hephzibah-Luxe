import Image from "next/image";

export default function InquiryHero() {
    return (
        <section className="relative w-full h-[35vh] lg:h-[70vh]">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url(/images/inquirypage/inquirybg.jpg)" }}
            >
                <div className="absolute inset-0 bg-primary/10" />
            </div>

            {/* Rotating badge - bottom right */}
            <div className="absolute bottom-2 right-2 lg:right-20">
                <div className="relative w-44 h-44 lg:w-64 lg:h-64">
                    {/* Center logo */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <Image
                            src="/brand/logo.svg"
                            alt="Hephzibah Luxe"
                            width={96}
                            height={96}
                            className="w-16 h-16 lg:w-24 lg:h-24"
                        />
                    </div>

                    {/* Rotating circular text */}
                    <svg
                        viewBox="0 0 200 200"
                        className="w-full h-full animate-rotate-slow"
                    >
                        <defs>
                            <path
                                id="circlePath"
                                d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                                fill="none"
                            />
                        </defs>
                        <text
                            fill="white"
                            fontSize="14"
                            fontFamily="var(--font-editors-note), serif"
                            fontWeight="400"
                        >
                            <textPath href="#circlePath" textLength="470" spacing="auto">
                                • WORK WITH US • WORK WITH US • WORK WITH US&#160;
                            </textPath>
                        </text>
                    </svg>
                </div>
            </div>
        </section>
    );
}