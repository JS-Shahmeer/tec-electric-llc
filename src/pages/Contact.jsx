import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import QuoteForm from "@/components/forms/QuoteForm";
import { COMPANY } from "@/lib/content";

const SERVICE_AREAS = ["Austin", "San Antonio", "Houston", "Dallas–Fort Worth", "Round Rock", "Central Texas"];

export default function Contact() {
  return (
    <>
      <PageHero
        code="CONTACT / REQUEST A QUOTE"
        title="Let's build something that lasts"
        subtitle="Tell us about your project. A dedicated project manager will respond within one business day."
      />

      <section className="bg-carbon py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-3 gap-14">
          <div className="lg:col-span-2">
            <SectionHeading code="PROJECT INQUIRY" title="Request a quote" />
            <div className="mt-10"><QuoteForm /></div>
          </div>

          <aside className="space-y-8">
            <div className="border border-white/10 p-8 space-y-6">
              <h3 className="font-display font-bold text-xl text-white">Direct contact</h3>
              {[
                { icon: Phone, label: "Phone", value: COMPANY.phone, href: COMPANY.phoneHref },
                { icon: Mail, label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
                { icon: MapPin, label: "Office", value: COMPANY.address },
                { icon: Clock, label: "Hours", value: COMPANY.hours },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-white/15 flex items-center justify-center shrink-0"><item.icon className="w-5 h-5 text-amber" /></div>
                  <div>
                    <div className="font-mono text-xs text-white tracking-wider">{item.label.toUpperCase()}</div>
                    {item.href ? <a href={item.href} className="text-white hover:text-amber transition-colors focus-wire">{item.value}</a> : <p className="text-white">{item.value}</p>}
                  </div>
                </div>
              ))}
            </div>

            <div className="border border-white/10 p-8">
              <h3 className="font-display font-bold text-xl text-white">Service areas</h3>
              <div className="flex flex-wrap gap-2 mt-5">
                {SERVICE_AREAS.map((a) => (
                  <span key={a} className="font-mono text-xs border border-white/15 text-white px-3 py-1.5">{a}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-carbon pb-20 md:pb-28">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="border border-white/10 h-[400px] overflow-hidden grayscale contrast-125">
            <iframe
              title="TEC Electric office location"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg)" }}
              loading="lazy"
              src="https://www.google.com/maps?q=Austin,Texas&output=embed"
            />
          </div>
        </div>
      </section>
    </>
  );
}