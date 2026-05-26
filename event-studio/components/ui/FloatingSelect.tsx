"use client";

import { useState, useRef, useEffect } from "react";

interface FloatingSelectProps {
    label: string;
    required?: boolean;
    options: string[];
    value: string;
    onChange: (value: string) => void;
}

export default function FloatingSelect({
    label,
    required,
    options,
    value,
    onChange,
}: FloatingSelectProps) {
    const [open, setOpen] = useState(false);
    const [focused, setFocused] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const isFloating = focused || open || value.length > 0;

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setOpen(false);
                setFocused(false);
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    return (
        <div ref={wrapperRef} className="relative">
            <button
                type="button"
                onClick={() => {
                    setOpen(!open);
                    setFocused(true);
                }}
                className="w-full border border-[#778472] bg-transparent px-4 pt-5 pb-2 font-sans font-normal text-[18px] leading-[24px] text-primary outline-none text-left flex items-center justify-between transition-colors focus:border-primary"
            >
                <span>{value || ""}</span>
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className={`transition-transform ${open ? "rotate-180" : ""}`}
                >
                    <path d="M4 6L8 10L12 6" stroke="#778472" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <label
                className={`absolute left-4 pointer-events-none transition-all duration-200 font-sans font-light text-[#778472] ${isFloating
                        ? "top-0 -translate-y-1/2 text-[12px] bg-background px-1"
                        : "top-1/2 -translate-y-1/2 text-[18px]"
                    }`}
            >
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>

            {open && (
                <ul className="absolute top-full left-0 right-0 z-20 mt-1 bg-background border border-[#778472] shadow-lg max-h-60 overflow-y-auto">
                    {options.map((option) => (
                        <li
                            key={option}
                            onClick={() => {
                                onChange(option);
                                setOpen(false);
                                setFocused(false);
                            }}
                            className="px-4 py-3 font-sans font-light text-[16px] text-[#778472] bg-background hover:bg-secondary hover:text-background cursor-pointer transition-colors"
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}