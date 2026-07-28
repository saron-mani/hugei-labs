import AppleButton from "./AppleButton"
import "./styles/Hero.css"

export default function Hero() {
    return(
        <section className="hero">
            <div className="big-font">
                <h1>WE <br/> TAKE <br/> CARE</h1>
                <p>THRISSUR IRINJALAKUDA ERNAKULAM KOTTAYAM</p>
                <hr />
                <AppleButton text="Call Us" to="tel:+91 8281 956 994" />
            </div>
            <div className="artwork">
                <img src="../src/assets/art-blood-test.svg" alt="artwork" />
            </div>
        </section>
    )
}