import Image from "next/image";

export default function BehindTheBrand() {
    return (
        <section className="bg-background text-primary">
            <div className="px-4 lg:px-8 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto">
                    {/* ───── Mobile-only: heading + intro at top ───── */}
                    <div className="lg:hidden mb-10">
                        <h2 className="font-display font-thin text-[56px] leading-[50px] tracking-normal">
                            BEHIND
                            <br />
                            <span className="italic">the</span> BRAND
                        </h2>
                        <p className="mt-6 font-body font-light italic text-[15px] leading-[26px] tracking-[0.02em]">
                            Hephzibah Luxe is founded on the belief that celebrations are more than events — they are expressions of legacy, love, and intention. At the helm are a mother-daughter duo whose combined strengths bring warmth, precision, and unmistakable elegance to every experience.
                        </p>
                    </div>

                    {/* ───── Founder row ───── */}
                    <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-8 lg:gap-14">
                        <div className="relative w-full aspect-[4/5] lg:aspect-auto">
                            <Image
                                src="/images/aboutpage/founder.jpg"
                                alt="Winnie O., Founder & CEO"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 45vw"
                            />
                        </div>

                        <div>
                            {/* Desktop-only: heading + intro */}
                            <div className="hidden lg:block mb-10">
                                <h2 className="font-display font-thin text-[100px] leading-[90px] tracking-normal">
                                    BEHIND
                                    <br />
                                    <span className="italic">the</span> BRAND
                                </h2>
                                <p className="mt-8 lg:pl-16 font-body font-light italic text-[16px] leading-[26px] tracking-[0.02em] max-w-[610px]">
                                    Hephzibah Luxe is founded on the belief that celebrations are more than events — they are expressions of legacy, love, and intention. At the helm are a mother-daughter duo whose combined strengths bring warmth, precision, and unmistakable elegance to every experience.
                                </p>
                            </div>

                            {/* Slight indent from heading on desktop */}
                            <div className="lg:pl-16">
                                <h3 className="font-body font-medium text-[16px] lg:text-[18px] leading-[24px] tracking-[-0.01em]">
                                    Winnie O. | Founder &amp; CEO | Client Experience Curator &amp; On-Site Lead
                                </h3>
                                <div className="mt-4 space-y-4 font-body font-light text-[15px] lg:text-[18px] leading-[26px] lg:leading-[30px]">
                                    <p>
                                        Winnie is the heart of Hephzibah Luxe. With a calm presence and a deeply intuitive approach, she brings reassurance, wisdom, and grace to every celebration. Known for her thoughtful guidance and genuine warmth, Winnie has a gift for making clients feel at ease — even amid the most intricate planning moments. From venue walk-throughs to vendor relationships, she ensures every detail feels personal, considered, and beautifully aligned with your vision.
                                    </p>
                                    <p>
                                        Her love for event planning began long before Hephzibah Luxe. For years, Winnie was the trusted &ldquo;go-to&rdquo; for family celebrations, community gatherings, and milestone moments — naturally stepping into the role of organiser, guide, and calm anchor. What started as instinct has grown into experience, shaped by years of hands-on involvement and a genuine joy in bringing people together. When she isn&apos;t planning, Winnie enjoys spending time with family and nurturing the sense of hospitality that inspires everything she does.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ───── Co-founder row ───── */}
                    <div className="mt-16 lg:mt-28 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
                        <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:order-2">
                            <Image
                                src="/images/aboutpage/cofounder.jpg"
                                alt="Tosin O., Co-Founder"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>

                        {/* Text: second on mobile, left column on desktop */}
                        <div className="lg:order-1">
                            <h3 className="font-body font-medium text-[16px] lg:text-[18px] leading-[24px] tracking-[-0.01em]">
                                Tosin O. | Co-Founder | Strategy, Systems &amp; Creative Direction
                            </h3>
                            <div className="mt-4 space-y-4 font-body font-light text-[15px] lg:text-[18px] leading-[26px] lg:leading-[30px]">
                                <p>
                                    Tosin is the mind behind the seamlessness. Detail-driven and design-led, she brings structure, clarity, and strategic oversight to every celebration. With a background in digital management and a deep love for intentional design, Tosin ensures that timelines flow, communication remains effortless, and nothing is left to chance. Her approach blends creative vision with operational excellence — allowing beauty and precision to coexist effortlessly.
                                </p>
                                <p>
                                    Her path to Hephzibah Luxe has been shaped by years of balancing multiple roles, disciplines, and responsibilities — each sharpening her eye for detail, structure, and foresight. Working alongside her mother allows Tosin to pair strategy with intuition, systems with presence. Their constant back-and-forth — refining, questioning, and perfecting — ensures every decision is thoughtful and every experience held to the highest standard.
                                </p>
                            </div>

                            <div className="mt-8">
                                <p className="font-body font-semibold italic text-[15px] lg:text-[18px] leading-[26px]">
                                    One Vision. Two Perspectives. Elegance in Every Element.
                                </p>
                                <p className="mt-4 font-body font-light italic text-[14px] lg:text-[16px] leading-[24px] lg:leading-[26px] tracking-[0.02em]">
                                    A partnership rooted in trust, perspective, and a shared commitment to excellence. Together, Winnie and Tosin create celebrations that ARE thoughtful, refined, and deeply meaningful — where every element is considered, every moment intentional, and every experience elevated.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}