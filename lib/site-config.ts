import { IMG } from "./images";

export const site = {
  name: "Blush & Glow",
  fullName: "Blush & Glow Beauty Salon",
  tagline: "Only for Ladies",
  description:
    "Blush & Glow is a premium ladies-only beauty salon in Johar Town, Lahore, specialising in bridal makeup, party makeup, hair styling, facials, hair colour and mehndi art.",
  url: "https://blushandglow.pk",
  phone: "0346 8011903",
  phoneIntl: "+923468011903",
  whatsapp: "923468011903",
  email: "hello@blushandglow.pk",
  address: {
    line1: "222 Block E2",
    line2: "Johar Town",
    city: "Lahore",
    region: "Punjab",
    country: "Pakistan",
    postalCode: "54782",
    full: "222 Block E2, Johar Town, Lahore, Pakistan",
  },
  hours: [
    { day: "Monday – Saturday", time: "11:00 AM – 9:00 PM" },
    { day: "Sunday", time: "By Appointment Only" },
  ],
  social: {
    instagram: "https://www.instagram.com/blushandglow.salon",
    facebook: "https://www.facebook.com/blushandglow.salon",
    pinterest: "https://www.pinterest.com/blushandglowsalon",
  },
  mapEmbed:
    "https://www.google.com/maps?q=222+Block+E2+Johar+Town+Lahore&output=embed",
};

export type ServiceCategory = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  shortDescription: string;
  description: string[];
  features: string[];
  keywords: string[];
  images: string[];
  icon: "sparkles" | "gem" | "droplet" | "scissors" | "wand" | "palette" | "flower";
};

