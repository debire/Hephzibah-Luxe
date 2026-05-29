export type EventCategory = "Weddings" | "Birthdays" | "Corporate" | "Social Events";
export type EventType = "single-day" | "multi-day";

export type GalleryRow =
  | { type: "images"; images: string[]; ratios?: number[] }
  | { type: "testimonial"; quote: string; attribution: string };

export interface SubEvent {
  subtitle: string;
  title: string;
  image: string;
  slug: string;
  description?: string[];
  gallery?: GalleryRow[];
}

export interface PortfolioEvent {
  slug: string;
  type: EventType;
  category: EventCategory;
  location: string;
  year: number;
  title: string;
  coverImage: string;
  description?: string[];
  subEvents?: SubEvent[];
  gallery?: GalleryRow[];
}

export const portfolioEvents: PortfolioEvent[] = [
  {
    slug: "golden-50th",
    type: "multi-day",
    category: "Birthdays",
    location: "Lagos, Nigeria",
    year: 2021,
    title: "A Golden 50th: An Intimate Two-Day Celebration of Family, Faith & Joy",
    coverImage: "/images/portfoliopage/portfoliotwelve.jpg",
    description: [
      "Turning fifty was not simply marked with a single event, but thoughtfully honoured across two days that reflected a life rich in love, faith, and meaningful connection. Set within the comfort of home and the familiarity of community, the celebration unfolded gently — beginning with a heartfelt gathering of close family and friends, and continuing into a joyful occasion filled with laughter, music, and shared moments.",
      "Rooted in gratitude and guided by intention, each element of the experience prioritised togetherness over grandeur. From the warmth of a thanksgiving gathering to the vibrancy of a celebratory party, the weekend felt deeply personal — a reflection of a life well-lived and the people who have shaped it.",
      "The result was a celebration that felt less like an event, and more like a beautiful continuation of legacy — intimate, sincere, and filled with joy.",
    ],
    subEvents: [
      {
        subtitle: "Pre-Birthday Photoshoot",
        title: "A Moment Before Fifty — The Pre-Birthday Portrait Experience",
        image: "/images/portfoliopage/goldenone.jpg",
        slug: "pre-birthday-photoshoot",
        description: [
          "Before the celebrations began, there was a quiet moment to pause — to honour the woman at the centre of it all, and the milestone she was about to step into. This pre-birthday portrait session was designed to capture not just an age, but a new season of life marked by grace, confidence, and depth.",
          "Rather than relying on an elaborate setting, the focus remained intentionally simple. With a clean, understated backdrop, every detail was drawn back to what mattered most — her presence, her expression, and the story carried in each frame.",
          "The result was a series of portraits that felt both timeless and deeply personal — a gentle yet powerful reflection of a life beautifully lived, and the elegance of stepping into fifty.",
        ],
        gallery: [
          {
            type: "images",
            images: [
              "/images/portfoliopage/photoshootone.jpg",
              "/images/portfoliopage/photoshoottwo.jpg",
              "/images/portfoliopage/photoshootthree.jpg",
            ],
          },
          {
            type: "images",
            images: ["/images/portfoliopage/photoshootfour.jpg"],
          },
          {
            type: "images",
            images: [
              "/images/portfoliopage/photoshootfive.jpg",
              "/images/portfoliopage/photoshootsix.jpg",
            ],
          },
          {
            type: "images",
            images: ["/images/portfoliopage/photoshootseven.jpg"],
          },
          {
            type: "testimonial",
            quote:
              "I wanted something simple, but meaningful — and that's exactly what this was. Every detail felt intentional, and the photos captured me in such a beautiful and authentic way. There was a quiet attention to detail that made me feel completely at ease, and that really reflected in the final images. What I loved most is that the focus never shifted away from me. It truly felt like the perfect way to step into fifty.",
            attribution: "Winnie, Celebrant",
          },
          {
            type: "images",
            images: [
              "/images/portfoliopage/photoshooteight.jpg",
              "/images/portfoliopage/photoshootnine.jpg",
            ],
            ratios: [3, 2],
          },
          {
            type: "images",
            images: [
              "/images/portfoliopage/photoshootten.jpg",
              "/images/portfoliopage/photoshooteleven.jpg",
            ],
          },
          {
            type: "images",
            images: [
              "/images/portfoliopage/photoshoottwelve.jpg",
              "/images/portfoliopage/photoshootthirteen.jpg",
            ],
            ratios: [3, 2],
          },
          {
            type: "images",
            images: ["/images/portfoliopage/photoshootfourteen.jpg"],
          },
        ],
      },
      {
  subtitle: "Event No. 1",
  title: "Rooted in Gratitude — A Gathering of Thanksgiving & Reflection",
  image: "/images/portfoliopage/goldentwo.jpg",
  slug: "thanksgiving-gathering",
  description: [
    "The celebration began with a quiet and meaningful gathering centred on gratitude, faith, and reflection. Surrounded by close family, church members, and loved ones, the moment unfolded with a sense of calm reverence — a gentle pause before the festivities to give thanks for a life richly lived.",
    "Led in prayer by the family pastor, the gathering created space for heartfelt words, blessings, and collective reflection. It was less about formality, and more about presence — a coming together of community in honour of the journey thus far and the years ahead.",
    "Following the prayers, guests shared in light refreshments, conversations, and warm fellowship. The atmosphere remained simple yet deeply meaningful — a beautiful reminder that at the heart of every celebration lies gratitude, faith, and the people who walk life alongside you.",
  ],
  gallery: [
    {
      type: "images",
      images: [
        "/images/portfoliopage/rootedone.jpg",
        "/images/portfoliopage/rootedtwo.jpg",
        "/images/portfoliopage/rootedthree.jpg",
      ],
    },
    { type: "images", images: ["/images/portfoliopage/rootedfour.jpg"] },
    {
      type: "images",
      images: [
        "/images/portfoliopage/rootedfive.jpg",
        "/images/portfoliopage/rootedsix.jpg",
      ],
    },
    { type: "images", images: ["/images/portfoliopage/rootedseven.jpg"] },
    {
      type: "testimonial",
      quote:
        "This moment meant so much more to me than I can fully express. To be surrounded by people who have walked this journey with me, lifting me up in prayer and sharing in this time of thanksgiving… it was truly special. It reminded me of how blessed I am, not just for the years, but for the love, the support, and the grace that has carried me through them. I'm so thankful to God for how far He has brought me, and for the people He has placed in my life.",
      attribution: "Winnie, Celebrant",
    },
    {
      type: "images",
      images: [
        "/images/portfoliopage/rootedeight.jpg",
        "/images/portfoliopage/rootednine.jpg",
      ],
      ratios: [3, 2],
    },
    {
      type: "images",
      images: [
        "/images/portfoliopage/rootedten.jpg",
        "/images/portfoliopage/rootedeleven.jpg",
        "/images/portfoliopage/rootedtwelve.jpg",
      ],
    },
    {
      type: "images",
      images: [
        "/images/portfoliopage/rootedthirteen.jpg",
        "/images/portfoliopage/rootedfourteen.jpg",
      ],
      ratios: [3, 2],
    },
  ],
},
{
  subtitle: "Event No. 2",
  title: "Fifty, Unforgettable — A Night of Music, Dance & Pure Celebration",
  image: "/images/portfoliopage/goldenthree.jpg",
  slug: "celebration-night",
  description: [
    "If the earlier gathering was a quiet moment of reflection, this evening was its joyful release. As night fell, the atmosphere shifted into one of vibrant celebration — a space filled with music, movement, and the unmistakable energy of people coming together to honour a life well lived.",
    "Friends and family gathered not just to mark a milestone, but to truly celebrate it. The room came alive with laughter, dancing, and moments of pure joy, as every guest became part of the experience. It was effortless, spirited, and full of life — the kind of celebration where time seems to soften, and all that remains is the rhythm of the moment.",
    "At the centre of it all was the celebrant — radiant, joyful, and fully present — surrounded by love and celebration in its most expressive form. It was not just a party, but a night that felt unforgettable in every sense: vibrant, meaningful, and beautifully alive.",
  ],
  gallery: [
    {
      type: "images",
      images: [
        "/images/portfoliopage/pureone.jpg",
        "/images/portfoliopage/puretwo.jpg",
      ],
    },
    {
      type: "images",
      images: [
        "/images/portfoliopage/purethree.jpg",
        "/images/portfoliopage/purefour.jpg",
        "/images/portfoliopage/purefive.jpg",
      ],
    },
    {
      type: "images",
      images: [
        "/images/portfoliopage/puresix.jpg",
        "/images/portfoliopage/pureseven.jpg",
      ],
    },
    {
      type: "images",
      images: [
        "/images/portfoliopage/pureeight.jpg",
        "/images/portfoliopage/purenine.jpg",
      ],
      ratios: [2, 3],
    },
    {
      type: "testimonial",
      quote:
        "I told myself that when it was time to celebrate, I was going to celebrate fully — and this night was exactly that. From the music to the dancing to the laughter, every moment felt alive. To be surrounded by so much love and joy, all in one room, was something I will never forget.",
      attribution: "Winnie, Celebrant",
    },
    {
      type: "images",
      images: [
        "/images/portfoliopage/pureten.jpg",
        "/images/portfoliopage/pureeleven.jpg",
      ],
    },
    { type: "images", images: ["/images/portfoliopage/puretwelve.jpg"] },
    { type: "images", images: ["/images/portfoliopage/purethirteen.jpg"] },
    {
      type: "images",
      images: [
        "/images/portfoliopage/purefourteen.jpg",
        "/images/portfoliopage/purefifteen.jpg",
      ],
    },
    { type: "images", images: ["/images/portfoliopage/puresixteen.jpg"] },
    {
      type: "images",
      images: [
        "/images/portfoliopage/pureseventeen.jpg",
        "/images/portfoliopage/pureeighteen.jpg",
      ],
    },
    { type: "images", images: ["/images/portfoliopage/purenineteen.jpg"] },
  ],
},
    ],
  },
  {
  slug: "intimate-85th",
  type: "single-day",
  category: "Birthdays",
  location: "Lagos, Nigeria",
  year: 2022,
  title: "An Intimate 85th: A Celebration of Grace, Family & Legacy",
  coverImage: "/images/portfoliopage/portfoliothirteen.jpg",
  description: [
    "Eighty-five years of life, love, faith, and family were gently honoured through an intimate gathering centred on togetherness and gratitude. Surrounded by children, grandchildren, close friends, and loved ones, the celebration created space to reflect on a legacy shaped by wisdom, care, and enduring strength.",
    "Designed to feel warm, personal, and deeply meaningful, the experience prioritised connection over formality — allowing guests to celebrate not only a milestone birthday, but the remarkable woman at the heart of it all. From heartfelt conversations to joyful shared moments, every detail contributed to an atmosphere that felt sincere, graceful, and full of love.",
    "The result was a quiet yet beautiful celebration of legacy — one that honoured a life well-lived and the generations touched by it.",
  ],
  gallery: [
    { type: "images", images: ["/images/portfoliopage/legacyone.jpg"] },
    {
      type: "images",
      images: [
        "/images/portfoliopage/legacytwo.jpg",
        "/images/portfoliopage/legacythree.jpg",
      ],
    },
    {
      type: "images",
      images: [
        "/images/portfoliopage/legacyfour.jpg",
        "/images/portfoliopage/legacyfive.jpg",
      ],
      ratios: [2, 3],
    },
    {
      type: "images",
      images: [
        "/images/portfoliopage/legacysix.jpg",
        "/images/portfoliopage/legacyseven.jpg",
        "/images/portfoliopage/legacyeight.jpg",
      ],
    },
    {
      type: "testimonial",
      quote:
        "With very little time to plan, we were unsure how everything would come together, but Hephzibah Luxe handled the experience with such care and calmness. Watching our mother celebrate alongside her church community, family, and close friends was incredibly special, and the atmosphere felt warm, graceful, and genuinely reflective of her life and faith.",
      attribution: "Olamipe, Daughter of Celebrant",
    },
    {
      type: "images",
      images: [
        "/images/portfoliopage/legacynine.jpg",
        "/images/portfoliopage/legacyten.jpg",
      ],
      ratios: [3, 2],
    },
    {
      type: "images",
      images: [
        "/images/portfoliopage/legacyeleven.jpg",
        "/images/portfoliopage/legacytwelve.jpg",
      ],
    },
    {
      type: "images",
      images: [
        "/images/portfoliopage/legacythirteen.jpg",
        "/images/portfoliopage/legacyfourteen.jpg",
        "/images/portfoliopage/legacyfifteen.jpg",
      ],
    },
    {
      type: "images",
      images: [
        "/images/portfoliopage/legacysixteen.jpg",
        "/images/portfoliopage/legacyseventeen.jpg",
      ],
      ratios: [3, 2],
    },
    { type: "images", images: ["/images/portfoliopage/legacyeighteen.jpg"] },
  ],
},
  {
    slug: "msme-forum",
    type: "single-day",
    category: "Corporate",
    location: "Lagos, Nigeria",
    year: 2026,
    title: "Lagos State Government (OPL& CE) MSME Engagement Forum",
    coverImage: "/images/portfoliopage/portfoliofourteen.jpg",
  },
  {
    slug: "catherine-esai",
    type: "multi-day",
    category: "Weddings",
    location: "Lagos, Nigeria",
    year: 2026,
    title: "Catherine & Esai's Nigerian & Togolese Fusion Wedding",
    coverImage: "/images/portfoliopage/portfoliofifteen.jpg",
  },
  {
    slug: "stephanie-30th",
    type: "single-day",
    category: "Birthdays",
    location: "Lagos, Nigeria",
    year: 2023,
    title: "Stephanie's Modern 30th Birthday Dinner Soirée",
    coverImage: "/images/portfoliopage/portfoliosixteen.jpg",
  },
];

export function getEventBySlug(slug: string): PortfolioEvent | undefined {
  return portfolioEvents.find((e) => e.slug === slug);
}