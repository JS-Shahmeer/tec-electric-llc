import React from "react";
import { useParams, Link } from "react-router-dom";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import FAQAccordion from "@/components/shared/FAQAccordion";
import IndustryGrid from "@/components/shared/IndustryGrid";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import CTABanner from "@/components/shared/CTABanner";
import AmberButton from "@/components/ui/AmberButton";
import { CAPABILITIES } from "@/lib/content";

const FAQS = [
  { q: "Are you licensed and insured for commercial work?", a: "Yes. TEC Electric is fully licensed, bonded, and insured for commercial and industrial projects, and we carry the coverage general contractors and owners require." },
  { q: "How do you handle project scheduling?", a: "Every engagement is milestone-driven with a dedicated project manager. We commit to a schedule up front and report progress transparently against it." },
  { q: "Can you work as a subcontractor to our GC?", a: "Absolutely. A large share of our work is electrical subcontracting for general contractors, with rapid mobilization and clean field reporting." },
  { q: "Do you offer emergency and maintenance support?", a: "We provide 24/7 emergency response and long-term service agreements to keep critical infrastructure energized." },
];

export default function ServiceDetail() {
  const { slug } = useParams();
  const cap = CAPABILITIES.find((c) => c.slug === slug);

  if (!cap) {
    return (
      <div className="pt-40 pb-32 text-center">
        <p className="font-mono text-amber">CAP-404</p>
        <h1 className="font-display font-bold text-4xl text-white mt-4">Capability not found</h1>
        <Link to="/services" className="text-amber mt-6 inline-block focus-wire">← Back to Services</Link>
      </div>
    );
  }

  const related = CAPABILITIES.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero code={cap.code} title={cap.title} subtitle={cap.description} image={cap.image} />

      <section className="bg-carbon py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <SectionHeading code="OVERVIEW" title="What we deliver" />
              <p className="text-galvanized text-lg mt-6 leading-relaxed">
                Our {cap.title.toLowerCase()} practice pairs disciplined project management with field crews who execute to spec. From initial load analysis through inspection and closeout, we own the outcome — so you get infrastructure that performs on day one and for the decades that follow.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-2xl text-white mb-6">Key benefits</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cap.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3 border border-white/10 p-5">
                    <Check className="w-5 h-5 text-amber shrink-0 mt-0.5" />
                    <span className="text-white">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="border border-white/10 p-8 h-fit lg:sticky lg:top-28">
            <h3 className="font-display font-bold text-xl text-white">Start a conversation</h3>
            <p className="text-galvanized text-sm mt-3">Tell us about your project and we'll respond within one business day.</p>
            <div className="mt-6 space-y-3">
              <AmberButton to="/contact" className="w-full" arrow>Request a Quote</AmberButton>
              <AmberButton to="/projects" variant="outline" className="w-full">See Our Work</AmberButton>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-structural py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <SectionHeading light code="INDUSTRIES SERVED" title="Where this capability delivers" />
          <div className="mt-12"><IndustryGrid light /></div>
        </div>
      </section>

      <ProcessTimeline />

      <section className="bg-neutral-950 border-y border-white/10 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5 md:px-10">
          <SectionHeading align="center" code="FAQ" title="Common questions" />
          <div className="mt-10"><FAQAccordion items={FAQS} /></div>
        </div>
      </section>

      <section className="bg-carbon py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <SectionHeading code="RELATED CAPABILITIES" title="Explore more" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {related.map((r) => (
              <Link key={r.slug} to={`/services/${r.slug}`} className="group border border-white/10 p-8 hover:bg-white/5 transition-colors focus-wire">
                <div className="w-12 h-12 border border-white/15 flex items-center justify-center mb-5 group-hover:border-amber transition-colors">
                  <r.icon className="w-6 h-6 text-amber" />
                </div>
                <h3 className="font-display font-bold text-xl text-white group-hover:text-amber transition-colors">{r.title}</h3>
                <p className="text-sm text-galvanized mt-3 line-clamp-2">{r.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs text-amber">VIEW <ArrowRight className="w-3.5 h-3.5" /></span>
              </Link>
            ))}
          </div>
          <Link to="/services" className="mt-12 inline-flex items-center gap-2 text-galvanized hover:text-white focus-wire">
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  );
}