import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, Sparkles, Heart, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import AnimatedHeading from "@/components/AnimatedHeading";
import StatsCounter from "@/components/StatsCounter";
import Testimonials from "@/components/Testimonials";
import { IMG } from "@/lib/images";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Blush & Glow — a ladies-only beauty salon in Johar Town, Lahore, dedicated to bridal makeup, hair, skincare and mehndi artistry.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: ShieldCheck,
    title: "Privacy First",
    text: "A completely ladies-only environment where you can be yourself without exception.",
  },
  {
    icon: Award,
    title: "Skilled Artistry",
    text: "Our team trains continuously in the latest bridal and beauty techniques.",
  },
  {
    icon: Sparkles,
    title: "Quality Products",
    text: "We use trusted, long-wear products suited to your skin and Lahore's climate.",
  },
  {
    icon: Heart,
    title: "Genuine Care",
    text: "Every client is treated with warmth, patience and attention to detail.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="About Blush & Glow"
        description="A ladies-only beauty studio built on comfort, craft and care — proudly serving Johar Town, Lahore."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="section-padding bg-cream">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <Reveal className="relative h-[420px] rounded-[2rem] overflow-hidden shadow-lg order-2 lg:order-1">
            <Image
              src={IMG.salonInterior3}
              alt="Inside Blush & Glow Beauty Salon, Johar Town, Lahore"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Reveal>
          <div className="order-1 lg:order-2">
            <span className="font-script text-2xl text-rose">Why Blush &amp; Glow</span>
            <AnimatedHeading
              text="A Space Made Only for You"
              as="h2"
              className="font-heading text-3xl md:text-[2.75rem] leading-tight text-charcoal mt-1"
            />
            <p className="mt-5 text-charcoal-soft leading-relaxed">
              Blush &amp; Glow began with a simple idea — every woman deserves a beauty
              space that feels private, warm and genuinely her own. From our studio in
              Block E2, Johar Town, we&apos;ve grown into a trusted name for bridal makeup,
              hair styling, skincare and mehndi art across Lahore.
            </p>
            <p className="mt-4 text-charcoal-soft leading-relaxed">
              As a strictly ladies-only salon, our team focuses entirely on making you
              feel comfortable, heard and beautifully taken care of — whether you&apos;re
              here for your wedding day or a well-deserved self-care break.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-rose px-7 py-3.5 text-sm uppercase tracking-wider text-white font-medium hover:bg-rose-dark transition-colors shadow-sm"
            >
              Book a Visit <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-blush-light relative overflow-hidden">
        <div className="grain-overlay" />
        <div className="container-custom relative">
          <Reveal className="text-center max-w-xl mx-auto mb-14">
            <span className="font-script text-2xl text-rose">What We Stand For</span>
            <h2 className="font-heading text-3xl md:text-5xl text-charcoal mt-1">
              Our Values
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08} className="bg-white rounded-2xl border border-blush p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-blush-light flex items-center justify-center text-rose-dark mx-auto mb-4">
                  <v.icon size={22} />
                </div>
                <h3 className="font-heading text-lg text-charcoal">{v.title}</h3>
                <p className="mt-2 text-sm text-charcoal-soft leading-relaxed">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal relative overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-1"
          style={{
            background:
              "linear-gradient(90deg, var(--color-gold), var(--color-rose), var(--color-gold))",
          }}
        />
        <div className="container-custom">
          <Reveal>
            <StatsCounter variant="dark" />
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-custom grid lg:grid-cols-2 gap-4">
          <Reveal className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
            <Image
              src={IMG.salonInterior4}
              alt="Blush & Glow salon space"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.1} className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
            <Image
              src={IMG.bridalMakeup[2]}
              alt="Bridal makeup session at Blush & Glow"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-blush-light relative overflow-hidden">
        <div className="grain-overlay" />
        <div className="container-custom relative">
          <Reveal className="text-center max-w-xl mx-auto mb-4">
            <span className="font-script text-2xl text-rose">Client Love</span>
            <h2 className="font-heading text-3xl md:text-5xl text-charcoal mt-1">
              Stories From Our Clients
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Testimonials />
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-cream text-center">
        <div className="container-custom max-w-2xl">
          <Reveal>
            <span className="font-script text-3xl text-rose">Ready to Glow?</span>
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal mt-2">
              Visit Us at {site.address.full}
            </h2>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-rose px-8 py-4 text-sm uppercase tracking-wider text-white font-medium hover:bg-rose-dark transition-colors shadow-md"
            >
              Book Your Appointment <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
