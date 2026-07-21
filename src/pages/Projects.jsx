import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import CTABanner from "@/components/CTABanner";
import { motion } from "framer-motion";
import { MapPin, Calendar, Ruler, ArrowRight } from "lucide-react";

const HERO_IMG = "https://media.base44.com/images/public/6a4ee06353a79fd19b867c4a/ccffbeab8_generated_93e0dde5.png";
const GC_IMG = "https://media.base44.com/images/public/6a4ee06353a79fd19b867c4a/1914e6268_generated_efbfb770.png";
const ELEC_IMG = "https://media.base44.com/images/public/6a4ee06353a79fd19b867c4a/c8bd57083_generated_5bfc0dfd.png";
const LIGHT_IMG = "https://media.base44.com/images/public/6a4ee06353a79fd19b867c4a/54b956f91_generated_69b3fbbd.png";
const SUB_IMG = "https://media.base44.com/images/public/6a4ee06353a79fd19b867c4a/00cdb144a_generated_c136036b.png";

const projects = [
  { image: HERO_IMG, title: "Regional Distribution Center", industry: "Warehousing", scope: "Complete Electrical Build-Out", location: "Charlotte, NC", size: "120,000 SF" },
  { image: GC_IMG, title: "Corporate Office Renovation", industry: "Commercial Office", scope: "General Contracting & Electrical", location: "Raleigh, NC", size: "45,000 SF" },
  { image: ELEC_IMG, title: "Automotive Manufacturing Facility", industry: "Industrial", scope: "Electrical Systems Design & Build", location: "Greenville, SC", size: "200,000 SF" },
  { image: LIGHT_IMG, title: "Retail Center LED Conversion", industry: "Retail", scope: "Commercial Lighting Upgrade", location: "Charlotte, NC", size: "85,000 SF" },
  { image: SUB_IMG, title: "University Science Building", industry: "Education", scope: "Electrical Subcontracting", location: "Durham, NC", size: "65,000 SF" },
  { image: HERO_IMG, title: "Municipal Parking Deck", industry: "Government", scope: "Electrical & Lighting Systems", location: "Charlotte, NC", size: "350,000 SF" },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-obsidian">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-obsidian">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="spec-label block mb-4">[ Project Portfolio ]</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white uppercase mb-6 max-w-4xl">
              PRECISION <span className="text-voltage">PORTFOLIO</span>
            </h1>
            <p className="text-silver text-lg max-w-2xl">
              A selection of commercial and industrial projects showcasing our capabilities across diverse sectors and scales throughout the Southeast.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 lg:pb-32 bg-obsidian">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-obsidian group"
              >
                <div className="aspect-video overflow-hidden relative blueprint-overlay">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent z-10" />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="font-mono text-[10px] tracking-widest uppercase bg-voltage text-obsidian px-3 py-1 font-bold">{project.industry}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="flex items-center gap-1 text-silver text-xs font-mono">
                      <Ruler className="w-3 h-3" /> {project.size}
                    </span>
                    <span className="flex items-center gap-1 text-silver text-xs font-mono">
                      <MapPin className="w-3 h-3" /> {project.location}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg text-white uppercase mb-2 group-hover:text-voltage transition-colors">{project.title}</h3>
                  <p className="text-silver text-sm">{project.scope}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Note */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionLabel number="02" text="Growing Portfolio" />
          <h2 className="font-heading text-3xl md:text-4xl text-white uppercase mb-6">
            MORE PROJECTS <span className="text-voltage">COMING SOON</span>
          </h2>
          <p className="text-silver text-lg max-w-2xl mx-auto mb-10">
            We are continuously expanding our portfolio with new commercial projects. Contact us to discuss how TEC Electric can bring the same level of quality to your next project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-voltage text-obsidian px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-amber-400 transition-colors group"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
}