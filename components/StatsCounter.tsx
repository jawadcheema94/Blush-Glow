"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { stats } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export default function StatsCounter({ variant = "light" }: { variant?: "light" | "dark" }) {
  const ref = useRef<HTMLDivElement>(null);
  const isDark = variant === "dark";

  useGSAP(
    () => {
      if (!ref.current) return;
      const items = ref.current.querySelectorAll<HTMLElement>("[data-value]");
      items.forEach((el) => {
        const target = Number(el.dataset.value);
        const counter = { val: 0 };
        gsap.to(counter, {
          val: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            el.textContent = Math.floor(counter.val).toLocaleString();
          },
        });
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <div
            className={cn(
              "font-heading text-3xl md:text-5xl font-semibold",
              isDark ? "text-rose-soft" : "text-rose-dark"
            )}
          >
            <span data-value={s.value}>0</span>
            <span>{s.suffix}</span>
          </div>
          <p
            className={cn(
              "mt-2 text-xs md:text-sm uppercase tracking-wider",
              isDark ? "text-cream/60" : "text-charcoal-soft"
            )}
          >
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}
