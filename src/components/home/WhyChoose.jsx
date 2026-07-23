import React from "react";
import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { DIFFERENTIATORS } from "@/lib/content";

export default function WhyChoose() {
  return (
    <section className="bg-structural py-24 md:py-36">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <SectionHeading
          light
          align="center"
          code="THE DIFFERENCE"
          title="Why companies choose TEC"
          subtitle="A disciplined, engineering-led approach — not a general trade with an electrical division."
        />

        <div className="mt-16 mx-auto max-w-4xl overflow-x-auto border border-neutral-200 bg-white shadow-sm">
          <div className="min-w-[720px]">
            <div className="grid grid-cols-12 bg-carbon text-white">
              <div className="col-span-6 p-5 font-mono text-xs tracking-widest">DIFFERENTIATOR</div>
              <div className="col-span-3 p-5 font-mono text-xs tracking-widest text-amber border-l border-white/10">TEC ELECTRIC</div>
              <div className="col-span-3 p-5 font-mono text-xs tracking-widest text-white border-l border-white/10">TYPICAL FIRM</div>
            </div>
            {DIFFERENTIATORS.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="grid grid-cols-12 border-t border-neutral-200 items-stretch"
              >
                <div className="col-span-6 p-5 font-display font-semibold text-carbon">{d.title}</div>
                <div className="col-span-3 p-5 border-l border-neutral-200 flex items-start gap-2 text-sm text-carbon bg-amber/5">
                  <Check className="w-4 h-4 text-amber shrink-0 mt-0.5" /> <span>{d.tec}</span>
                </div>
                <div className="col-span-3 p-5 border-l border-neutral-200 flex items-start gap-2 text-sm text-neutral-400">
                  <Minus className="w-4 h-4 shrink-0 mt-0.5" /> <span>{d.others}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}