import React from "react";
import { motion } from "framer-motion";

export default function IndustryCard({ icon: Icon, label, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group flex flex-col items-center justify-center p-6 lg:p-8 bg-card border border-white/5 hover:border-voltage/30 transition-all duration-300 cursor-default"
    >
      <Icon className="w-8 h-8 text-silver group-hover:text-voltage transition-colors mb-3" />
      <span className="text-sm font-semibold text-white text-center uppercase tracking-wider">{label}</span>
    </motion.div>
  );
}