import "./styles/Hero.css"

export default function Hero() {
    return(
        <section className="hero">
            <div className="big-font">
                <img src="../src/assets/name-img.png" alt="name" />
                <h1>WE <br/> TAKE <br/> CARE</h1>
                <p>THRISSUR IRINJALAKUDA ERNAKULAM KOTTAYAM</p>
                <button className="cta-btn">Call Us</button>
            </div>
            <div className="artwork">
                <img src="../src/assets/art-blood-test.svg" alt="artwork" />
            </div>
        </section>
    )
}