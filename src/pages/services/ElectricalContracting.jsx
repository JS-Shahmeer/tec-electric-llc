import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import SectionLabel from "@/components/SectionLabel";
import IndustryCard from "@/components/IndustryCard";
import { motion } from "framer-motion";
import { CheckCircle, Zap, Settings, Wrench, Building2, Factory, GraduationCap, Warehouse, HeartPulse, Landmark } from "lucide-react";

const HERO = "https://media.base44.com/images/public/6a4ee06353a79fd19b867c4a/c8bd57083_generated_5bfc0dfd.png";

const capabilities = [
  { icon: Zap, title: "Power Distribution", desc: "Complete commercial and industrial power distribution systems including switchgear, panels, and transformers." },
  { icon: Settings, title: "Systems Design", desc: "In-house electrical engineering for system design, load calculations, and code compliance." },
  { icon: Wrench, title: "Installation & Build-Out", desc: "Expert installation of conduit, wiring, fixtures, and electrical equipment for new construction and renovations." },
  { icon: Building2, title: "Maintenance & Upgrades", desc: "Ongoing electrical maintenance, system upgrades, and emergency repair services for commercial facilities." },
];

const benefits = [
  "Unlimited electrical contracting license in 5 states",
  "In-house engineering and design capabilities",
  "Medium to large scale commercial project expertise",
  "Self-perform all technology systems",
  "Safety-first approach with 250,000+ safe man-hours",
  "Minority-owned business enterprise certification",
];

const industries = [
  { icon: Factory, label: "Manufacturing" },
  { icon: Warehouse, label: "Warehousing" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: GraduationCap, label: "Education" },
  { icon: Building2, label: "Commercial" },
  { icon: Landmark, label: "Government" },
];

const faqs = [
  { q: "What scope of electrical work does TEC Electric handle?", a: "We handle everything from complete electrical system design and build-out to power distribution, lighting systems, network infrastructure, and security system installations for commercial and industrial facilities." },
  { q: "Does TEC Electric have in-house engineering?", a: "Yes. TEC Engineering is registered to provide engineering services in North Carolina, South Carolina, and Georgia. Our in-house team handles electrical system design, load calculations, and ensures full code compliance." },
  { q: "What certifications does TEC Electric hold?", a: "TEC holds unlimited electrical contracting licenses in North Carolina, South Carolina, Virginia, Georgia, and Tennessee. We are also a certified minority-owned business enterprise." },
  { q: "Can TEC handle technology systems beyond electrical?", a: "TEC self-performs all technology systems except fire alarm, lightning protection, and life safety systems. For these specialized areas, we partner with select companies with whom we have long histories of successful collaboration." },
  { q: "What size projects can TEC Electric support?", a: "We specialize in medium to large scale commercial and industrial projects. Our extensive network and team of 50+ professionals allows us to take on significant commercial electrical contracts." },
];

export default function ElectricalContracting() {
  return (
    <div className="min-h-screen bg-obsidian">
      <Navbar />
      <PageHero
        label="Electrical Contracting"
        title="POWERING COMMERCIAL"
        titleAccent="INFRASTRUCTURE"
        description="Complete commercial and industrial electrical systems design, installation, and maintenance with in-house engineering capabilities."
        image={HERO}
      />

      {/* Overview + Benefits */}
      <section className="py-24 lg:py-32 bg-obsidian">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel number="01" text="Overview" />
              <h2 className="font-heading text-3xl md:text-4xl text-white uppercase mb-6">
                ELECTRICAL<br /><span className="text-voltage">EXPERTISE</span>
              </h2>
              <p className="text-silver leading-relaxed mb-6">
                TEC Electric is a leading minority-owned firm with expertise in electrical systems design and electrical systems build-out. We specialize in both redesign and ground-up projects, delivering solutions that meet the demands of modern commercial facilities.
              </p>
              <p className="text-silver leading-relaxed">
                With our in-house engineering team and unlimited electrical contracting licenses across five states, we provide integrated electrical solutions that reduce project delays and ensure the highest standards of safety and quality.
              </p>
            </div>
            <div className="space-y-4">
              <SectionLabel number="02" text="Why TEC" />
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 p-4 bg-card border border-white/5"
                >
                  <CheckCircle className="w-5 h-5 text-voltage flex-shrink-0 mt-0.5" />
                  <span className="text-white text-sm">{b}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number="03" text="Capabilities" />
          <h2 className="font-heading text-3xl md:text-4xl text-white uppercase mb-16">
            FULL-SPECTRUM <span className="text-voltage">ELECTRICAL</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8 lg:p-10 group hover:bg-obsidian transition-colors"
              >
                <cap.icon className="w-8 h-8 text-voltage mb-4" />
                <h3 className="font-heading text-lg text-white uppercase mb-3">{cap.title}</h3>
                <p className="text-silver text-sm leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 lg:py-32 bg-obsidian">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number="04" text="Industries" />
          <h2 className="font-heading text-3xl md:text-4xl text-white uppercase mb-12">
            SECTORS WE <span className="text-voltage">POWER</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5">
            {industries.map((ind, i) => (
              <IndustryCard key={ind.label} {...ind} index={i} />
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline />
      <FAQSection faqs={faqs} label="06" />
      <CTABanner />
      <Footer />
    </div>
  );
}