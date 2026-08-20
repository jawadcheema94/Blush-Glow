"use client";

import { useRef, type ElementType, type Ref } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type AnimatedHeadingProps = {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  scrollTrigger?: boolean;
};

export default function AnimatedHeading({
  text,
  as: Tag = "h2",
  className,
  delay = 0,
  scrollTrigger = true,
}: AnimatedHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const words = text.split(" ");

  useGSAP(
    () => {
      if (!ref.current) return;
      const spans = ref.current.querySelectorAll("span.word-inner");
      gsap.fromTo(
        spans,
        { yPercent: 115, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          delay,
          ease: "power4.out",
          stagger: 0.06,
          scrollTrigger: scrollTrigger
            ? {
                trigger: ref.current,
                start: "top 88%",
                toggleActions: "play none none reverse",
              }
            : undefined,
        }
      );
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref as Ref<HTMLDivElement>} className={cn(className)}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-top pb-[0.15em] -mb-[0.15em]"
        >
          <span className="word-inner inline-block">
            {word}
            {i < words.length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
