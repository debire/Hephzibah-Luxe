"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FloatingInput from "@/components/ui/FloatingInput";
import FloatingPasswordInput from "@/components/ui/FloatingPasswordInput";
import ClientPortalLayout from "./ClientPortalLayout";

export default function ClientPortalLogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showError, setShowError] = useState(false);

    const canSubmit = email.length > 0 && password.length > 0;

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!canSubmit) return;
        // TODO: replace with real API check. For now, all attempts fail.
        setShowError(true);
    }

    // Hide the error as soon as the user edits either field
    function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value);
        if (showError) setShowError(false);
    }

    function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value);
        if (showError) setShowError(false);
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
                {/* Error banner */}
                {showError && (
                    <div
                        className="mt-8 flex items-start gap-3 px-4 py-3 lg:py-4 border border-[#D50000]"
                        style={{ backgroundColor: "rgba(213, 0, 0, 0.4)" }}
                        role="alert"
                    >
                        <Image
                            src="/icons/rederror.svg"
                            alt=""
                            width={22}
                            height={22}
                            className="flex-shrink-0 mt-0.5"
                        />
                        <p className="font-sans font-medium text-[15px] lg:text-[16px] leading-[24px] lg:leading-[26px] tracking-[0.0125em] text-primary">
                            Client not found. Please{" "}
                            <Link href="/inquiry" className="underline">
                                Send an Inquiry
                            </Link>{" "}
                            to become a client{" "}
                            <Image
                                src="/icons/send.svg"
                                alt=""
                                width={14}
                                height={14}
                                className="inline-block align-baseline translate-y-[1px]"
                            />
                        </p>
                    </div>
                )}

                <div className={`${showError ? "mt-6" : "mt-8"} space-y-5`}>
                    <FloatingInput
                        label="Your Email Address"
                        type="email"
                        required
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <FloatingPasswordInput
                        label="Enter Your Password"
                        required
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>

                <div className="mt-8 flex flex-col items-end gap-3">
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
                            Log In
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

                    <Link
                        href="/client-portal/forgot-password"
                        className="font-sans font-light text-[16px] leading-[100%] text-primary underline hover:opacity-70 transition-opacity"
                    >
                        Forgot Password?
                    </Link>
                </div>
            </form>
        </ClientPortalLayout>
    );
}