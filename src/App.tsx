import { useScrollReveal } from './hooks/useScrollReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Features from './components/Features'
import Lifestyle from './components/Lifestyle'
import Collection from './components/Collection'
import Ingredients from './components/Ingredients'
import Story from './components/Story'
import Faq from './components/Faq'
import Footer from './components/Footer'

function App() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Features />
        <Lifestyle />
        <Collection />
        <Ingredients />
        <Story />
        <Faq />
      </main>
      <Footer />
    </>
  )
}

export default App
