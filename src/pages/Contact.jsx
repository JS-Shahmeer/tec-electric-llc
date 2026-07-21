import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import FAQSection from "@/components/FAQSection";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const HERO = "https://media.base44.com/images/public/6a4ee06353a79fd19b867c4a/8c3f8d48d_generated_10f07a8a.png";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "1801 Cross Beam Drive, Suite A\nCharlotte, NC 28217", href: "https://maps.google.com/?q=1801+Cross+Beam+Drive+Charlotte+NC+28217" },
  { icon: Phone, label: "Phone", value: "704-394-5097", href: "tel:7043945097" },
  { icon: MessageSquare, label: "Text", value: "980-265-3745", href: "sms:9802653745" },
  { icon: Mail, label: "Email", value: "information@tecelecllc.com", href: "mailto:information@tecelecllc.com" },
  { icon: Clock, label: "Hours", value: "Mon – Fri: 7:00 AM – 5:00 PM", href: null },
];

const faqs = [
  { q: "What areas does TEC Electric serve?", a: "TEC Electric serves businesses across North Carolina, South Carolina, Virginia, Georgia, Tennessee, and Alabama. Our primary office is in Charlotte, NC." },
  { q: "How quickly can I get a project estimate?", a: "We typically provide project estimates within 5-7 business days of an initial consultation, depending on project scope and complexity." },
  { q: "Does TEC Electric offer emergency services?", a: "Yes. For existing clients with service agreements, we offer priority emergency electrical service. Contact us directly for emergency assistance." },
  { q: "What information do I need for a quote?", a: "Project location, scope of work, timeline requirements, and any relevant blueprints or specifications will help us provide an accurate estimate." },
];

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", projectType: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast({ title: "Message Sent", description: "Thank you for reaching out. Our team will respond within 1-2 business days." });
      setForm({ firstName: "", lastName: "", email: "", phone: "", projectType: "", message: "" });
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-obsidian">
      <Navbar />
      <PageHero
        label="Contact Us"
        title="LET'S BUILD"
        titleAccent="TOGETHER"
        description="Ready to discuss your project? Contact us for a consultation and free estimate. Our team responds within 1-2 business days."
        image={HERO}
        ctaText="Call 704-394-5097"
        ctaLink="tel:7043945097"
      />

      {/* Contact Form + Info */}
      <section className="py-24 lg:py-32 bg-obsidian">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <SectionLabel number="01" text="Send a Message" />
              <h2 className="font-heading text-3xl md:text-4xl text-white uppercase mb-8">
                REQUEST A <span className="text-voltage">QUOTE</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-mono text-xs tracking-wider uppercase text-silver mb-2 block">First Name *</label>
                    <input
                      type="text"
                      required
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className="w-full bg-card border border-white/10 text-white px-4 py-3 text-sm focus:border-voltage focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs tracking-wider uppercase text-silver mb-2 block">Last Name *</label>
                    <input
                      type="text"
                      required
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      className="w-full bg-card border border-white/10 text-white px-4 py-3 text-sm focus:border-voltage focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-mono text-xs tracking-wider uppercase text-silver mb-2 block">Email *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-card border border-white/10 text-white px-4 py-3 text-sm focus:border-voltage focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs tracking-wider uppercase text-silver mb-2 block">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-card border border-white/10 text-white px-4 py-3 text-sm focus:border-voltage focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-mono text-xs tracking-wider uppercase text-silver mb-2 block">Project Type</label>
                  <select
                    value={form.projectType}
                    onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                    className="w-full bg-card border border-white/10 text-white px-4 py-3 text-sm focus:border-voltage focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="general">General Contracting</option>
                    <option value="electrical">Electrical Contracting</option>
                    <option value="lighting">Commercial Lighting</option>
                    <option value="subcontracting">Subcontracting</option>
                    <option value="maintenance">Maintenance & Service</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="font-mono text-xs tracking-wider uppercase text-silver mb-2 block">Project Details *</label>
                  <textarea
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-card border border-white/10 text-white px-4 py-3 text-sm focus:border-voltage focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project: location, scope, timeline, and any other relevant details..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-voltage text-obsidian py-4 font-bold uppercase tracking-wider text-sm hover:bg-amber-400 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {submitting ? "Sending..." : (<><Send className="w-4 h-4" /> Send Message</>)}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <SectionLabel number="02" text="Direct Contact" />
              <h3 className="font-heading text-2xl text-white uppercase mb-8">
                REACH <span className="text-voltage">US</span>
              </h3>
              <div className="space-y-6 mb-12">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-card border border-white/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-voltage" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] tracking-widest uppercase text-silver block mb-1">[ {item.label} ]</span>
                      {item.href ? (
                        <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-white text-sm hover:text-voltage transition-colors whitespace-pre-line">
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-white text-sm whitespace-pre-line">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Service Area */}
              <div className="bg-card border border-white/5 p-6">
                <span className="spec-label block mb-3">[ Service Area ]</span>
                <p className="text-silver text-sm leading-relaxed mb-4">
                  TEC Electric serves commercial clients across:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {["North Carolina", "South Carolina", "Virginia", "Georgia", "Tennessee", "Alabama"].map((state) => (
                    <div key={state} className="flex items-center gap-2 text-white text-sm">
                      <div className="w-1.5 h-1.5 bg-voltage rounded-full" />
                      {state}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px] bg-card border-t border-white/5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.123!2d-80.889!3d35.195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z35LCsDE0JzQyLjQiTiA4MMKwNTMnMTEuMyJX!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(1) invert(0.92) contrast(0.8)" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="TEC Electric Location"
        />
      </section>

      <FAQSection faqs={faqs} label="03" title="COMMON QUESTIONS" />
      <Footer />
    </div>
  );
}