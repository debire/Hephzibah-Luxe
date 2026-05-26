"use client";

import { useState, useRef, useEffect } from "react";
import * as Flags from "country-flag-icons/react/3x2";

const countries = [
  { code: "NG", dial: "+234", name: "Nigeria" },
  { code: "GB", dial: "+44", name: "United Kingdom" },
  { code: "US", dial: "+1", name: "United States" },
  { code: "GH", dial: "+233", name: "Ghana" },
  { code: "ZA", dial: "+27", name: "South Africa" },
  { code: "KE", dial: "+254", name: "Kenya" },
  { code: "CA", dial: "+1", name: "Canada" },
  { code: "FR", dial: "+33", name: "France" },
  { code: "DE", dial: "+49", name: "Germany" },
  { code: "AE", dial: "+971", name: "UAE" },
  { code: "IT", dial: "+39", name: "Italy" },
  { code: "ES", dial: "+34", name: "Spain" },
  { code: "PT", dial: "+351", name: "Portugal" },
  { code: "NL", dial: "+31", name: "Netherlands" },
  { code: "BE", dial: "+32", name: "Belgium" },
  { code: "CH", dial: "+41", name: "Switzerland" },
  { code: "AU", dial: "+61", name: "Australia" },
  { code: "NZ", dial: "+64", name: "New Zealand" },
  { code: "IN", dial: "+91", name: "India" },
  { code: "CN", dial: "+86", name: "China" },
  { code: "JP", dial: "+81", name: "Japan" },
  { code: "KR", dial: "+82", name: "South Korea" },
  { code: "BR", dial: "+55", name: "Brazil" },
  { code: "MX", dial: "+52", name: "Mexico" },
  { code: "AR", dial: "+54", name: "Argentina" },
  { code: "EG", dial: "+20", name: "Egypt" },
  { code: "MA", dial: "+212", name: "Morocco" },
  { code: "SN", dial: "+221", name: "Senegal" },
  { code: "CI", dial: "+225", name: "Ivory Coast" },
  { code: "CM", dial: "+237", name: "Cameroon" },
  { code: "ET", dial: "+251", name: "Ethiopia" },
  { code: "TZ", dial: "+255", name: "Tanzania" },
  { code: "UG", dial: "+256", name: "Uganda" },
  { code: "RW", dial: "+250", name: "Rwanda" },
  { code: "IE", dial: "+353", name: "Ireland" },
  { code: "SE", dial: "+46", name: "Sweden" },
  { code: "NO", dial: "+47", name: "Norway" },
  { code: "DK", dial: "+45", name: "Denmark" },
  { code: "FI", dial: "+358", name: "Finland" },
  { code: "SA", dial: "+966", name: "Saudi Arabia" },
  { code: "QA", dial: "+974", name: "Qatar" },
  { code: "TR", dial: "+90", name: "Turkey" },
];

interface CountryPickerProps {
  value: string;
  onChange: (countryCode: string, dialCode: string) => void;
}

export default function CountryPicker({ value, onChange }: CountryPickerProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const FlagComponent = (Flags as Record<string, React.FC<{ className?: string; title?: string }>>)[value];

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="h-[60px] flex items-center gap-2 px-4 border border-[#778472] hover:bg-primary/5 transition-colors"
      >
        {FlagComponent && <FlagComponent className="w-8 h-6" title={value} />}
        <svg
          width="12"
          height="12"
          viewBox="0 0 16 16"
          fill="none"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M4 6L8 10L12 6" stroke="#778472" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul className="absolute top-full left-0 z-20 mt-1 bg-background border border-[#778472] shadow-lg w-64 max-h-72 overflow-y-auto">
          {countries.map((country) => {
            const Flag = (Flags as Record<string, React.FC<{ className?: string; title?: string }>>)[country.code];
            return (
              <li
                key={country.code}
                onClick={() => {
                  onChange(country.code, country.dial);
                  setOpen(false);
                }}
                className="flex items-center gap-3 px-4 py-3 font-sans font-light text-[15px] text-[#778472] bg-background hover:bg-secondary hover:text-background cursor-pointer transition-colors"
              >
                {Flag && <Flag className="w-6 h-4 flex-shrink-0" title={country.code} />}
                <span className="flex-1 truncate">{country.name}</span>
                <span className="text-[13px]">{country.dial}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}