import React from "react";
import { motion } from "framer-motion";
import { Building, MapPin, Calendar, DollarSign, Check } from "lucide-react";
import AmberButton from "@/components/ui/AmberButton";
import CTABanner from "@/components/shared/CTABanner";
import { FEATURED_PROJECT } from "@/lib/content";

export default function FeaturedProjectPage() {
  const p = FEATURED_PROJECT;
  const meta = [
    { icon: Building, label: "Client", value: p.client },
    { icon: MapPin, label: "Location", value: p.location },
    { icon: Calendar, label: "Completion", value: p.year },
    { icon: DollarSign, label: "Project Value", value: p.value },
  ];
  return (
    <>
      <section className="relative pt-40 md:pt-48 pb-20 md:pb-28 overflow-hidden bg-carbon">
        <div className="absolute inset-0">
          <img src={p.gallery[0]} alt={`${p.title} hero — ${p.client}`} className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/80 to-carbon/40" />
          <div className="absolute inset-0 blue-grid opacity-20" aria-hidden="true" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-5 md:px-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-amber" />
              <span className="font-mono text-xs tracking-[0.25em] text-amber">FEATURED PROJECT</span>
            </div>
            <h1 className="font-display font-bold text-white text-5xl md:text-7xl tracking-tight leading-[0.95] max-w-4xl">{p.title}</h1>
            <p className="mt-6 text-lg md:text-xl text-white max-w-2xl">Client: {p.client} · {p.location} · Completed {p.year}</p>
          </motion.div>
        </div>
      </section>

      <section className="bg-carbon border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {meta.map((m) => (
            <div key={m.label} className="flex items-center gap-4">
              <div className="w-11 h-11 border border-white/15 flex items-center justify-center shrink-0"><m.icon className="w-5 h-5 text-amber" /></div>
              <div>
                <div className="font-mono text-[10px] text-white tracking-wider">{m.label.toUpperCase()}</div>
                <div className="text-white font-medium">{m.value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-carbon py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <span className="font-mono text-xs tracking-[0.2em] text-amber">PROJECT OVERVIEW</span>
            <h2 className="font-display font-bold text-white text-3xl md:text-4xl mt-4">Energizing a landmark mixed-use development</h2>
            <p className="text-white text-lg mt-6 leading-relaxed">{p.overview}</p>
            <h3 className="font-display font-bold text-white text-xl mt-12 mb-6">Scope of work</h3>
            <ul className="space-y-4">
              {p.scope.map((s) => (
                <li key={s} className="flex items-start gap-3 text-white/90"><Check className="w-5 h-5 text-amber shrink-0 mt-0.5" /> <span>{s}</span></li>
              ))}
            </ul>
          </div>
          <aside className="border border-white/10 p-8 h-fit lg:sticky lg:top-28">
            <h3 className="font-display font-bold text-xl text-white">Services provided</h3>
            <div className="flex flex-wrap gap-2 mt-5">
              {p.services.map((s) => <span key={s} className="text-xs border border-white/20 text-white/80 px-3 py-1.5">{s}</span>)}
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <h4 className="font-display font-bold text-white">Start a similar project</h4>
              <p className="text-white text-sm mt-2">Tell us about your scope and we'll respond within one business day.</p>
              <AmberButton to="/contact" className="w-full mt-5" arrow>Request a Quote</AmberButton>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-structural py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <span className="font-mono text-xs tracking-[0.2em] text-amber">PROJECT GALLERY</span>
          <h2 className="font-display font-bold text-carbon text-3xl md:text-4xl mt-4">Selected views</h2>
          <p className="text-neutral-500 text-sm mt-2">Placeholder imagery — project photos will replace these once supplied.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            {p.gallery.map((g, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="aspect-[4/3] overflow-hidden group">
                <img src={g} alt={`${p.title} gallery view ${i + 1}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Have a project of this scale?" />
    </>
  );
}