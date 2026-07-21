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
import { CheckCircle, Building2, Factory, GraduationCap, Hotel, ShoppingBag, Warehouse, HeartPulse, Landmark } from "lucide-react";

const HERO = "https://media.base44.com/images/public/6a4ee06353a79fd19b867c4a/1914e6268_generated_efbfb770.png";

const phases = [
  { title: "Pre-Construction", items: ["Estimating", "Feasibility Analysis", "Planning & Scheduling", "Cost Control", "Safety Planning", "Quality Standards"] },
  { title: "Construction", items: ["Project Management", "Change Order Management", "Labor Relations", "Quality Control", "Safety Compliance", "Progress Reporting"] },
  { title: "Post-Construction", items: ["Project Close-outs", "Lien Releases", "Walk-throughs", "Follow-up Support", "Documentation", "Warranty Management"] },
];

const benefits = [
  "Licensed general contractor in NC, SC, VA, TN, and GA",
  "In-house engineering capabilities for integrated solutions",
  "Dedicated project management from start to finish",
  "Rigorous safety protocols exceeding OSHA standards",
  "Transparent cost estimation and change order management",
  "Extensive network of qualified subcontractor partners",
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
];

const faqs = [
  { q: "What types of commercial projects does TEC Electric handle?", a: "We specialize in medium to large scale commercial and industrial projects including warehouses, retail spaces, office buildings, healthcare facilities, educational institutions, government buildings, and more." },
  { q: "In which states is TEC Electric licensed?", a: "TEC holds unlimited general contracting licenses in North Carolina and South Carolina, and unlimited electrical contracting licenses in North Carolina, South Carolina, Virginia, Georgia, and Tennessee." },
  { q: "What does the pre-construction process look like?", a: "Our pre-construction phase includes detailed estimating, feasibility analysis, comprehensive planning and scheduling, cost control strategies, safety planning, and quality standard development." },
  { q: "Does TEC Electric handle both design and build?", a: "Yes. With our in-house engineering capabilities, we offer integrated design-build services that streamline project delivery and reduce coordination issues." },
  { q: "How does TEC ensure project safety?", a: "Safety is built into every phase of our projects. We maintain rigorous safety protocols, conduct regular safety audits, and have accumulated over 250,000 safe man-hours across our project portfolio." },
];

export default function GeneralContracting() {
  return (
    <div className="min-h-screen bg-obsidian">
      <Navbar />
      <PageHero
        label="General Contracting"
        title="BUILDING COMMERCIAL"
        titleAccent="EXCELLENCE"
        description="Licensed general contractor specializing in medium to large scale commercial and industrial projects across five southeastern states."
        image={HERO}
      />

      {/* Overview */}
      <section className="py-24 lg:py-32 bg-obsidian">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel number="01" text="Overview" />
              <h2 className="font-heading text-3xl md:text-4xl text-white uppercase mb-6">
                YOUR PROJECT.<br /><span className="text-voltage">OUR PARTNERSHIP.</span>
              </h2>
              <p className="text-silver leading-relaxed mb-6">
                TEC is a licensed general contractor in North Carolina, South Carolina, Virginia, Tennessee, and Georgia. We view each project as a partnership between our client and us. We walk with you through each phase of the construction process from pre-construction to post-construction.
              </p>
              <p className="text-silver leading-relaxed">
                Our firm specializes in medium to large scale commercial and industrial projects. With in-house engineering capabilities, we deliver integrated solutions that reduce coordination issues and keep your project on schedule and on budget.
              </p>
            </div>
            <div className="space-y-4">
              <SectionLabel number="02" text="Capabilities" />
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

      {/* Phases */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number="03" text="Project Phases" />
          <h2 className="font-heading text-3xl md:text-4xl text-white uppercase mb-16">
            FULL-CYCLE <span className="text-voltage">MANAGEMENT</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card p-8 lg:p-10"
              >
                <span className="font-heading text-5xl text-white/5">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-heading text-xl text-white uppercase mt-4 mb-6">{phase.title}</h3>
                <ul className="space-y-3">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-silver text-sm">
                      <div className="w-1.5 h-1.5 bg-voltage rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
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
            INDUSTRIES WE <span className="text-voltage">SERVE</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5">
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