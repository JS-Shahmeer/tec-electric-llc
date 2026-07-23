import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { PROCESS_STEPS } from "@/lib/content";

export default function ProcessTimeline() {
  return (
    <section className="bg-carbon py-24 md:py-36 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <SectionHeading
          code="HOW WE WORK"
          title="A disciplined delivery process"
          subtitle="Six milestones that turn ambitious scope into energized, inspected, and documented infrastructure."
        />

        <div className="mt-16 relative">
          <div className="absolute top-6 left-0 right-0 h-px bg-white/10 hidden lg:block" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-6">
            {PROCESS_STEPS.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative"
              >
                <div className="w-12 h-12 bg-amber flex items-center justify-center font-display font-bold text-white relative z-10">
                  {s.step}
                </div>
                <h3 className="font-display font-semibold text-white text-lg mt-5">{s.title}</h3>
                <p className="text-sm text-galvanized mt-2 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}