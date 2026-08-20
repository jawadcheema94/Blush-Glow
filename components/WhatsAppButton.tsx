"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { whatsappLink } from "@/lib/utils";
import { WhatsappIcon } from "./SocialIcons";

export default function WhatsAppButton() {
  const ref = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ref.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, delay: 1.4, ease: "back.out(1.7)" }
    );
  });

  return (
    <a
      ref={ref}
      href={whatsappLink("Hi Blush & Glow! I'd like to know more about your services.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <WhatsappIcon className="w-7 h-7 relative" />
    </a>
  );
}
