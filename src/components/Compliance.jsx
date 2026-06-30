import { Award, Building2, Database, Globe, Lock, ShieldCheck } from 'lucide-react'

const items = [
  {
    icon: Building2,
    title: 'DHA Dubai Standards',
    desc: 'Nursing documentation structured to meet DHA clinical record standards. Mandatory fields auto-completed. Zero compliance gaps.',
    badge: 'DHA Compliant',
    badgeColor: 'bg-blue-500',
  },
  {
    icon: Globe,
    title: 'HAAD / DOH Abu Dhabi',
    desc: 'All nursing records and consent forms align with Abu Dhabi Health Authority standards for Emirate healthcare facilities.',
    badge: 'HAAD Compliant',
    badgeColor: 'bg-purple-500',
  },
  {
    icon: Award,
    title: 'JCI Accreditation',
    desc: 'Nursing documentation supports all JCI Chapter of Patient care requirements. Audit evidence generated in one click.',
    badge: 'JCI Ready',
    badgeColor: 'bg-amber-500',
  },
  {
    icon: Lock,
    title: 'UAE Federal Health Law',
    desc: 'Digital records and digital signatures comply with UAE Federal Law No. 2/2019. e-signatures legally binding in UAE Electronic Transactions Law.',
    badge: 'Legally Compliant',
    badgeColor: 'bg-rose-500',
  },
  {
    icon: Database,
    title: 'UAE Data Sovereignty',
    desc: 'All clinical and consent data stored within UAE borders on government-approved secure servers. Patient data never leaves the Emirates.',
    badge: 'Data Sovereign',
    badgeColor: 'bg-teal-500',
  },
  {
    icon: ShieldCheck,
    title: 'NABIDH Integration',
    desc: 'Nursing records and consent summaries pushed to NABIDH automatically. Cross-facility visibility enabled. Patient-centric health record always current.',
    badge: 'NABIDH Connected',
    badgeColor: 'bg-emerald-500',
  },
]

export default function Compliance() {
  return (
    <section id="compliance" className="bg-[#0d1f15] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-xs font-bold text-[#4ade80] tracking-widest uppercase mb-4">
          Regulatory Compliance
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight max-w-lg">
            Built to Pass Every UAE Audit
          </h2>
          <p className="text-white/50 text-sm leading-relaxed max-w-sm">
            Not a compliance add-on. Nursing and consent management designed around DHA, HAAD, and JCI requirements — not retrofitted to them.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ icon: Icon, title, desc, badge, badgeColor }) => (
            <div
              key={title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-[#22c55e]/20 transition-colors">
                <Icon size={18} className="text-[#4ade80]" />
              </div>
              <h3 className="text-white font-bold text-sm mb-2">{title}</h3>
              <p className="text-white/50 text-xs leading-relaxed mb-4">{desc}</p>
              <span className={`inline-block ${badgeColor} text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full`}>
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
