
import Header  from "./components/shared/Header"
import Footer from "./components/shared/Footer"
import HeroPage from "./components/Hero"
import { Services } from "./components/Services"
import { Contact } from "./components/Contact"

function App() {
  
  return (
    <div>
      <Header />
      <main>
        <HeroPage />
        <Services />
        <Contact />
      </main>
      <Footer/>
    </div>
  )
}

export default App
