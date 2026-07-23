import React from "react";
import { cn } from "@/lib/utils";

export default function SectionHeading({ code, title, subtitle, light = false, align = "left", className }) {
  return (
    <div className={cn(align === "center" && "text-center mx-auto max-w-3xl", className)}>
      {code && (
        <div className={cn("flex items-center gap-3 mb-4", align === "center" && "justify-center")}>
          <span className="w-8 h-px bg-amber" />
          <span className="font-mono text-xs tracking-[0.2em] text-amber">{code}</span>
        </div>
      )}
      <h2 className={cn("font-display font-bold tracking-tight text-3xl md:text-5xl leading-[1.05]", light ? "text-carbon" : "text-white")}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-5 text-lg max-w-2xl", align === "center" && "mx-auto", light ? "text-neutral-600" : "text-galvanized")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}