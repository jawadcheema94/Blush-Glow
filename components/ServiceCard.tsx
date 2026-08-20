import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { ServiceCategory } from "@/lib/site-config";
import { iconMap } from "./icon-map";

export default function ServiceCard({ service }: { service: ServiceCategory }) {
  const Icon = iconMap[service.icon];
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-blush shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={service.images[0]}
          alt={`${service.name} at Blush & Glow Beauty Salon`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/0 to-transparent" />
        <div className="absolute top-4 left-4 w-11 h-11 rounded-full bg-cream/90 backdrop-blur flex items-center justify-center text-rose-dark shadow-sm">
          <Icon size={20} />
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-heading text-xl text-charcoal group-hover:text-rose-dark transition-colors">
          {service.name}
        </h3>
        <p className="mt-2 text-sm text-charcoal-soft leading-relaxed flex-1">
          {service.shortDescription}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-rose font-medium">
          Explore Service
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
