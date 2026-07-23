import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Calendar, Building } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import AmberButton from "@/components/ui/AmberButton";
import { FEATURED_PROJECT } from "@/lib/content";

export default function FeaturedProject() {
  const p = FEATURED_PROJECT;
  const meta = [
    { icon: Building, label: "Client", value: p.client },
    { icon: MapPin, label: "Location", value: p.location },
    { icon: Calendar, label: "Year", value: p.year },
  ];
  return (
    <section className="bg-carbon py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <SectionHeading code="FEATURED PROJECT" title={p.title} subtitle={`Delivered for ${p.client} · ${p.location} · ${p.year}`} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12 items-stretch">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative min-h-[360px] lg:min-h-[480px] overflow-hidden group">
            <img src={p.gallery[0]} alt={`${p.title} — ${p.client} commercial electrical project`} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/20 to-transparent" />
            <span className="absolute top-4 left-4 font-mono text-[10px] bg-amber text-white px-2 py-1">FEATURED</span>
          </motion.div>
          <div className="flex flex-col justify-center">
            <span className="font-mono text-xs text-amber tracking-widest">CLIENT · {p.client.toUpperCase()}</span>
            <h3 className="font-display font-bold text-white text-3xl md:text-4xl mt-3 leading-tight">{p.title}</h3>
            <p className="text-white mt-5 leading-relaxed">{p.overview}</p>
            <div className="grid grid-cols-3 gap-4 mt-8 border-y border-white/10 py-6">
              {meta.map((m) => (
                <div key={m.label}>
                  <m.icon className="w-5 h-5 text-amber mb-2" />
                  <div className="font-mono text-[10px] text-white tracking-wider">{m.label.toUpperCase()}</div>
                  <div className="text-white text-sm font-medium">{m.value}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {p.services.map((s) => (
                <span key={s} className="text-xs border border-white/20 text-white/80 px-3 py-1.5">{s}</span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <AmberButton to="/featured-project" arrow>View Project</AmberButton>
              <AmberButton to="/projects" variant="outline">More Projects</AmberButton>
            </div>
            <Link to="/featured-project" className="sr-only">View featured project details</Link>
          </div>
        </div>
      </div>
    </section>
  );
}