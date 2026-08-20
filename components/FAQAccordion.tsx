"use client";

import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { gsap } from "@/lib/gsap";
import type { FAQ } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export default function FAQAccordion({ items }: { items: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const refs = useRef<Record<number, HTMLDivElement | null>>({});

  function toggle(i: number) {
    const isOpening = openIndex !== i;
    const nextOpen = isOpening ? i : null;

    if (openIndex !== null && refs.current[openIndex]) {
      gsap.to(refs.current[openIndex], { height: 0, duration: 0.35, ease: "power2.inOut" });
    }
    if (nextOpen !== null && refs.current[nextOpen]) {
      gsap.to(refs.current[nextOpen], {
        height: "auto",
        duration: 0.4,
        ease: "power2.inOut",
      });
    }
    setOpenIndex(nextOpen);
  }

  return (
    <div className="flex flex-col divide-y divide-blush border-t border-b border-blush">
      {items.map((item, i) => (
        <div key={item.question}>
          <button
            onClick={() => toggle(i)}
            className="w-full flex items-center justify-between gap-4 py-5 text-left"
          >
            <span className="font-heading text-base md:text-lg text-charcoal">
              {item.question}
            </span>
            <ChevronDown
              size={18}
              className={cn(
                "shrink-0 text-rose transition-transform duration-300",
                openIndex === i && "rotate-180"
              )}
            />
          </button>
          <div
            ref={(el) => {
              refs.current[i] = el;
            }}
            style={{ height: openIndex === i ? "auto" : 0 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-charcoal-soft leading-relaxed pr-8">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
