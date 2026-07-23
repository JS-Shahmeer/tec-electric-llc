import React from 'react'
import { ShieldCheck, Sparkles, Globe } from 'lucide-react'

const TRUST_ITEMS = [
  { icon: ShieldCheck, label: 'HIPAA-compliant platform' },
  { icon: Sparkles, label: 'Secure patient data' },
  { icon: Globe, label: 'Care access across devices' },
]

export default function TrustBar() {
  return (
    <section className="bg-slate-950 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {TRUST_ITEMS.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <Icon className="h-7 w-7" />
                </div>
                <p className="text-sm font-semibold text-slate-100">{item.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
