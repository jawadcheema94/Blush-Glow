import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse our gallery of bridal makeup, party makeup, hair styling, facials, hair colour and mehndi art from Blush & Glow Beauty Salon, Johar Town, Lahore.",
  alternates: { canonical: "/gallery" },
};

const galleryImages = services.flatMap((s) =>
  s.images.map((src) => ({ src, alt: `${s.name} at Blush & Glow Beauty Salon`, category: s.name }))
);

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Portfolio"
        title="Gallery"
        description="A look at the bridal, beauty and mehndi artistry created at Blush & Glow."
        crumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />

      <section className="section-padding bg-cream">
        <div className="container-custom columns-2 md:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <Reveal key={i} delay={(i % 6) * 0.05} className="break-inside-avoid">
              <div className="relative w-full rounded-2xl overflow-hidden group aspect-[4/5]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-cream text-xs uppercase tracking-wider">
                    {img.category}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
