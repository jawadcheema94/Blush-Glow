import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import FAQAccordion from "@/components/FAQAccordion";
import { faqs } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about booking, bridal trials, pricing, service areas and policies at Blush & Glow Beauty Salon, Johar Town, Lahore.",
  alternates: { canonical: "/faqs" },
};

export default function FAQsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="Good to Know"
        title="Frequently Asked Questions"
        description="Everything you need to know before booking your visit to Blush & Glow."
        crumbs={[{ label: "Home", href: "/" }, { label: "FAQs" }]}
      />

      <section className="section-padding bg-cream">
        <div className="container-custom max-w-3xl">
          <Reveal>
            <FAQAccordion items={faqs} />
          </Reveal>

          <Reveal className="text-center mt-14 bg-blush-light rounded-2xl border border-blush p-8">
            <h2 className="font-heading text-2xl text-charcoal">Still Have Questions?</h2>
            <p className="mt-2 text-charcoal-soft text-sm">
              Our team is happy to help — reach out any time.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-rose px-7 py-3 text-sm uppercase tracking-wider text-white font-medium hover:bg-rose-dark transition-colors"
            >
              Contact Us <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
