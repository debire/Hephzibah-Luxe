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
        <section key={index} className="bg-[#EEEEEE] py-10 sm:py-12 md:py-14 lg:py-12 xl:py-16 2xl:py-20">
          <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 sm:px-8 md:px-10 lg:px-10 xl:px-14 2xl:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 items-start">
              {/* Text column */}
              <div
                className={`lg:col-span-6 ${
                  item.sliderOnRight ? "lg:order-1" : "lg:order-2"
                }`}
              >
                {/* Location */}
                <p
                  className={`font-sans font-light text-primary tracking-wider mb-2 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px] ${
                    item.sliderOnRight ? "text-left" : "lg:text-right text-left"
                  }`}
                >
                  {item.location}
                </p>

                {/* Subtitle */}
                <h3
                  className={`font-display font-thin text-primary mb-8 sm:mb-10 md:mb-12 lg:mb-12 xl:mb-14 text-[24px] leading-[1.2] sm:text-[28px] sm:leading-[1.2] md:text-[34px] md:leading-[1.2] lg:text-[40px] lg:leading-[48px] xl:text-[46px] xl:leading-[56px] 2xl:text-[52px] 2xl:leading-[62px] ${
                    item.sliderOnRight ? "text-left" : "lg:text-right text-left"
                  }`}
                >
                  {item.subtitle}
                </h3>

                {/* Mobile/landscape/iPad slider, sits between subtitle and big title */}
                <div className="lg:hidden mb-10 sm:mb-12 md:mb-14">
                  <ComparisonSlider
                    beforeImg={item.beforeImg}
                    afterImg={item.afterImg}
                  />
                </div>

                {/* Big title */}
                <h2 className="font-display font-thin text-primary text-center mb-8 sm:mb-10 md:mb-10 lg:mb-10 xl:mb-12 text-[44px] leading-[1.05] sm:text-[56px] sm:leading-[1.05] md:text-[72px] md:leading-[1.05] lg:text-[92px] lg:leading-[92px] xl:text-[108px] xl:leading-[108px] 2xl:text-[124px] 2xl:leading-[124px]">
                  {item.title.split("\n").map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </h2>

                {/* Description */}
                <p className="font-body font-light text-primary text-center text-[14px] leading-[24px] sm:text-[15px] sm:leading-[26px] md:text-[17px] md:leading-[28px] lg:text-[20px] lg:leading-[28.8px] xl:text-[22px] xl:leading-[32px] 2xl:text-[24px] 2xl:leading-[34px] max-w-[800px] xl:max-w-[920px] 2xl:max-w-[1040px] mx-auto">
                  {item.description}
                </p>
              </div>

              {/* Desktop slider column */}
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