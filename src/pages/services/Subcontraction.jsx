import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import SectionLabel from "@/components/SectionLabel";
import { motion } from "framer-motion";
import { CheckCircle, Factory, Warehouse, GraduationCap, ShoppingBag, Hotel, Car, Building2 } from "lucide-react";

const HERO = "https://media.base44.com/images/public/6a4ee06353a79fd19b867c4a/00cdb144a_generated_c136036b.png";

const sectors = [
  { icon: Car, label: "Automotive Manufacturing" },
  { icon: Warehouse, label: "Warehouses" },
  { icon: Building2, label: "Parking Decks" },
  { icon: GraduationCap, label: "Universities" },
  { icon: GraduationCap, label: "Public Schools" },
  { icon: ShoppingBag, label: "Grocery Stores" },
  { icon: ShoppingBag, label: "Shopping Centers" },
  { icon: Hotel, label: "Hotels" },
];

const benefits = [
  "Well-recognized electrical expertise among general contractors and trades",
  "Proven track record across local, state, and federal government projects",
  "Experience in both public and private industrial projects",
  "Comprehensive electrical system design and build-out capabilities",
  "Consistent quality and dependable project delivery",
  "Established partnerships with leading general contractors",
];

const faqs = [
  { q: "What electrical subcontracting services does TEC provide?", a: "TEC provides comprehensive electrical subcontracting services including system design, electrical build-out, power distribution, lighting installation, and technology system integration for commercial and industrial construction projects." },
  { q: "How does TEC qualify as a subcontractor?", a: "TEC holds unlimited electrical contracting licenses in five southeastern states and has completed projects across multiple sectors including government, industrial, retail, education, and hospitality. Our minority-owned business certification also qualifies us for diversity requirements." },
  { q: "Can general contractors become qualified TEC partners?", a: "Yes. We have a prequalification process that evaluates experience, financial capacity, and references. We value quality, consistency, and reliable partnerships." },
  { q: "What scale of subcontracting projects can TEC handle?", a: "We specialize in medium to large scale electrical subcontracting. Our team of 50+ professionals and extensive resource network allows us to take on significant commercial electrical contracts." },
  { q: "What government projects has TEC completed?", a: "TEC has completed electrical contracting services across local, state, and federal government projects including public schools, university facilities, and municipal buildings throughout the Southeast." },
];

export default function Subcontracting() {
  return (
    <div className="min-h-screen bg-obsidian">
      <Navbar />
      <PageHero
        label="Subcontracting"
        title="DEPENDABLE ELECTRICAL"
        titleAccent="PARTNERSHIPS"
        description="Proven electrical subcontracting services for general contractors across commercial, industrial, and government sectors throughout the Southeast."
        image={HERO}
      />

      {/* Overview + Benefits */}
      <section className="py-24 lg:py-32 bg-obsidian">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel number="01" text="Overview" />
              <h2 className="font-heading text-3xl md:text-4xl text-white uppercase mb-6">
                TRUSTED BY<br /><span className="text-voltage">GENERAL CONTRACTORS</span>
              </h2>
              <p className="text-silver leading-relaxed mb-6">
                Over the last several years, TEC has partnered with a number of general contractors to provide electrical subcontracting services. Our expertise in electrical system design and build-out has been used to complete construction projects across the Southeast.
              </p>
              <p className="text-silver leading-relaxed">
                Our work is well recognized in the region among general contractors and the other trades in the industry. We have subcontracted our electrical services across several sectors including local, state, and federal government as well as public and private industrial projects.
              </p>
            </div>
            <div className="space-y-4">
              <SectionLabel number="02" text="Why Partner With Us" />
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

      {/* Sectors */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number="03" text="Completed Projects" />
          <h2 className="font-heading text-3xl md:text-4xl text-white uppercase mb-12">
            SECTORS <span className="text-voltage">SERVED</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5">
            {sectors.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card p-6 lg:p-8 flex flex-col items-center text-center gap-3 group hover:bg-obsidian transition-colors"
              >
                <s.icon className="w-8 h-8 text-silver group-hover:text-voltage transition-colors" />
                <span className="text-sm font-semibold text-white uppercase tracking-wider">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline />
      <FAQSection faqs={faqs} label="05" />
      <CTABanner
        title="BECOME A QUALIFIED PARTNER"
        subtitle="We value quality, consistency, and reliable partnerships. Contact us to discuss subcontracting opportunities and begin our prequalification process."
        primaryCTA="Partner With Us"
      />
      <Footer />
    </div>
  );
}