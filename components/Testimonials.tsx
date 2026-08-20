"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { testimonials } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  }, [active]);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((v) => (v + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[active];

  return (
    <div className="max-w-3xl mx-auto text-center">
      <Quote className="mx-auto text-gold" size={36} />
      <div ref={cardRef} className="mt-6">
        <div className="flex justify-center gap-1 mb-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={16} className="fill-gold text-gold" />
          ))}
        </div>
        <p className="font-heading text-xl md:text-2xl text-charcoal leading-relaxed">
          &ldquo;{t.quote}&rdquo;
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold">
            <Image src={t.avatar} alt={t.name} fill sizes="48px" className="object-cover" />
          </div>
          <div className="text-left">
            <p className="font-medium text-charcoal text-sm">{t.name}</p>
            <p className="text-xs text-charcoal-soft">
              {t.area} &middot; {t.service}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            aria-label={`View testimonial ${i + 1}`}
            onClick={() => setActive(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              active === i ? "w-7 bg-rose" : "w-1.5 bg-rose-soft/60"
            )}
          />
        ))}
      </div>
    </div>
  );
}
