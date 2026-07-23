import { Zap, Building2, Lightbulb, Wrench, HardHat } from "lucide-react";
import { IMAGES } from "@/lib/images";

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Careers", to: "/careers" },
  { label: "Subcontractors", to: "/subcontractor" },
  { label: "Contact", to: "/contact" },
];

export const CAPABILITIES = [
  {
    slug: "commercial-electrical",
    icon: Zap,
    title: "Commercial Electrical",
    code: "CAP-01",
    description: "Full-scope power distribution, service upgrades, and code-compliant installations engineered for zero-downtime commercial operations.",
    benefits: ["Redundant system design", "Zero-downtime guarantee", "Utility coordination", "Load balancing & metering"],
    image: IMAGES.electricalMacro,
  },
  {
    slug: "general-contracting",
    icon: Building2,
    title: "General Contracting",
    code: "CAP-02",
    description: "End-to-end project delivery with disciplined scheduling, trade coordination, and a single point of accountability from ground-break to closeout.",
    benefits: ["Single-source accountability", "Trade coordination", "On-time delivery", "Budget transparency"],
    image: IMAGES.officeTower,
  },
  {
    slug: "commercial-lighting",
    icon: Lightbulb,
    title: "Commercial Lighting",
    code: "CAP-03",
    description: "High-efficiency lighting systems and controls that reduce operating cost while elevating environments across retail, office, and industrial spaces.",
    benefits: ["LED retrofits & new design", "Smart controls", "Energy rebate capture", "Photometric planning"],
    image: IMAGES.retail,
  },
  {
    slug: "subcontracting",
    icon: HardHat,
    title: "Subcontracting",
    code: "CAP-04",
    description: "A reliable electrical partner for general contractors — mobilized crews, transparent reporting, and field execution that protects your schedule.",
    benefits: ["Rapid mobilization", "Prevailing wage compliant", "Transparent reporting", "Safety-first crews"],
    image: IMAGES.distribution,
  },
  {
    slug: "maintenance-support",
    icon: Wrench,
    title: "Maintenance & Support",
    code: "CAP-05",
    description: "Preventive maintenance, emergency response, and long-term service agreements that keep critical infrastructure energized around the clock.",
    benefits: ["24/7 emergency response", "Preventive programs", "Infrared inspections", "Service-level agreements"],
    image: IMAGES.warehouse,
  },
];

export const INDUSTRIES = [
  { name: "Healthcare", desc: "Life-safety power, emergency systems, and code-critical installations for hospitals and clinics." },
  { name: "Retail", desc: "Store rollouts, lighting design, and rapid multi-site electrical execution." },
  { name: "Industrial", desc: "Heavy power distribution, motor controls, and process infrastructure." },
  { name: "Education", desc: "Campus-wide systems, low-voltage, and phased work around active schedules." },
  { name: "Government", desc: "Compliant, secure, and prevailing-wage public infrastructure delivery." },
  { name: "Office Buildings", desc: "Tenant improvements, base-building power, and smart controls." },
  { name: "Hospitality", desc: "Ambiance lighting, back-of-house power, and guest-experience systems." },
  { name: "Manufacturing", desc: "Production-line power, automation wiring, and uptime-critical support." },
  { name: "Warehousing", desc: "High-bay lighting, distribution, and EV/logistics infrastructure." },
];

export const DIFFERENTIATORS = [
  { title: "Commercial Expertise", tec: "Dedicated commercial & industrial focus", others: "Mixed residential portfolios" },
  { title: "Project Management", tec: "Experienced PMs on every job", others: "Ad-hoc field supervision" },
  { title: "Safety Culture", tec: "Safety-first, documented protocols", others: "Reactive compliance" },
  { title: "Communication", tec: "Transparent, proactive reporting", others: "Delayed updates" },
  { title: "Scheduling", tec: "Reliable, milestone-driven delivery", others: "Frequent overruns" },
  { title: "Quality Assurance", tec: "Multi-stage QA & inspection", others: "Single final walkthrough" },
  { title: "Partnerships", tec: "Long-term client relationships", others: "Transactional jobs" },
];

export const PROCESS_STEPS = [
  { step: "01", title: "Initial Consultation", desc: "We listen to your objectives, constraints, and timeline to align on outcomes." },
  { step: "02", title: "Project Assessment", desc: "On-site evaluation, load analysis, and risk identification before a single wire is pulled." },
  { step: "03", title: "Proposal & Planning", desc: "Transparent scope, budget, and schedule with clearly defined milestones." },
  { step: "04", title: "Execution", desc: "Mobilized crews deliver precision installation under disciplined supervision." },
  { step: "05", title: "Quality Assurance", desc: "Multi-stage inspection and testing verify every system against code and spec." },
  { step: "06", title: "Project Completion", desc: "Documented closeout, walkthrough, and a partnership built for the long term." },
];

