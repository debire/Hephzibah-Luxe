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

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);

    const [digits, setDigits] = useState<string[]>(["", "", "", ""]);
    const [codeError, setCodeError] = useState(false);
    const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS);
    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const has8Chars = newPassword.length >= 8;
    const hasUppercase = /[A-Z]/.test(newPassword);
    const hasSpecialOrNumber = /[^A-Za-z]/.test(newPassword);
    const allRulesMet = has8Chars && hasUppercase && hasSpecialOrNumber;
    const passwordsMatch = newPassword.length > 0 && newPassword === confirmPassword;
    const canReset = allRulesMet && passwordsMatch;

    useEffect(() => {
        if (step !== "code") return;
        if (secondsLeft <= 0) return;
        const id = setInterval(() => setSecondsLeft((s) => Math.max(0, s - 1)), 1000);
        return () => clearInterval(id);
    }, [step, secondsLeft]);

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

    function handleResetSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!canReset) return;
        setStep("success");
    }

    const timerLabel = `(0:${secondsLeft.toString().padStart(2, "0")})`;

    if (step === "success") return <SuccessScreen />;

    // Reusable typography classes
    const headingCls = "font-display font-thin uppercase tracking-[0.03em] leading-[100%] text-primary text-[40px] sm:text-[44px] md:text-[52px] lg:text-[52px] xl:text-[60px] 2xl:text-[68px] lg:whitespace-nowrap";
    const bodyCls = "font-body font-light text-primary text-[15px] leading-[24px] sm:text-[16px] sm:leading-[26px] md:text-[18px] md:leading-[28px] lg:text-[16px] lg:leading-[25px] xl:text-[18px] xl:leading-[28px] 2xl:text-[20px] 2xl:leading-[30px]";
    const buttonCls = "group inline-flex items-center gap-6 px-10 py-4 md:px-11 md:py-[18px] xl:px-12 xl:py-5 transition-colors";
    const buttonTextCls = "font-sans font-normal tracking-[0.15em] uppercase transition-colors text-[14px] sm:text-[15px] md:text-[16px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px]";
    const buttonArrowWrapperCls = "relative inline-block w-[18px] h-[18px] md:w-[20px] md:h-[20px] xl:w-[22px] xl:h-[22px] 2xl:w-[24px] 2xl:h-[24px]";
    const footerLinkCls = "font-sans font-light leading-[100%] text-primary underline underline-offset-2 hover:opacity-70 transition-opacity text-[16px] sm:text-[17px] md:text-[18px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]";

    return (
        <ClientPortalLayout imageSide="right">
            {/* Step 1 — Email */}
            {step === "email" && (
                <form onSubmit={handleEmailSubmit}>
                    <h1 className={headingCls}>Forgot Password</h1>

                    <p className={`mt-6 sm:mt-7 md:mt-8 lg:mt-8 ${bodyCls}`}>
                        Please enter the email associated with your Hephzibah Luxe Client Portal. we will send 4 digits code to your email.
                    </p>

                    {emailError && (
                        <div
                            className="mt-8 flex items-start gap-3 px-4 py-3 sm:py-3.5 md:py-4 lg:py-4 border border-[#D50000]"
                            style={{ backgroundColor: "rgba(213, 0, 0, 0.4)" }}
                            role="alert"
                        >
                            <Image
                                src="/icons/rederror.svg"
                                alt=""
                                width={24}
                                height={24}
                                className="w-[22px] h-[22px] md:w-[24px] md:h-[24px] flex-shrink-0 mt-0.5"
                            />
                            <p className="font-sans font-medium tracking-[0.0125em] text-primary text-[15px] leading-[24px] sm:text-[16px] sm:leading-[26px] md:text-[17px] md:leading-[28px] lg:text-[12px] lg:leading-[26px] xl:text-[15px] xl:leading-[28px] 2xl:text-[18px] 2xl:leading-[30px]">
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
                            className={`${buttonCls} ${email
                                ? "bg-secondary border border-secondary hover:bg-background hover:border-primary"
                                : "bg-[#A8A8A8] border border-[#A8A8A8] cursor-not-allowed"
                                }`}
                        >
                            <span className={`${buttonTextCls} ${email ? "text-background group-hover:text-primary" : "text-background"}`}>
                                Send Code
                            </span>
                            <span className={buttonArrowWrapperCls}>
                                <Image src="/icons/whitebuttonarrow.svg" alt="" fill className={`object-contain transition-opacity ${email ? "group-hover:opacity-0" : ""}`} />
                                {email && <Image src="/icons/buttonarrow.svg" alt="" fill className="object-contain opacity-0 transition-opacity group-hover:opacity-100" />}
                            </span>
                        </button>

                        <Link href="/client-portal" className={footerLinkCls}>
                            Remember password? Login
                        </Link>
                    </div>
                </form>
            )}

            {/* Step 2 — Code */}
            {step === "code" && (
                <form onSubmit={handleCodeSubmit}>
                    <h1 className={headingCls}>Forgot Password</h1>

                    <p className={`mt-6 sm:mt-7 md:mt-8 lg:mt-8 ${bodyCls}`}>
                        Please check your email. We have sent a code to{" "}
                        <span className="font-normal">{email}</span>
                    </p>

                    <div className="mt-10 sm:mt-11 md:mt-12 flex justify-center gap-3 sm:gap-3.5 md:gap-4 lg:gap-4 xl:gap-5">
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
                                className={`rounded-2xl text-center font-sans font-medium outline-none transition-colors w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] md:w-[72px] md:h-[72px] lg:w-[80px] lg:h-[80px] xl:w-[88px] xl:h-[88px] 2xl:w-[96px] 2xl:h-[96px] text-[26px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px] ${codeError
                                    ? "border border-[#D50000] bg-[rgba(213,0,0,0.25)] text-[#D50000]"
                                    : "border border-primary bg-background text-primary focus:border-secondary"
                                    }`}
                            />
                        ))}
                    </div>

                    {codeError && (
                        <div className="mt-4 flex items-center justify-center gap-2">
                            <Image
                                src="/icons/errorcircle.svg"
                                alt=""
                                width={20}
                                height={20}
                                className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] xl:w-[20px] xl:h-[20px]"
                            />
                            <p className="font-sans font-medium leading-[25px] text-[#D50000] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]">
                                The code you entered is incorrect. Please try again
                            </p>
                        </div>
                    )}

                    <p className="mt-4 text-center font-sans font-medium leading-[25px] text-primary text-[15px] sm:text-[16px] md:text-[17px] lg:text-[15px] xl:text-[17px] 2xl:text-[18px]">
                        I haven&apos;t received a code{" "}
                        {secondsLeft > 0 ? (
                            <span className="text-[#D50000]">{timerLabel}</span>
                        ) : (
                            <button type="button" onClick={handleResend} className="underline hover:opacity-70 transition-opacity">
                                Resend
                            </button>
                        )}
                    </p>

                    <div className="mt-10 sm:mt-11 md:mt-12 flex justify-end">
                        <button
                            type="submit"
                            disabled={!canVerify}
                            className={`${buttonCls} ${canVerify
                                ? "bg-secondary border border-secondary hover:bg-background hover:border-primary"
                                : "bg-[#A8A8A8] border border-[#A8A8A8] cursor-not-allowed"
                                }`}
                        >
                            <span className={`${buttonTextCls} ${canVerify ? "text-background group-hover:text-primary" : "text-background"}`}>
                                Verify
                            </span>
                            <span className={buttonArrowWrapperCls}>
                                <Image src="/icons/whitebuttonarrow.svg" alt="" fill className={`object-contain transition-opacity ${canVerify ? "group-hover:opacity-0" : ""}`} />
                                {canVerify && <Image src="/icons/buttonarrow.svg" alt="" fill className="object-contain opacity-0 transition-opacity group-hover:opacity-100" />}
                            </span>
                        </button>
                    </div>
                </form>
            )}

            {/* Step 3 — Reset */}
            {step === "reset" && (
                <form onSubmit={handleResetSubmit}>
                    <h1 className={headingCls}>Reset Password</h1>

                    <p className={`mt-6 sm:mt-7 md:mt-8 lg:mt-8 ${bodyCls}`}>
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

                    <ul className="mt-5 space-y-2 sm:space-y-2.5 md:space-y-3">
                        <Rule met={has8Chars} label="Use 8 or more characters" />
                        <Rule met={hasUppercase} label="One uppercase character" />
                        <Rule met={hasSpecialOrNumber} label="One special character or 1 number" />
                    </ul>

                    <div className="mt-8 flex justify-end">
                        <button
                            type="submit"
                            disabled={!canReset}
                            className={`${buttonCls} ${canReset
                                ? "bg-secondary border border-secondary hover:bg-background hover:border-primary"
                                : "bg-[#A8A8A8] border border-[#A8A8A8] cursor-not-allowed"
                                }`}
                        >
                            <span className={`${buttonTextCls} ${canReset ? "text-background group-hover:text-primary" : "text-background"}`}>
                                Reset Password
                            </span>
                            <span className={buttonArrowWrapperCls}>
                                <Image src="/icons/whitebuttonarrow.svg" alt="" fill className={`object-contain transition-opacity ${canReset ? "group-hover:opacity-0" : ""}`} />
                                {canReset && <Image src="/icons/buttonarrow.svg" alt="" fill className="object-contain opacity-0 transition-opacity group-hover:opacity-100" />}
                            </span>
                        </button>
                    </div>
                </form>
            )}
        </ClientPortalLayout>
    );
}

