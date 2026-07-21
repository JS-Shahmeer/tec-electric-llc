import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import { motion } from "framer-motion";
import { Shield, TrendingUp, Heart, Users, GraduationCap, Award, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const HERO = "https://media.base44.com/images/public/6a4ee06353a79fd19b867c4a/f6f24c004_generated_3b80130d.png";

const reasons = [
  { icon: Shield, title: "Safety Culture", desc: "Your safety is our top priority. Industry-leading safety protocols and training ensure everyone goes home safe." },
  { icon: TrendingUp, title: "Career Growth", desc: "Clear paths for advancement from apprentice to superintendent. We invest in your professional development." },
  { icon: Heart, title: "Benefits Package", desc: "Competitive compensation, health insurance, retirement plans, and paid time off for you and your family." },
  { icon: GraduationCap, title: "Training & Development", desc: "Ongoing technical training, certification support, and hands-on mentorship from experienced professionals." },
  { icon: Users, title: "Team Environment", desc: "Join a diverse, supportive team of 50+ professionals who take pride in their craft and support each other." },
  { icon: Award, title: "Industry Leader", desc: "Work on medium to large commercial projects across the Southeast with a respected minority-owned firm." },
];

const openings = [
  {
    title: "Commercial Superintendent",
    type: "Full-Time",
    location: "Charlotte, NC",
    desc: "Manage all phases of commercial building projects including scheduling, inspections, quality control, and job site safety. Minimum associate's degree in construction management; BS in engineering or construction management preferred.",
  },
  {
    title: "Electricians",
    type: "Full-Time",
    location: "Charlotte, NC & Project Sites",
    desc: "Seeking electricians with varying degrees of education and experience for current and upcoming commercial projects. Minimum 3 years of electrical experience with concentration in commercial and industrial work. Electrical license and certifications are a plus.",
  },
  {
    title: "Electrical Superintendents",
    type: "Full-Time",
    location: "Charlotte, NC & Project Sites",
    desc: "Lead electrical teams on large-scale commercial and industrial projects. Oversee installation quality, safety compliance, and project scheduling. Extensive commercial electrical experience required.",
  },
];

export default function Careers() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", experience: "", certification: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast({ title: "Application Received", description: "Thank you for your interest in TEC Electric. Our team will review your application and contact you soon." });
      setForm({ name: "", email: "", phone: "", experience: "", certification: "", message: "" });
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-obsidian">
      <Navbar />
      <PageHero
        label="Join the Core"
        title="BUILD YOUR"
        titleAccent="LEGACY"
        description="Join a team of skilled professionals building the commercial infrastructure of the Southeast. At TEC Electric, your career matters as much as the projects we deliver."
        image={HERO}
        ctaText="View Open Positions"
        ctaLink="#positions"
      />

      {/* Why Work Here */}
      <section className="py-24 lg:py-32 bg-obsidian">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number="01" text="Why TEC" />
          <h2 className="font-heading text-3xl md:text-4xl text-white uppercase mb-16">
            WHY WORK <span className="text-voltage">HERE</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {reasons.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-obsidian p-8 lg:p-10 group hover:bg-card transition-colors"
              >
                <item.icon className="w-8 h-8 text-voltage mb-4" />
                <h3 className="font-heading text-lg text-white uppercase mb-3">{item.title}</h3>
                <p className="text-silver text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-24 lg:py-32 bg-card scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number="02" text="Open Positions" />
          <h2 className="font-heading text-3xl md:text-4xl text-white uppercase mb-12">
            CURRENT <span className="text-voltage">OPENINGS</span>
          </h2>
          <div className="space-y-4">
            {openings.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-obsidian border border-white/5 p-6 lg:p-8 hover:border-voltage/30 transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-heading text-xl text-white uppercase">{job.title}</h3>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="flex items-center gap-1.5 text-silver text-sm">
                        <Clock className="w-3.5 h-3.5" /> {job.type}
                      </span>
                      <span className="flex items-center gap-1.5 text-silver text-sm">
                        <MapPin className="w-3.5 h-3.5" /> {job.location}
                      </span>
                    </div>
                  </div>
                  <a href="#apply" className="inline-flex items-center gap-2 bg-voltage text-obsidian px-6 py-2.5 font-bold uppercase tracking-wider text-xs hover:bg-amber-400 transition-colors flex-shrink-0">
                    Apply Now
                  </a>
                </div>
                <p className="text-silver text-sm leading-relaxed">{job.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-24 lg:py-32 bg-obsidian scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number="03" text="Apply" />
          <h2 className="font-heading text-3xl md:text-4xl text-white uppercase mb-4">
            FAST-TRACK <span className="text-voltage">APPLICATION</span>
          </h2>
          <p className="text-silver mb-12">
            Interested in joining our team? Fill out the form below and our recruiting team will be in touch.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="font-mono text-xs tracking-wider uppercase text-silver mb-2 block">Full Name *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-card border border-white/10 text-white px-4 py-3 text-sm focus:border-voltage focus:outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="font-mono text-xs tracking-wider uppercase text-silver mb-2 block">Email *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-card border border-white/10 text-white px-4 py-3 text-sm focus:border-voltage focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="font-mono text-xs tracking-wider uppercase text-silver mb-2 block">Phone *</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-card border border-white/10 text-white px-4 py-3 text-sm focus:border-voltage focus:outline-none transition-colors"
                  placeholder="(000) 000-0000"
                />
              </div>
              <div>
                <label className="font-mono text-xs tracking-wider uppercase text-silver mb-2 block">Years Experience</label>
                <select
                  value={form.experience}
                  onChange={(e) => setForm({ ...form, experience: e.target.value })}
                  className="w-full bg-card border border-white/10 text-white px-4 py-3 text-sm focus:border-voltage focus:outline-none transition-colors"
                >
                  <option value="">Select</option>
                  <option value="0-2">0-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>
              <div>
                <label className="font-mono text-xs tracking-wider uppercase text-silver mb-2 block">Certification</label>
                <select
                  value={form.certification}
                  onChange={(e) => setForm({ ...form, certification: e.target.value })}
                  className="w-full bg-card border border-white/10 text-white px-4 py-3 text-sm focus:border-voltage focus:outline-none transition-colors"
                >
                  <option value="">Select</option>
                  <option value="apprentice">Apprentice</option>
                  <option value="journeyman">Journeyman</option>
                  <option value="master">Master Electrician</option>
                  <option value="pe">Professional Engineer</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div>
              <label className="font-mono text-xs tracking-wider uppercase text-silver mb-2 block">Additional Information</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-card border border-white/10 text-white px-4 py-3 text-sm focus:border-voltage focus:outline-none transition-colors resize-none"
                placeholder="Position of interest, relevant experience, certifications..."
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-voltage text-obsidian py-4 font-bold uppercase tracking-wider text-sm hover:bg-amber-400 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {submitting ? "Submitting..." : (<><Send className="w-4 h-4" /> Submit Application</>)}
            </button>
          </form>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number="04" text="Team Voices" />
          <h2 className="font-heading text-3xl md:text-4xl text-white uppercase mb-12">
            FROM OUR <span className="text-voltage">TEAM</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { quote: "TEC gave me the opportunity to grow from a journeyman to a superintendent. The support and training here is unmatched.", role: "Electrical Superintendent", years: "6 years with TEC" },
              { quote: "Safety isn't just a policy here — it's part of the culture. I feel confident coming to work every day knowing my team has my back.", role: "Commercial Electrician", years: "4 years with TEC" },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-obsidian border border-white/5 p-8"
              >
                <p className="text-white text-lg leading-relaxed mb-6 font-light">"{t.quote}"</p>
                <div>
                  <div className="text-white font-semibold text-sm">{t.role}</div>
                  <div className="font-mono text-xs text-voltage">{t.years}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}