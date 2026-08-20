import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-blush-light min-h-[70vh] flex items-center">
      <div className="grain-overlay" />
      <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-rose-soft/25 blur-3xl" />
      <div className="container-custom relative text-center py-24">
        <span className="font-script text-3xl text-rose">Oops</span>
        <h1 className="font-heading text-6xl md:text-8xl text-charcoal mt-2">404</h1>
        <p className="mt-4 text-charcoal-soft max-w-md mx-auto">
          The page you&apos;re looking for has wandered off. Let&apos;s get you back to
          something beautiful.
        </p>
        <div className="flex items-center justify-center gap-4 mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-rose px-7 py-3.5 text-sm uppercase tracking-wider text-white font-medium hover:bg-rose-dark transition-colors"
          >
            <Home size={16} /> Back Home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-gold px-7 py-3.5 text-sm uppercase tracking-wider text-charcoal hover:bg-gold hover:text-white transition-colors"
          >
            View Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
