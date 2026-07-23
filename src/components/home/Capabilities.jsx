import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { CAPABILITIES } from "@/lib/content";

export default function Capabilities() {
  return (
    <section className="bg-carbon py-24 md:py-36">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <SectionHeading
            code="CORE CAPABILITIES"
            title="Critical infrastructure assets"
            subtitle="Five disciplines, one accountable partner — engineered to protect your schedule and your uptime."
          />
          <Link to="/services" className="font-mono text-sm text-amber flex items-center gap-2 hover:gap-3 transition-all focus-wire shrink-0">
            ALL SERVICES <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="space-y-px bg-white/10">
          {CAPABILITIES.map((cap) => (
            <Link
              key={cap.slug}
              to={`/services/${cap.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-6 bg-carbon p-8 md:p-10 hover:bg-white/[0.03] transition-colors items-center focus-wire"
            >
              <div className="lg:col-span-1 flex items-center gap-3">
                <span className="font-mono text-xs text-white">{cap.code}</span>
              </div>
              <div className="lg:col-span-3 flex items-center gap-4">
                <div className="w-12 h-12 border border-white/15 flex items-center justify-center group-hover:border-amber group-hover:bg-amber transition-colors">
                  <cap.icon className="w-6 h-6 text-amber group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white group-hover:text-amber transition-colors">{cap.title}</h3>
              </div>
              <p className="lg:col-span-4 text-white text-sm leading-relaxed">{cap.description}</p>
              <div className="lg:col-span-3 flex flex-wrap gap-x-5 gap-y-2">
                {cap.benefits.slice(0, 4).map((b) => (
                  <span key={b} className="flex items-center gap-1.5 text-xs text-white/70">
                    <Check className="w-3.5 h-3.5 text-amber" /> {b}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}