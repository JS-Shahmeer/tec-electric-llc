import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

const testimonials = [
  {
    quote: "TEC Electric delivered our warehouse electrical build-out ahead of schedule with impeccable quality. Their team's professionalism and attention to detail set them apart from other contractors we've worked with.",
    author: "Regional Development Director",
    company: "Southeast Commercial Properties",
    sector: "Industrial"
  },
  {
    quote: "We've partnered with TEC on multiple retail build-outs and they consistently deliver reliable, on-budget electrical systems. Their communication throughout every project phase is exceptional.",
    author: "Construction Manager",
    company: "National Retail Group",
    sector: "Retail"
  },
  {
    quote: "TEC Electric's expertise in commercial lighting retrofits saved our facility over 40% on energy costs. Their engineering team provided solutions we hadn't even considered.",
    author: "Facility Manager",
    company: "Mecklenburg County Schools",
    sector: "Education"
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel number="06" text="Testimonials" />
        <h2 className="font-heading text-3xl md:text-4xl text-white uppercase mb-16">
          CLIENT <span className="text-voltage">TRUST</span>
        </h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-obsidian border border-white/5 p-8 lg:p-12"
            >
              <Quote className="w-10 h-10 text-voltage/30 mb-6" />
              <blockquote className="text-white text-lg lg:text-xl leading-relaxed mb-8 font-light">
                "{testimonials[current].quote}"
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold">{testimonials[current].author}</div>
                  <div className="text-silver text-sm">{testimonials[current].company}</div>
                </div>
                <span className="font-mono text-xs tracking-widest text-voltage uppercase">
                  {testimonials[current].sector}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-4 mt-8">
            <button onClick={prev} className="w-12 h-12 border border-white/10 flex items-center justify-center hover:border-voltage hover:text-voltage transition-colors text-silver">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-voltage" : "bg-white/20"}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-12 h-12 border border-white/10 flex items-center justify-center hover:border-voltage hover:text-voltage transition-colors text-silver">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}