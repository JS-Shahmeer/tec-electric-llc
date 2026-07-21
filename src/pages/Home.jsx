import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Clock, Users, Zap, Building2, Factory, GraduationCap, Hotel, ShoppingBag, Church, Warehouse, HeartPulse, Landmark, Wrench, CheckCircle, Handshake } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import StatCard from "@/components/StatCard";
import ServiceCard from "@/components/ServiceCard";
import IndustryCard from "@/components/IndustryCard";
import ProcessTimeline from "@/components/ProcessTimeline";
import TestimonialSlider from "@/components/TestimonialSlider";
import CTABanner from "@/components/CTABanner";

const HERO_IMG = "https://media.base44.com/images/public/6a4ee06353a79fd19b867c4a/ccffbeab8_generated_93e0dde5.png";
const GC_IMG = "https://media.base44.com/images/public/6a4ee06353a79fd19b867c4a/1914e6268_generated_efbfb770.png";
const ELEC_IMG = "https://media.base44.com/images/public/6a4ee06353a79fd19b867c4a/c8bd57083_generated_5bfc0dfd.png";
const LIGHT_IMG = "https://media.base44.com/images/public/6a4ee06353a79fd19b867c4a/54b956f91_generated_69b3fbbd.png";
const SUB_IMG = "https://media.base44.com/images/public/6a4ee06353a79fd19b867c4a/00cdb144a_generated_c136036b.png";

const services = [
  { image: GC_IMG, title: "General Contracting", description: "Full-scale commercial construction management from pre-construction through project completion. Licensed across five southeastern states.", link: "/services/general-contracting" },
  { image: ELEC_IMG, title: "Electrical Contracting", description: "Complete commercial and industrial electrical systems design, installation, and maintenance for medium to large scale projects.", link: "/services/electrical-contracting" },
  { image: LIGHT_IMG, title: "Commercial Lighting", description: "Energy-efficient lighting design, LED conversions, and maintenance solutions that reduce operating costs while improving illumination.", link: "/services/commercial-lighting" },
  { image: SUB_IMG, title: "Subcontracting", description: "Dependable electrical subcontracting services for general contractors across commercial, industrial, and government sectors.", link: "/services/subcontracting" },
];

const industries = [
  { icon: HeartPulse, label: "Healthcare" },
  { icon: ShoppingBag, label: "Retail" },
  { icon: Factory, label: "Industrial" },
  { icon: Building2, label: "Office" },
  { icon: Hotel, label: "Hospitality" },
  { icon: GraduationCap, label: "Education" },
  { icon: Landmark, label: "Government" },
  { icon: Warehouse, label: "Warehousing" },
  { icon: Church, label: "Churches" },
];

const differentiators = [
  { icon: Users, title: "Experienced Team", desc: "50+ professionals with decades of combined commercial construction experience." },
  { icon: Award, title: "Licensed Professionals", desc: "Unlimited electrical and general contracting licenses across five southeastern states." },
  { icon: Shield, title: "Safety First", desc: "250,000+ safe man-hours with rigorous safety protocols on every job site." },
  { icon: CheckCircle, title: "Quality Assurance", desc: "In-house engineering capabilities ensure precision from design through completion." },
  { icon: Clock, title: "On-Time Delivery", desc: "Proven track record of meeting deadlines and keeping projects on schedule." },
  { icon: Handshake, title: "Long-Term Partnerships", desc: "We build relationships, not just buildings. Repeat clients trust us with their most critical projects." },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-obsidian">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Commercial construction site at golden hour" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-obsidian/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="spec-label block mb-4">[ Commercial Electrical & General Contracting ]</span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white uppercase leading-none mb-6 max-w-5xl">
              WE POWER THE<br />
              SCALE OF <span className="text-voltage">NORTH CAROLINA</span>
            </h1>
            <p className="text-silver text-lg lg:text-xl max-w-2xl mb-10">
              TEC Electric is a licensed general contracting firm with in-house engineering capabilities, specializing in medium to large scale commercial and industrial projects across the Southeast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-voltage text-obsidian px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-amber-400 transition-colors group"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services/general-contracting"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 font-bold uppercase tracking-wider text-sm hover:border-voltage hover:text-voltage transition-colors"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] tracking-widest text-silver uppercase rotate-90 origin-center translate-y-6">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-voltage to-transparent" />
        </motion.div>
      </section>

      {/* ── TRUST STATS ── */}
      <section className="bg-card border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5">
            <StatCard value="18" suffix="+" label="Years in Business" icon={Clock} />
            <StatCard value="500" suffix="+" label="Projects Completed" icon={Award} />
            <StatCard value="5" label="States Licensed" icon={Shield} />
            <StatCard value="50" suffix="+" label="Team Members" icon={Users} />
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 lg:py-32 bg-obsidian">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number="02" text="Services" />
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white uppercase max-w-2xl">
              COMMERCIAL-GRADE<br />
              <span className="text-voltage">SOLUTIONS</span>
            </h2>
            <p className="text-silver max-w-md text-sm leading-relaxed">
              From ground-up construction to specialized electrical systems, we deliver dependable commercial solutions that keep businesses operational.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number="03" text="Industries" />
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white uppercase mb-16">
            SECTORS WE <span className="text-voltage">SERVE</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-white/5">
            {industries.map((ind, i) => (
              <IndustryCard key={ind.label} {...ind} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 lg:py-32 bg-obsidian">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number="04" text="Differentiators" />
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white uppercase mb-16">
            WHY CHOOSE<br />
            <span className="text-voltage">TEC ELECTRIC</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {differentiators.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-obsidian p-8 lg:p-10 group hover:bg-card transition-colors duration-300"
              >
                <item.icon className="w-8 h-8 text-voltage mb-4" />
                <h3 className="font-heading text-lg text-white uppercase mb-3">{item.title}</h3>
                <p className="text-silver text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <ProcessTimeline />

      {/* ── TESTIMONIALS ── */}
      <TestimonialSlider />

      {/* ── CTA ── */}
      <CTABanner />

      <Footer />
    </div>
  );
}