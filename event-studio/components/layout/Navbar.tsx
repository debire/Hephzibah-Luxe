// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";

// const navLinks = [
//     { label: "Home", href: "/" },
//     { label: "About", href: "/about" },
//     { label: "Services", href: "/services" },
//     { label: "Portfolio", href: "/portfolio" },
//     { label: "Before & After", href: "/before-and-after" },
//     { label: "Inquiries", href: "/inquiry" },
// ];

// export default function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);

//     // Lock body scroll when menu is open
//     useEffect(() => {
//         document.body.style.overflow = isOpen ? "hidden" : "";
//         return () => {
//             document.body.style.overflow = "";
//         };
//     }, [isOpen]);

//     return (
//         <header className="bg-primary relative z-50">
//             <nav className="flex items-center justify-between px-3 py-2 lg:px-8">
//                 {/* Logo + Wordmark */}
//                 <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
//                     <Image
//                         src="/brand/logo.svg"
//                         alt="Hephzibah Luxe"
//                         width={80}
//                         height={80}
//                         priority
//                         className="w-16 h-16 lg:w-20 lg:h-20"
//                     />
//                     <div className="flex flex-col">
//                         <span className="font-display font-thin text-[24px] lg:text-[40px] text-background tracking-[-0.01em] leading-[100%]">
//                             HEPHZIBAH LUXE
//                         </span>
//                         <span className="font-body font-light italic text-[8px] lg:text-[12px] text-background/80 mt-1">
//                             Event Planning & Design Studio
//                         </span>
//                     </div>
//                 </Link>

//                 {/* Desktop: nav links + divider + profile */}
//                 <div className="hidden lg:flex items-center gap-8">
//                     <ul className="flex items-center gap-8">
//                         {navLinks
//                             .filter((link) => link.label !== "Home")
//                             .map((link) => (
//                                 <li key={link.href}>
//                                     <Link
//                                         href={link.href}
//                                         className="font-body italic text-[17px] text-background transition-colors hover:text-background/70"
//                                     >
//                                         {link.label}
//                                     </Link>
//                                 </li>
//                             ))}
//                     </ul>
//                     <div className="h-6 w-px bg-background/30" />
//                     <Link
//                         href="/client-portal"
//                         aria-label="Client portal"
//                         className="transition-opacity hover:opacity-70"
//                     >
//                         <Image src="/icons/profile.svg" alt="" width={20} height={20} />
//                     </Link>
//                 </div>

//                 {/* Mobile: menu button */}
//                 <button
//                     onClick={() => setIsOpen(true)}
//                     aria-label="Open menu"
//                     className="lg:hidden transition-opacity hover:opacity-70"
//                 >
//                     <Image src="/icons/menu.svg" alt="" width={32} height={32} />
//                 </button>
//             </nav>

//             {/* Mobile menu overlay */}
//             <div
//                 className={`fixed inset-0 z-50 bg-primary transition-opacity duration-300 lg:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
//                     }`}
//             >
//                 <div className="flex flex-col h-full px-6 py-6">
//                     {/* Top row: logo + close */}
//                     <div className="flex items-start justify-between">
//                         <Image
//                             src="/brand/logo.svg"
//                             alt="Hephzibah Luxe"
//                             width={183}
//                             height={183}
//                         />
//                         <button
//                             onClick={() => setIsOpen(false)}
//                             aria-label="Close menu"
//                             className="transition-opacity hover:opacity-70 mt-2"
//                         >
//                             <Image src="/icons/close.svg" alt="" width={24} height={24} />
//                         </button>
//                     </div>

//                     {/* Nav links - right aligned, centered vertically */}
//                     <ul className="flex flex-col items-end justify-center flex-1 gap-1 pr-2 -mt-26">
//                         {navLinks.map((link) => (
//                             <li key={link.href}>
//                                 <Link
//                                     href={link.href}
//                                     onClick={() => setIsOpen(false)}
//                                     className="font-display font-thin text-background text-[40px] tracking-[0.05em] uppercase transition-opacity hover:opacity-70"
//                                 >
//                                     {link.label}
//                                 </Link>
//                             </li>
//                         ))}
//                     </ul>

//                     {/* Client login - bottom right */}
//                     <div className="flex justify-end pb-8">
//                         <Link
//                             href="/client-portal"
//                             onClick={() => setIsOpen(false)}
//                             className="font-sans text-background text-sm uppercase tracking-[0.1em] underline underline-offset-4"
//                         >
//                             Client Login
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// }



"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Before & After", href: "/before-and-after" },
    { label: "Inquiries", href: "/inquiry" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname === href || pathname.startsWith(href + "/");
    };

    return (
        <header className="bg-primary relative z-50">
            <nav className="flex items-center justify-between px-3 py-2 lg:px-8">
                {/* Logo + Wordmark */}
                <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                    <Image
                        src="/brand/logo.svg"
                        alt="Hephzibah Luxe"
                        width={80}
                        height={80}
                        priority
                        className="w-16 h-16 lg:w-20 lg:h-20"
                    />
                    <div className="flex flex-col">
                        <span className="font-display font-thin text-[24px] lg:text-[40px] text-background tracking-[-0.01em] leading-[100%]">
                            HEPHZIBAH LUXE
                        </span>
                        <span className="font-body font-light italic text-[8px] lg:text-[12px] text-background/80 mt-1">
                            Event Planning & Design Studio
                        </span>
                    </div>
                </Link>

                {/* Desktop nav */}
                <div className="hidden lg:flex items-center gap-8">
                    <ul className="flex items-center gap-8">
                        {navLinks
                            .filter((link) => link.label !== "Home")
                            .map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`font-body italic text-[17px] text-background transition-colors hover:text-background/70 pb-1 border-b ${
                                            isActive(link.href)
                                                ? "border-background"
                                                : "border-transparent"
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                    </ul>
                    <div className="h-6 w-px bg-background/30" />
                    <Link
                        href="/client-portal"
                        aria-label="Client portal"
                        className="transition-opacity hover:opacity-70"
                    >
                        <Image src="/icons/profile.svg" alt="" width={20} height={20} />
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={() => setIsOpen(true)}
                    aria-label="Open menu"
                    className="lg:hidden transition-opacity hover:opacity-70"
                >
                    <Image src="/icons/menu.svg" alt="" width={32} height={32} />
                </button>
            </nav>

            {/* Mobile menu overlay */}
            <div
                className={`fixed inset-0 z-50 bg-primary transition-opacity duration-300 lg:hidden ${
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            >
                <div className="flex flex-col h-full px-6 py-6">
                    <div className="flex items-start justify-between">
                        <Image
                            src="/brand/logo.svg"
                            alt="Hephzibah Luxe"
                            width={183}
                            height={183}
                        />
                        <button
                            onClick={() => setIsOpen(false)}
                            aria-label="Close menu"
                            className="transition-opacity hover:opacity-70 mt-2"
                        >
                            <Image src="/icons/close.svg" alt="" width={24} height={24} />
                        </button>
                    </div>

                    <ul className="flex flex-col items-end justify-center flex-1 gap-1 pr-2 -mt-26">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`font-display font-thin text-background text-[40px] tracking-[0.05em] uppercase transition-opacity hover:opacity-70 pb-1 border-b ${
                                        isActive(link.href)
                                            ? "border-background"
                                            : "border-transparent"
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex justify-end pb-8">
                        <Link
                            href="/client-portal"
                            onClick={() => setIsOpen(false)}
                            className="font-sans text-background text-sm uppercase tracking-[0.1em] underline underline-offset-4"
                        >
                            Client Login
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}