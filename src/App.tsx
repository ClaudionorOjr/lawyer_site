import { Home } from './pages/Home'
import { About } from './pages/About'
import { ContactForm } from './pages/Services'
import { Footer } from './pages/Footer'
import { Navbar } from './components/Navbar'

import './styles/global.scss'

function App() {
  return (
    <>
      <Home />
      <About />
      <ContactForm />
      <Footer />
      <Navbar />
    </>
  )
}

export default App