// Success — full-width, no image on mobile/landscape/iPad
function SuccessScreen() {
    return (
        <section className="bg-background text-primary">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[calc(100vh-100px)]">
                {/* Content column */}
                <div className="flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 py-12 sm:py-14 md:py-16 lg:py-16 xl:py-20 2xl:py-24">
                    <div className="w-full max-w-[520px] md:max-w-[640px] lg:max-w-[520px] xl:max-w-[600px] 2xl:max-w-[680px] flex flex-col items-center text-center">
                        <h1 className="font-display font-thin uppercase tracking-[0.03em] leading-[100%] text-primary text-[40px] sm:text-[44px] md:text-[52px] lg:text-[52px] xl:text-[60px] 2xl:text-[68px] lg:whitespace-nowrap">
                            Password Reset
                        </h1>

                        <p className="mt-4 sm:mt-5 md:mt-6 font-body font-light text-primary text-[15px] leading-[24px] sm:text-[16px] sm:leading-[26px] md:text-[18px] md:leading-[28px] lg:text-[16px] lg:leading-[25px] xl:text-[18px] xl:leading-[28px] 2xl:text-[20px] 2xl:leading-[30px]">
                            Password reset was successful. Please log in with new password.
                        </p>

                        <div className="mt-10 sm:mt-12 md:mt-14 lg:mt-14 xl:mt-16">
                            <Image
                                src="/icons/reset.svg"
                                alt=""
                                width={360}
                                height={360}
                                className="w-[220px] h-[220px] sm:w-[250px] sm:h-[250px] md:w-[280px] md:h-[280px] lg:w-[300px] lg:h-[300px] xl:w-[340px] xl:h-[340px] 2xl:w-[380px] 2xl:h-[380px]"
                                priority
                            />
                        </div>

                        <Link
                            href="/client-portal"
                            className="group mt-10 sm:mt-12 md:mt-14 lg:mt-14 xl:mt-16 inline-flex items-center gap-6 bg-secondary border border-secondary px-10 py-4 md:px-11 md:py-[18px] xl:px-12 xl:py-5 transition-colors hover:bg-background hover:border-primary"
                        >
                            <span className="font-sans font-normal tracking-[0.15em] uppercase text-background group-hover:text-primary transition-colors text-[14px] sm:text-[15px] md:text-[16px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px]">
                                Back to Login
                            </span>
                            <span className="relative inline-block w-[18px] h-[18px] md:w-[20px] md:h-[20px] xl:w-[22px] xl:h-[22px] 2xl:w-[24px] 2xl:h-[24px]">
                                <Image src="/icons/whitebuttonarrow.svg" alt="" fill className="object-contain transition-opacity group-hover:opacity-0" />
                                <Image src="/icons/buttonarrow.svg" alt="" fill className="object-contain opacity-0 transition-opacity group-hover:opacity-100" />
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Image column — laptop+ only */}
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
        <li className="flex items-center gap-3 font-sans font-light text-primary text-[14px] sm:text-[15px] md:text-[16px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]">
            <span
                className={`relative inline-block flex-shrink-0 border border-[#778472] w-[18px] h-[18px] md:w-[20px] md:h-[20px] xl:w-[20px] xl:h-[20px] 2xl:w-[22px] 2xl:h-[22px] ${met ? "bg-primary border-primary" : ""
                    }`}
            >
                {met && (
                    <svg
                        className="absolute inset-0 m-auto text-background w-[12px] h-[12px] md:w-[14px] md:h-[14px] 2xl:w-[15px] 2xl:h-[15px]"
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