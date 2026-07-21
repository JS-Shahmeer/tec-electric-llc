import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import SectionLabel from "@/components/SectionLabel";
import StatCard from "@/components/StatCard";
import { motion } from "framer-motion";
import { Shield, Award, Clock, Users, Target, Heart, Eye, Zap, ArrowRight } from "lucide-react";

const HERO = "https://media.base44.com/images/public/6a4ee06353a79fd19b867c4a/4d4a0ae94_generated_5d11db11.png";

const values = [
  { icon: Shield, title: "Safety", desc: "Safety is embedded in everything we do. Rigorous protocols protect our team and your investment." },
  { icon: Award, title: "Quality", desc: "Our attention to detail and commitment to quality workmanship drives every project we undertake." },
  { icon: Heart, title: "Community", desc: "We are community builders committed to enriching the communities we serve, one client at a time." },
  { icon: Target, title: "Precision", desc: "In-house engineering capabilities ensure precision from design through final inspection." },
  { icon: Eye, title: "Integrity", desc: "Transparent communication, honest pricing, and dependable delivery define our client relationships." },
  { icon: Users, title: "Partnership", desc: "We view every project as a partnership, walking alongside our clients from concept to completion." },
];

const leaders = [
  {
    name: "Larry Harris, PE",
    title: "Owner and Managing Partner",
    bio: "Mr. Harris founded TEC Electric and TEC Engineering in 2005 and 2006 respectively. Prior to TEC, he founded Harris Electronics, Inc — the first African American owned company to design and develop electronic production parts for Nissan North America. A graduate of UNC Charlotte with a BS in Electrical Engineering and an MBA from Georgia College, Mr. Harris is a registered Professional Engineer in NC, SC, and GA."
  },
  {
    name: "Melanie Harris",
    title: "VP of Operations",
    bio: "Ms. Harris has been with TEC since 2018, managing the estimating division and supporting project management and accounting operations. A graduate of East Carolina University, she brings organizational excellence and attention to detail to every aspect of TEC's operational infrastructure."
  },
  {
    name: "Felicia Silver",
    title: "Operations Manager",
    bio: "Mrs. Silver is a project manager with 20 years of experience in project management, validation, quality and safety. She has managed projects across pharmaceutical, medical device, and consumer health industries. A graduate of NC State University with a BS in Chemical Engineering, she brings extensive business development and quality control expertise."
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-obsidian">
      <Navbar />
      <PageHero
        label="About Us"
        title="BUILDING THE"
        titleAccent="SOUTHEAST"
        description="A leading minority-owned firm with expertise in general construction, electrical systems design, and electrical systems build-out since 2006."
        image={HERO}
      />

      {/* Stats */}
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

      {/* Company Story */}
      <section className="py-24 lg:py-32 bg-obsidian">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel number="01" text="Our Story" />
              <h2 className="font-heading text-3xl md:text-4xl text-white uppercase mb-6">
                FROM STARTUP TO<br /><span className="text-voltage">REGIONAL LEADER</span>
              </h2>
              <p className="text-silver leading-relaxed mb-6">
                TEC Electric, LLC was formed in 2006 with offices located in Charlotte, NC. We provide general contracting services as well as self-perform all electrical, lighting, network, and security system installation services for customers throughout the Carolinas, Georgia, Virginia, Alabama, and Tennessee.
              </p>
              <p className="text-silver leading-relaxed mb-6">
                Currently, TEC has 50 employees consisting of corporate, field operations, engineering, and business development professionals. We self-perform all technology systems except fire alarm, lightning protection, and life safety systems.
              </p>
              <p className="text-silver leading-relaxed">
                We are a leading minority-owned firm with expertise in the areas of general construction, electrical systems design and electrical systems build-out. We specialize in both redesign and ground-up projects. Our success is driven by our attention to detail, quality, and safety.
              </p>
            </div>
            <div>
              <SectionLabel number="02" text="Mission" />
              <div className="bg-card border border-white/5 p-8 lg:p-10 mb-8">
                <h3 className="font-heading text-2xl text-white uppercase mb-4">OUR MISSION</h3>
                <p className="text-silver leading-relaxed text-lg">
                  To help our clients build strong communities that support a healthy environment as well as efficient use of resources — delivering dependable commercial solutions that keep businesses operational and communities thriving.
                </p>
              </div>
              <div className="bg-card border border-voltage/20 p-8 lg:p-10">
                <span className="spec-label block mb-3">[ Certifications ]</span>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-white text-sm">
                    <Zap className="w-4 h-4 text-voltage" /> Unlimited Electrical Contracting — NC, SC, VA, GA, TN
                  </li>
                  <li className="flex items-center gap-2 text-white text-sm">
                    <Zap className="w-4 h-4 text-voltage" /> Unlimited General Contracting — NC, SC
                  </li>
                  <li className="flex items-center gap-2 text-white text-sm">
                    <Zap className="w-4 h-4 text-voltage" /> Registered Engineering Services — NC, SC, GA
                  </li>
                  <li className="flex items-center gap-2 text-white text-sm">
                    <Zap className="w-4 h-4 text-voltage" /> Minority-Owned Business Enterprise
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number="03" text="Core Values" />
          <h2 className="font-heading text-3xl md:text-4xl text-white uppercase mb-16">
            WHAT DRIVES <span className="text-voltage">US</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8 lg:p-10 group hover:bg-obsidian transition-colors"
              >
                <item.icon className="w-8 h-8 text-voltage mb-4" />
                <h3 className="font-heading text-lg text-white uppercase mb-3">{item.title}</h3>
                <p className="text-silver text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 lg:py-32 bg-obsidian">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number="04" text="Leadership" />
          <h2 className="font-heading text-3xl md:text-4xl text-white uppercase mb-16">
            OUR <span className="text-voltage">TEAM</span>
          </h2>
          <div className="space-y-px">
            {leaders.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card border border-white/5 p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start"
              >
                <div>
                  <h3 className="font-heading text-xl text-white uppercase">{person.name}</h3>
                  <span className="font-mono text-xs text-voltage tracking-wider uppercase">{person.title}</span>
                </div>
                <p className="text-silver text-sm leading-relaxed lg:col-span-2">{person.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment CTA */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionLabel number="05" text="Join Our Team" />
          <h2 className="font-heading text-3xl md:text-4xl text-white uppercase mb-6">
            BUILD YOUR CAREER<br /><span className="text-voltage">WITH TEC</span>
          </h2>
          <p className="text-silver text-lg max-w-2xl mx-auto mb-10">
            We are committed to growing and developing a diverse and highly capable workforce. Join a team that values safety, quality, and professional growth.
          </p>
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 bg-voltage text-obsidian px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-amber-400 transition-colors group"
          >
            Explore Careers
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
}