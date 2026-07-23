import React, { useState } from "react";
import PageHero from "@/components/shared/PageHero";
import ProjectCard, { PROJECTS } from "@/components/shared/ProjectCard";
import CTABanner from "@/components/shared/CTABanner";
import { IMAGES } from "@/lib/images";
import { cn } from "@/lib/utils";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.industry === filter);
  const filters = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.industry).filter(Boolean)))];

  return (
    <>
      <PageHero
        code="FEATURED WORK"
        title="A portfolio built at scale"
        subtitle="Commercial and industrial projects delivered on time, on budget, and to spec across the region."
        image={IMAGES.distribution}
      />

      <section className="bg-carbon py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="flex flex-wrap gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "px-4 py-2 font-mono text-xs tracking-wider border transition-colors focus-wire",
                  filter === f ? "bg-amber text-white border-amber" : "border-white/15 text-galvanized hover:text-white hover:border-white/40"
                )}
              >
                {f.toUpperCase()}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="text-galvanized text-center py-20">No projects in this category yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[380px]">
              {filtered.map((p) => <ProjectCard key={p.id} project={p} />)}
            </div>
          )}
        </div>
      </section>

      <CTABanner title="Your project could be next" />
    </>
  );
}