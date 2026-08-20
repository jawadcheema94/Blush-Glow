import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import type { ServiceArea } from "@/lib/site-config";

export default function ServiceAreaCard({ area }: { area: ServiceArea }) {
  return (
    <Link
      href={`/service-areas/${area.slug}`}
      className="group flex flex-col justify-between rounded-2xl bg-white border border-blush p-6 hover:border-rose hover:shadow-lg transition-all duration-300"
    >
      <div>
        <div className="w-10 h-10 rounded-full bg-blush-light flex items-center justify-center text-rose-dark mb-4">
          <MapPin size={18} />
        </div>
        <h3 className="font-heading text-lg text-charcoal group-hover:text-rose-dark transition-colors">
          {area.name}
        </h3>
        <p className="mt-2 text-sm text-charcoal-soft leading-relaxed">{area.blurb}</p>
      </div>
      <span className="mt-5 inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-rose font-medium">
        View Details
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
