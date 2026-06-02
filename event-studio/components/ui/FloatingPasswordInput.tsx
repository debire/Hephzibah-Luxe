"use client";

import { useState, InputHTMLAttributes } from "react";

interface FloatingPasswordInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  required?: boolean;
}

export default function FloatingPasswordInput({
  label,
  required,
  value,
  onChange,
  ...rest
}: FloatingPasswordInputProps) {
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const isFloating = focused || (typeof value === "string" && value.length > 0);

  return (
    <div className="relative">
      <input
        type={visible ? "text" : "password"}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full h-[60px] border border-[#778472] bg-transparent px-4 pt-5 pb-2 pr-24 font-sans font-normal text-[18px] leading-[24px] text-primary outline-none transition-colors focus:border-primary"
        {...rest}
      />
      <label
        className={`absolute left-4 pointer-events-none transition-all duration-200 font-sans font-light ${
          isFloating
            ? "top-0 -translate-y-1/2 text-[12px] bg-background px-1 text-[#778472]"
            : "top-1/2 -translate-y-1/2 text-[18px] text-[#778472]"
        }`}
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <button
        type="button"
        onClick={() => setVisible((v) => !v)}
        className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 font-sans font-light text-[14px] text-[#778472] hover:text-primary transition-colors"
        aria-label={visible ? "Hide password" : "Show password"}
      >
        {visible ? (
          // Eye open
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        ) : (
          // Eye off
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
            <line x1="1" y1="1" x2="23" y2="23" />
          </svg>
        )}
        <span>{visible ? "Hide" : "Show"}</span>
      </button>
    </div>
  );
}