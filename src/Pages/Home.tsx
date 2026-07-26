import Hero from "../../components/Hero"
import NavBar from "../../components/NavBar"
import PopularTests from "../../components/PopularTests"
import Faq from "../../components/Faq"
import HomeCollection from "../../components/HomeCollection"
import AboutSection from "../../components/AboutSection"
import Footer from "../../components/Footer"

export default function Home() {
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