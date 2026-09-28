import { useScrollReveal } from './hooks/useScrollReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Features from './components/Features'
import Lifestyle from './components/Lifestyle'
import Collection from './components/Collection'
import Ingredients from './components/Ingredients'
import Testimonials from './components/Testimonials'
import Story from './components/Story'
import Newsletter from './components/Newsletter'
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
        <Testimonials />
        <Story />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}

export default App
