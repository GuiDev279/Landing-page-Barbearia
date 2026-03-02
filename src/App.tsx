
import Header  from "./components/shared/Header"
import Footer from "./components/shared/Footer"
import { Hero } from "./components/Hero"
import { Services } from "./components/Services"
import { Contact } from "./components/Contact"
import WhatsAppButton from "./components/shared/WhatsAppButton"

function App() {
  
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <WhatsAppButton/>
        <Services />
        <Contact />
      </main>
      <Footer/>
    </div>
  )
}

export default App
