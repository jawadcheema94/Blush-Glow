import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import AnimatedHeading from "@/components/AnimatedHeading";
import BookingForm from "@/components/BookingForm";
import ServiceCard from "@/components/ServiceCard";
import { iconMap } from "@/components/icon-map";
import { services, serviceAreas, site } from "@/lib/site-config";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.name,
    description: service.shortDescription,
    keywords: service.keywords,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} | ${site.fullName}`,
      description: service.shortDescription,
      images: [{ url: service.images[0] }],
    },
  };
}

export default async function ServiceDetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon];
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.shortDescription,
    provider: {
      "@type": "BeautySalon",
      name: site.fullName,
      telephone: site.phoneIntl,
      address: site.address.full,
    },
    areaServed: serviceAreas.map((a) => a.name),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden bg-blush-light pt-14 pb-16 md:pt-20 md:pb-24">
        <div className="grain-overlay" />
        <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-rose-soft/25 blur-3xl" />

        <div className="container-custom relative grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <nav className="flex items-center flex-wrap gap-1.5 text-xs text-charcoal-soft mb-6">
              <Link href="/" className="hover:text-rose transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/services" className="hover:text-rose transition-colors">
                Services
              </Link>
              <span>/</span>
              <span className="text-rose-dark">{service.name}</span>
            </nav>

            <div className="w-12 h-12 rounded-full bg-rose text-white flex items-center justify-center mb-5">
              <Icon size={22} />
            </div>

            <span className="font-script text-2xl text-rose block mb-1">
              {service.tagline}
            </span>
            <AnimatedHeading
              text={service.name}
              as="h1"
              scrollTrigger={false}
              className="font-heading text-4xl md:text-6xl text-charcoal"
            />
            <p className="mt-5 text-charcoal-soft leading-relaxed max-w-lg">
              {service.shortDescription}
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-rose px-7 py-3.5 text-sm uppercase tracking-wider text-white font-medium hover:bg-rose-dark transition-colors shadow-md"
            >
              Book This Service <ArrowRight size={16} />
            </Link>
          </div>

          <Reveal scale className="relative h-[380px] md:h-[460px]">
            <div className="absolute top-0 right-0 w-[70%] h-[75%] rounded-[2rem] overflow-hidden border-[6px] border-white shadow-xl">
              <Image
                src={service.images[0]}
                alt={`${service.name} at Blush & Glow Beauty Salon Lahore`}
                fill
                priority
                sizes="(max-width: 768px) 70vw, 35vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-[55%] h-[50%] rounded-[2rem] overflow-hidden border-[6px] border-white shadow-xl">
              <Image
                src={service.images[1]}
                alt={`${service.name} detail at Blush & Glow`}
                fill
                sizes="(max-width: 768px) 55vw, 28vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-custom grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="font-heading text-2xl md:text-3xl text-charcoal">
                About This Service
              </h2>
              {service.description.map((p, i) => (
                <p key={i} className="mt-4 text-charcoal-soft leading-relaxed">
                  {p}
                </p>
              ))}
            </Reveal>

            <Reveal delay={0.1} className="mt-10">
              <h3 className="font-heading text-xl text-charcoal mb-4">What&apos;s Included</h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-charcoal-soft">
                    <Check size={16} className="text-rose shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15} className="mt-10 grid grid-cols-2 gap-4">
              {service.images.slice(2).map((img, i) => (
                <div key={i} className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src={img}
                    alt={`${service.name} gallery image`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.1} className="bg-blush-light rounded-2xl border border-blush p-6 h-fit lg:sticky lg:top-28">
            <h3 className="font-heading text-xl text-charcoal mb-1">Quick Booking</h3>
            <p className="text-sm text-charcoal-soft mb-5">
              Reserve your {service.name.toLowerCase()} appointment — we&apos;ll confirm on
              WhatsApp.
            </p>
            <BookingForm className="grid-cols-1" />
            <div className="mt-6 pt-6 border-t border-blush flex items-start gap-2 text-sm text-charcoal-soft">
              <MapPin size={16} className="text-rose shrink-0 mt-0.5" />
              {site.address.full}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-blush-light relative overflow-hidden">
        <div className="grain-overlay" />
        <div className="container-custom relative">
          <Reveal className="text-center max-w-xl mx-auto mb-10">
            <span className="font-script text-2xl text-rose">You May Also Like</span>
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal mt-1">
              Other Popular Services
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
