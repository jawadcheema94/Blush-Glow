"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { site, services, serviceAreas } from "@/lib/site-config";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", hasMenu: true },
  { href: "/service-areas", label: "Service Areas", hasMenu: true },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useGSAP(
    () => {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.1 }
      );
    },
    { scope: navRef }
  );

  return (
    <header
      ref={navRef}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-[0_4px_24px_-8px_rgba(191,154,94,0.25)]"
          : "bg-transparent"
      )}
    >
      <div className="hidden md:flex items-center justify-center gap-6 border-b border-gold/20 bg-charcoal text-cream/90 text-xs py-1.5 px-4 tracking-wide">
        <a href={`tel:${site.phoneIntl}`} className="flex items-center gap-1.5 hover:text-gold transition-colors">
          <Phone size={12} /> {site.phone}
        </a>
        <span className="text-gold/50">•</span>
        <span>{site.address.full}</span>
        <span className="text-gold/50">•</span>
        <span className="font-script text-rose-soft text-base leading-none">Only for Ladies</span>
      </div>

      <nav className="container-custom flex items-center justify-between py-3 md:py-4">
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>

        <ul className="hidden lg:flex items-center gap-7 font-body text-[13px] tracking-wide uppercase text-charcoal">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="relative"
              onMouseEnter={() => link.hasMenu && setDropdown(link.href)}
              onMouseLeave={() => link.hasMenu && setDropdown(null)}
            >
              <Link
                href={link.href}
                className={cn(
                  "flex items-center gap-1 py-2 hover:text-rose transition-colors relative",
                  pathname === link.href && "text-rose"
                )}
              >
                {link.label}
                {link.hasMenu && <ChevronDown size={13} />}
              </Link>

              {link.hasMenu && link.href === "/services" && dropdown === "/services" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-72">
                  <div className="bg-white rounded-xl shadow-xl border border-blush p-3 grid grid-cols-1 gap-0.5 normal-case">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="px-3 py-2 rounded-lg text-sm text-charcoal-soft hover:bg-blush-light hover:text-rose-dark transition-colors"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {link.hasMenu && link.href === "/service-areas" && dropdown === "/service-areas" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-64">
                  <div className="bg-white rounded-xl shadow-xl border border-blush p-3 grid grid-cols-1 gap-0.5 normal-case">
                    {serviceAreas.map((a) => (
                      <Link
                        key={a.slug}
                        href={`/service-areas/${a.slug}`}
                        className="px-3 py-2 rounded-lg text-sm text-charcoal-soft hover:bg-blush-light hover:text-rose-dark transition-colors"
                      >
                        {a.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center rounded-full bg-rose px-5 py-2.5 text-xs uppercase tracking-wider text-white font-medium hover:bg-rose-dark transition-colors shadow-sm"
          >
            Book Appointment
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 text-charcoal"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-cream border-t border-blush shadow-lg">
          <ul className="container-custom py-4 flex flex-col gap-1 font-body text-sm uppercase tracking-wide">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block py-2.5 border-b border-blush-light",
                    pathname === link.href && "text-rose"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="mt-3 inline-flex w-full justify-center rounded-full bg-rose px-5 py-3 text-xs uppercase tracking-wider text-white font-medium"
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
