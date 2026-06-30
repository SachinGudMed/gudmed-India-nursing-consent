import { ArrowRight, Sparkles } from 'lucide-react'

const stats = [
  { value: '3 hrs', label: 'Daily nursing documentation saved per ward' },
  { value: '100%', label: 'Consent forms digitised & signed' },
  { value: 'Zero', label: 'Lost or misplaced consent forms' },
  { value: 'JCI', label: 'Audit ready at all times' },
]

export default function Hero() {
  return (
    <section className="bg-[#142e1e] text-white">
      {/* Main hero content */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-8">
          <Sparkles size={13} className="text-[#4ade80]" />
          <span className="text-xs font-medium text-white/80 tracking-wide">
            AI Clinical Documentation &nbsp;·&nbsp; Dubai & Middle East
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6 max-w-3xl">
          Nursing Notes &amp; Consent Forms.{' '}
          <span className="text-[#4ade80] italic">Automated.</span>
        </h1>

        <p className="text-white/60 text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
          GudMed eliminates the two biggest documentation burdens in UAE hospital wards — nursing shift notes and consent form management — with AI that works in the background while your staff focuses on patients.
        </p>

        {/* Product cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-10 max-w-3xl">
          <div className="bg-white/8 border border-white/12 rounded-2xl p-5 hover:bg-white/12 transition-colors">
            <div className="text-[10px] font-bold text-[#4ade80] tracking-widest mb-2 uppercase">Product 1</div>
            <h3 className="text-white font-bold text-base mb-2">AI Nursing Notes &amp; ICU Charts</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Auto-generates shift notes with symptoms, vitals, medication administration records, and ICU scoring — structured and DHA-compliant.
            </p>
          </div>
          <div className="bg-white/8 border border-white/12 rounded-2xl p-5 hover:bg-white/12 transition-colors">
            <div className="text-[10px] font-bold text-[#4ade80] tracking-widest mb-2 uppercase">Product 2</div>
            <h3 className="text-white font-bold text-base mb-2">Consent Form Digitisation</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              All surgical, anaesthesia and procedural consent forms go digital — Arabic &amp; English, e-signed, biometrically verified, audit-ready.
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <button className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors shadow-lg shadow-green-900/40">
            Get a Live Demo
          </button>
          <button className="flex items-center gap-2 text-white/70 hover:text-white font-medium px-6 py-3 rounded-xl text-sm border border-white/15 hover:border-white/30 transition-colors">
            Explore Features <ArrowRight size={15} />
          </button>
        </div>
      </div>

      {/* Stats bar */}
      <div className="border-t border-white/10 bg-[#0d1f15]">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {stats.map((s) => (
            <div key={s.value} className="px-6 first:pl-0 last:pr-0">
              <div className="text-2xl md:text-3xl font-black text-[#4ade80] mb-1">{s.value}</div>
              <div className="text-white/50 text-xs leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
