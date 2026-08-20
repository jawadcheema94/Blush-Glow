import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Heart,
  Award,
  MapPin,
  Calendar,
} from "lucide-react";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import AnimatedHeading from "@/components/AnimatedHeading";
import ServiceCard from "@/components/ServiceCard";
import ServiceAreaCard from "@/components/ServiceAreaCard";
import StatsCounter from "@/components/StatsCounter";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";
import {
  services,
  serviceAreas,
  blogPosts,
  faqs,
  site,
} from "@/lib/site-config";
import { IMG } from "@/lib/images";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Ladies Beauty Salon in Johar Town, Lahore",
  description:
    "Blush & Glow is a ladies-only beauty salon in Block E2, Johar Town, Lahore offering bridal makeup, party makeup, facials, hair styling, hair colour, haircuts and bridal mehndi.",
  alternates: { canonical: "/" },
};

const whyUs = [
  {
    icon: ShieldCheck,
    title: "Ladies-Only Privacy",
    text: "A fully private space reserved exclusively for women, so you can relax completely.",
  },
  {
    icon: Award,
    title: "Expert Artists",
    text: "Trained bridal and beauty specialists with years of hands-on salon experience.",
  },
  {
    icon: Sparkles,
    title: "Premium Products",
    text: "Long-wear, skin-friendly products chosen for Lahore's climate and your comfort.",
  },
  {
    icon: Heart,
    title: "Personalised Care",
    text: "Every look is designed around you — your skin tone, outfit and the occasion.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />

      {/* About strip */}
      <section className="section-padding bg-cream">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <Reveal className="relative">
            <div className="relative rounded-[2rem] overflow-hidden h-[420px] shadow-lg">
              <Image
                src={IMG.salonInterior1}
                alt="Blush & Glow Beauty Salon interior in Johar Town, Lahore"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-6 md:-right-10 bg-white rounded-2xl shadow-xl border border-blush p-5 max-w-[220px]">
              <span className="font-script text-2xl text-rose block">Only for Ladies</span>
              <p className="text-xs text-charcoal-soft mt-1.5 leading-relaxed">
                A private, comfortable retreat — for you, exactly as you are.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="font-script text-2xl text-rose">Welcome to</span>
            <AnimatedHeading
              text="Blush & Glow Beauty Salon"
              as="h2"
              className="font-heading text-3xl md:text-[2.75rem] leading-tight text-charcoal mt-1"
            />
            <p className="mt-5 text-charcoal-soft leading-relaxed">
              Tucked in Block E2, Johar Town, Blush &amp; Glow is a ladies-only beauty
              destination built around comfort, artistry and genuine care. From bridal
              transformations to everyday self-care, our team blends skilled technique
              with premium products for results that feel as good as they look.
            </p>
            <div className="grid sm:grid-cols-2 gap-5 mt-8">
              {whyUs.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-blush-light flex items-center justify-center text-rose-dark shrink-0">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal text-sm">{item.title}</p>
                    <p className="text-xs text-charcoal-soft mt-1 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-rose-dark font-medium text-sm uppercase tracking-wider hover:gap-3 transition-all"
            >
              More About Us <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-blush-light relative overflow-hidden">
        <div className="grain-overlay" />
        <div className="container-custom relative">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="font-script text-2xl text-rose">What We Offer</span>
            <AnimatedHeading
              text="Beauty Services Crafted for You"
              as="h2"
              className="font-heading text-3xl md:text-5xl text-charcoal mt-1"
            />
            <p className="mt-4 text-charcoal-soft">
              From bridal transformations to everyday glow-ups, explore our full range of
              ladies-only beauty services.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 0.08}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-charcoal relative overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-1"
          style={{
            background:
              "linear-gradient(90deg, var(--color-gold), var(--color-rose), var(--color-gold))",
          }}
        />
        <div className="container-custom">
          <Reveal className="text-center max-w-xl mx-auto mb-14">
            <span className="font-script text-2xl text-rose-soft">Trusted By Many</span>
            <h2 className="font-heading text-3xl md:text-4xl text-cream mt-1">
              Numbers That Reflect Our Care
            </h2>
          </Reveal>
          <Reveal>
            <StatsCounter variant="dark" />
          </Reveal>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <span className="font-script text-2xl text-rose">Our Work</span>
              <AnimatedHeading
                text="A Glimpse of the Glow"
                as="h2"
                className="font-heading text-3xl md:text-5xl text-charcoal mt-1"
              />
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-rose-dark font-medium text-sm uppercase tracking-wider hover:gap-3 transition-all shrink-0"
            >
              View Full Gallery <ArrowRight size={15} />
            </Link>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[160px] md:auto-rows-[200px]">
            {[
              { src: IMG.bridalMakeup[0], span: "row-span-2" },
              { src: IMG.facialSkincare[1], span: "" },
              { src: IMG.mehndiArt[1], span: "" },
              { src: IMG.hairStyling[2], span: "row-span-2" },
              { src: IMG.partyMakeup[0], span: "" },
              { src: IMG.hairColour[0], span: "" },
            ].map((img, i) => (
              <Reveal key={i} delay={(i % 4) * 0.06} className={img.span}>
                <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                  <Image
                    src={img.src}
                    alt="Blush & Glow Beauty Salon gallery"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-blush-light relative overflow-hidden">
        <div className="grain-overlay" />
        <div className="container-custom relative">
          <Reveal className="text-center max-w-xl mx-auto mb-4">
            <span className="font-script text-2xl text-rose">Client Love</span>
            <h2 className="font-heading text-3xl md:text-5xl text-charcoal mt-1">
              What Our Clients Say
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Testimonials />
          </Reveal>
        </div>
      </section>

      {/* Service areas preview */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="font-script text-2xl text-rose">Where We Serve</span>
            <AnimatedHeading
              text="Proudly Serving Lahore"
              as="h2"
              className="font-heading text-3xl md:text-5xl text-charcoal mt-1"
            />
            <p className="mt-4 text-charcoal-soft">
              Based in Johar Town, Blush &amp; Glow is a short, easy visit from these
              nearby neighbourhoods.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {serviceAreas.map((area, i) => (
              <Reveal key={area.slug} delay={(i % 3) * 0.08}>
                <ServiceAreaCard area={area} />
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center mt-10">
            <Link
              href="/service-areas"
              className="inline-flex items-center gap-2 rounded-full border border-gold px-7 py-3 text-sm uppercase tracking-wider text-charcoal hover:bg-gold hover:text-white transition-colors"
            >
              <MapPin size={15} /> View All Service Areas
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Blog preview */}
      <section className="section-padding bg-blush-light relative overflow-hidden">
        <div className="grain-overlay" />
        <div className="container-custom relative">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <span className="font-script text-2xl text-rose">From the Journal</span>
              <AnimatedHeading
                text="Beauty Tips & Bridal Guides"
                as="h2"
                className="font-heading text-3xl md:text-5xl text-charcoal mt-1"
              />
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-rose-dark font-medium text-sm uppercase tracking-wider hover:gap-3 transition-all shrink-0"
            >
              Read All Articles <ArrowRight size={15} />
            </Link>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.1}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-blush hover:shadow-xl transition-shadow h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-xs uppercase tracking-wider text-rose font-medium">
                      {post.category}
                    </span>
                    <h3 className="font-heading text-lg text-charcoal mt-2 group-hover:text-rose-dark transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-charcoal-soft mt-2 leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="section-padding bg-cream">
        <div className="container-custom max-w-3xl">
          <Reveal className="text-center mb-10">
            <span className="font-script text-2xl text-rose">Good to Know</span>
            <h2 className="font-heading text-3xl md:text-5xl text-charcoal mt-1">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <FAQAccordion items={faqs.slice(0, 5)} />
          </Reveal>
          <Reveal className="text-center mt-8">
            <Link
              href="/faqs"
              className="inline-flex items-center gap-2 text-rose-dark font-medium text-sm uppercase tracking-wider hover:gap-3 transition-all"
            >
              View All FAQs <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Booking form above footer */}
      <section id="book" className="section-padding bg-blush-light relative overflow-hidden">
        <div className="grain-overlay" />
        <div className="container-custom relative grid lg:grid-cols-5 gap-10 items-start">
          <Reveal className="lg:col-span-2">
            <span className="font-script text-2xl text-rose">Reserve Your Slot</span>
            <AnimatedHeading
              text="Book Your Appointment"
              as="h2"
              className="font-heading text-3xl md:text-4xl text-charcoal mt-1"
            />
            <p className="mt-4 text-charcoal-soft leading-relaxed">
              Fill in your details and preferred time — we&apos;ll confirm your appointment
              over WhatsApp within minutes. Walk-ins are welcome, but booking ahead
              guarantees your slot.
            </p>
            <div className="flex items-center gap-3 mt-6 text-sm text-charcoal-soft">
              <Calendar size={18} className="text-rose" />
              {site.hours[0].day}: {site.hours[0].time}
            </div>
            <div className="flex items-center gap-3 mt-2 text-sm text-charcoal-soft">
              <MapPin size={18} className="text-rose" />
              {site.address.full}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-3 bg-white rounded-2xl border border-blush shadow-sm p-6 md:p-9">
            <BookingForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
