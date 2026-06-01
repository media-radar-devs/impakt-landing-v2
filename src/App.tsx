import { useState } from 'react'
import { Ticker } from './components/Ticker'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Process } from './components/Process'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Ticker />
      <Nav onRequestAccess={() => setModalOpen(true)} />
      <main>
        <Hero onRequestAccess={() => setModalOpen(true)} />
        <Services />
        <Process />
        <Contact modalOpen={modalOpen} onModalClose={() => setModalOpen(false)} />
      </main>
      <Footer />
    </>
  )
}

export default App
