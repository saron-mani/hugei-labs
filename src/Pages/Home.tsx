import { useLayoutEffect } from "react"
import Hero from "../../components/Hero"
import NavBar from "../../components/NavBar"
import PopularTests from "../../components/PopularTests"
import Faq from "../../components/Faq"
import HomeCollection from "../../components/HomeCollection"
import AboutSection from "../../components/AboutSection"
import Footer from "../../components/Footer"

export default function Home() {

useLayoutEffect(() => {
    // 2. Temporarily turn off CSS smooth scrolling so the jump is instant
    document.documentElement.style.scrollBehavior = 'auto';

    // 3. Jump down instantly BEFORE the user ever sees the screen
    window.scrollTo({
      top: window.innerHeight / 1.5, 
      behavior: 'auto' 
    });

    // 4. Wait a fraction of a second, restore CSS, and smooth scroll up
    const scrollTimer = setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'smooth';
      
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 50); // Lowered to 50ms for a snappier start

    return () => {
      clearTimeout(scrollTimer);
      // Ensure smooth scroll is turned back on if the component unmounts early
      document.documentElement.style.scrollBehavior = 'smooth'; 
    };
  }, []);

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