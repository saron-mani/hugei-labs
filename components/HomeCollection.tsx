
import './styles/HomeCollection.css';
import AppleButton from './AppleButton';
import HomeCollectionArt from "../public/home-collection-art.svg"
// import { ReactComponent as HomeCollectionImg } from './assets/home-collection.svg'; 

const HomeCollection = () => {
  return (
    <section id="HomeCollection" className="home-collection-section">
      <div className="home-collection-container">

        {/* Left Side: SVG Artwork */}
        <div className="home-collection-artwork">
            <img src={HomeCollectionArt} alt="home collection" />
        </div>

        {/* Right Side: Text and Call to Action */}
        <div className="home-collection-content">
          <h2>Home Sample Collection</h2>
          <p>
            Get tested from the comfort and safety of your home. Our certified 
            professionals ensure a quick, hygienic, and hassle-free sample 
            collection process at your doorstep.
          </p>
          
          <ul className="benefits-list">
            <li>
              <span className="checkmark">✓</span> Flexible scheduling
            </li>
            <li>
              <span className="checkmark">✓</span> Strict hygiene protocols
            </li>
            <li>
              <span className="checkmark">✓</span> Accurate, timely online reports
            </li>
          </ul>
          <AppleButton text="Book a Home Visit" to="#contact" />
        </div>

      </div>
    </section>
  );
};

export default HomeCollection;