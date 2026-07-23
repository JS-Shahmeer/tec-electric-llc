import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-full border-t border-white/10">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="border-b border-white/10">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="group flex w-full items-center justify-between gap-6 py-7 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-inset"
            >
              <span className="font-display text-lg font-semibold leading-snug text-white transition-colors group-hover:text-amber md:text-xl">
                {item.q}
              </span>
              <FiChevronDown
                className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 group-hover:text-amber ${isOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            {isOpen && (
              <div id={`faq-answer-${index}`} className="pb-7 pr-12 text-base leading-relaxed text-white">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}