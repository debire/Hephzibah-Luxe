"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import InquiryHero from "@/components/sections/inquiry/InquiryHero";
import InquiryForm from "@/components/sections/inquiry/InquiryForm";
import Instagram from "@/components/sections/Instagram";

export default function InquiryPageClient() {
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  function handleSubmitted(firstName: string, email: string) {
    setSubmittedName(firstName);
    setSubmittedEmail(email);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    return (
      <section className="bg-background text-primary min-h-screen flex items-center">
        <div className="max-w-2xl mx-auto text-center px-6 py-16 lg:py-24">
          <div className="flex justify-center">
            <Image
              src="/icons/success.svg"
              alt=""
              width={446}
              height={325}
              className="w-full max-w-[446px] h-auto"
              priority
            />
          </div>

          <h2 className="mt-6 font-display font-thin text-primary text-[30px] leading-[24px] text-center">
            Hi <span className="italic">{submittedName}</span>, We have received your inquiry!
          </h2>

          <p className="mt-8 font-sans font-light text-primary text-[16px] leading-[25px] text-center max-w-[640px] mx-auto">
            Thank you for considering Hephzibah Luxe. Our team is reviewing your details and will reach out within{" "}
            <span className="font-bold">2 business days</span> to continue the conversation. We look forward to learning more about your event and exploring how we can support your vision.
          </p>

          <p className="mt-6 font-sans font-light text-primary text-[16px] leading-[25px] text-center">
            A confirmation email has been sent to your email - {submittedEmail}.
          </p>

          <div className="mt-10 flex justify-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center bg-secondary text-background px-10 py-4 font-sans font-light text-[14px] tracking-[0.15em] uppercase hover:opacity-90 transition-opacity"
            >
              View Our Past Projects
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <InquiryHero />
      <InquiryForm onSubmitted={handleSubmitted} />
      <Instagram />
    </>
  );
}