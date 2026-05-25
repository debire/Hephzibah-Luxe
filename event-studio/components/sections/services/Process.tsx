const steps = [
  {
    number: "No. 01",
    title: "CONNECT",
    lead: "Understanding the meaning behind the moment",
    description:
      "Every celebration begins with connection. Through a private conversation, we listen deeply — to your vision, your priorities, and what this moment truly represents. It's how we ensure every choice that follows feels personal, considered, and true to you.",
  },
  {
    number: "No. 02",
    title: "ALIGN",
    lead: "Clarity before creativity, so every detail is made with intention",
    description:
      "With your goals defined, we establish clarity. We define scope, priorities, and financial parameters so decisions feel grounded, transparent, and effortless — allowing every choice to feel informed, balanced, and aligned with your expectations.",
  },
  {
    number: "No. 03",
    title: "CURATE",
    lead: "Curated with purpose — the right setting, the right partners",
    description:
      "From venues to creative collaborators, every element is thoughtfully chosen. We curate spaces and partners that align with your vision and elevate the experience, ensuring nothing feels incidental or out of place.",
  },
  {
    number: "No. 04",
    title: "ENVISION",
    lead: "Shaping the experience, from first impression to final moment",
    description:
      "This is where your celebration begins to take form. Drawing from your story and inspiration, we shape the look, feel, and flow of the event — imagining it as your guests will experience it, from first arrival to final moment.",
  },
  {
    number: "No. 05",
    title: "ORCHESTRATE",
    lead: "Precision behind the scenes, as the day unfolds.",
    description:
      "As plans come together, we quietly manage the details — logistics, timelines, coordination — with care and exactness. Much of this work is unseen, but it's what allows the experience to feel seamless and unburdened.",
  },
  {
    number: "No. 06",
    title: "EXECUTE",
    lead: "An experience fully realised — every moment felt, nothing left to chance.",
    description:
      "On the day itself, our presence is steady and composed. We guide the celebration moment by moment, allowing you to remain fully present while everything unfolds exactly as intended.",
  },
  {
    number: "No. 07",
    title: "COMPLETION",
    lead: "Care that extends beyond your day of celebration.",
    description:
      "As the celebration comes to a close, we remain attentive — ensuring loose ends are gently tied and the experience settles with the same intention it began. It's a quiet final touch, allowing the moment to end feeling whole, thoughtful, and well held.",
  },
];

export default function Process() {
  return (
    <section className="relative z-40 bg-background py-20 lg:py-28 px-6 lg:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-center mb-16 lg:mb-24 text-primary whitespace-nowrap">
          <span className="font-display font-thin text-[28px] lg:text-[60px] leading-[100%]">
            A GLIMPSE INTO OUR{" "}
          </span>
          <span className="font-display font-thin italic text-[28px] lg:text-[60px] leading-[100%]">
            Signature
          </span>
          <span className="font-display font-thin text-[28px] lg:text-[60px] leading-[100%]">
            {" "}
            PROCESS
          </span>
        </h2>

        {/* Timeline */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="relative min-w-max">
            {/* Continuous horizontal line */}
            <div className="absolute left-0 right-0 h-[2px] bg-primary top-[12px]" />

            {/* Steps */}
            <div className="flex gap-8 pb-8">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className={`flex-none w-[280px] lg:w-[350px] ${
                    i === steps.length - 1 ? "pr-6" : ""
                  }`}
                >
                  {/* Dot */}
                  <div className="w-6 h-6 rounded-full bg-primary relative z-10 mb-8" />

                  {/* Title */}
                  <h3 className="font-display font-thin text-primary text-[26px] lg:text-[30px] leading-[100%] mb-3">
                    {step.number}: {step.title}
                  </h3>

                  {/* Lead (italic) */}
                  <p className="font-body font-light italic text-primary text-[18px] lg:text-[20px] leading-[100%] mb-4">
                    {step.lead}
                  </p>

                  {/* Description */}
                  <p className="font-body font-light text-primary text-[16px] lg:text-[18px] leading-[24px]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}