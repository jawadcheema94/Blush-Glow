"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { IMG } from "@/lib/images";
import { stats } from "@/lib/site-config";
import AnimatedHeading from "./AnimatedHeading";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".hero-eyebrow", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 })
        .fromTo(
          ".hero-desc",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.3"
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.12 },
          "-=0.4"
        )
        .fromTo(
          ".hero-trust",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3"
        )
        .fromTo(
          ".hero-photo",
          { opacity: 0, scale: 0.85, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 0.9, stagger: 0.15 },
          "-=0.6"
        )
        .fromTo(
          ".hero-badge",
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(2)" },
          "-=0.4"
        );
    },
    { scope: ref }
  );

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-blush-light via-cream to-cream pt-10 md:pt-16 pb-20 md:pb-28"
    >
      <div className="grain-overlay" />
      <div className="absolute top-10 -left-24 w-80 h-80 rounded-full bg-rose-soft/30 blur-3xl" />
      <div className="absolute bottom-0 -right-24 w-96 h-96 rounded-full bg-gold-light/30 blur-3xl" />

      <div className="hidden md:block absolute top-24 left-[8%] text-rose-soft animate-float">
        <Sparkles size={26} />
      </div>
      <div className="hidden md:block absolute top-1/2 right-[6%] text-gold animate-float-slow">
        <Sparkles size={20} />
      </div>
      <div className="hidden md:block absolute bottom-16 left-[20%] text-sage animate-float-slower">
        <Sparkles size={16} />
      </div>

      <div className="container-custom grid lg:grid-cols-2 gap-14 items-center relative">
        <div>
          <span className="hero-eyebrow font-script text-3xl md:text-4xl text-rose block mb-3">
            Only for Ladies
          </span>
          <AnimatedHeading
            text="Where Every Bride & Beauty Feels Radiant"
            as="h1"
            scrollTrigger={false}
            delay={0.15}
            className="font-heading text-[2.6rem] leading-[1.08] md:text-6xl md:leading-[1.05] text-charcoal max-w-xl"
          />
          <p className="hero-desc mt-6 text-charcoal-soft text-base md:text-lg leading-relaxed max-w-lg">
            A private ladies-only beauty studio in Johar Town, Lahore — bridal &amp; party
            makeup, hair styling, facials, hair colour and bridal mehndi, crafted with care
            for your most special moments.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="hero-cta inline-flex items-center gap-2 rounded-full bg-rose px-7 py-3.5 text-sm uppercase tracking-wider text-white font-medium hover:bg-rose-dark transition-colors shadow-md shadow-rose/20"
            >
              Book Appointment
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              className="hero-cta inline-flex items-center gap-2 rounded-full border border-gold px-7 py-3.5 text-sm uppercase tracking-wider text-charcoal hover:bg-gold hover:text-white transition-colors"
            >
              Explore Services
            </Link>
          </div>

          <div className="hero-trust mt-10 flex flex-wrap gap-x-10 gap-y-4">
            {stats.slice(0, 3).map((s) => (
              <div key={s.label}>
                <div className="flex items-baseline gap-0.5 font-heading text-2xl text-rose-dark font-semibold">
                  {s.value.toLocaleString()}
                  {s.suffix}
                </div>
                <p className="text-xs text-charcoal-soft uppercase tracking-wide mt-0.5">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[500px] md:h-[560px]">
          <div className="hero-photo absolute top-0 right-6 sm:right-10 w-[52%] h-[62%] rounded-[2.5rem] overflow-hidden border-[6px] border-white shadow-xl rotate-2">
            <Image
              src={IMG.heroBride}
              alt="Bridal makeup by Blush & Glow Beauty Salon, Lahore"
              fill
              priority
              sizes="(max-width: 768px) 60vw, 30vw"
              className="object-cover"
            />
          </div>
          <div className="hero-photo absolute bottom-6 left-2 sm:left-6 w-[48%] h-[46%] rounded-[2.5rem] overflow-hidden border-[6px] border-white shadow-xl -rotate-3">
            <Image
              src={IMG.hairStyling[0]}
              alt="Hair styling service at Blush & Glow"
              fill
              sizes="(max-width: 768px) 55vw, 28vw"
              className="object-cover"
            />
          </div>
          <div className="hero-photo absolute top-[30%] left-0 sm:left-2 w-[38%] h-[32%] rounded-[2rem] overflow-hidden border-[6px] border-white shadow-xl rotate-3">
            <Image
              src={IMG.mehndiArt[0]}
              alt="Bridal mehndi art at Blush & Glow"
              fill
              sizes="(max-width: 768px) 45vw, 22vw"
              className="object-cover"
            />
          </div>

          <div className="hero-badge absolute bottom-2 right-2 sm:right-8 bg-white rounded-2xl shadow-lg px-5 py-4 flex items-center gap-3 border border-blush">
            <div className="flex -space-x-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white overflow-hidden relative"
                >
                  <Image src={IMG.avatars[i]} alt="Happy client" fill sizes="32px" className="object-cover" />
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={11} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-[11px] text-charcoal-soft mt-0.5">3,500+ Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