export const METRICS = [
  { value: 20, suffix: "+", label: "Years in Business" },
  { value: 850, suffix: "+", label: "Projects Completed" },
  { value: 320, suffix: "+", label: "Commercial Clients Served" },
  { value: 45, suffix: "", label: "Qualified Employees" },
  { value: 6, suffix: "", label: "Service Locations" },
  { value: 99, suffix: "%", label: "Safety Rating" },
];

export const STATS = METRICS;

export const CERTIFICATIONS = [
  { abbr: "MBE", name: "Minority Business Enterprise", desc: "Certified Minority Business Enterprise — expanding opportunity and supplier diversity for enterprise clients." },
  { abbr: "HUB", name: "Historically Underutilized Business", desc: "HUB-certified, enabling participation in public-sector and diversity procurement programs." },
  { abbr: "OSHA 30", name: "Field Leaders OSHA 30 Certified", desc: "Every field leader carries OSHA 30-hour certification — safety leadership embedded on every site." },
];

export const TRUST_SIGNALS = [
  { icon: Zap, title: "Commercial Experience", desc: "850+ commercial projects delivered across healthcare, industrial, retail, and office." },
  { icon: HardHat, title: "Safety First", desc: "1.2M+ safe work hours and a documented, OSHA-aligned safety culture." },
  { icon: Wrench, title: "Certified Professionals", desc: "Licensed, bonded, and insured crews led by OSHA 30-certified field leaders." },
  { icon: Building2, title: "Quality Workmanship", desc: "Multi-stage QA and inspection verify every system against code and specification." },
  { icon: Lightbulb, title: "Emergency Response", desc: "24/7 emergency service keeps critical infrastructure energized around the clock." },
  { icon: Building2, title: "Commercial Clients", desc: "Trusted by hospital systems, developers, and Fortune-grade operators." },
];

export const PARTNER_LOGOS = [
  "Atrium Health", "Meridian Health", "Northpoint Builders", "Vertex Corp", "Atlas Manufacturing", "Civic Logistics",
];

export const CAREERS_BENEFITS = [
  { icon: "DollarSign", title: "Competitive Pay", desc: "Above-market wages, overtime, and performance bonuses." },
  { icon: "Shield", title: "Full Benefits", desc: "Medical, dental, vision, and life insurance for you and your family." },
  { icon: "GraduationCap", title: "Training & Development", desc: "Paid apprenticeship, certifications, and continuing education." },
  { icon: "TrendingUp", title: "Career Paths", desc: "A clear trajectory from apprentice to project leadership." },
  { icon: "Clock", title: "401(k) & PTO", desc: "Retirement matching and generous paid time off." },
  { icon: "Users", title: "Real Culture", desc: "A safety-first team that has each other's backs on every site." },
];

export const CAREERS_CULTURE = [
  "Safety is the first conversation and the last check on every shift.",
  "We invest in our people because they build our reputation on every site.",
  "Mentorship is built in — apprentices learn directly from journeymen and field leaders.",
  "We promote from within and map a clear path from apprentice to project leadership.",
];

export const SUBCONTRACTOR_STEPS = [
  { step: "01", title: "Submit Prequalification", desc: "Complete the form below with your company, trade, licensing, and insurance details." },
  { step: "02", title: "Document Review", desc: "Our procurement team verifies your license, insurance, capacity, and safety record." },
  { step: "03", title: "Approval & Onboarding", desc: "Approved partners are added to our bid list and onboarded into our safety and reporting systems." },
];

export const FEATURED_PROJECT = {
  title: "The Pearl – Parking Deck B",
  client: "Atrium Health",
  location: "Charlotte, NC",
  year: "2024",
  value: "$4.6M",
  overview: "TEC Electric delivered the complete electrical infrastructure for Parking Deck B at The Pearl — a flagship mixed-use development. The deck supports EV-ready infrastructure, high-efficiency LED illumination, and integrated life-safety systems serving Atrium Health's campus expansion.",
  scope: [
    "Full power distribution and metering for a 1,400-stall structured deck",
    "High-efficiency LED lighting with smart controls and photometric design",
    "EV-ready infrastructure across 15% of stalls, conduit and wire pulled for future expansion",
    "Emergency egress, life-safety, and code-compliant fire alarm integration",
  ],
  services: ["Commercial Electrical", "Commercial Lighting", "Subcontracting"],
  gallery: [
    IMAGES.fieldEquipmentInstallation,
    IMAGES.warehouse,
    IMAGES.retail,
    IMAGES.officeTower,
  ],
};

export const COMPANY = {
  name: "TEC Electric LLC",
  phone: "(555) 428-3372",
  phoneHref: "tel:+15554283372",
  email: "info@tecelectricllc.com",
  hr_email: "hr@tecelecllc.com",
  address: "1420 Industrial Parkway, Suite 200, Austin, TX 78744",
  hours: "Mon–Fri: 7:00 AM – 6:00 PM · 24/7 Emergency Service",
};