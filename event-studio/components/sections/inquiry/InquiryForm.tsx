"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FloatingInput from "@/components/ui/FloatingInput";
import FloatingSelect from "@/components/ui/FloatingSelect";
import FloatingTextarea from "@/components/ui/FloatingTextarea";
import CountryPicker from "@/components/ui/CountryPicker";
import DateRangePicker from "@/components/ui/DateRangePicker";

interface InquiryFormProps {
  onSubmitted: (firstName: string, email: string) => void;
}

export default function InquiryForm({ onSubmitted }: InquiryFormProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [countryCode, setCountryCode] = useState("NG");
  const [, setDialCode] = useState("+234");

  const [eventType, setEventType] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [details, setDetails] = useState("");

  const allFilled =
    firstName &&
    lastName &&
    email &&
    phone &&
    contactMethod &&
    eventType &&
    startDate &&
    location &&
    budget &&
    details;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!allFilled) return;
    onSubmitted(firstName, email);
  }

  return (
    <section className="bg-background text-primary">
      <div className="px-4 sm:px-6 md:px-7 lg:px-8 xl:px-12 2xl:px-16 py-8 sm:py-10 md:py-10 lg:py-10 xl:py-12 2xl:py-32">
        <form onSubmit={handleSubmit} className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1500px] mx-auto">
          <h2 className="font-display font-thin italic tracking-[0.03em] text-primary text-[48px] leading-[100%] sm:text-[60px] md:text-[76px] lg:text-[96px] xl:text-[112px] 2xl:text-[128px]">
            To Hephzibah Luxe:
          </h2>

          <p className="mt-8 sm:mt-9 md:mt-10 font-body font-light text-primary text-[15px] leading-[24px] sm:text-[16px] sm:leading-[26px] md:text-[18px] md:leading-[28px] lg:text-[16px] lg:leading-[25px] xl:text-[18px] xl:leading-[28px] 2xl:text-[20px] 2xl:leading-[30px] max-w-[1100px] xl:max-w-[1200px] 2xl:max-w-[1320px]">
            We value each inquiry deeply, and we&apos;re excited to explore how we can bring grace, beauty, and excellence to your event. From weddings to milestone birthdays to elevated corporate gatherings, we design experiences that are intentional, refined, and unforgettable. Kindly share your details below, and our team will connect with you within 1-2 business days.
          </p>

          <p className="mt-4 font-body font-light text-primary text-[15px] leading-[24px] sm:text-[16px] sm:leading-[26px] md:text-[18px] md:leading-[28px] lg:text-[16px] lg:leading-[25px] xl:text-[18px] xl:leading-[28px] 2xl:text-[20px] 2xl:leading-[30px]">
            Have a quick question? View our{" "}
            <Link href="#faqs" className="font-semibold underline">
              FAQs
            </Link>{" "}
            below before submitting your inquiry.
          </p>

          {/* Section: Tell Us about Yourself */}
          <div className="mt-16 sm:mt-16 md:mt-20 lg:mt-20 xl:mt-24">
            <h3 className="font-body font-light italic tracking-[-0.01em] text-primary text-[22px] leading-[100%] sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] pb-4 lg:pb-5 xl:pb-6 border-b border-primary/30">
              Tell Us about Yourself
            </h3>

            <p className="mt-6 sm:mt-7 md:mt-8 font-body font-light text-primary text-[14px] leading-[22px] sm:text-[15px] sm:leading-[24px] md:text-[18px] md:leading-[28px] lg:text-[16px] lg:leading-[25px] xl:text-[18px] xl:leading-[28px] 2xl:text-[20px] 2xl:leading-[30px] max-w-[900px] xl:max-w-[1040px] 2xl:max-w-[1160px]">
              Let&apos;s begin with the essentials — how we can reach you. Your contact details ensure we reach out promptly and continue this conversation with the care and attention your event deserves.
            </p>

            <div className="mt-8 sm:mt-9 md:mt-10 grid grid-cols-1 gap-5">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <FloatingInput
                  label="First Name"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <FloatingInput
                  label="Last Name"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <FloatingInput
                label="Your Email Address"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="flex gap-4">
                <CountryPicker
                  value={countryCode}
                  onChange={(code, dial) => {
                    setCountryCode(code);
                    setDialCode(dial);
                  }}
                />
                <div className="flex-1">
                  <FloatingInput
                    label="Your Phone Number"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <FloatingSelect
                label="Your Preferred method of contact"
                required
                options={["Email Address", "Phone Number"]}
                value={contactMethod}
                onChange={setContactMethod}
              />
            </div>
          </div>

          {/* Section: Tell Us about Your Event */}
          <div className="mt-16 sm:mt-16 md:mt-20 lg:mt-20 xl:mt-24">
            <h3 className="font-body font-light italic tracking-[-0.01em] text-primary text-[22px] leading-[100%] sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] pb-4 lg:pb-5 xl:pb-6 border-b border-primary/30">
              Tell Us about Your Event
            </h3>

            <p className="mt-6 sm:mt-7 md:mt-8 font-body font-light text-primary text-[14px] leading-[22px] sm:text-[15px] sm:leading-[24px] md:text-[18px] md:leading-[28px] lg:text-[16px] lg:leading-[25px] xl:text-[18px] xl:leading-[28px] 2xl:text-[20px] 2xl:leading-[30px] max-w-[900px] xl:max-w-[1040px] 2xl:max-w-[1160px]">
              Now, tell us a little about your celebration — whether it&apos;s a wedding, birthday, or corporate event. These details help us understand your vision and begin shaping an experience that feels intentional, elegant, and uniquely yours.
            </p>

            <div className="mt-8 sm:mt-9 md:mt-10 grid grid-cols-1 gap-5">
              <FloatingSelect
                label="What type of event are you planning?"
                required
                options={[
                  "Wedding",
                  "Birthday",
                  "Corporate Event",
                  "Other Social Event (e.g., Proposals, Naming Ceremonies, Private Dinners, etc.)",
                ]}
                value={eventType}
                onChange={setEventType}
              />
              <DateRangePicker
                label="What are your preferred date(s)?"
                required
                startDate={startDate}
                endDate={endDate}
                onStartDateChange={setStartDate}
                onEndDateChange={setEndDate}
              />
              <FloatingInput
                label="What is your desired Location (State, Country)?"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <FloatingInput
                label="What is your Budget Range?"
                required
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />
              <FloatingTextarea
                label="Share some details with us about your wedding/event/project or add any additional comments you might find helpful"
                required
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="e.g. my event date is approaching quickly, and I'm beginning to feel the pressure. I'm looking for a team who can step in and guide the entire process."
              />
            </div>

            {/* Bottom row */}
            <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <p className="font-sans font-light tracking-[0.05em] text-primary text-[12px] leading-[20px] sm:text-[13px] sm:leading-[22px] md:text-[14px] md:leading-[24px] lg:text-[14px] lg:leading-[25px] xl:text-[15px] xl:leading-[26px] 2xl:text-[16px] 2xl:leading-[28px] max-w-[420px] xl:max-w-[480px] 2xl:max-w-[540px]">
                This form is protected by reCAPTCHA and the Google{" "}
                <Link href="#" className="underline">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="#" className="underline">
                  Terms of Service
                </Link>{" "}
                apply.
              </p>

              <button
                type="submit"
                disabled={!allFilled}
                className={`group flex items-center justify-between gap-6 px-8 py-4 xl:px-10 xl:py-5 2xl:px-12 2xl:py-6 transition-colors ${
                  allFilled ? "bg-secondary hover:opacity-90" : "bg-[#778472]"
                }`}
              >
                <span className="font-sans font-light tracking-[0.15em] uppercase text-background text-[16px] sm:text-[17px] md:text-[18px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
                  Send Message
                </span>
                <Image
                  src="/icons/whitebuttonarrow.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="w-[20px] h-[20px] xl:w-[22px] xl:h-[22px] 2xl:w-[24px] 2xl:h-[24px] transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}