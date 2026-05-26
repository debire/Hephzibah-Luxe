// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import FloatingInput from "@/components/ui/FloatingInput";
// import FloatingSelect from "@/components/ui/FloatingSelect";
// import FloatingTextarea from "@/components/ui/FloatingTextarea";
// import CountryPicker from "@/components/ui/CountryPicker";
// import DateRangePicker from "@/components/ui/DateRangePicker";

// export default function InquiryForm() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [contactMethod, setContactMethod] = useState("");
//   const [countryCode, setCountryCode] = useState("NG");
//   const [, setDialCode] = useState("+234");

//   const [eventType, setEventType] = useState("");
//   const [startDate, setStartDate] = useState<Date | null>(null);
//   const [endDate, setEndDate] = useState<Date | null>(null);
//   const [location, setLocation] = useState("");
//   const [budget, setBudget] = useState("");
//   const [details, setDetails] = useState("");

//   const [submitted, setSubmitted] = useState(false);

//   const allFilled =
//     firstName && lastName && email && phone && contactMethod &&
//     eventType && startDate && location && budget && details;

//   function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     if (!allFilled) return;
//     // TODO: hook this up to your backend / email service
//     setSubmitted(true);
//   }

//   return (
//     <section className="bg-background text-primary">
//       <div className="px-4 lg:px-8 py-16 lg:py-24">
//         {submitted ? (
//           // ───────────── Success state ─────────────
//           <div className="max-w-2xl mx-auto text-center">
//             <div className="flex justify-center">
//               <Image
//                 src="/icons/success.svg"
//                 alt=""
//                 width={520}
//                 height={400}
//                 className="w-full max-w-[520px] h-auto"
//                 priority
//               />
//             </div>

//             <h2 className="mt-6 font-display font-thin text-primary text-[30px] leading-[24px] text-center">
//               Hi <span className="italic">{firstName}</span>, We have received your inquiry!
//             </h2>

//             <p className="mt-8 font-sans font-light text-primary text-[16px] leading-[25px] text-center max-w-[640px] mx-auto">
//               Thank you for considering Hephzibah Luxe. Our team is reviewing your details and will reach out within{" "}
//               <span className="font-bold">2 business days</span> to continue the conversation. We look forward to learning more about your event and exploring how we can support your vision.
//             </p>

//             <p className="mt-6 font-sans font-light text-primary text-[16px] leading-[25px] text-center">
//               A confirmation email has been sent to your email - {email}.
//             </p>

//             <div className="mt-10 flex justify-center">
//               <Link
//                 href="/portfolio"
//                 className="inline-flex items-center justify-center bg-[#092D35] text-white px-10 py-4 font-sans font-light text-[14px] tracking-[0.15em] uppercase hover:opacity-90 transition-opacity"
//               >
//                 View Our Past Projects
//               </Link>
//             </div>
//           </div>
//         ) : (
//           // ───────────── Form state ─────────────
//           <form onSubmit={handleSubmit} className="max-w-6xl mx-auto">
//             <h2 className="font-display font-thin italic text-primary text-[48px] lg:text-[96px] leading-[100%] tracking-[0.03em]">
//               To Hephzibah Luxe:
//             </h2>

//             <p className="mt-8 font-body font-light text-primary text-[15px] leading-[24px] lg:text-[16px] lg:leading-[25px] max-w-[1100px]">
//               We value each inquiry deeply, and we&apos;re excited to explore how we can bring grace, beauty, and excellence to your event. From weddings to milestone birthdays to elevated corporate gatherings, we design experiences that are intentional, refined, and unforgettable. Kindly share your details below, and our team will connect with you within 1-2 business days.
//             </p>

//             <p className="mt-4 font-body font-light text-primary text-[15px] leading-[24px] lg:text-[16px] lg:leading-[25px]">
//               Have a quick question? View our{" "}
//               <Link href="#faqs" className="font-semibold underline">
//                 FAQs
//               </Link>{" "}
//               below before submitting your inquiry.
//             </p>

