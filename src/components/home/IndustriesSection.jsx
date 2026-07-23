import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import IndustryGrid from "@/components/shared/IndustryGrid";

export default function IndustriesSection() {
  return (
    <section className="bg-structural py-24 md:py-36">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeading
            light
            code="INDUSTRIES WE SERVE"
            title="Built for complex environments"
            subtitle="We speak the language of your sector — from life-safety code to production uptime."
          />
          <Link to="/industries" className="font-mono text-sm text-carbon flex items-center gap-2 hover:gap-3 transition-all focus-wire shrink-0 border-b border-carbon pb-1">
            EXPLORE INDUSTRIES <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <IndustryGrid light />
      </div>
    </section>
  );
}