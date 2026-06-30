import { ArrowRight, Mail, Phone } from 'lucide-react'

const bottomStats = [
  { value: '3 hrs', label: 'Nursing time saved per ward daily' },
  { value: 'Zero', label: 'Lost or misplaced consent forms' },
  { value: '100%', label: 'Audit trail completeness' },
  { value: '14 days', label: 'To go live in your hospital' },
]

export default function CTASection() {
  return (
    <>
      {/* Stats row */}
      <section className="bg-[#142e1e] py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {bottomStats.map((s) => (
            <div key={s.value} className="px-6 first:pl-0 last:pr-0 text-center">
              <div className="text-2xl md:text-3xl font-black text-[#4ade80] mb-1">{s.value}</div>
              <div className="text-white/50 text-xs leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0d1f15] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
            Ready to See It in Your Hospital?
          </h2>
          <p className="text-white/50 text-sm leading-relaxed mb-10">
            Book a live demo with our Dubai clinical team. We'll demonstrate nursing notes and consent digitisation with your own clinical scenarios.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-10"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#22c55e] transition-colors"
            />
            <button
              type="submit"
              className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold px-6 py-3 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
            >
              Request Demo <ArrowRight size={15} />
            </button>
          </form>

          <div className="flex flex-wrap items-center justify-center gap-6 text-white/40 text-xs">
            <a href="mailto:Raees.bajaj@gudmed.in" className="flex items-center gap-1.5 hover:text-white/70 transition-colors">
              <Mail size={13} />
              Raees.bajaj@gudmed.in
            </a>
            <a href="tel:+971529422420" className="flex items-center gap-1.5 hover:text-white/70 transition-colors">
              <Phone size={13} />
              +971 529 422 420
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
