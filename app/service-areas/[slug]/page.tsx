import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin, Clock, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import AnimatedHeading from "@/components/AnimatedHeading";
import ServiceCard from "@/components/ServiceCard";
import BookingForm from "@/components/BookingForm";
import { serviceAreas, services, site } from "@/lib/site-config";
import { IMG } from "@/lib/images";

export function generateStaticParams() {
  return serviceAreas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const area = serviceAreas.find((a) => a.slug === slug);
  if (!area) return {};

  return {
    title: `Beauty Salon Near ${area.name}, Lahore`,
    description: `Blush & Glow Beauty Salon proudly serves ${area.name}, Lahore with bridal makeup, party makeup, facials, hair styling and mehndi art. ${area.distance}.`,
    alternates: { canonical: `/service-areas/${area.slug}` },
  };
}

export default async function ServiceAreaPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const area = serviceAreas.find((a) => a.slug === slug);
  if (!area) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: site.fullName,
    areaServed: area.name,
    address: site.address.full,
    telephone: site.phoneIntl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden bg-blush-light pt-14 pb-16 md:pt-20 md:pb-20">
        <div className="grain-overlay" />
        <div className="container-custom relative">
          <nav className="flex items-center flex-wrap gap-1.5 text-xs text-charcoal-soft mb-6">
            <Link href="/" className="hover:text-rose transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/service-areas" className="hover:text-rose transition-colors">
              Service Areas
            </Link>
            <span>/</span>
            <span className="text-rose-dark">{area.name}</span>
          </nav>
          <span className="font-script text-2xl text-rose block mb-1">
            Beauty Salon Near
          </span>
          <AnimatedHeading
            text={area.name}
            as="h1"
            scrollTrigger={false}
            className="font-heading text-4xl md:text-6xl text-charcoal max-w-2xl"
          />
          <p className="mt-5 text-charcoal-soft max-w-xl leading-relaxed">
            {area.description[0]}
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-custom grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Reveal className="relative h-72 md:h-96 rounded-2xl overflow-hidden mb-8">
              <Image
                src={IMG.salonInterior2}
                alt={`Blush & Glow Beauty Salon serving ${area.name}, Lahore`}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal delay={0.1}>
              {area.description.map((p, i) => (
                <p key={i} className="text-charcoal-soft leading-relaxed mt-4 first:mt-0">
                  {p}
                </p>
              ))}
            </Reveal>

            <Reveal delay={0.15} className="mt-10">
              <h2 className="font-heading text-2xl text-charcoal mb-5">
                Popular Services for {area.name} Clients
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {services.slice(0, 4).map((s) => (
                  <ServiceCard key={s.slug} service={s} />
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="bg-blush-light rounded-2xl border border-blush p-6 h-fit lg:sticky lg:top-28">
            <h3 className="font-heading text-xl text-charcoal mb-4">Visit Us</h3>
            <ul className="space-y-4 text-sm text-charcoal-soft">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-rose shrink-0 mt-0.5" />
                {site.address.full}
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={16} className="text-rose shrink-0 mt-0.5" />
                <span>
                  {site.hours.map((h) => (
                    <span key={h.day} className="block">
                      {h.day}: {h.time}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="text-rose shrink-0 mt-0.5" />
                <a href={`tel:${site.phoneIntl}`} className="hover:text-rose-dark">
                  {site.phone}
                </a>
              </li>
              <li className="text-rose-dark font-medium">{area.distance}</li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center gap-2 w-full rounded-full bg-rose px-5 py-3 text-xs uppercase tracking-wider text-white font-medium hover:bg-rose-dark transition-colors"
            >
              Book Appointment <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-blush-light relative overflow-hidden">
        <div className="grain-overlay" />
        <div className="container-custom relative grid lg:grid-cols-5 gap-10 items-start">
          <Reveal className="lg:col-span-2">
            <span className="font-script text-2xl text-rose">Book From {area.name}</span>
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal mt-1">
              Reserve Your Appointment
            </h2>
            <p className="mt-4 text-charcoal-soft leading-relaxed">
              Fill in the form and we&apos;ll confirm your slot over WhatsApp.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-3 bg-white rounded-2xl border border-blush shadow-sm p-6 md:p-9">
            <BookingForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
