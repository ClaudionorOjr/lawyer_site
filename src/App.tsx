import { Home } from './pages/Home'
import { About } from './pages/About'
import { ContactForm } from './pages/Services'

import './styles/global.scss'
import { Footer } from './pages/Footer'
import { Navbar } from './components/Navbar'
import { WhatsappButton } from './components/WhatsappButton'

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
