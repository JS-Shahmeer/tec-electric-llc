import React from "react";
import { motion } from "framer-motion";
import MetricsCounter from "@/components/shared/MetricsCounter";
import { METRICS } from "@/lib/content";

export default function StatsSnapshot() {
  return (
    <section className="relative bg-gradient-to-b from-royal to-carbon py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 blue-grid opacity-40" aria-hidden="true" />
      <div className="absolute inset-0 bg-carbon/30" aria-hidden="true" />
      <div className="relative max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="text-center mb-14">
          <span className="font-mono text-xs tracking-[0.25em] text-ice">BY THE NUMBERS</span>
          <h2 className="font-display font-bold text-white text-3xl md:text-5xl tracking-tight mt-3">A track record built at scale</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-px bg-white/10 border border-white/10">
          {METRICS.map((m, i) => (
            <motion.div key={m.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-carbon/60 backdrop-blur p-6 md:p-8 text-center">
              <div className="font-display font-bold text-amber text-4xl md:text-5xl tracking-tight">
                <MetricsCounter value={m.value} suffix={m.suffix} />
              </div>
              <div className="font-mono text-[11px] text-white tracking-wider mt-3 uppercase">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}