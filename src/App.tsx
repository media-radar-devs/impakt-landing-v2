import { Ticker } from './components/Ticker'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Process } from './components/Process'
import { Pricing } from './components/Pricing'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Ticker />
      <Nav />
      <main>
        <Hero />
        <Services />
        <Process />
        <Pricing />
      </main>
      <Footer />
    </>
  )
}

export default App
