import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import CTABanner from "@/components/CTABanner";
import { motion } from "framer-motion";
import { HeartPulse, ShoppingBag, Factory, Building2, Hotel, GraduationCap, Landmark, Warehouse, Church, Home, Layers, ArrowRight } from "lucide-react";

const industries = [
  { icon: HeartPulse, name: "Healthcare", desc: "Hospitals, clinics, medical offices, and healthcare facilities requiring mission-critical electrical infrastructure with zero downtime tolerance." },
  { icon: ShoppingBag, name: "Retail", desc: "Shopping centers, grocery stores, and retail environments with specialized lighting, signage, and point-of-sale electrical systems." },
  { icon: Factory, name: "Industrial & Manufacturing", desc: "Automotive manufacturing facilities, production plants, and industrial complexes with heavy power distribution requirements." },
  { icon: Building2, name: "Commercial Office", desc: "Office buildings, corporate campuses, and mixed-use developments with modern electrical and technology infrastructure." },
  { icon: Hotel, name: "Hospitality", desc: "Hotels, restaurants, and entertainment venues requiring elegant lighting design and reliable power systems." },
  { icon: GraduationCap, name: "Education", desc: "Universities, public schools, and educational campuses with diverse electrical needs across classrooms, labs, and athletic facilities." },
  { icon: Landmark, name: "Government & Municipal", desc: "Local, state, and federal government buildings and infrastructure projects requiring strict compliance and security standards." },
  { icon: Warehouse, name: "Warehousing & Distribution", desc: "Large-scale warehouse and distribution centers with high-bay lighting, heavy power, and automated system support." },
  { icon: Church, name: "Houses of Worship", desc: "Churches, synagogues, and community centers with specialized lighting, sound system electrical, and architectural accent lighting." },
  { icon: Layers, name: "Mixed-Use Developments", desc: "Multi-purpose buildings combining residential, commercial, and retail spaces with complex electrical distribution requirements." },
];

export default function Industries() {
  return (
    <div className="min-h-screen bg-obsidian">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-obsidian">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="spec-label block mb-4">[ Industries Served ]</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white uppercase mb-6 max-w-4xl">
              POWERING EVERY<br /><span className="text-voltage">SECTOR</span>
            </h1>
            <p className="text-silver text-lg max-w-2xl">
              From healthcare to industrial manufacturing, TEC Electric delivers reliable commercial electrical solutions across diverse industries throughout the Southeast.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 lg:py-24 bg-obsidian">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-obsidian p-8 lg:p-10 group hover:bg-card transition-colors duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-card border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-voltage/30 transition-colors">
                    <ind.icon className="w-6 h-6 text-silver group-hover:text-voltage transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-white uppercase mb-2 group-hover:text-voltage transition-colors">{ind.name}</h3>
                    <p className="text-silver text-sm leading-relaxed">{ind.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionLabel number="02" text="Your Industry" />
          <h2 className="font-heading text-3xl md:text-4xl text-white uppercase mb-6">
            DON'T SEE YOUR <span className="text-voltage">INDUSTRY?</span>
          </h2>
          <p className="text-silver text-lg max-w-2xl mx-auto mb-10">
            Our expertise extends beyond the industries listed. Contact us to discuss your specific commercial electrical or general contracting needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-voltage text-obsidian px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-amber-400 transition-colors group"
          >
            Discuss Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
}