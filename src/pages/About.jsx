import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Target, HeartHandshake, Award, Crosshair, Eye } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import CTABanner from "@/components/shared/CTABanner";
import Certifications from "@/components/shared/Certifications";
import TrustSignals from "@/components/shared/TrustSignals";
import MetricsCounter from "@/components/shared/MetricsCounter";
import { METRICS } from "@/lib/content";
import { IMAGES } from "@/lib/images";

const VALUES = [
  { icon: ShieldCheck, title: "Safety First", desc: "Documented protocols and continuous training keep every crew and site protected." },
  { icon: Crosshair, title: "Precision", desc: "Engineering-led execution measured against code, spec, and schedule." },
  { icon: HeartHandshake, title: "Partnership", desc: "We build relationships that outlast the projects we deliver." },
  { icon: Award, title: "Quality", desc: "Multi-stage QA ensures work that performs for decades, not just at handover." },
];

const PHILOSOPHY = [
  { k: "Lead from the field", v: "Our project managers and field leaders work side by side with crews — decisions happen where the work happens." },
  { k: "Communicate proactively", v: "Transparent, milestone-driven reporting means no surprises for owners or general contractors." },
  { k: "Invest in people", v: "We train and promote from within because our people build our reputation on every site." },
  { k: "Engineer the outcome", v: "Every engagement starts with load analysis, risk identification, and a plan built to protect your schedule." },
];

const SAFETY_STATS = [
  { static: "1.2M+", l: "Safe Work Hours" },
  { v: 99, s: "%", l: "Safety Rating" },
  { v: 100, s: "%", l: "Crews Trained" },
];

export default function About() {
  return (
    <>
      <PageHero code="ABOUT TEC ELECTRIC" title="Powering commerce with precision and trust" subtitle="A commercial electrical and general contracting partner built on engineering rigor, a safety-first culture, and long-term relationships." image={IMAGES.fieldTeam} />

      {/* Mission & Vision */}
      <section className="bg-carbon py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="border border-white/10 p-8 md:p-10 hover:border-amber/50 transition-colors">
            <Target className="w-10 h-10 text-amber" />
            <h2 className="font-display font-bold text-white text-2xl md:text-3xl mt-6">Our Mission</h2>
            <p className="text-galvanized text-lg mt-4 leading-relaxed">To deliver engineering-grade electrical and general contracting that keeps commerce running — on time, on budget, and built to code — while protecting every crew and client we serve.</p>
          </div>
          <div className="border border-white/10 p-8 md:p-10 hover:border-amber/50 transition-colors">
            <Eye className="w-10 h-10 text-amber" />
            <h2 className="font-display font-bold text-white text-2xl md:text-3xl mt-6">Our Vision</h2>
            <p className="text-galvanized text-lg mt-4 leading-relaxed">To be the most trusted commercial electrical partner in the region — the firm enterprise clients and general contractors call first when the work can't fail.</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-neutral-950 border-y border-white/10 py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <SectionHeading align="center" code="CORE VALUES" title="The principles behind every project" subtitle="What we stand for — on every site, with every crew, for every client." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {VALUES.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="border border-white/10 p-8 hover:border-amber transition-colors">
                <div className="w-12 h-12 bg-amber flex items-center justify-center mb-5"><v.icon className="w-6 h-6 text-white" /></div>
                <h3 className="font-display font-bold text-xl text-white">{v.title}</h3>
                <p className="text-sm text-galvanized mt-3 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="bg-carbon py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeading code="LEADERSHIP PHILOSOPHY" title="How we run the work" />
            <p className="text-galvanized text-lg mt-6 leading-relaxed">Great infrastructure is a leadership outcome. Our leaders set the standard on safety, communication, and quality — then hold the line in the field, every shift.</p>
            <div className="mt-8 border-l-2 border-amber pl-6">
              <p className="font-display text-xl text-white leading-snug">"We don't ask our crews to do anything we wouldn't do ourselves — safety first, every time."</p>
              <p className="font-mono text-xs text-galvanized mt-4">— TEC ELECTRIC LEADERSHIP</p>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-px bg-white/10 border border-white/10">
            {PHILOSOPHY.map((p, i) => (
              <motion.div key={p.k} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-carbon p-6 md:p-8 flex gap-6">
                <span className="font-mono text-amber text-sm shrink-0">0{i + 1}</span>
                <div>
                  <h3 className="font-display font-bold text-white text-lg">{p.k}</h3>
                  <p className="text-galvanized text-sm mt-2 leading-relaxed">{p.v}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment to Safety */}
      <section className="bg-structural py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading light code="COMMITMENT TO SAFETY" title="Safety is non-negotiable" />
            <p className="text-neutral-600 text-lg mt-6 leading-relaxed">Our safety-first culture is backed by documented protocols, OSHA-aligned training, and a track record of 1.2M+ safe work hours. Every field leader carries OSHA 30 certification, and we maintain the licensing, bonding, and insurance that owners and general contractors require.</p>
            <div className="flex flex-wrap gap-4 mt-8">
              {["OSHA 30 Certified Field Leaders", "Licensed & Bonded", "Fully Insured", "EPA Compliant"].map((b) => (
                <span key={b} className="flex items-center gap-2 border border-neutral-300 px-4 py-2 text-sm text-carbon font-medium"><ShieldCheck className="w-4 h-4 text-amber" /> {b}</span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">
            {SAFETY_STATS.map((x) => (
              <div key={x.l} className="bg-white p-6 md:p-8 text-center">
                <div className="font-display font-bold text-amber text-3xl md:text-4xl">{x.static ? x.static : <MetricsCounter value={x.v} suffix={x.s} />}</div>
                <div className="font-mono text-[11px] text-neutral-500 tracking-wider mt-2 uppercase">{x.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics counters */}
      <section className="relative bg-gradient-to-b from-royal to-carbon py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 blue-grid opacity-30" aria-hidden="true" />
        <div className="relative max-w-[1400px] mx-auto px-5 md:px-10">
          <SectionHeading align="center" code="COMPANY METRICS" title="Two decades of measurable impact" />
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-px bg-white/10 border border-white/10 mt-14">
            {METRICS.map((m, i) => (
              <motion.div key={m.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-carbon/60 p-6 md:p-8 text-center">
                <div className="font-display font-bold text-amber text-4xl md:text-5xl"><MetricsCounter value={m.value} suffix={m.suffix} /></div>
                <div className="font-mono text-[11px] text-galvanized tracking-wider mt-3 uppercase">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Certifications />
      <TrustSignals />
      <CTABanner />
    </>
  );
}