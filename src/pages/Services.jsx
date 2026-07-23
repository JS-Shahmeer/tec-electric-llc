import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import CTABanner from "@/components/shared/CTABanner";
import { CAPABILITIES } from "@/lib/content";
import { IMAGES } from "@/lib/images";

export default function Services() {
  return (
    <>
      <PageHero
        code="OUR CAPABILITIES"
        title="Engineering-grade electrical & contracting"
        subtitle="Five integrated disciplines delivered by one accountable partner — built to protect your schedule, budget, and uptime."
        image={IMAGES.electricalMacro}
      />

      <section className="bg-carbon py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 space-y-6">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 border border-white/10 overflow-hidden group"
            >
              <div className={`relative min-h-[300px] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <img src={cap.image} alt={`${cap.title} — commercial electrical work by TEC Electric`} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <span className="absolute top-4 left-4 font-mono text-[10px] bg-carbon/70 text-amber px-2 py-1 backdrop-blur">{cap.code}</span>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center bg-carbon">
                <div className="w-12 h-12 border border-white/15 flex items-center justify-center mb-5">
                  <cap.icon className="w-6 h-6 text-amber" />
                </div>
                <h2 className="font-display font-bold text-3xl text-white">{cap.title}</h2>
                <p className="text-white mt-4 leading-relaxed">{cap.description}</p>
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {cap.benefits.map((b) => (
                    <span key={b} className="flex items-center gap-2 text-sm text-white/80"><Check className="w-4 h-4 text-amber shrink-0" /> {b}</span>
                  ))}
                </div>
                <Link to={`/services/${cap.slug}`} className="mt-8 font-mono text-sm text-amber flex items-center gap-2 hover:gap-3 transition-all focus-wire w-fit">
                  VIEW CAPABILITY <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <ProcessTimeline />
      <CTABanner />
    </>
  );
}