"use client";

import { useState, useEffect, useRef, KeyboardEvent, ClipboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import FloatingInput from "@/components/ui/FloatingInput";
import FloatingPasswordInput from "@/components/ui/FloatingPasswordInput";
import ClientPortalLayout from "./ClientPortalLayout";

const VALID_EMAIL = "damilareebire@gmail.com";
const VALID_CODE = "1234";
const RESEND_SECONDS = 10;

type Step = "email" | "code" | "reset" | "success";

export default function ForgotPassword() {
    const [step, setStep] = useState<Step>("email");

    // Step 1 — email
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);

    // Step 2 — code
    const [digits, setDigits] = useState<string[]>(["", "", "", ""]);
    const [codeError, setCodeError] = useState(false);
    const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS);
    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

    // Step 3 — reset
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const has8Chars = newPassword.length >= 8;
    const hasUppercase = /[A-Z]/.test(newPassword);
    const hasSpecialOrNumber = /[^A-Za-z]/.test(newPassword);
    const allRulesMet = has8Chars && hasUppercase && hasSpecialOrNumber;
    const passwordsMatch = newPassword.length > 0 && newPassword === confirmPassword;
    const canReset = allRulesMet && passwordsMatch;

    // Resend countdown
    useEffect(() => {
        if (step !== "code") return;
        if (secondsLeft <= 0) return;
        const id = setInterval(() => setSecondsLeft((s) => Math.max(0, s - 1)), 1000);
        return () => clearInterval(id);
    }, [step, secondsLeft]);

    // ─────── Step 1 ───────
    function handleEmailSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!email) return;

        if (email.toLowerCase() === VALID_EMAIL.toLowerCase()) {
            setEmailError(false);
            setStep("code");
            setSecondsLeft(RESEND_SECONDS);
            setDigits(["", "", "", ""]);
            setCodeError(false);
        } else {
            setEmailError(true);
        }
    }

    function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value);
        if (emailError) setEmailError(false);
    }

    // ─────── Step 2 ───────
    const code = digits.join("");
    const canVerify = code.length === 4;

    function setDigitAt(i: number, value: string) {
        const next = [...digits];
        next[i] = value;
        setDigits(next);
        if (codeError) setCodeError(false);
    }

    function handleDigitChange(i: number, raw: string) {
        const cleaned = raw.replace(/\D/g, "").slice(-1);
        setDigitAt(i, cleaned);
        if (cleaned && i < 3) inputRefs.current[i + 1]?.focus();
    }

    function handleDigitKeyDown(i: number, e: KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Backspace" && !digits[i] && i > 0) inputRefs.current[i - 1]?.focus();
        if (e.key === "ArrowLeft" && i > 0) inputRefs.current[i - 1]?.focus();
        if (e.key === "ArrowRight" && i < 3) inputRefs.current[i + 1]?.focus();
    }

    function handleDigitPaste(e: ClipboardEvent<HTMLInputElement>) {
        e.preventDefault();
        const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 4);
        if (!pasted) return;
        const next = ["", "", "", ""];
        for (let i = 0; i < pasted.length; i++) next[i] = pasted[i];
        setDigits(next);
        setCodeError(false);
        const lastIdx = Math.min(pasted.length, 4) - 1;
        inputRefs.current[lastIdx]?.focus();
    }

    function handleCodeSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!canVerify) return;

        if (code === VALID_CODE) {
            setCodeError(false);
            setStep("reset");
        } else {
            setCodeError(true);
        }
    }

    function handleResend() {
        if (secondsLeft > 0) return;
        setSecondsLeft(RESEND_SECONDS);
        setDigits(["", "", "", ""]);
        setCodeError(false);
        inputRefs.current[0]?.focus();
    }

    // ─────── Step 3 ───────
    function handleResetSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!canReset) return;
        // TODO: hook this up to backend
        setStep("success");
    }

    const timerLabel = `(0:${secondsLeft.toString().padStart(2, "0")})`;

    // ─────── Step 4: success — full-width, no image on mobile ───────
    if (step === "success") {
        return (
            <SuccessScreen />
        );
    }

    return (
        <ClientPortalLayout imageSide="right">
            {/* ─────── Step 1: Email ─────── */}
            {step === "email" && (
                <form onSubmit={handleEmailSubmit}>
                    <h1 className="font-display font-thin uppercase text-primary text-[40px] lg:text-[64px] leading-[100%] tracking-[0.03em] lg:whitespace-nowrap">
                        Forgot Password
                    </h1>

                    <p className="mt-6 lg:mt-8 font-body font-light text-primary text-[15px] leading-[24px] lg:text-[16px] lg:leading-[25px]">
                        Please enter the email associated with your Hephzibah Luxe Client Portal. we will send 4 digits code to your email.
                    </p>

                    {emailError && (
                        <div
                            className="mt-8 flex items-start gap-3 px-4 py-3 lg:py-4 border border-[#D50000]"
                            style={{ backgroundColor: "rgba(213, 0, 0, 0.4)" }}
                            role="alert"
                        >
                            <Image src="/icons/rederror.svg" alt="" width={22} height={22} className="flex-shrink-0 mt-0.5" />
                            <p className="font-sans font-medium text-[15px] lg:text-[16px] leading-[24px] lg:leading-[26px] tracking-[0.0125em] text-primary">
                                Sorry, no client profile associated with this email was found.
                            </p>
                        </div>
                    )}

                    <div className={`${emailError ? "mt-6" : "mt-10"} space-y-5`}>
                        <FloatingInput
                            label="Your Email Address"
                            type="email"
                            required
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>

                    <div className="mt-8 flex flex-col items-end gap-3">
                        <button
                            type="submit"
                            disabled={!email}
                            className={`group inline-flex items-center gap-6 px-10 py-4 transition-colors ${email
                                    ? "bg-secondary border border-secondary hover:bg-background hover:border-primary"
                                    : "bg-[#A8A8A8] border border-[#A8A8A8] cursor-not-allowed"
                                }`}
                        >
                            <span
                                className={`font-sans font-normal text-[14px] tracking-[0.15em] uppercase transition-colors ${email ? "text-background group-hover:text-primary" : "text-background"
                                    }`}
                            >
                                Send Code
                            </span>
                            <span className="relative inline-block w-[18px] h-[18px]">
                                <Image
                                    src="/icons/whitebuttonarrow.svg"
                                    alt=""
                                    fill
                                    className={`object-contain transition-opacity ${email ? "group-hover:opacity-0" : ""}`}
                                />
                                {email && (
                                    <Image
                                        src="/icons/buttonarrow.svg"
                                        alt=""
                                        fill
                                        className="object-contain opacity-0 transition-opacity group-hover:opacity-100"
                                    />
                                )}
                            </span>
                        </button>

                        <Link
                            href="/client-portal"
                            className="font-sans font-light text-[16px] leading-[100%] text-primary underline hover:opacity-70 transition-opacity"
                        >
                            Remember password? Login
                        </Link>
                    </div>
                </form>
            )}

            {/* ─────── Step 2: Code ─────── */}
            {step === "code" && (
                <form onSubmit={handleCodeSubmit}>
                    <h1 className="font-display font-thin uppercase text-primary text-[40px] lg:text-[64px] leading-[100%] tracking-[0.03em]">
                        Forgot Password
                    </h1>

                    <p className="mt-6 lg:mt-8 font-body font-light text-primary text-[15px] leading-[25px] lg:text-[16px]">
                        Please check your email. We have sent a code to{" "}
                        <span className="font-normal">{email}</span>
                    </p>

                    <div className="mt-10 flex justify-center gap-3 lg:gap-4">
                        {digits.map((digit, i) => (
                            <input
                                key={i}
                                ref={(el) => {
                                    inputRefs.current[i] = el;
                                }}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleDigitChange(i, e.target.value)}
                                onKeyDown={(e) => handleDigitKeyDown(i, e)}
                                onPaste={handleDigitPaste}
                                aria-label={`Digit ${i + 1}`}
                                className={`w-[64px] h-[64px] lg:w-[80px] lg:h-[80px] rounded-2xl text-center font-sans font-medium text-[28px] lg:text-[36px] outline-none transition-colors ${codeError
                                    ? "border border-[#D50000] bg-[rgba(213,0,0,0.25)] text-[#D50000]"
                                    : "border border-primary bg-background text-primary focus:border-secondary"
                                    }`}
                            />
                        ))}
                    </div>

                    {codeError && (
                        <div className="mt-4 flex items-center justify-center gap-2">
                            <Image src="/icons/errorcircle.svg" alt="" width={16} height={16} />
                            <p className="font-sans font-medium text-[14px] leading-[25px] text-[#D50000]">
                                The code you entered is incorrect. Please try again
                            </p>
                        </div>
                    )}

                    <p className="mt-4 text-center font-sans font-medium text-[15px] leading-[25px] text-primary">
                        I haven&apos;t received a code{" "}
                        {secondsLeft > 0 ? (
                            <span className="text-[#D50000]">{timerLabel}</span>
                        ) : (
                            <button
                                type="button"
                                onClick={handleResend}
                                className="underline hover:opacity-70 transition-opacity"
                            >
                                Resend
                            </button>
                        )}
                    </p>

                    <div className="mt-10 flex justify-end">
                        <button
                            type="submit"
                            disabled={!canVerify}
                            className={`group inline-flex items-center gap-6 px-10 py-4 transition-colors ${canVerify
                                    ? "bg-secondary border border-secondary hover:bg-background hover:border-primary"
                                    : "bg-[#A8A8A8] border border-[#A8A8A8] cursor-not-allowed"
                                }`}
                        >
                            <span
                                className={`font-sans font-normal text-[14px] tracking-[0.15em] uppercase transition-colors ${canVerify ? "text-background group-hover:text-primary" : "text-background"
                                    }`}
                            >
                                Verify
                            </span>
                            <span className="relative inline-block w-[18px] h-[18px]">
                                <Image
                                    src="/icons/whitebuttonarrow.svg"
                                    alt=""
                                    fill
                                    className={`object-contain transition-opacity ${canVerify ? "group-hover:opacity-0" : ""}`}
                                />
                                {canVerify && (
                                    <Image
                                        src="/icons/buttonarrow.svg"
                                        alt=""
                                        fill
                                        className="object-contain opacity-0 transition-opacity group-hover:opacity-100"
                                    />
                                )}
                            </span>
                        </button>
                    </div>
                </form>
            )}

            {/* ─────── Step 3: Reset ─────── */}
            {step === "reset" && (
                <form onSubmit={handleResetSubmit}>
                    <h1 className="font-display font-thin uppercase text-primary text-[40px] lg:text-[64px] leading-[100%] tracking-[0.03em]">
                        Reset Password
                    </h1>

                    <p className="mt-6 lg:mt-8 font-body font-light text-primary text-[15px] leading-[24px] lg:text-[16px] lg:leading-[25px]">
                        Please set your new password. Ensure it is something you will remember
                    </p>

                    <div className="mt-8 space-y-5">
                        <FloatingPasswordInput
                            label="Enter Your Password"
                            required
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <FloatingPasswordInput
                            label="Re-enter Your Password"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    <ul className="mt-5 space-y-2">
                        <Rule met={has8Chars} label="Use 8 or more characters" />
                        <Rule met={hasUppercase} label="One uppercase character" />
                        <Rule met={hasSpecialOrNumber} label="One special character or 1 number" />
                    </ul>

                    <div className="mt-8 flex justify-end">
                        <button
                            type="submit"
                            disabled={!canReset}
                            className={`group inline-flex items-center gap-6 px-10 py-4 transition-colors ${canReset
                                    ? "bg-secondary border border-secondary hover:bg-background hover:border-primary"
                                    : "bg-[#A8A8A8] border border-[#A8A8A8] cursor-not-allowed"
                                }`}
                        >
                            <span
                                className={`font-sans font-normal text-[14px] tracking-[0.15em] uppercase transition-colors ${canReset ? "text-background group-hover:text-primary" : "text-background"
                                    }`}
                            >
                                Reset Password
                            </span>
                            <span className="relative inline-block w-[18px] h-[18px]">
                                <Image
                                    src="/icons/whitebuttonarrow.svg"
                                    alt=""
                                    fill
                                    className={`object-contain transition-opacity ${canReset ? "group-hover:opacity-0" : ""}`}
                                />
                                {canReset && (
                                    <Image
                                        src="/icons/buttonarrow.svg"
                                        alt=""
                                        fill
                                        className="object-contain opacity-0 transition-opacity group-hover:opacity-100"
                                    />
                                )}
                            </span>
                        </button>
                    </div>
                </form>
            )}
        </ClientPortalLayout>
    );
}

