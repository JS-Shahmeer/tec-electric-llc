import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function CTABanner({ 
  title = "READY TO START YOUR PROJECT?", 
  subtitle = "Contact us today for a consultation and free project estimate. Our team is ready to deliver dependable commercial solutions.",
  primaryCTA = "Request a Quote",
  primaryLink = "/contact",
  secondaryCTA = "Call 704-394-5097",
  secondaryLink = "tel:7043945097"
}) {
  return (
    <section className="relative py-24 lg:py-32 bg-voltage overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(#0D0E12 1px, transparent 1px), linear-gradient(90deg, #0D0E12 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Zap className="w-6 h-6 text-obsidian" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-obsidian uppercase mb-6">
            {title}
          </h2>
          <p className="text-obsidian/70 text-lg max-w-2xl mx-auto mb-10 font-medium">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={primaryLink}
              className="bg-obsidian text-white px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-obsidian/90 transition-colors flex items-center gap-2 group"
            >
              {primaryCTA}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={secondaryLink}
              className="border-2 border-obsidian text-obsidian px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-obsidian hover:text-white transition-colors"
            >
              {secondaryCTA}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}