export const services: ServiceCategory[] = [
  {
    slug: "bridal-makeup",
    name: "Bridal Makeup",
    shortName: "Bridal",
    tagline: "Your dream bridal look, flawlessly done",
    shortDescription:
      "Full bridal glam for Baraat, Walima, Mehndi & Nikkah with long-lasting, HD-finish makeup tailored to you.",
    description: [
      "Your wedding day deserves a look that feels unmistakably you — soft, radiant and camera-ready from the first pose to the last dance. At Blush & Glow, our bridal artists take the time to understand your skin tone, outfit and the mood of each event before designing a look that lasts through every ritual.",
      "We use premium, long-wear, sweat and humidity resistant products suited to Lahore's weather, so your makeup stays fresh through Mehndi, Baraat, Walima and Valima without touch-ups. A complimentary trial session is available so we get every detail right before the big day.",
    ],
    features: [
      "Complimentary pre-wedding trial session",
      "HD & airbrush makeup options",
      "Long-wear, sweat & humidity-proof finish",
      "Hairstyling & draping included",
      "False lashes & premium skincare prep",
      "On-site touch-up kit for the full event",
    ],
    keywords: [
      "bridal makeup Lahore",
      "bridal makeup artist Johar Town",
      "wedding makeup Lahore",
      "HD bridal makeup",
      "walima makeup Lahore",
      "baraat makeup artist",
    ],
    images: IMG.bridalMakeup,
    icon: "gem",
  },
  {
    slug: "party-makeup",
    name: "Party Makeup",
    shortName: "Party",
    tagline: "Glam that turns heads at every event",
    shortDescription:
      "Radiant, event-ready makeup for engagements, dholkis, birthdays and every night out worth dressing up for.",
    description: [
      "From dholki glam to a birthday glow-up, our party makeup is designed to photograph beautifully and last all night. We match your look to your outfit and the occasion — soft and dewy for daytime events, bold and sculpted for evening celebrations.",
      "Every party makeup session includes skin prep, contouring, eye makeup, and a setting routine built to survive dancing, dinners and photos.",
    ],
    features: [
      "Customised look for day or night events",
      "Contouring & highlighting",
      "Smokey, glam or natural eye options",
      "Long-lasting setting spray finish",
      "Hair styling add-on available",
      "Group & family booking discounts",
    ],
    keywords: [
      "party makeup Lahore",
      "engagement makeup artist",
      "dholki makeup Johar Town",
      "birthday makeup salon Lahore",
      "glam makeup Lahore",
    ],
    images: IMG.partyMakeup,
    icon: "sparkles",
  },
  {
    slug: "facial-skincare",
    name: "Facial & Skincare",
    shortName: "Facials",
    tagline: "Healthy, glowing skin starts here",
    shortDescription:
      "Deep-cleansing facials and therapeutic skincare treatments tailored to your skin type for a natural, lasting glow.",
    description: [
      "Our facial and skincare therapies go beyond a quick glow — we assess your skin type and concerns first, then choose the right treatment, from brightening and hydrating facials to deep-cleansing and anti-ageing therapy.",
      "Using dermatologically gentle products and steam-based deep cleansing, every session leaves your skin visibly refreshed, hydrated and prepped whether you're here for routine care or an upcoming event.",
    ],
    features: [
      "Skin analysis before every treatment",
      "Brightening, hydrating & anti-ageing facials",
      "Deep-cleansing with steam & extractions",
      "Whitening & de-tan therapy",
      "Gold, fruit & herbal facial options",
      "Pre-bridal skin therapy packages",
    ],
    keywords: [
      "facial Johar Town Lahore",
      "skincare salon Lahore",
      "whitening facial Lahore",
      "pre bridal facial package",
      "best facial salon Lahore",
    ],
    images: IMG.facialSkincare,
    icon: "droplet",
  },
  {
    slug: "hair-styling",
    name: "Hair Styling",
    shortName: "Styling",
    tagline: "Runway-ready hair for every occasion",
    shortDescription:
      "Elegant updos, curls, blow-drys and event styling crafted to complement your outfit and face shape.",
    description: [
      "Whether it's a sleek bridal updo, soft bridal curls, or a voluminous blow-dry for a party, our stylists design each look around your face shape, hair texture and outfit for a finish that photographs beautifully.",
      "We use heat-protectant products and long-hold techniques so your style stays intact through the entire event.",
    ],
    features: [
      "Bridal & party updos",
      "Curls, waves & sleek finishes",
      "Blow-dry & volumising styling",
      "Hair accessories & draping",
      "Trial styling sessions available",
      "Extensions & clip-in styling support",
    ],
    keywords: [
      "hair styling salon Lahore",
      "bridal hairstyling Johar Town",
      "hair updo salon Lahore",
      "party hairstyle Lahore",
    ],
    images: IMG.hairStyling,
    icon: "wand",
  },
  {
    slug: "hair-cutting",
    name: "Hair Cutting",
    shortName: "Haircuts",
    tagline: "Precision cuts that suit you perfectly",
    shortDescription:
      "Expert haircuts and trims — from classic layers to modern fringe cuts — designed around your face and lifestyle.",
    description: [
      "A great haircut is the foundation of every hairstyle. Our stylists consult with you on face shape, hair texture and maintenance style before cutting, whether you want a bold change or a simple trim to keep your ends healthy.",
      "We finish every cut with a wash, blow-dry and styling tips so you leave ready to recreate the look at home.",
    ],
    features: [
      "Personalised consultation before every cut",
      "Layers, fringes, bobs & trims",
      "Kids' haircuts available",
      "Wash & blow-dry finish included",
      "Split-end & maintenance trims",
      "Styling tips for at-home care",
    ],
    keywords: [
      "hair cutting salon Lahore",
      "haircut Johar Town Lahore",
      "ladies haircut salon",
      "hair trim Lahore salon",
    ],
    images: IMG.hairCutting,
    icon: "scissors",
  },
  {
    slug: "hair-colour",
    name: "Hair Colour",
    shortName: "Colour",
    tagline: "Rich, vibrant colour that lasts",
    shortDescription:
      "Global colour, highlights, balayage and root touch-ups using nourishing, ammonia-friendly formulas.",
    description: [
      "From a full colour transformation to subtle face-framing highlights, our colour specialists match tones to your skin undertone and personal style. We prioritise hair health, using nourishing formulas and post-colour treatments to keep hair soft and shiny.",
      "Popular options include global colour, balayage, highlights/lowlights, ombre and grey coverage root touch-ups.",
    ],
    features: [
      "Global colour & root touch-ups",
      "Highlights, lowlights & balayage",
      "Grey coverage solutions",
      "Ammonia-friendly formulas available",
      "Post-colour nourishing treatment",
      "Colour consultation before booking",
    ],
    keywords: [
      "hair colour salon Lahore",
      "highlights Johar Town Lahore",
      "balayage salon Lahore",
      "hair colouring Lahore salon",
    ],
    images: IMG.hairColour,
    icon: "palette",
  },
  {
    slug: "mehndi-art",
    name: "Mehndi Art",
    shortName: "Mehndi",
    tagline: "Intricate henna art for your special day",
    shortDescription:
      "Traditional and modern bridal mehndi designs, hand-drawn with fine detail for Mehndi functions and festivals.",
    description: [
      "Our mehndi artists specialise in intricate bridal designs — from traditional Pakistani and Arabic patterns to modern minimalist styles — using natural, skin-friendly henna that develops into a rich, deep stain.",
      "Bridal mehndi sessions are booked in advance to allow time for detailed hand and arm coverage; simpler designs for guests and Eid/festival mehndi are also available.",
    ],
    features: [
      "Bridal full-hand & arm mehndi",
      "Traditional, Arabic & modern designs",
      "Natural, skin-friendly henna",
      "Guest & family mehndi for events",
      "Eid & festival mehndi bookings",
      "Custom design consultation",
    ],
    keywords: [
      "mehndi artist Lahore",
      "bridal mehndi Johar Town",
      "henna artist Lahore salon",
      "mehndi designs Lahore booking",
    ],
    images: IMG.mehndiArt,
    icon: "flower",
  },
];

