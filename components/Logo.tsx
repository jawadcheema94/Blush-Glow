import { cn } from "@/lib/utils";

export default function Logo({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const isLight = variant === "light";
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r="22.5" stroke="var(--color-gold)" strokeWidth="1" />
        <path
          d="M24 10c3 3 5 6.5 5 10.5 0 4-2.5 6.5-5 6.5s-5-2.5-5-6.5c0-4 2-7.5 5-10.5Z"
          fill="var(--color-rose-soft)"
          stroke="var(--color-rose)"
          strokeWidth="0.75"
        />
        <path
          d="M16 22c2.5-1.5 5-1.5 7 0M25 22c2-1.5 4.5-1.5 7 0"
          stroke="var(--color-gold)"
          strokeWidth="0.75"
          fill="none"
        />
        <path
          d="M24 27c-4 3-6 7-6 11M24 27c4 3 6 7 6 11"
          stroke="var(--color-sage)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-heading leading-none">
        <span
          className={cn(
            "block text-lg tracking-[0.18em] font-semibold",
            isLight ? "text-cream" : "text-charcoal"
          )}
        >
          BLUSH <span className={isLight ? "text-rose-soft" : "text-rose"}>&amp;</span> GLOW
        </span>
        <span className="block text-[9px] tracking-[0.35em] text-gold uppercase mt-0.5">
          Beauty Salon
        </span>
      </span>
    </div>
  );
}
