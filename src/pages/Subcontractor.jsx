import React from "react";
import { motion } from "framer-motion";
import { ClipboardCheck, Users, ShieldCheck, FileCheck } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import CTABanner from "@/components/shared/CTABanner";
import SubcontractorForm from "@/components/forms/SubcontractorForm";
import { SUBCONTRACTOR_STEPS } from "@/lib/content";

const WHY = [
  { icon: Users, title: "Grow with us", desc: "Join a bid list that spans healthcare, industrial, retail, and mixed-use projects." },
  { icon: ShieldCheck, title: "Safety partners", desc: "We partner with subcontractors who share our safety-first culture and standards." },
  { icon: FileCheck, title: "Transparent terms", desc: "Clear scopes, fair terms, and on-time payment — that's the standard we hold." },
];

export default function Subcontractor() {
  return (
    <>
      <PageHero code="SUBCONTRACTOR PREQUALIFICATION" title="Partner with TEC Electric" subtitle="We're always looking for qualified subcontractors who share our standards for safety, quality, and reliability. Submit your prequalification below." />

      <section className="bg-carbon py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {WHY.map((w, i) => (
            <motion.div key={w.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="border border-white/10 p-8 hover:border-amber transition-colors">
              <w.icon className="w-9 h-9 text-amber" />
              <h3 className="font-display font-bold text-xl text-white mt-5">{w.title}</h3>
              <p className="text-sm text-galvanized mt-3 leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-neutral-950 border-y border-white/10 py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <SectionHeading code="THE PROCESS" title="How prequalification works" />
            <div className="mt-10 space-y-8">
              {SUBCONTRACTOR_STEPS.map((s, i) => (
                <motion.div key={s.step} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex gap-5">
                  <div className="shrink-0 w-12 h-12 border border-amber flex items-center justify-center font-mono text-amber">{s.step}</div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg">{s.title}</h3>
                    <p className="text-galvanized text-sm mt-2 leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-10 border border-white/10 p-6 flex items-start gap-4">
              <ClipboardCheck className="w-6 h-6 text-amber shrink-0" />
              <p className="text-galvanized text-sm leading-relaxed">Prequalification is free and takes about 10 minutes. Approved partners are added to our active bid list and onboarded into our safety and reporting systems.</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="border border-white/10 bg-carbon p-8 md:p-10">
              <h3 className="font-display font-bold text-white text-2xl">Prequalification form</h3>
              <p className="text-galvanized text-sm mt-2">Fields marked * are required.</p>
              <div className="mt-8"><SubcontractorForm /></div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Ready to partner with TEC?" />
    </>
  );
}