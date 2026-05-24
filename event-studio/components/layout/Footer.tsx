"use client";

import Image from "next/image";
import Link from "next/link";

const navLinks = [
    [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Portfolio", href: "/portfolio" },
    ],
    [
        { label: "Services", href: "/services" },
        { label: "Before & After", href: "/before-and-after" },
        { label: "Inquiries", href: "/inquiry" },
    ],
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-primary text-background">
            <div className="px-6 pt-10 pb-4 lg:px-12 lg:pt-16 lg:pb-6">
                {/* Block 1: logo + nav links */}
                <div className="flex flex-row items-start justify-between gap-6 lg:gap-10">
                    <div className="flex-shrink-0">
                        <Image
                            src="/brand/logo.svg"
                            alt="Hephzibah Luxe"
                            width={280}
                            height={280}
                            className="w-[100px] h-[100px] lg:w-[280px] lg:h-[280px]"
                        />
                    </div>

                    <nav className="flex gap-8 lg:gap-20">
                        {navLinks.map((column, ci) => (
                            <ul key={ci} className="flex flex-col gap-3 lg:gap-8">
                                {column.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="font-display font-thin text-[20px] lg:text-[43px] leading-[100%] text-background transition-opacity hover:opacity-70"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </nav>
                </div>

                {/* Block 2: tagline + address */}
                <div className="mt-8 lg:mt-12 flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-16">
                    {/* Tagline */}
                    <div className="font-body font-normal text-[9px] leading-[16px] lg:text-[16px] lg:leading-[27px] tracking-[-0.01em] text-background max-w-[480px]">
                        <p>
                            Crafting Refined, Beautiful, And Meaningful Celebrations — From Intimate Moments To Grand Occasions. Designed With Intention, Executed With Elegance.
                        </p>
                        <p className="mt-3 lg:mt-4">Nigerian Rooted | Globally Reaching.</p>
                    </div>

                    {/* Address */}
                    <div className="font-body font-normal text-[9px] leading-[16px] lg:text-[16px] lg:leading-[27px] tracking-[-0.01em] text-background space-y-1 lg:space-y-2">
                        <p>29 Adeniran Ogunsanya, Surulere, Lagos, Nigeria</p>
                        <p>Monday - Friday: 9:00am to 5:00pm</p>
                        <p>Closed: After Dec 18th &nbsp;&amp; on Public Holidays</p>
                        <p>0802 320 3870</p>
                    </div>
                </div>

                {/* Bottom: copyright + mobile back to top */}
                <div className="mt-8 lg:mt-10 flex items-end justify-between gap-4">
                    <p className="font-body font-normal text-[9px] leading-[16px] lg:text-[14px] lg:leading-[24px] text-background">
                        © 2025 Hephzibah Luxe. All rights reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        aria-label="Back to top"
                        className="lg:hidden flex flex-col items-center gap-1 group"
                    >
                        <Image
                            src="/icons/back.svg"
                            alt=""
                            width={32}
                            height={32}
                            className="transition-transform group-hover:-translate-y-1"
                        />
                        <span className="font-body font-normal text-[9px] leading-[14px] text-background">
                            Back to Top
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
}


// "use client";

// import Image from "next/image";
// import Link from "next/link";

// const navLinks = [
//   [
//     { label: "Home", href: "/" },
//     { label: "About", href: "/about" },
//     { label: "Portfolio", href: "/portfolio" },
//   ],
//   [
//     { label: "Services", href: "/services" },
//     { label: "Before & After", href: "/before-and-after" },
//     { label: "Inquiries", href: "/inquiry" },
//   ],
// ];

// export default function Footer() {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer className="bg-primary text-background">
//       <div className="px-6 pt-10 pb-4 lg:px-12 lg:pt-16 lg:pb-6">
//         {/* Block 1: logo + nav links */}
//         <div className="flex flex-row items-start justify-between gap-6 lg:gap-10">
//           <div className="flex-shrink-0">
//             <Image
//               src="/brand/logo.svg"
//               alt="Hephzibah Luxe"
//               width={280}
//               height={280}
//               className="w-[100px] h-[100px] lg:w-[280px] lg:h-[280px]"
//             />
//           </div>

//           <nav className="flex gap-8 lg:gap-20">
//             {navLinks.map((column, ci) => (
//               <ul key={ci} className="flex flex-col gap-3 lg:gap-5">
//                 {column.map((link) => (
//                   <li key={link.href}>
//                     <Link
//                       href={link.href}
//                       className="font-display font-thin text-[20px] lg:text-[40px] leading-[100%] text-background transition-opacity hover:opacity-70"
//                     >
//                       {link.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             ))}
//           </nav>
//         </div>

//         {/* Block 2: tagline + address */}
//         <div className="mt-8 lg:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-90">
//           {/* Tagline - left on desktop, top on mobile */}
//           <div className="font-body font-normal text-[9px] leading-[16px] lg:text-[16px] lg:leading-[27px] tracking-[-0.01em] text-background max-w-[480px]">
//             <p>
//               Crafting Refined, Beautiful, And Meaningful Celebrations — From Intimate Moments To Grand Occasions. Designed With Intention, Executed With Elegance.
//             </p>
//             <p className="mt-3 lg:mt-4">Nigerian Rooted | Globally Reaching.</p>
//           </div>

//           {/* Address - right on desktop, below tagline on mobile */}
//           <div className="font-body font-normal text-[9px] leading-[16px] lg:text-[16px] lg:leading-[27px] tracking-[-0.01em] text-background space-y-1 lg:space-y-2">
//             <p>29 Adeniran Ogunsanya, Surulere, Lagos, Nigeria</p>
//             <p>Monday - Friday: 9:00am to 5:00pm</p>
//             <p>Closed: After Dec 18th &nbsp;&amp; on Public Holidays</p>
//             <p>0802 320 3870</p>
//           </div>
//         </div>

//         {/* Bottom: copyright + mobile back to top */}
//         <div className="mt-8 lg:mt-10 flex items-end justify-between gap-4">
//           <p className="font-body font-normal text-[9px] leading-[16px] lg:text-[14px] lg:leading-[24px] text-background">
//             © 2025 Hephzibah Luxe. All rights reserved.
//           </p>

//           <button
//             onClick={scrollToTop}
//             aria-label="Back to top"
//             className="lg:hidden flex flex-col items-center gap-1 group"
//           >
//             <Image
//               src="/icons/back.svg"
//               alt=""
//               width={32}
//               height={32}
//               className="transition-transform group-hover:-translate-y-1"
//             />
//             <span className="font-body font-normal text-[9px] leading-[14px] text-background">
//               Back to Top
//             </span>
//           </button>
//         </div>
//       </div>
//     </footer>
//   );
// }