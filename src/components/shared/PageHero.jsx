import React from "react";
import { motion } from "framer-motion";

export default function PageHero({ code, title, subtitle, image, align = "left" }) {
  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-28 overflow-hidden bg-carbon">
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/80 to-carbon/50" />
        </div>
      )}
      <div className="absolute inset-0 conduit-grid opacity-20" aria-hidden="true" />
      <div className={`relative max-w-[1400px] mx-auto px-5 md:px-10 ${align === "center" ? "text-center" : ""}`}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className={`flex items-center gap-3 mb-5 ${align === "center" ? "justify-center" : ""}`}>
            <span className="w-8 h-px bg-amber" />
            <span className="font-mono text-xs tracking-[0.2em] text-amber">{code}</span>
          </div>
          <h1 className="font-display font-bold text-white tracking-tight leading-[0.95] text-5xl md:text-7xl max-w-4xl">
            {title}
          </h1>
          {subtitle && <p className={`mt-6 text-lg md:text-xl text-galvanized max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  );
}