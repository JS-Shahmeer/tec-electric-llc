import React from "react";
import { Link } from "react-router-dom";
import { Zap, Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { NAV_LINKS, CAPABILITIES, COMPANY } from "@/lib/content";
import Logo from "@/assets/images/logo-light.webp";

export default function Footer() {
  return (
    <footer className="bg-carbon border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2.5 focus-wire w-fit">
              <img src={Logo} alt="TEC Electric LLC" className="w-auto h-16" />
            </Link>
            <p className="mt-5 text-sm text-white max-w-xs">
              Engineering-grade commercial electrical and general contracting for projects that can't afford downtime.
            </p>
            <div className="flex gap-3 mt-6">
              {[FaLinkedinIn, FaFacebookF, FaInstagram].map((Icon, i) => (
                <a key={i} href="https://linkedin.com" target="_blank" rel="noreferrer"
                   className="w-9 h-9 border border-white/10 flex items-center justify-center text-white hover:text-amber hover:border-amber transition-colors focus-wire">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs text-amber tracking-widest mb-5">NAVIGATE</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-white hover:text-white transition-colors focus-wire">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs text-amber tracking-widest mb-5">CAPABILITIES</h4>
            <ul className="space-y-3">
              {CAPABILITIES.map((c) => (
                <li key={c.slug}>
                  <Link to={`/services/${c.slug}`} className="text-sm text-white hover:text-white transition-colors focus-wire">{c.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs text-amber tracking-widest mb-5">CONTACT</h4>
            <ul className="space-y-4 text-sm text-white">
              <li className="flex items-start gap-3"><Phone className="w-4 h-4 mt-0.5 text-amber shrink-0" /><a href={COMPANY.phoneHref} className="hover:text-white focus-wire">{COMPANY.phone}</a></li>
              <li className="flex items-start gap-3"><Mail className="w-4 h-4 mt-0.5 text-amber shrink-0" /><a href={`mailto:${COMPANY.email}`} className="hover:text-white focus-wire">{COMPANY.email}</a></li>
              <li className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-0.5 text-amber shrink-0" /><span>{COMPANY.address}</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-white">© {new Date().getFullYear()} TEC ELECTRIC LLC · LICENSED & INSURED · TX MASTER LIC. #TECL-00000</p>
          <div className="flex gap-6 text-xs text-white">
            <Link to="/about" className="hover:text-white focus-wire">Privacy</Link>
            <Link to="/about" className="hover:text-white focus-wire">Terms</Link>
            <Link to="/contact" className="hover:text-white focus-wire">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}