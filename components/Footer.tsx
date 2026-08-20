import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { site, services, serviceAreas } from "@/lib/site-config";
import { InstagramIcon, FacebookIcon, PinterestIcon } from "./SocialIcons";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative bg-charcoal text-cream/85 overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-1"
        style={{
          background:
            "linear-gradient(90deg, var(--color-gold), var(--color-rose), var(--color-gold))",
        }}
      />
      <div className="container-custom section-padding pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="lg:col-span-2">
            <Logo variant="light" />
            <p className="mt-5 text-sm leading-relaxed text-cream/65 max-w-sm">
              {site.description} A private, ladies-only retreat in Johar Town, Lahore
              for bridal makeup, hair, skincare and mehndi art.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center hover:bg-rose hover:border-rose transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center hover:bg-rose hover:border-rose transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={site.social.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center hover:bg-rose hover:border-rose transition-colors"
              >
                <PinterestIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-cream text-sm tracking-[0.15em] uppercase mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm text-cream/65">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-rose-soft transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-cream text-sm tracking-[0.15em] uppercase mb-4">
              Service Areas
            </h3>
            <ul className="space-y-2.5 text-sm text-cream/65">
              {serviceAreas.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/service-areas/${a.slug}`}
                    className="hover:text-rose-soft transition-colors"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-cream text-sm tracking-[0.15em] uppercase mb-4">
              Visit Us
            </h3>
            <ul className="space-y-3.5 text-sm text-cream/65">
              <li className="flex gap-2.5">
                <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
                <span>{site.address.full}</span>
              </li>
              <li className="flex gap-2.5">
                <Phone size={16} className="text-gold shrink-0 mt-0.5" />
                <a href={`tel:${site.phoneIntl}`} className="hover:text-rose-soft transition-colors">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Mail size={16} className="text-gold shrink-0 mt-0.5" />
                <a href={`mailto:${site.email}`} className="hover:text-rose-soft transition-colors">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Clock size={16} className="text-gold shrink-0 mt-0.5" />
                <span>
                  {site.hours.map((h) => (
                    <span key={h.day} className="block">
                      {h.day}: {h.time}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-cream/10 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-cream/45">
          <p>
            &copy; {new Date().getFullYear()} {site.fullName}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/faqs" className="hover:text-rose-soft transition-colors">
              FAQs
            </Link>
            <Link href="/contact" className="hover:text-rose-soft transition-colors">
              Book Appointment
            </Link>
            <span className="font-script text-rose-soft text-base">Only for Ladies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