// ─────── Success screen — full-width on mobile, side-by-side on desktop ───────
function SuccessScreen() {
    return (
        <section className="bg-background text-primary">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[calc(100vh-100px)]">
                {/* Content column — full width on mobile (image hidden) */}
                <div className="flex items-center justify-center px-4 lg:px-12 py-12 lg:py-16">
                    <div className="w-full max-w-[520px] flex flex-col items-center text-center">
                        <h1 className="font-display font-thin uppercase text-primary text-[40px] lg:text-[60px] leading-[100%] tracking-[0.03em]">
                            Password Reset
                        </h1>

                        <p className="mt-4 font-body font-light text-primary text-[15px] leading-[24px] lg:text-[16px] lg:leading-[25px]">
                            Password reset was successful. Please log in with new password.
                        </p>

                        <div className="mt-10 lg:mt-14">
                            <Image
                                src="/icons/reset.svg"
                                alt=""
                                width={280}
                                height={280}
                                className="w-[220px] h-[220px] lg:w-[300px] lg:h-[300px]"
                                priority
                            />
                        </div>

                        <Link
                            href="/client-portal"
                            className="group mt-10 lg:mt-14 inline-flex items-center gap-6 bg-secondary border border-secondary px-10 py-4 transition-colors hover:bg-background hover:border-primary"
                        >
                            <span className="font-sans font-normal text-[14px] tracking-[0.15em] uppercase text-background group-hover:text-primary transition-colors">
                                Back to Login
                            </span>
                            <span className="relative inline-block w-[18px] h-[18px]">
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

                {/* Image column — desktop only */}
                <div className="hidden lg:block relative w-full lg:h-full overflow-hidden">
                    <Image
                        src="/images/portfoliopage/portfoliotwo.jpg"
                        alt=""
                        fill
                        className="object-cover"
                        sizes="50vw"
                    />
                </div>
            </div>
        </section>
    );
}

function Rule({ met, label }: { met: boolean; label: string }) {
    return (
        <li className="flex items-center gap-3 font-sans font-light text-[14px] text-primary">
            <span
                className={`relative inline-block w-[18px] h-[18px] border border-[#778472] flex-shrink-0 ${met ? "bg-primary border-primary" : ""
                    }`}
            >
                {met && (
                    <svg
                        className="absolute inset-0 m-auto text-background"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                )}
            </span>
            {label}
        </li>
    );
}