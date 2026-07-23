import React from "react";
import { motion } from "framer-motion";
import AmberButton from "@/components/ui/AmberButton";
import { IMAGES } from "@/lib/images";
import { COMPANY } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-carbon">
      <div className="absolute inset-0">
        <img
          src={IMAGES.heroSite}
          alt="High-rise commercial construction site at blue hour with illuminated crane structures showing the scale of TEC Electric's field operations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/70 to-carbon/30" />
        <div className="absolute inset-0 hero-radial" aria-hidden="true" />
        <div className="absolute inset-0 conduit-grid opacity-30" aria-hidden="true" />
      </div>

      <div className="absolute top-28 right-5 md:right-10 hidden md:block text-right">
        <p className="font-mono text-[11px] text-amber tracking-widest">30.267°N / 97.743°W</p>
        <p className="font-mono text-[11px] text-white tracking-widest">STATUS: ENERGIZED</p>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-5 md:px-8 pt-20 md:pt-20 pb-8 w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="flex items-center gap-3 mb-5 xl:mb-6">
            <span className="w-10 h-px bg-white" />
            <span className="font-mono text-[10px] xl:text-xs tracking-[0.2em] xl:tracking-[0.25em] text-white">COMMERCIAL ELECTRICAL & GENERAL CONTRACTING</span>
          </div>
          <h1 className="font-display font-bold text-white tracking-tight leading-[0.92] text-5xl md:text-7xl">
            POWERING<br />
            <span className="text-amber">COMMERCE</span> AT SCALE
          </h1>
          <p className="mt-7 xl:mt-8 text-base md:text-lg text-white max-w-[38rem] leading-relaxed">
            TEC Electric delivers engineering-grade electrical infrastructure and general contracting for the projects that keep businesses running — on time, on budget, and built to code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 xl:mt-10">
            <AmberButton to="/contact" size="lg" arrow>Request a Quote</AmberButton>
            <AmberButton to="/services" variant="outline" size="lg">Explore Our Services</AmberButton>
          </div>
          <div className="mt-10 xl:mt-12 flex flex-wrap items-center gap-x-6 xl:gap-x-8 gap-y-3 font-mono text-[10px] xl:text-xs text-white">
            <span>◆ LICENSED & INSURED</span>
            <span>◆ MBE & HUB CERTIFIED</span>
            <span>◆ OSHA 30 FIELD LEADERS</span>
            <span>◆ {COMPANY.phone}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}