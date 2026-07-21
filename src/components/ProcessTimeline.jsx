import React from "react";
import { motion } from "framer-motion";
import SectionLabel from "@/components/SectionLabel";

const steps = [
  { num: "01", title: "Consultation", desc: "Initial project discussion to understand scope, timeline, and requirements." },
  { num: "02", title: "Planning", desc: "Detailed project planning, feasibility analysis, and cost estimation." },
  { num: "03", title: "Proposal", desc: "Comprehensive proposal with transparent pricing and project milestones." },
  { num: "04", title: "Execution", desc: "Professional construction with rigorous safety and quality standards." },
  { num: "05", title: "Inspection", desc: "Thorough quality inspection and testing of all systems." },
  { num: "06", title: "Completion", desc: "Project handover with documentation, walk-throughs, and follow-up support." },
];

export default function ProcessTimeline() {
  return (
    <section className="py-24 lg:py-32 bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel number="05" text="Our Process" />
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white uppercase mb-16">
          FROM CONCEPT TO<br />
          <span className="text-voltage">COMPLETION</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-obsidian p-8 lg:p-10 group hover:bg-card transition-colors duration-300"
            >
              <span className="font-heading text-5xl text-white/5 group-hover:text-voltage/20 transition-colors">{step.num}</span>
              <h3 className="font-heading text-lg text-white uppercase mt-4 mb-3 group-hover:text-voltage transition-colors">{step.title}</h3>
              <p className="text-silver text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}