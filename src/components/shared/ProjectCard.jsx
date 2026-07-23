import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { IMAGES } from "@/lib/images";

export const PROJECTS = [
  {
    id: "pearl-parking-deck-b",
    title: "The Pearl – Parking Deck B",
    industry: "Healthcare",
    location: "Charlotte, NC",
    year: "2024",
    value: "$4.6M",
    image_url: IMAGES.fieldEquipmentInstallation,
    services: ["Commercial Electrical", "Commercial Lighting", "Subcontracting"],
  },
  {
    id: "northpoint-distribution-hub",
    title: "Northpoint Distribution Hub",
    industry: "Warehousing",
    location: "San Antonio, TX",
    year: "2024",
    value: "$5.2M",
    image_url: IMAGES.siteExcavationCrew,
    services: ["Commercial Lighting", "Subcontracting"],
  },
  {
    id: "meridian-regional-medical-center",
    title: "Meridian Regional Medical Center",
    industry: "Healthcare",
    location: "Austin, TX",
    year: "2024",
    value: "$8.4M",
    image_url: IMAGES.medicalCampusExterior,
    services: ["Commercial Electrical", "General Contracting"],
  },
  {
    id: "summit-office-tower",
    title: "Summit Office Tower",
    industry: "Office Buildings",
    location: "Dallas, TX",
    year: "2023",
    value: "$3.8M",
    image_url: IMAGES.tecServiceVanOffice,
    services: ["Commercial Electrical", "Commercial Lighting"],
  },
  {
    id: "outlet-retail-expansion",
    title: "Cedar Grove Retail Expansion",
    industry: "Retail",
    location: "Round Rock, TX",
    year: "2023",
    value: "$2.1M",
    image_url: IMAGES.tecElectricServiceVan,
    services: ["Commercial Lighting", "General Contracting"],
  },
  {
    id: "atlas-manufacturing-line",
    title: "Atlas Manufacturing Line 4",
    industry: "Manufacturing",
    location: "Houston, TX",
    year: "2022",
    value: "$6.7M",
    image_url: IMAGES.interiorElectricalInstallation,
    services: ["Commercial Electrical", "Maintenance & Support"],
  },
  {
    id: "civic-logistics-site-work",
    title: "Civic Logistics Site Work",
    industry: "Government",
    location: "Austin, TX",
    year: "2022",
    value: "$1.9M",
    image_url: IMAGES.fieldCrewConstructionSite,
    services: ["General Contracting", "Subcontracting"],
  },
  {
    id: "tec-industrial-campus",
    title: "TEC Industrial Campus",
    industry: "Industrial",
    location: "San Antonio, TX",
    year: "2021",
    value: "$2.8M",
    image_url: IMAGES.tecProjectSiteSign,
    services: ["Commercial Electrical", "Site Coordination"],
  },
  {
    id: "tec-client-partner-showcase",
    title: "Client Partner Showcase",
    industry: "Office Buildings",
    location: "Austin, TX",
    year: "2021",
    value: "$1.4M",
    image_url: IMAGES.tecElectricEventDisplay,
    services: ["Commercial Lighting", "General Contracting"],
  },
];

export default function ProjectCard({ project, className }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`group relative overflow-hidden bg-neutral-900 ${className || ""}`}
    >
      <div className="absolute inset-0">
        <img
          src={project.image_url}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/40 to-transparent" />
      </div>

      <div className="absolute top-4 left-4 flex items-center gap-2">
        {project.value && <span className="font-mono text-[10px] bg-amber text-white px-2 py-1">{project.value}</span>}
        {project.year && <span className="font-mono text-[10px] bg-carbon/70 text-galvanized px-2 py-1 backdrop-blur">{project.year}</span>}
      </div>

      <div className="relative z-10 flex flex-col justify-end h-full min-h-[340px] p-6">
        <span className="font-mono text-xs text-amber tracking-widest">{project.industry}</span>
        <h3 className="font-display font-bold text-white text-2xl mt-2 leading-tight">{project.title}</h3>
        <div className="flex items-center gap-2 mt-2 text-galvanized text-sm">
          <MapPin className="w-3.5 h-3.5" /> {project.location}
        </div>
        {project.services?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {project.services.map((s) => (
              <span key={s} className="text-[11px] border border-white/20 text-white/80 px-2 py-1">{s}</span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}