import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, BadgeCheck } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { CERTIFICATIONS } from "@/lib/content";

const ICONS = [BadgeCheck, Award, ShieldCheck];

export default function Certifications() {
  return (
    <section className="bg-carbon py-20 md:py-28 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <SectionHeading align="center" code="CERTIFICATIONS & COMPLIANCE" title="Verified. Certified. Trusted." subtitle="The credentials enterprise clients and public partners require — backed by a documented safety culture." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {CERTIFICATIONS.map((c, i) => {
            const Icon = ICONS[i] || BadgeCheck;
            return (
              <motion.div key={c.abbr} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group relative border border-white/10 p-10 text-center hover:border-amber transition-colors">
                <div className="mx-auto w-20 h-20 border-2 border-amber/40 group-hover:border-amber flex items-center justify-center mb-6 transition-colors">
                  <Icon className="w-10 h-10 text-amber" />
                </div>
                <div className="font-mono text-xs text-amber tracking-widest">{c.abbr}</div>
                <h3 className="font-display font-bold text-xl text-white mt-2">{c.name}</h3>
                <p className="text-sm text-white mt-4 leading-relaxed">{c.desc}</p>
              </motion.div>
            );
          })}
        </div>
        <p className="text-center font-mono text-xs text-white mt-8">Official certification logos will replace these badges once supplied.</p>
      </div>
    </section>
  );
}