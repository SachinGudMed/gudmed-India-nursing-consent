import { Activity, Brain, ClipboardList, Globe, Users, Zap } from 'lucide-react'

const vitals = [
  { param: 'Blood Pressure', value: '128/82 mmHg', status: 'Normal', color: 'green' },
  { param: 'Heart Rate', value: '72 bpm', status: 'Normal', color: 'green' },
  { param: 'SpO2', value: '97%', status: 'Normal', color: 'green' },
  { param: 'Temperature', value: '37.8°C', status: 'Low Grade Fever', color: 'red' },
  { param: 'GCS Score', value: '14/15', status: 'Stable', color: 'blue' },
  { param: 'Pain Score', value: '3/10', status: 'Controlled', color: 'green' },
]

const statusColor = {
  green: 'bg-emerald-50 text-emerald-700',
  red: 'bg-red-50 text-red-600',
  blue: 'bg-blue-50 text-blue-700',
}

const features = [
  {
    icon: Zap,
    title: 'Automated Shift Notes',
    desc: 'AI generates comprehensive shift handover summaries from voice entries and structured data. No more blank-staring at free-text fields.',
  },
  {
    icon: Activity,
    title: 'ICU Scoring & Monitoring',
    desc: 'EEG, APACHE II, NEWS2 scores auto-calculated and charted. Early deterioration flagged. Physician alerts configured in real time.',
  },
  {
    icon: ClipboardList,
    title: 'Medication Administration Record',
    desc: 'MAR auto-populated from doctor\'s orders. Omission/eMAR status tracked. Overdue and missed alerts sent in real time.',
  },
  {
    icon: Users,
    title: 'Structured Shift Handover',
    desc: 'Nursing staff can handover in either language. Structured SBAR format handover — in under 2 minutes per patient.',
  },
  {
    icon: Globe,
    title: 'Arabic & English Interface',
    desc: 'Patient-facing documentation auto-translated. Multilingual support for UAE\'s diverse nursing workforce.',
  },
]

export default function NursingNotes() {
  return (
    <section id="nursing-notes" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <div className="text-xs font-bold text-[#22c55e] tracking-widest uppercase mb-3">
          AI Nursing Notes
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left — chart + note */}
          <div className="w-full lg:w-[45%] shrink-0">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
              Your Nurses Document Less. Care More.
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              GudMed captures vitals, observations, and nursing actions from structured input — generating compliant ward notes, ICU charts, and ICU scoring — structured and auto-summarised automatically.
            </p>

            {/* Nursing Chart Card */}
            <div className="rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-4">
              <div className="bg-[#142e1e] px-4 py-3 flex items-center justify-between">
                <div>
                  <div className="text-white text-xs font-bold">GudMed Nurse Chart — ICU Bed 4</div>
                </div>
                <div className="flex gap-2">
                  <span className="bg-[#22c55e] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    Completed
                  </span>
                  <span className="bg-white/20 text-white/60 text-[10px] font-medium px-2.5 py-0.5 rounded-full">
                    Not Started
                  </span>
                </div>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left text-xs font-semibold text-gray-500 px-4 py-2.5">Parameter</th>
                    <th className="text-left text-xs font-semibold text-gray-500 px-4 py-2.5">Reading</th>
                    <th className="text-left text-xs font-semibold text-gray-500 px-4 py-2.5">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {vitals.map((v, i) => (
                    <tr key={v.param} className={`border-b border-gray-50 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                      <td className="px-4 py-2.5 text-gray-700 text-xs font-medium">{v.param}</td>
                      <td className="px-4 py-2.5 text-gray-600 text-xs">{v.value}</td>
                      <td className="px-4 py-2.5">
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${statusColor[v.color]}`}>
                          {v.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* AI Shift Note */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
              <div className="flex items-center gap-2 mb-3">
                <Brain size={13} className="text-[#22c55e]" />
                <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">
                  AI Shift Note &nbsp;·&nbsp; Night Shift 20:00–08:00
                </span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Patient remained haemodynamically stable overnight. HR elevated at 88bpm — physician notified at 02:00. Temperature 37.8°C, monitoring protocols. All medications administered on schedule. IV site checked; no signs of infiltration. Patient comfortable, eating full handover documented for morning shift.
              </p>
            </div>
          </div>

          {/* Right — features */}
          <div className="flex-1 flex flex-col gap-6 pt-2">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="shrink-0 w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center mt-0.5">
                  <Icon size={17} className="text-[#22c55e]" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-sm mb-1">{title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
