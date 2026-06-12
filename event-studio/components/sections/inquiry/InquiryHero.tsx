// import Image from "next/image";

// export default function InquiryHero() {
//     return (
//         <section className="relative w-full h-[35vh] lg:h-[70vh]">
//             {/* Background */}
//             <div
//                 className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//                 style={{ backgroundImage: "url(/images/inquirypage/inquirybg.jpg)" }}
//             >
//                 <div className="absolute inset-0 bg-primary/10" />
//             </div>

//             {/* Rotating badge - bottom right */}
//             <div className="absolute bottom-2 right-2 lg:right-20">
//                 <div className="relative w-44 h-44 lg:w-64 lg:h-64">
//                     {/* Center logo */}
//                     <div className="absolute inset-0 flex items-center justify-center z-10">
//                         <Image
//                             src="/brand/logo.svg"
//                             alt="Hephzibah Luxe"
//                             width={96}
//                             height={96}
//                             className="w-16 h-16 lg:w-24 lg:h-24"
//                         />
//                     </div>

//                     {/* Rotating circular text */}
//                     <svg
//                         viewBox="0 0 200 200"
//                         className="w-full h-full animate-rotate-slow"
//                     >
//                         <defs>
//                             <path
//                                 id="circlePath"
//                                 d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
//                                 fill="none"
//                             />
//                         </defs>
//                         <text
//                             fill="white"
//                             fontSize="14"
//                             fontFamily="var(--font-editors-note), serif"
//                             fontWeight="400"
//                         >
//                             <textPath href="#circlePath" textLength="470" spacing="auto">
//                                 • WORK WITH US • WORK WITH US • WORK WITH US&#160;
//                             </textPath>
//                         </text>
//                     </svg>
//                 </div>
//             </div>
//         </section>
//     );
// }



import Image from "next/image";

export default function InquiryHero() {
    return (
        <section className="relative w-full h-[40vh] sm:h-[45vh] md:h-[40vh] lg:h-[70vh] xl:h-[75vh] 2xl:h-[80vh]">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url(/images/inquirypage/inquirybg.jpg)" }}
            >
                <div className="absolute inset-0 bg-primary/10" />
            </div>

            {/* Rotating badge — bottom right */}
            <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-6 xl:bottom-6 right-2 sm:right-3 md:right-6 lg:right-20 xl:right-18 2xl:right-32">
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-64 lg:h-64 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80">
                    {/* Center logo */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <Image
                            src="/brand/logo.svg"
                            alt="Hephzibah Luxe"
                            width={128}
                            height={128}
                            className="w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32"
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