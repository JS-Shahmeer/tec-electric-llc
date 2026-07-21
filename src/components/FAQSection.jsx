import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionLabel from "@/components/SectionLabel";

export default function FAQSection({ faqs, label = "07", title = "FREQUENTLY ASKED QUESTIONS" }) {
  return (
    <section className="py-24 lg:py-32 bg-obsidian">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel number={label} text="FAQ" />
        <h2 className="font-heading text-3xl md:text-4xl text-white uppercase mb-12">{title}</h2>
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-white/5 bg-card px-6">
              <AccordionTrigger className="text-white text-left font-semibold text-sm lg:text-base hover:text-voltage hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-silver text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}