const links = {
  Product: ['AI Nursing Notes', 'Consent Digitisation', 'ICU Monitoring', 'Shift Handover'],
  Compliance: ['DHA Standards', 'HAAD / DOH', 'JCI Accreditation', 'NABIDH'],
  Company: ['About GudMed', 'Contact Us', 'Privacy Policy', 'Terms of Use'],
}

export default function Footer() {
  return (
    <footer className="bg-[#060e0a] border-t border-white/10 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-baseline gap-0 mb-3">
              <span className="text-xl font-black text-amber-400 tracking-tight">Gud</span>
              <span className="text-xl font-black text-white tracking-tight">Med</span>
            </div>
            <p className="text-white/40 text-xs leading-relaxed mb-4">
              AI-powered nursing documentation and consent management for UAE hospitals.
            </p>
            <div className="text-white/30 text-[10px]">HealthCare SimpleMed</div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <div className="text-[10px] font-bold text-white/40 tracking-widest uppercase mb-4">{group}</div>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/50 hover:text-white/80 text-xs transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/30 text-xs">
            © 2025 GudMed. All rights reserved. Serving UAE healthcare since 2022.
          </div>
          <div className="flex gap-4 text-white/30 text-xs">
            <span>DHA Registered</span>
            <span>·</span>
            <span>JCI Aligned</span>
            <span>·</span>
            <span>NABIDH Connected</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