//             {/* Section: Tell Us about Yourself */}
//             <div className="mt-16 lg:mt-20">
//               <h3 className="font-body font-light italic text-primary text-[22px] lg:text-[28px] leading-[100%] tracking-[-0.01em] pb-4 border-b border-primary/30">
//                 Tell Us about Yourself
//               </h3>

//               <p className="mt-6 font-body font-light text-primary text-[14px] leading-[22px] lg:text-[16px] lg:leading-[25px] max-w-[900px]">
//                 Let&apos;s begin with the essentials — how we can reach you. Your contact details ensure we reach out promptly and continue this conversation with the care and attention your event deserves.
//               </p>

//               <div className="mt-8 grid grid-cols-1 gap-5">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
//                   <FloatingInput label="First Name" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//                   <FloatingInput label="Last Name" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
//                 </div>
//                 <FloatingInput label="Your Email Address" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
//                 <div className="flex gap-4">
//                   <CountryPicker value={countryCode} onChange={(code, dial) => { setCountryCode(code); setDialCode(dial); }} />
//                   <div className="flex-1">
//                     <FloatingInput label="Your Phone Number" type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} />
//                   </div>
//                 </div>
//                 <FloatingSelect
//                   label="Your Preferred method of contact"
//                   required
//                   options={["Email Address", "Phone Number"]}
//                   value={contactMethod}
//                   onChange={setContactMethod}
//                 />
//               </div>
//             </div>

//             {/* Section: Tell Us about Your Event */}
//             <div className="mt-16 lg:mt-20">
//               <h3 className="font-body font-light italic text-primary text-[22px] lg:text-[28px] leading-[100%] tracking-[-0.01em] pb-4 border-b border-primary/30">
//                 Tell Us about Your Event
//               </h3>

//               <p className="mt-6 font-body font-light text-primary text-[14px] leading-[22px] lg:text-[16px] lg:leading-[25px] max-w-[900px]">
//                 Now, tell us a little about your celebration — whether it&apos;s a wedding, birthday, or corporate event. These details help us understand your vision and begin shaping an experience that feels intentional, elegant, and uniquely yours.
//               </p>

//               <div className="mt-8 grid grid-cols-1 gap-5">
//                 <FloatingSelect
//                   label="What type of event are you planning?"
//                   required
//                   options={["Wedding", "Birthday", "Corporate Event", "Other Social Event (e.g., Proposals, Naming Ceremonies, Private Dinners, etc.)"]}
//                   value={eventType}
//                   onChange={setEventType}
//                 />
//                 <DateRangePicker
//                   label="What are your preferred date(s)?"
//                   required
//                   startDate={startDate}
//                   endDate={endDate}
//                   onStartDateChange={setStartDate}
//                   onEndDateChange={setEndDate}
//                 />
//                 <FloatingInput
//                   label="What is your desired Location (State, Country)?"
//                   required
//                   value={location}
//                   onChange={(e) => setLocation(e.target.value)}
//                 />
//                 <FloatingInput
//                   label="What is your Budget Range?"
//                   required
//                   value={budget}
//                   onChange={(e) => setBudget(e.target.value)}
//                 />
//                 <FloatingTextarea
//                   label="Share some details with us about your wedding/event/project or add any additional comments you might find helpful"
//                   required
//                   value={details}
//                   onChange={(e) => setDetails(e.target.value)}
//                   placeholder="e.g. my event date is approaching quickly, and I'm beginning to feel the pressure. I'm looking for a team who can step in and guide the entire process."
//                 />
//               </div>

//               {/* Bottom row: reCAPTCHA notice + submit */}
//               <div className="mt-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
//                 <p className="font-sans font-light text-[12px] lg:text-[14px] leading-[20px] lg:leading-[25px] tracking-[0.05em] text-primary max-w-[420px]">
//                   This form is protected by reCAPTCHA and the Google{" "}
//                   <Link href="#" className="underline">Privacy Policy</Link>{" "}and{" "}
//                   <Link href="#" className="underline">Terms of Service</Link>{" "}apply.
//                 </p>

