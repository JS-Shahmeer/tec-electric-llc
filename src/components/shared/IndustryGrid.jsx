import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { INDUSTRIES } from "@/lib/content";
import { cn } from "@/lib/utils";

export default function IndustryGrid({ light = false }) {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l", light ? "border-neutral-200" : "border-white/10")}>
      {INDUSTRIES.map((ind, i) => (
        <motion.div
          key={ind.name}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: (i % 3) * 0.05 }}
          className={cn(
            "group relative border-b border-r p-8 transition-colors cursor-default",
            light ? "border-neutral-200 hover:bg-white" : "border-white/10 hover:bg-white/5"
          )}
        >
          <span className={cn("font-mono text-xs", light ? "text-neutral-400" : "text-galvanized")}>{String(i + 1).padStart(2, "0")}</span>
          <div className="flex items-center justify-between mt-4">
            <h3 className={cn("font-display font-semibold text-xl group-hover:text-amber transition-colors", light ? "text-carbon" : "text-white")}>{ind.name}</h3>
            <ArrowUpRight className={cn("w-5 h-5 group-hover:text-amber transition-colors", light ? "text-neutral-400" : "text-galvanized")} />
          </div>
          <p className={cn("text-sm mt-3 leading-relaxed", light ? "text-neutral-600" : "text-galvanized")}>{ind.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}