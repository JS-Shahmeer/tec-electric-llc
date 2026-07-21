import React from "react";
import { Link } from "react-router-dom";
import { Zap, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-white/5">
      {/* Safety Pulse */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="font-mono text-xs text-silver tracking-wider uppercase">Safety Record: 250,000+ Safe Man-Hours</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-voltage rounded-full animate-pulse" />
            <span className="font-mono text-xs text-silver tracking-wider uppercase">Currently Active Across 5 States</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-voltage rounded-sm flex items-center justify-center">
                <Zap className="w-5 h-5 text-obsidian" strokeWidth={3} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading text-lg text-white tracking-tight">TEC ELECTRIC</span>
                <span className="font-mono text-[9px] tracking-widest text-silver">LICENSED CONTRACTOR</span>
              </div>
            </Link>
            <p className="text-silver text-sm leading-relaxed mb-6">
              A licensed general contracting firm with in-house engineering capabilities specializing in medium to large scale commercial and industrial projects.
            </p>
            <p className="font-mono text-xs text-silver/70">
              Minority-Owned Business Enterprise
            </p>
          </div>

          {/* Services */}
          <div>
            <span className="spec-label block mb-4">[ Services ]</span>
            <ul className="space-y-3">
              {[
                { label: "General Contracting", path: "/services/general-contracting" },
                { label: "Electrical Contracting", path: "/services/electrical-contracting" },
                { label: "Commercial Lighting", path: "/services/commercial-lighting" },
                { label: "Subcontracting", path: "/services/subcontracting" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-silver hover:text-white transition-colors text-sm flex items-center gap-1 group">
                    {item.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <span className="spec-label block mb-4">[ Company ]</span>
            <ul className="space-y-3">
              {[
                { label: "About Us", path: "/about" },
                { label: "Industries Served", path: "/industries" },
                { label: "Projects", path: "/projects" },
                { label: "Careers", path: "/careers" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-silver hover:text-white transition-colors text-sm flex items-center gap-1 group">
                    {item.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <span className="spec-label block mb-4">[ Contact ]</span>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-voltage mt-0.5 flex-shrink-0" />
                <span className="text-silver text-sm">1801 Cross Beam Drive, Suite A<br />Charlotte, NC 28217</span>
              </li>
              <li>
                <a href="tel:7043945097" className="flex items-center gap-3 text-silver hover:text-white transition-colors text-sm">
                  <Phone className="w-4 h-4 text-voltage flex-shrink-0" />
                  704-394-5097
                </a>
              </li>
              <li>
                <a href="mailto:information@tecelecllc.com" className="flex items-center gap-3 text-silver hover:text-white transition-colors text-sm">
                  <Mail className="w-4 h-4 text-voltage flex-shrink-0" />
                  information@tecelecllc.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-xs text-silver/70">
            © {new Date().getFullYear()} TEC Electric, LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="font-mono text-xs text-silver/70 hover:text-silver transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="font-mono text-xs text-silver/70 hover:text-silver transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Extra space for mobile sticky CTA */}
      <div className="h-16 lg:hidden" />
    </footer>
  );
}