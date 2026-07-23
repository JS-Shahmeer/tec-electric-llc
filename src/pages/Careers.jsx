import React from "react";
import { motion } from "framer-motion";
import { DollarSign, Shield, GraduationCap, TrendingUp, Clock, Users, Quote } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import CTABanner from "@/components/shared/CTABanner";
import AmberButton from "@/components/ui/AmberButton";
import ApplicationForm from "@/components/forms/ApplicationForm";
import { CAREERS_BENEFITS, CAREERS_CULTURE, COMPANY } from "@/lib/content";
import { IMAGES } from "@/lib/images";

const ICONS = { DollarSign, Shield, GraduationCap, TrendingUp, Clock, Users };

export default function Careers() {
  return (
    <>
      <PageHero code="CAREERS AT TEC" title="Build a career, not just a paycheck" subtitle="We hire people who take pride in precision and safety — and we invest in them for the long haul." image={IMAGES.careersCrew} />

      <section className="bg-carbon py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading code="WHY WORK WITH TEC" title="Work on the projects that matter" />
            <p className="text-white text-lg mt-6 leading-relaxed">At TEC Electric you'll work on landmark commercial projects alongside seasoned professionals who hold the highest standards in the industry. We reward craftsmanship, back our people with real benefits, and give every team member a path forward.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <AmberButton href="#apply" arrow>Apply Now</AmberButton>
              <AmberButton href={`mailto:${COMPANY.hr_email}`} variant="outline">{COMPANY.hr_email}</AmberButton>
            </div>
          </div>
          <img src={IMAGES.fieldCrewConstructionSite} alt="TEC Electric field crew working on a commercial construction site" className="w-full aspect-[3/2] object-cover" />
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-neutral-950 border-y border-white/10 py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <SectionHeading align="center" code="BENEFITS" title="What we offer" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {CAREERS_BENEFITS.map((b, i) => {
              const Icon = ICONS[b.icon] || Shield;
              return (
                <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="border border-white/10 p-8 hover:border-amber transition-colors">
                  <Icon className="w-8 h-8 text-amber" />
                  <h3 className="font-display font-bold text-xl text-white mt-5">{b.title}</h3>
                  <p className="text-sm text-white mt-3 leading-relaxed">{b.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="bg-carbon py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeading code="COMPANY CULTURE" title="A team that has each other's backs" />
            <p className="text-white text-lg mt-6 leading-relaxed">Our culture is built on safety, mentorship, and respect. When you join TEC, you join a crew that's in it for the long term — and a company that invests in your growth.</p>
            <div className="mt-8 border-l-2 border-amber pl-6">
              <Quote className="w-6 h-6 text-amber mb-2" />
              <p className="font-display text-xl text-white leading-snug">"We invest in our people because they build our reputation on every site."</p>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-px bg-white/10 border border-white/10">
            {CAREERS_CULTURE.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-carbon p-6 md:p-7 flex gap-5">
                <span className="font-mono text-amber text-sm shrink-0">0{i + 1}</span>
                <p className="text-white/90 text-sm leading-relaxed">{c}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple form */}
      <section id="apply" className="bg-structural py-20 md:py-28 scroll-mt-24">
        <div className="max-w-3xl mx-auto px-5 md:px-10">
          <div className="bg-carbon border border-white/10 p-8 md:p-12">
            <SectionHeading code="APPLY NOW" title="Send us your resume" subtitle="Tell us a little about yourself. We review every application personally." />
            <div className="mt-10"><ApplicationForm /></div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}