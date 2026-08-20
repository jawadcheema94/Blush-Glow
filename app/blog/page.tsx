import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { blogPosts } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Beauty Blog",
  description:
    "Bridal makeup trends, skincare tips, mehndi design ideas and hair care advice from the Blush & Glow Beauty Salon team in Lahore.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="The Journal"
        title="Beauty & Bridal Blog"
        description="Tips, trends and guides from our beauty experts in Johar Town, Lahore."
        crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section className="section-padding bg-cream">
        <div className="container-custom grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.08}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-blush hover:shadow-xl transition-shadow h-full"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-rose-dark text-[11px] uppercase tracking-wider px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-charcoal-soft mb-2">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={13} />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-heading text-xl text-charcoal group-hover:text-rose-dark transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-charcoal-soft mt-2.5 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-rose font-medium">
                    Read More
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
