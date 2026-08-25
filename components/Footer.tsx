
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="lab-footer">
{/*      <div className="brand-section">
          <h3 className="footer-brand">Central Laboratories</h3>
        </div>*/}
      <div className="footer-container">
        
        {/* Column 1: Brand Info */}

        {/* Column 3: Locations */}
        <div className="footer-section locations-section">
          <h4>Our Socials</h4>
          <ul>
            <li><a target="_blank" href="https://www.linkedin.com/in/saron-mani">LinkedIn</a></li>
            <li><a target="_blank" href="https://www.instagram.com/saronmani_/">Instagram</a></li>
            <li><a target="_blank" href="#">Youtube</a></li>
            <li><a target="_blank" href="mailto:tosaronmani@gmail.com">Mail</a></li>
          </ul>
        </div>

        {/* Column 2: Navigation */}
        <div className="footer-section links-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Packages</a></li>
            <li><a href="/">Gallery</a></li>
            <li><a href="/">Location</a></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="footer-section contact-section">
          <h4>Contact Us</h4>
          <p>☎️ <a href='tel:0000000000'>0000 000000</a></p>
          <p>📞 <a href='tel:0000000000'>0000 000 000</a></p>
          <p>✉️ <a href="mailto:tosaronmani@gmail.com">tosaronmani@gmail.com</a></p>
          <p>📍 Head Office, Hugei Labs, <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ABCDEF Building, <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KERALA 000000</p>
        </div>

      </div>
      
      {/* Copyright Bar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} <a href="https://www.linkedin.com/in/saron-mani">Saron Mani</a>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;