import Image from "next/image";
import Link from "next/link";

const panels = [
  {
    title: "PLANNING & COORDINATION",
    lead: "Where Vision Meets Structure",
    description:
      " — Our planning service is rooted in clarity, intention, and seamless execution. From vendor management to timelines, logistics, and on-site coordination, we ensure every moving piece comes together effortlessly. Whether guiding you from concept to completion or stepping in to orchestrate the final details, we create a calm, organized process that allows you to actually enjoy your celebration — not manage it.",
    image: "/images/servicespage/planning.jpg",
    bg: "bg-primary",
    textClass: "text-background",
    borderClass: "border-background/30",
    arrow: "/icons/whitecurlyarrow.svg",
    z: "lg:z-10",
  },
  {
    title: "CREATIVE DIRECTION & DESIGN",
    lead: "Aesthetic storytelling, refined with purpose",
    description:
      " — While we collaborate with expert décor and floral teams, Hephzibah Luxe leads the creative direction that shapes your event's visual identity. From moodboards to colour palettes, stationery, signage, guest experience touchpoints, and overall aesthetic guidance, we craft a cohesive design story that feels personal, modern, and beautifully intentional. Our role is to ensure every detail aligns with your vision — and enhances it.",
    image: "/images/servicespage/design.jpg",
    bg: "bg-background",
    textClass: "text-primary",
    borderClass: "border-primary/30",
    arrow: "/icons/darkcurlyarrow.svg",
    z: "lg:z-20",
  },
  {
    title: "ELEVATED GUEST EXPERIENCE",
    lead: "An experience your guests will never forget.",
    description:
      " — Beyond logistics and décor, we curate the emotional rhythm of your celebration — how it feels to arrive, to dine, to dance, to experience the moment with you. We design thoughtful touchpoints, seamless movement, warm hospitality, and sensory details that shape an unforgettable guest journey. From atmosphere to ambience to the subtle cues that elevate a moment, our focus is on crafting experiences that linger long after the day ends.",
    image: "/images/servicespage/elevated.jpg",
    bg: "bg-primary",
    textClass: "text-background",
    borderClass: "border-background/30",
    arrow: "/icons/whitecurlyarrow.svg",
    z: "lg:z-30",
  },
];

export default function StickyServices() {
  return (
    <>
      {panels.map((panel, i) => (
        <section key={i} className={`lg:sticky lg:top-0 ${panel.z}`}>
          <div className={`${panel.bg} lg:h-screen lg:flex lg:items-center`}>
            <div className="w-full px-6 lg:px-10 py-12 lg:py-0">
              <div className="max-w-7xl mx-auto">
                {/* Desktop: 70/30 split, image on right */}
                <div className="hidden lg:grid grid-cols-10 gap-12 items-stretch">
                  <div className="col-span-7 flex flex-col justify-center">
                    <h2
                      className={`font-display font-thin text-[50px] leading-[100%] tracking-[-0.01em] mb-8 whitespace-nowrap ${panel.textClass}`}
                    >
                      {panel.title}
                    </h2>

                    <p
                      className={`text-[20px] leading-[32px] mb-10 pr-8 ${panel.textClass}`}
                    >
                      <span className="font-body font-medium italic">
                        {panel.lead}
                      </span>
                      <span className="font-body font-light">
                        {panel.description}
                      </span>
                    </p>

                    <div className="pr-8">
                      <div className={`border-t ${panel.borderClass}`} />
                      <Link
                        href="/portfolio"
                        className="flex items-center justify-between py-4 group"
                      >
                        <span
                          className={`font-sans font-light text-[15px] leading-[32px] tracking-wide ${panel.textClass}`}
                        >
                          VIEW OUR PAST PROJECTS
                        </span>
                        <Image
                          src={panel.arrow}
                          alt=""
                          width={128}
                          height={24}
                          className="transition-transform group-hover:translate-x-2"
                        />
                      </Link>
                      <div className={`border-t ${panel.borderClass}`} />
                      <Link
                        href="/inquiry"
                        className="flex items-center justify-between py-4 group"
                      >
                        <span
                          className={`font-sans font-light text-[15px] leading-[32px] tracking-wide ${panel.textClass}`}
                        >
                          WORK WITH US TO CREATE AN AMAZING EVENT
                        </span>
                        <Image
                          src={panel.arrow}
                          alt=""
                          width={128}
                          height={24}
                          className="transition-transform group-hover:translate-x-2"
                        />
                      </Link>
                      <div className={`border-t ${panel.borderClass}`} />
                    </div>
                  </div>

                  <div className="col-span-3 flex items-center">
                    <div className="relative w-full h-[80vh] overflow-hidden">
                      <Image
                        src={panel.image}
                        alt={panel.title}
                        fill
                        className="object-cover"
                        sizes="30vw"
                      />
                    </div>
                  </div>
                </div>

                {/* Mobile: header → image → text → links */}
                <div className="lg:hidden">
                  <h2
                    className={`font-display font-thin text-[40px] leading-[100%] tracking-[-0.01em] mb-6 ${panel.textClass}`}
                  >
                    {panel.title}
                  </h2>

                  <div className="relative w-full aspect-[4/5] mb-8 overflow-hidden">
                    <Image
                      src={panel.image}
                      alt={panel.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>

                  <p
                    className={`text-[15px] leading-[26px] mb-8 ${panel.textClass}`}
                  >
                    <span className="font-body font-medium italic">
                      {panel.lead}
                    </span>
                    <span className="font-body font-light">
                      {panel.description}
                    </span>
                  </p>

                  <div>
                    <div className={`border-t ${panel.borderClass}`} />
                    <Link
                      href="/portfolio"
                      className="flex items-center justify-between py-4 group gap-4"
                    >
                      <span
                        className={`font-sans font-light text-[12px] tracking-wide ${panel.textClass}`}
                      >
                        VIEW OUR PAST PROJECTS
                      </span>
                      <Image
                        src={panel.arrow}
                        alt=""
                        width={80}
                        height={20}
                        className="flex-shrink-0 transition-transform group-hover:translate-x-2"
                      />
                    </Link>
                    <div className={`border-t ${panel.borderClass}`} />
                    <Link
                      href="/inquiry"
                      className="flex items-center justify-between py-4 group gap-4"
                    >
                      <span
                        className={`font-sans font-light text-[12px] tracking-wide ${panel.textClass}`}
                      >
                        WORK WITH US TO CREATE AN AMAZING EVENT
                      </span>
                      <Image
                        src={panel.arrow}
                        alt=""
                        width={80}
                        height={20}
                        className="flex-shrink-0 transition-transform group-hover:translate-x-2"
                      />
                    </Link>
                    <div className={`border-t ${panel.borderClass}`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}