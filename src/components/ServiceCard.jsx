import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ServiceCard({ image, title, description, link, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={link} className="group block relative overflow-hidden bg-card border border-white/5 hover:border-voltage/30 transition-all duration-500">
        <div className="aspect-video overflow-hidden blueprint-overlay">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/20 to-transparent z-10" />
        </div>
        <div className="p-6 lg:p-8">
          <span className="font-mono text-[10px] tracking-widest uppercase text-voltage mb-2 block">
            [ {String(index + 1).padStart(2, "0")}. Service ]
          </span>
          <h3 className="font-heading text-xl uppercase text-white mb-3 group-hover:text-voltage transition-colors">
            {title}
          </h3>
          <p className="text-silver text-sm leading-relaxed mb-4">{description}</p>
          <div className="flex items-center gap-2 text-voltage text-sm font-semibold uppercase tracking-wider">
            Learn More
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}