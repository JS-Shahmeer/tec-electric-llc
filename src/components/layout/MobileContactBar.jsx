import React from "react";
import { Link } from "react-router-dom";
import { Phone, FileText } from "lucide-react";
import { COMPANY } from "@/lib/content";

export default function MobileContactBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 border-t border-white/10 bg-carbon/90 backdrop-blur-xl">
      <a href={COMPANY.phoneHref} className="flex items-center justify-center gap-2 py-4 text-white font-display font-semibold text-sm focus-wire">
        <Phone className="w-4 h-4 text-amber" /> Call
      </a>
      <Link to="/contact" className="flex items-center justify-center gap-2 py-4 bg-amber text-white font-display font-semibold text-sm focus-wire">
        <FileText className="w-4 h-4" /> Request a Quote
      </Link>
    </div>
  );
}