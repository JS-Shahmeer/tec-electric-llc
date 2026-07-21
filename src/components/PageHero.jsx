import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PageHero({ label, title, titleAccent, description, image, ctaText = "Request a Quote", ctaLink = "/contact" }) {
  return (
    <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-obsidian/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24 pt-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="spec-label block mb-4">[ {label} ]</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white uppercase mb-6 max-w-4xl">
            {title}{" "}
            {titleAccent && <span className="text-voltage">{titleAccent}</span>}
          </h1>
          <p className="text-silver text-lg lg:text-xl max-w-2xl mb-8">{description}</p>
          <Link
            to={ctaLink}
            className="inline-flex items-center gap-2 bg-voltage text-obsidian px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-amber-400 transition-colors group"
          >
            {ctaText}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}