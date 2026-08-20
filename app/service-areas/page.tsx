import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ServiceAreaCard from "@/components/ServiceAreaCard";
import { serviceAreas, site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Service Areas in Lahore",
  description:
    "Blush & Glow Beauty Salon serves Johar Town, Wapda Town, Township, BOR Society, Iqbal Town and PCSIR Society from our studio at 222 Block E2, Johar Town, Lahore.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Nearby & Convenient"
        title="Areas We Serve"
        description={`Our studio at ${site.address.full} is a quick, easy visit from these Lahore neighbourhoods.`}
        crumbs={[{ label: "Home", href: "/" }, { label: "Service Areas" }]}
      />

      <section className="section-padding bg-cream">
        <div className="container-custom grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceAreas.map((area, i) => (
            <Reveal key={area.slug} delay={(i % 3) * 0.08}>
              <ServiceAreaCard area={area} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-padding bg-blush-light">
        <div className="container-custom">
          <Reveal className="rounded-2xl overflow-hidden border border-blush shadow-sm h-[420px]">
            <iframe
              src={site.mapEmbed}
              width="100%"
              height="100%"
              loading="lazy"
              title="Blush & Glow Beauty Salon location map"
              className="border-0"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
