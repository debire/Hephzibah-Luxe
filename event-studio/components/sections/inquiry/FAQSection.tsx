"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: React.ReactNode;
}

const FAQS: FAQ[] = [
  {
    question: "What types of events do you plan?",
    answer: (
      <>
        <p>
          At Hephzibah Luxe, we plan every kind of celebration. From weddings and milestone birthdays to intimate dinners, naming ceremonies, private soirées, luxury picnics, corporate gatherings, and everything in between — if it deserves beauty, intention, and seamless execution, we curate it.
        </p>
        <p>
          No event is too small, too grand, or too unique. Whatever you&apos;re envisioning, we elevate it with elegance, structure, and thoughtful detail.
        </p>
      </>
    ),
  },
  {
    question: "What planning options do you offer, and how do I choose the one that fits my event best?",
    answer: (
      <>
        <p>
          We offer three core levels of service across all event types — full planning, partial planning, and coordination. Each provides a different level of support depending on where you are in your planning journey and how involved you&apos;d like us to be.
        </p>
        <p>
          If you&apos;re unsure which option fits your needs, we&apos;ll guide you. During your discovery conversation, we&apos;ll learn about your event&apos;s complexity, your timeline, and how much support you feel you need — and then recommend the package that serves you best.
        </p>
        <p>
          Because every celebration is unique, we also create custom-tailored packages for clients who require specific support. Whether you want complete end-to-end planning, selective guidance, or seamless event-day management, we ensure your experience is beautifully aligned with your vision.
        </p>
      </>
    ),
  },
  {
    question: "Do you manage the event design process, including décor, styling, and visual direction?",
    answer: (
      <>
        <p>
          Yes — event design is an essential part of what we do. At Hephzibah Luxe, we guide the full creative direction of your event through visual boards, mood development, colour story, style curation, and overall aesthetic harmony. We shape the vision so that every detail feels intentional and beautifully aligned.
        </p>
        <p>
          However, we believe luxury experiences require specialists. For production, décor, florals, rentals, and technical styling, we collaborate exclusively with expert vendors who specialize in those areas. This ensures flawless execution, premium quality, and a seamless transformation of the concept we create together.
        </p>
        <p>
          We stay fully involved throughout the process — overseeing design consistency, managing vendor communication, and ensuring everything reflects the vision we&apos;ve curated. You receive the benefit of a unified aesthetic without the stress of coordinating multiple creatives yourself.
        </p>
      </>
    ),
  },
  {
    question: "How far in advance should we reach out to begin the planning process with Hephzibah Luxe?",
    answer: (
      <>
        <p>
          We welcome inquiries at any stage of your planning journey — whether you&apos;re far ahead, just beginning, or feeling pressed for time. However, for the most seamless experience, we encourage clients to reach out as early as possible. This allows us to secure premium vendors, build your vision intentionally, and craft a beautifully curated timeline without unnecessary pressure.
        </p>
        <p>Our recommendation:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>For weddings, 4-6 months is ideal.</li>
          <li>For social + private events, 2-3 months works beautifully.</li>
          <li>For corporate events, timelines vary — but earlier is always better.</li>
        </ul>
        <p>
          Regardless of when you inquire, our role is the same: to bring structure, elegance, and ease to your event from the moment you connect with us.
        </p>
      </>
    ),
  },
  {
    question: "How does budgeting work with Hephzibah Luxe, and do you accept events with varying investment levels?",
    answer: (
      <>
        <p>
          Yes — we thoughtfully guide clients across a range of budgets. Every event, whether large or intimate, deserves beauty, intention, and excellent planning. We don&apos;t exclude clients with smaller budgets; instead, we help you make the most of your investment while maintaining the elegance Hephzibah Luxe is known for.
        </p>
        <p>
          Our focus is always on clarity, honest guidance, and designing with purpose — ensuring the experience feels elevated at any scale. During your discovery process, we&apos;ll walk you through what&apos;s realistic, recommend the most suitable level of support, and tailor the experience to align with your priorities.
        </p>
      </>
    ),
  },
  {
    question: "What does day-of presence and support look like for Hephzibah Luxe?",
    answer: (
      <>
        <p>
          We&apos;re with you from the very beginning to the very end of your event. Whether it&apos;s a wedding, birthday, naming ceremony, dinner, or corporate gathering, our lead planner stays onsite for the entire duration to ensure a seamless flow from setup to final wrap-up.
        </p>
        <p>
          There are no cut-off hours for our lead planner — you&apos;re never charged extra if things run longer than expected. Your day deserves uninterrupted support.
        </p>
      </>
    ),
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex((current) => (current === i ? null : i));
  };

  return (
    <section id="faqs" className="bg-primary text-background scroll-mt-24">
      <div className="px-4 sm:px-6 md:px-7 lg:px-8 xl:px-12 2xl:px-16 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1500px] mx-auto">
          {/* Title — Editor's Note Hairline (font-display + font-thin), 48px target */}
          <h2 className="font-display font-thin text-background text-center text-[28px] leading-[100%] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px]">
            Frequently Asked Questions
          </h2>

          {/* Accordion list */}
          <div className="mt-10 sm:mt-12 md:mt-14 lg:mt-16 xl:mt-20 border-t border-background/30">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="border-b border-background/30">
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="w-full flex items-start justify-between gap-6 py-6 sm:py-7 md:py-8 text-left"
                  >
                    {/* Question — Newsreader regular (font-body + font-normal), 19px target */}
                    <span className="font-body font-normal text-background text-[15px] leading-[22px] sm:text-[16px] sm:leading-[24px] md:text-[17px] md:leading-[26px] lg:text-[17px] lg:leading-[26px] xl:text-[18px] xl:leading-[28px] 2xl:text-[19px] 2xl:leading-[28px]">
                      {faq.question}
                    </span>

                    {/* +/− icon — no border */}
                    <span
                      aria-hidden="true"
                      className="flex-shrink-0 mt-1 relative w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center"
                    >
                      <span className="absolute w-4 sm:w-5 h-px bg-background" />
                      <span
                        className={`absolute w-px h-4 sm:h-5 bg-background transition-opacity ${
                          isOpen ? "opacity-0" : "opacity-100"
                        }`}
                      />
                    </span>
                  </button>

                  {/* Answer panel */}
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      {/* Answer — Lato light (font-sans + font-light), 16px target */}
                      <div className="pb-8 sm:pb-9 md:pb-10 pr-8 sm:pr-12 font-sans font-light text-background/90 text-[13px] leading-[22px] sm:text-[14px] sm:leading-[24px] md:text-[14px] md:leading-[24px] lg:text-[14px] lg:leading-[25px] xl:text-[15px] xl:leading-[26px] 2xl:text-[16px] 2xl:leading-[28px] space-y-4">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}