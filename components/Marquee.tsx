import { Sparkles } from "lucide-react";

const items = [
  "Only for Ladies",
  "Bridal Makeup Specialists",
  "Certified Beauty Experts",
  "Premium Skincare",
  "Mehndi Art",
  "Johar Town, Lahore",
];

export default function Marquee() {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden bg-charcoal py-3.5 border-y border-gold/30">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((set) => (
          <div key={set} className="flex items-center shrink-0">
            {loop.map((item, i) => (
              <span
                key={`${set}-${i}`}
                className="flex items-center gap-3 px-6 text-cream/85 text-xs md:text-sm uppercase tracking-[0.2em] whitespace-nowrap"
              >
                {item}
                <Sparkles size={12} className="text-gold" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
