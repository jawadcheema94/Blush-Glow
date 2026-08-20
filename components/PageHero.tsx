import Link from "next/link";
import { ChevronRight } from "lucide-react";
import AnimatedHeading from "./AnimatedHeading";

type Crumb = { label: string; href?: string };

export default function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-blush-light pt-14 pb-16 md:pt-20 md:pb-20">
      <div className="grain-overlay" />
      <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-rose-soft/25 blur-3xl" />
      <div className="absolute -bottom-20 -left-16 w-80 h-80 rounded-full bg-gold-light/25 blur-3xl" />

      <div className="container-custom relative">
        <nav className="flex items-center flex-wrap gap-1.5 text-xs text-charcoal-soft mb-6">
          {crumbs.map((c, i) => (
            <span key={c.label} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight size={12} />}
              {c.href ? (
                <Link href={c.href} className="hover:text-rose transition-colors">
                  {c.label}
                </Link>
              ) : (
                <span className="text-rose-dark">{c.label}</span>
              )}
            </span>
          ))}
        </nav>

        {eyebrow && (
          <span className="font-script text-2xl text-rose block mb-1">{eyebrow}</span>
        )}
        <AnimatedHeading
          text={title}
          as="h1"
          className="font-heading text-4xl md:text-6xl text-charcoal max-w-3xl"
        />
        {description && (
          <p className="mt-5 text-charcoal-soft max-w-xl leading-relaxed">{description}</p>
        )}
      </div>
    </section>
  );
}
