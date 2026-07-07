import Navbar from './components/Navbar'
import Hero from './components/Hero'
import NursingNotes from './components/NursingNotes'
import ConsentSection from './components/ConsentSection'
import Compliance from './components/Compliance'
import Integration from './components/Integration'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import DemoModal from './components/DemoModal'

export default function App() {
  
  return (
    <div className="min-h-screen">
      <DemoModal />
      <Navbar />
      <Hero />
      <NursingNotes />
      <ConsentSection />
      <Compliance />
      <Integration />
      <CTASection />
      <Footer />
    </div>
  )
}
