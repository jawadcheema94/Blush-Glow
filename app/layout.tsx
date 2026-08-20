import type { Metadata } from "next";
import { Playfair_Display, Jost, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/lib/site-config";
import { IMG } from "@/lib/images";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const script = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.fullName} | Ladies Beauty Salon in Johar Town, Lahore`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "beauty salon Lahore",
    "ladies salon Johar Town",
    "bridal makeup Lahore",
    "party makeup salon Lahore",
    "facial salon Johar Town",
    "mehndi artist Lahore",
    "hair salon Johar Town Lahore",
    "Blush and Glow salon",
  ],
  authors: [{ name: site.fullName }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: site.url,
    siteName: site.fullName,
    title: `${site.fullName} | Ladies Beauty Salon in Johar Town, Lahore`,
    description: site.description,
    images: [
      {
        url: IMG.heroBride,
        width: 1200,
        height: 630,
        alt: site.fullName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.fullName} | Ladies Beauty Salon in Johar Town, Lahore`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: site.fullName,
    image: IMG.heroBride,
    "@id": site.url,
    url: site.url,
    telephone: site.phoneIntl,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.line2,
      addressRegion: site.address.city,
      postalCode: site.address.postalCode,
      addressCountry: "PK",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "11:00",
        closes: "21:00",
      },
    ],
    sameAs: [site.social.instagram, site.social.facebook, site.social.pinterest],
    audience: {
      "@type": "PeopleAudience",
      suggestedGender: "female",
    },
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${jost.variable} ${script.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-cream text-charcoal">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