export type ServiceArea = {
  slug: string;
  name: string;
  blurb: string;
  description: string[];
  distance: string;
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: "johar-town",
    name: "Johar Town",
    blurb: "Our home turf — visit our Block E2 studio directly.",
    description: [
      "Blush & Glow is proudly based in Block E2, Johar Town, making us the go-to ladies-only salon for bridal makeup, facials, hair styling and mehndi right in the neighbourhood.",
      "Residents of Johar Town can simply walk in or book ahead for bridal trials, party makeup and skincare appointments at our studio.",
    ],
    distance: "Located right here in Johar Town",
  },
  {
    slug: "wapda-town",
    name: "Wapda Town",
    blurb: "A short drive from Wapda Town to our Johar Town studio.",
    description: [
      "We welcome brides and clients from Wapda Town for bridal makeup, hair colour, facials and mehndi art. Our Block E2, Johar Town studio is just minutes away via Raiwind Road / Barki Road links.",
      "Book your bridal trial or party makeup slot in advance — we regularly serve clients travelling from Wapda Town Phase 1 and Phase 2.",
    ],
    distance: "Approx. 10–15 minutes from Wapda Town",
  },
  {
    slug: "township",
    name: "Township",
    blurb: "One of our most popular service areas for bridal bookings.",
    description: [
      "Many of our regular bridal and party makeup clients come from Township, just next door to Johar Town. Our studio at Block E2 is an easy, quick visit for trials, facials and mehndi appointments.",
      "We recommend booking bridal trial sessions early, especially during wedding season, for clients travelling from Township.",
    ],
    distance: "Approx. 5–10 minutes from Township",
  },
  {
    slug: "bor-society",
    name: "BOR Society",
    blurb: "Convenient access for BOR Society residents.",
    description: [
      "Clients from BOR Society regularly visit Blush & Glow for hair styling, hair cutting, colour and skincare therapy. Our Johar Town studio is a short, comfortable drive away.",
      "We're happy to help you plan appointment timing around your event schedule if you're travelling from BOR Society.",
    ],
    distance: "Approx. 10 minutes from BOR Society",
  },
  {
    slug: "iqbal-town",
    name: "Iqbal Town",
    blurb: "A favourite salon for Iqbal Town brides and families.",
    description: [
      "Iqbal Town clients frequently choose Blush & Glow for bridal makeup packages, party glam and mehndi art, thanks to our easy access from Iqbal Town via Wahdat Road.",
      "We recommend early booking during peak wedding season for bridal trial slots.",
    ],
    distance: "Approx. 10–15 minutes from Iqbal Town",
  },
  {
    slug: "pcsir-society",
    name: "PCSIR Society",
    blurb: "Trusted by families across PCSIR Society 1 & 2.",
    description: [
      "PCSIR Society residents are just minutes from our Block E2, Johar Town studio, making Blush & Glow a convenient choice for facials, haircuts, colour and bridal services.",
      "Walk-ins are welcome, though we recommend booking ahead for bridal and party makeup appointments.",
    ],
    distance: "Approx. 5–10 minutes from PCSIR Society",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  image: string;
  date: string;
  category: string;
  readTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "bridal-makeup-trends-2026",
    title: "Bridal Makeup Trends Every Lahore Bride Should Know in 2026",
    excerpt:
      "From soft draped eyes to dewy, luminous skin — here are the bridal makeup looks our clients are loving this wedding season.",
    content: [
      "Wedding season in Lahore brings a fresh wave of bridal beauty trends every year, and 2026 is all about enhancing natural features rather than masking them. Dewy, luminous skin has firmly replaced heavy matte bases, with lightweight, buildable coverage taking centre stage for Walima and Nikkah looks.",
      "Soft, draped eye makeup in warm copper and rose-gold tones continues to dominate Mehndi and Baraat looks, paired with fluttery lashes and a soft-glam finish. For skin, pre-bridal facial therapy in the weeks leading up to the wedding makes all the difference in how makeup sits and photographs.",
      "Whatever look you choose, the golden rule stays the same: book your bridal trial early. It gives our artists time to perfect your colours, finish and longevity — especially important for outdoor Baraats in Lahore's weather.",
    ],
    image: IMG.bridalMakeup[1],
    date: "2026-01-12",
    category: "Bridal",
    readTime: "4 min read",
  },
  {
    slug: "pre-wedding-skincare-checklist",
    title: "The Ultimate Pre-Wedding Skincare Checklist",
    excerpt:
      "Get glowing, camera-ready skin before your big day with this simple facial and skincare timeline.",
    content: [
      "Great bridal makeup starts with well-prepped skin. We recommend beginning a facial and skincare routine at least 6–8 weeks before your wedding for the best results.",
      "Two months out, start with a deep-cleansing facial to clear congestion, followed by regular hydrating facials every 2–3 weeks. In the final week, switch to a gentle brightening facial only — avoid any aggressive treatments right before the event to prevent redness or sensitivity.",
      "Don't forget hydration and sleep — no facial can fully replace the glow that comes from good rest and water intake in the weeks before your wedding.",
    ],
    image: IMG.facialSkincare[0],
    date: "2025-12-20",
    category: "Skincare",
    readTime: "3 min read",
  },
  {
    slug: "mehndi-design-ideas-for-brides",
    title: "5 Mehndi Design Ideas for Every Kind of Bride",
    excerpt:
      "Traditional, Arabic, minimal or fusion — explore mehndi styles to inspire your bridal look.",
    content: [
      "Mehndi is one of the most personal parts of bridal beauty, and there's a design style for every bride. Traditional Pakistani mehndi features dense floral patterns covering the full hand and forearm — a timeless choice for Baraat and Mehndi functions.",
      "Arabic mehndi, with its bold, flowing floral vines and negative space, suits brides who want a striking yet quicker-to-apply design. Minimalist mehndi, with fine linework and small motifs, has become increasingly popular for Walima or smaller events.",
      "Fusion designs that blend traditional motifs with modern geometric elements are also trending. Whatever you choose, book your bridal mehndi artist in advance — detailed full-hand designs can take several hours.",
    ],
    image: IMG.mehndiArt[0],
    date: "2025-12-05",
    category: "Mehndi",
    readTime: "4 min read",
  },
  {
    slug: "hair-care-tips-lahore-weather",
    title: "Hair Care Tips for Lahore's Weather (Summer & Smog Season)",
    excerpt:
      "Keep your hair healthy through Lahore's heat, humidity and smog with these salon-recommended tips.",
    content: [
      "Lahore's climate — hot, humid summers and dusty, polluted winters — can take a toll on hair health. Regular deep-conditioning treatments help combat dryness and frizz caused by heat and pollution exposure.",
      "If you colour your hair, use sulphate-free shampoo to protect vibrancy, and schedule root touch-ups every 4–6 weeks. For styling, always apply a heat-protectant before blow-drying or straightening.",
      "Trimming split ends every 8–10 weeks keeps hair looking healthy between bigger cuts or colour sessions.",
    ],
    image: IMG.hairColour[2],
    date: "2025-11-18",
    category: "Hair Care",
    readTime: "3 min read",
  },
  {
    slug: "party-makeup-mistakes-to-avoid",
    title: "5 Party Makeup Mistakes to Avoid Before Your Next Event",
    excerpt:
      "Simple fixes for the most common party makeup slip-ups we see — and how our artists get it right.",
    content: [
      "Skipping skin prep is one of the most common mistakes — makeup applied on dry or uncleansed skin never sits or lasts as well. A quick cleanse, moisturiser and primer routine makes a huge difference.",
      "Another common issue is choosing a foundation shade under artificial store lighting. Our artists always colour-match under natural or event-similar lighting to avoid an oxidised or mismatched finish in photos.",
      "Finally, skipping setting spray is a mistake in Lahore's humidity — always lock your look in for an event that involves dancing, hugging relatives and hours of photos.",
    ],
    image: IMG.partyMakeup[2],
    date: "2025-10-30",
    category: "Party Makeup",
    readTime: "3 min read",
  },
  {
    slug: "choosing-hairstyle-for-face-shape",
    title: "How to Choose the Right Hairstyle for Your Face Shape",
    excerpt:
      "A quick guide to flattering haircuts and styles based on round, oval, square and heart face shapes.",
    content: [
      "Round faces are flattered by layers that add height and length, avoiding blunt chin-length cuts that widen the face. Oval faces are the most versatile and suit nearly any cut, from blunt bobs to long layers.",
      "Square faces benefit from soft waves or side-swept fringes that soften strong jawlines, while heart-shaped faces look great with chin-length layers or styles with volume at the jaw to balance a narrower chin.",
      "Not sure what suits you? Our stylists offer a quick consultation before every haircut to recommend the most flattering shape for your features and hair texture.",
    ],
    image: IMG.hairCutting[1],
    date: "2025-10-10",
    category: "Hair Styling",
    readTime: "3 min read",
  },
];

