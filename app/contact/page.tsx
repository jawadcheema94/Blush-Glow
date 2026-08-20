import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import BookingForm from "@/components/BookingForm";
import { InstagramIcon, FacebookIcon, PinterestIcon, WhatsappIcon } from "@/components/SocialIcons";
import { site } from "@/lib/site-config";
import { whatsappLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact & Book an Appointment",
  description:
    "Get in touch with Blush & Glow Beauty Salon in Johar Town, Lahore. Book your appointment for bridal makeup, facials, hair styling, hair colour or mehndi art.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact & Book"
        description="Reach out to reserve your appointment — our team responds quickly on WhatsApp and phone."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="section-padding bg-cream">
        <div className="container-custom grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <Reveal className="bg-blush-light rounded-2xl border border-blush p-6">
              <h2 className="font-heading text-xl text-charcoal mb-5">Salon Details</h2>
              <ul className="space-y-4 text-sm text-charcoal-soft">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-rose shrink-0 mt-0.5" />
                  {site.address.full}
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={18} className="text-rose shrink-0 mt-0.5" />
                  <a href={`tel:${site.phoneIntl}`} className="hover:text-rose-dark">
                    {site.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={18} className="text-rose shrink-0 mt-0.5" />
                  <a href={`mailto:${site.email}`} className="hover:text-rose-dark">
                    {site.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={18} className="text-rose shrink-0 mt-0.5" />
                  <span>
                    {site.hours.map((h) => (
                      <span key={h.day} className="block">
                        {h.day}: {h.time}
                      </span>
                    ))}
                  </span>
                </li>
              </ul>

              <a
                href={whatsappLink("Hi Blush & Glow! I'd like to book an appointment.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 w-full rounded-full bg-[#25D366] px-5 py-3 text-xs uppercase tracking-wider text-white font-medium hover:opacity-90 transition-opacity"
              >
                <WhatsappIcon className="w-4 h-4" /> Chat on WhatsApp
              </a>

              <div className="flex items-center gap-3 mt-5 justify-center">
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full border border-gold/50 flex items-center justify-center text-charcoal hover:bg-rose hover:border-rose hover:text-white transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full border border-gold/50 flex items-center justify-center text-charcoal hover:bg-rose hover:border-rose hover:text-white transition-colors"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href={site.social.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pinterest"
                  className="w-9 h-9 rounded-full border border-gold/50 flex items-center justify-center text-charcoal hover:bg-rose hover:border-rose hover:text-white transition-colors"
                >
                  <PinterestIcon className="w-4 h-4" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="rounded-2xl overflow-hidden border border-blush shadow-sm h-72">
              <iframe
                src={site.mapEmbed}
                width="100%"
                height="100%"
                loading="lazy"
                title="Blush & Glow Beauty Salon location map"
                className="border-0"
              />
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:col-span-3 bg-white rounded-2xl border border-blush shadow-sm p-6 md:p-10">
            <h2 className="font-heading text-2xl text-charcoal mb-1">Book Your Appointment</h2>
            <p className="text-sm text-charcoal-soft mb-7">
              Fill in your details below — we&apos;ll open WhatsApp with your booking
              request ready to send.
            </p>
            <BookingForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
