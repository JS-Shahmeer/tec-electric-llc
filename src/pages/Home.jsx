import React, { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import Hero from "@/components/home/Hero";
import StatsSnapshot from "@/components/home/StatsSnapshot";
import Capabilities from "@/components/home/Capabilities";
import IndustriesSection from "@/components/home/IndustriesSection";
import FeaturedProject from "@/components/home/FeaturedProject";
import FeaturedWork from "@/components/home/FeaturedWork";
import WhyChoose from "@/components/home/WhyChoose";
import TrustSignals from "@/components/shared/TrustSignals";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import Certifications from "@/components/shared/Certifications";
import CTABanner from "@/components/shared/CTABanner";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    base44.entities.Project.filter({ featured: true }, "-year", 4).then((p) => {
      if (p.length) setProjects(p);
      else base44.entities.Project.list("-year", 4).then(setProjects);
    });
    base44.entities.Testimonial.list("-created_date", 6).then(setTestimonials);
  }, []);

  return (
    <>
      <Hero />
      <StatsSnapshot />
      <Capabilities />
      <IndustriesSection />
      <FeaturedProject />
      <FeaturedWork projects={projects} />
      <WhyChoose />
      <TrustSignals />
      <ProcessTimeline />
      <TestimonialsSection testimonials={testimonials} />
      <Certifications />
      <CTABanner />
    </>
  );
}