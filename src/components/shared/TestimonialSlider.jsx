import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialSlider({ testimonials }) {
  const [index, setIndex] = useState(0);
  if (!testimonials?.length) return null;
  const t = testimonials[index];
  const go = (dir) => setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);

  return (
    <div className="relative">
      <Quote className="w-16 h-16 text-amber/20 absolute -top-6 -left-2" />
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4 }}
          className="relative z-10"
        >
          <div className="flex gap-1 mb-6">
            {Array.from({ length: t.rating || 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber text-amber" />
            ))}
          </div>
          <p className="font-display text-2xl md:text-3xl text-white leading-snug max-w-4xl">"{t.quote}"</p>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-12 h-12 bg-amber flex items-center justify-center font-display font-bold text-white text-lg">
              {t.author?.charAt(0)}
            </div>
            <div>
              <div className="font-display font-semibold text-white">{t.author}</div>
              <div className="text-sm text-white">{t.role}{t.company ? ` · ${t.company}` : ""}</div>
              {t.project_reference && <div className="font-mono text-xs text-amber mt-1">{t.project_reference}</div>}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center gap-3 mt-10">
        <button onClick={() => go(-1)} aria-label="Previous testimonial" className="w-11 h-11 border border-white/20 flex items-center justify-center text-white hover:border-amber hover:text-amber transition-colors focus-wire">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={() => go(1)} aria-label="Next testimonial" className="w-11 h-11 border border-white/20 flex items-center justify-center text-white hover:border-amber hover:text-amber transition-colors focus-wire">
          <ChevronRight className="w-5 h-5" />
        </button>
        <span className="font-mono text-sm text-white ml-2">{String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}</span>
      </div>
    </div>
  );
}