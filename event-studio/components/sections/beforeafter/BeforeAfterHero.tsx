import Image from "next/image";

export default function BeforeAfterHero() {
    return (
        <section className="relative w-full h-[50vh] lg:h-screen overflow-hidden">
            {/* Split background images */}
            <div className="absolute inset-0 flex">
                <div
                    className="w-1/2 bg-cover bg-center"
                    style={{ backgroundImage: "url(/images/beforeafterpage/beforebg.jpg)" }}
                />
                <div
                    className="w-1/2 bg-cover bg-center"
                    style={{ backgroundImage: "url(/images/beforeafterpage/afterbg.jpg)" }}
                />
            </div>

            {/* Text overlay - & at dead center */}
            <div className="absolute inset-0 flex items-center justify-center">
                {/* BEFORE - ends at the & */}
                <h1
                    className="font-display font-thin italic absolute text-primary text-[42px] lg:text-[140px] leading-[1] right-[50%] mr-7 lg:mr-[110px]"
                >
                    BEFORE
                </h1>

                {/* & icon - dead center */}
                <Image
                    src="/icons/andsign.svg"
                    alt="and"
                    width={112}
                    height={112}
                    className="w-12 h-12 lg:w-28 lg:h-28 object-contain z-10"
                />

                {/* After - starts at the & */}
                <h1
                    className="font-display font-thin italic absolute text-background text-[52px] lg:text-[190px] leading-[1] left-[50%] ml-7 lg:ml-[110px]"
                >
                    After
                </h1>
            </div>
        </section>
    );
}