import React from "react";
import PageHero from "@/components/shared/PageHero";
import IndustryGrid from "@/components/shared/IndustryGrid";
import CTABanner from "@/components/shared/CTABanner";
import { IMAGES } from "@/lib/images";

export default function Industries() {
  return (
    <>
      <PageHero
        code="INDUSTRIES WE SERVE"
        title="Sector expertise, engineered in"
        subtitle="We adapt to the demands of your environment — code-critical, uptime-critical, and always safety-first."
        image={IMAGES.healthcare}
      />
      <section className="bg-carbon py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <IndustryGrid />
        </div>
      </section>
      <CTABanner title="Have a project in your sector?" />
    </>
  );
}