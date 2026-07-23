import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import AmberButton from "@/components/ui/AmberButton";
import { CheckCircle2, Loader2, Upload } from "lucide-react";

export default function SubcontractorForm() {
  const [form, setForm] = useState({ company_name: "", primary_contact: "", email: "", phone: "", trade: "", license_number: "", insurance_info: "", years_in_business: "", areas_served: "", message: "", file_url: "" });
  const [status, setStatus] = useState("idle");
  const [uploading, setUploading] = useState(false);
  const [fileName, setFileName] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState("");

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const uploadFile = async (file) => {
    if (!file) return;
    setUploading(true);
    setError("");
    try {
      const allowedTypes = /^(application\/pdf|application\/msword|application\/vnd\.openxmlformats-officedocument\.wordprocessingml\.document|image\/(png|jpe?g))$/;
      if (!allowedTypes.test(file.type)) {
        throw new Error("Please choose a PDF, DOC, DOCX, PNG, or JPG file.");
      }
      set("file_url", URL.createObjectURL(file));
      setFileName(file.name);
    } catch (uploadError) {
      setError(uploadError.message || "File upload failed. Try again.");
    }
    setUploading(false);
  };
  const onDrop = (e) => { e.preventDefault(); setDragOver(false); uploadFile(e.dataTransfer.files?.[0]); };

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.company_name.trim() || !form.primary_contact.trim() || !form.email.trim()) {
      setError("Company name, primary contact, and email are required.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setStatus("loading");
    await new Promise((resolve) => window.setTimeout(resolve, 350));
    setStatus("done");
  };

  if (status === "done") {
    return (
      <div className="border border-amber/40 bg-amber/5 p-10 text-center">
        <CheckCircle2 className="w-12 h-12 text-amber mx-auto" />
        <h3 className="font-display font-bold text-2xl text-white mt-5">Prequalification submitted</h3>
        <p className="text-white mt-3">Thank you, {form.primary_contact}. Our procurement team will review your submission and be in touch.</p>
      </div>
    );
  }

  const fieldCls = "block w-full bg-white/5 border-white/15 text-white placeholder:text-white focus-visible:ring-amber h-12";
  const labelCls = "text-white font-mono text-xs tracking-wider";

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2 md:col-span-2">
          <Label className={labelCls}>COMPANY NAME *</Label>
          <Input className={fieldCls} value={form.company_name} onChange={(e) => set("company_name", e.target.value)} placeholder="Acme Electrical LLC" />
        </div>
        <div className="space-y-2">
          <Label className={labelCls}>PRIMARY CONTACT *</Label>
          <Input className={fieldCls} value={form.primary_contact} onChange={(e) => set("primary_contact", e.target.value)} placeholder="Jane Doe" />
        </div>
        <div className="space-y-2">
          <Label className={labelCls}>EMAIL *</Label>
          <Input type="email" className={fieldCls} value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="jane@acme.com" />
        </div>
        <div className="space-y-2">
          <Label className={labelCls}>PHONE</Label>
          <Input className={fieldCls} value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="(555) 000-0000" />
        </div>
        <div className="space-y-2">
          <Label className={labelCls}>TRADE</Label>
          <Input className={fieldCls} value={form.trade} onChange={(e) => set("trade", e.target.value)} placeholder="e.g. Electrical" />
        </div>
        <div className="space-y-2">
          <Label className={labelCls}>LICENSE NUMBER</Label>
          <Input className={fieldCls} value={form.license_number} onChange={(e) => set("license_number", e.target.value)} placeholder="TX LIC #" />
        </div>
        <div className="space-y-2">
          <Label className={labelCls}>YEARS IN BUSINESS</Label>
          <Input className={fieldCls} value={form.years_in_business} onChange={(e) => set("years_in_business", e.target.value)} placeholder="e.g. 12" />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label className={labelCls}>INSURANCE INFORMATION</Label>
          <Input className={fieldCls} value={form.insurance_info} onChange={(e) => set("insurance_info", e.target.value)} placeholder="Carrier, general liability limits, policy #" />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label className={labelCls}>AREAS SERVED</Label>
          <Input className={fieldCls} value={form.areas_served} onChange={(e) => set("areas_served", e.target.value)} placeholder="e.g. Austin, San Antonio, Central TX" />
        </div>
      </div>

      <div className="space-y-2">
        <Label className={labelCls}>SUPPORTING DOCUMENTS (W9, INSURANCE CERT, ETC.)</Label>
        <div
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={onDrop}
          className={`flex flex-col items-center justify-center text-center gap-3 border-2 border-dashed p-8 transition-colors ${dragOver ? "border-amber bg-amber/5" : "border-white/20 hover:border-amber"}`}
        >
          {uploading ? <Loader2 className="w-8 h-8 text-amber animate-spin" /> : <Upload className="w-8 h-8 text-amber" />}
          <div>
            <p className="text-white text-sm font-medium">{fileName || "Drag & drop documents here"}</p>
            <p className="text-white text-xs mt-1">PDF, DOC, or image — or click to browse</p>
          </div>
          <input type="file" className="hidden" id="sub-upload" accept=".pdf,.doc,.docx,.png,.jpg,.jpeg" onChange={(e) => uploadFile(e.target.files?.[0])} />
          <label htmlFor="sub-upload" className="mt-2 font-mono text-xs text-amber border border-amber px-4 py-2 cursor-pointer hover:bg-amber hover:text-white transition-colors">CHOOSE FILE</label>
        </div>
      </div>

      <div className="space-y-2">
        <Label className={labelCls}>MESSAGE (OPTIONAL)</Label>
        <Textarea className="block w-full bg-white/5 border-white/15 text-white placeholder:text-white focus-visible:ring-amber min-h-24" value={form.message} onChange={(e) => set("message", e.target.value)} placeholder="Tell us about your capacity and capabilities…" />
      </div>
      {error && <p className="text-destructive text-sm">{error}</p>}
      <AmberButton size="lg" arrow={status !== "loading"} disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting…</> : "Submit Prequalification"}
      </AmberButton>
    </form>
  );
}