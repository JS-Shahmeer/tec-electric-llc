import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import SectionLabel from "@/components/SectionLabel";
import { motion } from "framer-motion";
import { CheckCircle, Lightbulb, TrendingDown, Leaf, Wrench } from "lucide-react";

const HERO = "https://media.base44.com/images/public/6a4ee06353a79fd19b867c4a/54b956f91_generated_69b3fbbd.png";

const capabilities = [
  { icon: Lightbulb, title: "LED Conversions", desc: "Upgrade from traditional lighting to state-of-the-art LED systems that provide better illumination with significantly lower energy consumption." },
  { icon: TrendingDown, title: "Cost Reduction", desc: "Our lighting solutions consistently deliver 30-50% reductions in energy costs while improving light quality and workplace safety." },
  { icon: Leaf, title: "Sustainable Solutions", desc: "Environmentally conscious lighting designs that reduce heat output, lower carbon footprint, and support your sustainability goals." },
  { icon: Wrench, title: "Maintenance & Repairs", desc: "Comprehensive fixture replacement, upgrade, and repair services from our experienced and well-qualified electrical technicians." },
];

const benefits = [
  "Experienced electrical technicians specializing in commercial lighting",
  "LED conversion expertise that reduces utility costs by 30-50%",
  "Environmentally conscious and sustainable energy solutions",
  "Fixture replacements, upgrades, and repairs",
  "Better illumination with reduced heat output",
  "Commitment to lowering operating costs for our clients",
];

const faqs = [
  { q: "How much can LED conversion save on energy costs?", a: "Our commercial LED conversions typically deliver 30-50% reductions in energy costs. The exact savings depend on your current lighting systems, usage patterns, and facility size. We provide detailed cost analyses before any project begins." },
  { q: "What types of commercial lighting does TEC service?", a: "We handle all types of commercial and industrial lighting including warehouse high-bay fixtures, office lighting systems, retail display lighting, parking lot and exterior lighting, and specialty industrial lighting applications." },
  { q: "Does TEC offer lighting maintenance contracts?", a: "Yes. We offer ongoing lighting maintenance agreements that include regular inspections, fixture replacements, and emergency repair services to keep your facilities fully operational." },
  { q: "How long does a typical LED conversion project take?", a: "Project timelines vary based on facility size and scope. Most commercial LED conversion projects are completed within 2-6 weeks. We work with your schedule to minimize disruption to your operations." },
  { q: "Are there rebates available for LED conversions?", a: "Many utility companies offer rebates and incentives for commercial LED upgrades. Our team can help you identify and apply for available programs in your area to maximize your return on investment." },
];

export default function CommercialLighting() {
  return (
    <div className="min-h-screen bg-obsidian">
      <Navbar />
      <PageHero
        label="Commercial Lighting"
        title="ILLUMINATING"
        titleAccent="EFFICIENCY"
        description="Energy-efficient commercial lighting solutions that lower operating costs, improve illumination, and support sustainable business practices."
        image={HERO}
      />

      {/* Overview + Benefits */}
      <section className="py-24 lg:py-32 bg-obsidian">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel number="01" text="Overview" />
              <h2 className="font-heading text-3xl md:text-4xl text-white uppercase mb-6">
                SMARTER LIGHT.<br /><span className="text-voltage">LOWER COSTS.</span>
              </h2>
              <p className="text-silver leading-relaxed mb-6">
                Our lighting and electrical specialists can accommodate a wide array of lighting maintenance and electrical needs. With a complement of experienced and well-qualified electrical technicians, we specialize in fixture replacements, upgrades, and repairs.
              </p>
              <p className="text-silver leading-relaxed">
                We have assisted numerous clients with lowering their operating costs by converting contemporary lighting sources to state-of-the-art lighting that provides better illumination with less heat output, resulting in significantly lower utility costs. At TEC, we are committed to environmentally conscious initiatives and sustainable energy.
              </p>
            </div>
            <div className="space-y-4">
              <SectionLabel number="02" text="Benefits" />
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
          <SectionLabel number="03" text="Solutions" />
          <h2 className="font-heading text-3xl md:text-4xl text-white uppercase mb-16">
            LIGHTING <span className="text-voltage">SOLUTIONS</span>
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

      <ProcessTimeline />
      <FAQSection faqs={faqs} label="05" />
      <CTABanner />
      <Footer />
    </div>
  );
}