export type FAQ = { question: string; answer: string };

export const faqs: FAQ[] = [
  {
    question: "Is Blush & Glow really only for ladies?",
    answer:
      "Yes — Blush & Glow is a strictly ladies-only salon. Our space, staff and services are dedicated entirely to women, so you can relax in complete privacy and comfort.",
  },
  {
    question: "Do you offer a bridal makeup trial?",
    answer:
      "Yes, we offer a complimentary trial session for booked bridal packages. We recommend scheduling your trial 2–3 weeks before the wedding so we can perfect your look together.",
  },
  {
    question: "How far in advance should I book for a wedding?",
    answer:
      "For bridal makeup, hair styling and mehndi, we recommend booking 4–6 weeks in advance, especially during peak wedding season. Party makeup and salon services can usually be booked a few days ahead.",
  },
  {
    question: "Which areas of Lahore do you serve?",
    answer:
      "Our studio is based in Block E2, Johar Town, and we regularly welcome clients from Wapda Town, Township, BOR Society, Iqbal Town and PCSIR Society. See our Service Areas page for details.",
  },
  {
    question: "What products do you use?",
    answer:
      "We use premium, long-wear, dermatologically-tested makeup and skincare products suited to Lahore's climate, along with natural, skin-friendly henna for mehndi services.",
  },
  {
    question: "Can I book multiple services in one appointment?",
    answer:
      "Absolutely — many clients combine facial, hair styling and makeup in a single visit, especially for bridal or party packages. Let us know your full requirements when booking so we can plan your appointment time accordingly.",
  },
  {
    question: "Do you provide group bookings for Mehndi or Baraat functions?",
    answer:
      "Yes, we accommodate group bookings for brides, family members and bridesmaids. Please contact us in advance so we can arrange enough artists and time slots for your event.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book directly through the appointment form on our website, message us on WhatsApp or Instagram, or call us at 0346 8011903.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We kindly request at least 24 hours' notice for cancellations or rescheduling, especially for bridal and event bookings, so we can accommodate other clients.",
  },
  {
    question: "Is parking available at the salon?",
    answer:
      "Yes, convenient parking is available near our Block E2, Johar Town studio for clients driving in.",
  },
];

