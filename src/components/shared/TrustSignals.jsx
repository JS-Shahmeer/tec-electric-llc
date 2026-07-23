import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { TRUST_SIGNALS } from "@/lib/content";

export default function TrustSignals() {
  return (
    <section className="bg-structural py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <SectionHeading light align="center" code="TRUST BUILDERS" title="Why enterprise clients choose TEC" subtitle="Proof points that de-risk your project from day one." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {TRUST_SIGNALS.map((t, i) => (
            <motion.div key={t.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group bg-white border border-neutral-200 p-8 hover:border-amber hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-ice flex items-center justify-center mb-5 group-hover:bg-amber transition-colors">
                <t.icon className="w-6 h-6 text-amber group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display font-bold text-xl text-carbon">{t.title}</h3>
              <p className="text-sm text-neutral-600 mt-3 leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}