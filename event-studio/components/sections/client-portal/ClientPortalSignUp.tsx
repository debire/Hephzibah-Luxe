"use client";

import { useState } from "react";
import Image from "next/image";
import FloatingInput from "@/components/ui/FloatingInput";
import FloatingPasswordInput from "@/components/ui/FloatingPasswordInput";
import ClientPortalLayout from "./ClientPortalLayout";

export default function ClientPortalSignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const has8Chars = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasSpecialOrNumber = /[^A-Za-z]/.test(password);

    const allRulesMet = has8Chars && hasUppercase && hasSpecialOrNumber;
    const passwordsMatch = password.length > 0 && password === confirmPassword;
    const canSubmit = email && allRulesMet && passwordsMatch;

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!canSubmit) return;
        // TODO: hook this up to backend
    }

    return (
        <ClientPortalLayout>
            <form onSubmit={handleSubmit}>
                <h1 className="text-left font-display font-thin uppercase text-primary text-[40px] lg:text-[64px] leading-[100%] tracking-[0.03em]">
                    Client Portal
                </h1>

                <p className="mt-8 font-body font-light text-primary text-[15px] leading-[24px] lg:text-[16px] lg:leading-[25px]">
                    Welcome to your Hephzibah Luxe Client Portal. This curated space gives you effortless access to your planning documents, timelines, proposals, and shared updates — ensuring a beautifully coordinated journey from start to finish.
                </p>

                <p className="mt-4 font-body font-normal italic text-primary text-[15px] leading-[24px] lg:text-[16px] lg:leading-[25px]">
                    <span className="font-medium not-italic">Please note:</span>{" "}
                    <span className="italic">New accounts cannot be created on this page. After your booking is confirmed, our team will create your portal account and email you instructions to set your password.</span>
                </p>
                <div className="mt-8 space-y-5">
                    <FloatingInput
                        label="Your Email Address"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FloatingPasswordInput
                        label="Enter Your Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                        disabled={!canSubmit}
                        className={`group inline-flex items-center gap-6 px-10 py-4 transition-colors ${canSubmit
                                ? "bg-secondary border border-secondary hover:bg-background hover:border-primary"
                                : "bg-[#A8A8A8] border border-[#A8A8A8] cursor-not-allowed"
                            }`}
                    >
                        <span
                            className={`font-sans font-normal text-[14px] tracking-[0.15em] uppercase transition-colors ${canSubmit ? "text-background group-hover:text-primary" : "text-background"
                                }`}
                        >
                            Sign Up
                        </span>
                        <span className="relative inline-block w-[18px] h-[18px]">
                            <Image
                                src="/icons/whitebuttonarrow.svg"
                                alt=""
                                fill
                                className={`object-contain transition-opacity ${canSubmit ? "group-hover:opacity-0" : ""}`}
                            />
                            {canSubmit && (
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
        </ClientPortalLayout>
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