//                 <button
//                   type="submit"
//                   disabled={!allFilled}
//                   className={`group flex items-center justify-between gap-6 px-8 py-4 transition-colors ${
//                     allFilled ? "bg-secondary hover:opacity-90" : "bg-[#778472]"
//                   }`}
//                 >
//                   <span className="font-sans font-light text-[16px] tracking-[0.15em] uppercase text-background">
//                     Send Message
//                   </span>
//                   <Image
//                     src="/icons/whitebuttonarrow.svg"
//                     alt=""
//                     width={20}
//                     height={20}
//                     className="transition-transform group-hover:translate-x-1"
//                   />
//                 </button>
//               </div>
//             </div>
//           </form>
//         )}
//       </div>
//     </section>
//   );
// }


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
    // TODO: hook this up to your backend / email service
    onSubmitted(firstName, email);
  }

  return (
    <section className="bg-background text-primary">
      <div className="px-4 lg:px-8 py-16 lg:py-24">
        <form onSubmit={handleSubmit} className="max-w-6xl mx-auto">
          <h2 className="font-display font-thin italic text-primary text-[48px] lg:text-[96px] leading-[100%] tracking-[0.03em]">
            To Hephzibah Luxe:
          </h2>

          <p className="mt-8 font-body font-light text-primary text-[15px] leading-[24px] lg:text-[16px] lg:leading-[25px] max-w-[1100px]">
            We value each inquiry deeply, and we&apos;re excited to explore how we can bring grace, beauty, and excellence to your event. From weddings to milestone birthdays to elevated corporate gatherings, we design experiences that are intentional, refined, and unforgettable. Kindly share your details below, and our team will connect with you within 1-2 business days.
          </p>

          <p className="mt-4 font-body font-light text-primary text-[15px] leading-[24px] lg:text-[16px] lg:leading-[25px]">
            Have a quick question? View our{" "}
            <Link href="#faqs" className="font-semibold underline">
              FAQs
            </Link>{" "}
            below before submitting your inquiry.
          </p>

          {/* Section: Tell Us about Yourself */}
          <div className="mt-16 lg:mt-20">
            <h3 className="font-body font-light italic text-primary text-[22px] lg:text-[28px] leading-[100%] tracking-[-0.01em] pb-4 border-b border-primary/30">
              Tell Us about Yourself
            </h3>

            <p className="mt-6 font-body font-light text-primary text-[14px] leading-[22px] lg:text-[16px] lg:leading-[25px] max-w-[900px]">
              Let&apos;s begin with the essentials — how we can reach you. Your contact details ensure we reach out promptly and continue this conversation with the care and attention your event deserves.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-5">
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
          <div className="mt-16 lg:mt-20">
            <h3 className="font-body font-light italic text-primary text-[22px] lg:text-[28px] leading-[100%] tracking-[-0.01em] pb-4 border-b border-primary/30">
              Tell Us about Your Event
            </h3>

            <p className="mt-6 font-body font-light text-primary text-[14px] leading-[22px] lg:text-[16px] lg:leading-[25px] max-w-[900px]">
              Now, tell us a little about your celebration — whether it&apos;s a wedding, birthday, or corporate event. These details help us understand your vision and begin shaping an experience that feels intentional, elegant, and uniquely yours.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-5">
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

            {/* Bottom row: reCAPTCHA notice + submit */}
            <div className="mt-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <p className="font-sans font-light text-[12px] lg:text-[14px] leading-[20px] lg:leading-[25px] tracking-[0.05em] text-primary max-w-[420px]">
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
                className={`group flex items-center justify-between gap-6 px-8 py-4 transition-colors ${
                  allFilled ? "bg-secondary hover:opacity-90" : "bg-[#778472]"
                }`}
              >
                <span className="font-sans font-light text-[16px] tracking-[0.15em] uppercase text-background">
                  Send Message
                </span>
                <Image
                  src="/icons/whitebuttonarrow.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}