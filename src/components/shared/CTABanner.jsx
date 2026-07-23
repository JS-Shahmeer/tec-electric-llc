import React from "react";
import AmberButton from "@/components/ui/AmberButton";
import { COMPANY } from "@/lib/content";

export default function CTABanner({ title = "Ready to power your next project?", subtitle = "Tell us about your scope. We'll respond within one business day with clear next steps." }) {
  return (
    <section className="relative bg-amber overflow-hidden">
      <div className="absolute inset-0 conduit-grid opacity-20" aria-hidden="true" />
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28 relative">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="max-w-2xl">
            <span className="font-mono text-xs tracking-[0.2em] text-white/70">START THE CONVERSATION</span>
            <h2 className="font-display font-bold text-white text-4xl md:text-6xl tracking-tight leading-[1.02] mt-4">{title}</h2>
            <p className="text-white/80 text-lg mt-5">{subtitle}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <AmberButton to="/contact" variant="dark" size="lg" arrow>Request a Quote</AmberButton>
            <AmberButton href={COMPANY.phoneHref} variant="dark" size="lg" className="bg-transparent border border-white text-white hover:bg-white hover:text-carbon">{COMPANY.phone}</AmberButton>
          </div>
        </div>
      </div>
    </section>
  );
}