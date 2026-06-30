import { ChevronDown, Menu, X } from 'lucide-react'
import { useState } from 'react'
import logo from '../assets/FullLogo_Transparent.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-[#142e1e] border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img
            src={logo}
            alt="GudMed"
            className="h-28 md:h-44 w-auto mt-6"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {['Nursing Notes', 'Consent Stock', 'Compliance'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="text-white/70 hover:text-white text-sm font-medium transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="bg-[#22c55e] hover:bg-[#16a34a] text-white text-sm font-semibold px-5 py-2 rounded-lg flex items-center gap-1.5 transition-colors">
            Request Demo
            <ChevronDown size={14} />
          </button>
        </div>

        <button className="md:hidden text-white/80" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0d1f15] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {['Nursing Notes', 'Consent Stock', 'Compliance'].map((link) => (
            <a key={link} href="#" className="text-white/70 text-sm font-medium">
              {link}
            </a>
          ))}
          <button className="bg-[#22c55e] text-white text-sm font-semibold px-5 py-2 rounded-lg w-full">
            Request Demo
          </button>
        </div>
      )}
    </nav>
  )
}
