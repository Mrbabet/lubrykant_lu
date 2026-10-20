import { useScrollReveal } from './hooks/useScrollReveal'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MobileBuyBar from './components/MobileBuyBar'
import { matchRoute } from './routes'

export default function App({ pathname }: { pathname: string }) {
  useScrollReveal()
  const route = matchRoute(pathname)

  return (
    <>
      <Navbar />
      <main>{route.element}</main>
      <Footer />
      <MobileBuyBar pathname={pathname} />
    </>
  )
}
