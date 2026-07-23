import React from "react";
import SectionHeading from "@/components/shared/SectionHeading";
import TestimonialSlider from "@/components/shared/TestimonialSlider";

export default function TestimonialsSection({ testimonials }) {
  if (!testimonials?.length) return null;
  return (
    <section className="bg-neutral-950 border-y border-white/10 py-24 md:py-36">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <SectionHeading
            code="CLIENT TRUST"
            title="Partners, not vendors"
            subtitle="The relationships we build outlast the projects we deliver."
          />
          <div className="mt-10 grid grid-cols-3 gap-4 opacity-60">
            {["MERIDIAN", "NORTHPOINT", "VERTEX", "CIVIC", "ATLAS", "SUMMIT"].map((logo) => (
              <div key={logo} className="border border-white/10 py-4 flex items-center justify-center font-mono text-[10px] text-white tracking-widest">
                {logo}
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-8 lg:pl-10">
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}