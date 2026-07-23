import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectItem } from "@/components/ui/select";
import AmberButton from "@/components/ui/AmberButton";
import { CheckCircle2, Loader2, Upload, FileText } from "lucide-react";
import { COMPANY } from "@/lib/content";

const POSITIONS = ["Journeyman Electrician", "Apprentice Electrician", "Foreman", "Project Manager", "Estimator", "Field Superintendent", "Other"];

export default function ApplicationForm() {
  const [form, setForm] = useState({ first_name: "", last_name: "", email: "", phone: "", position: "", message: "", resume_url: "" });
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
      if (!file.type.match(/^(application\/pdf|application\/msword|application\/vnd\.openxmlformats-officedocument\.wordprocessingml\.document)$/)) {
        throw new Error("Please choose a PDF, DOC, or DOCX file.");
      }
      set("resume_url", URL.createObjectURL(file));
      setFileName(file.name);
    } catch (uploadError) {
      setError(uploadError.message || "Resume upload failed. Try again.");
    }
    setUploading(false);
  };

  const onDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    uploadFile(e.dataTransfer.files?.[0]);
  };

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.first_name.trim() || !form.last_name.trim() || !form.email.trim()) {
      setError("First name, last name, and email are required.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setStatus("loading");
    try {
      await new Promise((resolve) => window.setTimeout(resolve, 350));
      setStatus("done");
    } finally {
      setStatus((currentStatus) => currentStatus === "done" ? currentStatus : "idle");
    }
  };

  if (status === "done") {
    return (
      <div className="border border-amber/40 bg-amber/5 p-10 text-center">
        <CheckCircle2 className="w-12 h-12 text-amber mx-auto" />
        <h3 className="font-display font-bold text-2xl text-white mt-5">Application received</h3>
        <p className="text-white mt-3">Thanks, {form.first_name}. Our team reviews every application and will be in touch.</p>
      </div>
    );
  }

  const fieldCls = "block w-full bg-white/5 border-white/15 text-white placeholder:text-white focus-visible:ring-amber h-12";
  const labelCls = "text-white font-mono text-xs tracking-wider";

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label className={labelCls}>FIRST NAME *</Label>
          <Input className={fieldCls} value={form.first_name} onChange={(e) => set("first_name", e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label className={labelCls}>LAST NAME *</Label>
          <Input className={fieldCls} value={form.last_name} onChange={(e) => set("last_name", e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label className={labelCls}>EMAIL *</Label>
          <Input type="email" className={fieldCls} value={form.email} onChange={(e) => set("email", e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label className={labelCls}>PHONE</Label>
          <Input className={fieldCls} value={form.phone} onChange={(e) => set("phone", e.target.value)} />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label className={labelCls}>POSITION APPLYING FOR</Label>
          <Select className={fieldCls} value={form.position} onChange={(e) => set("position", e.target.value)}>
            <SelectItem value="">Select a role</SelectItem>
            {POSITIONS.map((p) => <SelectItem key={p} value={p}>{p}</SelectItem>)}
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label className={labelCls}>RESUME UPLOAD</Label>
        <div
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={onDrop}
          className={`flex flex-col items-center justify-center text-center gap-3 border-2 border-dashed p-8 transition-colors ${dragOver ? "border-amber bg-amber/5" : "border-white/20 hover:border-amber"}`}
        >
          {uploading ? <Loader2 className="w-8 h-8 text-amber animate-spin" /> : <Upload className="w-8 h-8 text-amber" />}
          <div>
            <p className="text-white text-sm font-medium">{fileName || "Drag & drop your resume here"}</p>
            <p className="text-white text-xs mt-1">PDF, DOC, or DOCX — or click to browse</p>
          </div>
          <input type="file" className="hidden" id="resume-upload" accept=".pdf,.doc,.docx" onChange={(e) => uploadFile(e.target.files?.[0])} />
          <label htmlFor="resume-upload" className="mt-2 font-mono text-xs text-amber border border-amber px-4 py-2 cursor-pointer hover:bg-amber hover:text-white transition-colors">CHOOSE FILE</label>
          {fileName && <span className="flex items-center gap-2 text-xs text-white"><FileText className="w-3.5 h-3.5" /> {fileName}</span>}
        </div>
      </div>

      <div className="space-y-2">
        <Label className={labelCls}>MESSAGE (OPTIONAL)</Label>
        <Textarea className="block w-full bg-white/5 border-white/15 text-white placeholder:text-white focus-visible:ring-amber min-h-28" value={form.message} onChange={(e) => set("message", e.target.value)} placeholder="Tell us about yourself…" />
      </div>
      {error && <p className="text-destructive text-sm">{error}</p>}
      <AmberButton size="lg" arrow={status !== "loading"} disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting…</> : "Submit Application"}
      </AmberButton>
      <p className="font-mono text-xs text-white">Submissions are reviewed by our HR team. You can also email {COMPANY.hr_email}.</p>
    </form>
  );
}