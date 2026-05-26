import ComparisonSlider from "@/components/ui/ComparisonSlider";

const transformations = [
  {
    location: "LAGOS, NIGERIA — 2023",
    subtitle: "A Contemporary Outdoor Wedding",
    title: "ROMANCE\nREIMAGINED",
    description:
      "What began as a simple open lawn became a contemporary landscape of sculptural florals, soft draping, and clean architectural lines. We carved out an aisle that framed the water's edge, layered muted tones against the natural greenery, and introduced intentional elevation points that created depth and flow. The transformation turned an ordinary outdoor clearing into a refined, modern ceremony space — light-filled, airy, and romantic.",
    beforeImg: "/images/beforeafterpage/firstbefore.jpg",
    afterImg: "/images/beforeafterpage/firstafter.jpg",
    sliderOnRight: true,
  },
  {
    location: "ABUJA, NIGERIA — 2023",
    subtitle: "Corporate Hospitality, Elevated",
    title: "GOV. HALL\nREIMAGINED",
    description:
      "What began as a stark conference hall was transformed into a warm, contemporary dining environment. Clean lines and subtle brand cues shaped the design, while immersive lighting softened the room's edges and invited guests into a more intimate experience. Sterile layouts gave way to elegantly dressed tables, curated florals, and a gentle glow that echoed BlueTech's identity. The result was a space where corporate formality dissolved into refined hospitality — polished and thoughtfully composed.",
    beforeImg: "/images/beforeafterpage/secondbefore.jpg",
    afterImg: "/images/beforeafterpage/secondafter.jpg",
    sliderOnRight: false,
  },
  {
    location: "LAGOS, NIGERIA — 2024",
    subtitle: "A Cultural & Modern Fusion Wedding",
    title: "TRADITION\nILLUMINATED",
    description:
      "A plain events hall became the stage for a modern interpretation of cultural heritage. Vibrant traditional textiles were paired with minimalist florals, while soft lighting highlighted ceremonial areas with intention. The result was a warm, contemporary scene where colour and structure danced together — a fusion of culture and modernity brought to life in rich detail.",
    beforeImg: "/images/beforeafterpage/beforebg.jpg",
    afterImg: "/images/beforeafterpage/afterbg.jpg",
    sliderOnRight: true,
  },
  {
    location: "LAGOS, NIGERIA — 2022",
    subtitle: "A Birthday Dinner in Modern Bloom",
    title: "INTIMATE\nGIRLS DINNER",
    description:
      "What began as a simple private dining room blossomed into a softly lit, modern sanctuary. Clean tablescapes, layered with delicate florals and gentle candlelight, wrapped the room in a warm, luminous glow. Tonal accents added depth, turning the space into a cocoon of quiet elegance. The transformation shifted the atmosphere from ordinary to intimate — a tender, luxurious setting crafted for connection, warmth, and a beauty that felt both effortless and intentional.",
    beforeImg: "/images/beforeafterpage/fourthbefore.jpg",
    afterImg: "/images/beforeafterpage/fourthafter.jpg",
    sliderOnRight: false,
  },
];

export default function Transformations() {
  return (
    <>
      {transformations.map((item, index) => (
        <section key={index} className="bg-[#EEEEEE] py-10 lg:py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-start">
              {/* Text column - on desktop alternates left/right based on sliderOnRight */}
              <div
                className={`lg:col-span-6 ${
                  item.sliderOnRight ? "lg:order-1" : "lg:order-2"
                }`}
              >
                {/* Location */}
                <p
                  className={`font-sans font-light text-primary text-[12px] lg:text-[15px] tracking-wider mb-2 ${
                    item.sliderOnRight ? "text-left" : "lg:text-right text-left"
                  }`}
                >
                  {item.location}
                </p>

                {/* Subtitle */}
                <h3
                  className={`font-display font-thin text-primary text-[24px] lg:text-[40px] leading-[1.2] lg:leading-[48px] mb-8 lg:mb-12 ${
                    item.sliderOnRight ? "text-left" : "lg:text-right text-left"
                  }`}
                >
                  {item.subtitle}
                </h3>

                {/* Mobile-only slider, sits between subtitle and big title */}
                <div className="lg:hidden mb-10">
                  <ComparisonSlider
                    beforeImg={item.beforeImg}
                    afterImg={item.afterImg}
                  />
                </div>

                {/* Big title */}
                <h2 className="font-display font-thin text-primary text-[44px] lg:text-[92px] leading-[1.05] lg:leading-[92px] text-center mb-8 lg:mb-10">
                  {item.title.split("\n").map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </h2>

                {/* Description */}
                <p className="font-body font-light text-primary text-[14px] lg:text-[20px] leading-[24px] lg:leading-[28.8px] text-center">
                  {item.description}
                </p>
              </div>

              {/* Desktop-only slider column */}
              <div
                className={`hidden lg:block lg:col-span-4 ${
                  item.sliderOnRight ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <ComparisonSlider
                  beforeImg={item.beforeImg}
                  afterImg={item.afterImg}
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}