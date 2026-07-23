import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import ProjectCard from "@/components/shared/ProjectCard";

export default function FeaturedWork({ projects }) {
  if (!projects?.length) return null;
  return (
    <section className="bg-carbon py-24 md:py-36">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeading
            code="FEATURED WORK"
            title="Proof at scale"
            subtitle="Selected commercial engagements — delivered on time, on budget, and to spec."
          />
          <Link to="/projects" className="font-mono text-sm text-amber flex items-center gap-2 hover:gap-3 transition-all focus-wire shrink-0">
            VIEW ALL PROJECTS <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[340px]">
          {projects[0] && <ProjectCard project={projects[0]} className="md:col-span-4 md:row-span-1" />}
          {projects[1] && <ProjectCard project={projects[1]} className="md:col-span-2" />}
          {projects[2] && <ProjectCard project={projects[2]} className="md:col-span-2" />}
          {projects[3] && <ProjectCard project={projects[3]} className="md:col-span-4" />}
        </div>
      </div>
    </section>
  );
}