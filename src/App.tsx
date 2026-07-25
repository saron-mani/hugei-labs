import Hero from "../components/Hero"
import NavBar from "../components/NavBar"
import PopularTests from "../components/PopularTests"
import Faq from "../components/Faq"
import HomeCollection from "../components/HomeCollection"
import AboutSection from "../components/AboutSection"
import Footer from "../components/Footer"
import "./App.css"

export default function App() {
  return(
  <>
    <NavBar />
    <Hero />
    <PopularTests />
    <Faq />
    <HomeCollection />
    <AboutSection />
    <Footer />
  </>
)
}