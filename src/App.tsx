import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Ticker } from './components/Ticker'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Process } from './components/Process'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { TermsOfUse } from './pages/TermsOfUse'
import { PrivacyPolicy } from './pages/PrivacyPolicy'

function Landing() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <a href="#main-content" className="skip-link">Saltar al contenido</a>
      <Ticker />
      <Nav onRequestAccess={() => setModalOpen(true)} />
      <main id="main-content">
        <Hero onRequestAccess={() => setModalOpen(true)} />
        <Services />
        <Process />
        <Contact modalOpen={modalOpen} onModalClose={() => setModalOpen(false)} />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/terminos-de-uso" element={<TermsOfUse />} />
      <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
    </Routes>
  )
}

export default App
