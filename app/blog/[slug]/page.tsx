import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, ArrowRight, ArrowLeft } from "lucide-react";
import Reveal from "@/components/Reveal";
import BookingForm from "@/components/BookingForm";
import { blogPosts, site } from "@/lib/site-config";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const more = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: { "@type": "Organization", name: site.fullName },
    publisher: { "@type": "Organization", name: site.fullName },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden bg-blush-light pt-14 pb-10 md:pt-20">
        <div className="grain-overlay" />
        <div className="container-custom relative max-w-3xl">
          <nav className="flex items-center flex-wrap gap-1.5 text-xs text-charcoal-soft mb-6">
            <Link href="/" className="hover:text-rose transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-rose transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-rose-dark line-clamp-1">{post.title}</span>
          </nav>
          <span className="text-xs uppercase tracking-wider text-rose font-medium">
            {post.category}
          </span>
          <h1 className="font-heading text-3xl md:text-5xl text-charcoal mt-2 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-5 text-sm text-charcoal-soft mt-5">
            <span className="flex items-center gap-1.5">
              <CalendarDays size={15} />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={15} />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-custom max-w-3xl -mt-6 md:-mt-10 relative">
          <Reveal className="relative h-64 md:h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-custom max-w-3xl">
          <Reveal className="prose-content">
            {post.content.map((p, i) => (
              <p key={i} className="text-charcoal-soft leading-loose mb-5 text-[15px] md:text-base">
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-blush-light rounded-2xl border border-blush p-6">
            <div>
              <p className="font-heading text-lg text-charcoal">Ready to book your look?</p>
              <p className="text-sm text-charcoal-soft mt-1">
                Let our team bring this guide to life for you.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-rose px-6 py-3 text-xs uppercase tracking-wider text-white font-medium hover:bg-rose-dark transition-colors shrink-0"
            >
              Book Appointment <ArrowRight size={14} />
            </Link>
          </Reveal>

          <Link
            href="/blog"
            className="mt-10 inline-flex items-center gap-2 text-rose-dark font-medium text-sm uppercase tracking-wider hover:gap-3 transition-all"
          >
            <ArrowLeft size={15} /> Back to Blog
          </Link>
        </div>
      </section>

      <section className="section-padding bg-blush-light relative overflow-hidden">
        <div className="grain-overlay" />
        <div className="container-custom relative">
          <Reveal className="text-center max-w-xl mx-auto mb-10">
            <span className="font-script text-2xl text-rose">Keep Reading</span>
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal mt-1">
              More From the Journal
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {more.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-blush hover:shadow-xl transition-shadow h-full"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-base text-charcoal group-hover:text-rose-dark transition-colors leading-snug">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-custom max-w-2xl bg-blush-light rounded-2xl border border-blush p-6 md:p-9">
          <h2 className="font-heading text-2xl text-charcoal mb-1">Book Your Appointment</h2>
          <p className="text-sm text-charcoal-soft mb-6">
            We&apos;ll confirm your slot over WhatsApp.
          </p>
          <BookingForm />
        </div>
      </section>
    </>
  );
}
