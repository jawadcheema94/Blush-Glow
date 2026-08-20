import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import BookingForm from "@/components/BookingForm";
import { services } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Blush & Glow's full range of ladies-only beauty services in Johar Town, Lahore — bridal makeup, party makeup, facials, hair styling, hair cutting, hair colour and mehndi art.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        title="Our Beauty Services"
        description="Every service at Blush & Glow is delivered in a private, ladies-only setting — tailored to your skin, hair and the occasion."
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="section-padding bg-cream">
        <div className="container-custom grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.08}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-padding bg-blush-light relative overflow-hidden">
        <div className="grain-overlay" />
        <div className="container-custom relative grid lg:grid-cols-5 gap-10 items-start">
          <Reveal className="lg:col-span-2">
            <span className="font-script text-2xl text-rose">Not Sure Where to Start?</span>
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal mt-1">
              Let&apos;s Plan Your Visit
            </h2>
            <p className="mt-4 text-charcoal-soft leading-relaxed">
              Tell us what you need and we&apos;ll help you combine the right services for
              your event, budget and time. Reach out and our team will guide you.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-rose-dark font-medium text-sm uppercase tracking-wider hover:gap-3 transition-all"
            >
              Contact Us <ArrowRight size={15} />
            </Link>
          </Reveal>
          <Reveal
            delay={0.15}
            className="lg:col-span-3 bg-white rounded-2xl border border-blush shadow-sm p-6 md:p-9"
          >
            <BookingForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
