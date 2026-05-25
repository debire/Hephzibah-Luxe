import Image from "next/image";

const points = [
  {
    title: "More Than Planning — We Shape Unforgettable Experiences",
    description:
      "We don't just organise events; we curate how they feel. From the first interaction to the final moment, our focus is on creating celebrations that are seamless, thoughtful, and effortless to enjoy.",
  },
  {
    title: "What Makes Us Different? — We Start by Listening",
    description:
      "We listen and take time to understand your vision. With experience, imagination, and trusted creative partners, we bring your most meaningful ideas to life.",
  },
  {
    title: "Guided With Care, Executed With Precision",
    description:
      "With a steady, gentle hand, we take care of what happens behind the scenes — the details, the coordination, the flow — so you're free to be fully present, unburdened, and immersed in the celebration.",
  },
  {
    title: "Thoughtfully Redefining Luxury",
    description:
      "Extraordinary celebrations aren't reserved for only the grandest budgets. With clarity, creativity, and intention, we craft beautiful, elevated experiences at every scale — ensuring each event feels special.",
  },
];

export default function WhyWork() {
  return (
    <section className="bg-secondary text-background py-16 lg:py-24 overflow-hidden">
      <div className="px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start">
          {/* Image - second on mobile, first on desktop */}
          <div className="order-2 lg:order-1 relative w-full aspect-[4/5] lg:aspect-auto lg:h-full lg:min-h-[700px] overflow-hidden">
            <Image
              src="/images/servicespage/work.jpg"
              alt="Elegant table setting"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

          {/* Text content */}
          <div className="order-1 lg:order-2 flex flex-col">
            {/* Heading - sits to the left of the bullet column */}
            <h2 className="font-display font-thin text-[36px] leading-[42px] lg:text-[60px] lg:leading-[65px] tracking-[0] text-background">
              WHY WORK
              <br />
              <em className="italic font-thin">with</em> HEPHZIBAH LUXE?
            </h2>

            {/* Bullet list - indented so the heading visually starts before the checkmark column */}
            <ul className="mt-10 lg:mt-12 space-y-8 lg:space-y-10 lg:pl-12">
              {points.map((point, i) => (
                <li key={i}>
                  {/* Checkmark inline with title */}
                  <div className="flex items-center gap-3">
                    <Image
                      src="/icons/checkmark.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="flex-shrink-0"
                    />
                    <h3 className="font-body font-normal text-[16px] leading-[22px] lg:text-[20px] lg:leading-[25px] text-background">
                      {point.title}
                    </h3>
                  </div>
                  {/* Description indented to align under the title */}
                  <p className="mt-3 pl-8 font-body font-light text-[15px] leading-[24px] lg:text-[18px] lg:leading-[25px] text-background max-w-[580px]">
                    {point.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}