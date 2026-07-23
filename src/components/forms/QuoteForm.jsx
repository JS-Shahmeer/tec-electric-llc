import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectItem } from "@/components/ui/select";
import AmberButton from "@/components/ui/AmberButton";
import { CheckCircle2, Loader2 } from "lucide-react";
import { CAPABILITIES, INDUSTRIES } from "@/lib/content";

export default function QuoteForm() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", service: "", industry: "", project_location: "", budget_range: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.name.trim() || !form.email.trim()) { setError("Name and email are required."); return; }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) { setError("Please enter a valid email address."); return; }
    setStatus("loading");
    await new Promise((resolve) => window.setTimeout(resolve, 350));
    setStatus("done");
  };

  if (status === "done") {
    return (
      <div className="border border-amber/40 bg-amber/5 p-10 text-center">
        <CheckCircle2 className="w-12 h-12 text-amber mx-auto" />
        <h3 className="font-display font-bold text-2xl text-white mt-5">Request received</h3>
        <p className="text-galvanized mt-3">Thank you, {form.name.split(" ")[0]}. A project manager will reach out within one business day.</p>
      </div>
    );
  }

  const fieldCls = "block w-full bg-white/5 border-white/15 text-white placeholder:text-galvanized focus-visible:ring-amber h-12";

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label className="text-galvanized font-mono text-xs tracking-wider">NAME *</Label>
          <Input className={fieldCls} value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Jane Doe" />
        </div>
        <div className="space-y-2">
          <Label className="text-galvanized font-mono text-xs tracking-wider">COMPANY</Label>
          <Input className={fieldCls} value={form.company} onChange={(e) => set("company", e.target.value)} placeholder="Acme Development" />
        </div>
        <div className="space-y-2">
          <Label className="text-galvanized font-mono text-xs tracking-wider">EMAIL *</Label>
          <Input type="email" className={fieldCls} value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="jane@acme.com" />
        </div>
        <div className="space-y-2">
          <Label className="text-galvanized font-mono text-xs tracking-wider">PHONE</Label>
          <Input className={fieldCls} value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="(555) 000-0000" />
        </div>
        <div className="space-y-2">
          <Label className="text-galvanized font-mono text-xs tracking-wider">SERVICE NEEDED</Label>
          <Select className={fieldCls} value={form.service} onChange={(e) => set("service", e.target.value)}>
            <SelectItem value="">Select a service</SelectItem>
            {CAPABILITIES.map((c) => <SelectItem key={c.slug} value={c.title}>{c.title}</SelectItem>)}
          </Select>
        </div>
        <div className="space-y-2">
          <Label className="text-galvanized font-mono text-xs tracking-wider">INDUSTRY</Label>
          <Select className={fieldCls} value={form.industry} onChange={(e) => set("industry", e.target.value)}>
            <SelectItem value="">Select industry</SelectItem>
            {INDUSTRIES.map((c) => <SelectItem key={c.name} value={c.name}>{c.name}</SelectItem>)}
          </Select>
        </div>
        <div className="space-y-2">
          <Label className="text-galvanized font-mono text-xs tracking-wider">PROJECT LOCATION</Label>
          <Input className={fieldCls} value={form.project_location} onChange={(e) => set("project_location", e.target.value)} placeholder="City, State" />
        </div>
        <div className="space-y-2">
          <Label className="text-galvanized font-mono text-xs tracking-wider">ESTIMATED BUDGET</Label>
          <Select className={fieldCls} value={form.budget_range} onChange={(e) => set("budget_range", e.target.value)}>
            <SelectItem value="">Select range</SelectItem>
              {["Under $100K", "$100K – $500K", "$500K – $1M", "$1M – $5M", "$5M+"].map((b) => <SelectItem key={b} value={b}>{b}</SelectItem>)}
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <Label className="text-galvanized font-mono text-xs tracking-wider">PROJECT DETAILS</Label>
        <Textarea className="block w-full bg-white/5 border-white/15 text-white placeholder:text-galvanized focus-visible:ring-amber min-h-32" value={form.message} onChange={(e) => set("message", e.target.value)} placeholder="Tell us about scope, timeline, and objectives…" />
      </div>
      {error && <p className="text-destructive text-sm">{error}</p>}
      <AmberButton size="lg" arrow={status !== "loading"} disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</> : "Submit Request"}
      </AmberButton>
    </form>
  );
}