export type Testimonial = {
  name: string;
  area: string;
  quote: string;
  avatar: string;
  service: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ayesha K.",
    area: "Johar Town",
    quote:
      "My bridal makeup stayed perfect from the Nikkah to the last dance at Walima. The trial session made all the difference — exactly the soft glam look I wanted.",
    avatar: IMG.avatars[0],
    service: "Bridal Makeup",
  },
  {
    name: "Sana M.",
    area: "Township",
    quote:
      "Best facial I've had in Lahore. My skin genuinely looked brighter for weeks after my pre-bridal package. The whole team is so warm and professional.",
    avatar: IMG.avatars[1],
    service: "Facial & Skincare",
  },
  {
    name: "Hina R.",
    area: "Wapda Town",
    quote:
      "Booked party makeup for my sister's dholki and it photographed beautifully. Loved that it's a ladies-only space — so relaxed and comfortable.",
    avatar: IMG.avatars[2],
    service: "Party Makeup",
  },
  {
    name: "Mahnoor A.",
    area: "Iqbal Town",
    quote:
      "My bridal mehndi design was so intricate and detailed, exactly what I showed them in reference photos. Worth every minute of the sitting.",
    avatar: IMG.avatars[3],
    service: "Mehndi Art",
  },
  {
    name: "Zara F.",
    area: "PCSIR Society",
    quote:
      "Got balayage done here and my hair has never looked healthier. They really take the time to understand what you want before starting.",
    avatar: IMG.avatars[4],
    service: "Hair Colour",
  },
];

export const stats = [
  { label: "Years of Experience", value: 8, suffix: "+" },
  { label: "Happy Clients", value: 3500, suffix: "+" },
  { label: "Bridal Looks Created", value: 900, suffix: "+" },
  { label: "Ladies-Only Comfort", value: 100, suffix: "%" },
];
